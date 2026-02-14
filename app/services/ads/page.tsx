import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollAnimation } from "@/components/scroll-animation"
import VideoCTA from "@/components/video-cta"
import ServiceBanner from "@/components/service-banner"
import ServiceIcon from "@/components/service-icon"
import MobileServicesCarousel from "@/components/mobile-services-carousel"
import MobileProcessCarousel from "@/components/mobile-process-carousel"

export default function AdsServicePage() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section with Background Image */}
        <section className="relative">
          <div className="hero-background-container">
            <img
              src="/images/ServicesAds-HERO.webp"
              alt="Advertising Services Background"
              className="hero-background-image"
            />
          </div>
        </section>

        {/* Service Banner */}
        <ServiceBanner currentService="ads" />

        {/* Service Details - Mobile First Layout */}
        <section className="py-16 bg-white">
          <div className="container">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <ScrollAnimation variant="fadeInUp">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-yellow rounded-full shadow-lg">
                      <Image
                        src="/images/ads.webp"
                        alt="Advertising Icon"
                        width={50}
                        height={50}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-3xl font-ultra">Advertising</h2>
                  </div>
                  <p className="mb-6">
                    Effective advertising is about connecting with the right audience at the right time with the right
                    message.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-yellow rounded-[32px] p-6 mb-8">
                  <h3 className="text-xl font-ultra mb-4 text-center">Why Advertising Matters</h3>
                  <p className="mb-4 text-sm">In today's competitive marketplace, strategic advertising helps you:</p>
                  <ul className="mb-4 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Reach new customers and expand your market</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Build brand awareness and recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Drive targeted traffic and qualified leads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Increase sales and revenue</span>
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
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-yellow rounded-full shadow-lg">
                      <Image
                        src="/images/ads.webp"
                        alt="Advertising Icon"
                        width={50}
                        height={50}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-ultra">Advertising</h2>
                  </div>
                  <p className="mb-6">
                    Effective advertising is about connecting with the right audience at the right time with the right
                    message. We help you create and manage advertising campaigns that drive results and maximize your
                    return on investment.
                  </p>
                  <p className="mb-6">
                    Our data-driven approach ensures your advertising budget is spent efficiently, targeting customers
                    who are most likely to convert and become loyal to your brand.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft">
                <div className="bg-yellow rounded-[32px] p-8">
                  <h3 className="text-2xl font-ultra mb-4">Why Advertising Matters</h3>
                  <p className="mb-4">In today's competitive marketplace, strategic advertising helps you:</p>
                  <ul className="mb-6 space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Reach new customers and expand your market</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Build brand awareness and recognition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Drive targeted traffic and qualified leads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Increase sales and revenue</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16" style={{ backgroundColor: "#FFCB2B" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center text-white">Our Advertising Services</h2>
            </ScrollAnimation>

            {/* Mobile Services Carousel */}
            <div className="md:hidden">
              <MobileServicesCarousel
                services={[
                  {
                    title: "PPC Advertising",
                    icon: "ppc",
                    iconBg: "bg-yellow",
                    description: "We create and manage pay-per-click campaigns on search engines like Google and Bing.",
                    features: [
                      "Keyword research and selection",
                      "Ad copy creation and testing",
                      "Bid management and optimization",
                    ],
                  },
                  {
                    title: "Social Media Advertising",
                    icon: "community",
                    iconBg: "bg-yellow",
                    description:
                      "We develop targeted campaigns on platforms like Facebook, Instagram, LinkedIn, and TikTok.",
                    features: [
                      "Audience targeting and segmentation",
                      "Creative development and testing",
                      "Campaign optimization and scaling",
                    ],
                  },
                  {
                    title: "Display & Video Advertising",
                    icon: "targeting",
                    iconBg: "bg-yellow",
                    description:
                      "We create visual and video ads across the web that build brand awareness and engage your audience.",
                    features: [
                      "Banner and video ad design",
                      "Programmatic advertising",
                      "YouTube and streaming platform campaigns",
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
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-yellow rounded-full flex-shrink-0">
                      <ServiceIcon name="ppc" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">PPC Advertising</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We create and manage pay-per-click campaigns on search engines like Google and Bing that drive
                    targeted traffic to your website and generate qualified leads.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Keyword research and selection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Ad copy creation and testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Bid management and optimization</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              {/* Service 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-yellow rounded-full flex-shrink-0">
                      <ServiceIcon name="community" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Social Media Advertising</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We develop targeted campaigns on platforms like Facebook, Instagram, LinkedIn, and TikTok to reach
                    your ideal audience where they spend their time online.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Audience targeting and segmentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Creative development and testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Campaign optimization and scaling</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              {/* Service 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3}>
                <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-yellow rounded-full flex-shrink-0">
                      <ServiceIcon name="targeting" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Display & Video Advertising</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We create visual and video ads across the web that build brand awareness, engage your audience, and
                    drive conversions through compelling storytelling.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Banner and video ad design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Programmatic advertising</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>YouTube and streaming platform campaigns</span>
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
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center">Our Advertising Process</h2>
            </ScrollAnimation>

            {/* Mobile Process Carousel */}
            <div className="md:hidden">
              <MobileProcessCarousel
                steps={[
                  {
                    number: 1,
                    title: "Research & Planning",
                    description:
                      "We analyze your audience, competitors, and market to develop a strategic advertising plan aligned with your goals.",
                    bgColor: "bg-yellow",
                  },
                  {
                    number: 2,
                    title: "Campaign Creation",
                    description:
                      "We develop compelling ad creative, set up targeting parameters, and launch your campaigns across relevant platforms.",
                    bgColor: "bg-yellow",
                  },
                  {
                    number: 3,
                    title: "Optimization",
                    description:
                      "We continuously monitor and optimize your campaigns to improve performance and maximize ROI.",
                    bgColor: "bg-yellow",
                  },
                  {
                    number: 4,
                    title: "Reporting & Analysis",
                    description:
                      "We provide detailed reports and insights to help you understand campaign performance and inform future strategies.",
                    bgColor: "bg-yellow",
                  },
                ]}
              />
            </div>

            {/* Desktop Process Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <ScrollAnimation variant="fadeInUp" delay={0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    1
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Research & Planning</h3>
                  <p className="text-sm">
                    We analyze your audience, competitors, and market to develop a strategic advertising plan aligned
                    with your goals.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    2
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Campaign Creation</h3>
                  <p className="text-sm">
                    We develop compelling ad creative, set up targeting parameters, and launch your campaigns across
                    relevant platforms.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    3
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Optimization</h3>
                  <p className="text-sm">
                    We continuously monitor and optimize your campaigns to improve performance and maximize ROI.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 4 */}
              <ScrollAnimation variant="fadeInUp" delay={0.4}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    4
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Reporting & Analysis</h3>
                  <p className="text-sm">
                    We provide detailed reports and insights to help you understand campaign performance and inform
                    future strategies.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <VideoCTA
          title="Ready to Amplify Your Advertising?"
          description="Let's discuss how we can help your business reach its target audience and drive conversions."
          primaryButtonText="GET STARTED"
          primaryButtonLink="/contact"
          secondaryButtonText="VIEW OUR WORK"
          secondaryButtonLink="/portfolio"
          videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5084528-uhd_3840_2160_30fps-cHscNuYVDQZ28cDNqYATgpvB7hmXeD.mp4"
        />
      </div>
    </PageWrapper>
  )
}
