import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollAnimation } from "@/components/scroll-animation"
import VideoCTA from "@/components/video-cta"
import ServiceBanner from "@/components/service-banner"
import ServiceIcon from "@/components/service-icon"
import MobileServicesCarousel from "@/components/mobile-services-carousel"
import MobileProcessCarousel from "@/components/mobile-process-carousel"

export default function BrandingServicePage() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section with Background Image */}
        <section className="relative">
          <div className="hero-background-container">
            <img
              src="/images/ServicesBranding-HERO.webp"
              alt="Branding Services Background"
              className="hero-background-image"
            />
          </div>
        </section>

        {/* Service Banner */}
        <ServiceBanner currentService="branding" />

        {/* Service Details - Mobile First Layout */}
        <section className="py-16 bg-white">
          <div className="container">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <ScrollAnimation variant="fadeInUp">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-blue rounded-full shadow-lg">
                      <Image
                        src="/images/branding.webp"
                        alt="Branding Icon"
                        width={50}
                        height={50}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-3xl font-ultra">Branding</h2>
                  </div>
                  <p className="mb-6">
                    Your brand is more than just a logo—it's the personality of your business and the emotional
                    connection you create with your audience.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-blue rounded-[32px] p-6 text-white mb-8">
                  <h3 className="text-xl font-ultra mb-4 text-center">Why Branding Matters</h3>
                  <p className="mb-4 text-sm">
                    In today's competitive marketplace, a strong brand is your most valuable asset. It helps you:
                  </p>
                  <ul className="mb-4 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Stand out from competitors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Build customer loyalty and trust</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Command premium pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Create emotional connections</span>
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
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-blue rounded-full shadow-lg">
                      <Image
                        src="/images/branding.webp"
                        alt="Branding Icon"
                        width={50}
                        height={50}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-ultra">Branding</h2>
                  </div>
                  <p className="mb-6">
                    Your brand is more than just a logo—it's the personality of your business and the emotional
                    connection you create with your audience. We help you develop a distinctive brand identity that
                    resonates with your target market and stands out in a crowded marketplace.
                  </p>
                  <p className="mb-6">
                    Our branding services are designed to help you define your brand's voice, visual identity, and
                    positioning in a way that builds recognition, trust, and loyalty.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft">
                <div className="bg-blue rounded-[32px] p-8">
                  <h3 className="text-2xl font-ultra mb-4">Why Branding Matters</h3>
                  <p className="mb-4">
                    In today's competitive marketplace, a strong brand is your most valuable asset. It helps you:
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Stand out from competitors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Build customer loyalty and trust</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Command premium pricing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Create emotional connections</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16" style={{ backgroundColor: "#7DD3F7" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center text-white">Our Branding Services</h2>
            </ScrollAnimation>

            {/* Mobile Services Carousel */}
            <div className="md:hidden">
              <MobileServicesCarousel
                services={[
                  {
                    title: "Brand Strategy",
                    icon: "strategy",
                    iconBg: "bg-blue",
                    description:
                      "We develop a comprehensive brand strategy that defines your brand's purpose, positioning, and personality.",
                    features: ["Brand positioning", "Target audience analysis", "Competitive analysis"],
                  },
                  {
                    title: "Visual Identity",
                    icon: "identity",
                    iconBg: "bg-blue",
                    description:
                      "We create a cohesive visual identity that brings your brand to life through logo design, color palette, and typography.",
                    features: ["Logo design", "Color palette development", "Typography selection"],
                  },
                  {
                    title: "Brand Voice",
                    icon: "voice",
                    iconBg: "bg-blue",
                    description:
                      "We help you develop a consistent brand voice that communicates your brand's personality and values.",
                    features: ["Messaging strategy", "Tone of voice guidelines", "Brand storytelling"],
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
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-blue rounded-full flex-shrink-0">
                      <ServiceIcon name="strategy" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Brand Strategy</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We develop a comprehensive brand strategy that defines your brand's purpose, positioning, and
                    personality. This serves as the foundation for all your branding and marketing efforts.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Brand positioning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Target audience analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Competitive analysis</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              {/* Service 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-blue rounded-full flex-shrink-0">
                      <ServiceIcon name="identity" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Visual Identity</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We create a cohesive visual identity that brings your brand to life through logo design, color
                    palette, typography, and other visual elements that make your brand instantly recognizable.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Logo design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Color palette development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Typography selection</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              {/* Service 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3}>
                <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-blue rounded-full flex-shrink-0">
                      <ServiceIcon name="voice" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Brand Voice</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We help you develop a consistent brand voice that communicates your brand's personality and values
                    across all channels and touchpoints.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Messaging strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Tone of voice guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Brand storytelling</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center">Our Branding Process</h2>
            </ScrollAnimation>

            {/* Mobile Process Carousel */}
            <div className="md:hidden">
              <MobileProcessCarousel
                steps={[
                  {
                    number: 1,
                    title: "Discovery",
                    description:
                      "We start by understanding your business, goals, target audience, and competitors to develop a strategic foundation for your brand.",
                    bgColor: "bg-blue",
                  },
                  {
                    number: 2,
                    title: "Strategy",
                    description:
                      "We develop a brand strategy that defines your brand's positioning, personality, and key messages.",
                    bgColor: "bg-blue",
                  },
                  {
                    number: 3,
                    title: "Creation",
                    description:
                      "Our creative team brings your brand to life through visual identity, messaging, and other brand elements.",
                    bgColor: "bg-blue",
                  },
                  {
                    number: 4,
                    title: "Implementation",
                    description:
                      "We help you implement your brand across all touchpoints and provide guidelines for consistent application.",
                    bgColor: "bg-blue",
                  },
                ]}
              />
            </div>

            {/* Desktop Process Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <ScrollAnimation variant="fadeInUp" delay={0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    1
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Discovery</h3>
                  <p className="text-sm">
                    We start by understanding your business, goals, target audience, and competitors to develop a
                    strategic foundation for your brand.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    2
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Strategy</h3>
                  <p className="text-sm">
                    We develop a brand strategy that defines your brand's positioning, personality, and key messages.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    3
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Creation</h3>
                  <p className="text-sm">
                    Our creative team brings your brand to life through visual identity, messaging, and other brand
                    elements.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 4 */}
              <ScrollAnimation variant="fadeInUp" delay={0.4}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    4
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Implementation</h3>
                  <p className="text-sm">
                    We help you implement your brand across all touchpoints and provide guidelines for consistent
                    application.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <VideoCTA
          title="Ready to Build a Powerful Brand?"
          description="Let's discuss how we can help your brand stand out and connect with your audience."
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
