const SECURITY_HEADERS: Record<string, string> = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Cross-Origin-Opener-Policy": "same-origin",
};

export function applySecurityHeaders(response: Response, request: Request): Response {
  const headers = new Headers(response.headers);

  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    if (!headers.has(name)) {
      headers.set(name, value);
    }
  }

  const { pathname, hostname } = new URL(request.url);
  if (pathname.startsWith("/admin") || pathname.startsWith("/adminblog")) {
    headers.set("X-Robots-Tag", "noindex, nofollow");
  } else if (hostname.endsWith(".pages.dev")) {
    headers.set("X-Robots-Tag", "noindex, follow");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
