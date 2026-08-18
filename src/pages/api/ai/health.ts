import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    // Step 1: Check if OPENAI_API_KEY is configured
    const OPENAI_API_KEY = import.meta.env.OPENAI_API_KEY;
    const isConfigured = Boolean(OPENAI_API_KEY);

    if (!isConfigured) {
      return new Response(
        JSON.stringify({
          configured: false,
          openaiReachable: false,
          errorCode: 'CONFIG_MISSING',
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Step 2: Make minimal test request to OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-5.6-luna',
        messages: [
          {
            role: 'user',
            content: 'Reply exactly with OK',
          },
        ],
        max_tokens: 10,
        store: false,
      }),
    });

    const httpStatus = response.status;

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          configured: true,
          openaiReachable: false,
          errorCode: 'OPENAI_REQUEST_FAILED',
          status: httpStatus,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Success
    return new Response(
      JSON.stringify({
        configured: true,
        openaiReachable: true,
        model: 'gpt-5.6-luna',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    // Network or other errors
    return new Response(
      JSON.stringify({
        configured: true,
        openaiReachable: false,
        errorCode: 'OPENAI_REQUEST_FAILED',
        status: 0,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
