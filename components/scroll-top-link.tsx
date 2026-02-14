"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import type { ReactNode } from "react"
import { memo, useCallback } from "react"

interface ScrollTopLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const ScrollTopLink = memo(function ScrollTopLink({
  href,
  children,
  className = "",
  onClick,
}: ScrollTopLinkProps) {
  const router = useRouter()

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // If it's an anchor link on the same page, let the browser handle it
      if (href.startsWith("#")) {
        return
      }

      // If there's a custom onClick handler, call it
      if (onClick) {
        onClick()
      }

      // For internal links, handle navigation with aggressive scroll to top
      if (href.startsWith("/")) {
        e.preventDefault()

        // Force scroll to top before navigation
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0

        // Use router.push
        router.push(href)

        // Force scroll to top again after navigation
        setTimeout(() => {
          window.scrollTo(0, 0)
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
        }, 10)
      }
    },
    [href, onClick, router],
  )

  return (
    <Link href={href} className={className} onClick={handleClick} scroll={true}>
      {children}
    </Link>
  )
})
