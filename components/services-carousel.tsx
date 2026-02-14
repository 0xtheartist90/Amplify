"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ServiceFeature {
  icon?: React.ReactNode
  iconBg?: string
  title: string
  description: string
  features: string[]
}

interface ServicesCarouselProps {
  services: ServiceFeature[]
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null)

  // Memoize navigation functions to prevent unnecessary re-renders
  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }, [services.length])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }, [services.length])

  // Handle touch events for swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    // Clear auto-advance when user interacts
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current)
    }
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current === null) return

      const touchEndX = e.changedTouches[0].clientX
      const diff = touchStartX.current - touchEndX

      // If the swipe distance is significant enough
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swipe left, go to next
          goToNext()
        } else {
          // Swipe right, go to prev
          goToPrev()
        }
      }

      touchStartX.current = null
      startAutoAdvance()
    },
    [goToNext, goToPrev],
  )

  // Auto-advance the carousel with cleanup
  const startAutoAdvance = useCallback(() => {
    autoAdvanceRef.current = setTimeout(() => {
      goToNext()
    }, 5000)
  }, [goToNext])

  useEffect(() => {
    startAutoAdvance()
    return () => {
      if (autoAdvanceRef.current) {
        clearTimeout(autoAdvanceRef.current)
      }
    }
  }, [currentIndex, startAutoAdvance])

  // Optimized animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { type: "spring" as const, stiffness: 300, damping: 30 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      },
    }),
  }

  return (
    <div className="relative">
      {/* Card Container */}
      <div
        ref={containerRef}
        className="overflow-hidden px-1 py-2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-[420px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
              style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                perspective: 1000,
                WebkitPerspective: 1000,
              }}
            >
              <div className="bg-white text-black rounded-lg p-5 shadow-lg border-2 border-black h-full flex flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className={`w-10 h-10 flex items-center justify-center mr-3 ${services[currentIndex].iconBg || "bg-yellow"} rounded-full shadow-lg`}
                  >
                    {services[currentIndex].icon}
                  </div>
                  <h3 className="text-xl font-ultra">{services[currentIndex].title}</h3>
                </div>
                <p className="mb-4 text-sm">{services[currentIndex].description}</p>
                <ul className="mb-1 space-y-2 flex-grow">
                  {services[currentIndex].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-5 space-x-3">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              // Clear auto-advance when user interacts
              if (autoAdvanceRef.current) {
                clearTimeout(autoAdvanceRef.current)
              }
              setDirection(idx > currentIndex ? 1 : -1)
              setCurrentIndex(idx)
              startAutoAdvance()
            }}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === idx ? "bg-black scale-110" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
