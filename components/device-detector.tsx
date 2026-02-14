"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"

interface DeviceDetectorProps {
  children?: React.ReactNode
  mobileContent?: React.ReactNode
}

export function DeviceDetector({ children, mobileContent }: DeviceDetectorProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Debounced resize handler
  const debouncedCheckIfMobile = useCallback(() => {
    let timeoutId: NodeJS.Timeout | null = null

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768)
        timeoutId = null
      }, 100) // 100ms debounce
    }
  }, [])

  useEffect(() => {
    setIsClient(true)

    const checkIfMobile = debouncedCheckIfMobile()

    // Check on initial load
    setIsMobile(window.innerWidth < 768)

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [debouncedCheckIfMobile])

  // During SSR or before client-side hydration, default to desktop view
  // Use a hidden div for mobile content to ensure it's pre-rendered but not visible
  if (!isClient) {
    return (
      <>
        <div className="block">{children}</div>
        <div className="hidden">{mobileContent}</div>
      </>
    )
  }

  // After hydration, show the appropriate view
  return <>{isMobile ? mobileContent : children}</>
}
