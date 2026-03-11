"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import type { ReactNode } from "react"
import { memo, useCallback } from "react"
import { useLocale } from "@/lib/i18n"

interface ScrollTopLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
}

export const ScrollTopLink = memo(function ScrollTopLink({
  href,
  children,
  className = "",
  onClick,
  ariaLabel,
}: ScrollTopLinkProps) {
  const router = useRouter()
  const { localizeHref } = useLocale()
  const localizedHref = localizeHref(href)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // If it's an anchor link on the same page, let the browser handle it
      if (localizedHref.startsWith("#")) {
        return
      }

      // If there's a custom onClick handler, call it
      if (onClick) {
        onClick()
      }

      // For internal links, handle navigation with aggressive scroll to top
      if (localizedHref.startsWith("/")) {
        e.preventDefault()

        // Force scroll to top before navigation
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0

        // Use router.push
        router.push(localizedHref)

        // Force scroll to top again after navigation
        setTimeout(() => {
          window.scrollTo(0, 0)
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
        }, 10)
      }
    },
    [localizedHref, onClick, router],
  )

  return (
    <Link href={localizedHref} className={className} onClick={handleClick} scroll={true} aria-label={ariaLabel}>
      {children}
    </Link>
  )
})
