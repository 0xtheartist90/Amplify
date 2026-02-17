"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import VideoCTA from "@/components/video-cta"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import React, { useState, useEffect, useCallback, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ImageLightbox from "@/components/image-lightbox"

// Update the portfolioItems array with correct service categories
const portfolioItems = [
  {
    id: "1",
    title: "Ultimate Shape",
    client: "Ultimate Shape Fitness",
    category: "Website Development",
    description: "Modern website for a premium fitness company with e-commerce functionality.",
    challenge:
      "Ultimate Shape needed a distinctive website that would appeal to serious fitness enthusiasts while differentiating them from mainstream gyms. They required a sleek, modern look that conveyed strength and precision.",
    solution:
      "We developed a clean, user-friendly website with a monochromatic palette and subtle gradients that gives them a premium, modern feel that stands out in the fitness industry. The e-commerce functionality allows customers to easily browse and purchase their nutrition products.",
    results:
      "The new website led to a 45% increase in online sales and significantly improved brand recognition in their target demographic. Their website conversion rate improved by 60% with the new design.",
    services: ["Website Design", "E-commerce Development", "UI/UX Design", "Product Photography", "Content Strategy"],
    bgColor: "bg-black",
    textColor: "text-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-1-5vGy0f0NFYHBW9LwUgcVrfhxdqqSM2.png",
    website: "",
  },
  {
    id: "2",
    title: "Fawaka",
    client: "Fawaka Food Delivery",
    category: "Branding, Website & Back End System",
    description: "Vibrant brand identity, website and ordering system for a Caribbean food delivery service.",
    challenge:
      "Fawaka needed a complete brand overhaul that would capture the vibrant, joyful essence of Caribbean cuisine while establishing a memorable visual identity in the competitive food delivery market. They also required a robust back end system to manage orders.",
    solution:
      "We created a colorful, tropical-inspired brand identity centered around a cheerful illustrated character. The bright color palette of yellows, reds, and turquoise evokes the sunny Caribbean atmosphere. We developed a user-friendly website with an integrated ordering system and back end management tools.",
    results:
      "The rebranding and new system led to a 75% increase in brand recognition and a 40% boost in new customer acquisition. Order processing efficiency improved by 65% with the new back end system.",
    services: [
      "Brand Strategy",
      "Character Design",
      "Visual Identity",
      "Website Development",
      "Back End System",
      "Order Management",
    ],
    bgColor: "bg-yellow-400",
    textColor: "text-black",
    image: "/images/fawaka-main.webp",
    website: "https://www.fawaka.com",
  },
  {
    id: "3",
    title: "Prysmic",
    client: "Prysmic Technologies",
    category: "Branding & Website",
    description: "Geometric brand identity and website for a tech startup focused on 3D visualization.",
    challenge:
      "Prysmic, a new tech startup specializing in 3D visualization software, needed a brand identity and website that would convey innovation, precision, and sophistication to appeal to enterprise clients.",
    solution:
      "We developed a minimal, geometric brand centered around a distinctive pyramid motif with purple accents to suggest creativity within a structured framework. The clean lines and mathematical precision reflect their technical expertise. The website showcases their technology with interactive demos and clear service offerings.",
    results:
      "The new brand identity and website helped Prysmic secure three major enterprise clients within the first quarter after launch. They reported that their professional image significantly improved credibility in sales meetings.",
    services: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Website Design",
      "UI/UX Development",
      "Interactive Demos",
    ],
    bgColor: "bg-blue",
    textColor: "text-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-BFWh7NQ5nOrrcfllqAGmwu9G5Kyux2.png",
    website: "https://www.prysmic.io/",
  },
  {
    id: "4",
    title: "Rise & Connect",
    client: "Stichting Rise & Connect",
    category: "Branding & Website",
    description: "Vibrant brand identity and website for a non-profit empowerment organization.",
    challenge:
      "Rise & Connect needed a warm, inclusive brand identity and website that would resonate with their diverse community while effectively communicating their mission of empowerment, connection, and growth.",
    solution:
      "We developed a comprehensive brand strategy centered on vibrant colors and inclusive imagery. The logo features hands supporting a human figure with radiating energy, symbolizing growth and connection. We created a responsive website that facilitates resource sharing and event registration.",
    results:
      "The new brand identity and website helped Rise & Connect increase program participation by 65% and secure three new major funding partnerships. Their online presence has significantly improved their reach and impact.",
    services: ["Brand Development", "Logo Design", "Website Design", "Social Media Strategy", "Event Promotion"],
    bgColor: "bg-teal-500",
    textColor: "text-white",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/riseconnectmain-Yx9mKGZDUKqLP13SKx8YE46pCailOe.png",
    website: "https://www.riseandconnect.nl/",
  },
  // Add more portfolio items as needed
]

export default function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params)
  const portfolio = portfolioItems.find((item) => item.id === id)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string>("")
  const [activeProjectImage, setActiveProjectImage] = useState<string | null>(null)
  const [activeProjectImageAlt, setActiveProjectImageAlt] = useState<string>("")
  const [projectThumbnails, setProjectThumbnails] = useState<{ src: string; alt: string }[]>([])

  // Add this after the existing state declarations
  const touchStartX = useRef<number | null>(null)
  const [direction, setDirection] = useState(0)

  // Function to open lightbox
  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src)
    setLightboxAlt(alt)
  }

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxImage(null)
  }

  // Cards for the carousel
  const cards = [
    {
      title: "The Challenge",
      content: portfolio?.challenge || "",
      className: "text-black",
      style: { backgroundColor: "#FFE45E" },
    },
    {
      title: "Our Solution",
      content: portfolio?.solution || "",
      className: "text-white",
      style: { backgroundColor: "#A855F7" },
    },
    {
      title: "The Results",
      content: portfolio?.results || "",
      className: "text-white",
      style: { backgroundColor: "#0FAE9B" },
    },
  ]

  // Autoplay functionality
  useEffect(() => {
    // No autoplay, just initialize the carousel
  }, [])

  // Handle manual navigation
  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index)
    setIsPaused(true) // Pause autoplay when manually navigating

    // Resume autoplay after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsPaused(false)
    }, 10000)

    return () => clearTimeout(timeout)
  }, [])

  if (!portfolio) {
    notFound()
  }

  // Get thumbnail images based on portfolio ID
  const getThumbnailImages = () => {
    if (portfolio.id === "1") {
      return [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ultimate%20shape%20project03-U0uhTBShmH9QyU6wbv3zrdGRlVWLFh.png",
          alt: "Ultimate Shape Website Hero",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ultimate%20shape%20project02-J1Y8igURYXtPzzRMqDKxArH4hdFO0h.png",
          alt: "Ultimate Shape Store Page",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ultimate%20shape%20project04-mqaZiGkxu1jWHgSzW18M5ucH4AC9y1.png",
          alt: "Ultimate Shape Product Packaging",
        },
      ]
    } else if (portfolio.id === "2") {
      return [
        {
          src: "/images/fawaka-burgers.webp",
          alt: "Fawaka Food",
        },
        {
          src: "/images/fawaka-delivery.webp",
          alt: "Fawaka Delivery",
        },
        {
          src: "/images/fawaka-scooter.webp",
          alt: "Fawaka Scooter",
        },
      ]
    } else if (portfolio.id === "3") {
      return [
        {
          src: "/images/prysmic-homepage.webp",
          alt: "Prysmic Homepage",
        },
        {
          src: "/images/prysmic-trusted.webp",
          alt: "Prysmic Trusted by Industry Leaders",
        },
        {
          src: "/images/prysmic-usecases.webp",
          alt: "Prysmic Use Cases",
        },
      ]
    } else if (portfolio.id === "4") {
      return [
        {
          src: "/images/rise-and-connect-illustration.webp",
          alt: "Rise & Connect Community Members",
        },
        {
          src: "/images/rise-and-connect-community.webp",
          alt: "Rise & Connect Community Event",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_5807655478187118404_y.jpg-DExkp6CElUYI0SOS8qc2um5sWX3sMy.jpeg",
          alt: "Rise & Connect Mentorship",
        },
      ]
    }
    return []
  }

  const baseThumbnailImages = useMemo(() => getThumbnailImages(), [portfolio?.id])

  const uniqueGalleryImages = useMemo(() => {
    const images: { src: string; alt: string }[] = []
    const seen = new Set<string>()

    const addImage = (image?: { src?: string; alt?: string }) => {
      if (!image?.src || seen.has(image.src)) return
      seen.add(image.src)
      images.push({ src: image.src, alt: image.alt || portfolio?.title || "Project image" })
    }

    addImage(portfolio?.image ? { src: portfolio.image, alt: portfolio?.title || "Project image" } : undefined)
    baseThumbnailImages.forEach(addImage)

    return images
  }, [portfolio?.image, portfolio?.title, baseThumbnailImages])

  useEffect(() => {
    if (uniqueGalleryImages.length > 0) {
      setActiveProjectImage(uniqueGalleryImages[0].src)
      setActiveProjectImageAlt(uniqueGalleryImages[0].alt)
      setProjectThumbnails(uniqueGalleryImages.slice(1))
    } else {
      setActiveProjectImage(null)
      setActiveProjectImageAlt("")
      setProjectThumbnails([])
    }
  }, [uniqueGalleryImages])

  const handleThumbnailClick = useCallback(
    (index: number) => {
      setProjectThumbnails((prev) => {
        if (!activeProjectImage || index < 0 || index >= prev.length) {
          return prev
        }

        const clickedImage = prev[index]
        if (!clickedImage) {
          return prev
        }

        const next = [...prev]
        next[index] = {
          src: activeProjectImage,
          alt: activeProjectImageAlt,
        }

        setActiveProjectImage(clickedImage.src)
        setActiveProjectImageAlt(clickedImage.alt)

        return next
      })
    },
    [activeProjectImage, activeProjectImageAlt]
  )

  return (
    <>
      {/* Hero Image Section - Clean with no overlay */}
      <section className="w-full relative">
        {portfolio.image ? (
          <div
            className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden cursor-pointer"
            onClick={() => openLightbox(portfolio.image, portfolio.title)}
          >
            <Image
              src={portfolio.image || "/placeholder.svg"}
              alt={portfolio.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className={`${portfolio.bgColor} w-full h-[60vh] md:h-[70vh]`}></div>
        )}
      </section>

      {/* Navigation Controls - Moved here */}
      <div className="my-8 flex justify-center">
        <div
          className="inline-flex flex-row items-center justify-center"
          style={{ display: "inline-flex", flexDirection: "row", whiteSpace: "nowrap" }}
        >
          <Link
            href={`/portfolio/${Number(portfolio.id) > 1 ? Number(portfolio.id) - 1 : portfolioItems.length}`}
            className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-black hover:bg-pink hover:text-white transition-colors border-2 border-black mr-2 sm:mr-3"
            aria-label="Previous project"
          >
            <ArrowLeft size={16} className="sm:hidden" />
            <ArrowLeft size={20} className="hidden sm:block" />
          </Link>
          <Link
            href="/portfolio"
            className="px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-black text-white hover:bg-pink transition-colors rounded-full font-bold whitespace-nowrap flex-shrink-0 text-xs sm:text-sm mx-1 sm:mx-2"
          >
            ALL PROJECTS
          </Link>
          <Link
            href={`/portfolio/${Number(portfolio.id) < portfolioItems.length ? Number(portfolio.id) + 1 : 1}`}
            className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-black hover:bg-pink hover:text-white transition-colors border-2 border-black ml-2 sm:ml-3"
            aria-label="Next project"
          >
            <ArrowRight size={16} className="sm:hidden" />
            <ArrowRight size={20} className="hidden sm:block" />
          </Link>
        </div>
      </div>

      {/* Project Title Section - Moved below the hero image */}
      <section className={`${portfolio.bgColor} ${portfolio.textColor} py-12`}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-sm font-medium mb-2">{portfolio.category}</div>
            <h1 className="text-5xl md:text-7xl font-ultra mb-6">{portfolio.title}</h1>
            <p className="text-xl mb-8">{portfolio.description}</p>
            {portfolio.website && (
              <a
                href={portfolio.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-opacity-90 transition-all"
              >
                <span>Visit Website</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div className="md:col-span-2">
              {activeProjectImage ? (
                <div className="relative w-full aspect-[16/9] rounded-lg mb-4 md:mb-8 overflow-hidden">
                  <Image
                    src={activeProjectImage || "/placeholder.svg"}
                    alt={activeProjectImageAlt || portfolio.title}
                    fill
                    className="object-cover transition-transform duration-300"
                    priority
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-[16/9] bg-gray-200 rounded-lg mb-4 md:mb-8"></div>
              )}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
                {projectThumbnails.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border-2 border-transparent transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black/30 hover:border-black hover:scale-[1.01]"
                    onClick={() => handleThumbnailClick(index)}
                    aria-pressed="false"
                    aria-label={`View ${image.alt}`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-ultra mb-4 md:mb-6">Project Details</h2>

              <div className="mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Client</h3>
                <p className="text-sm md:text-base">{portfolio.client}</p>
              </div>

              <div className="mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Services</h3>
                <ul className="text-sm md:text-base space-y-0 md:space-y-1">
                  {portfolio.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>

              {/* Year section removed as requested */}

              {portfolio.website && (
                <div className="mt-6">
                  <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">Website</h3>
                  <a
                    href={portfolio.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    {portfolio.website.replace("https://", "")}
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Results - Autoplay Carousel */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4">
          <h2 className="text-3xl font-ultra mb-8 text-center">Project Journey</h2>

          <div className="relative">
            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <div className="relative overflow-hidden">
                {/* Card Container */}
                <div className="relative min-h-[400px]">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={activeSlide}
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
                      className={`absolute w-full p-6 rounded-[32px] border-2 border-black shadow-lg ${cards[activeSlide].className}`}
                      style={{
                        ...(cards[activeSlide].style || {}),
                        height: "auto",
                        minHeight: "400px",
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, info) => {
                        const threshold = 50
                        if (info.offset.x < -threshold) {
                          setDirection(1)
                          setActiveSlide((prev) => (prev + 1) % cards.length)
                        } else if (info.offset.x > threshold) {
                          setDirection(-1)
                          setActiveSlide((prev) => (prev - 1 + cards.length) % cards.length)
                        }
                      }}
                    >
                      <h3 className="text-2xl font-ultra mb-4">{cards[activeSlide].title}</h3>
                      <p className="text-base">{cards[activeSlide].content}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 pb-4">
                  {cards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > activeSlide ? 1 : -1)
                        setActiveSlide(index)
                      }}
                      className="mx-2 focus:outline-none"
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={activeSlide === index ? "true" : "false"}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          activeSlide === index ? "bg-black border-2 border-white" : "bg-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className={`rounded-[32px] border-2 border-black shadow-lg p-8 ${card.className}`}
                  style={card.style}
                >
                  <h3 className="text-2xl font-ultra mb-4">{card.title}</h3>
                  <p>{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-blue text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-ultra mb-8">Client Testimonial</h2>
            <p className="text-xl italic mb-6">
              "Working with Amplify was a game-changer for our brand. Their strategic approach and creative execution
              helped us connect with our audience in meaningful ways and drive real business results."
            </p>
            <p className="font-bold">- Marketing Director, {portfolio.client}</p>
          </div>
        </div>
      </section>

      {/* CTA Section with Video */}
      <VideoCTA
        title="Ready for Similar Results?"
        description="Let's discuss how we can help your brand achieve its marketing goals."
        primaryButtonText="START YOUR PROJECT"
        primaryButtonLink="/contact"
        secondaryButtonText="EXPLORE SERVICES"
        secondaryButtonLink="/services"
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5084528-uhd_3840_2160_30fps-cHscNuYVDQZ28cDNqYATgpvB7hmXeD.mp4"
      />

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox src={lightboxImage || "/placeholder.svg"} alt={lightboxAlt} onClose={closeLightbox} />
      )}
    </>
  )
}
