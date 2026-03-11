"use client"

import Image from "next/image"
import VideoCTA from "@/components/video-cta"
import { ScrollAnimation } from "@/components/scroll-animation"
import { PageWrapper } from "@/components/page-wrapper"
import { TeamMemberCard } from "@/components/team-member-card"
import LeadershipCarousel from "@/components/leadership-carousel"
import CoreValuesCarousel from "@/components/core-values-carousel"
import { useLocale } from "@/lib/i18n"

export default function AboutPage() {
  const { locale } = useLocale()
  // Team member data
  const teamMembers = [
    {
      name: "Ben J",
      role: locale === "nl" ? "Social media manager" : "Social Media Manager",
      imageSrc: "/images/Teampfp_ben%20j.webp",
      bgColor: "bg-yellow",
    },
    {
      name: "Roy N",
      role: locale === "nl" ? "Web developer" : "Web Developer",
      imageSrc: "/images/Teampfp_roy%20n.webp",
      bgColor: "bg-blue",
    },
    {
      name: "Kris K",
      role: locale === "nl" ? "Copywriter" : "Copywriter",
      imageSrc: "/images/Teampfp_kris%20k.webp",
      bgColor: "bg-purple",
    },
    {
      name: "Xavier D",
      role: locale === "nl" ? "Brand specialist" : "Brand Specialist",
      imageSrc: "/images/Teampfp_wilson%20d.webp",
      bgColor: "bg-pink",
    },
  ]

  const copy =
    locale === "nl"
      ? {
          heroAlt: "Over ons achtergrond",
          storyTitle: "Ons verhaal",
          storyParagraph1:
            "Amplify werd opgericht in 2025 met een eenvoudige missie: bedrijven helpen door de ruis heen te breken en betekenisvolle connecties met hun doelgroep op te bouwen.",
          storyParagraph2:
            "Wat begon als een klein team van drie gepassioneerde marketeers is uitgegroeid tot een full-service bureau met expertise in social media, advertising, branding en webontwikkeling.",
          storyParagraph3:
            "Tijdens onze groei zijn we trouw gebleven aan onze kernwaarden: innovatie, authenticiteit en resultaatgerichte strategieen die onze klanten helpen slagen in een constant veranderend digitaal landschap.",
          missionTitle: "Onze missie",
          missionText:
            "Merken versterken met strategische marketingoplossingen die zorgen voor betekenisvolle betrokkenheid en bedrijfsgroei.",
          visionTitle: "Onze visie",
          visionText:
            "De toonaangevende marketingpartner zijn voor bedrijven die op zoek zijn naar authentieke connecties met hun doelgroep in het digitale tijdperk.",
          leadershipTitle: "Ons leiderschap",
          founder: "Oprichter & CEO",
          creativeDirector: "Creative Director",
          strategyDirector: "Director of Strategy",
          auraDescription:
            "Met meer dan 5 jaar ervaring in digitale marketing richtte Aura Amplify op met de visie om merken te helpen hun authentieke stem te vinden in het digitale landschap.",
          richDescription:
            "Rich brengt zijn brede achtergrond in design en branding mee om ons creatieve team te leiden in het ontwikkelen van visueel sterke en strategisch onderbouwde merkidentiteiten.",
          aceDescription:
            "Ace gebruikt zijn analytische blik en marketingexpertise om datagedreven strategieen te ontwikkelen die meetbare resultaten opleveren voor onze klanten.",
          teamTitle: "Maak kennis met ons team",
          valuesTitle: "Onze kernwaarden",
          innovation: "Innovatie",
          innovationDescription:
            "Wij lopen voorop in trends en technologie om vernieuwende oplossingen voor onze klanten te leveren. In de snelle wereld van digitale marketing betekent stilstand achteruitgang.",
          authenticity: "Authenticiteit",
          authenticityDescription:
            "Wij geloven in het opbouwen van echte connecties tussen merken en hun doelgroep. In een wereld vol scepsis is authenticiteit de basis van vertrouwen en loyaliteit.",
          results: "Resultaat",
          resultsDescription:
            "Wij leveren meetbare resultaten die je bedrijf laten groeien. Creatief werk moet er niet alleen goed uitzien, maar ook echte impact maken.",
          videoFallback: "Je browser ondersteunt de videotag niet.",
        }
      : {
          heroAlt: "About Us Background",
          storyTitle: "Our Story",
          storyParagraph1:
            "Amplify was founded in 2025 with a simple mission: to help businesses cut through the noise and make meaningful connections with their audiences.",
          storyParagraph2:
            "What started as a small team of three passionate marketers has grown into a full-service agency with expertise across social media, advertising, branding, and web development.",
          storyParagraph3:
            "Throughout our growth, we've remained committed to our core values of innovation, authenticity, and results-driven strategies that help our clients succeed in an ever-changing digital landscape.",
          missionTitle: "Our Mission",
          missionText:
            "To amplify brands' voices through strategic marketing solutions that drive meaningful engagement and business growth.",
          visionTitle: "Our Vision",
          visionText:
            "To be the leading marketing partner for businesses seeking authentic connections with their audiences in the digital age.",
          leadershipTitle: "Our Leadership",
          founder: "Founder & CEO",
          creativeDirector: "Creative Director",
          strategyDirector: "Director of Strategy",
          auraDescription:
            "With over 5 years of experience in digital marketing, Aura founded Amplify with a vision to help brands find their authentic voice in the digital landscape.",
          richDescription:
            "Rich brings his extensive background in design and branding to lead our creative team in developing visually stunning and strategically sound brand identities.",
          aceDescription:
            "Ace leverages his analytical mindset and marketing expertise to develop data-driven strategies that deliver measurable results for our clients.",
          teamTitle: "Meet Our Team",
          valuesTitle: "Our Core Values",
          innovation: "Innovation",
          innovationDescription:
            "We stay ahead of trends and technologies to deliver cutting-edge solutions for our clients. In the fast-paced world of digital marketing, standing still means falling behind.",
          authenticity: "Authenticity",
          authenticityDescription:
            "We believe in creating genuine connections between brands and their audiences. In a world of increasing skepticism, authenticity is the foundation of trust and loyalty.",
          results: "Results",
          resultsDescription:
            "We're committed to delivering measurable outcomes that grow your business. Beautiful creative work is important, but we never lose sight of the bottom line: driving real business results.",
          videoFallback: "Your browser does not support the video tag.",
        }

  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section - EXACTLY matching other pages */}
        <section className="relative">
          <div className="hero-background-container">
            <img src="/images/about-hero-new.webp" alt={copy.heroAlt} className="hero-background-image" />
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation variant="fadeInRight" duration={0.6}>
                <div>
                  <h2 className="text-3xl md:text-5xl font-ultra mb-6">{copy.storyTitle}</h2>
                  <p className="mb-4">{copy.storyParagraph1}</p>
                  <p className="mb-4">{copy.storyParagraph2}</p>
                  <p>{copy.storyParagraph3}</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft" duration={0.6}>
                <div className="bg-yellow rounded-[32px] p-8 border-2 border-black shadow-lg">
                  <h3 className="text-2xl font-ultra mb-4">{copy.missionTitle}</h3>
                  <p className="mb-4">{copy.missionText}</p>
                  <h3 className="text-2xl font-ultra mb-4 mt-8">{copy.visionTitle}</h3>
                  <p>{copy.visionText}</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section
          id="leadership"
          className="pt-16 pb-6 md:py-16 text-white"
          style={{ backgroundColor: "#FB97B2" }}
        >
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-5xl font-ultra mb-12 text-center reveal-text">{copy.leadershipTitle}</h2>
            </ScrollAnimation>

            {/* Mobile Leadership Carousel */}
            <div className="md:hidden">
              <LeadershipCarousel />
            </div>

            {/* Desktop Leadership Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {/* Leader 1 */}
              <ScrollAnimation variant="fadeInUp" delay={0.1} duration={0.6}>
                <div className="bg-white text-black rounded-[32px] overflow-hidden shadow-lg border-2 border-black leadership-card">
                  <div className="bg-yellow w-full aspect-square flex items-center justify-center">
                    <Image
                      src="/images/Teampfp_Aura.webp"
                      alt="Aura R"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-ultra mb-2">Aura R</h3>
                    <p className="text-pink font-bold mb-4">{copy.founder}</p>
                    <p className="mb-4">{copy.auraDescription}</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Leader 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2} duration={0.6}>
                <div className="bg-white text-black rounded-[32px] overflow-hidden shadow-lg border-2 border-black leadership-card">
                  <div className="bg-pink w-full aspect-square flex items-center justify-center">
                    <Image
                      src="/images/Teampfp_rich%20p.webp"
                      alt="Rich P"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-ultra mb-2">Rich P</h3>
                    <p className="text-pink font-bold mb-4">{copy.creativeDirector}</p>
                    <p className="mb-4">{copy.richDescription}</p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Leader 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3} duration={0.6}>
                <div className="bg-white text-black rounded-[32px] overflow-hidden shadow-lg border-2 border-black leadership-card">
                  <div className="bg-blue w-full aspect-square flex items-center justify-center">
                    <Image
                      src="/images/Teampfp_ace%20b.webp"
                      alt="Ace B"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-ultra mb-2">Ace B</h3>
                    <p className="text-pink font-bold mb-4">{copy.strategyDirector}</p>
                    <p className="mb-4">{copy.aceDescription}</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 relative overflow-hidden">
          {/* Video Background - Heart Emoji */}
          <div className="absolute inset-0 w-full h-full z-0">
            <div className="video-overlay bg-black/40 bg-gradient-to-b from-black/20 to-black/60"></div>
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16094087-uhd_3840_2160_30fps-MS0GPMPktstCZ0AEvew8oLEsZLcaMW.mp4"
                type="video/mp4"
              />
              {copy.videoFallback}
            </video>
          </div>

          <div className="container relative z-10">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-5xl font-ultra mb-12 text-center text-white text-shadow">{copy.teamTitle}</h2>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Map through team members */}
              {teamMembers.map((member, index) => (
                <ScrollAnimation key={member.name} variant="zoomIn" delay={0.1 * (index + 1)} duration={0.5}>
                  <TeamMemberCard {...member} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - Updated to match homepage values */}
        <section id="values" className="pt-16 pb-6 md:py-16 bg-purple text-white">
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-5xl font-ultra mb-8 text-center">{copy.valuesTitle}</h2>
            </ScrollAnimation>

            {/* Mobile Values Carousel */}
            <div className="md:hidden">
              <CoreValuesCarousel />
            </div>

            {/* Desktop Values Grid */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {/* Value 1 - Innovation */}
              <ScrollAnimation variant="fadeInUp" delay={0.1} duration={0.6}>
                <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-6 border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/custom-solution.webp"
                      alt="Innovation Icon"
                      width={50}
                      height={50}
                      className="mr-3 icon-pulse"
                    />
                    <h3 className="text-xl font-ultra">{copy.innovation}</h3>
                  </div>
                  <p className="text-sm">{copy.innovationDescription}</p>
                </div>
              </ScrollAnimation>

              {/* Value 2 - Authenticity */}
              <ScrollAnimation variant="fadeInUp" delay={0.2} duration={0.6}>
                <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-6 border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/onboarding.webp"
                      alt="Authenticity Icon"
                      width={50}
                      height={50}
                      className="mr-3 icon-pulse"
                    />
                    <h3 className="text-xl font-ultra">{copy.authenticity}</h3>
                  </div>
                  <p className="text-sm">{copy.authenticityDescription}</p>
                </div>
              </ScrollAnimation>

              {/* Value 3 - Results */}
              <ScrollAnimation variant="fadeInUp" delay={0.3} duration={0.6}>
                <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-6 border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/retention.webp"
                      alt="Results Icon"
                      width={50}
                      height={50}
                      className="mr-3 icon-pulse"
                    />
                    <h3 className="text-xl font-ultra">{copy.results}</h3>
                  </div>
                  <p className="text-sm">{copy.resultsDescription}</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section with Video */}
        <ScrollAnimation variant="fadeIn">
          <VideoCTA
            title="Ready to Work With Us?"
            description="Let's discuss how our team can help amplify your brand's voice."
            primaryButtonText="GET IN TOUCH"
            primaryButtonLink="/contact"
            secondaryButtonText="VIEW WORK"
            secondaryButtonLink="/portfolio"
            videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16093225-uhd_3840_2160_30fps-TP3o0gLhjykIct1n8214qPiot2hmha.mp4"
          />
        </ScrollAnimation>
      </div>
    </PageWrapper>
  )
}
