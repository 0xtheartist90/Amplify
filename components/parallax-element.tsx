"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  offset?: ["start end" | "end start", "start end" | "end start"]
}

export function ParallaxElement({
  children,
  speed = 0.2,
  direction = "up",
  className = "",
  offset = ["start end", "end start"],
}: ParallaxElementProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  })

  // Calculate transform based on direction
  let transformX = "0%"
  let transformY = "0%"

  switch (direction) {
    case "up":
      transformY = `${-speed * 100}%`
      break
    case "down":
      transformY = `${speed * 100}%`
      break
    case "left":
      transformX = `${-speed * 100}%`
      break
    case "right":
      transformX = `${speed * 100}%`
      break
    default:
      transformY = `${-speed * 100}%`
  }

  const isHorizontal = direction === "left" || direction === "right"

  const transformValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", isHorizontal ? transformX : transformY],
    { clamp: false }, // Allow values outside the range for smoother motion
  )

  const transform = transformValue

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          [isHorizontal ? "x" : "y"]: transform,
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
