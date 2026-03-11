import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_FILE = /\.[^/]+$/
const SUPPORTED_LOCALES = new Set(["en", "nl"])

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const segments = pathname.split("/")
  const maybeLocale = segments[1]

  if (SUPPORTED_LOCALES.has(maybeLocale)) {
    const strippedPath = pathname.replace(`/${maybeLocale}`, "") || "/"
    const rewrittenUrl = request.nextUrl.clone()
    rewrittenUrl.pathname = strippedPath

    const response = NextResponse.rewrite(rewrittenUrl)
    response.cookies.set("NEXT_LOCALE", maybeLocale, { path: "/" })
    return response
  }

  const redirectUrl = request.nextUrl.clone()
  redirectUrl.pathname = `/en${pathname === "/" ? "" : pathname}`
  redirectUrl.search = search

  const response = NextResponse.redirect(redirectUrl)
  response.cookies.set("NEXT_LOCALE", "en", { path: "/" })
  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
