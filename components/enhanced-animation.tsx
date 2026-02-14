"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"

type AnimationType =
  | "fadeIn"
  | "fadeInUp"
  | "fadeInDown"
  | "fadeInLeft"
  | "fadeInRight"
  | "zoomIn"
  | "zoomOut"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "bounce"
  | "pulse"
  | "flip"
  | "rotate"
  | "elastic"
  | "spring"
  | "stagger"
  | "wave"

interface EnhancedAnimationProps {
  children: ReactNode
  type: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
  amount?: "some" | "all" | number
  staggerChildren?: number
  staggerDirection?: "forward" | "reverse"
  repeat?: boolean | number
  repeatDelay?: number
}

export function EnhancedAnimation({
  children,
  type,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
  amount = 0.3,
  staggerChildren = 0.1,
  staggerDirection = "forward",
  repeat = false,
  repeatDelay = 0,
}: EnhancedAnimationProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, {
    once,
    amount,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Simplified animation variants for better performance
  const variants = {
    hidden: {
      fadeIn: { opacity: 0 },
      fadeInUp: { opacity: 0, y: 30 }, // Reduced from 50 to 30
      fadeInDown: { opacity: 0, y: -30 }, // Reduced from -50 to -30
      fadeInLeft: { opacity: 0, x: -30 }, // Reduced from -50 to -30
      fadeInRight: { opacity: 0, x: 30 }, // Reduced from 50 to 30
      zoomIn: { opacity: 0, scale: 0.95 }, // Changed from 0.9 to 0.95
      zoomOut: { opacity: 0, scale: 1.05 }, // Changed from 1.1 to 1.05
      slideUp: { y: 50, opacity: 0 }, // Reduced from 100 to 50
      slideDown: { y: -50, opacity: 0 }, // Reduced from -100 to -50
      slideLeft: { x: -50, opacity: 0 }, // Reduced from -100 to -50
      slideRight: { x: 50, opacity: 0 }, // Reduced from 100 to 50
      bounce: { opacity: 0, y: 30 }, // Reduced from 50 to 30
      pulse: { opacity: 0, scale: 0.9 }, // Changed from 0.8 to 0.9
      flip: { opacity: 0, rotateX: 45 }, // Reduced from 90 to 45
      rotate: { opacity: 0, rotate: -10 }, // Reduced from -15 to -10
      elastic: { opacity: 0, scale: 0.7 }, // Changed from 0.5 to 0.7
      spring: { opacity: 0, y: 30 }, // Reduced from 50 to 30
      stagger: { opacity: 0, y: 15 }, // Reduced from 20 to 15
      wave: { opacity: 0, y: 15 }, // Reduced from 20 to 15
    },
    visible: {
      fadeIn: { opacity: 1 },
      fadeInUp: { opacity: 1, y: 0 },
      fadeInDown: { opacity: 1, y: 0 },
      fadeInLeft: { opacity: 1, x: 0 },
      fadeInRight: { opacity: 1, x: 0 },
      zoomIn: { opacity: 1, scale: 1 },
      zoomOut: { opacity: 1, scale: 1 },
      slideUp: { y: 0, opacity: 1 },
      slideDown: { y: 0, opacity: 1 },
      slideLeft: { x: 0, opacity: 1 },
      slideRight: { x: 0, opacity: 1 },
      bounce: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: 400, // Increased from 300
          damping: 15, // Increased from 10
        },
      },
      pulse: {
        opacity: 1,
        scale: [0.9, 1.05, 1], // Changed from [0.8, 1.1, 1]
        transition: {
          times: [0, 0.7, 1],
        },
      },
      flip: {
        opacity: 1,
        rotateX: 0,
        transition: {
          type: "spring" as const,
          stiffness: 400, // Increased from 300
          damping: 20, // Increased from 15
        },
      },
      rotate: {
        opacity: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 300, // Increased from 200
          damping: 20, // Increased from 15
        },
      },
      elastic: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 400, // Increased from 300
          damping: 15, // Increased from 10
        },
      },
      spring: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: 500, // Increased from 400
          damping: 20, // Increased from 15
        },
      },
      stagger: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren,
          staggerDirection: staggerDirection === "forward" ? 1 : -1,
        },
      },
      wave: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: 400, // Increased from 300
          damping: 12, // Increased from 8
        },
      },
    },
  }

  // Get transition based on animation type
  const getTransition = () => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    }

    switch (type) {
      case "bounce":
        return {
          ...baseTransition,
          type: "spring" as const,
          stiffness: 400, // Increased from 300
          damping: 15, // Increased from 10
          mass: 1.2, // Added mass for more natural bounce
        }
      case "elastic":
        return {
          ...baseTransition,
          type: "spring" as const,
          stiffness: 400, // Increased from 300
          damping: 12, // Adjusted from 10
          mass: 1, // Added mass parameter
        }
      case "spring":
        return {
          ...baseTransition,
          type: "spring" as const,
          stiffness: 500, // Increased from 400
          damping: 20, // Increased from 15
          mass: 1, // Added mass parameter
        }
      case "wave":
        return {
          ...baseTransition,
          type: "spring" as const,
          stiffness: 400, // Increased from 300
          damping: 10, // Adjusted from 8
          mass: 0.8, // Added mass parameter
        }
      default:
        return baseTransition
    }
  }

  useEffect(() => {
    let isMounted = true

    if (inView && isMounted) {
      controls.start("visible")
      setHasAnimated(true)
    } else if (!once && isMounted) {
      controls.start("hidden")
    }

    return () => {
      isMounted = false
      controls.stop()
    }
  }, [controls, inView, once])

  // Handle repeating animations
  useEffect(() => {
    if (!repeat || !hasAnimated) return

    const repeatCount = typeof repeat === "number" ? repeat : Number.POSITIVE_INFINITY
    let count = 0
    let animationTimer: NodeJS.Timeout

    const runAnimation = () => {
      if (count < repeatCount) {
        controls.start("hidden").then(() => {
          if (count < repeatCount) {
            // Check again in case component unmounted
            controls.start("visible")
            count++
            animationTimer = setTimeout(runAnimation, duration * 1000 + repeatDelay * 1000)
          }
        })
      }
    }

    animationTimer = setTimeout(runAnimation, duration * 1000 + repeatDelay * 1000)

    return () => {
      clearTimeout(animationTimer)
    }
  }, [controls, repeat, hasAnimated, duration, repeatDelay])

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        exit="hidden"
        variants={{
          hidden: variants.hidden[type],
          visible: variants.visible[type],
        }}
        transition={getTransition()}
        className={className}
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          perspective: 1000,
          WebkitPerspective: 1000,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
