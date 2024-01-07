import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("next-auth.session-token");
  if (!cookie) return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/setup/:path*", "/user/:path*"],
};
