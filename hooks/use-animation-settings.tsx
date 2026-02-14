"use client"

import { useState, useEffect } from "react"

interface AnimationSettings {
  shouldAnimate: boolean
  quality: "low" | "medium" | "high"
  reducedMotion: boolean
}

export function useAnimationSettings(): AnimationSettings {
  const [settings, setSettings] = useState<AnimationSettings>({
    shouldAnimate: true,
    quality: "high",
    reducedMotion: false,
  })

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Check for device capabilities
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isLowEndDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false

    // Determine animation quality based on device capabilities
    let quality: "low" | "medium" | "high" = "high"

    if (isLowEndDevice || isMobile) {
      quality = "medium"
    }

    if (isLowEndDevice && isMobile) {
      quality = "low"
    }

    setSettings({
      shouldAnimate: !prefersReducedMotion,
      quality,
      reducedMotion: prefersReducedMotion,
    })

    // Add listener for changes in reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (e: MediaQueryListEvent) => {
      setSettings((prev) => ({
        ...prev,
        shouldAnimate: !e.matches,
        reducedMotion: e.matches,
      }))
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return settings
}
