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
import { OPENAI_API_KEY } from 'astro:env/server';
import { searchExcursions, checkExcursionAvailability } from '@/lib/server/excursions';

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
  errorCode?: string;
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
  dateHint: string | null;
} {
  const lower = userMessage.toLowerCase();

  // Extract participant count - handle "X adults and Y child/children" format
  let participantCount = 1;
  
  // Try "X adults and Y child/children" pattern
  const adultsChildrenMatch = userMessage.match(/(\d+)\s*adults?\s+and\s+(\d+)\s*children?/i);
  if (adultsChildrenMatch) {
    const adults = parseInt(adultsChildrenMatch[1], 10);
    const children = parseInt(adultsChildrenMatch[2], 10);
    participantCount = adults + children;
  } else {
    // Fallback to "X people/persons/guests" pattern
    const participantMatch = userMessage.match(/(\d+)\s*(people|persons|guests|participants|travelers)/i);
    if (participantMatch) {
      participantCount = parseInt(participantMatch[1], 10);
    }
  }

  // Extract date hints
  let dateHint = null;
  if (lower.includes('tomorrow')) {
    dateHint = 'tomorrow';
  } else if (lower.includes('today')) {
    dateHint = 'today';
  } else if (lower.includes('next week')) {
    dateHint = 'next week';
  }

  // Extract interests/keywords - expanded list including boat/cruise/sea
  const interests: string[] = [];
  const keywords = [
    'culture', 'heritage', 'history',
    'beach', 'swimming', 'water', 'sailing', 'yacht', 'boat', 'cruise', 'sea',
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

  // Build search query from interests
  let searchQuery = userMessage;
  if (interests.length > 0) {
    searchQuery = interests.join(' ');
  }

  return { searchQuery, participantCount, interests, dateHint };
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
    // Retrieve OpenAI API key from server-side environment variable
    if (!OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not configured');
      return new Response(
        JSON.stringify({
          error: 'AI service not configured',
          errorCode: 'CONFIG_MISSING',
        } as AssistantResponse),
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
        JSON.stringify({
          error: 'Invalid message',
          errorCode: 'INVALID_INPUT',
        } as AssistantResponse),
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

    // Call OpenAI API using Responses API (cost-efficient)
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      console.error('OpenAI API error:', openaiResponse.status, errorText);
      return new Response(
        JSON.stringify({
          error: 'AI service temporarily unavailable',
          errorCode: 'OPENAI_REQUEST_FAILED',
        } as AssistantResponse),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const aiResponse = await openaiResponse.json() as {
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
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({
        error: 'An error occurred processing your request',
        errorCode: 'OPENAI_REQUEST_FAILED',
      } as AssistantResponse),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
