"use client"

import type React from "react"
import { useEffect, memo } from "react"

interface PageWrapperProps {
  children: React.ReactNode
}

export const PageWrapper = memo(function PageWrapper({ children }: PageWrapperProps) {
  // Force scroll to top when component mounts
  useEffect(() => {
    // Use requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })

    // Add a slight delay and scroll again to handle any delayed rendering
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  return <>{children}</>
})
