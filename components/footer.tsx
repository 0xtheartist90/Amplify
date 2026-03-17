"use client"

import Image from "next/image"
import { memo } from "react"
import { Mail, Phone } from "lucide-react"
import { useLocale } from "@/lib/i18n"
import { ScrollTopLink } from "./scroll-top-link"

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()
  const { locale } = useLocale()

  const copy =
    locale === "nl"
      ? {
          footerAria: "Site footer",
          homeAria: "Amplify Home",
          tagline: "Versterk de stem van je merk met onze strategische marketingoplossingen.",
          services: "Diensten",
          about: "Over",
          contact: "Contact",
          socials: "Social media",
          ads: "Advertising",
          branding: "Branding",
          website: "Website",
          story: "Ons verhaal",
          leadership: "Leiderschap",
          team: "Team",
          values: "Waarden",
          portfolio: "Portfolio",
          rights: "Alle rechten voorbehouden.",
          privacy: "Privacybeleid",
          terms: "Algemene voorwaarden",
        }
      : {
          footerAria: "Site Footer",
          homeAria: "Amplify Home",
          tagline: "Amplify your brand's voice with our strategic marketing solutions.",
          services: "Services",
          about: "About",
          contact: "Contact",
          socials: "Socials",
          ads: "Ads",
          branding: "Branding",
          website: "Website",
          story: "Our Story",
          leadership: "Leadership",
          team: "Team",
          values: "Values",
          portfolio: "Portfolio",
          rights: "All rights reserved.",
          privacy: "Privacy Policy",
          terms: "Terms of Service",
        }

  return (
    <footer className="bg-black text-white py-12" role="contentinfo" aria-label={copy.footerAria}>
      <div className="container">
        <div className="hidden md:grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <ScrollTopLink href="/" className="inline-block mb-4" ariaLabel={copy.homeAria}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20white%20Amplify-WxVUbdYwzsPtaJElv5ALlt62DWt3nT.png"
                alt="Amplify Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </ScrollTopLink>
            <p className="text-sm mb-4">{copy.tagline}</p>
          </div>

          <div>
            <h3 className="text-lg font-ultra mb-4">{copy.services}</h3>
            <ul className="space-y-2" aria-label="Services Navigation">
              <li>
                <ScrollTopLink href="/services/socials" className="hover:text-pink transition-colors">
                  {copy.socials}
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/services/ads" className="hover:text-pink transition-colors">
                  {copy.ads}
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/services/branding" className="hover:text-pink transition-colors">
                  {copy.branding}
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/services/website" className="hover:text-pink transition-colors">
                  {copy.website}
                </ScrollTopLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-ultra mb-4">{copy.about}</h3>
            <ul className="space-y-2" aria-label="About Navigation">
              <li>
                <ScrollTopLink href="/about#story" className="hover:text-pink transition-colors">
                  {copy.story}
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/about#leadership" className="hover:text-pink transition-colors">
                  {copy.leadership}
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/about#team" className="hover:text-pink transition-colors">
                  {copy.team}
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/about#values" className="hover:text-pink transition-colors">
                  {copy.values}
                </ScrollTopLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-ultra mb-4">{copy.contact}</h3>
            <address className="not-italic">
              <ul className="space-y-2">
                <li>
                  <a href="mailto:hello@amplify.com" className="inline-flex items-center gap-2 hover:text-pink transition-colors">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span>hello@amplify.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+31629239092" className="inline-flex items-center gap-2 hover:text-pink transition-colors">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>+31 6 29239092</span>
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex justify-center items-center mb-6">
            <ScrollTopLink href="/" className="inline-block" ariaLabel={copy.homeAria}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20white%20Amplify-WxVUbdYwzsPtaJElv5ALlt62DWt3nT.png"
                alt="Amplify Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </ScrollTopLink>
          </div>

          <div className="text-center mb-6">
            <address className="not-italic">
              <div className="grid grid-cols-2 items-center justify-items-center gap-3 text-sm leading-none max-w-[380px] mx-auto sm:text-base">
                <a
                  href="mailto:hello@amplify.com"
                  className="inline-flex items-center gap-1.5 hover:text-pink transition-colors whitespace-nowrap"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  <span>hello@amplify.com</span>
                </a>
                <a
                  href="tel:+31629239092"
                  className="inline-flex items-center gap-1.5 hover:text-pink transition-colors whitespace-nowrap"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  <span>+31 6 29239092</span>
                </a>
              </div>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-center">
            <div>
              <h3 className="text-base font-ultra mb-2">{copy.services}</h3>
              <ul className="space-y-1 text-sm" aria-label="Services Navigation">
                <li>
                  <ScrollTopLink href="/services/socials" className="hover:text-pink transition-colors">
                    {copy.socials}
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/services/ads" className="hover:text-pink transition-colors">
                    {copy.ads}
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/services/branding" className="hover:text-pink transition-colors">
                    {copy.branding}
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/services/website" className="hover:text-pink transition-colors">
                    {copy.website}
                  </ScrollTopLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-ultra mb-2">{copy.about}</h3>
              <ul className="space-y-1 text-sm" aria-label="About Navigation">
                <li>
                  <ScrollTopLink href="/about#story" className="hover:text-pink transition-colors">
                    {copy.story}
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/about#team" className="hover:text-pink transition-colors">
                    {copy.team}
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/about#values" className="hover:text-pink transition-colors">
                    {copy.values}
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/portfolio" className="hover:text-pink transition-colors">
                    {copy.portfolio}
                  </ScrollTopLink>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Amplify. {copy.rights}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <ScrollTopLink href="/privacy" className="hover:text-pink transition-colors">
                {copy.privacy}
              </ScrollTopLink>
              <ScrollTopLink href="/terms" className="hover:text-pink transition-colors">
                {copy.terms}
              </ScrollTopLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer
