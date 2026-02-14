"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ServiceIcon from "@/components/service-icon"

interface ServiceItem {
  title: string
  icon: string
  iconBg: string
  description: string
  features: string[]
}

interface MobileServicesCarouselProps {
  services: ServiceItem[]
}

export default function MobileServicesCarousel({ services }: MobileServicesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [direction, setDirection] = useState(0)
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null)

  // Handle navigation
  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const goToPrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
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
    <div className="relative px-4 pb-10">
      {/* Carousel Container */}
      <div
        className="relative overflow-hidden rounded-lg touch-pan-x"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative h-[420px]">
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
              <div className="bg-white text-black rounded-lg p-5 shadow-lg border-2 border-black h-full flex flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className={`w-10 h-10 flex items-center justify-center mr-3 ${
                      services[currentIndex].iconBg || "bg-pink"
                    } rounded-full shadow-lg`}
                  >
                    <ServiceIcon name={services[currentIndex].icon} size={24} color="#fff" />
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
              if (autoAdvanceRef.current) {
                clearTimeout(autoAdvanceRef.current)
              }
              goToSlide(idx)
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
