"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useLocale } from "@/lib/i18n"

interface ServiceBannerProps {
  currentService: "website" | "branding" | "socials" | "ads"
}

export default function ServiceBanner({ currentService }: ServiceBannerProps) {
  const pathname = usePathname()
  const { locale, localizeHref } = useLocale()

  const services = [
    {
      name: locale === "nl" ? "Socials" : "Socials",
      path: "/services/socials",
      color: "bg-[#f44976]",
      hoverColor: "hover:bg-[#f44976]",
      textColor: "text-[#f44976]",
      active: currentService === "socials",
      width: "w-[140px]",
    },
    {
      name: locale === "nl" ? "Advertising" : "Advertising",
      path: "/services/ads",
      color: "bg-yellow",
      hoverColor: "hover:bg-yellow",
      textColor: "text-yellow",
      active: currentService === "ads",
      width: "w-[140px]",
    },
    {
      name: "Branding",
      path: "/services/branding",
      color: "bg-blue",
      hoverColor: "hover:bg-blue",
      textColor: "text-blue",
      active: currentService === "branding",
      width: "w-[140px]",
    },
    {
      name: "Website",
      path: "/services/website",
      color: "bg-purple",
      hoverColor: "hover:bg-purple",
      textColor: "text-purple",
      active: currentService === "website",
      width: "w-[140px]",
    },
  ]

  return (
    <section className="py-4 md:py-6 bg-white border-b border-gray-200 sticky top-0 z-20 shadow-md">
      <div className="container px-2 md:px-4 mx-auto">
        <div className="flex justify-center gap-2 md:gap-6 overflow-x-auto pb-1 whitespace-nowrap text-center">
          {services.map((service) => (
            <Link
              key={service.path}
              href={localizeHref(service.path)}
              className={cn(
                `${service.width} h-[36px] rounded-full font-body text-xs md:text-base transition-all transform hover:scale-105 border-2 whitespace-nowrap flex items-center justify-center`,
                service.active
                  ? `${service.color} text-white border-transparent font-bold`
                  : `bg-white ${service.textColor} border-current ${service.hoverColor} hover:text-white`,
              )}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
