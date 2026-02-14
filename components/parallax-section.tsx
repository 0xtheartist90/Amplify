"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({ children, speed = 0.2, className = "", direction = "up" }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const transformUp = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`], { clamp: false })
  const transformDown = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`], { clamp: false })
  const transformLeft = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`], { clamp: false })
  const transformRight = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`], { clamp: false })

  // Calculate transform based on direction
  const getTransform = () => {
    switch (direction) {
      case "up":
        return transformUp
      case "down":
        return transformDown
      case "left":
        return transformLeft
      case "right":
        return transformRight
      default:
        return transformUp
    }
  }

  const transform = getTransform()
  const isHorizontal = direction === "left" || direction === "right"

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
