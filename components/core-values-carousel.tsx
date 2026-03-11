"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/lib/i18n"

interface ValueData {
  title: string
  description: string
  icon: string
}

export default function CoreValuesCarousel() {
  const { locale } = useLocale()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isSwiping, setIsSwiping] = useState(false)

  // Values data
  const values: ValueData[] =
    locale === "nl"
      ? [
          {
            title: "Innovatie",
            description:
              "Wij lopen voorop in trends en technologie om vernieuwende oplossingen voor onze klanten te leveren. In de snelle wereld van digitale marketing betekent stilstand achteruitgang.",
            icon: "/images/custom-solution.webp",
          },
          {
            title: "Authenticiteit",
            description:
              "Wij geloven in het opbouwen van echte connecties tussen merken en hun doelgroep. In een wereld vol scepsis is authenticiteit de basis van vertrouwen en loyaliteit.",
            icon: "/images/onboarding.webp",
          },
          {
            title: "Resultaat",
            description:
              "Wij leveren meetbare resultaten die je bedrijf laten groeien. Mooi creatief werk is belangrijk, maar we verliezen het einddoel nooit uit het oog: echte bedrijfsresultaten.",
            icon: "/images/retention.webp",
          },
        ]
      : [
          {
            title: "Innovation",
            description:
              "We stay ahead of trends and technologies to deliver cutting-edge solutions for our clients. In the fast-paced world of digital marketing, standing still means falling behind.",
            icon: "/images/custom-solution.webp",
          },
          {
            title: "Authenticity",
            description:
              "We believe in creating genuine connections between brands and their audiences. In a world of increasing skepticism, authenticity is the foundation of trust and loyalty.",
            icon: "/images/onboarding.webp",
          },
          {
            title: "Results",
            description:
              "We're committed to delivering measurable outcomes that grow your business. Beautiful creative work is important, but we never lose sight of the bottom line: driving real business results.",
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
    const isLeftSwipe = distance > 30
    const isRightSwipe = distance < -30

    if (isRightSwipe) {
      goToNext()
    } else if (isLeftSwipe) {
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
        className="relative overflow-hidden rounded-lg touch-pan-x"
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
              className="rounded-[32px] p-6 shadow-lg text-white border-2 border-black h-full"
              style={{ backgroundColor: "#C084FC" }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={values[currentIndex].icon || "/placeholder.svg"}
                  alt={`${values[currentIndex].title} Icon`}
                  width={50}
                  height={50}
                  className="mr-3 icon-pulse"
                />
                <h3 className="text-xl font-ultra" style={{ color: "#000" }}>
                  {values[currentIndex].title}
                </h3>
              </div>
              <p className="text-sm">{values[currentIndex].description}</p>
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
