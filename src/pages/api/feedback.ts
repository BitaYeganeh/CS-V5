import type { APIRoute } from "astro";

/**
 * This endpoint has been disabled to reduce serverless function size
 * and avoid database-related crashes on Vercel
 */
export const POST: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({
      success: false,
      error: 'Feedback API is disabled'
    }),
    {
      status: 503,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
