import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

// Middleware for translations
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "always", // Ensure locale is always present in URLs
});

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = request.nextUrl.locale || "en"; // Ensure a locale is set

  // Handle translations first
  const intlResponse = intlMiddleware(request);

  // Check for authentication token (from cookies or Redux Persist)
  // const authToken = false; // Replace with actual logic to check authentication

  // // Define protected routes
  // const protectedRoutes = ["/dashboard", "/profile", "/settings"];

  // Redirect unauthenticated users accessing protected routes
  // if (
  //   protectedRoutes.some((route) => pathname.startsWith(`/${locale}${route}`))
  // ) {
  //   if (!authToken) {
  //     return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  //   }
  // }

  // Redirect root `/` to default locale `/en` (or the detected locale)
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return intlResponse;
}

// Config matcher to apply middleware on relevant routes
export const config = {
  matcher: ["/", "/(de|en|fr|es|zh|pt)/:path*"], // Ensures all locale-based routes are handled
};
