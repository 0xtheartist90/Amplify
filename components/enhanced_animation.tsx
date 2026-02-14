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

  // Animation variants
  const variants = {
    hidden: {
      fadeIn: { opacity: 0 },
      fadeInUp: { opacity: 0, y: 50 },
      fadeInDown: { opacity: 0, y: -50 },
      fadeInLeft: { opacity: 0, x: -50 },
      fadeInRight: { opacity: 0, x: 50 },
      zoomIn: { opacity: 0, scale: 0.9 },
      zoomOut: { opacity: 0, scale: 1.1 },
      slideUp: { y: 100, opacity: 0 },
      slideDown: { y: -100, opacity: 0 },
      slideLeft: { x: -100, opacity: 0 },
      slideRight: { x: 100, opacity: 0 },
      bounce: { opacity: 0, y: 50 },
      pulse: { opacity: 0, scale: 0.8 },
      flip: { opacity: 0, rotateX: 90 },
      rotate: { opacity: 0, rotate: -15 },
      elastic: { opacity: 0, scale: 0.5 },
      spring: { opacity: 0, y: 50 },
      stagger: { opacity: 0, y: 20 },
      wave: { opacity: 0, y: 20 },
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
          stiffness: 300,
          damping: 10,
        },
      },
      pulse: {
        opacity: 1,
        scale: [0.8, 1.1, 1],
        transition: {
          times: [0, 0.7, 1],
        },
      },
      flip: {
        opacity: 1,
        rotateX: 0,
        transition: {
          type: "spring" as const,
          stiffness: 300,
          damping: 15,
        },
      },
      rotate: {
        opacity: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 200,
          damping: 15,
        },
      },
      elastic: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring" as const,
          stiffness: 300,
          damping: 10,
        },
      },
      spring: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: 400,
          damping: 15,
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
          stiffness: 300,
          damping: 8,
        },
      },
    },
  }

  // Get transition based on animation type
  const getTransition = () => {
    const baseTransition = {
      duration,
      delay,
      ease: "easeOut" as const,
    }

    switch (type) {
      case "bounce":
        return {
          ...baseTransition,
          type: "spring" as const,
          stiffness: 300,
          damping: 10,
        }
      case "elastic":
        return {
          ...baseTransition,
          type: "spring" as const,
          stiffness: 300,
          damping: 10,
        }
      case "spring":
        return {
          ...baseTransition,
          type: "spring" as const,
          stiffness: 400,
          damping: 15,
        }
      case "wave":
        return {
          ...baseTransition,
          type: "spring" as const,
          stiffness: 300,
          damping: 8,
        }
      default:
        return baseTransition
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start("visible")
      setHasAnimated(true)
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  // Handle repeating animations
  useEffect(() => {
    if (repeat && hasAnimated) {
      const repeatCount = typeof repeat === "number" ? repeat : Number.POSITIVE_INFINITY
      let count = 0

      const intervalId = setInterval(
        () => {
          if (count < repeatCount) {
            controls.start("hidden").then(() => {
              controls.start("visible")
            })
            count++
          } else {
            clearInterval(intervalId)
          }
        },
        duration * 1000 + repeatDelay * 1000,
      )

      return () => clearInterval(intervalId)
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
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
