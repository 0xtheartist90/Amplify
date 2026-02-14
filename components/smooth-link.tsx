"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import Link from "next/link"
import type { ReactNode } from "react"

interface SmoothLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function SmoothLink({ href, children, className = "", onClick }: SmoothLinkProps) {
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

    // For internal links, handle navigation with smooth scrolling
    if (href.startsWith("/")) {
      e.preventDefault()

      // Add a small delay to allow for smooth transition
      setTimeout(() => {
        router.push(href)
      }, 300)
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
