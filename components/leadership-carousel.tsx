"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface LeaderData {
  name: string
  role: string
  imageSrc: string
  bgColor: string
  description: string
}

export default function LeadershipCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isSwiping, setIsSwiping] = useState(false)

  // Leaders data
  const leaders: LeaderData[] = [
    {
      name: "Aura R",
      role: "Founder & CEO",
      imageSrc: "/images/leader-aura.png",
      bgColor: "bg-yellow",
      description:
        "With over 5 years of experience in digital marketing, Aura founded Amplify with a vision to help brands find their authentic voice in the digital landscape.",
    },
    {
      name: "Rich P",
      role: "Creative Director",
      imageSrc: "/images/leader-richie.png",
      bgColor: "bg-pink",
      description:
        "Rich brings his extensive background in design and branding to lead our creative team in developing visually stunning and strategically sound brand identities.",
    },
    {
      name: "Ace B",
      role: "Director of Strategy",
      imageSrc: "/images/leader-ace.png",
      bgColor: "bg-blue",
      description:
        "Ace leverages his analytical mindset and marketing expertise to develop data-driven strategies that deliver measurable results for our clients.",
    },
  ]

  // Handle navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % leaders.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + leaders.length) % leaders.length)
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

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
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
    <div className="relative px-4 pb-10">
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
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x
              if (swipe < -50) {
                goToNext()
              } else if (swipe > 50) {
                goToPrev()
              }
            }}
          >
            <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg border-2 border-black">
              <div className={`h-48 ${leaders[currentIndex].bgColor} flex items-center justify-center p-4`}>
                <Image
                  src={leaders[currentIndex].imageSrc || "/placeholder.svg"}
                  alt={leaders[currentIndex].name}
                  width={180}
                  height={180}
                  className="object-contain w-full h-full max-h-[160px]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-ultra mb-2">{leaders[currentIndex].name}</h3>
                <p className="text-pink font-bold mb-4">{leaders[currentIndex].role}</p>
                <p className="mb-4">{leaders[currentIndex].description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {leaders.map((_, index) => (
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
