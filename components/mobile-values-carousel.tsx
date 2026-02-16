"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileValuesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isSwiping, setIsSwiping] = useState(false)

  // Values data
  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of trends and technologies to deliver cutting-edge solutions for our clients.",
      icon: "/images/custom-solution.webp",
    },
    {
      title: "Authenticity",
      description: "We believe in creating genuine connections between brands and their audiences.",
      icon: "/images/onboarding.webp",
    },
    {
      title: "Results",
      description: "We're committed to delivering measurable outcomes that grow your business.",
      icon: "/images/retention.webp",
    },
  ]

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + values.length) % values.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Touch handlers for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsSwiping(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart) {
      setTouchEnd(e.targetTouches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    setIsSwiping(false)
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    if (distance < -30) {
      goToNext()
    } else if (distance > 30) {
      goToPrev()
    }

    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwiping) {
        goToNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isSwiping])

  return (
    <div className="relative px-4 pb-4">
      {/* Carousel Container */}
      <div
        className="relative overflow-hidden rounded-lg touch-pan-x min-h-[150px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => {
              if (offset.x > 50) {
                goToNext()
              } else if (offset.x < -50) {
                goToPrev()
              }
            }}
          >
            <div
              className="rounded-[32px] p-6 shadow-lg text-white border-2 border-black h-full text-center"
              style={{ backgroundColor: "#C084FC" }}
            >
              <div className="flex flex-col items-center gap-4">
                <Image
                  src={values[currentIndex].icon || "/placeholder.svg"}
                  alt={`${values[currentIndex].title} Icon`}
                  width={70}
                  height={70}
                  className="icon-pulse"
                />
                <div>
                  <h3 className="text-xl font-ultra mb-2" style={{ color: "#000" }}>
                    {values[currentIndex].title}
                  </h3>
                  <p className="text-sm leading-relaxed">{values[currentIndex].description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {values.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-125 border-2 border-black" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index}
          />
        ))}
      </div>
    </div>
  )
}
