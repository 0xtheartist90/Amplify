"use client"

import Link from "next/link"
import Image from "next/image"
import VideoCTA from "@/components/video-cta"
import { ScrollAnimation } from "@/components/scroll-animation"
import { PageWrapper } from "@/components/page-wrapper"
import { useLocale } from "@/lib/i18n"

export default function DesktopPortfolioPage() {
  const { locale } = useLocale()
  // Sample portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "Ultimate Shape",
      category: locale === "nl" ? "Website ontwikkeling" : "Website Development",
      description:
        locale === "nl"
          ? "Moderne website voor een premium fitnessbedrijf met e-commercefunctionaliteit."
          : "Modern website for a premium fitness company with e-commerce functionality.",
      bgColor: "bg-purple",
      textColor: "text-white",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-1-5vGy0f0NFYHBW9LwUgcVrfhxdqqSM2.png",
    },
    {
      id: 2,
      title: "Fawaka",
      category: locale === "nl" ? "Branding, website & back-end systeem" : "Branding, Website & Back End System",
      description:
        locale === "nl"
          ? "Levendige merkidentiteit, website en bestelsysteem voor een Caribische bezorgservice."
          : "Vibrant brand identity, website and ordering system for a Caribbean food delivery service.",
      bgColor: "bg-yellow",
      textColor: "text-white",
      image: "/images/Portfolio/Portfolio%20Fawaka/fawaka-main.webp",
    },
    {
      id: 3,
      title: "Prysmic",
      category: "Branding & Website",
      description:
        locale === "nl"
          ? "Geometrische merkidentiteit en website voor een tech startup gericht op 3D-visualisatie."
          : "Geometric brand identity and website for a tech startup focused on 3D visualization.",
      bgColor: "bg-blue",
      textColor: "text-white",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-BFWh7NQ5nOrrcfllqAGmwu9G5Kyux2.png",
    },
    {
      id: 4,
      title: "Rise & Connect",
      category: "Branding & Website",
      description:
        locale === "nl"
          ? "Levendige merkidentiteit en website voor een non-profit empowermentorganisatie."
          : "Vibrant brand identity and website for a non-profit empowerment organization.",
      bgColor: "bg-pink",
      textColor: "text-white",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/riseconnectmain-Yx9mKGZDUKqLP13SKx8YE46pCailOe.png",
    },
    {
      id: 5,
      title: "SHE",
      category: locale === "nl" ? "Website ontwikkeling & merkidentiteit" : "Website Development & Brand Identity",
      description:
        locale === "nl"
          ? "Een veilig online platform gericht op herstel, bescherming en empowerment."
          : "A safe online platform focused on recovery, protection, and empowerment.",
      bgColor: "bg-[#0FAE9B]",
      textColor: "text-white",
      image: "/images/Portfolio/Portfolio%20SHE/portfolio-she-thumb.webp",
    },
    {
      id: 6,
      title: "Goldenbeauty",
      category: locale === "nl" ? "Branding & social media management" : "Branding & Social Media Management",
      description:
        locale === "nl"
          ? "Elegante merkidentiteit en social setup voor een beautymerk."
          : "Elegant brand identity and social presence setup for a beauty business.",
      bgColor: "bg-[#D6A84A]",
      textColor: "text-black",
      image: "/images/Portfolio/Portfolio%20goldenbeauty/portfolio%20thumbnail%20goldenbeauty.png",
    },
  ]

  const copy =
    locale === "nl"
      ? {
          heroAlt: "Portfolio achtergrond",
          ctaTitle: "Klaar voor vergelijkbare resultaten?",
          ctaDescription: "Laten we bespreken hoe we jouw merk kunnen helpen zijn marketingdoelen te bereiken.",
          primary: "START JE PROJECT",
          secondary: "ONTDEK DIENSTEN",
        }
      : {
          heroAlt: "Portfolio Background",
          ctaTitle: "Ready for Similar Results?",
          ctaDescription: "Let's discuss how we can help your brand achieve its marketing goals.",
          primary: "START YOUR PROJECT",
          secondary: "EXPLORE SERVICES",
        }

  return (
    <PageWrapper>
      <div className="flex flex-col">
        {/* Hero Section with Full Background Image */}
        <section className="relative">
          <div className="hero-background-container">
            <img src="/images/portfolio-hero-new.webp" alt={copy.heroAlt} className="hero-background-image" />
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {portfolioItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/portfolio/${item.id}`}
                  className={`${item.bgColor} rounded-[32px] border-2 border-black overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-xl`}
                >
                  {item.image ? (
                    <div className="h-40 md:h-64 bg-black/10 relative overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="h-40 md:h-64 bg-black/10"></div>
                  )}
                  <div className={`p-3 md:p-6 ${item.textColor || "text-white"}`}>
                    <div className="text-xs md:text-sm font-medium mb-1 md:mb-2">{item.category}</div>
                    <h3 className="text-lg md:text-2xl font-ultra mb-1 md:mb-2">{item.title}</h3>
                    {/* Description only shows on desktop */}
                    <p className="hidden md:block text-base">{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Video */}
        <ScrollAnimation variant="fadeIn">
          <VideoCTA
            title={copy.ctaTitle}
            description={copy.ctaDescription}
            primaryButtonText={copy.primary}
            primaryButtonLink="/contact"
            secondaryButtonText={copy.secondary}
            secondaryButtonLink="/services"
            videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16093600-uhd_3840_2160_30fps-7vh26NwfSO7mFV8MKSX8Kaoy8RXxQx.mp4"
          />
        </ScrollAnimation>
      </div>
    </PageWrapper>
  )
}
