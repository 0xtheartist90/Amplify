"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ProcessStep {
  number: number
  title: string
  description: string
  bgColor: string
}

interface MobileProcessCarouselProps {
  steps: ProcessStep[]
}

export default function MobileProcessCarousel({ steps }: MobileProcessCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [direction, setDirection] = useState(0)
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null)

  // Handle navigation
  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length)
  }

  const goToPrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Touch handlers for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current)
    }
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart) {
      setTouchEnd(e.targetTouches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 30
    const isRightSwipe = distance < -30

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrev()
    }

    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
    startAutoAdvance()
  }

  // Auto-advance carousel
  const startAutoAdvance = () => {
    autoAdvanceRef.current = setTimeout(() => {
      goToNext()
    }, 5000)
  }

  useEffect(() => {
    startAutoAdvance()
    return () => {
      if (autoAdvanceRef.current) {
        clearTimeout(autoAdvanceRef.current)
      }
    }
  }, [currentIndex])

  return (
    <div className="relative px-4 pb-2">
      {/* Carousel Container */}
      <div
        className="relative overflow-hidden rounded-lg touch-pan-x"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative min-h-[420px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={{
                enter: (direction) => ({
                  x: direction > 0 ? "100%" : "-100%",
                  opacity: 0,
                }),
                center: {
                  x: 0,
                  opacity: 1,
                },
                exit: (direction) => ({
                  x: direction < 0 ? "100%" : "-100%",
                  opacity: 0,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full"
            >
              <div className="rounded-[28px] border-2 border-black bg-white overflow-hidden flex flex-col min-h-[420px]">
                <div className="bg-[#F44976] text-white p-6 flex flex-col flex-1">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center text-2xl font-ultra">
                      {steps[currentIndex].number}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-ultra" style={{ color: "#FFE45E" }}>
                      {steps[currentIndex].title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed whitespace-pre-line flex-1">{steps[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-5 space-x-3">
        {steps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (autoAdvanceRef.current) {
                clearTimeout(autoAdvanceRef.current)
              }
              goToSlide(idx)
            }}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === idx
                ? "bg-[#F44976] scale-125 border-2 border-black"
                : "bg-[#F44976]/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
