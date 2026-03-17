"use client"

import { CustomButton } from "@/components/custom-button"
import Image from "next/image"
import VideoCTA from "@/components/video-cta"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollAnimation } from "@/components/scroll-animation"
import { FloatingAnimation } from "@/components/floating-animation"
import MobileValuesCarousel from "@/components/mobile-values-carousel"
import { useEffect, useState } from "react"
import { useLocale } from "@/lib/i18n"

type ServiceCard = {
  id: string
  title: string
  description: string
  icon: string
  link: string
}

export default function DesktopHome() {
  const { locale } = useLocale()
  const serviceCards: ServiceCard[] =
    locale === "nl"
      ? [
          {
            id: "socials",
            title: "Socials",
            description: "Strategisch beheer van je socialmediapresentie om betrokkenheid en conversies te vergroten.",
            icon: "/images/socials.webp",
            link: "/services/socials",
          },
          {
            id: "ads",
            title: "Ads",
            description: "Gerichte campagnes die je ROI maximaliseren en je merk bij de juiste doelgroep brengen.",
            icon: "/images/ads.webp",
            link: "/services/ads",
          },
          {
            id: "branding",
            title: "Branding",
            description: "Onderscheidende merkidentiteiten die op elk contactmoment herkenbaar blijven.",
            icon: "/images/branding.webp",
            link: "/services/branding",
          },
          {
            id: "website",
            title: "Website",
            description: "Maatwerk webervaringen die bezoekers omzetten in loyale klanten.",
            icon: "/images/website.webp",
            link: "/services/website",
          },
        ]
      : [
          {
            id: "socials",
            title: "Socials",
            description: "Strategic management of your social media presence to build engagement and drive conversions.",
            icon: "/images/socials.webp",
            link: "/services/socials",
          },
          {
            id: "ads",
            title: "Ads",
            description: "Targeted campaigns that maximize ROI and put your brand in front of the right audience.",
            icon: "/images/ads.webp",
            link: "/services/ads",
          },
          {
            id: "branding",
            title: "Branding",
            description: "Distinctive brand identity systems that resonate across every touchpoint.",
            icon: "/images/branding.webp",
            link: "/services/branding",
          },
          {
            id: "website",
            title: "Website",
            description: "Custom web experiences built to convert visitors into loyal customers.",
            icon: "/images/website.webp",
            link: "/services/website",
          },
        ]
  const [activeService, setActiveService] = useState<ServiceCard>(serviceCards[0])

  const copy =
    locale === "nl"
      ? {
          heroTitle: "Vergroot je bereik",
          heroDescription:
            "Wij helpen bedrijven opvallen in het digitale landschap met strategische marketingoplossingen die resultaat opleveren.",
          explore: "ONTDEK",
          schedule: "PLAN IN",
          what: "WAT?",
          why: "WAAROM?",
          service: "Dienst",
          tapDetails: "Tik voor details",
          clickDetails: "Klik voor details",
          innovation: "Innovatie",
          innovationDescription:
            "Wij lopen voorop in trends en technologie om vernieuwende oplossingen voor onze klanten te leveren.",
          authenticity: "Authenticiteit",
          authenticityDescription:
            "Wij geloven in het opbouwen van echte connecties tussen merken en hun doelgroep.",
          results: "Resultaat",
          resultsDescription: "Wij leveren meetbare resultaten die je bedrijf laten groeien.",
          ctaTitle: "Klaar om je merk te versterken?",
          ctaDescription:
            "Laten we samen een marketingstrategie ontwikkelen die jouw bedrijf laat groeien in het competitieve landschap van vandaag.",
          getStarted: "START NU",
          viewWork: "BEKIJK WERK",
        }
      : {
          heroTitle: "Your Reach",
          heroDescription:
            "We help businesses stand out in the digital landscape with strategic marketing solutions that drive results.",
          explore: "EXPLORE",
          schedule: "SCHEDULE",
          what: "WHAT?",
          why: "WHY?",
          service: "Service",
          tapDetails: "Tap to view details",
          clickDetails: "Click to view details",
          innovation: "Innovation",
          innovationDescription:
            "We stay ahead of trends and technologies to deliver cutting-edge solutions for our clients.",
          authenticity: "Authenticity",
          authenticityDescription: "We believe in creating genuine connections between brands and their audiences.",
          results: "Results",
          resultsDescription: "We're committed to delivering measurable outcomes that grow your business.",
          ctaTitle: "Ready to Amplify Your Brand?",
          ctaDescription:
            "Let's work together to create a marketing strategy that helps your business thrive in today's competitive landscape.",
          getStarted: "GET STARTED",
          viewWork: "VIEW WORK",
        }

  const activeServiceCard = serviceCards.find((service) => service.id === activeService.id) || serviceCards[0]

  useEffect(() => {
    if (activeService.id !== activeServiceCard.id) {
      setActiveService(activeServiceCard)
    }
  }, [activeService.id, activeServiceCard])

  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section */}
        <div className="section-wrapper mobile-home-hero flex items-start">
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
            <div className="container pt-0 pb-0 md:pt-2 md:pb-4 -mt-16 md:-mt-28">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-8">
                {/* Update the Hero Section content */}
                <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0 mt-24 md:mt-0 mobile-hero-copy">
                  <ScrollAnimation variant="fadeInUp" delay={0.2}>
                    <h1 className="mb-4 text-center md:text-left">
                      <span
                        className="text-[5.5rem] md:text-8xl lg:text-[10rem] leading-tight block mb-4 md:mb-8"
                        style={{ fontFamily: "var(--font-knewave)", color: "#000000" }}
                      >
                        Amplify
                      </span>
                      <span
                        className="text-3xl md:text-4xl lg:text-5xl font-ultra block -mt-2 md:mt-0"
                        style={{ color: "#F44976" }}
                      >
                        {copy.heroTitle}
                      </span>
                    </h1>
                  </ScrollAnimation>
                  <ScrollAnimation variant="fadeInUp" delay={0.4}>
                    <p className="text-lg md:text-xl mb-8 max-w-lg text-white mx-auto md:mx-0 text-center md:text-left">
                      {copy.heroDescription}
                    </p>
                  </ScrollAnimation>
                  <ScrollAnimation variant="fadeInUp" delay={0.6}>
                    <div className="flex justify-center md:justify-start flex-wrap gap-4">
                      <CustomButton href="/services" color="pink" className="min-w-[150px]">
                        {copy.explore}
                      </CustomButton>
                      <CustomButton href="/contact" color="black" className="min-w-[150px]">
                        {copy.schedule}
                      </CustomButton>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className="flex justify-center md:justify-end relative z-20">
                  <FloatingAnimation amplitude={15} duration={4}>
                    <div className="character-container mobile-hero-character md:w-auto xl:scale-90 transform-gpu origin-center md:mt-8">
                      <Image
                        src="/images/aurahero.webp"
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
                <div className="flex justify-center items-center -translate-y-6 relative z-20">
                  <FloatingAnimation amplitude={15} duration={4} rotate={true}>
                    <div className="character-container mobile-what-character transform-gpu origin-center">
                      <Image
                        src="/images/richiewhat.webp"
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
                  <div className="text-center -mt-8 mb-0">
                    <h2 className="what-title font-ultra text-white md:text-[8rem] text-[4rem] leading-[0.9]">{copy.what}</h2>
                  </div>
                </ScrollAnimation>

                <div className="flex flex-col gap-6">
                  <ScrollAnimation variant="fadeInUp" delay={0.1}>
                    <div className="what-feature-card rounded-3xl border-2 border-black bg-[#F44976] p-6 text-white shadow-xl">
                      <div className="flex flex-col items-center gap-3 mb-4 text-center">
                        <div className="w-[100px] h-[100px] flex items-center justify-center rounded-2xl bg-white/20 border-2 border-black">
                          <Image
                            src={activeServiceCard.icon}
                            alt={`${activeServiceCard.title} icon`}
                            width={36}
                            height={36}
                            className="w-full h-full object-contain block icon-pulse"
                            style={{ margin: 0 }}
                          />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-widest text-center">{copy.service}</p>
                          <h3 className="text-3xl font-ultra text-center" style={{ color: "var(--yellow)" }}>
                            {activeServiceCard.title}
                          </h3>
                        </div>
                      </div>
                      <p className="what-card-description mb-6 text-base flex-1 text-center">{activeServiceCard.description}</p>
                      <CustomButton href={activeServiceCard.link} color="black" className="min-w-[150px] mt-auto">
                        {copy.explore}
                      </CustomButton>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation variant="fadeInUp" delay={0.2}>
                    <div className="grid grid-cols-3 gap-3">
                      {serviceCards.filter((service) => service.id !== activeServiceCard.id).map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setActiveService(service)}
                          aria-pressed={false}
                          className="what-option-card rounded-2xl border-2 border-black p-4 shadow-lg transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-black/30 hover:-translate-y-1 flex flex-col items-center justify-between text-center gap-2"
                          style={{
                            backgroundColor: "#FFC1DA",
                            color: "#1b1b1b",
                          }}
                        >
                          <div className="flex flex-col items-center w-full">
                            <div
                              className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-black mx-auto"
                              style={{ backgroundColor: "#F44976" }}
                            >
                              <Image
                                src={service.icon}
                                alt={`${service.title} icon`}
                                width={32}
                                height={32}
                                className="w-full h-full object-contain block"
                                style={{ margin: 0 }}
                              />
                            </div>
                            <h4 className="text-sm font-ultra leading-tight w-full mt-2">{service.title}</h4>
                          </div>
                          <p className="text-xs opacity-80 tracking-wide mt-1">{copy.tapDetails}</p>
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
                        src="/images/richiewhat.webp"
                        alt="Amplify Mascot"
                        width={384}
                        height={384}
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
                        {copy.what}
                      </h2>
                    </div>
                  </ScrollAnimation>

                  <div className="flex flex-col lg:flex-row gap-6 items-stretch">
                    <ScrollAnimation variant="fadeInUp" delay={0.1} className="flex-1">
                      <div className="what-feature-card rounded-[32px] border-2 border-black bg-[#F44976] p-8 text-white shadow-2xl">
                        <div className="flex flex-col items-center gap-4 mb-6 text-center">
                          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/20 border-2 border-black md:w-20 md:h-20">
                            <Image
                              src={activeServiceCard.icon}
                              alt={`${activeServiceCard.title} icon`}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain block icon-pulse"
                              style={{ margin: 0 }}
                            />
                          </div>
                          <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-center">{copy.service}</p>
                            <h3 className="text-4xl font-ultra text-center" style={{ color: "var(--yellow)" }}>
                              {activeServiceCard.title}
                            </h3>
                          </div>
                        </div>
                        <p className="what-card-description text-lg mb-8 flex-1 text-center">{activeServiceCard.description}</p>
                        <CustomButton href={activeServiceCard.link} color="black" className="min-w-[150px]">
                          {copy.explore}
                        </CustomButton>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeInUp" delay={0.2} className="w-full lg:max-w-xs">
                      <div className="flex flex-row lg:flex-col gap-4 h-full">
                        {serviceCards.filter((service) => service.id !== activeServiceCard.id).map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setActiveService(service)}
                            aria-pressed={false}
                            className="what-option-card rounded-2xl border-2 border-black p-5 shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black/30 hover:-translate-y-1 flex flex-col items-center text-center gap-3"
                            style={{
                              backgroundColor: "#FFC1DA",
                              color: "#1b1b1b",
                            }}
                          >
                            <div className="flex flex-col items-center w-full">
                              <div
                                className="w-16 h-16 flex items-center justify-center rounded-2xl border-2 border-black"
                                style={{ backgroundColor: "#F44976" }}
                              >
                                <Image
                                  src={service.icon}
                                  alt={`${service.title} icon`}
                                  width={40}
                                  height={40}
                                  className="w-full h-full object-contain block"
                                  style={{ margin: 0 }}
                                />
                              </div>
                              <h4 className="text-2xl font-ultra leading-tight w-full mt-3">{service.title}</h4>
                            </div>
                            <p className="text-sm opacity-80 tracking-wide mt-1">{copy.clickDetails}</p>
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
        <div
          className="section-wrapper flex items-center md:min-h-screen"
          style={{ minHeight: "auto", paddingTop: "0.5rem", paddingBottom: 0 }}
        >
          <div className="section-background values-bg"></div>
          <div className="section-content">
            <div className="container pt-4 pb-0 md:pt-10 md:pb-4">
              {/* Mobile-specific layout with carousel */}
              <div className="md:hidden flex flex-col">
                {/* Character on top for mobile */}
                <div className="flex justify-center items-center mb-1 relative z-20">
                  <FloatingAnimation amplitude={15} duration={4} rotate={true}>
                    <div className="character-container mobile-why-character transform-gpu origin-center">
                      <Image
                        src="/images/acewhy.webp"
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
                  <div className="text-center -mt-7 mb-0">
                    <h2 className="what-title font-ultra text-white text-5xl md:text-4xl">{copy.why}</h2>
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
                      <h2 className="what-title font-ultra text-white">{copy.why}</h2>
                    </div>
                  </ScrollAnimation>

                  <div className="grid grid-cols-1 gap-4">
                    {/* Value 1 - Innovation */}
                    <ScrollAnimation variant="fadeInLeft" delay={0.1}>
                      <div
                        className="rounded-[32px] p-6 shadow-lg text-white border-2 border-black"
                        style={{ backgroundColor: "#C084FC" }}
                      >
                        <div className="flex items-center mb-4">
                          <Image
                            src="/images/custom-solution.webp"
                            alt="Innovation Icon"
                            width={100}
                            height={100}
                            className="icon-pulse"
                            style={{ margin: 0, padding: 0 }}
                          />
                          <div>
                            <h3 className="text-2xl font-ultra mb-2" style={{ color: "#000" }}>
                              {copy.innovation}
                            </h3>
                            <p>{copy.innovationDescription}</p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Value 2 - Authenticity */}
                    <ScrollAnimation variant="fadeInLeft" delay={0.2}>
                      <div
                        className="rounded-[32px] p-6 shadow-lg text-white border-2 border-black"
                        style={{ backgroundColor: "#C084FC" }}
                      >
                        <div className="flex items-center mb-4">
                          <Image
                            src="/images/onboarding.webp"
                            alt="Authenticity Icon"
                            width={100}
                            height={100}
                            className="icon-pulse"
                            style={{ margin: 0, padding: 0 }}
                          />
                          <div>
                            <h3 className="text-2xl font-ultra mb-2" style={{ color: "#000" }}>
                              {copy.authenticity}
                            </h3>
                            <p>{copy.authenticityDescription}</p>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {/* Value 3 - Results */}
                    <ScrollAnimation variant="fadeInLeft" delay={0.3}>
                      <div
                        className="rounded-[32px] p-6 shadow-lg text-white border-2 border-black"
                        style={{ backgroundColor: "#C084FC" }}
                      >
                        <div className="flex items-center mb-4">
                          <Image
                            src="/images/retention.webp"
                            alt="Results Icon"
                            width={100}
                            height={100}
                            className="icon-pulse"
                            style={{ margin: 0, padding: 0 }}
                          />
                          <div>
                            <h3 className="text-2xl font-ultra mb-2" style={{ color: "#000" }}>
                              {copy.results}
                            </h3>
                            <p>{copy.resultsDescription}</p>
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
                        src="/images/acewhy.webp"
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
        <div className="section-wrapper mobile-home-cta flex items-start md:items-center md:min-h-screen">
          <div className="section-background cta-bg"></div>
          <div className="section-content">
            <div className="container pt-0 pb-0 md:py-20">
              <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-0 md:gap-12">
                <div className="flex justify-center items-center relative z-20 -mt-4 md:mt-0 mb-[24px] md:mb-0">
                  <FloatingAnimation amplitude={15} duration={4}>
                    <div className="character-container xl:scale-95 transform-gpu origin-center !w-[307px] md:!w-auto">
                      <Image
                        src="/images/auraready.webp"
                        alt="Amplify Mascot"
                        width={320}
                        height={320}
                        className="character-float !w-[307px] !max-w-[307px] h-auto md:!w-full md:!max-w-full"
                        priority
                      />
                    </div>
                  </FloatingAnimation>
                </div>
                <div className="w-full -mt-6 md:mt-0">
                  <ScrollAnimation variant="fadeInLeft">
                    <VideoCTA
                      title={copy.ctaTitle}
                      description={copy.ctaDescription}
                      primaryButtonText={copy.getStarted}
                      primaryButtonLink="/contact"
                      secondaryButtonText={copy.viewWork}
                      secondaryButtonLink="/portfolio"
                      videoSrc="/videos/amplify-background.mp4"
                      showOverlay={false}
                      compact
                      disableTextShadow
                      forceSingleRowButtons
                    />
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
