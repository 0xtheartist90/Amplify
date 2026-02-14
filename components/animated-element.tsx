"use client"

import type React from "react"

import { useEffect, useRef, useState, memo } from "react"
import { cn } from "@/lib/utils"

type AnimationType =
  | "fade-in"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "bounce"
  | "spin"

interface AnimatedElementProps {
  children: React.ReactNode
  animation: AnimationType
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}

export const AnimatedElement = memo(function AnimatedElement({
  children,
  animation,
  delay = 0,
  duration = 0.5,
  className,
  threshold = 0.1,
  once = true,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observerOptions = {
      threshold,
      rootMargin: "20px", // Add a small margin to start animations slightly before they come into view
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (once) {
          observer.unobserve(entry.target)
        }
      } else if (!once) {
        setIsVisible(false)
      }
    }, observerOptions)

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const animationClasses = {
    "fade-in": "opacity-0 transition-opacity",
    "slide-up": "opacity-0 translate-y-10 transition-all",
    "slide-down": "opacity-0 -translate-y-10 transition-all",
    "slide-left": "opacity-0 translate-x-10 transition-all",
    "slide-right": "opacity-0 -translate-x-10 transition-all",
    "zoom-in": "opacity-0 scale-95 transition-all",
    bounce: "opacity-0 transition-all",
    spin: "opacity-0 rotate-180 transition-all",
  }

  const visibleClasses = {
    "fade-in": "opacity-100",
    "slide-up": "opacity-100 translate-y-0",
    "slide-down": "opacity-100 translate-y-0",
    "slide-left": "opacity-100 translate-x-0",
    "slide-right": "opacity-100 translate-x-0",
    "zoom-in": "opacity-100 scale-100",
    bounce: "opacity-100 animate-bounce",
    spin: "opacity-100 rotate-0",
  }

  const willChangeValue = animation.includes("fade")
    ? "opacity"
    : animation.includes("scale") || animation.includes("zoom")
      ? "transform, opacity"
      : "transform"

  return (
    <div
      ref={ref}
      className={cn(animationClasses[animation], isVisible && visibleClasses[animation], className)}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)", // Improved easing
        willChange: isVisible ? willChangeValue : "auto",
      }}
    >
      {children}
    </div>
  )
})
