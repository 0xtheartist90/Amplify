"use client"

import { useRef, useEffect, useState, memo } from "react"
import type { ReactNode } from "react"

type AnimationVariant =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"

interface OptimizedScrollAnimationProps {
  children: ReactNode
  variant: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
}

export const OptimizedScrollAnimation = memo(function OptimizedScrollAnimation({
  children,
  variant,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
}: OptimizedScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Animation properties based on variant
  const getInitialStyles = () => {
    switch (variant) {
      case "fadeIn":
        return { opacity: 0 }
      case "fadeInUp":
        return { opacity: 0, transform: "translateY(30px)" }
      case "fadeInDown":
        return { opacity: 0, transform: "translateY(-30px)" }
      case "fadeInLeft":
        return { opacity: 0, transform: "translateX(-30px)" }
      case "fadeInRight":
        return { opacity: 0, transform: "translateX(30px)" }
      case "zoomIn":
        return { opacity: 0, transform: "scale(0.95)" }
      case "slideUp":
        return { opacity: 0, transform: "translateY(50px)" }
      case "slideDown":
        return { opacity: 0, transform: "translateY(-50px)" }
      case "slideLeft":
        return { opacity: 0, transform: "translateX(-50px)" }
      case "slideRight":
        return { opacity: 0, transform: "translateX(50px)" }
      default:
        return { opacity: 0 }
    }
  }

  const getVisibleStyles = () => {
    return { opacity: 1, transform: "translate(0, 0) scale(1)" }
  }

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(currentRef)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: "10px" },
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const initialStyles = getInitialStyles()
  const visibleStyles = getVisibleStyles()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...initialStyles,
        ...(isVisible ? visibleStyles : {}),
        transition: `opacity ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1), transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`,
        transitionDelay: `${delay}s`,
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        perspective: 1000,
        WebkitPerspective: 1000,
      }}
    >
      {children}
    </div>
  )
})
