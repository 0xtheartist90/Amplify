"use client"

import Image from "next/image"
import VideoCTA from "@/components/video-cta"
import { PageWrapper } from "@/components/page-wrapper"
import { CustomButton } from "@/components/custom-button"
import { useRef, useEffect, useState } from "react"

export default function DesktopServicesPage() {
  // Use refs to implement intersection observer for animations
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [visibleSections, setVisibleSections] = useState<boolean[]>([false, false, false, false, false])

  // Set up intersection observer for more efficient animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the index of the section that is intersecting
          const index = sectionRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1) {
            setVisibleSections((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        }
      })
    }, options)

    // Observe all section refs
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section - Full Background Image */}
        <section ref={(el: HTMLElement | null) => { sectionRefs.current[0] = el }} className="relative">
          <div
            className={`hero-background-container transition-opacity duration-700 ${
              visibleSections[0] ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/images/services-hero-new.webp"
              alt="Services Background"
              className="hero-background-image"
              style={{ willChange: "transform" }}
            />
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
              {/* Service 1 - Socials */}
              <div ref={(el: HTMLElement | null) => { sectionRefs.current[1] = el }} className="flex flex-col h-full">
                <div
                  className={`bg-pink rounded-[32px] border-2 border-black p-4 md:p-8 text-white h-full flex flex-col shadow-lg transition-all duration-200 ease-out transform hover:-translate-y-2 hover:shadow-2xl ${
                    visibleSections[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
                  }`}
                  style={{
                    willChange: "transform, opacity",
                    transitionDelay: "0.1s",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-3 bg-white bg-opacity-20 rounded-full shadow-lg">
                      <Image
                        src="/images/socials.webp"
                        alt="Socials Icon"
                        width={40}
                        height={40}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-ultra text-center">Socials</h2>
                  </div>
                  <p className="mb-4 md:mb-6 flex-grow text-center text-sm md:text-base">
                    Strategic management of your social media presence to build engagement and drive conversions.
                  </p>
                  <div className="mt-auto text-center">
                    <CustomButton href="/services/socials" color="yellow">
                      EXPLORE
                    </CustomButton>
                  </div>
                </div>
              </div>

              {/* Service 2 - Ads */}
              <div ref={(el: HTMLElement | null) => { sectionRefs.current[2] = el }} className="flex flex-col h-full">
                <div
                  className={`bg-yellow rounded-[32px] border-2 border-black p-4 md:p-8 h-full flex flex-col shadow-lg transition-all duration-200 ease-out transform hover:-translate-y-2 hover:shadow-2xl ${
                    visibleSections[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
                  }`}
                  style={{
                    willChange: "transform, opacity",
                    transitionDelay: "0.3s",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-3 bg-white bg-opacity-20 rounded-full shadow-lg">
                      <Image
                        src="/images/ads.webp"
                        alt="Ads Icon"
                        width={40}
                        height={40}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-ultra text-center text-white">Ads</h2>
                  </div>
                  <p className="mb-4 md:mb-6 flex-grow text-center text-sm md:text-base">
                    Targeted advertising campaigns that reach your ideal customers and maximize ROI.
                  </p>
                  <div className="mt-auto text-center">
                    <CustomButton href="/services/ads" color="pink">
                      EXPLORE
                    </CustomButton>
                  </div>
                </div>
              </div>

              {/* Service 3 - Branding */}
              <div ref={(el: HTMLElement | null) => { sectionRefs.current[3] = el }} className="flex flex-col h-full">
                <div
                  className={`bg-blue rounded-[32px] border-2 border-black p-4 md:p-8 text-white h-full flex flex-col shadow-lg transition-all duration-200 ease-out transform hover:-translate-y-2 hover:shadow-2xl ${
                    visibleSections[3] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
                  }`}
                  style={{
                    willChange: "transform, opacity",
                    transitionDelay: "0.5s",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-3 bg-white bg-opacity-20 rounded-full shadow-lg">
                      <Image
                        src="/images/branding.webp"
                        alt="Branding Icon"
                        width={40}
                        height={40}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-ultra text-center">Branding</h2>
                  </div>
                  <p className="mb-4 md:mb-6 flex-grow text-center text-sm md:text-base">
                    Develop a distinctive brand identity that resonates with your audience and stands out in a crowded
                    marketplace.
                  </p>
                  <div className="mt-auto text-center">
                    <CustomButton href="/services/branding" color="black">
                      EXPLORE
                    </CustomButton>
                  </div>
                </div>
              </div>

              {/* Service 4 - Website */}
              <div ref={(el: HTMLElement | null) => { sectionRefs.current[4] = el }} className="flex flex-col h-full">
                <div
                  className={`bg-purple rounded-[32px] border-2 border-black p-4 md:p-8 text-white h-full flex flex-col shadow-lg transition-all duration-200 ease-out transform hover:-translate-y-2 hover:shadow-2xl ${
                    visibleSections[4] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
                  }`}
                  style={{
                    willChange: "transform, opacity",
                    transitionDelay: "0.7s",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-2 md:mb-3 bg-white bg-opacity-20 rounded-full shadow-lg">
                      <Image
                        src="/images/website.webp"
                        alt="Website Icon"
                        width={40}
                        height={40}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-ultra text-center">Website</h2>
                  </div>
                  <p className="mb-4 md:mb-6 flex-grow text-center text-sm md:text-base">
                    Custom website design and development that converts visitors into customers.
                  </p>
                  <div className="mt-auto text-center">
                    <CustomButton href="/services/website" color="yellow">
                      EXPLORE
                    </CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Video */}
        <div
          className={`transition-opacity duration-1000 ${visibleSections[4] ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "0.9s" }}
        >
          <VideoCTA
            title="Ready to Get Started?"
            description="Let's discuss how our services can help your business grow."
            primaryButtonText="CONTACT US"
            primaryButtonLink="/contact"
            secondaryButtonText="VIEW OUR WORK"
            secondaryButtonLink="/portfolio"
            videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5084245-uhd_3840_2160_30fps-8s7yFArT5t48cFKRZIG3dvktVjc4Vd.mp4"
          />
        </div>
      </div>
    </PageWrapper>
  )
}
