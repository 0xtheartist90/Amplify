import Image from "next/image"
import VideoCTA from "@/components/video-cta"
import { ScrollAnimation } from "@/components/scroll-animation"
import { PageWrapper } from "@/components/page-wrapper"
import { TeamMemberCard } from "@/components/team-member-card"
import LeadershipCarousel from "@/components/leadership-carousel"
import CoreValuesCarousel from "@/components/core-values-carousel"

export default function AboutPage() {
  // Team member data
  const teamMembers = [
    {
      name: "Ben J",
      role: "Social Media Manager",
      imageSrc: "/images/Teampfp_ben%20j.png",
      bgColor: "bg-yellow",
    },
    {
      name: "Roy N",
      role: "Web Developer",
      imageSrc: "/images/Teampfp_roy%20n.png",
      bgColor: "bg-blue",
    },
    {
      name: "Kris K",
      role: "Copywriter",
      imageSrc: "/images/Teampfp_kris%20k.png",
      bgColor: "bg-purple",
    },
    {
      name: "Wilson D",
      role: "Analyst",
      imageSrc: "/images/Teampfp_wilson%20d.png",
      bgColor: "bg-pink",
    },
  ]

  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section - EXACTLY matching other pages */}
        <section className="relative">
          <div className="hero-background-container">
            <img src="/images/about-hero-new.png" alt="About Us Background" className="hero-background-image" />
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation variant="fadeInRight" duration={0.6}>
                <div>
                  <h2 className="text-3xl md:text-5xl font-ultra mb-6">Our Story</h2>
                  <p className="mb-4">
                    Amplify was founded in 2018 with a simple mission: to help businesses cut through the noise and make
                    meaningful connections with their audiences.
                  </p>
                  <p className="mb-4">
                    What started as a small team of three passionate marketers has grown into a full-service agency with
                    expertise across social media, advertising, branding, and web development.
                  </p>
                  <p>
                    Throughout our growth, we've remained committed to our core values of innovation, authenticity, and
                    results-driven strategies that help our clients succeed in an ever-changing digital landscape.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft" duration={0.6}>
                <div className="bg-yellow rounded-[32px] p-8 border-2 border-black shadow-lg">
                  <h3 className="text-2xl font-ultra mb-4">Our Mission</h3>
                  <p className="mb-4">
                    To amplify brands' voices through strategic marketing solutions that drive meaningful engagement and
                    business growth.
                  </p>
                  <h3 className="text-2xl font-ultra mb-4 mt-8">Our Vision</h3>
                  <p>
                    To be the leading marketing partner for businesses seeking authentic connections with their
                    audiences in the digital age.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-16 bg-pink text-white">
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-5xl font-ultra mb-12 text-center reveal-text">Our Leadership</h2>
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
                      src="/images/Teampfp_Aura.png"
                      alt="Aura R"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-ultra mb-2">Aura R</h3>
                    <p className="text-pink font-bold mb-4">Founder & CEO</p>
                    <p className="mb-4">
                      With over 5 years of experience in digital marketing, Aura founded Amplify with a vision to help
                      brands find their authentic voice in the digital landscape.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Leader 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2} duration={0.6}>
                <div className="bg-white text-black rounded-[32px] overflow-hidden shadow-lg border-2 border-black leadership-card">
                  <div className="bg-pink w-full aspect-square flex items-center justify-center">
                    <Image
                      src="/images/Teampfp_rich%20p.png"
                      alt="Rich P"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-ultra mb-2">Rich P</h3>
                    <p className="text-pink font-bold mb-4">Creative Director</p>
                    <p className="mb-4">
                      Rich brings his extensive background in design and branding to lead our creative team in
                      developing visually stunning and strategically sound brand identities.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Leader 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3} duration={0.6}>
                <div className="bg-white text-black rounded-[32px] overflow-hidden shadow-lg border-2 border-black leadership-card">
                  <div className="bg-blue w-full aspect-square flex items-center justify-center">
                    <Image
                      src="/images/Teampfp_ace%20b.png"
                      alt="Ace B"
                      width={250}
                      height={250}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-ultra mb-2">Ace B</h3>
                    <p className="text-pink font-bold mb-4">Director of Strategy</p>
                    <p className="mb-4">
                      Ace leverages his analytical mindset and marketing expertise to develop data-driven strategies
                      that deliver measurable results for our clients.
                    </p>
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
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="container relative z-10">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-5xl font-ultra mb-12 text-center text-white text-shadow">
                Meet Our Team
              </h2>
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
        <section id="values" className="py-16 bg-purple text-white">
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-5xl font-ultra mb-8 text-center">Our Core Values</h2>
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
                      src="/images/custom-solution.png"
                      alt="Innovation Icon"
                      width={50}
                      height={50}
                      className="mr-3 icon-pulse"
                    />
                    <h3 className="text-xl font-ultra">Innovation</h3>
                  </div>
                  <p className="text-sm">
                    We stay ahead of trends and technologies to deliver cutting-edge solutions for our clients. In the
                    fast-paced world of digital marketing, standing still means falling behind.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Value 2 - Authenticity */}
              <ScrollAnimation variant="fadeInUp" delay={0.2} duration={0.6}>
                <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-6 border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/onboarding.png"
                      alt="Authenticity Icon"
                      width={50}
                      height={50}
                      className="mr-3 icon-pulse"
                    />
                    <h3 className="text-xl font-ultra">Authenticity</h3>
                  </div>
                  <p className="text-sm">
                    We believe in creating genuine connections between brands and their audiences. In a world of
                    increasing skepticism, authenticity is the foundation of trust and loyalty.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Value 3 - Results */}
              <ScrollAnimation variant="fadeInUp" delay={0.3} duration={0.6}>
                <div className="bg-white/10 backdrop-blur-sm rounded-[32px] p-6 border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/retention.png"
                      alt="Results Icon"
                      width={50}
                      height={50}
                      className="mr-3 icon-pulse"
                    />
                    <h3 className="text-xl font-ultra">Results</h3>
                  </div>
                  <p className="text-sm">
                    We're committed to delivering measurable outcomes that grow your business. Beautiful creative work
                    is important, but we never lose sight of the bottom line: driving real business results.
                  </p>
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
            secondaryButtonText="VIEW OUR WORK"
            secondaryButtonLink="/portfolio"
            videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16093225-uhd_3840_2160_30fps-TP3o0gLhjykIct1n8214qPiot2hmha.mp4"
          />
        </ScrollAnimation>
      </div>
    </PageWrapper>
  )
}
