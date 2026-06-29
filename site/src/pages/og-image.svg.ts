import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#09090b"/>
  <rect x="0" y="0" width="6" height="630" fill="#38bdf8"/>
  <text x="80" y="200" font-family="system-ui, sans-serif" font-size="24" fill="#38bdf8" letter-spacing="4">SENIOR BACKEND ENGINEER</text>
  <text x="80" y="300" font-family="system-ui, sans-serif" font-size="72" font-weight="700" fill="#fafafa">Muhammad</text>
  <text x="80" y="390" font-family="system-ui, sans-serif" font-size="72" font-weight="700" fill="#fafafa">Abdullah</text>
  <text x="80" y="470" font-family="system-ui, sans-serif" font-size="22" fill="#71717a">Java · Python · Go · Distributed Systems · High Availability</text>
  <text x="80" y="560" font-family="monospace, sans-serif" font-size="18" fill="#38bdf8">muhammad-abdullah.pages.dev</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
};
