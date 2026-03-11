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

export default function WebsiteServicePage() {
  const { locale } = useLocale()
  const isNl = locale === "nl"

  const copy = {
    heroAlt: isNl ? "Website diensten achtergrond" : "Website Services Background",
    iconAlt: isNl ? "Website icoon" : "Website Icon",
    title: "Website",
    mobileIntro: isNl
      ? "Je website is vaak de eerste indruk die potentiële klanten van je bedrijf krijgen. Wij creëren maatwerk, responsive websites die bezoekers omzetten in klanten."
      : "Your website is often the first impression potential customers have of your business. We create custom, responsive websites that convert visitors into customers.",
    desktopIntro1: isNl
      ? "Je website is vaak de eerste indruk die potentiële klanten van je bedrijf krijgen. Wij creëren maatwerk, responsive websites die er niet alleen sterk uitzien maar bezoekers ook omzetten in klanten."
      : "Your website is often the first impression potential customers have of your business. We create custom, responsive websites that not only look great but also convert visitors into customers.",
    desktopIntro2: isNl
      ? "Ons team van designers en developers werkt samen aan een naadloze gebruikerservaring die je merkidentiteit weerspiegelt en je bedrijfsdoelen ondersteunt."
      : "Our team of designers and developers work together to create a seamless user experience that reflects your brand identity and achieves your business goals.",
    whyTitle: isNl ? "Waarom je website belangrijk is" : "Why Your Website Matters",
    whyIntro1: isNl
      ? "In de digitale wereld van vandaag is je website je belangrijkste marketingmiddel. Het is de hub van je online aanwezigheid en vaak de eerste plek waar potentiële klanten naartoe gaan om meer over je bedrijf te leren."
      : "In today's digital world, your website is your most important marketing asset. It's the hub of your online presence and often the first place potential customers go to learn about your business.",
    whyIntro2Mobile: isNl
      ? "Een goed ontworpen website bouwt geloofwaardigheid op, presenteert je producten of diensten en biedt een platform voor groei."
      : "A well-designed website builds credibility, showcases your products or services, and provides a platform for growth.",
    whyIntro2Desktop: isNl
      ? "Een goed ontworpen website bouwt geloofwaardigheid op, presenteert je producten of diensten en vormt een platform voor groei via SEO, contentmarketing en conversie-optimalisatie."
      : "A well-designed website builds credibility, showcases your products or services, and provides a platform for growth through SEO, content marketing, and conversion optimization.",
    servicesTitle: isNl ? "Onze website diensten" : "Our Website Services",
    processTitle: isNl ? "Ons website proces" : "Our Website Process",
    ctaTitle: isNl ? "Klaar om jouw droomwebsite te bouwen?" : "Ready to Build Your Dream Website?",
    ctaDescription: isNl
      ? "Laten we bespreken hoe we een website kunnen creëren die jouw bedrijf helpt groeien."
      : "Let's discuss how we can create a website that helps your business grow.",
    ctaPrimary: isNl ? "START NU" : "GET STARTED",
    ctaSecondary: isNl ? "BEKIJK ONS WERK" : "VIEW OUR WORK",
  }

  const services = [
    {
      title: isNl ? "Website strategie" : "Website Strategy",
      icon: "website",
      description: isNl
        ? "We ontwikkelen een complete strategie voor je website die aansluit op je bedrijfsdoelen en doelgroep."
        : "We develop a comprehensive strategy for your website that aligns with your business goals and target audience.",
      desktopDescription: isNl
        ? "We ontwikkelen een complete strategie voor je website die aansluit op je bedrijfsdoelen en doelgroep. Dit omvat sitestructuur, user flow en conversie-optimalisatie."
        : "We develop a comprehensive strategy for your website that aligns with your business goals and target audience. This includes site architecture, user flow, and conversion optimization.",
      features: isNl ? ["Planning van gebruikerservaring", "Conversiestrategie", "Contentstrategie"] : ["User experience planning", "Conversion strategy", "Content strategy"],
    },
    {
      title: isNl ? "Website design" : "Website Design",
      icon: "design",
      description: isNl
        ? "Onze designers creëren visueel sterke websites die je merkidentiteit weerspiegelen en je doelgroep aanspreken."
        : "Our designers create visually stunning websites that reflect your brand identity and engage your audience.",
      desktopDescription: isNl
        ? "Onze designers creëren visueel sterke websites die je merkidentiteit weerspiegelen en je doelgroep aanspreken. We focussen op intuïtieve, gebruiksvriendelijke interfaces die bezoekers richting conversie leiden."
        : "Our designers create visually stunning websites that reflect your brand identity and engage your audience. We focus on creating intuitive, user-friendly interfaces that guide visitors toward conversion.",
      features: isNl ? ["Maatwerk visueel design", "Responsive layouts", "UI/UX optimalisatie"] : ["Custom visual design", "Responsive layouts", "UI/UX optimization"],
    },
    {
      title: isNl ? "Development" : "Development",
      icon: "development",
      description: isNl
        ? "Ons development team bouwt websites die snel, veilig en schaalbaar zijn met moderne technologie."
        : "Our development team builds websites that are fast, secure, and scalable using modern technologies.",
      desktopDescription: isNl
        ? "Ons development team bouwt websites die snel, veilig en schaalbaar zijn. We gebruiken moderne technologieën en best practices zodat je website goed presteert en eenvoudig te beheren blijft."
        : "Our development team builds websites that are fast, secure, and scalable. We use modern technologies and best practices to ensure your website performs well and is easy to maintain.",
      features: isNl ? ["Maatwerk code", "CMS implementatie", "E-commerce oplossingen"] : ["Custom coding", "CMS implementation", "E-commerce solutions"],
    },
  ]

  const processSteps = [
    {
      number: 1,
      title: isNl ? "Discovery" : "Discovery",
      description: isNl
        ? "We starten met het begrijpen van je bedrijf, doelen, doelgroep en concurrenten om een strategische basis voor je website te ontwikkelen."
        : "We start by understanding your business, goals, target audience, and competitors to develop a strategic foundation for your website.",
    },
    {
      number: 2,
      title: isNl ? "Design" : "Design",
      description: isNl
        ? "Onze designers maken wireframes en visuele ontwerpen die aansluiten op je merk en een optimale gebruikerservaring bieden."
        : "Our designers create wireframes and visual designs that align with your brand and provide an optimal user experience.",
    },
    {
      number: 3,
      title: isNl ? "Development" : "Development",
      description: isNl
        ? "Onze developers brengen de ontwerpen tot leven en bouwen een responsive, snelle en veilige website met alle functionaliteit die je nodig hebt."
        : "Our developers bring the designs to life, building a responsive, fast, and secure website with all the functionality you need.",
    },
    {
      number: 4,
      title: isNl ? "Launch & support" : "Launch & Support",
      description: isNl
        ? "Na uitgebreide testing lanceren we je website en bieden we doorlopende support en onderhoud zodat hij goed blijft presteren."
        : "After thorough testing, we launch your website and provide ongoing support and maintenance to ensure it continues to perform well.",
    },
  ]

  return (
    <PageWrapper>
      <div className="flex flex-col">
        <section className="relative">
          <div className="hero-background-container">
            <img src="/images/ServicesWebsite-HERO.webp" alt={copy.heroAlt} className="hero-background-image" />
          </div>
        </section>

        <ServiceBanner currentService="website" />

        <section className="py-16 bg-white">
          <div className="container">
            <div className="md:hidden">
              <ScrollAnimation variant="fadeInUp">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-purple rounded-full shadow-lg">
                      <Image src="/images/website.webp" alt={copy.iconAlt} width={50} height={50} className="icon-pulse" style={{ margin: "0 auto" }} />
                    </div>
                    <h2 className="text-3xl font-ultra">{copy.title}</h2>
                  </div>
                  <p className="mb-6">{copy.mobileIntro}</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-purple rounded-lg p-6 text-white mb-8">
                  <h3 className="text-xl font-ultra mb-4 text-center">{copy.whyTitle}</h3>
                  <p className="mb-4 text-sm">{copy.whyIntro1}</p>
                  <p className="text-sm">{copy.whyIntro2Mobile}</p>
                </div>
              </ScrollAnimation>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation variant="fadeInRight">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-purple rounded-full shadow-lg">
                      <Image src="/images/website.webp" alt={copy.iconAlt} width={50} height={50} className="icon-pulse" style={{ margin: "0 auto" }} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-ultra">{copy.title}</h2>
                  </div>
                  <p className="mb-6">{copy.desktopIntro1}</p>
                  <p className="mb-6">{copy.desktopIntro2}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft">
                <div className="bg-purple rounded-[32px] p-8 text-white">
                  <h3 className="text-2xl font-ultra mb-4">{copy.whyTitle}</h3>
                  <p className="mb-4">{copy.whyIntro1}</p>
                  <p>{copy.whyIntro2Desktop}</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: "#C27AE6" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center text-white">{copy.servicesTitle}</h2>
            </ScrollAnimation>

            <div className="md:hidden">
              <MobileServicesCarousel services={services.map((service) => ({ title: service.title, icon: service.icon, iconBg: "bg-purple", description: service.description, features: service.features }))} />
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={service.title} variant="fadeInUp" delay={0.1 * (index + 1)}>
                  <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-3 bg-purple rounded-full flex-shrink-0">
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
              <MobileProcessCarousel steps={processSteps.map((step) => ({ ...step, bgColor: "bg-purple" }))} />
            </div>

            <div className="hidden md:grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={step.number} variant="fadeInUp" delay={0.1 * (index + 1)}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">{step.number}</div>
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
