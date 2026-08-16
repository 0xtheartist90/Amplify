"use client"

import { CustomButton } from "@/components/custom-button"
import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollAnimation } from "@/components/scroll-animation"
import { FloatingAnimation } from "@/components/floating-animation"
import MobileValuesCarousel from "@/components/mobile-values-carousel"
import { Burst, ScribbleUnderline, Sparkle, StampBadge } from "@/components/doodles"
import { Marquee } from "@/components/marquee"
import { SeamWordmark } from "@/components/seam-wordmark"
import { useEffect, useState } from "react"
import { useLocale } from "@/lib/i18n"

type ServiceCard = {
  id: string
  title: string
  flip: string
  description: string
  points: string[]
  icon: string
  link: string
}

// Featured work for the studio section
const workItems = [
  {
    href: "/portfolio/5",
    img: "/images/Portfolio/Portfolio%20SHE/portfolio-she-thumb.webp",
    title: "SHE",
    tag: "Branding · Website",
  },
  {
    href: "/portfolio/2",
    img: "/images/Portfolio/Portfolio%20Fawaka/fawaka-main.webp",
    title: "Fawaka",
    tag: "Branding · Socials",
  },
  {
    href: "/portfolio/3",
    img: "/images/Portfolio/Portfolio%20Prysmic/prysmic-homepage.webp",
    title: "Prysmic",
    tag: "Website",
  },
]

export default function DesktopHome() {
  const { locale, localizeHref } = useLocale()
  const serviceCards: ServiceCard[] =
    locale === "nl"
      ? [
          {
            id: "socials",
            title: "Socials",
            flip: "Gedurfd",
            description:
              "Wij plannen, maken en beheren je socials van A tot Z. Content die de scroll stopt en van volgers vaste klanten maakt.",
            points: ["Contentkalender & planning", "Reels, posts & stories", "Communitybeheer & rapportage"],
            icon: "/images/socials.webp",
            link: "/services/socials",
          },
          {
            id: "ads",
            title: "Ads",
            flip: "Scherp",
            description:
              "Campagnes op Meta en Google, afgesteld op rendement. Elke euro meetbaar, elke klik verantwoord, met rapportages die je snapt.",
            points: ["Meta & Google Ads", "Doelgroep- & A/B-testen", "Maandelijkse rapportage"],
            icon: "/images/ads.webp",
            link: "/services/ads",
          },
          {
            id: "branding",
            title: "Branding",
            flip: "Herkenbaar",
            description:
              "Eén herkenbaar merk op elk kanaal: logo, kleuren en tone-of-voice, plus templates waarmee je team direct vooruit kan.",
            points: ["Logo & visuele identiteit", "Tone-of-voice & merkgids", "Social templates"],
            icon: "/images/branding.webp",
            link: "/services/branding",
          },
          {
            id: "website",
            title: "Website",
            flip: "Razendsnel",
            description:
              "Snelle, conversiegerichte websites die je merk dragen én verkopen. Ontworpen, gebouwd en live binnen weken, niet maanden.",
            points: ["Design & development", "SEO-basis & snelheid", "Onderhoud & support"],
            icon: "/images/website.webp",
            link: "/services/website",
          },
        ]
      : [
          {
            id: "socials",
            title: "Socials",
            flip: "Bold",
            description:
              "We plan, create, and manage your socials end to end. Content that stops the scroll and turns followers into regulars.",
            points: ["Content calendar & planning", "Reels, posts & stories", "Community management & reporting"],
            icon: "/images/socials.webp",
            link: "/services/socials",
          },
          {
            id: "ads",
            title: "Ads",
            flip: "Sharp",
            description:
              "Campaigns on Meta and Google, tuned for return. Every euro tracked, every click accounted for, with reports you can actually read.",
            points: ["Meta & Google Ads", "Audience & A/B testing", "Monthly reporting"],
            icon: "/images/ads.webp",
            link: "/services/ads",
          },
          {
            id: "branding",
            title: "Branding",
            flip: "Memorable",
            description:
              "One unmistakable brand on every channel: logo, colors, and tone of voice, plus templates your team can run with.",
            points: ["Logo & visual identity", "Tone of voice & brand guide", "Social templates"],
            icon: "/images/branding.webp",
            link: "/services/branding",
          },
          {
            id: "website",
            title: "Website",
            flip: "Lightning fast",
            description:
              "Fast, conversion-first websites that carry your brand and close the sale. Designed, built, and live in weeks, not months.",
            points: ["Design & development", "SEO foundations & speed", "Maintenance & support"],
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
            "Gedurfde socials, scherpe ads en merken die blijven hangen. Wij maken van scrollers klanten en van klanten fans.",
          explore: "ONTDEK MEER",
          schedule: "PLAN EEN CALL",
          what: "WAT?",
          why: "WAAROM?",
          service: "Dienst",
          tapDetails: "Tik voor details",
          clickDetails: "Klik voor details",
          innovation: "Standaard gedurfd",
          innovationDescription:
            "Veilige content wordt overgeslagen. Wij maken werk dat opvalt, blijft hangen en gesprekken start.",
          authenticity: "Jouw merk, jouw stem",
          authenticityDescription:
            "Geen copy-paste campagnes. Alles wat we maken klinkt als jij, omdat we de tijd nemen om je echt te leren kennen.",
          results: "Meetbare groei",
          resultsDescription: "Bereik, leads en omzet die je kunt volgen. Beweegt het geen cijfer, dan gaat het niet live.",
          ctaTitle: "Klaar om je merk te versterken?",
          ctaDescription:
            "Vertel ons waar je wilt groeien. Wij brengen het plan, de content en het lawaai.",
          getStarted: "START EEN PROJECT",
          viewWork: "BEKIJK WERK",
          heroLabel: "Marketingstudio",
          features: [
            { icon: "/images/custom-solution.webp", title: "Strategie eerst", desc: "Geen losse posts maar een plan gekoppeld aan je doelen." },
            { icon: "/images/onboarding.webp", title: "Content die converteert", desc: "Gemaakt om de scroll te stoppen en de verkoop te starten." },
            { icon: "/images/retention.webp", title: "Meetbaar resultaat", desc: "Rapportages die je snapt, groei die je ziet." },
          ],
          whyLabel: "Over Amplify",
          aboutTitle: "Wij zijn Amplify.",
          teamCaption: "Het team achter het werk",
          teamBurst: "Hoi!",
          aboutIntro:
            "Amplify is een team van strategen, makers en creatieve nerds met één missie: merken laten opvallen.",
          aboutIntroSub: "Dit is waar we elke dag voor staan.",
          aboutCta: "LEER ONS KENNEN",
          ctaLabel: "Contact",
          founderRole: "Oprichter",
          founderLine: "Ik bekijk elke aanvraag persoonlijk en denk direct met je mee.",
          formName: "Naam",
          formEmail: "E-mailadres",
          formLooking: "Waar zoek je hulp bij?",
          formOther: "Iets anders",
          formSend: "VERSTUUR",
          formSubject: "Projectaanvraag van",
          formNote: "We nemen zo snel mogelijk contact met je op.",
          workLabel: "Portfolio",
          workTitle: "Vers uit de studio",
          workLink: "BEKIJK ALLES",
          workNew: "Nieuw!",
          workServices: "Onze diensten",
          workQuoteLabel: "Klanten aan het woord",
          testimonialQuote:
            "We kregen veel meer dan we hadden verwacht. We wisten eigenlijk niet precies wat we van onze website wilden, maar het is echt geweldig geworden.",
          testimonialAuthor: "Team Stichting Human Empowerment",
          workRecent: "Recent werk",
          viewProject: "Bekijk project",
        }
      : {
          heroTitle: "Your Reach",
          heroDescription:
            "Bold socials, sharp ads, and brands that get remembered. We turn scrollers into customers and customers into fans.",
          explore: "DISCOVER MORE",
          schedule: "BOOK A CALL",
          what: "WHAT?",
          why: "WHY?",
          service: "Service",
          tapDetails: "Tap to view details",
          clickDetails: "Click to view details",
          innovation: "Bold by default",
          innovationDescription:
            "Safe content gets skipped. We make work that stands out, sticks around, and starts conversations.",
          authenticity: "Your brand, your voice",
          authenticityDescription: "No copy-paste campaigns. Everything we make sounds like you, because we take the time to know you.",
          results: "Growth you can measure",
          resultsDescription: "Reach, leads, and revenue you can track. If it does not move a number, it does not go live.",
          ctaTitle: "Ready to Amplify Your Brand?",
          ctaDescription:
            "Tell us where you want to grow. We bring the plan, the content, and the noise.",
          getStarted: "START A PROJECT",
          viewWork: "VIEW WORK",
          heroLabel: "Marketing Studio",
          features: [
            { icon: "/images/custom-solution.webp", title: "Strategy first", desc: "No random posts, just a plan tied to your goals." },
            { icon: "/images/onboarding.webp", title: "Content that converts", desc: "Made to stop the scroll and start the sale." },
            { icon: "/images/retention.webp", title: "Measurable results", desc: "Reports you can read, growth you can see." },
          ],
          whyLabel: "About Amplify",
          aboutTitle: "We are Amplify.",
          teamCaption: "The team behind the work",
          teamBurst: "Say hi!",
          aboutIntro:
            "Amplify is a team of strategists, makers and creative nerds with one mission: making brands impossible to ignore.",
          aboutIntroSub: "This is what we stand for every day.",
          aboutCta: "GET TO KNOW US",
          ctaLabel: "Contact",
          founderRole: "Founder",
          founderLine: "I personally review every request and think along from day one.",
          formName: "Name",
          formEmail: "Your email address",
          formLooking: "What are you looking for?",
          formOther: "Something else",
          formSend: "SEND MESSAGE",
          formSubject: "Project request from",
          formNote: "We will get back to you as soon as possible.",
          workLabel: "Portfolio",
          workTitle: "Fresh from the studio",
          workLink: "VIEW ALL",
          workNew: "New!",
          workServices: "Our services",
          workQuoteLabel: "What clients say",
          testimonialQuote:
            "We got way more than we expected. We did not really know what we wanted from our website, but it came out great.",
          testimonialAuthor: "Stichting Human Empowerment Team",
          workRecent: "Recent work",
          viewProject: "View project",
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
        <div className="section-wrapper mobile-home-hero paper-grain flex items-stretch">
          <div className="section-background hero-bg"></div>
          {/* pink wordmark hanging into the hero from the top edge,
              matching the seam treatment of the sections below */}
          <SeamWordmark half="bottom" color="#f44977" />
          {/* light-blue wordmark peeking up from the hero's bottom edge */}
          <SeamWordmark half="top" color="#94d8f8" />
          <div className="section-content">
            <h1 className="sr-only">Amplify: {copy.heroTitle}</h1>

            {/* Mobile hero */}
            <div className="md:hidden container pt-0 pb-0 -mt-16">
              <div className="grid grid-cols-1 items-center gap-2">
                <div className="max-w-2xl text-center mx-auto mt-24 mobile-hero-copy">
                  <div aria-hidden className="mb-4">
                    <span className="font-ultra text-[3.6rem] leading-none block mb-2 display-shadow-pink" style={{ color: "#000000" }}>
                      Amplify
                    </span>
                    <span className="text-3xl font-ultra block -mt-1" style={{ color: "#F44976" }}>
                      {copy.heroTitle}
                    </span>
                  </div>
                  <div className="flex justify-center flex-wrap gap-4">
                    <CustomButton href="/services" color="pink" className="min-w-[150px]">
                      {copy.explore}
                    </CustomButton>
                    <CustomButton href="/contact" color="black" className="min-w-[150px]">
                      {copy.schedule}
                    </CustomButton>
                  </div>
                </div>
                <div className="flex justify-center relative z-20">
                  <FloatingAnimation amplitude={8} duration={4}>
                    <div className="character-container mobile-hero-character transform-gpu origin-center">
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

            {/* Desktop hero — editorial split: stacked display headline left,
                character in its own zone right (Trade Zines reference) */}
            <div className="hidden md:flex absolute inset-0" aria-hidden>
              <div className="container-bleed grid md:grid-cols-[1.05fr_0.95fr] items-center w-full h-full">
                <div className="max-w-[680px] relative">
                  <ScrollAnimation variant="fadeInUp">
                    <div className="mb-8">
                      {serviceCards.map((sv) => (
                        <a
                          key={sv.id}
                          href={localizeHref(sv.link)}
                          className="group block font-ultra"
                          style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)", perspective: "900px" }}
                        >
                          <span
                            className="relative block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]"
                            style={{ lineHeight: "1.2em" }}
                          >
                            <span className="block font-ultra text-white [backface-visibility:hidden]" style={{ transform: "translateZ(0.6em)" }}>
                              {sv.title}
                            </span>
                            <span
                              aria-hidden
                              className="absolute inset-0 font-ultra text-black [backface-visibility:hidden]"
                              style={{ transform: "rotateX(-90deg) translateZ(0.6em)" }}
                            >
                              {sv.flip}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation variant="fadeInUp" delay={0.45}>
                    <div className="flex flex-wrap gap-4">
                      <CustomButton href="/portfolio" color="pink" size="large" className="min-w-[180px]">
                        Portfolio
                      </CustomButton>
                      <CustomButton href="/contact" color="black" size="large" className="min-w-[180px]">
                        {copy.schedule}
                      </CustomButton>
                    </div>
                  </ScrollAnimation>
                </div>

                <div className="relative h-full flex items-end justify-start">
                  {/* backdrop panel gives the character a composed zone */}
                  <div
                    aria-hidden
                    className="absolute bottom-[10%] left-[4%] w-[min(32vw,430px)] aspect-square frame-hand -rotate-2 bg-[#fb97b2]"
                  />
                  <StampBadge
                    text={"socials · ads · branding · websites · "}
                    center={<span className="font-ultra">A</span>}
                    bg="#ffffff"
                    className="z-[3] size-28 lg:size-36 rotate-6"
                    style={{ right: "0%", top: "8%", left: "auto" }}
                  />
                  <FloatingAnimation amplitude={8} duration={4} className="relative z-[2]">
                    <div className="character-container w-[min(29vw,390px)] transform-gpu origin-bottom mb-[-6px]">
                      <Image
                        src="/images/aurahero.webp"
                        alt="Amplify Mascot"
                        width={480}
                        height={480}
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

        {/* Word strip between hero and services */}
        <Marquee items={["Socials", "Ads", "Branding", "Websites", "Amplify Your Brand"]} />

        {/* Services Section */}
        <div className="section-wrapper paper-grain flex items-center md:min-h-[calc(100svh_-_72px)]">
          <div className="section-background services-bg"></div>
          <SeamWordmark half="bottom" color="#fec530" />
          <SeamWordmark half="top" color="#94d8f8" />
          <div className="section-content">
            <div className="container container-bleed py-12 md:py-16">
              {/* Mobile-specific layout */}
              <div className="md:hidden flex flex-col">
                {/* Character on top for mobile */}
                <div className="flex justify-center items-center -translate-y-6 relative z-20">
                  <FloatingAnimation amplitude={0} duration={4}>
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
                  </div>
                </ScrollAnimation>

                <div className="flex flex-col gap-6">
                  <ScrollAnimation variant="fadeInUp" delay={0.1}>
                    <div className="what-feature-card card-hand bg-[#F44976] p-6 text-white">
                      <div className="flex flex-col items-center gap-3 mb-4 text-center">
                        <div className="w-[100px] h-[100px] flex items-center justify-center">
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
                    <div className="grid grid-cols-2 gap-3">
                      {serviceCards.map((service, i) => {
                        const isActiveTab = service.id === activeServiceCard.id
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setActiveService(service)}
                            aria-pressed={isActiveTab}
                            className={`press-hand p-3 focus:outline-none focus:ring-4 focus:ring-black/30 flex items-center justify-center text-left gap-3 ${
                              isActiveTab ? "translate-x-[2px] translate-y-[2px] !shadow-[1px_1px_0_0_var(--ink)]" : ""
                            }`}
                            style={
                              isActiveTab
                                ? { backgroundColor: "#1b1b1b", color: "#ffffff" }
                                : { backgroundColor: "#ffffff", color: "#1b1b1b" }
                            }
                          >
                            <h4 className="text-base font-ultra leading-tight">{service.title}</h4>
                          </button>
                        )
                      })}
                    </div>
                  </ScrollAnimation>
                </div>
              </div>

              {/* Desktop layout — one slab module: tab index left, detail right */}
              <div className="hidden md:block">
                {/* Oversized mascot pinned to the section's bottom edge — legs
                    run out of the section, upper body with open arms in frame */}
                <Image
                  src="/images/richiewhat.webp"
                  alt=""
                  width={640}
                  height={640}
                  className="absolute bottom-[-260px] left-[1%] lg:left-[2%] w-[680px] lg:w-[760px] max-w-none h-auto z-0 pointer-events-none"
                />
                <ScrollAnimation variant="fadeInUp">
                  <div className="mb-8">
                    <h2 className="label-chip !text-sm mb-4">{copy.workServices}</h2>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation variant="fadeInUp" delay={0.15}>
                  <div className="grid md:grid-cols-[1fr_1.35fr] items-stretch gap-0">
                    {/* spacer column under the mascot */}
                    <div aria-hidden />

                  <div className="frame-hand overflow-hidden bg-white">
                    {/* Tab index — 2x2 grid above the detail panel */}
                    <div className="grid grid-cols-2 border-b-2 border-black">
                      {serviceCards.map((service, i) => {
                        const isActiveTab = service.id === activeServiceCard.id
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setActiveService(service)}
                            aria-pressed={isActiveTab}
                            className={`flex items-center gap-3 px-5 py-4 text-left transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-black/30 ${
                              i % 2 === 0 ? "border-r-2 border-black" : ""
                            } ${i < 2 ? "border-b-2 border-black" : ""} ${
                              isActiveTab ? "bg-black text-white" : "bg-white text-black hover:bg-[#FFC1DA]"
                            }`}
                          >
                            <h4 className="text-xl lg:text-2xl font-ultra leading-tight flex-1">{service.title}</h4>
                            <span aria-hidden className="text-lg">
                              →
                            </span>
                          </button>
                        )
                      })}
                    </div>

                    {/* Detail panel */}
                    <div className="relative bg-[#F44976] text-white p-7 lg:p-9 flex flex-col justify-center overflow-hidden">
                      <Image
                        key={activeServiceCard.id}
                        src={activeServiceCard.icon}
                        alt=""
                        width={220}
                        height={220}
                        className="hidden md:block absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-36 lg:w-48 h-auto object-contain pointer-events-none icon-pulse"
                      />
                      <p className="text-xs uppercase tracking-[0.3em] font-extrabold mb-2">{copy.service}</p>
                      <h3 className="text-3xl lg:text-4xl font-ultra mb-3" style={{ color: "var(--yellow)" }}>
                        {activeServiceCard.title}
                      </h3>
                      <p className="text-base lg:text-lg max-w-md mb-5 relative z-[1]">{activeServiceCard.description}</p>
                      <ul className="mb-7 space-y-2">
                        {activeServiceCard.points.map((point) => (
                          <li key={point} className="flex items-center gap-3 text-sm font-bold">
                            <span className="chip-hand w-5 h-5 shrink-0 grid place-items-center bg-[var(--yellow)] text-black text-[11px] leading-none">
                              ✓
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div>
                        <CustomButton href={activeServiceCard.link} color="black" className="min-w-[150px]">
                          {copy.explore}
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className="section-wrapper paper-grain flex items-center md:min-h-[calc(100svh_-_72px)]"
        >
          <div className="section-background values-bg"></div>
          <SeamWordmark half="bottom" color="#f44977" />
          <SeamWordmark half="top" color="#ffffff" />
          <div className="section-content">
            <div className="container container-bleed py-10 md:py-16">
              {/* Mobile-specific layout with carousel */}
              <div className="md:hidden flex flex-col">
                {/* Character on top for mobile */}
                <div className="flex justify-center items-center mb-1 relative z-20">
                  <FloatingAnimation amplitude={0} duration={4}>
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
                  </div>
                </ScrollAnimation>

                {/* Mobile Carousel with Pagination */}
                <MobileValuesCarousel />
                <div className="flex justify-center mt-6 mb-4">
                  <CustomButton href="/about" color="black">
                    {copy.aboutCta}
                  </CustomButton>
                </div>
              </div>

              {/* Desktop layout — one about-teaser slab: story left,
                  the real team on the right */}
              <div className="hidden md:block">
                <ScrollAnimation variant="fadeInUp">
                  <div className="frame-hand overflow-hidden grid md:grid-cols-[1.25fr_1fr] bg-white min-h-[540px]">
                    {/* Story panel */}
                    <div className="p-8 lg:p-12 border-b-2 md:border-b-0 md:border-r-2 border-black">
                      <h2 className="label-chip !text-sm">{copy.whyLabel}</h2>
                      <p className="mt-7 text-xl lg:text-2xl font-bold leading-snug max-w-lg">{copy.aboutIntro}</p>
                      <p className="mt-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black/50 mb-8">
                        {copy.aboutIntroSub}
                      </p>
                      <ul className="mb-10 border-t-2 border-black">
                        {[
                          { title: copy.innovation, desc: copy.innovationDescription, bg: "#C084FC" },
                          { title: copy.authenticity, desc: copy.authenticityDescription, bg: "#94d8f8" },
                          { title: copy.results, desc: copy.resultsDescription, bg: "#fec530" },
                        ].map((value) => (
                          <li key={value.title} className="flex items-start gap-4 py-4 border-b border-black/20">
                            <span
                              className="chip-hand w-5 h-5 shrink-0 mt-1"
                              style={{ backgroundColor: value.bg }}
                            />
                            <span className="flex-1">
                              <span className="font-ultra text-lg lg:text-xl block leading-tight">{value.title}</span>
                              <span className="text-sm text-black/70 block mt-1 leading-relaxed">{value.desc}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                      <CustomButton href="/about" color="black" className="min-w-[190px]">
                        {copy.aboutCta}
                      </CustomButton>
                    </div>

                    {/* Team panel — polaroid wall with real names */}
                    <div className="relative bg-[#fb97b2] p-8 lg:p-10 flex flex-col items-center justify-center gap-5 overflow-hidden">
                      <div className="grid grid-cols-3 gap-4 lg:gap-5">
                        {[
                          { src: "/images/Teampfp_Aura.webp", name: "Aura R", tilt: "-rotate-2" },
                          { src: "/images/Teampfp_rich%20p.webp", name: "Rich P", tilt: "rotate-1" },
                          { src: "/images/Teampfp_ace%20b.webp", name: "Ace B", tilt: "rotate-2" },
                          { src: "/images/Teampfp_ben%20j.webp", name: "Ben J", tilt: "rotate-2" },
                          { src: "/images/Teampfp_roy%20n.webp", name: "Roy N", tilt: "-rotate-1" },
                          { src: "/images/Teampfp_kris%20k.webp", name: "Kris K", tilt: "-rotate-2" },
                        ].map((member, i) => (
                          <div
                            key={member.src}
                            className={`chip-hand bg-white p-1.5 pb-1 shadow-[3px_3px_0_0_var(--ink)] transition-transform duration-300 hover:rotate-0 ${member.tilt} ${
                              i % 2 ? "translate-y-2" : ""
                            }`}
                          >
                            <div className="w-28 h-28 lg:w-32 lg:h-32 overflow-hidden rounded-[5px] border-2 border-black">
                              <Image
                                src={member.src}
                                alt={member.name}
                                width={96}
                                height={96}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="font-mono text-[9px] lg:text-[10px] font-bold uppercase tracking-wide text-center pt-1">
                              {member.name}
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-black mt-3">
                        {copy.teamCaption}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>

        {/* Studio band — asymmetric three-zone bento with ink rules,
            print-catalog style (Trade Zines reference) */}
        <div className="relative overflow-hidden paper-grain bg-white border-b-2 border-black">
          <SeamWordmark half="bottom" color="#94d8f8" />
          <SeamWordmark half="top" color="#c180ca" />
          <div className="relative z-10 grid md:grid-cols-[1.15fr_1fr_1.15fr]">
            {/* Zone 1 — new drop panel */}
            <a
              href={localizeHref(workItems[0].href)}
              className="group relative block bg-[#fb97b2] border-b-2 md:border-b-0 md:border-r-2 border-black p-6 md:p-10 overflow-hidden"
            >
              <Burst fill="#ffffff" className="top-5 right-5 z-10 size-20 md:size-24 rotate-12">
                {copy.workNew}
              </Burst>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] mb-4">{copy.workLabel}</p>
              <h2 className="font-ultra text-4xl md:text-5xl mb-1">{workItems[0].title}</h2>
              <p className="font-mono text-xs uppercase tracking-widest text-black/70 mb-6">{workItems[0].tag}</p>
              <div className="frame-hand rotate-2 overflow-hidden max-w-[320px] transition-transform duration-300 group-hover:rotate-0">
                <Image
                  src={workItems[0].img}
                  alt={workItems[0].title}
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="mt-6 text-sm font-extrabold uppercase tracking-widest">
                {copy.viewProject} <span aria-hidden>→</span>
              </p>
              <Image
                src="/images/acewhy.webp"
                alt=""
                width={300}
                height={300}
                className="hidden md:block absolute bottom-[-60px] right-[4%] lg:right-[6%] w-[280px] lg:w-[340px] h-auto z-[1] pointer-events-none"
              />
            </a>

            {/* Zone 2 — client testimonial */}
            <div className="relative bg-white border-b-2 md:border-b-0 md:border-r-2 border-black p-6 md:p-10 flex flex-col overflow-hidden">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] border-b-2 border-black pb-3">
                {copy.workQuoteLabel}
              </p>
              <div className="flex-1 flex flex-col justify-center py-6">
                <p className="text-lg lg:text-xl font-medium leading-relaxed">{copy.testimonialQuote}</p>
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-black/60 mt-5">
                  {copy.testimonialAuthor}
                </p>
              </div>
              <span
                aria-hidden
                className="pointer-events-none select-none absolute -bottom-10 right-2 leading-none"
                style={{ fontFamily: "var(--font-knewave)", fontSize: "9rem", color: "rgba(244, 73, 118, 0.15)" }}
              >
                &rdquo;
              </span>
            </div>

            {/* Zone 3 — recent work rows */}
            <div className="p-6 md:p-10">
              <div className="flex items-center justify-between border-b-2 border-black pb-3">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em]">{copy.workRecent}</p>
                <a
                  href={localizeHref("/portfolio")}
                  className="text-xs font-extrabold uppercase tracking-widest text-[#f44976]"
                >
                  {copy.workLink} <span aria-hidden>→</span>
                </a>
              </div>
              {workItems.map((work) => (
                <a
                  key={work.href}
                  href={localizeHref(work.href)}
                  className="flex items-center gap-4 py-4 border-b border-black/60 hover:bg-[#94d8f8]/30 transition-colors"
                >
                  <span className="chip-hand w-14 h-14 shrink-0 overflow-hidden bg-[#f6f2ea]">
                    <Image
                      src={work.img}
                      alt={work.title}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="flex-1">
                    <span className="font-ultra text-lg block">{work.title}</span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-black/60">{work.tag}</span>
                  </span>
                  <span aria-hidden className="text-lg">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section — split contact layout: rail left, project form right */}
        <div className="section-wrapper mobile-home-cta paper-grain flex items-start md:items-center md:min-h-[calc(100svh_-_72px)]">
          <div className="section-background cta-bg"></div>
          <SeamWordmark half="bottom" color="#fec530" />
          <SeamWordmark half="top" color="#f44977" />
          <div className="section-content">
            <div className="container container-bleed py-12 md:py-16">
              <div className="grid md:grid-cols-[1.5fr_0.85fr] gap-10 lg:gap-16 items-stretch">
                {/* Right — giant title + form in the yellow card */}
                <ScrollAnimation variant="fadeInUp" delay={0.15}>
                  <div className="relative">
                    <StampBadge
                      text={"amplify · your brand · amplify · your brand · "}
                      center={<span className="font-ultra">A</span>}
                      className="hidden md:grid z-20 size-28 rotate-6"
                      style={{ right: "-0.75rem", top: "-2.25rem", left: "auto" }}
                    />
                    <div className="card-hand relative overflow-hidden bg-[#fec530] text-black">
                      {/* heart-eyes emoji video blended into the yellow card */}
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-hidden
                        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-25 pointer-events-none"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16094087-uhd_3840_2160_30fps-MS0GPMPktstCZ0AEvew8oLEsZLcaMW.mp4"
                      />
                      <div className="relative p-8 md:p-10 lg:p-12">
                        <h2 className="font-ultra text-4xl lg:text-6xl leading-[1.05] display-shadow-pink mb-4">
                          {copy.getStarted}.
                        </h2>
                        <p className="text-base lg:text-lg text-black/80 max-w-lg mb-8">{copy.ctaDescription}</p>
                        <form
                          className="max-w-xl"
                          onSubmit={(e) => {
                            e.preventDefault()
                            const data = new FormData(e.currentTarget)
                            const subject = encodeURIComponent(`${copy.formSubject} ${data.get("name")}`)
                            const body = encodeURIComponent(
                              `${data.get("name")}\n${data.get("email")}\n${data.get("need")}`,
                            )
                            window.location.href = `mailto:hello@amplify.com?subject=${subject}&body=${body}`
                          }}
                        >
                          <label className="block font-mono text-[11px] font-bold uppercase tracking-widest mb-1">
                            {copy.formName}
                          </label>
                          <input
                            name="name"
                            required
                            className="w-full chip-hand bg-white px-4 py-3 mb-4 text-sm focus:outline-none focus:ring-4 focus:ring-black/20"
                          />
                          <label className="block font-mono text-[11px] font-bold uppercase tracking-widest mb-1">
                            {copy.formEmail}
                          </label>
                          <input
                            name="email"
                            type="email"
                            required
                            className="w-full chip-hand bg-white px-4 py-3 mb-4 text-sm focus:outline-none focus:ring-4 focus:ring-black/20"
                          />
                          <label className="block font-mono text-[11px] font-bold uppercase tracking-widest mb-1">
                            {copy.formLooking}
                          </label>
                          <select
                            name="need"
                            className="w-full chip-hand bg-white px-4 py-3 mb-6 text-sm focus:outline-none focus:ring-4 focus:ring-black/20"
                          >
                            {serviceCards.map((sv) => (
                              <option key={sv.id}>{sv.title}</option>
                            ))}
                            <option>{copy.formOther}</option>
                          </select>
                          <div className="flex flex-wrap items-center gap-5">
                            <CustomButton type="submit" color="pink" size="large">
                              {copy.formSend}
                            </CustomButton>
                            <p className="text-xs text-black/60 max-w-[220px]">{copy.formNote}</p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
                {/* Left rail — founder card, contact details, mascot */}
                <ScrollAnimation variant="fadeInUp">
                  <div className="flex flex-col justify-between gap-8 h-full">
                    <Image
                      src="/images/auraready.webp"
                      alt="Amplify Mascot"
                      width={300}
                      height={300}
                      className="hidden md:block w-[240px] lg:w-[280px] h-auto"
                    />
                    <div className="chip-hand bg-white p-4 shadow-[4px_4px_0_0_var(--ink)] -rotate-1 max-w-[340px]">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-14 h-14 rounded-full border-2 border-black overflow-hidden shrink-0">
                          <Image
                            src="/images/Teampfp_Aura.webp"
                            alt="Aura R"
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-extrabold text-sm">Aura R</p>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-black/60">
                            {copy.founderRole}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-black/80">{copy.founderLine}</p>
                    </div>

                  </div>
                </ScrollAnimation>

              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
