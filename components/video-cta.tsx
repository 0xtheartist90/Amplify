"use client"

import { useState, useEffect, memo } from "react"
import { CustomButton } from "./custom-button"

interface VideoCTAProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
  videoSrc: string
  isMobile?: boolean
  showOverlay?: boolean
}

const VideoCTA = memo(function VideoCTA({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  videoSrc,
  isMobile = false,
  showOverlay = true,
}: VideoCTAProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Use Intersection Observer to only load video when in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("video-cta-section")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <section id="video-cta-section" className="relative overflow-hidden py-16" aria-labelledby="cta-title">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        {showOverlay && <div className="video-overlay bg-black/40 bg-gradient-to-b from-black/20 to-black/60"></div>}
        {isLoaded && isVisible && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            aria-hidden="true"
            preload="none"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2
            id="cta-title"
            className={`${isMobile ? "text-3xl" : "text-4xl md:text-5xl"} font-ultra mb-6 text-shadow`}
          >
            {title}
          </h2>
          <p className={`${isMobile ? "text-base" : "text-xl"} mb-8 text-shadow`}>{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CustomButton
              href={primaryButtonLink}
              color="yellow"
              size={isMobile ? "default" : "large"}
              ariaLabel={primaryButtonText}
            >
              {primaryButtonText}
            </CustomButton>
            {secondaryButtonText && secondaryButtonLink ? (
              <CustomButton
                href={secondaryButtonLink}
                color="black"
                size={isMobile ? "default" : "large"}
                ariaLabel={secondaryButtonText}
              >
                {secondaryButtonText}
              </CustomButton>
            ) : (
              <CustomButton
                href="/services"
                color="black"
                size={isMobile ? "default" : "large"}
                ariaLabel="EXPLORE SERVICES"
              >
                EXPLORE SERVICES
              </CustomButton>
            )}
          </div>
        </div>
      </div>
    </section>
  )
})

export default VideoCTA
