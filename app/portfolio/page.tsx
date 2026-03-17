"use client"

import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import VideoCTA from "@/components/video-cta"
import { ScrollAnimation } from "@/components/scroll-animation"
import { PageWrapper } from "@/components/page-wrapper"
import { useLocale } from "@/lib/i18n"

export default function DesktopPortfolioPage() {
  const { locale } = useLocale()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [direction, setDirection] = useState(0)
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null)
  // Sample portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Ultimate Shape",
      category: locale === "nl" ? "Website ontwikkeling" : "Website Development",
      description:
        locale === "nl"
          ? "Moderne website voor een premium fitnessbedrijf met e-commercefunctionaliteit."
          : "Modern website for a premium fitness company with e-commerce functionality.",
      bgColor: "bg-purple",
      textColor: "text-white",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-1-5vGy0f0NFYHBW9LwUgcVrfhxdqqSM2.png",
    },
    {
      id: 2,
      title: "Fawaka",
      category: locale === "nl" ? "Branding, website & back-end systeem" : "Branding, Website & Back End System",
      description:
        locale === "nl"
          ? "Levendige merkidentiteit, website en bestelsysteem voor een Caribische bezorgservice."
          : "Vibrant brand identity, website and ordering system for a Caribbean food delivery service.",
      bgColor: "bg-yellow",
      textColor: "text-white",
      image: "/images/Portfolio/Portfolio%20Fawaka/fawaka-main.webp",
    },
    {
      id: 3,
      title: "Prysmic",
      category: "Branding & Website",
      description:
        locale === "nl"
          ? "Geometrische merkidentiteit en website voor een tech startup gericht op 3D-visualisatie."
          : "Geometric brand identity and website for a tech startup focused on 3D visualization.",
      bgColor: "bg-blue",
      textColor: "text-white",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-BFWh7NQ5nOrrcfllqAGmwu9G5Kyux2.png",
    },
    {
      id: 4,
      title: "Rise & Connect",
      category: "Branding & Website",
      description:
        locale === "nl"
          ? "Levendige merkidentiteit en website voor een non-profit empowermentorganisatie."
          : "Vibrant brand identity and website for a non-profit empowerment organization.",
      bgColor: "bg-pink",
      textColor: "text-white",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/riseconnectmain-Yx9mKGZDUKqLP13SKx8YE46pCailOe.png",
    },
    {
      id: 5,
      title: "SHE",
      category: locale === "nl" ? "Website ontwikkeling & merkidentiteit" : "Website Development & Brand Identity",
      description:
        locale === "nl"
          ? "Een veilig online platform gericht op herstel, bescherming en empowerment."
          : "A safe online platform focused on recovery, protection, and empowerment.",
      bgColor: "bg-[#0FAE9B]",
      textColor: "text-white",
      image: "/images/Portfolio/Portfolio%20SHE/portfolio-she-thumb.webp",
    },
    {
      id: 6,
      title: "Goldenbeauty",
      category: locale === "nl" ? "Branding & social media management" : "Branding & Social Media Management",
      description:
        locale === "nl"
          ? "Elegante merkidentiteit en social setup voor een beautymerk."
          : "Elegant brand identity and social presence setup for a beauty business.",
      bgColor: "bg-[#D6A84A]",
      textColor: "text-black",
      image: "/images/Portfolio/Portfolio%20goldenbeauty/portfolio%20thumbnail%20goldenbeauty.png",
    },
  ]

  const copy =
    locale === "nl"
      ? {
          heroAlt: "Portfolio achtergrond",
          ctaTitle: "Klaar voor vergelijkbare resultaten?",
          ctaDescription: "Laten we bespreken hoe we jouw merk kunnen helpen zijn marketingdoelen te bereiken.",
          primary: "START JE PROJECT",
          secondary: "ONTDEK DIENSTEN",
          goToProject: (title: string) => `Ga naar project ${title}`,
          goToSlide: (index: number) => `Ga naar slide ${index}`,
        }
      : {
          heroAlt: "Portfolio Background",
          ctaTitle: "Ready for Similar Results?",
          ctaDescription: "Let's discuss how we can help your brand achieve its marketing goals.",
          primary: "START YOUR PROJECT",
          secondary: "EXPLORE SERVICES",
          goToProject: (title: string) => `Go to project ${title}`,
          goToSlide: (index: number) => `Go to slide ${index}`,
        }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length)
  }

  const goToPrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const startAutoAdvance = () => {
    autoAdvanceRef.current = setTimeout(() => {
      goToNext()
    }, 5000)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (autoAdvanceRef.current) {
      clearTimeout(autoAdvanceRef.current)
    }
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart !== null) {
      setTouchEnd(e.targetTouches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return

    const distance = touchStart - touchEnd
    if (distance > 30) {
      goToNext()
    } else if (distance < -30) {
      goToPrev()
    }

    setTouchStart(null)
    setTouchEnd(null)
    startAutoAdvance()
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
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section with Full Background Image */}
        <section className="relative">
          <div className="hero-background-container">
            <img src="/images/portfolio-hero-new.webp" alt={copy.heroAlt} className="hero-background-image" />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container">
            <div
              className="md:hidden relative px-4 pb-0"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative overflow-hidden rounded-lg touch-pan-x">
                <div className="relative min-h-[420px]">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={portfolioItems[currentIndex].id}
                      custom={direction}
                      variants={{
                        enter: (currentDirection) => ({
                          x: currentDirection > 0 ? "100%" : "-100%",
                          opacity: 0,
                        }),
                        center: {
                          x: 0,
                          opacity: 1,
                        },
                        exit: (currentDirection) => ({
                          x: currentDirection < 0 ? "100%" : "-100%",
                          opacity: 0,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute w-full"
                    >
                      <Link
                        href={`/portfolio/${portfolioItems[currentIndex].id}`}
                        aria-label={copy.goToProject(portfolioItems[currentIndex].title)}
                        className={`${portfolioItems[currentIndex].bgColor} block rounded-[32px] border-2 border-black overflow-hidden shadow-lg`}
                      >
                        {portfolioItems[currentIndex].image ? (
                          <div className="h-56 bg-black/10 relative overflow-hidden">
                            <Image
                              src={portfolioItems[currentIndex].image || "/placeholder.svg"}
                              alt={portfolioItems[currentIndex].title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="h-56 bg-black/10"></div>
                        )}
                        <div className={`p-5 ${portfolioItems[currentIndex].textColor || "text-white"}`}>
                          <div className="text-sm font-medium mb-2">{portfolioItems[currentIndex].category}</div>
                          <h3 className="text-2xl font-ultra mb-2">{portfolioItems[currentIndex].title}</h3>
                          <p className="text-sm">{portfolioItems[currentIndex].description}</p>
                        </div>
                      </Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex justify-center mt-1 space-x-3">
                {portfolioItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (autoAdvanceRef.current) {
                        clearTimeout(autoAdvanceRef.current)
                      }
                      goToSlide(idx)
                    }}
                    className={`w-4 h-4 rounded-full transition-all ${
                      currentIndex === idx ? "bg-black scale-125 border-2 border-black" : "bg-black/25"
                    }`}
                    aria-label={copy.goToSlide(idx + 1)}
                    aria-current={currentIndex === idx}
                  />
                ))}
              </div>
            </div>

            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {portfolioItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/portfolio/${item.id}`}
                  className={`${item.bgColor} rounded-[32px] border-2 border-black overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl`}
                >
                  {item.image ? (
                    <div className="h-40 md:h-64 bg-black/10 relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="h-40 md:h-64 bg-black/10"></div>
                  )}
                  <div className={`p-3 md:p-6 ${item.textColor || "text-white"}`}>
                    <div className="text-xs md:text-sm font-medium mb-1 md:mb-2">{item.category}</div>
                    <h3 className="text-lg md:text-2xl font-ultra mb-1 md:mb-2">{item.title}</h3>
                    {/* Description only shows on desktop */}
                    <p className="hidden md:block text-base">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Video */}
        <ScrollAnimation variant="fadeIn">
          <VideoCTA
            title={copy.ctaTitle}
            description={copy.ctaDescription}
            primaryButtonText={copy.primary}
            primaryButtonLink="/contact"
            secondaryButtonText={copy.secondary}
            secondaryButtonLink="/services"
            videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16093600-uhd_3840_2160_30fps-7vh26NwfSO7mFV8MKSX8Kaoy8RXxQx.mp4"
          />
        </ScrollAnimation>
      </div>
    </PageWrapper>
  )
}
