"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  minimumLoadTimeMs?: number
}

export function LoadingScreen({ minimumLoadTimeMs = 1500 }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Ensure minimum display time for the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, minimumLoadTimeMs)

    return () => clearTimeout(timer)
  }, [minimumLoadTimeMs])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-40 h-40 mb-8"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20black%20Amplify-kTsLQ4RAwj0NiiWS8ZonpCci5I9q4c.png"
              alt="Amplify Logo"
              fill
              className="object-contain"
            />
          </motion.div>

          <motion.div
            className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "16rem" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full bg-pink"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: minimumLoadTimeMs / 1000,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
