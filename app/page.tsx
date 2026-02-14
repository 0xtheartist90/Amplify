"use client"

import { CustomButton } from "@/components/custom-button"
import Image from "next/image"
import VideoCTA from "@/components/video-cta"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollAnimation } from "@/components/scroll-animation"
import { FloatingAnimation } from "@/components/floating-animation"
import MobileValuesCarousel from "@/components/mobile-values-carousel"
import { useState } from "react"

type ServiceCard = {
  id: string
  title: string
  description: string
  icon: string
  link: string
}

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "socials",
    title: "Socials",
    description: "Strategic management of your social media presence to build engagement and drive conversions.",
    icon: "/images/socials.png",
    link: "/services/socials",
  },
  {
    id: "ads",
    title: "Ads",
    description: "Targeted campaigns that maximize ROI and put your brand in front of the right audience.",
    icon: "/images/ads.png",
    link: "/services/ads",
  },
  {
    id: "branding",
    title: "Branding",
    description: "Distinctive brand identity systems that resonate across every touchpoint.",
    icon: "/images/branding.png",
    link: "/services/branding",
  },
  {
    id: "website",
    title: "Website",
    description: "Custom web experiences built to convert visitors into loyal customers.",
    icon: "/images/website.png",
    link: "/services/website",
  },
]

export default function DesktopHome() {
  const [activeService, setActiveService] = useState<ServiceCard>(SERVICE_CARDS[0])

  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section */}
        <div className="section-wrapper min-h-screen flex items-start">
          <div className="section-background hero-bg"></div>
          {/* Video Overlay */}
          <div className="absolute inset-0 w-full h-full overflow-hidden z-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20"
              style={{ pointerEvents: "none" }}
            >
              <source src="/videos/hero-overlay.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="section-content">
            <div className="container pt-0 pb-0 md:pt-2 md:pb-4 -mt-10 md:-mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Update the Hero Section content */}
                <div className="max-w-2xl">
                  <ScrollAnimation variant="fadeInUp" delay={0.2}>
                    <h1 className="mb-4">
                      <span
                        className="text-6xl md:text-8xl lg:text-[10rem] leading-tight block mb-8"
                        style={{ fontFamily: '"Knewave", cursive', color: "#000000" }}
                      >
                        Amplify
                      </span>
                      <span
                        className="text-3xl md:text-4xl lg:text-5xl font-ultra block"
                        style={{ color: "#F44976" }}
                      >
                        Your Reach
                      </span>
                    </h1>
                  </ScrollAnimation>
                  <ScrollAnimation variant="fadeInUp" delay={0.4}>
                    <p className="text-lg md:text-xl mb-8 max-w-lg text-white">
                      We help businesses stand out in the digital landscape with strategic marketing solutions that
                      drive results.
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation variant="fadeInUp" delay={0.6}>
                    <div className="flex justify-center md:justify-start flex-wrap gap-4">
                      <CustomButton href="/services" color="pink" className="min-w-[150px]">
                        EXPLORE
                      </CustomButton>
                      <CustomButton href="/contact" color="black" className="min-w-[150px]">
                        SCHEDULE
                      </CustomButton>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="flex justify-center md:justify-end relative z-20">
                  <FloatingAnimation amplitude={15} duration={4}>
                    <div className="character-container xl:scale-90 transform-gpu origin-center">
                      <Image
                        src="/images/aurahero.png"
                        alt="Amplify Mascot"
                        width={288}
                        height={288}
                        className="max-w-full h-auto character-float"
                        priority
                      />
                    </div>
                  </FloatingAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="section-wrapper min-h-screen flex items-center">
          <div className="section-background services-bg"></div>
          <div className="section-content">
            <div className="container py-20">
              {/* Mobile-specific layout */}
              <div className="md:hidden flex flex-col">
                {/* Character on top for mobile */}
                <div className="flex justify-center items-center mb-8 relative z-20">
                  <FloatingAnimation amplitude={15} duration={4} rotate={true}>
                    <div className="character-container transform-gpu origin-center">
                      <Image
                        src="/images/aurawhat.png"
                        alt="Amplify Mascot"
                        width={220}
                        height={220}
                        className="max-w-full h-auto character-float"
                        priority
                      />
                    </div>
                  </FloatingAnimation>
                </div>

                {/* Title for mobile */}
                <ScrollAnimation variant="fadeInUp">
                  <div className="text-center mt-6" style={{ marginBottom: "-20px" }}>
                    <h2 className="what-title font-ultra text-white">
                      WHAT?
                    </h2>
                  </div>
                </ScrollAnimation>

                <div className="flex flex-col gap-6">
                  <ScrollAnimation variant="fadeInUp" delay={0.1}>
                    <div className="what-feature-card rounded-3xl border-2 border-black bg-[#F44976] p-6 text-white shadow-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 border-2 border-black">
                          <Image src={activeService.icon} alt={`${activeService.title} icon`} width={48} height={48} />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-widest">Service</p>
                          <h3 className="text-3xl font-ultra" style={{ color: "var(--yellow)" }}>
                            {activeService.title}
                          </h3>
                        </div>
                      </div>
                      <p className="what-card-description mb-6 text-base flex-1">{activeService.description}</p>
                      <CustomButton href={activeService.link} color="black" className="min-w-[150px] mt-auto">
                        EXPLORE
                      </CustomButton>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation variant="fadeInUp" delay={0.2}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {SERVICE_CARDS.filter((service) => service.id !== activeService.id).map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setActiveService(service)}
                          aria-pressed={false}
                          className="what-option-card rounded-2xl border-2 border-black p-4 text-left shadow-lg transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-black/30 hover:-translate-y-1"
                          style={{
                            backgroundColor: "#FFC1DA",
                            color: "#1b1b1b",
                          }}
                        >
                          <div className="flex flex-col items-center gap-2 mb-2 text-center">
                            <div
                              className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-black"
                              style={{ backgroundColor: "#F44976" }}
                            >
                              <Image src={service.icon} alt={`${service.title} icon`} width={32} height={32} />
                            </div>
                            <h4 className="text-xl font-ultra leading-tight">{service.title}</h4>
                          </div>
                          <p className="text-xs opacity-80 text-center tracking-wide">Tap to view details</p>
                        </button>
                      ))}
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

              {/* Desktop layout - unchanged */}
              <div className="hidden md:grid md:grid-cols-[0.95fr_1.05fr] items-center gap-10">
                {/* Left side - Character */}
                <div className="flex justify-center items-center relative z-20">
                  <FloatingAnimation amplitude={15} duration={4} rotate={true}>
                    <div className="character-container xl:scale-95 transform-gpu origin-center">
                      <Image
                        src="/images/aurawhat.png"
                        alt="Amplify Mascot"
                        width={320}
                        height={320}
                        className="max-w-full h-auto character-float"
                        priority
                      />
                    </div>
                  </FloatingAnimation>
                </div>

                {/* Right side - Title and Interactive Cards */}
                <div className="flex flex-col gap-6">
                  <ScrollAnimation variant="fadeInRight">
                    <div className="text-center md:text-left mt-6" style={{ marginBottom: "-20px" }}>
                      <h2 className="what-title font-ultra text-white">
                        WHAT?
                      </h2>
                    </div>
                  </ScrollAnimation>

                  <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                    <ScrollAnimation variant="fadeInUp" delay={0.1} className="flex-1">
                      <div className="what-feature-card rounded-[32px] border-2 border-black bg-[#F44976] p-8 text-white shadow-2xl">
                        <div className="flex items-center gap-5 mb-6">
                          <div className="w-20 h-20 flex items-center justify-center rounded-3xl bg-white/20 border-2 border-black">
                            <Image src={activeService.icon} alt={`${activeService.title} icon`} width={64} height={64} />
                          </div>
                          <div>
                            <p className="text-sm uppercase tracking-[0.35em]">Service</p>
                            <h3 className="text-4xl font-ultra" style={{ color: "var(--yellow)" }}>
                              {activeService.title}
                            </h3>
                          </div>
                        </div>
                        <p className="what-card-description text-lg mb-8 flex-1">{activeService.description}</p>
                        <CustomButton href={activeService.link} color="black" className="min-w-[150px]">
                          EXPLORE
                        </CustomButton>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeInUp" delay={0.2} className="w-full lg:max-w-xs">
                      <div className="flex flex-row lg:flex-col gap-4 h-full">
                        {SERVICE_CARDS.filter((service) => service.id !== activeService.id).map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setActiveService(service)}
                            aria-pressed={false}
                            className="what-option-card rounded-2xl border-2 border-black p-5 text-left shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black/30 hover:-translate-y-1"
                            style={{
                              backgroundColor: "#FFC1DA",
                              color: "#1b1b1b",
                            }}
                          >
                            <div className="flex flex-col items-center gap-2 mb-2 text-center">
                              <div
                                className="w-16 h-16 flex items-center justify-center rounded-2xl border-2 border-black"
                                style={{ backgroundColor: "#F44976" }}
                              >
                                <Image src={service.icon} alt={`${service.title} icon`} width={40} height={40} />
                              </div>
                              <h4 className="text-2xl font-ultra leading-tight">{service.title}</h4>
                            </div>
                            <p className="text-sm opacity-80 text-center tracking-wide">Click to view details</p>
                          </button>
                        ))}
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="section-wrapper min-h-screen flex items-center">
          <div className="section-background values-bg"></div>
          <div className="section-content">
            <div className="container pt-8 pb-2 md:pt-10 md:pb-4">
              {/* Mobile-specific layout with carousel */}
              <div className="md:hidden flex flex-col">
                {/* Character on top for mobile */}
                <div className="flex justify-center items-center mb-8 relative z-20">
                  <FloatingAnimation amplitude={15} duration={4} rotate={true}>
                    <div className="character-container transform-gpu origin-center">
                      <Image
                        src="/images/aurawhy.png"
                        alt="Amplify Mascot"
                        width={220}
                        height={220}
                        className="max-w-full h-auto character-float"
                        priority
                      />
                    </div>
                  </FloatingAnimation>
                </div>

                {/* Title for mobile */}
                <ScrollAnimation variant="fadeInUp">
                  <div
                    className="text-center"
                    style={{ marginBottom: "-20px", transform: "translateY(-10px)" }}
                  >
                    <h2 className="what-title font-ultra text-white">WHY?</h2>
                  </div>
                </ScrollAnimation>

                {/* Mobile Carousel with Pagination */}
                <MobileValuesCarousel />
              </div>

              {/* Desktop layout - unchanged */}
              <div className="hidden md:grid md:grid-cols-2 items-center gap-8">
                {/* Left side - Title and Cards */}
                <div className="flex flex-col order-2 md:order-1">
                  <ScrollAnimation variant="fadeInLeft">
                    <div
                      className="text-center md:text-left"
                      style={{ marginBottom: "-20px", transform: "translateY(-10px)" }}
                    >
                      <h2 className="what-title font-ultra text-white">WHY?</h2>
                    </div>
                  </ScrollAnimation>

                  <div className="grid grid-cols-1 gap-4">
                    {/* Value 1 - Innovation */}
                    <ScrollAnimation variant="fadeInLeft" delay={0.1}>
                      <div
                        className="rounded-[32px] p-6 shadow-lg text-white border-2 border-black"
                        style={{ backgroundColor: "#FF8C28" }}
                      >
                        <div className="flex items-center mb-4">
                          <Image
                            src="/images/custom-solution.png"
                            alt="Innovation Icon"
                            width={100}
                            height={100}
                            className="mr-4 icon-pulse"
                          />
                          <div>
                            <h3 className="text-2xl font-ultra mb-2" style={{ color: "#000" }}>
                              Innovation
                            </h3>
                            <p>
                              We stay ahead of trends and technologies to deliver cutting-edge solutions for our
                              clients.
                            </p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Value 2 - Authenticity */}
                    <ScrollAnimation variant="fadeInLeft" delay={0.2}>
                      <div
                        className="rounded-[32px] p-6 shadow-lg text-white border-2 border-black"
                        style={{ backgroundColor: "#FF8C28" }}
                      >
                        <div className="flex items-center mb-4">
                          <Image
                            src="/images/onboarding.png"
                            alt="Authenticity Icon"
                            width={100}
                            height={100}
                            className="mr-4 icon-pulse"
                          />
                          <div>
                            <h3 className="text-2xl font-ultra mb-2" style={{ color: "#000" }}>
                              Authenticity
                            </h3>
                            <p>We believe in creating genuine connections between brands and their audiences.</p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Value 3 - Results */}
                    <ScrollAnimation variant="fadeInLeft" delay={0.3}>
                      <div
                        className="rounded-[32px] p-6 shadow-lg text-white border-2 border-black"
                        style={{ backgroundColor: "#FF8C28" }}
                      >
                        <div className="flex items-center mb-4">
                          <Image
                            src="/images/retention.png"
                            alt="Results Icon"
                            width={100}
                            height={100}
                            className="mr-4 icon-pulse"
                          />
                          <div>
                            <h3 className="text-2xl font-ultra mb-2" style={{ color: "#000" }}>
                              Results
                            </h3>
                            <p>We're committed to delivering measurable outcomes that grow your business.</p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>

                {/* Right side - Character */}
                <div className="flex justify-center items-center order-1 md:order-2 relative z-20">
                  <FloatingAnimation amplitude={15} duration={4} rotate={true}>
                    <div className="character-container xl:scale-95 transform-gpu origin-center">
                      <Image
                        src="/images/aurawhy.png"
                        alt="Amplify Mascot"
                        width={320}
                        height={320}
                        className="max-w-full h-auto character-float"
                        priority
                      />
                    </div>
                  </FloatingAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section with Video */}
        <div className="section-wrapper min-h-screen flex items-center">
          <div className="section-background cta-bg"></div>
          <div className="section-content">
            <div className="container py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="flex justify-center items-center relative z-20">
                  <FloatingAnimation amplitude={15} duration={4}>
                    <div className="character-container xl:scale-95 transform-gpu origin-center">
                      <Image
                        src="/images/auraready.png"
                        alt="Amplify Mascot"
                        width={320}
                        height={320}
                        className="max-w-full h-auto character-float"
                        priority
                      />
                    </div>
                  </FloatingAnimation>
                </div>
                <ScrollAnimation variant="fadeInLeft">
                  <VideoCTA
                    title="Ready to Amplify Your Brand?"
                    description="Let's work together to create a marketing strategy that helps your business thrive in today's competitive landscape."
                    primaryButtonText="GET STARTED"
                    primaryButtonLink="/contact"
                    secondaryButtonText="VIEW OUR WORK"
                    secondaryButtonLink="/portfolio"
                    videoSrc="/videos/amplify-background.mp4"
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
