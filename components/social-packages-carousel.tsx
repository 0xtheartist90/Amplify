"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SocialPackage {
  name: string
  price: string
  description: string
  perMonth: string[]
  alsoIncluded: string[]
  accent: string
  starColor: string
}

interface SocialPackagesCarouselProps {
  packages: SocialPackage[]
}

export default function SocialPackagesCarousel({ packages }: SocialPackagesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isSwiping, setIsSwiping] = useState(false)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % packages.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + packages.length) % packages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

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

    setTouchStart(null)
    setTouchEnd(null)
  }

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
            <div className="max-w-sm mx-auto h-[760px]">
              <div className="rounded-[28px] border-2 border-black bg-white overflow-hidden flex flex-col h-full">
                <div className="bg-[#F44976] text-white p-6 flex flex-col flex-1">
                  <div className="relative mb-8 min-h-[3rem]">
                    <div className="absolute left-0 top-0 rounded-2xl px-3 py-2 text-[0.6rem] tracking-[0.3em] bg-white/20 whitespace-nowrap">
                      SERVICE
                    </div>
                    <div className="absolute right-0 top-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10">
                      <span className={`text-xl ${packages[currentIndex].starColor}`}>★</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-3xl font-ultra" style={{ color: "#FFE45E" }}>
                      {packages[currentIndex].name}
                    </h3>
                    <p className={`text-lg font-semibold ${packages[currentIndex].accent}`}>{packages[currentIndex].price}</p>
                    <p className="text-sm mt-2 text-white/80">{packages[currentIndex].description}</p>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="font-semibold text-white text-base mb-2">Includes per month</h4>
                      <ul className="text-sm space-y-1">
                        {packages[currentIndex].perMonth.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-base mb-2">Also included</h4>
                      <ul className="text-sm space-y-1">
                        {packages[currentIndex].alsoIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-4">
        {packages.map((pkg, idx) => (
          <button
            key={pkg.name}
            onClick={() => goToSlide(idx)}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === idx
                ? "bg-[#F44976] scale-125 border-2 border-black"
                : "bg-[#F44976]/40"
            }`}
            aria-label={`Go to ${pkg.name} package`}
            aria-current={currentIndex === idx}
          />
        ))}
      </div>
    </div>
  )
}
