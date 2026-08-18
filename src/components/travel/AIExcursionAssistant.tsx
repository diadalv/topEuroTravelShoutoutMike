/**
 * AI Excursion Booking Assistant Component
 * Premium concierge interface for discovering and booking excursions
 * PILOT: Read-only, recommendations only, no booking modifications
 */

import { useEffect, useRef, useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import '@/styles/ai-excursion-assistant.css';

type Message = {
  id: string;
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

type AssistantMessage = {
  reply: string;
  recommendations: Recommendation[];
  error?: string;
  errorCode?: string;
};

export default function AIExcursionAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    const greeting: Message = {
      id: 'greeting',
      role: 'assistant',
      content: 'Welcome! I\'m your Top Euro Travel concierge. Tell me about your interests, group size, or what kind of experience you\'re looking for, and I\'ll recommend the perfect excursion for you.',
    };
    setMessages([greeting]);
  }, []);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      // Build conversation history for context
      const conversationHistory = messages
        .filter((msg) => msg.role !== 'assistant' || msg.id !== 'greeting')
        .map((msg) => ({
          role: msg.role,
          content: msg.content,
        }));

      const response = await fetch('/api/ai/excursion-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          conversationHistory,
        }),
      });

      if (!response.ok) {
        const errorData = (await response.json()) as AssistantMessage;
        const errorMessage = errorData.error || 'Failed to get response from AI assistant';
        throw new Error(errorMessage);
      }

      const data = (await response.json()) as AssistantMessage;

      if (data.error) {
        // Display safe error message from backend
        setError(data.error);
        return;
      }

      // Add assistant message
      const assistantMessage: Message = {
        id: `msg-${Date.now()}-assistant`,
        role: 'assistant',
        content: data.reply,
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Add recommendations as a separate message if available
      if (data.recommendations && data.recommendations.length > 0) {
        const recMessage: Message = {
          id: `msg-${Date.now()}-recs`,
          role: 'assistant',
          content: `I found ${data.recommendations.length} perfect option${data.recommendations.length !== 1 ? 's' : ''} for you:`,
        };
        setMessages((prev) => [...prev, recMessage]);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Assistant error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="ai-assistant" aria-labelledby="ai-assistant-title">
      <div className="ai-assistant__container">
        <div className="ai-assistant__header">
          <div className="ai-assistant__eyebrow">
            <Sparkles aria-hidden="true" style={{ width: '16px', height: '16px' }} />
            AI-Powered Concierge
          </div>
          <h2 id="ai-assistant-title" className="ai-assistant__title">
            Discover Your Perfect Excursion
          </h2>
          <p className="ai-assistant__subtitle">
            Chat with our AI concierge to find and book the ideal experience for your group
          </p>
        </div>

        <div className="ai-assistant__chat">
          <div className="ai-assistant__messages">
            {messages.length === 0 ? (
              <div className="ai-assistant__empty">
                <Sparkles className="ai-assistant__empty-icon" aria-hidden="true" />
                <p className="ai-assistant__empty-text">
                  Start a conversation to discover excursions
                </p>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`ai-assistant__message ai-assistant__message--${message.role}`}
                  >
                    <div className="ai-assistant__message-bubble">
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="ai-assistant__loading">
                    <span>Thinking</span>
                    <div className="ai-assistant__loading-dots">
                      <div className="ai-assistant__loading-dot" />
                      <div className="ai-assistant__loading-dot" />
                      <div className="ai-assistant__loading-dot" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {error && (
            <div className="ai-assistant__error" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSendMessage} className="ai-assistant__input-area">
            <input
              type="text"
              className="ai-assistant__input"
              placeholder="Tell me about your interests, group size, or preferences..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              aria-label="Message input"
              maxLength={500}
            />
            <button
              type="submit"
              className="ai-assistant__send-button"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
