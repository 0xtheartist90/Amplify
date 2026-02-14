"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimatedIconProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  animationType?: "pulse" | "bounce" | "shake" | "spin" | "float" | "glow"
  delay?: number
  threshold?: number
  once?: boolean
}

export function AnimatedIcon({
  src,
  alt,
  width = 50,
  height = 50,
  className = "",
  animationType = "pulse",
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimatedIconProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { amount: threshold, once })
  const [isHovered, setIsHovered] = useState(false)

  // Animation variants
  const getAnimationVariant = () => {
    switch (animationType) {
      case "pulse":
        return {
          initial: { scale: 1 },
          animate: {
            scale: [1, 1.1, 1],
            transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" as const },
          },
          hover: { scale: 1.2, transition: { duration: 0.3 } },
        }
      case "bounce":
        return {
          initial: { y: 0 },
          animate: {
            y: [0, -10, 0],
            transition: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" as const },
          },
          hover: { y: -15, transition: { duration: 0.3 } },
        }
      case "shake":
        return {
          initial: { rotate: 0 },
          animate: {
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 },
          },
          hover: { rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } },
        }
      case "spin":
        return {
          initial: { rotate: 0 },
          animate: { rotate: 360, transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" as const } },
          hover: { rotate: 360, transition: { duration: 1 } },
        }
      case "float":
        return {
          initial: { y: 0 },
          animate: {
            y: [0, -15, 0],
            transition: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" as const },
          },
          hover: { y: -20, transition: { duration: 0.5 } },
        }
      case "glow":
        return {
          initial: { opacity: 1, filter: "drop-shadow(0 0 0 rgba(255,255,255,0))" },
          animate: {
            opacity: [1, 0.8, 1],
            filter: [
              "drop-shadow(0 0 0px rgba(255,255,255,0))",
              "drop-shadow(0 0 10px rgba(255,255,255,0.7))",
              "drop-shadow(0 0 0px rgba(255,255,255,0))",
            ],
            transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
          },
          hover: {
            filter: "drop-shadow(0 0 15px rgba(255,255,255,0.9))",
            transition: { duration: 0.3 },
          },
        }
      default:
        return {
          initial: { scale: 1 },
          animate: { scale: 1 },
          hover: { scale: 1.1 },
        }
    }
  }

  const variant = getAnimationVariant()

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("animate")
      }, delay * 1000)
    }
  }, [controls, inView, delay])

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      whileHover="hover"
      variants={variant}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} />
    </motion.div>
  )
}
