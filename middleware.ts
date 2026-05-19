import { NextRequest, NextResponse } from "next/server";

import {
  defaultLocale,
  isLocale,
  localeCookieName,
  type Locale,
  resolveLocale,
  withLocalePath,
} from "@/lib/i18n-config";

const PUBLIC_FILE = /\.[^/]+$/;

function detectPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptedLanguages = request.headers.get("accept-language")?.toLowerCase() ?? "";

  if (acceptedLanguages.includes("en")) {
    return "en";
  }

  if (acceptedLanguages.includes("it")) {
    return "it";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = withLocalePath(defaultLocale);
    return NextResponse.redirect(redirectUrl);
  }

  const [, firstSegment] = pathname.split("/");

  if (!isLocale(firstSegment)) {
    const locale = detectPreferredLocale(request);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = withLocalePath(locale, pathname);
    return NextResponse.redirect(redirectUrl);
  }

  const response = NextResponse.next();
  response.cookies.set(localeCookieName, resolveLocale(firstSegment), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
