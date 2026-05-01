import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    const requestHeaders = new Headers(request.headers);
    const path = request.nextUrl.pathname;
    const isSpanishPath = path === "/es" || path.startsWith("/es/");

    requestHeaders.set("x-locale", isSpanishPath ? "es" : "en");

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // Skip API routes, Next internals, Vercel internals and static files.
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
