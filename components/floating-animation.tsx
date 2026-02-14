"use client"

import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingAnimationProps {
  children: ReactNode
  amplitude?: number
  duration?: number
  delay?: number
  rotate?: boolean
  className?: string
}

export function FloatingAnimation({
  children,
  amplitude = 10,
  duration = 3,
  delay = 0,
  rotate = false,
  className = "",
}: FloatingAnimationProps) {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Start the floating animation
    controls.start({
      y: [0, -amplitude, 0, amplitude, 0],
      rotate: rotate ? [0, -1, 0, 1, 0] : 0,
      transition: {
        duration: duration,
        delay: delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    })

    return () => {
      controls.stop()
    }
  }, [amplitude, duration, delay, rotate, controls])

  // Filter out any image elements from children
  const filteredChildren = React.Children.map(children, (child) => {
    // Check if child is a React element and not an image
    if (React.isValidElement(child) && typeof child.type === "string" && child.type.toLowerCase() === "img") {
      return null // Don't render images
    }
    return child // Render other elements
  })

  return (
    <motion.div ref={containerRef} className={className} animate={controls} style={{ willChange: "transform" }}>
      {filteredChildren}
    </motion.div>
  )
}
