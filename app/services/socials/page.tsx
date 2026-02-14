import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollAnimation } from "@/components/scroll-animation"
import VideoCTA from "@/components/video-cta"
import ServiceBanner from "@/components/service-banner"
import ServiceIcon from "@/components/service-icon"
import MobileServicesCarousel from "@/components/mobile-services-carousel"
import MobileProcessCarousel from "@/components/mobile-process-carousel"

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

        {/* Process Section */}
        <section className="py-16">
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center">Our Social Media Process</h2>
            </ScrollAnimation>

            {/* Mobile Process Carousel */}
            <div className="md:hidden">
              <MobileProcessCarousel
                steps={[
                  {
                    number: 1,
                    title: "Research & Strategy",
                    description:
                      "We analyze your audience, competitors, and industry to develop a tailored social media strategy.",
                    bgColor: "bg-pink",
                  },
                  {
                    number: 2,
                    title: "Content Creation",
                    description:
                      "We create engaging content that aligns with your brand and resonates with your audience.",
                    bgColor: "bg-pink",
                  },
                  {
                    number: 3,
                    title: "Implementation",
                    description:
                      "We publish content, engage with your audience, and manage your social media presence.",
                    bgColor: "bg-pink",
                  },
                  {
                    number: 4,
                    title: "Analysis & Optimization",
                    description: "We analyze performance data and optimize your strategy for continuous improvement.",
                    bgColor: "bg-pink",
                  },
                ]}
              />
            </div>

            {/* Desktop Process Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <ScrollAnimation variant="fadeInUp" delay={0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    1
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Research & Strategy</h3>
                  <p className="text-sm">
                    We analyze your audience, competitors, and industry to develop a tailored social media strategy.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    2
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Content Creation</h3>
                  <p className="text-sm">
                    We create engaging content that aligns with your brand and resonates with your audience.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    3
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Implementation</h3>
                  <p className="text-sm">
                    We publish content, engage with your audience, and manage your social media presence.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 4 */}
              <ScrollAnimation variant="fadeInUp" delay={0.4}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    4
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Analysis & Optimization</h3>
                  <p className="text-sm">
                    We analyze performance data and optimize your strategy for continuous improvement.
                  </p>
                </div>
              </ScrollAnimation>
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
