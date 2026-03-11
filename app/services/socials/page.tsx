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
import SocialPackagesCarousel from "@/components/social-packages-carousel"

export default function SocialsServicePage() {
  const { locale } = useLocale()
  const isNl = locale === "nl"

  const copy = {
    heroAlt: isNl ? "Social media diensten achtergrond" : "Social Media Services Background",
    iconAlt: isNl ? "Social media icoon" : "Social Media Icon",
    title: isNl ? "Social media" : "Social Media",
    introMobile: isNl
      ? "Social media is meer dan alleen content posten, het draait om relaties opbouwen met je doelgroep en een community rond je merk creëren."
      : "Social media is more than just posting content-it's about building relationships with your audience and creating a community around your brand.",
    introDesktop1: isNl
      ? "Social media is meer dan alleen content posten, het draait om relaties opbouwen met je doelgroep en een community rond je merk creëren. Wij ontwikkelen en voeren een socialmedia-strategie uit die engagement stimuleert, merkbekendheid vergroot en leads oplevert."
      : "Social media is more than just posting content-it's about building relationships with your audience and creating a community around your brand. We help you develop and execute a social media strategy that drives engagement, builds brand awareness, and generates leads.",
    introDesktop2: isNl
      ? "Ons team van socialmedia-experts blijft op de hoogte van de nieuwste trends en algoritme-updates zodat jouw merk relevant en zichtbaar blijft in het steeds veranderende socialmedialandschap."
      : "Our team of social media experts stays up-to-date with the latest trends and algorithm changes to ensure your brand stays relevant and visible in the ever-changing social media landscape.",
    whyTitle: isNl ? "Waarom social media belangrijk is" : "Why Social Media Matters",
    whyIntro: isNl
      ? "In de digitale wereld van vandaag is social media een essentieel onderdeel van je marketingstrategie. Het helpt je om:"
      : "In today's digital world, social media is an essential part of your marketing strategy. It helps you:",
    whyBullets: isNl
      ? [
          "Op persoonlijk niveau contact te maken met je doelgroep",
          "Merkbekendheid en herkenning op te bouwen",
          "Verkeer naar je website te sturen",
          "Leads en verkopen te genereren",
        ]
      : [
          "Connect with your audience on a personal level",
          "Build brand awareness and recognition",
          "Drive traffic to your website",
          "Generate leads and sales",
        ],
    servicesTitle: isNl ? "Onze social media diensten" : "Our Social Media Services",
    packagesEyebrow: isNl ? "PAKKETTEN" : "PACKAGES",
    packagesTitle: isNl ? "Social media pakketten" : "Social Media Packages",
    packagesDescription: isNl
      ? "Kies het niveau van support dat past bij jouw groeifase, van snelle storytelling sprints tot volledig op maat gemaakte doorlopende samenwerkingen."
      : "Pick the level of support that fits your growth stage-from nimble storytelling sprints to bespoke, always-on partnerships.",
    serviceBadge: isNl ? "DIENST" : "SERVICE",
    includesPerMonth: isNl ? "Inclusief per maand" : "Includes per month",
    alsoIncluded: isNl ? "Ook inbegrepen" : "Also included",
    customPackage: isNl ? "MAATWERKPAKKET" : "CUSTOM PACKAGE",
    customDescription: isNl
      ? "Volledig opgebouwd rond jouw doelen: elk budget, elke kanaalmix, volledig maatwerk. Flexibele deliverables, strategietijd, production add-ons en community management uren wanneer jij ze nodig hebt."
      : "Built around your exact goals-any budget, any channel mix, fully bespoke. Flexible deliverables, strategy time, production add-ons, and community management hours activated whenever you need them.",
    extrasEyebrow: isNl ? "EXTRA DIENSTEN" : "EXTRA SERVICES",
    extrasTitle: isNl ? "Upgrade je pakket" : "Boost Your Package",
    extrasDescription: isNl
      ? "Snelle add-ons voor productie, campagnes of extra ondersteuning wanneer je dat nodig hebt."
      : "Quick add-ons for production, campaigns, or extra hands when you need them.",
    tableService: isNl ? "Dienst" : "Service",
    tablePrice: isNl ? "Prijs" : "Price",
    extrasImageAlt: isNl ? "Illustratie extra diensten" : "Extra services illustration",
    processTitle: isNl ? "Ons social media proces" : "Our Social Media Process",
    ctaTitle: isNl ? "Klaar om je social media presence te versterken?" : "Ready to Amplify Your Social Media Presence?",
    ctaDescription: isNl
      ? "Laten we bespreken hoe we jouw bedrijf kunnen helpen een sterke social media aanwezigheid op te bouwen."
      : "Let's discuss how we can help your business build a strong social media presence.",
    ctaPrimary: isNl ? "START NU" : "GET STARTED",
    ctaSecondary: isNl ? "BEKIJK ONS WERK" : "VIEW OUR WORK",
    goToPackage: (name: string) => (isNl ? `Ga naar pakket ${name}` : `Go to ${name} package`),
  }

  const services = [
    {
      title: isNl ? "Social media strategie" : "Social Media Strategy",
      icon: "strategy",
      iconBg: "bg-pink",
      description: isNl
        ? "We ontwikkelen een complete socialmedia-strategie die aansluit op jouw bedrijfsdoelen en doelgroep."
        : "We develop a comprehensive social media strategy that aligns with your business goals and target audience.",
      features: isNl
        ? ["Platform-audit en selectie", "Concurrentieanalyse", "Planning van contentkalender"]
        : ["Platform audit and selection", "Competitor analysis", "Content calendar planning"],
      desktopDescription: isNl
        ? "We ontwikkelen een complete socialmedia-strategie die aansluit op jouw bedrijfsdoelen en doelgroep. Dit omvat platformkeuze, contentthema's, postfrequentie en groeiaanpak."
        : "We develop a comprehensive social media strategy that aligns with your business goals and target audience. This includes platform selection, content themes, posting frequency, and growth tactics.",
    },
    {
      title: isNl ? "Content creatie" : "Content Creation",
      icon: "content",
      iconBg: "bg-pink",
      description: isNl
        ? "We creëren pakkende content in jouw merkstijl die aansluit bij je doelgroep en engagement stimuleert."
        : "We create engaging, on-brand content that resonates with your audience and drives engagement.",
      features: isNl
        ? ["Grafisch ontwerp en videoproductie", "Copywriting en captions", "Hashtagonderzoek en optimalisatie"]
        : ["Graphic design and video production", "Copywriting and caption creation", "Hashtag research and optimization"],
      desktopDescription: isNl
        ? "We creëren pakkende content in jouw merkstijl die aansluit bij je doelgroep en engagement stimuleert. Denk aan visuals, video's, captions en hashtagstrategieën."
        : "We create engaging, on-brand content that resonates with your audience and drives engagement. This includes graphics, videos, captions, and hashtag strategies.",
    },
    {
      title: isNl ? "Community management" : "Community Management",
      icon: "community",
      iconBg: "bg-pink",
      description: isNl
        ? "We gaan actief in gesprek met je doelgroep, reageren op comments en berichten en bouwen een loyale community rond je merk."
        : "We actively engage with your audience, respond to comments and messages, and build a loyal community around your brand.",
      features: isNl
        ? ["Beheer van comments en berichten", "Monitoring van merkvermeldingen", "Community-building initiatieven"]
        : ["Comment and message management", "Brand mention monitoring", "Community building initiatives"],
      desktopDescription: isNl
        ? "We gaan actief in gesprek met je doelgroep, reageren op comments en berichten en bouwen een loyale community rond je merk. Dit omvat ook monitoring van vermeldingen en het versterken van relaties."
        : "We actively engage with your audience, respond to comments and messages, and build a loyal community around your brand. This includes monitoring mentions and fostering relationships.",
    },
  ]

  const socialPackages = [
    {
      name: "Small",
      price: isNl ? "€500 per maand" : "€500 per month",
      description: isNl ? "Compacte ondersteuning voor consistente zichtbaarheid." : "Compact support for steady visibility.",
      perMonth: ["30 Stories", "12 Posts", "1 Reel", "1 Campaign", "Instagram & Facebook"],
      alsoIncluded: isNl ? ["Strategiesessie", "Wekelijkse planningscall", "Maandrapportage"] : ["Strategy Session", "Weekly Scheduling Call", "Monthly Reporting"],
      accent: "text-[#FFE45E]",
      starColor: "text-[#67E8F9]",
    },
    {
      name: "Medium",
      price: isNl ? "€1200 per maand" : "€1200 per month",
      description: isNl ? "Gebalanceerde aanwezigheid met maandelijks hero-content." : "Balanced presence with monthly hero content.",
      perMonth: ["60 Stories", "16 Posts", "1 Reel", "1 Campaign", "1 Hero Video", "1 Blog", "Instagram & Facebook"],
      alsoIncluded: isNl ? ["Strategiesessie", "Wekelijkse planningscall", "Maandrapportage", "Branding"] : ["Strategy Session", "Weekly Scheduling Call", "Monthly Reporting", "Branding"],
      accent: "text-[#FFE45E]",
      starColor: "text-[#FFE45E]",
    },
    {
      name: "Large",
      price: isNl ? "€2500 per maand" : "€2500 per month",
      description: isNl ? "Veel content en storytelling voor ambitieuze merken." : "High-volume storytelling for ambitious brands.",
      perMonth: ["90 Stories", "30 Posts", "6 Reels", "2 Campaigns", "1 Hero Video", "1 Blog", "Instagram & Facebook"],
      alsoIncluded: isNl ? ["Strategiesessie", "Wekelijkse planningscall", "Maandrapportage", "Branding", "Contentdag"] : ["Strategy Session", "Weekly Scheduling Call", "Monthly Reporting", "Branding", "Content Day"],
      accent: "text-[#FFE45E]",
      starColor: "text-[#C084FC]",
    },
    {
      name: isNl ? "Maatwerk" : "Custom",
      price: isNl ? "Op aanvraag" : "On Request",
      description: isNl ? "Volledig afgestemde retainers voor elk budget en ambitieniveau." : "Fully tailored retainers for any budget and ambition.",
      perMonth: isNl ? ["X Stories per maand", "X Posts per maand", "X Reels per maand", "X Campagnes", "Instagram & Facebook"] : ["X Stories per month", "X Posts per month", "X Reels per month", "X Campaigns", "Instagram & Facebook"],
      alsoIncluded: isNl ? ["Strategiesessie", "Wekelijkse planningscall", "Maandrapportage", "Branding", "Contentdag", "15u community management"] : ["Strategy Session", "Weekly Scheduling Call", "Monthly Reporting", "Branding", "Content Day", "15h Community Management"],
      accent: "text-white",
      starColor: "text-white",
      isCustom: true,
    },
  ]

  const extraServices = [
    { service: isNl ? "Opstartkosten" : "Set Up Costs", price: "€100" },
    { service: "Reel", price: "€200" },
    { service: isNl ? "Premium fotocontent (10x)" : "Premium Photo Content (10x)", price: "€250" },
    { service: isNl ? "Premium videocontent (5x)" : "Premium Video Content (5x)", price: "€450" },
    { service: isNl ? "Community management" : "Community Management", price: isNl ? "€50 per uur" : "€50 per hour" },
    { service: isNl ? "Online campagne" : "Online Campaign", price: "€200" },
    { service: "Branding", price: "€500" },
    { service: isNl ? "Contentdag op locatie" : "Content Day on Location", price: "€2299" },
    { service: isNl ? "Ads budget" : "Ads Spend", price: isNl ? "Op aanvraag" : "On Demand" },
  ]

  const processSteps = [
    {
      number: 1,
      title: isNl ? "Meet & Greet" : "Meet & Greet",
      summary: isNl
        ? "We maken kennis, stemmen verwachtingen af en kijken of we de juiste match zijn. Als het klikt, plannen we de Spark Session."
        : "Let's get acquainted, align on expectations, and confirm we're the right partners. If there's a spark, we book The Spark Session.",
      bullets: [],
    },
    {
      number: 2,
      title: isNl ? "Spark Session" : "Spark Session",
      summary: isNl ? "Tijdens de Spark Session duiken we diep in de basis van je merk." : "During the Spark Session we go all-in and set the foundation.",
      bullets: isNl ? ["We duiken in jouw verhaal", "We ontdekken de essentie van je merk", "We bepalen je positionering", "We zetten doelen & KPI's"] : ["We dive into your story", "Uncover your brand essence", "Define positioning", "Set goals & KPIs"],
    },
    {
      number: 3,
      title: isNl ? "Design" : "Design",
      summary: isNl ? "Hier start het creatieve werk en krijgt de merkstem vorm." : "This is where the creative work begins and the brand voice is shaped.",
      bullets: isNl ? ["Afstemming visuele identiteit", "Contentrichting", "Ontwikkeling stijlguide", "Bepalen tone of voice"] : ["Visual identity alignment", "Content direction", "Style guide creation", "Tone of voice definition"],
    },
    {
      number: 4,
      title: isNl ? "Setup" : "Setup",
      summary: isNl ? "We bereiden elk kanaal, systeem en workflow voor op uitvoering." : "We prepare every channel, system, and workflow for execution.",
      bullets: isNl ? ["Optimalisatie van accounts", "Opzetten contentkalender", "Campagne-inrichting", "Technische integraties", "Tracking & performance structuur"] : ["Account optimization", "Content calendar creation", "Campaign setup", "Technical integrations", "Tracking & performance structure"],
    },
    {
      number: 5,
      title: isNl ? "Wekelijkse planning" : "Weekly Planning",
      summary: isNl ? "Uitvoering met structuur om wendbaar en afgestemd te blijven." : "Execution with structure to stay agile and aligned.",
      bullets: isNl ? ["Wekelijkse planning", "Content approvals", "Optimalisatie-aanpassingen", "Strategische afstemmingscalls"] : ["Weekly scheduling", "Content approvals", "Optimization adjustments", "Strategy alignment calls"],
    },
    {
      number: 6,
      title: isNl ? "Maandrapport" : "Monthly Report",
      summary: isNl ? "Performance. Duidelijkheid. Groei." : "Performance. Clarity. Growth.",
      bullets: isNl ? ["Data-analyse", "KPI-tracking", "Inzichten & learnings", "Optimalisatiestrategie", "Groeiaanbevelingen"] : ["Data analysis", "KPI tracking", "Insights & learnings", "Optimization strategy", "Growth recommendations"],
    },
  ]

  return (
    <PageWrapper>
      <div className="flex flex-col">
        <section className="relative">
          <div className="hero-background-container">
            <img src="/images/ServicesSocials-HERO.webp" alt={copy.heroAlt} className="hero-background-image" />
          </div>
        </section>

        <ServiceBanner currentService="socials" />

        <section className="py-16 bg-white">
          <div className="container">
            <div className="md:hidden">
              <ScrollAnimation variant="fadeInUp">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-pink rounded-full shadow-lg">
                      <Image src="/images/socials.webp" alt={copy.iconAlt} width={50} height={50} className="icon-pulse" style={{ margin: "0 auto" }} />
                    </div>
                    <h2 className="text-3xl font-ultra">{copy.title}</h2>
                  </div>
                  <p className="mb-6">{copy.introMobile}</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-pink rounded-[32px] p-6 text-white mb-8">
                  <h3 className="text-xl font-ultra mb-4 text-center">{copy.whyTitle}</h3>
                  <p className="mb-4 text-sm">{copy.whyIntro}</p>
                  <ul className="mb-4 space-y-2 text-sm">
                    {copy.whyBullets.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation variant="fadeInRight">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-pink rounded-full shadow-lg">
                      <Image src="/images/socials.webp" alt={copy.iconAlt} width={50} height={50} className="icon-pulse" style={{ margin: "0 auto" }} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-ultra">{copy.title}</h2>
                  </div>
                  <p className="mb-6">{copy.introDesktop1}</p>
                  <p className="mb-6">{copy.introDesktop2}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft">
                <div className="rounded-[32px] p-8 text-white" style={{ backgroundColor: "#f44976" }}>
                  <h3 className="text-2xl font-ultra mb-4">{copy.whyTitle}</h3>
                  <p className="mb-4">{copy.whyIntro}</p>
                  <ul className="mb-6 space-y-2">
                    {copy.whyBullets.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="font-bold mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: "#f44976" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center" style={{ color: "#FFE45E" }}>
                {copy.servicesTitle}
              </h2>
            </ScrollAnimation>

            <div className="md:hidden">
              <MobileServicesCarousel services={services.map((service) => ({ title: service.title, icon: service.icon, iconBg: service.iconBg, description: service.description, features: service.features }))} />
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={service.title} variant="fadeInUp" delay={0.1 * (index + 1)}>
                  <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center mr-3 bg-pink rounded-full flex-shrink-0">
                        <ServiceIcon name={service.icon} size={30} color="#fff" />
                      </div>
                      <h3 className="text-xl font-ultra">{service.title}</h3>
                    </div>
                    <p className="text-sm mb-4">{service.desktopDescription}</p>
                    <ul className="text-sm space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="font-bold mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: "#FFF1F6" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-xs tracking-[0.4em] font-semibold text-gray-500 mb-4">{copy.packagesEyebrow}</p>
                <h2 className="text-3xl md:text-4xl font-ultra mb-4">{copy.packagesTitle}</h2>
                <p className="text-base md:text-lg">{copy.packagesDescription}</p>
              </div>
            </ScrollAnimation>

            <div className="lg:hidden">
              <ScrollAnimation variant="fadeInUp">
                <SocialPackagesCarousel
                  packages={socialPackages.filter((pkg) => !pkg.isCustom)}
                  labels={{
                    service: copy.serviceBadge,
                    includesPerMonth: copy.includesPerMonth,
                    alsoIncluded: copy.alsoIncluded,
                    goToPackage: copy.goToPackage,
                  }}
                />
              </ScrollAnimation>
            </div>

            <div className="hidden lg:grid gap-8 lg:grid-cols-3">
              {socialPackages.filter((pkg) => !pkg.isCustom).map((pkg, index) => (
                <ScrollAnimation key={pkg.name} variant="fadeInUp" delay={0.1 * index}>
                  <div className="bg-[#F44976] rounded-[32px] shadow-xl p-6 text-white flex flex-col h-full border-2 border-black">
                    <div className="flex items-center justify-between mb-6">
                      <div className="rounded-2xl px-3 py-2 text-xs tracking-[0.4em] bg-white/20">{copy.serviceBadge}</div>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10">
                        <span className={`text-xl ${pkg.starColor}`}>★</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-3xl font-ultra" style={{ color: "#FFE45E" }}>{pkg.name}</h3>
                      <p className={`text-lg font-semibold ${pkg.accent}`}>{pkg.price}</p>
                      <p className="text-sm mt-2 text-white/80">{pkg.description}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white text-base mb-2">{copy.includesPerMonth}</h4>
                        <ul className="text-sm space-y-1">
                          {pkg.perMonth.map((item) => (
                            <li key={item} className="flex items-start gap-2"><span>•</span><span>{item}</span></li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base mb-2">{copy.alsoIncluded}</h4>
                        <ul className="text-sm space-y-1">
                          {pkg.alsoIncluded.map((item) => (
                            <li key={item} className="flex items-start gap-2"><span>•</span><span>{item}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {socialPackages.find((pkg) => pkg.isCustom) && (
              <ScrollAnimation variant="fadeInUp" delay={0.4}>
                <div className="mt-8 rounded-[32px] border-2 border-black bg-black text-white px-6 py-6 shadow-xl">
                  <div>
                    <p className="tracking-[0.4em] text-xs text-white/70 mb-2">{copy.customPackage}</p>
                    <h3 className="text-3xl font-ultra mb-2">{socialPackages.find((pkg) => pkg.isCustom)!.name}</h3>
                    <p className="text-lg font-semibold text-white/90">{socialPackages.find((pkg) => pkg.isCustom)!.price}</p>
                    <p className="text-sm text-white/80 mt-2">{copy.customDescription}</p>
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </section>

        <section className="py-12" style={{ backgroundColor: "#f44976" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <div className="text-center max-w-2xl mx-auto mb-6 text-white md:w-2/3 md:ml-auto md:mr-0 md:pr-12">
                <p className="text-xs tracking-[0.4em] font-semibold mb-2 opacity-80">{copy.extrasEyebrow}</p>
                <h2 className="text-3xl font-ultra mb-2" style={{ color: "#FFE45E" }}>{copy.extrasTitle}</h2>
                <p className="text-sm text-white/80">{copy.extrasDescription}</p>
              </div>
            </ScrollAnimation>

            <div className="md:grid md:grid-cols-[1.1fr_2fr] md:gap-0 gap-6 items-stretch">
              <div className="hidden md:flex items-stretch md:-mr-20">
                <div className="relative w-full h-full min-h-[480px] overflow-visible">
                  <Image src="/images/extraservices-aura.webp" alt={copy.extrasImageAlt} fill className="object-contain object-right scale-[1.5] origin-right" priority />
                </div>
              </div>

              <div className="overflow-hidden rounded-[32px] md:rounded-l-[32px] border-2 border-black shadow-xl bg-white px-3 py-4 md:px-0 md:py-0 md:ml-10">
                <div className="hidden md:grid grid-cols-[2fr_1fr] bg-pink-100 border-b-2 border-black font-semibold uppercase tracking-wide text-sm">
                  <div className="py-3 pl-8 text-left">{copy.tableService}</div>
                  <div className="py-3 pr-6 text-right">{copy.tablePrice}</div>
                </div>
                <div>
                  {extraServices.map((item, idx) => (
                    <div key={item.service} className={`flex flex-col md:grid md:grid-cols-[2fr_1fr] gap-1 md:gap-3 px-3 py-2 md:px-8 md:py-3 text-xs md:text-sm ${idx % 2 === 0 ? "bg-white" : "bg-pink-50"}`}>
                      <div className="font-semibold text-left md:pl-8">{item.service}</div>
                      <div className="md:text-right text-gray-600 md:text-inherit md:pr-4">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center">{copy.processTitle}</h2>
            </ScrollAnimation>

            <div className="md:hidden">
              <MobileProcessCarousel
                steps={processSteps.map((step) => ({
                  number: step.number,
                  title: step.title,
                  description: step.summary + (step.bullets.length ? `\n\n${step.bullets.map((bullet) => `• ${bullet}`).join("\n")}` : ""),
                  bgColor: "bg-pink",
                }))}
              />
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={step.number} variant="fadeInUp" delay={0.1 * (index + 1)}>
                  <div className="bg-[#F44976] rounded-[32px] border-2 border-black p-6 h-full shadow-lg flex flex-col text-white">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center text-3xl font-ultra">{step.number}</div>
                    </div>
                    <h3 className="text-2xl font-ultra mb-3 text-center" style={{ color: "#FFE45E" }}>{step.title}</h3>
                    <p className="text-sm text-center mb-4 text-white/85 leading-relaxed whitespace-pre-line">{step.summary}</p>
                    {step.bullets.length > 0 && (
                      <ul className="text-sm space-y-1 text-white/90">
                        {step.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2"><span>•</span><span>{bullet}</span></li>
                        ))}
                      </ul>
                    )}
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
