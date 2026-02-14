"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import Link from "next/link"
import type { ReactNode } from "react"

interface NoScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function NoScrollLink({ href, children, className = "", onClick }: NoScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an anchor link on the same page, let the browser handle it
    if (href.startsWith("#")) {
      return
    }

    // If there's a custom onClick handler, call it
    if (onClick) {
      onClick()
    }

    // For internal links, handle navigation without scrolling to top
    if (href.startsWith("/")) {
      e.preventDefault()

      // Use router.push with scroll: false option
      router.push(href)
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick} scroll={false}>
      {children}
    </Link>
  )
}
