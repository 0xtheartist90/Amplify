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

export default function AdsServicePage() {
  const { locale } = useLocale()
  const isNl = locale === "nl"

  const copy = {
    heroAlt: isNl ? "Advertising diensten achtergrond" : "Advertising Services Background",
    iconAlt: isNl ? "Advertising icoon" : "Advertising Icon",
    title: "Advertising",
    mobileIntro: isNl
      ? "Effectieve advertising draait om het verbinden van de juiste doelgroep met de juiste boodschap op het juiste moment."
      : "Effective advertising is about connecting with the right audience at the right time with the right message.",
    desktopIntro1: isNl
      ? "Effectieve advertising draait om het verbinden van de juiste doelgroep met de juiste boodschap op het juiste moment. Wij helpen je campagnes te creëren en te beheren die resultaat opleveren en je rendement maximaliseren."
      : "Effective advertising is about connecting with the right audience at the right time with the right message. We help you create and manage advertising campaigns that drive results and maximize your return on investment.",
    desktopIntro2: isNl
      ? "Onze datagedreven aanpak zorgt ervoor dat je advertentiebudget efficiënt wordt ingezet, gericht op klanten die het meest waarschijnlijk converteren en loyaal worden aan je merk."
      : "Our data-driven approach ensures your advertising budget is spent efficiently, targeting customers who are most likely to convert and become loyal to your brand.",
    whyTitle: isNl ? "Waarom advertising belangrijk is" : "Why Advertising Matters",
    whyIntro: isNl
      ? "In de competitieve markt van vandaag helpt strategische advertising je om:"
      : "In today's competitive marketplace, strategic advertising helps you:",
    whyBullets: isNl
      ? ["Nieuwe klanten te bereiken en je markt uit te breiden", "Merkbekendheid en herkenning op te bouwen", "Gericht verkeer en gekwalificeerde leads te genereren", "Omzet en revenue te verhogen"]
      : ["Reach new customers and expand your market", "Build brand awareness and recognition", "Drive targeted traffic and qualified leads", "Increase sales and revenue"],
    servicesTitle: isNl ? "Onze advertising diensten" : "Our Advertising Services",
    processTitle: isNl ? "Ons advertising proces" : "Our Advertising Process",
    ctaTitle: isNl ? "Klaar om je advertising te versterken?" : "Ready to Amplify Your Advertising?",
    ctaDescription: isNl
      ? "Laten we bespreken hoe we jouw bedrijf kunnen helpen de juiste doelgroep te bereiken en conversies te verhogen."
      : "Let's discuss how we can help your business reach its target audience and drive conversions.",
    ctaPrimary: isNl ? "START NU" : "GET STARTED",
    ctaSecondary: isNl ? "BEKIJK WERK" : "VIEW WORK",
  }

  const services = [
    {
      title: "PPC Advertising",
      icon: "ppc",
      description: isNl
        ? "We creëren en beheren pay-per-click campagnes op zoekmachines zoals Google en Bing."
        : "We create and manage pay-per-click campaigns on search engines like Google and Bing.",
      desktopDescription: isNl
        ? "We creëren en beheren pay-per-click campagnes op zoekmachines zoals Google en Bing die gericht verkeer naar je website sturen en gekwalificeerde leads genereren."
        : "We create and manage pay-per-click campaigns on search engines like Google and Bing that drive targeted traffic to your website and generate qualified leads.",
      features: isNl ? ["Keywordonderzoek en selectie", "Advertentieteksten schrijven en testen", "Biedingsbeheer en optimalisatie"] : ["Keyword research and selection", "Ad copy creation and testing", "Bid management and optimization"],
    },
    {
      title: isNl ? "Social media advertising" : "Social Media Advertising",
      icon: "community",
      description: isNl
        ? "We ontwikkelen gerichte campagnes op platforms zoals Facebook, Instagram, LinkedIn en TikTok."
        : "We develop targeted campaigns on platforms like Facebook, Instagram, LinkedIn, and TikTok.",
      desktopDescription: isNl
        ? "We ontwikkelen gerichte campagnes op platforms zoals Facebook, Instagram, LinkedIn en TikTok om jouw ideale doelgroep te bereiken op de plekken waar ze online actief zijn."
        : "We develop targeted campaigns on platforms like Facebook, Instagram, LinkedIn, and TikTok to reach your ideal audience where they spend their time online.",
      features: isNl ? ["Doelgroep targeting en segmentatie", "Creatieve ontwikkeling en testing", "Campagneoptimalisatie en opschalen"] : ["Audience targeting and segmentation", "Creative development and testing", "Campaign optimization and scaling"],
    },
    {
      title: isNl ? "Display & video advertising" : "Display & Video Advertising",
      icon: "targeting",
      description: isNl
        ? "We creëren visuele en videocampagnes op het web die merkbekendheid opbouwen en je doelgroep activeren."
        : "We create visual and video ads across the web that build brand awareness and engage your audience.",
      desktopDescription: isNl
        ? "We creëren visuele en videocampagnes op het web die merkbekendheid opbouwen, je doelgroep betrekken en conversies stimuleren met sterke storytelling."
        : "We create visual and video ads across the web that build brand awareness, engage your audience, and drive conversions through compelling storytelling.",
      features: isNl ? ["Banner- en videoadvertentie design", "Programmatic advertising", "YouTube- en streaming platformcampagnes"] : ["Banner and video ad design", "Programmatic advertising", "YouTube and streaming platform campaigns"],
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: isNl ? "Research & planning" : "Research & Planning",
      description: isNl
        ? "We analyseren je doelgroep, concurrenten en markt om een strategisch advertising plan te ontwikkelen dat aansluit op je doelen."
        : "We analyze your audience, competitors, and market to develop a strategic advertising plan aligned with your goals.",
    },
    {
      number: 2,
      title: isNl ? "Campagne creatie" : "Campaign Creation",
      description: isNl
        ? "We ontwikkelen sterke creatives, stellen targeting in en lanceren je campagnes op de relevante platforms."
        : "We develop compelling ad creative, set up targeting parameters, and launch your campaigns across relevant platforms.",
    },
    {
      number: 3,
      title: isNl ? "Optimalisatie" : "Optimization",
      description: isNl
        ? "We monitoren en optimaliseren je campagnes continu om prestaties te verbeteren en ROI te maximaliseren."
        : "We continuously monitor and optimize your campaigns to improve performance and maximize ROI.",
    },
    {
      number: 4,
      title: isNl ? "Rapportage & analyse" : "Reporting & Analysis",
      description: isNl
        ? "We leveren duidelijke rapportages en inzichten zodat je campagneprestaties begrijpt en toekomstige keuzes kunt aanscherpen."
        : "We provide detailed reports and insights to help you understand campaign performance and inform future strategies.",
    },
  ]

  return (
    <PageWrapper>
      <div className="flex flex-col">
        <section className="relative">
          <div className="hero-background-container">
            <img src="/images/ServicesAds-HERO.webp" alt={copy.heroAlt} className="hero-background-image" />
          </div>
        </section>

        <ServiceBanner currentService="ads" />

        <section className="py-16 bg-white">
          <div className="container">
            <div className="md:hidden">
              <ScrollAnimation variant="fadeInUp">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-yellow rounded-full shadow-lg">
                      <Image src="/images/ads.webp" alt={copy.iconAlt} width={50} height={50} className="icon-pulse" style={{ margin: "0 auto" }} />
                    </div>
                    <h2 className="text-3xl font-ultra">{copy.title}</h2>
                  </div>
                  <p className="mb-6">{copy.mobileIntro}</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-yellow rounded-[32px] p-6 mb-8">
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
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-yellow rounded-full shadow-lg">
                      <Image src="/images/ads.webp" alt={copy.iconAlt} width={50} height={50} className="icon-pulse" style={{ margin: "0 auto" }} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-ultra">{copy.title}</h2>
                  </div>
                  <p className="mb-6">{copy.desktopIntro1}</p>
                  <p className="mb-6">{copy.desktopIntro2}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft">
                <div className="bg-yellow rounded-[32px] p-8">
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

        <section className="py-16" style={{ backgroundColor: "#FFCB2B" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center text-white">{copy.servicesTitle}</h2>
            </ScrollAnimation>

            <div className="md:hidden">
              <MobileServicesCarousel
                services={services.map((service) => ({
                  title: service.title,
                  icon: service.icon,
                  iconBg: "bg-yellow",
                  description: service.description,
                  features: service.features,
                }))}
              />
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={service.title} variant="fadeInUp" delay={0.1 * (index + 1)}>
                  <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-3 bg-yellow rounded-full flex-shrink-0">
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
              <MobileProcessCarousel steps={processSteps.map((step) => ({ ...step, bgColor: "bg-yellow" }))} />
            </div>

            <div className="hidden md:grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={step.number} variant="fadeInUp" delay={0.1 * (index + 1)}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">{step.number}</div>
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
          videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5084528-uhd_3840_2160_30fps-cHscNuYVDQZ28cDNqYATgpvB7hmXeD.mp4"
        />
      </div>
    </PageWrapper>
  )
}
