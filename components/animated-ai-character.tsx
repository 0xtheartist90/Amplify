"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface AnimatedAICharacterProps {
  isActive?: boolean
  size?: number
  className?: string
}

export function AnimatedAICharacter({ isActive = false, size = 150, className = "" }: AnimatedAICharacterProps) {
  const [isAnimating, setIsAnimating] = useState(isActive)

  useEffect(() => {
    setIsAnimating(isActive)
  }, [isActive])

  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={
          isAnimating
            ? {
                y: [0, -10, 0],
                rotate: [0, -5, 0, 5, 0],
              }
            : { y: 0, rotate: 0 }
        }
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: isAnimating ? Number.POSITIVE_INFINITY : 0,
        }}
        whileHover={{
          scale: 1.05,
          rotate: [0, -3, 3, -3, 0],
          transition: { duration: 0.5 },
        }}
        className="relative"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contactherocharacter-jbZIsASMJBM6TpiUbDlMAuV2jKLOne.png"
          alt="Sunny - AI Assistant"
          width={size}
          height={size}
          className="object-contain"
        />
      </motion.div>
    </div>
  )
}
