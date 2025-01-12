// import createMiddleware from "next-intl/middleware"
// import { locales } from "./config";


// export default createMiddleware({

// locales,
// defaultLocale: 'en'
// });


// export const config = {
//   matcher: ['/', '/(de|en|fr|es|zh|pt)/:path*']
// }

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

// Middleware for translations
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'en',
});

// Authentication logic
export function middleware(request: NextRequest) {
  // Call the next-intl middleware first
  const intlResponse = intlMiddleware(request);

  // Check for the auth token (retrieved from Redux Persist, stored in cookies)
  const authToken = false

  // Define protected routes
  const protectedRoutes = ['/(de|en|fr|es|zh|pt)/dashboard', '/(de|en|fr|es|zh|pt)/profile', '/(de|en|fr|es|zh|pt)/settings'];

  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    // If no auth token, redirect to the login page
    if (!authToken) {
      const loginUrl = new URL(`/${request.nextUrl.locale}/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Return the response from the translation middleware
  return intlResponse;
}

// Config matcher to combine translation and authentication routes
export const config = {
  matcher: [
    '/', // Default locale route
    '/(de|en|fr|es|zh|pt)/:path*', // Translated routes
  ],
};
