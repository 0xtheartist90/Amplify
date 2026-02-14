"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  duration?: number
  delay?: number
  yOffset?: number
  xOffset?: number
  rotate?: boolean
  className?: string
}

export function FloatingElement({
  children,
  duration = 3,
  delay = 0,
  yOffset = 15,
  xOffset = 0,
  rotate = false,
  className = "",
}: FloatingElementProps) {
  const floatVariants = {
    initial: {
      y: 0,
      x: 0,
      rotate: 0,
    },
    animate: {
      y: [-yOffset, 0, -yOffset],
      x: xOffset ? [-xOffset, 0, -xOffset] : 0,
      rotate: rotate ? [-2, 0, 2] : 0,
      transition: {
        duration,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay,
      },
    },
  }

  return (
    <motion.div initial="initial" animate="animate" variants={floatVariants} className={className}>
      {children}
    </motion.div>
  )
}
