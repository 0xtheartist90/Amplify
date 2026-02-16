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
  compact?: boolean
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
  compact = false,
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

  const sectionPadding = compact ? "py-0 md:py-16" : "py-16"
  const titleMargin = compact ? "mb-0" : "mb-6"
  const descriptionMargin = compact ? "mb-0" : "mb-8"
  const buttonGap = compact ? "gap-1" : "gap-4"
  const contentPadding = compact ? "p-0" : "pt-4 pb-0"
  const contentOffset = compact ? "-mt-10" : ""
  const buttonOffset = compact ? "mt-6" : "mt-4"
  const mobileButtonLayout = compact || isMobile
  const buttonWidthClass = mobileButtonLayout ? "w-[210px] md:w-auto" : "min-w-[180px]"
  const buttonTextClass = mobileButtonLayout ? "uppercase tracking-wide" : ""

  return (
    <section
      id="video-cta-section"
      className={`relative overflow-hidden ${sectionPadding}`}
      aria-labelledby="cta-title"
    >
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
      <div className={`relative z-10 container ${contentPadding} ${contentOffset}`}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2
            id="cta-title"
            className={`${isMobile ? "text-3xl" : "text-4xl md:text-5xl"} font-ultra ${titleMargin} text-shadow`}
          >
            {title}
          </h2>
          <p className={`${isMobile ? "text-base" : "text-xl"} ${descriptionMargin} text-shadow`}>{description}</p>
          <div className={`flex justify-center ${buttonGap} flex-wrap ${buttonOffset}`}>
            <CustomButton
              href={primaryButtonLink}
              color="yellow"
              size={isMobile ? "default" : "large"}
              ariaLabel={primaryButtonText}
              className={`${buttonWidthClass} whitespace-nowrap ${buttonTextClass}`}
            >
              {primaryButtonText}
            </CustomButton>
            {secondaryButtonText && secondaryButtonLink ? (
              <CustomButton
                href={secondaryButtonLink}
                color="black"
                size={isMobile ? "default" : "large"}
                ariaLabel={secondaryButtonText}
                className={`${buttonWidthClass} whitespace-nowrap ${buttonTextClass}`}
              >
                {secondaryButtonText}
              </CustomButton>
            ) : (
              <CustomButton
                href="/services"
                color="black"
                size={isMobile ? "default" : "large"}
                ariaLabel="EXPLORE SERVICES"
                className={`${buttonWidthClass} whitespace-nowrap ${buttonTextClass}`}
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
