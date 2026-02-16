import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollAnimation } from "@/components/scroll-animation"
import VideoCTA from "@/components/video-cta"
import ServiceBanner from "@/components/service-banner"
import ServiceIcon from "@/components/service-icon"
import MobileServicesCarousel from "@/components/mobile-services-carousel"
import MobileProcessCarousel from "@/components/mobile-process-carousel"

const SOCIAL_PACKAGES = [
  {
    name: "Small",
    price: "€500 per month",
    description: "Compact support for steady visibility.",
    perMonth: ["30 Stories", "12 Posts", "1 Reel", "1 Campaign", "Instagram & Facebook"],
    alsoIncluded: ["Strategy Session", "Weekly Scheduling Call", "Monthly Reporting"],
    accent: "text-[#FFE45E]",
    starColor: "text-[#67E8F9]",
  },
  {
    name: "Medium",
    price: "€1200 per month",
    description: "Balanced presence with monthly hero content.",
    perMonth: [
      "60 Stories",
      "16 Posts",
      "1 Reel",
      "1 Campaign",
      "1 Hero Video",
      "1 Blog",
      "Instagram & Facebook",
    ],
    alsoIncluded: ["Strategy Session", "Weekly Scheduling Call", "Monthly Reporting", "Branding"],
    accent: "text-[#FFE45E]",
    starColor: "text-[#FFE45E]",
  },
  {
    name: "Large",
    price: "€2500 per month",
    description: "High-volume storytelling for ambitious brands.",
    perMonth: [
      "90 Stories",
      "30 Posts",
      "6 Reels",
      "2 Campaigns",
      "1 Hero Video",
      "1 Blog",
      "Instagram & Facebook",
    ],
    alsoIncluded: ["Strategy Session", "Weekly Scheduling Call", "Monthly Reporting", "Branding", "Content Day"],
    accent: "text-[#FFE45E]",
    starColor: "text-[#C084FC]",
  },
  {
    name: "Custom",
    price: "On Request",
    description: "Fully tailored retainers for any budget and ambition.",
    perMonth: ["X Stories per month", "X Posts per month", "X Reels per month", "X Campaigns", "Instagram & Facebook"],
    alsoIncluded: [
      "Strategy Session",
      "Weekly Scheduling Call",
      "Monthly Reporting",
      "Branding",
      "Content Day",
      "15h Community Management",
    ],
    accent: "text-white",
    isCustom: true,
  },
]

const EXTRA_SERVICES = [
  { service: "Set Up Costs", price: "€100" },
  { service: "Reel", price: "€200" },
  { service: "Premium Photo Content (10x)", price: "€250" },
  { service: "Premium Video Content (5x)", price: "€450" },
  { service: "Community Management", price: "€50 per hour" },
  { service: "Online Campaign", price: "€200" },
  { service: "Branding", price: "€500" },
  { service: "Content Day on Location", price: "€2299" },
  { service: "Ads Spend", price: "On Demand" },
]

const SOCIAL_PROCESS_STEPS = [
  {
    number: 1,
    title: "Meet & Greet",
    summary:
      "Let’s get acquainted, align on expectations, and confirm we’re the right partners. If there’s a spark, we book The Spark Session.",
    bullets: [],
  },
  {
    number: 2,
    title: "Spark Session",
    summary: "During the Spark Session we go all-in and set the foundation.",
    bullets: ["We dive into your story", "Uncover your brand essence", "Define positioning", "Set goals & KPIs"],
  },
  {
    number: 3,
    title: "Design",
    summary: "This is where the creative work begins and the brand voice is shaped.",
    bullets: [
      "Visual identity alignment",
      "Content direction",
      "Style guide creation",
      "Tone of voice definition",
    ],
  },
  {
    number: 4,
    title: "Setup",
    summary: "We prepare every channel, system, and workflow for execution.",
    bullets: [
      "Account optimization",
      "Content calendar creation",
      "Campaign setup",
      "Technical integrations",
      "Tracking & performance structure",
    ],
  },
  {
    number: 5,
    title: "Weekly Planning",
    summary: "Execution with structure to stay agile and aligned.",
    bullets: ["Weekly scheduling", "Content approvals", "Optimization adjustments", "Strategy alignment calls"],
  },
  {
    number: 6,
    title: "Monthly Report",
    summary: "Performance. Clarity. Growth.",
    bullets: [
      "Data analysis",
      "KPI tracking",
      "Insights & learnings",
      "Optimization strategy",
      "Growth recommendations",
    ],
  },
]

export default function SocialsServicePage() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section with Background Image */}
        <section className="relative">
          <div className="hero-background-container">
            <img
              src="/images/ServicesSocials-HERO.webp"
              alt="Social Media Services Background"
              className="hero-background-image"
            />
          </div>
        </section>

        {/* Service Banner */}
        <ServiceBanner currentService="socials" />

        {/* Service Details - Mobile First Layout */}
        <section className="py-16 bg-white">
          <div className="container">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <ScrollAnimation variant="fadeInUp">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-pink rounded-full shadow-lg">
                      <Image
                        src="/images/socials.webp"
                        alt="Social Media Icon"
                        width={50}
                        height={50}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-3xl font-ultra">Social Media</h2>
                  </div>
                  <p className="mb-6">
                    Social media is more than just posting content—it's about building relationships with your audience
                    and creating a community around your brand.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-pink rounded-[32px] p-6 text-white mb-8">
                  <h3 className="text-xl font-ultra mb-4 text-center">Why Social Media Matters</h3>
                  <p className="mb-4 text-sm">
                    In today's digital world, social media is an essential part of your marketing strategy. It helps
                    you:
                  </p>
                  <ul className="mb-4 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Connect with your audience on a personal level</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Build brand awareness and recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Drive traffic to your website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Generate leads and sales</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation variant="fadeInRight">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-pink rounded-full shadow-lg">
                      <Image
                        src="/images/socials.webp"
                        alt="Social Media Icon"
                        width={50}
                        height={50}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-ultra">Social Media</h2>
                  </div>
                  <p className="mb-6">
                    Social media is more than just posting content—it's about building relationships with your audience
                    and creating a community around your brand. We help you develop and execute a social media strategy
                    that drives engagement, builds brand awareness, and generates leads.
                  </p>
                  <p className="mb-6">
                    Our team of social media experts stays up-to-date with the latest trends and algorithm changes to
                    ensure your brand stays relevant and visible in the ever-changing social media landscape.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft">
                <div className="bg-pink rounded-[32px] p-8">
                  <h3 className="text-2xl font-ultra mb-4">Why Social Media Matters</h3>
                  <p className="mb-4">
                    In today's digital world, social media is an essential part of your marketing strategy. It helps
                    you:
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Connect with your audience on a personal level</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Build brand awareness and recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Drive traffic to your website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Generate leads and sales</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16" style={{ backgroundColor: "#F44976" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center text-white">Our Social Media Services</h2>
            </ScrollAnimation>

            {/* Mobile Services Carousel */}
            <div className="md:hidden">
              <MobileServicesCarousel
                services={[
                  {
                    title: "Social Media Strategy",
                    icon: "strategy",
                    iconBg: "bg-pink",
                    description:
                      "We develop a comprehensive social media strategy that aligns with your business goals and target audience.",
                    features: ["Platform audit and selection", "Competitor analysis", "Content calendar planning"],
                  },
                  {
                    title: "Content Creation",
                    icon: "content",
                    iconBg: "bg-pink",
                    description:
                      "We create engaging, on-brand content that resonates with your audience and drives engagement.",
                    features: [
                      "Graphic design and video production",
                      "Copywriting and caption creation",
                      "Hashtag research and optimization",
                    ],
                  },
                  {
                    title: "Community Management",
                    icon: "community",
                    iconBg: "bg-pink",
                    description:
                      "We actively engage with your audience, respond to comments and messages, and build a loyal community around your brand.",
                    features: [
                      "Comment and message management",
                      "Brand mention monitoring",
                      "Community building initiatives",
                    ],
                  },
                ]}
              />
            </div>

            {/* Desktop Services Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <ScrollAnimation variant="fadeInUp" delay={0.1}>
                <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-pink rounded-full flex-shrink-0">
                      <ServiceIcon name="strategy" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Social Media Strategy</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We develop a comprehensive social media strategy that aligns with your business goals and target
                    audience. This includes platform selection, content themes, posting frequency, and growth tactics.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Platform audit and selection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Competitor analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Content calendar planning</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              {/* Service 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-pink rounded-full flex-shrink-0">
                      <ServiceIcon name="content" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Content Creation</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We create engaging, on-brand content that resonates with your audience and drives engagement. This
                    includes graphics, videos, captions, and hashtag strategies.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Graphic design and video production</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Copywriting and caption creation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Hashtag research and optimization</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              {/* Service 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3}>
                <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-pink rounded-full flex-shrink-0">
                      <ServiceIcon name="community" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Community Management</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We actively engage with your audience, respond to comments and messages, and build a loyal community
                    around your brand. This includes monitoring mentions and fostering relationships.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Comment and message management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Brand mention monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Community building initiatives</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Social Media Packages */}
        <section className="py-16" style={{ backgroundColor: "#FFF1F6" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-xs tracking-[0.4em] font-semibold text-gray-500 mb-4">PACKAGES</p>
                <h2 className="text-3xl md:text-4xl font-ultra mb-4">Social Media Packages</h2>
                <p className="text-base md:text-lg">
                  Pick the level of support that fits your growth stage—from nimble storytelling sprints to bespoke, always-on partnerships.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid gap-8 lg:grid-cols-3">
              {SOCIAL_PACKAGES.filter((pkg) => !pkg.isCustom).map((pkg, index) => (
                <ScrollAnimation key={pkg.name} variant="fadeInUp" delay={0.1 * index}>
                  <div className="bg-[#F44976] rounded-[32px] shadow-xl p-6 text-white flex flex-col h-full border-2 border-black">
                    <div className="flex items-center justify-between mb-6">
                      <div className="rounded-2xl px-3 py-2 text-xs tracking-[0.4em] bg-white/20">SERVICE</div>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white/10">
                        <span className={`text-xl ${pkg.starColor}`}>★</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-3xl font-ultra" style={{ color: "#FFE45E" }}>
                        {pkg.name}
                      </h3>
                      <p className={`text-lg font-semibold ${pkg.accent}`}>{pkg.price}</p>
                      <p className="text-sm mt-2 text-white/80">{pkg.description}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white text-base mb-2">Includes per month</h4>
                        <ul className="text-sm space-y-1">
                          {pkg.perMonth.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-base mb-2">Also included</h4>
                        <ul className="text-sm space-y-1">
                          {pkg.alsoIncluded.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {SOCIAL_PACKAGES.find((pkg) => pkg.isCustom) && (
              <ScrollAnimation variant="fadeInUp" delay={0.4}>
                <div className="mt-8 rounded-[32px] border-2 border-black bg-black text-white px-6 py-6 shadow-xl">
                  <div>
                    <p className="tracking-[0.4em] text-xs text-white/70 mb-2">CUSTOM PACKAGE</p>
                    <h3 className="text-3xl font-ultra mb-2">{SOCIAL_PACKAGES.find((pkg) => pkg.isCustom)!.name}</h3>
                    <p className="text-lg font-semibold text-white/90">{SOCIAL_PACKAGES.find((pkg) => pkg.isCustom)!.price}</p>
                    <p className="text-sm text-white/80 mt-2">
                      Built around your exact goals—any budget, any channel mix, fully bespoke. Flexible deliverables, strategy time,
                      production add-ons, and community management hours activated whenever you need them.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </section>

        {/* Extra Services */}
        <section className="py-12" style={{ backgroundColor: "#F44976" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <div className="text-center max-w-2xl mx-auto mb-6 text-white">
                <p className="text-xs tracking-[0.4em] font-semibold mb-2 opacity-80">EXTRA SERVICES</p>
                <h2 className="text-3xl font-ultra mb-2">Boost Your Package</h2>
                <p className="text-sm text-white/80">Quick add-ons for production, campaigns, or extra hands when you need them.</p>
              </div>
            </ScrollAnimation>

            <div className="overflow-hidden rounded-[24px] border-2 border-black shadow-xl bg-white">
              <div className="hidden md:grid grid-cols-2 bg-pink-100 border-b-2 border-black text-center font-semibold uppercase tracking-wide text-sm">
                <div className="py-3">Service</div>
                <div className="py-3">Price</div>
              </div>
              <div>
                {EXTRA_SERVICES.map((item, idx) => (
                  <div
                    key={item.service}
                    className={`grid md:grid-cols-2 gap-3 px-4 py-3 text-sm ${idx % 2 === 0 ? "bg-white" : "bg-pink-50"}`}
                  >
                    <div className="font-semibold">{item.service}</div>
                    <div className="md:text-right">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center">Our Social Media Process</h2>
            </ScrollAnimation>

            {/* Mobile Process Carousel */}
            <div className="md:hidden">
              <MobileProcessCarousel
                steps={SOCIAL_PROCESS_STEPS.map((step) => ({
                  number: step.number,
                  title: step.title,
                  description:
                    step.summary + (step.bullets.length ? `\n\n${step.bullets.map((bullet) => `• ${bullet}`).join("\n")}` : ""),
                  bgColor: "bg-pink",
                }))}
              />
            </div>

            {/* Desktop Process Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {SOCIAL_PROCESS_STEPS.map((step, index) => (
                <ScrollAnimation key={step.number} variant="fadeInUp" delay={0.1 * (index + 1)}>
                  <div className="bg-pink rounded-[32px] border-2 border-black p-6 h-full shadow-lg flex flex-col text-white">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black text-3xl font-ultra mb-4 mx-auto">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-ultra mb-3 text-center">{step.title}</h3>
                    <p className="text-sm text-center mb-4 text-white/90">{step.summary}</p>
                    {step.bullets.length > 0 && (
                      <ul className="text-sm space-y-1 text-white/90">
                        {step.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span>•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <VideoCTA
          title="Ready to Amplify Your Social Media Presence?"
          description="Let's discuss how we can help your business build a strong social media presence."
          primaryButtonText="GET STARTED"
          primaryButtonLink="/contact"
          secondaryButtonText="VIEW OUR WORK"
          secondaryButtonLink="/portfolio"
          videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5084245-uhd_3840_2160_30fps-8s7yFArT5t48cFKRZIG3dvktVjc4Vd.mp4"
        />
      </div>
    </PageWrapper>
  )
}
