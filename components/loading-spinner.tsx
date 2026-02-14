"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: number
  color?: string
  thickness?: number
}

export function LoadingSpinner({ size = 40, color = "#ff5a79", thickness = 4 }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          border: `${thickness}px solid rgba(0, 0, 0, 0.1)`,
          borderTopColor: color,
          borderLeftColor: color,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
