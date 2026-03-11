"use client"

import Image from "next/image"
import { useLocale } from "@/lib/i18n"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollAnimation } from "@/components/scroll-animation"
import VideoCTA from "@/components/video-cta"
import ServiceBanner from "@/components/service-banner"
import ServiceIcon from "@/components/service-icon"
import MobileServicesCarousel from "@/components/mobile-services-carousel"
import MobileProcessCarousel from "@/components/mobile-process-carousel"

export default function BrandingServicePage() {
  const { locale } = useLocale()
  const isNl = locale === "nl"

  const copy = {
    heroAlt: isNl ? "Branding diensten achtergrond" : "Branding Services Background",
    iconAlt: isNl ? "Branding icoon" : "Branding Icon",
    title: "Branding",
    mobileIntro: isNl
      ? "Je merk is meer dan alleen een logo, het is de persoonlijkheid van je bedrijf en de emotionele connectie die je creëert met je doelgroep."
      : "Your brand is more than just a logo-it's the personality of your business and the emotional connection you create with your audience.",
    desktopIntro1: isNl
      ? "Je merk is meer dan alleen een logo, het is de persoonlijkheid van je bedrijf en de emotionele connectie die je creëert met je doelgroep. Wij helpen je een onderscheidende merkidentiteit te ontwikkelen die aansluit bij je doelgroep en opvalt in een drukke markt."
      : "Your brand is more than just a logo-it's the personality of your business and the emotional connection you create with your audience. We help you develop a distinctive brand identity that resonates with your target market and stands out in a crowded marketplace.",
    desktopIntro2: isNl
      ? "Onze brandingdiensten helpen je om de stem, visuele identiteit en positionering van je merk zo vorm te geven dat ze herkenning, vertrouwen en loyaliteit opbouwen."
      : "Our branding services are designed to help you define your brand's voice, visual identity, and positioning in a way that builds recognition, trust, and loyalty.",
    whyTitle: isNl ? "Waarom branding belangrijk is" : "Why Branding Matters",
    whyIntro: isNl
      ? "In de competitieve markt van vandaag is een sterk merk je meest waardevolle bezit. Het helpt je om:"
      : "In today's competitive marketplace, a strong brand is your most valuable asset. It helps you:",
    whyBullets: isNl
      ? ["Je te onderscheiden van concurrenten", "Klantloyaliteit en vertrouwen op te bouwen", "Premium prijzen te kunnen vragen", "Emotionele connecties te creëren"]
      : ["Stand out from competitors", "Build customer loyalty and trust", "Command premium pricing", "Create emotional connections"],
    servicesTitle: isNl ? "Onze branding diensten" : "Our Branding Services",
    processTitle: isNl ? "Ons branding proces" : "Our Branding Process",
    ctaTitle: isNl ? "Klaar om een krachtig merk te bouwen?" : "Ready to Build a Powerful Brand?",
    ctaDescription: isNl
      ? "Laten we bespreken hoe we jouw merk kunnen laten opvallen en verbinden met je doelgroep."
      : "Let's discuss how we can help your brand stand out and connect with your audience.",
    ctaPrimary: isNl ? "START NU" : "GET STARTED",
    ctaSecondary: isNl ? "BEKIJK ONS WERK" : "VIEW OUR WORK",
  }

  const services = [
    {
      title: isNl ? "Merkstrategie" : "Brand Strategy",
      icon: "strategy",
      description: isNl
        ? "We ontwikkelen een complete merkstrategie die het doel, de positionering en persoonlijkheid van je merk vastlegt."
        : "We develop a comprehensive brand strategy that defines your brand's purpose, positioning, and personality.",
      desktopDescription: isNl
        ? "We ontwikkelen een complete merkstrategie die het doel, de positionering en persoonlijkheid van je merk vastlegt. Dit vormt de basis voor al je branding- en marketinginspanningen."
        : "We develop a comprehensive brand strategy that defines your brand's purpose, positioning, and personality. This serves as the foundation for all your branding and marketing efforts.",
      features: isNl ? ["Merkpositionering", "Doelgroepanalyse", "Concurrentieanalyse"] : ["Brand positioning", "Target audience analysis", "Competitive analysis"],
    },
    {
      title: isNl ? "Visuele identiteit" : "Visual Identity",
      icon: "identity",
      description: isNl
        ? "We creëren een consistente visuele identiteit die je merk tot leven brengt via logo, kleurenpalet en typografie."
        : "We create a cohesive visual identity that brings your brand to life through logo design, color palette, and typography.",
      desktopDescription: isNl
        ? "We creëren een consistente visuele identiteit die je merk tot leven brengt via logo, kleurenpalet, typografie en andere visuele elementen die je merk direct herkenbaar maken."
        : "We create a cohesive visual identity that brings your brand to life through logo design, color palette, typography, and other visual elements that make your brand instantly recognizable.",
      features: isNl ? ["Logo design", "Ontwikkeling kleurenpalet", "Selectie typografie"] : ["Logo design", "Color palette development", "Typography selection"],
    },
    {
      title: isNl ? "Employer branding" : "Employer Branding",
      icon: "employer",
      description: isNl
        ? "We positioneren jouw bedrijf als de plek waar toptalent wil werken met een sterk werkgeversverhaal."
        : "We position your company as the place top talent wants to work through a compelling employer narrative.",
      desktopDescription: isNl
        ? "We formuleren jouw employer value proposition en recruitment messaging zodat kandidaten direct begrijpen waarom ze voor jouw team moeten kiezen."
        : "We craft your employer value proposition and recruitment messaging so candidates instantly understand why they should join your team.",
      features: isNl ? ["Employee value proposition", "Cultuur- & carrièremessaging", "Talent storytelling campagnes"] : ["Employee value proposition", "Culture & career messaging", "Talent storytelling campaigns"],
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: isNl ? "Discovery" : "Discovery",
      description: isNl
        ? "We starten met het begrijpen van je bedrijf, doelen, doelgroep en concurrenten om een strategische basis voor je merk te ontwikkelen."
        : "We start by understanding your business, goals, target audience, and competitors to develop a strategic foundation for your brand.",
    },
    {
      number: 2,
      title: isNl ? "Strategie" : "Strategy",
      description: isNl
        ? "We ontwikkelen een merkstrategie die de positionering, persoonlijkheid en kernboodschappen van je merk vastlegt."
        : "We develop a brand strategy that defines your brand's positioning, personality, and key messages.",
    },
    {
      number: 3,
      title: isNl ? "Creatie" : "Creation",
      description: isNl
        ? "Ons creatieve team brengt je merk tot leven met visuele identiteit, messaging en andere merkelementen."
        : "Our creative team brings your brand to life through visual identity, messaging, and other brand elements.",
    },
    {
      number: 4,
      title: isNl ? "Implementatie" : "Implementation",
      description: isNl
        ? "We helpen je merk door te vertalen naar alle contactpunten en leveren richtlijnen voor consistente toepassing."
        : "We help you implement your brand across all touchpoints and provide guidelines for consistent application.",
    },
  ]

  return (
    <PageWrapper>
      <div className="flex flex-col">
        <section className="relative">
          <div className="hero-background-container">
            <img src="/images/ServicesBranding-HERO.webp" alt={copy.heroAlt} className="hero-background-image" />
          </div>
        </section>

        <ServiceBanner currentService="branding" />

        <section className="py-16 bg-white">
          <div className="container">
            <div className="md:hidden">
              <ScrollAnimation variant="fadeInUp">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-blue rounded-full shadow-lg">
                      <Image src="/images/branding.webp" alt={copy.iconAlt} width={50} height={50} className="icon-pulse" style={{ margin: "0 auto" }} />
                    </div>
                    <h2 className="text-3xl font-ultra">{copy.title}</h2>
                  </div>
                  <p className="mb-6">{copy.mobileIntro}</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-blue rounded-[32px] p-6 text-white mb-8">
                  <h3 className="text-xl font-ultra mb-4 text-center">{copy.whyTitle}</h3>
                  <p className="mb-4 text-sm">{copy.whyIntro}</p>
                  <ul className="mb-4 space-y-2 text-sm">
                    {copy.whyBullets.map((item) => (
                      <li key={item} className="flex items-start"><span className="font-bold mr-2">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation variant="fadeInRight">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-blue rounded-full shadow-lg">
                      <Image src="/images/branding.webp" alt={copy.iconAlt} width={50} height={50} className="icon-pulse" style={{ margin: "0 auto" }} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-ultra">{copy.title}</h2>
                  </div>
                  <p className="mb-6">{copy.desktopIntro1}</p>
                  <p className="mb-6">{copy.desktopIntro2}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft">
                <div className="bg-blue rounded-[32px] p-8">
                  <h3 className="text-2xl font-ultra mb-4">{copy.whyTitle}</h3>
                  <p className="mb-4">{copy.whyIntro}</p>
                  <ul className="mb-6 space-y-2">
                    {copy.whyBullets.map((item) => (
                      <li key={item} className="flex items-start"><span className="font-bold mr-2">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: "#7DD3F7" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center text-white">{copy.servicesTitle}</h2>
            </ScrollAnimation>

            <div className="md:hidden">
              <MobileServicesCarousel services={services.map((service) => ({ title: service.title, icon: service.icon, iconBg: "bg-blue", description: service.description, features: service.features }))} />
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={service.title} variant="fadeInUp" delay={0.1 * (index + 1)}>
                  <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-3 bg-blue rounded-full flex-shrink-0">
                        <ServiceIcon name={service.icon} size={30} color="#fff" />
                      </div>
                      <h3 className="text-xl font-ultra">{service.title}</h3>
                    </div>
                    <p className="text-sm mb-4">{service.desktopDescription}</p>
                    <ul className="text-sm space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start"><span className="font-bold mr-2">•</span><span>{feature}</span></li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center">{copy.processTitle}</h2>
            </ScrollAnimation>

            <div className="md:hidden">
              <MobileProcessCarousel steps={processSteps.map((step) => ({ ...step, bgColor: "bg-blue" }))} />
            </div>

            <div className="hidden md:grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={step.number} variant="fadeInUp" delay={0.1 * (index + 1)}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">{step.number}</div>
                    <h3 className="text-xl font-ultra mb-2">{step.title}</h3>
                    <p className="text-sm">{step.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <VideoCTA
          title={copy.ctaTitle}
          description={copy.ctaDescription}
          primaryButtonText={copy.ctaPrimary}
          primaryButtonLink="/contact"
          secondaryButtonText={copy.ctaSecondary}
          secondaryButtonLink="/portfolio"
          videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5084245-uhd_3840_2160_30fps-8s7yFArT5t48cFKRZIG3dvktVjc4Vd.mp4"
        />
      </div>
    </PageWrapper>
  )
}
