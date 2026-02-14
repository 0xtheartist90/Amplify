import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"
import { ScrollAnimation } from "@/components/scroll-animation"
import VideoCTA from "@/components/video-cta"
import ServiceBanner from "@/components/service-banner"
import ServiceIcon from "@/components/service-icon"
import MobileServicesCarousel from "@/components/mobile-services-carousel"
import MobileProcessCarousel from "@/components/mobile-process-carousel"

export default function WebsiteServicePage() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section with Background Image */}
        <section className="relative">
          <div className="hero-background-container">
            <img
              src="/images/ServicesWebsite-HERO.png"
              alt="Website Services Background"
              className="hero-background-image"
            />
          </div>
        </section>

        {/* Service Banner */}
        <ServiceBanner currentService="website" />

        {/* Service Details - Mobile First Layout */}
        <section className="py-16 bg-white">
          <div className="container">
            {/* Mobile Layout */}
            <div className="md:hidden">
              <ScrollAnimation variant="fadeInUp">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-purple rounded-full shadow-lg">
                      <Image
                        src="/images/website.png"
                        alt="Website Icon"
                        width={50}
                        height={50}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-3xl font-ultra">Website</h2>
                  </div>
                  <p className="mb-6">
                    Your website is often the first impression potential customers have of your business. We create
                    custom, responsive websites that convert visitors into customers.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-purple rounded-[32px] p-6 text-white mb-8">
                  <h3 className="text-xl font-ultra mb-4 text-center">Why Your Website Matters</h3>
                  <p className="mb-4 text-sm">
                    In today's digital world, your website is your most important marketing asset. It's the hub of your
                    online presence and often the first place potential customers go to learn about your business.
                  </p>
                  <p className="text-sm">
                    A well-designed website builds credibility, showcases your products or services, and provides a
                    platform for growth.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation variant="fadeInRight">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-purple rounded-full shadow-lg">
                      <Image
                        src="/images/website.png"
                        alt="Website Icon"
                        width={50}
                        height={50}
                        className="icon-pulse"
                        style={{ margin: "0 auto" }}
                      />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-ultra">Website</h2>
                  </div>
                  <p className="mb-6">
                    Your website is often the first impression potential customers have of your business. We create
                    custom, responsive websites that not only look great but also convert visitors into customers.
                  </p>
                  <p className="mb-6">
                    Our team of designers and developers work together to create a seamless user experience that
                    reflects your brand identity and achieves your business goals.
                  </p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="fadeInLeft">
                <div className="bg-purple rounded-[32px] p-8 text-white">
                  <h3 className="text-2xl font-ultra mb-4">Why Your Website Matters</h3>
                  <p className="mb-4">
                    In today's digital world, your website is your most important marketing asset. It's the hub of your
                    online presence and often the first place potential customers go to learn about your business.
                  </p>
                  <p>
                    A well-designed website builds credibility, showcases your products or services, and provides a
                    platform for growth through SEO, content marketing, and conversion optimization.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16" style={{ backgroundColor: "#C27AE6" }}>
          <div className="container">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center text-white">Our Website Services</h2>
            </ScrollAnimation>

            {/* Mobile Services Carousel */}
            <div className="md:hidden">
              <MobileServicesCarousel
                services={[
                  {
                    title: "Website Strategy",
                    icon: "website",
                    iconBg: "bg-purple",
                    description:
                      "We develop a comprehensive strategy for your website that aligns with your business goals and target audience.",
                    features: ["User experience planning", "Conversion strategy", "Content strategy"],
                  },
                  {
                    title: "Website Design",
                    icon: "design",
                    iconBg: "bg-purple",
                    description:
                      "Our designers create visually stunning websites that reflect your brand identity and engage your audience.",
                    features: ["Custom visual design", "Responsive layouts", "UI/UX optimization"],
                  },
                  {
                    title: "Development",
                    icon: "development",
                    iconBg: "bg-purple",
                    description:
                      "Our development team builds websites that are fast, secure, and scalable using modern technologies.",
                    features: ["Custom coding", "CMS implementation", "E-commerce solutions"],
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
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-purple rounded-full flex-shrink-0">
                      <ServiceIcon name="website" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Website Strategy</h3>
                  </div>
                  <p className="text-sm mb-4">
                    We develop a comprehensive strategy for your website that aligns with your business goals and target
                    audience. This includes site architecture, user flow, and conversion optimization.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>User experience planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Conversion strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Content strategy</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              {/* Service 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-purple rounded-full flex-shrink-0">
                      <ServiceIcon name="design" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Website Design</h3>
                  </div>
                  <p className="text-sm mb-4">
                    Our designers create visually stunning websites that reflect your brand identity and engage your
                    audience. We focus on creating intuitive, user-friendly interfaces that guide visitors toward
                    conversion.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Custom visual design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Responsive layouts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>UI/UX optimization</span>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              {/* Service 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3}>
                <div className="bg-white rounded-[32px] p-6 shadow-lg border-2 border-black h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-3 bg-purple rounded-full flex-shrink-0">
                      <ServiceIcon name="development" size={30} color="#fff" />
                    </div>
                    <h3 className="text-xl font-ultra">Development</h3>
                  </div>
                  <p className="text-sm mb-4">
                    Our development team builds websites that are fast, secure, and scalable. We use modern technologies
                    and best practices to ensure your website performs well and is easy to maintain.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>Custom coding</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>CMS implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">•</span>
                      <span>E-commerce solutions</span>
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
              <h2 className="text-3xl md:text-4xl font-ultra mb-8 text-center">Our Website Process</h2>
            </ScrollAnimation>

            {/* Mobile Process Carousel */}
            <div className="md:hidden">
              <MobileProcessCarousel
                steps={[
                  {
                    number: 1,
                    title: "Discovery",
                    description:
                      "We start by understanding your business, goals, target audience, and competitors to develop a strategic foundation for your website.",
                    bgColor: "bg-purple",
                  },
                  {
                    number: 2,
                    title: "Design",
                    description:
                      "Our designers create wireframes and visual designs that align with your brand and provide an optimal user experience.",
                    bgColor: "bg-purple",
                  },
                  {
                    number: 3,
                    title: "Development",
                    description:
                      "Our developers bring the designs to life, building a responsive, fast, and secure website with all the functionality you need.",
                    bgColor: "bg-purple",
                  },
                  {
                    number: 4,
                    title: "Launch & Support",
                    description:
                      "After thorough testing, we launch your website and provide ongoing support and maintenance to ensure it continues to perform well.",
                    bgColor: "bg-purple",
                  },
                ]}
              />
            </div>

            {/* Desktop Process Grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <ScrollAnimation variant="fadeInUp" delay={0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    1
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Discovery</h3>
                  <p className="text-sm">
                    We start by understanding your business, goals, target audience, and competitors to develop a
                    strategic foundation for your website.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 2 */}
              <ScrollAnimation variant="fadeInUp" delay={0.2}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    2
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Design</h3>
                  <p className="text-sm">
                    Our designers create wireframes and visual designs that align with your brand and provide an optimal
                    user experience.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 3 */}
              <ScrollAnimation variant="fadeInUp" delay={0.3}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    3
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Development</h3>
                  <p className="text-sm">
                    Our developers bring the designs to life, building a responsive, fast, and secure website with all
                    the functionality you need.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 4 */}
              <ScrollAnimation variant="fadeInUp" delay={0.4}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-ultra">
                    4
                  </div>
                  <h3 className="text-xl font-ultra mb-2">Launch & Support</h3>
                  <p className="text-sm">
                    After thorough testing, we launch your website and provide ongoing support and maintenance to ensure
                    it continues to perform well.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <VideoCTA
          title="Ready to Build Your Dream Website?"
          description="Let's discuss how we can create a website that helps your business grow."
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
