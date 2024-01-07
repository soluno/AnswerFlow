import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("next-auth.session-token");
  if (
    (!cookie && request.url.includes("setup")) ||
    request.url.includes("user")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (
    (request.url.includes("signup") || request.url.includes("login")) &&
    cookie
  ) {
    return NextResponse.redirect(new URL("/setup", request.url));
  }
}

export const config = {
  matcher: ["/setup/:path*", "/user/:path*", "/login/:path*", "/signup/:path*"],
};
