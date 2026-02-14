"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function ForceScrollTop() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const prevPathRef = useRef(pathname)
  const prevSearchParamsRef = useRef(searchParams)

  useEffect(() => {
    // Check if the path or search params have changed
    if (pathname !== prevPathRef.current || searchParams.toString() !== prevSearchParamsRef.current.toString()) {
      // Force scroll to top with multiple approaches for redundancy
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0

      // Update refs
      prevPathRef.current = pathname
      prevSearchParamsRef.current = searchParams

      // Add a slight delay and scroll again to handle any delayed rendering
      setTimeout(() => {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }, 100)
    }
  }, [pathname, searchParams])

  // Also force scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return null
}
