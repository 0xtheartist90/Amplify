"use client"

import { useRef, useEffect, memo } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
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
  | "bounce"
  | "pulse"
  | "flip"
  | "rotate"

interface ScrollAnimationProps {
  children: ReactNode
  variant: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  className?: string
  once?: boolean
  amount?: "some" | "all" | number
}

export const ScrollAnimation = memo(function ScrollAnimation({
  children,
  variant,
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
  once = true,
  amount = 0.3,
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, {
    once,
    amount,
  })

  // Animation variants
  const variants = {
    hidden: {
      fadeIn: { opacity: 0 },
      fadeInUp: { opacity: 0, y: 50 },
      fadeInDown: { opacity: 0, y: -50 },
      fadeInLeft: { opacity: 0, x: -50 },
      fadeInRight: { opacity: 0, x: 50 },
      zoomIn: { opacity: 0, scale: 0.9 },
      slideUp: { y: 100, opacity: 0 },
      slideDown: { y: -100, opacity: 0 },
      slideLeft: { x: -100, opacity: 0 },
      slideRight: { x: 100, opacity: 0 },
      bounce: { opacity: 0, y: 50 },
      pulse: { opacity: 0, scale: 0.8 },
      flip: { opacity: 0, rotateX: 90 },
      rotate: { opacity: 0, rotate: -15 },
    },
    visible: {
      fadeIn: { opacity: 1 },
      fadeInUp: { opacity: 1, y: 0 },
      fadeInDown: { opacity: 1, y: 0 },
      fadeInLeft: { opacity: 1, x: 0 },
      fadeInRight: { opacity: 1, x: 0 },
      zoomIn: { opacity: 1, scale: 1 },
      slideUp: { y: 0, opacity: 1 },
      slideDown: { y: 0, opacity: 1 },
      slideLeft: { x: 0, opacity: 1 },
      slideRight: { x: 0, opacity: 1 },
      bounce: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: 400,
          damping: 15,
          mass: 1.2,
        },
      },
      pulse: {
        opacity: 1,
        scale: [0.8, 1.05, 1],
        transition: {
          times: [0, 0.6, 1],
          duration: 0.6,
        },
      },
      flip: {
        opacity: 1,
        rotateX: 0,
        transition: {
          type: "spring" as const,
          stiffness: 400,
          damping: 18,
          mass: 1.1,
        },
      },
      rotate: {
        opacity: 1,
        rotate: 0,
        transition: {
          type: "spring" as const,
          stiffness: 300,
          damping: 18,
          mass: 1,
        },
      },
    },
  }

  useEffect(() => {
    let isMounted = true

    if (inView && isMounted) {
      controls.start("visible")
    } else if (!once && isMounted) {
      controls.start("hidden")
    }

    return () => {
      isMounted = false
      controls.stop()
    }
  }, [controls, inView, once])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: variants.hidden[variant],
        visible: variants.visible[variant],
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Improved cubic-bezier curve
      }}
      className={className}
      style={{
        willChange: variant.includes("fade")
          ? "opacity"
          : variant.includes("zoom")
            ? "transform, opacity"
            : "transform",
      }}
    >
      {children}
    </motion.div>
  )
})
