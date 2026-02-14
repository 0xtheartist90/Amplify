"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function ScrollManager() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This effect runs on route changes (pathname or search params change)
    window.scrollTo(0, 0)
  }, [pathname, searchParams])

  return null
}
