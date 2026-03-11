"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import VideoCTA from "@/components/video-cta"
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import React, { useState, useEffect, useCallback, useRef, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ImageLightbox from "@/components/image-lightbox"
import { type Locale, useLocale } from "@/lib/i18n"

function getPortfolioItems(locale: Locale) {
  const isNl = locale === "nl"

  return [
    {
      id: "1",
      title: "Ultimate Shape",
      client: "Ultimate Shape Fitness",
      category: isNl ? "Website ontwikkeling" : "Website Development",
      description: isNl
        ? "Moderne website voor een premium fitnessbedrijf met e-commercefunctionaliteit."
        : "Modern website for a premium fitness company with e-commerce functionality.",
      challenge: isNl
        ? "Ultimate Shape had een onderscheidende website nodig die serieuze fitnessliefhebbers aansprak en zich tegelijk onderscheidde van reguliere sportscholen. Ze zochten een strakke, moderne uitstraling die kracht en precisie uitstraalt."
        : "Ultimate Shape needed a distinctive website that would appeal to serious fitness enthusiasts while differentiating them from mainstream gyms. They required a sleek, modern look that conveyed strength and precision.",
      solution: isNl
        ? "We ontwikkelden een gebruiksvriendelijke website met een monochroom palet en subtiele gradients die het merk een premium en moderne uitstraling geven. De e-commercefunctionaliteit maakt het eenvoudig om voedingsproducten te bekijken en te kopen."
        : "We developed a clean, user-friendly website with a monochromatic palette and subtle gradients that gives them a premium, modern feel that stands out in the fitness industry. The e-commerce functionality allows customers to easily browse and purchase their nutrition products.",
      results: isNl
        ? "De nieuwe website zorgde voor 45% meer online verkoop en een duidelijk sterkere merkherkenning binnen de doelgroep. De conversieratio van de website steeg met 60%."
        : "The new website led to a 45% increase in online sales and significantly improved brand recognition in their target demographic. Their website conversion rate improved by 60% with the new design.",
      services: isNl
        ? ["Website design", "E-commerce ontwikkeling", "UI/UX design", "Productfotografie", "Contentstrategie"]
        : ["Website Design", "E-commerce Development", "UI/UX Design", "Product Photography", "Content Strategy"],
      bgColor: "bg-black",
      textColor: "text-white",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-1-5vGy0f0NFYHBW9LwUgcVrfhxdqqSM2.png",
      website: "",
    },
    {
      id: "2",
      title: "Fawaka",
      client: "Fawaka Food Delivery",
      category: isNl ? "Branding, website & back-end systeem" : "Branding, Website & Back End System",
      description: isNl
        ? "Levendige merkidentiteit, website en bestelsysteem voor een Caribische food delivery service."
        : "Vibrant brand identity, website and ordering system for a Caribbean food delivery service.",
      challenge: isNl
        ? "Fawaka had een complete rebranding nodig die de vrolijke, energieke sfeer van de Caribische keuken vastlegt en tegelijk een herkenbare visuele identiteit neerzet in een competitieve markt. Daarnaast was een robuust back-end systeem nodig voor orderbeheer."
        : "Fawaka needed a complete brand overhaul that would capture the vibrant, joyful essence of Caribbean cuisine while establishing a memorable visual identity in the competitive food delivery market. They also required a robust back end system to manage orders.",
      solution: isNl
        ? "We ontwikkelden een kleurrijke merkidentiteit rondom een vrolijk geïllustreerd karakter. Het palet met geel, rood en turquoise roept direct de zonnige Caribische sfeer op. Daarnaast bouwden we een gebruiksvriendelijke website met geïntegreerd bestelsysteem en back-end tools."
        : "We created a colorful, tropical-inspired brand identity centered around a cheerful illustrated character. The bright color palette of yellows, reds, and turquoise evokes the sunny Caribbean atmosphere. We developed a user-friendly website with an integrated ordering system and back end management tools.",
      results: isNl
        ? "De rebranding en het nieuwe systeem zorgden voor 75% meer merkherkenning en 40% meer nieuwe klanten. De efficiëntie van de orderverwerking verbeterde met 65%."
        : "The rebranding and new system led to a 75% increase in brand recognition and a 40% boost in new customer acquisition. Order processing efficiency improved by 65% with the new back end system.",
      services: isNl
        ? ["Merkstrategie", "Karakterontwerp", "Visuele identiteit", "Website ontwikkeling", "Back-end systeem", "Orderbeheer"]
        : ["Brand Strategy", "Character Design", "Visual Identity", "Website Development", "Back End System", "Order Management"],
      bgColor: "bg-yellow-400",
      textColor: "text-black",
      image: "/images/Portfolio/Portfolio%20Fawaka/fawaka-main.webp",
      website: "https://www.fawaka.com",
    },
    {
      id: "3",
      title: "Prysmic",
      client: "Prysmic Technologies",
      category: "Branding & Website",
      description: isNl
        ? "Geometrische merkidentiteit en website voor een tech startup gericht op 3D-visualisatie."
        : "Geometric brand identity and website for a tech startup focused on 3D visualization.",
      challenge: isNl
        ? "Prysmic, een nieuwe tech startup gespecialiseerd in 3D-visualisatiesoftware, had een merkidentiteit en website nodig die innovatie, precisie en verfijning uitstraalden om enterprise-klanten aan te spreken."
        : "Prysmic, a new tech startup specializing in 3D visualization software, needed a brand identity and website that would convey innovation, precision, and sophistication to appeal to enterprise clients.",
      solution: isNl
        ? "We ontwikkelden een minimalistische, geometrische merkidentiteit rond een onderscheidend piramidemotief met paarse accenten. De strakke lijnen en mathematische precisie weerspiegelen hun technische expertise. De website toont de technologie met interactieve demo's en duidelijke servicepresentatie."
        : "We developed a minimal, geometric brand centered around a distinctive pyramid motif with purple accents to suggest creativity within a structured framework. The clean lines and mathematical precision reflect their technical expertise. The website showcases their technology with interactive demos and clear service offerings.",
      results: isNl
        ? "De nieuwe merkidentiteit en website hielpen Prysmic om binnen het eerste kwartaal drie grote enterprise-klanten binnen te halen. Hun professionele uitstraling verhoogde merkbaar de geloofwaardigheid in salesgesprekken."
        : "The new brand identity and website helped Prysmic secure three major enterprise clients within the first quarter after launch. They reported that their professional image significantly improved credibility in sales meetings.",
      services: isNl
        ? ["Merkstrategie", "Logo design", "Visuele identiteit", "Website design", "UI/UX ontwikkeling", "Interactieve demo's"]
        : ["Brand Strategy", "Logo Design", "Visual Identity", "Website Design", "UI/UX Development", "Interactive Demos"],
      bgColor: "bg-blue",
      textColor: "text-white",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portfolio-BFWh7NQ5nOrrcfllqAGmwu9G5Kyux2.png",
      website: "https://www.prysmic.io/",
    },
    {
      id: "4",
      title: "Rise & Connect",
      client: "Stichting Rise & Connect",
      category: "Branding & Website",
      description: isNl
        ? "Levendige merkidentiteit en website voor een non-profit empowermentorganisatie."
        : "Vibrant brand identity and website for a non-profit empowerment organization.",
      challenge: isNl
        ? "Rise & Connect had een warme en inclusieve merkidentiteit en website nodig die aansloten bij hun diverse community en hun missie van empowerment, verbinding en groei helder communiceerden."
        : "Rise & Connect needed a warm, inclusive brand identity and website that would resonate with their diverse community while effectively communicating their mission of empowerment, connection, and growth.",
      solution: isNl
        ? "We ontwikkelden een complete merkstrategie rondom levendige kleuren en inclusieve beeldtaal. Het logo toont handen die een mensfiguur ondersteunen met uitstralende energie, als symbool voor groei en verbinding. We bouwden daarnaast een responsive website voor resources en eventregistratie."
        : "We developed a comprehensive brand strategy centered on vibrant colors and inclusive imagery. The logo features hands supporting a human figure with radiating energy, symbolizing growth and connection. We created a responsive website that facilitates resource sharing and event registration.",
      results: isNl
        ? "De nieuwe merkidentiteit en website hielpen Rise & Connect om de programmadeelname met 65% te verhogen en drie nieuwe grote financieringspartners aan te trekken. Hun online zichtbaarheid en impact namen duidelijk toe."
        : "The new brand identity and website helped Rise & Connect increase program participation by 65% and secure three new major funding partnerships. Their online presence has significantly improved their reach and impact.",
      services: isNl
        ? ["Merkontwikkeling", "Logo design", "Website design", "Socialmediastrategie", "Eventpromotie"]
        : ["Brand Development", "Logo Design", "Website Design", "Social Media Strategy", "Event Promotion"],
      bgColor: "bg-teal-500",
      textColor: "text-white",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/riseconnectmain-Yx9mKGZDUKqLP13SKx8YE46pCailOe.png",
      website: "https://www.riseandconnect.nl/",
    },
    {
      id: "5",
      title: "SHE",
      client: "SHE – Stichting Human Empowerment",
      category: isNl ? "Website ontwikkeling & merkidentiteit" : "Website Development & Brand Identity",
      description: isNl
        ? "Een veilig online platform gericht op herstel, bescherming en empowerment."
        : "A safe online platform focused on recovery, protection, and empowerment.",
      challenge: isNl
        ? "Stichting Human Empowerment had een vernieuwde visuele identiteit en website nodig die hun missie helder weerspiegelt: een veilige plek bieden voor herstel en groei. Het platform moest vertrouwen en toegankelijkheid uitstralen voor vrouwen, mannen en jongeren die te maken hebben met huiselijk geweld en kindermishandeling."
        : "Stichting Human Empowerment needed a renewed visual identity and website that clearly reflects their mission: offering a safe place for recovery and growth. The platform had to communicate trust and accessibility while supporting women, men, and youth affected by domestic violence and child abuse.",
      solution: isNl
        ? "We hebben het logo opnieuw ontworpen om een sterkere en beter herkenbare identiteit neer te zetten. De website kreeg een rustige, gestructureerde opzet met duidelijke navigatie, zodat bezoekers snel informatie en hulp kunnen vinden. Het resultaat is een professioneel en warm platform dat past bij hun 24/7 missie."
        : "We redesigned the logo to create a stronger, more recognizable identity. The website was built with a calm, structured design and clear navigation, ensuring visitors can easily find information and support. The result is a professional and welcoming platform aligned with their 24/7 mission.",
      results: isNl
        ? "De nieuwe merkidentiteit en website versterkten hun digitale aanwezigheid en de helderheid van hun positionering als organisatie. Het eindresultaat overtrof de verwachtingen en gaf hen een platform dat echt past bij hun werk en waarden."
        : "The new brand identity and website strengthened their digital presence and clarity as an organization. The final result exceeded expectations and gave them a platform that truly represents their work and values.",
      services: isNl
        ? ["Logo redesign", "Website design", "UI/UX design", "Flyer design", "Merkidentiteit"]
        : ["Logo Redesign", "Website Design", "UI/UX Design", "Flyer Design", "Brand Identity"],
      bgColor: "bg-[#0f141f]",
      textColor: "text-white",
      image: "/images/Portfolio/Portfolio%20SHE/portfolio-she-hero.webp",
      website: "https://she-is.vercel.app/",
      websiteLabel: "she-is.com",
      testimonialQuote: isNl
        ? "We kregen veel meer dan we hadden verwacht. We wisten eigenlijk niet precies wat we van onze website wilden, maar het is echt geweldig geworden."
        : "We got way more than we expected. We didn’t really know what we wanted from our website, but it came out great.",
      testimonialAuthor: isNl ? "– Team Stichting Human Empowerment" : "– Stichting Human Empowerment Team",
    },
    {
      id: "6",
      title: "Goldenbeauty",
      client: "Goldenbeauty",
      category: isNl ? "Branding & social media management" : "Branding & Social Media Management",
      description: isNl
        ? "Een verfijnde merkidentiteit en socialmediapresentie die Goldenbeauty positioneert als een stijlvol en betrouwbaar beautymerk."
        : "A polished brand identity and social media presence designed to position Goldenbeauty as a refined, trustworthy beauty brand.",
      challenge: isNl
        ? "Goldenbeauty had een samenhangende identiteit nodig die premium, vrouwelijk en direct herkenbaar aanvoelt op elk klantcontactpunt. Naast het brandingwerk moesten ook de socialmedia-accounts professioneel worden opgezet en beheerd zodat het merk actief, consistent en klaar voor groei overkwam."
        : "Goldenbeauty needed a cohesive identity that would feel premium, feminine, and instantly recognizable across every customer touchpoint. Alongside the branding work, they also needed their social media accounts set up properly and managed in a way that made the brand feel active, consistent, and ready to grow.",
      solution: isNl
        ? "We ontwikkelden een complete visuele richting met branding en logo design en vertaalden die identiteit direct door naar hun social presence. We zetten de socialmedia-accounts op met een duidelijke merkbasis en verzorgden de contentrichting zodat alles coherent, verzorgd en passend bij het bedrijf bleef."
        : "We created a complete visual direction including branding and logo design, then translated that identity directly into their social presence. We set up their social media accounts with a clear branded foundation and managed the content direction to keep the pages cohesive, polished, and aligned with the business.",
      results: isNl
        ? "Goldenbeauty lanceerde met een veel sterkere visuele uitstraling en een consistent merk over zowel identiteit als social kanalen. De nieuwe basis maakte het merk professioneler, beter herkenbaar en zorgde voor een sterkere eerste indruk en meer consistente merkbeleving."
        : "Goldenbeauty launched with a much stronger visual presence and a consistent brand across both identity and social channels. The new setup gave them a professional foundation for marketing, made the brand more memorable, and created a cleaner customer experience from first impression to ongoing engagement.",
      services: isNl
        ? ["Merkstrategie", "Logo design", "Visuele identiteit", "Social account setup", "Social media management"]
        : ["Brand Strategy", "Logo Design", "Visual Identity", "Social Account Setup", "Social Media Management"],
      bgColor: "bg-[#D6A84A]",
      textColor: "text-black",
      image: "/images/Portfolio/Portfolio%20goldenbeauty/portfolio%20detail%20page%20hero%20goldenbeauty.png",
      website: "",
    },
  ]
}

export default function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { locale } = useLocale()
  const portfolioItems = getPortfolioItems(locale)
  const { id } = React.use(params)
  const portfolio = portfolioItems.find((item) => item.id === id)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState<string>("")
  const [activeProjectImage, setActiveProjectImage] = useState<string | null>(null)
  const [activeProjectImageAlt, setActiveProjectImageAlt] = useState<string>("")
  const [projectThumbnails, setProjectThumbnails] = useState<{ src: string; alt: string }[]>([])

  // Add this after the existing state declarations
  const touchStartX = useRef<number | null>(null)
  const [direction, setDirection] = useState(0)

  // Function to open lightbox
  const openLightbox = (src: string, alt: string) => {
    setLightboxImage(src)
    setLightboxAlt(alt)
  }

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxImage(null)
  }

  // Cards for the carousel
  const cards = [
    {
      title: locale === "nl" ? "De uitdaging" : "The Challenge",
      content: portfolio?.challenge || "",
      className: "text-black",
      style: { backgroundColor: "#FFE45E" },
    },
    {
      title: locale === "nl" ? "Onze oplossing" : "Our Solution",
      content: portfolio?.solution || "",
      className: "text-white",
      style: { backgroundColor: "#A855F7" },
    },
    {
      title: locale === "nl" ? "Het resultaat" : "The Results",
      content: portfolio?.results || "",
      className: "text-white",
      style: { backgroundColor: "#0FAE9B" },
    },
  ]

  const copy =
    locale === "nl"
      ? {
          previousProject: "Vorig project",
          nextProject: "Volgend project",
          allProjects: "ALLE PROJECTEN",
          visitWebsite: "Bezoek website",
          projectDetails: "Projectdetails",
          client: "Klant",
          services: "Diensten",
          website: "Website",
          thumbnailLabel: "Bekijk",
          projectJourney: "Projectverloop",
          slideLabel: "Ga naar slide",
          testimonial: "Klanttestimonial",
          defaultTestimonial:
            "Werken met Amplify was een gamechanger voor ons merk. Hun strategische aanpak en creatieve uitvoering hielpen ons om op een betekenisvolle manier contact te maken met onze doelgroep en echte bedrijfsresultaten te behalen.",
          defaultTestimonialAuthor: `- Marketing Director, ${portfolio?.client || ""}`,
          ctaTitle: "Klaar voor vergelijkbare resultaten?",
          ctaDescription: "Laten we bespreken hoe we jouw merk kunnen helpen zijn marketingdoelen te bereiken.",
          ctaPrimary: "START JE PROJECT",
          ctaSecondary: "ONTDEK DIENSTEN",
        }
      : {
          previousProject: "Previous project",
          nextProject: "Next project",
          allProjects: "ALL PROJECTS",
          visitWebsite: "Visit Website",
          projectDetails: "Project Details",
          client: "Client",
          services: "Services",
          website: "Website",
          thumbnailLabel: "View",
          projectJourney: "Project Journey",
          slideLabel: "Go to slide",
          testimonial: "Client Testimonial",
          defaultTestimonial:
            "Working with Amplify was a game-changer for our brand. Their strategic approach and creative execution helped us connect with our audience in meaningful ways and drive real business results.",
          defaultTestimonialAuthor: `- Marketing Director, ${portfolio?.client || ""}`,
          ctaTitle: "Ready for Similar Results?",
          ctaDescription: "Let's discuss how we can help your brand achieve its marketing goals.",
          ctaPrimary: "START YOUR PROJECT",
          ctaSecondary: "EXPLORE SERVICES",
        }

  // Autoplay functionality
  useEffect(() => {
    // No autoplay, just initialize the carousel
  }, [])

  // Handle manual navigation
  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index)
    setIsPaused(true) // Pause autoplay when manually navigating

    // Resume autoplay after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsPaused(false)
    }, 10000)

    return () => clearTimeout(timeout)
  }, [])

  if (!portfolio) {
    notFound()
  }

  // Get thumbnail images based on portfolio ID
  const getThumbnailImages = () => {
    if (portfolio.id === "1") {
      return [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ultimate%20shape%20project03-U0uhTBShmH9QyU6wbv3zrdGRlVWLFh.png",
          alt: "Ultimate Shape Website Hero",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ultimate%20shape%20project02-J1Y8igURYXtPzzRMqDKxArH4hdFO0h.png",
          alt: "Ultimate Shape Store Page",
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ultimate%20shape%20project04-mqaZiGkxu1jWHgSzW18M5ucH4AC9y1.png",
          alt: "Ultimate Shape Product Packaging",
        },
      ]
    } else if (portfolio.id === "2") {
      return [
        {
          src: "/images/Portfolio/Portfolio%20Fawaka/fawaka-burgers.webp",
          alt: "Fawaka Food",
        },
        {
          src: "/images/Portfolio/Portfolio%20Fawaka/fawaka-delivery.webp",
          alt: "Fawaka Delivery",
        },
        {
          src: "/images/Portfolio/Portfolio%20Fawaka/fawaka-scooter.webp",
          alt: "Fawaka Scooter",
        },
      ]
    } else if (portfolio.id === "3") {
      return [
        {
          src: "/images/Portfolio/Portfolio%20Prysmic/prysmic-homepage.webp",
          alt: "Prysmic Homepage",
        },
        {
          src: "/images/Portfolio/Portfolio%20Prysmic/prysmic-trusted.webp",
          alt: "Prysmic Trusted by Industry Leaders",
        },
        {
          src: "/images/Portfolio/Portfolio%20Prysmic/prysmic-usecases.webp",
          alt: "Prysmic Use Cases",
        },
      ]
    } else if (portfolio.id === "4") {
      return [
        {
          src: "/images/Portfolio/Portfolio%20Rise%20and%20Connect/Riseandconnect01.png",
          alt: "Rise & Connect project detail 1",
        },
        {
          src: "/images/Portfolio/Portfolio%20Rise%20and%20Connect/Riseandconnect02.png",
          alt: "Rise & Connect project detail 2",
        },
        {
          src: "/images/Portfolio/Portfolio%20Rise%20and%20Connect/Riseandconnect03.png",
          alt: "Rise & Connect project detail 3",
        },
        {
          src: "/images/Portfolio/Portfolio%20Rise%20and%20Connect/Riseandconnect04.png",
          alt: "Rise & Connect project detail 4",
        },
        {
          src: "/images/Portfolio/Portfolio%20Rise%20and%20Connect/Riseandconnect05.png",
          alt: "Rise & Connect project detail 5",
        },
      ]
    } else if (portfolio.id === "5") {
      return [
        {
          src: "/images/Portfolio/Portfolio%20SHE/portfolio-she-detail-1.webp",
          alt: "SHE Website redesign overview",
        },
        {
          src: "/images/Portfolio/Portfolio%20SHE/portfolio-she-detail-2.webp",
          alt: "SHE Platform navigation",
        },
        {
          src: "/images/Portfolio/Portfolio%20SHE/portfolio-she-detail-3.webp",
          alt: "SHE Support resources",
        },
        {
          src: "/images/Portfolio/Portfolio%20SHE/portfolio-she-detail-4.webp",
          alt: "SHE Brand collateral",
        },
      ]
    } else if (portfolio.id === "6") {
      return [
        {
          src: "/images/Portfolio/Portfolio%20goldenbeauty/projectdetail1.png",
          alt: "Goldenbeauty brand application",
        },
        {
          src: "/images/Portfolio/Portfolio%20goldenbeauty/projectdetail2.png",
          alt: "Goldenbeauty logo and identity details",
        },
        {
          src: "/images/Portfolio/Portfolio%20goldenbeauty/projectdetail3.png",
          alt: "Goldenbeauty social media rollout",
        },
      ]
    }
    return []
  }

  const baseThumbnailImages = useMemo(() => getThumbnailImages(), [portfolio?.id])

  const uniqueGalleryImages = useMemo(() => {
    const images: { src: string; alt: string }[] = []
    const seen = new Set<string>()

    const addImage = (image?: { src?: string; alt?: string }) => {
      if (!image?.src || seen.has(image.src)) return
      seen.add(image.src)
      images.push({ src: image.src, alt: image.alt || portfolio?.title || "Project image" })
    }

    if (portfolio?.id !== "4" && portfolio?.id !== "5" && portfolio?.id !== "6") {
      addImage(portfolio?.image ? { src: portfolio.image, alt: portfolio?.title || "Project image" } : undefined)
    }
    baseThumbnailImages.forEach(addImage)

    return images
  }, [portfolio?.image, portfolio?.title, baseThumbnailImages])

  useEffect(() => {
    if (uniqueGalleryImages.length > 0) {
      setActiveProjectImage(uniqueGalleryImages[0].src)
      setActiveProjectImageAlt(uniqueGalleryImages[0].alt)
      setProjectThumbnails(uniqueGalleryImages.slice(1))
    } else {
      setActiveProjectImage(null)
      setActiveProjectImageAlt("")
      setProjectThumbnails([])
    }
  }, [uniqueGalleryImages])

  const handleThumbnailClick = useCallback(
    (index: number) => {
      setProjectThumbnails((prev) => {
        if (!activeProjectImage || index < 0 || index >= prev.length) {
          return prev
        }

        const clickedImage = prev[index]
        if (!clickedImage) {
          return prev
        }

        const next = [...prev]
        next[index] = {
          src: activeProjectImage,
          alt: activeProjectImageAlt,
        }

        setActiveProjectImage(clickedImage.src)
        setActiveProjectImageAlt(clickedImage.alt)

        return next
      })
    },
    [activeProjectImage, activeProjectImageAlt]
  )

  return (
    <>
      {/* Hero Image Section - Clean with no overlay */}
      <section className="w-full relative">
        {portfolio.image ? (
          <div
            className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden cursor-pointer"
            onClick={() => openLightbox(portfolio.image, portfolio.title)}
          >
            <Image
              src={portfolio.image || "/placeholder.svg"}
              alt={portfolio.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <div className={`${portfolio.bgColor} w-full h-[60vh] md:h-[70vh]`}></div>
        )}
      </section>

      {/* Navigation Controls - Moved here */}
      <div className="my-8 flex justify-center">
        <div
          className="inline-flex flex-row items-center justify-center"
          style={{ display: "inline-flex", flexDirection: "row", whiteSpace: "nowrap" }}
        >
          <Link
            href={`/portfolio/${Number(portfolio.id) > 1 ? Number(portfolio.id) - 1 : portfolioItems.length}`}
            className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-black hover:bg-pink hover:text-white transition-colors border-2 border-black mr-2 sm:mr-3"
            aria-label={copy.previousProject}
          >
            <ArrowLeft size={16} className="sm:hidden" />
            <ArrowLeft size={20} className="hidden sm:block" />
          </Link>
          <Link
            href="/portfolio"
            className="px-3 sm:px-4 md:px-6 py-1 sm:py-2 bg-black text-white hover:bg-pink transition-colors rounded-full font-bold whitespace-nowrap flex-shrink-0 text-xs sm:text-sm mx-1 sm:mx-2"
          >
            {copy.allProjects}
          </Link>
          <Link
            href={`/portfolio/${Number(portfolio.id) < portfolioItems.length ? Number(portfolio.id) + 1 : 1}`}
            className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-black hover:bg-pink hover:text-white transition-colors border-2 border-black ml-2 sm:ml-3"
            aria-label={copy.nextProject}
          >
            <ArrowRight size={16} className="sm:hidden" />
            <ArrowRight size={20} className="hidden sm:block" />
          </Link>
        </div>
      </div>

      {/* Project Title Section - Moved below the hero image */}
      <section className={`${portfolio.bgColor} ${portfolio.textColor} py-12`}>
        <div className="container">
          <div className="max-w-3xl">
            <div className="text-sm font-medium mb-2">{portfolio.category}</div>
            <h1 className="text-5xl md:text-7xl font-ultra mb-6">{portfolio.title}</h1>
            <p className="text-xl mb-8">{portfolio.description}</p>
            {portfolio.website && (
              <a
                href={portfolio.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-opacity-90 transition-all"
              >
                <span>{copy.visitWebsite}</span>
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-8 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
            <div className="md:col-span-2">
              {activeProjectImage ? (
                <div className="relative w-full aspect-[16/9] rounded-lg mb-4 md:mb-8 overflow-hidden">
                  <Image
                    src={activeProjectImage || "/placeholder.svg"}
                    alt={activeProjectImageAlt || portfolio.title}
                    fill
                    className="object-cover transition-transform duration-300"
                    priority
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-[16/9] bg-gray-200 rounded-lg mb-4 md:mb-8"></div>
              )}
              <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
                {projectThumbnails.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border-2 border-transparent transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black/30 hover:border-black hover:scale-[1.01]"
                    onClick={() => handleThumbnailClick(index)}
                    aria-pressed="false"
                    aria-label={`${copy.thumbnailLabel} ${image.alt}`}
                  >
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-ultra mb-4 md:mb-6">{copy.projectDetails}</h2>

              <div className="mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{copy.client}</h3>
                <p className="text-sm md:text-base">{portfolio.client}</p>
              </div>

              <div className="mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{copy.services}</h3>
                <ul className="text-sm md:text-base space-y-0 md:space-y-1">
                  {portfolio.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>

              {/* Year section removed as requested */}

              {portfolio.website && (
                <div className="mt-6">
                  <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{copy.website}</h3>
                  <a
                    href={portfolio.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-blue-600 hover:underline inline-flex items-center gap-1"
                  >
                    {portfolio.websiteLabel || portfolio.website.replace("https://", "")}
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge, Solution, Results - Autoplay Carousel */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4">
          <h2 className="text-3xl font-ultra mb-8 text-center">{copy.projectJourney}</h2>

          <div className="relative">
            {/* Mobile Carousel */}
            <div className="block md:hidden">
              <div className="relative overflow-hidden">
                {/* Card Container */}
                <div className="relative min-h-[400px]">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={activeSlide}
                      custom={direction}
                      variants={{
                        enter: (direction) => ({
                          x: direction > 0 ? "100%" : "-100%",
                          opacity: 0,
                        }),
                        center: {
                          x: 0,
                          opacity: 1,
                        },
                        exit: (direction) => ({
                          x: direction < 0 ? "100%" : "-100%",
                          opacity: 0,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className={`absolute w-full p-6 rounded-[32px] border-2 border-black shadow-lg ${cards[activeSlide].className}`}
                      style={{
                        ...(cards[activeSlide].style || {}),
                        height: "auto",
                        minHeight: "400px",
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, info) => {
                        const threshold = 50
                        if (info.offset.x < -threshold) {
                          setDirection(1)
                          setActiveSlide((prev) => (prev + 1) % cards.length)
                        } else if (info.offset.x > threshold) {
                          setDirection(-1)
                          setActiveSlide((prev) => (prev - 1 + cards.length) % cards.length)
                        }
                      }}
                    >
                      <h3 className="text-2xl font-ultra mb-4">{cards[activeSlide].title}</h3>
                      <p className="text-base">{cards[activeSlide].content}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-8 pb-4">
                  {cards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > activeSlide ? 1 : -1)
                        setActiveSlide(index)
                      }}
                      className="mx-2 focus:outline-none"
                      aria-label={`${copy.slideLabel} ${index + 1}`}
                      aria-current={activeSlide === index ? "true" : "false"}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          activeSlide === index ? "bg-black border-2 border-white" : "bg-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className={`rounded-[32px] border-2 border-black shadow-lg p-8 ${card.className}`}
                  style={card.style}
                >
                  <h3 className="text-2xl font-ultra mb-4">{card.title}</h3>
                  <p>{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-blue text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-ultra mb-8">{copy.testimonial}</h2>
            <p className="text-xl italic mb-6">"{portfolio.testimonialQuote || copy.defaultTestimonial}"</p>
            <p className="font-bold">{portfolio.testimonialAuthor || copy.defaultTestimonialAuthor}</p>
          </div>
        </div>
      </section>

      {/* CTA Section with Video */}
      <VideoCTA
        title={copy.ctaTitle}
        description={copy.ctaDescription}
        primaryButtonText={copy.ctaPrimary}
        primaryButtonLink="/contact"
        secondaryButtonText={copy.ctaSecondary}
        secondaryButtonLink="/services"
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5084528-uhd_3840_2160_30fps-cHscNuYVDQZ28cDNqYATgpvB7hmXeD.mp4"
      />

      {/* Image Lightbox */}
      {lightboxImage && (
        <ImageLightbox src={lightboxImage || "/placeholder.svg"} alt={lightboxAlt} onClose={closeLightbox} />
      )}
    </>
  )
}
