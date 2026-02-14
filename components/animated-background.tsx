"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedBackgroundProps {
  children: ReactNode
  type?: "gradient" | "pulse" | "wave" | "particles"
  className?: string
  colors?: string[]
}

export function AnimatedBackground({
  children,
  type = "gradient",
  className = "",
  colors = ["var(--pink)", "var(--purple)", "var(--blue)", "var(--yellow)"],
}: AnimatedBackgroundProps) {
  // Animation variants based on type
  const getBackgroundStyle = () => {
    switch (type) {
      case "gradient":
        return {
          background: `linear-gradient(-45deg, ${colors.join(", ")})`,
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }
      case "pulse":
        return {
          background: colors[0],
          boxShadow: `0 0 30px ${colors[0]}`,
        }
      case "wave":
        return {
          background: `linear-gradient(45deg, ${colors.join(", ")})`,
          backgroundSize: "200% 200%",
          animation: "wave 10s ease infinite",
        }
      case "particles":
        return {
          background: colors[0],
          position: "relative" as const,
          overflow: "hidden" as const,
        }
      default:
        return {
          background: colors[0],
        }
    }
  }

  const backgroundStyle = getBackgroundStyle()

  // Animation variants
  const variants = {
    gradient: {
      animate: {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.45, 0.05, 0.55, 0.95] as [number, number, number, number],
          repeatType: "loop" as const,
        },
      },
    },
    pulse: {
      animate: {
        boxShadow: [`0 0 10px ${colors[0]}`, `0 0 30px ${colors[0]}`, `0 0 10px ${colors[0]}`],
        transition: {
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.4, 0, 0.6, 1] as [number, number, number, number],
          repeatType: "loop" as const,
        },
      },
    },
    wave: {
      animate: {
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        transition: {
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.45, 0.05, 0.55, 0.95] as [number, number, number, number],
          repeatType: "loop" as const,
        },
      },
    },
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{
        ...backgroundStyle,
        willChange:
          type === "gradient" || type === "wave" ? "background-position" : type === "pulse" ? "box-shadow" : "auto",
      }}
      animate="animate"
      variants={variants[type as keyof typeof variants]}
    >
      {children}
    </motion.div>
  )
}
