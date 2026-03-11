"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "@/lib/i18n"

interface LeaderData {
  name: string
  role: string
  imageSrc: string
  bgColor: string
  description: string
}

export default function LeadershipCarousel() {
  const { locale } = useLocale()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isSwiping, setIsSwiping] = useState(false)

  // Leaders data
  const leaders: LeaderData[] =
    locale === "nl"
      ? [
          {
            name: "Aura R",
            role: "Oprichter & CEO",
            imageSrc: "/images/Teampfp_Aura.webp",
            bgColor: "bg-yellow",
            description:
              "Met meer dan 5 jaar ervaring in digitale marketing richtte Aura Amplify op met de visie om merken te helpen hun authentieke stem te vinden in het digitale landschap.",
          },
          {
            name: "Rich P",
            role: "Creative Director",
            imageSrc: "/images/Teampfp_rich%20p.webp",
            bgColor: "bg-pink",
            description:
              "Rich gebruikt zijn brede achtergrond in design en branding om ons creatieve team te leiden bij het ontwikkelen van visueel sterke en strategisch onderbouwde merkidentiteiten.",
          },
          {
            name: "Ace B",
            role: "Director of Strategy",
            imageSrc: "/images/Teampfp_ace%20b.webp",
            bgColor: "bg-blue",
            description:
              "Ace zet zijn analytische blik en marketingexpertise in om datagedreven strategieen te ontwikkelen die meetbare resultaten opleveren voor onze klanten.",
          },
        ]
      : [
          {
            name: "Aura R",
            role: "Founder & CEO",
            imageSrc: "/images/Teampfp_Aura.webp",
            bgColor: "bg-yellow",
            description:
              "With over 5 years of experience in digital marketing, Aura founded Amplify with a vision to help brands find their authentic voice in the digital landscape.",
          },
          {
            name: "Rich P",
            role: "Creative Director",
            imageSrc: "/images/Teampfp_rich%20p.webp",
            bgColor: "bg-pink",
            description:
              "Rich brings his extensive background in design and branding to lead our creative team in developing visually stunning and strategically sound brand identities.",
          },
          {
            name: "Ace B",
            role: "Director of Strategy",
            imageSrc: "/images/Teampfp_ace%20b.webp",
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
            onDragEnd={(e, { offset }) => {
              if (offset.x > 50) {
                goToNext()
              } else if (offset.x < -50) {
                goToPrev()
              }
            }}
          >
            <div className="max-w-sm mx-auto">
              <div className="rounded-[36px] bg-[#FB97B2] p-0">
                <div className="rounded-[28px] border-2 border-black bg-white overflow-hidden flex flex-col">
                  <div
                    className={`${leaders[currentIndex].bgColor} flex items-center justify-center w-full aspect-square p-0 m-0`}
                    style={{ margin: 0 }}
                  >
                    <Image
                      src={leaders[currentIndex].imageSrc || "/placeholder.svg"}
                      alt={leaders[currentIndex].name}
                      width={256}
                      height={256}
                      className="object-cover w-full h-full block"
                      style={{ margin: 0 }}
                    />
                  </div>
                  <div className="p-6 text-black">
                    <h3 className="text-3xl font-ultra mb-1">{leaders[currentIndex].name}</h3>
                    <p className="text-[#F44976] font-bold text-lg mb-4">{leaders[currentIndex].role}</p>
                    <p className="text-base leading-relaxed">{leaders[currentIndex].description}</p>
                  </div>
                </div>
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
