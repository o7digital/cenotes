import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const isSpanishPath =
    request.nextUrl.pathname === "/es" || request.nextUrl.pathname.startsWith("/es/");

  requestHeaders.set("x-locale", isSpanishPath ? "es" : "en");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
