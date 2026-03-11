"use client"

import { createContext, useContext, useMemo } from "react"
import { usePathname } from "next/navigation"

export const SUPPORTED_LOCALES = ["en", "nl"] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

type LocaleContextValue = {
  locale: Locale
  localizeHref: (href: string) => string
  switchLocalePath: (targetLocale: Locale) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function normalizeLocale(value?: string): Locale {
  return value === "nl" ? "nl" : "en"
}

function extractLocaleFromPath(pathname?: string | null): Locale | null {
  if (!pathname) return null
  const [, maybeLocale] = pathname.split("/")
  return maybeLocale === "en" || maybeLocale === "nl" ? maybeLocale : null
}

function localizeInternalHref(href: string, locale: Locale): string {
  if (!href) return href
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href
  }

  if (!href.startsWith("/")) {
    return href
  }

  if (href === "/") {
    return `/${locale}`
  }

  const match = href.match(/^([^?#]+)(.*)$/)
  const path = match?.[1] || href
  const suffix = match?.[2] || ""
  const [, maybeLocale] = path.split("/")

  if (maybeLocale === "en" || maybeLocale === "nl") {
    return `${path}${suffix}`
  }

  return `/${locale}${path}${suffix}`
}

function swapLocale(pathname: string, targetLocale: Locale): string {
  const path = pathname || "/"
  const [, maybeLocale, ...rest] = path.split("/")
  const remainder = maybeLocale === "en" || maybeLocale === "nl" ? `/${rest.join("/")}` : path
  const normalizedRemainder = remainder === "/" ? "" : remainder
  return `/${targetLocale}${normalizedRemainder}` || `/${targetLocale}`
}

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const locale = extractLocaleFromPath(pathname) ?? normalizeLocale(initialLocale)

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      localizeHref: (href: string) => localizeInternalHref(href, locale),
      switchLocalePath: (targetLocale: Locale) => swapLocale(pathname || "/", targetLocale),
    }),
    [locale, pathname],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider")
  }
  return context
}

export function getDictionaryValue<T>(locale: Locale, values: { en: T; nl: T }): T {
  return values[locale]
}
