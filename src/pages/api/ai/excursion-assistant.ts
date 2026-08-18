/**
 * AI Excursion Booking Assistant API
 * PILOT SECURITY RULES:
 * - READ-ONLY: AI can only search and recommend excursions
 * - NO MODIFICATIONS: AI cannot create, modify, or cancel bookings
 * - NO PAYMENTS: AI cannot process payments or checkout
 * - RECOMMENDATIONS ONLY: AI provides deep-links to existing booking flow
 * - SERVER-SIDE ONLY: API key never exposed to client
 */

import type { APIRoute } from 'astro';
import { searchExcursions, checkExcursionAvailability } from '@/lib/server/excursions';

const OPENAI_API_KEY = import.meta.env.OPENAI_API_KEY;
const MAX_CONVERSATION_HISTORY = 10;
const MAX_INPUT_LENGTH = 500;

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

type Recommendation = {
  id: string;
  name: string;
  description: string;
  bookingUrl: string;
  nextAvailableDate: string | null;
  hasAvailability: boolean;
};

type AssistantResponse = {
  reply: string;
  recommendations: Recommendation[];
  error?: string;
};

function validateInput(input: string): boolean {
  if (!input || typeof input !== 'string') return false;
  if (input.trim().length === 0) return false;
  if (input.length > MAX_INPUT_LENGTH) return false;
  return true;
}

function extractIntents(userMessage: string): {
  searchQuery: string;
  participantCount: number;
  interests: string[];
} {
  const lower = userMessage.toLowerCase();

  // Extract participant count
  const participantMatch = userMessage.match(/(\d+)\s*(people|persons|guests|participants|travelers)/i);
  const participantCount = participantMatch ? parseInt(participantMatch[1], 10) : 1;

  // Extract interests/keywords
  const interests: string[] = [];
  const keywords = [
    'culture', 'heritage', 'history',
    'beach', 'swimming', 'water', 'sailing', 'yacht',
    'food', 'gastronomy', 'dining', 'wine',
    'nature', 'hiking', 'adventure', 'outdoor',
    'wellness', 'spa', 'relaxation',
    'shopping', 'market',
  ];

  keywords.forEach((keyword) => {
    if (lower.includes(keyword)) {
      interests.push(keyword);
    }
  });

  // Build search query
  let searchQuery = userMessage;
  if (interests.length > 0) {
    searchQuery = interests.join(' ');
  }

  return { searchQuery, participantCount, interests };
}

async function buildAssistantPrompt(
  userMessage: string,
  conversationHistory: Message[],
  recommendations: Recommendation[]
): Promise<string> {
  const recommendationsText = recommendations.length > 0
    ? `\n\nAvailable excursions to recommend:\n${recommendations
        .map(
          (rec) => `- ${rec.name}: ${rec.description}\n  Booking: ${rec.bookingUrl}\n  Next available: ${rec.nextAvailableDate || 'Check availability'}`,
        )
        .join('\n')}`
    : '\n\nNo excursions found matching the criteria.';

  const historyText = conversationHistory
    .slice(-MAX_CONVERSATION_HISTORY)
    .map((msg) => `${msg.role === 'user' ? 'Customer' : 'Assistant'}: ${msg.content}`)
    .join('\n');

  return `You are a professional, friendly travel concierge assistant for Top Euro Travel, a destination management company in Rhodes and Kos, Greece.

Your role:
- Help customers discover and book excursions
- Provide recommendations based on their interests, group size, and preferences
- Be warm, professional, and knowledgeable about local experiences
- Recommend max 3 excursions per response
- Always provide booking links for customers to complete their reservations

IMPORTANT SECURITY RULES (PILOT):
- You are READ-ONLY: You can only search and recommend excursions
- You CANNOT create, modify, or cancel bookings
- You CANNOT process payments
- You MUST provide booking URLs for customers to complete reservations themselves
- Always direct customers to the booking flow for final confirmation

Conversation history:
${historyText}

Available excursions to recommend:${recommendationsText}

Customer's latest message: "${userMessage}"

Respond in a warm, professional tone. Keep responses concise (2-3 sentences). If recommending excursions, include the booking links. Always be helpful and encourage customers to book through the provided links.`;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Validate API key
    if (!OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse request
    const body = await request.json() as {
      message?: string;
      conversationHistory?: Message[];
    };

    const userMessage = body.message?.trim();
    const conversationHistory = Array.isArray(body.conversationHistory) ? body.conversationHistory : [];

    // Validate input
    if (!validateInput(userMessage)) {
      return new Response(
        JSON.stringify({ error: 'Invalid message' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Extract intents and search for excursions
    const { searchQuery, participantCount, interests } = extractIntents(userMessage);
    const matches = await searchExcursions(searchQuery || interests.join(' ') || 'excursion');

    // Check availability for each match
    const recommendations: Recommendation[] = [];
    for (const match of matches) {
      const availability = await checkExcursionAvailability(match.id);
      recommendations.push({
        id: match.id,
        name: match.name,
        description: match.description,
        bookingUrl: match.bookingUrl,
        nextAvailableDate: availability.nextAvailableDate,
        hasAvailability: availability.hasAvailability,
      });
    }

    // Build prompt for OpenAI
    const systemPrompt = await buildAssistantPrompt(userMessage, conversationHistory, recommendations);

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          ...conversationHistory.slice(-MAX_CONVERSATION_HISTORY),
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.7,
        max_tokens: 300,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenAI API error:', error);
      return new Response(
        JSON.stringify({ error: 'AI service temporarily unavailable' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const aiResponse = await response.json() as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const assistantMessage = aiResponse.choices?.[0]?.message?.content || 'I apologize, I could not generate a response.';

    const result: AssistantResponse = {
      reply: assistantMessage,
      recommendations,
    };

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Excursion assistant error:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred processing your request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
