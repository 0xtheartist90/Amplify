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
          workTogether: "Zin om samen te werken?",
          navigation: "Navigatie",
          home: "Home",
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
          workTogether: "Want to work together?",
          navigation: "Navigation",
          home: "Home",
          rights: "All rights reserved.",
          privacy: "Privacy Policy",
          terms: "Terms of Service",
        }

  return (
    <footer className="bg-[#1b1b1b] text-white border-t border-white/15 pt-14 pb-2 overflow-hidden" role="contentinfo" aria-label={copy.footerAria}>
      <div className="container container-bleed">
        {/* Oversized mail call-to-action */}
        <div className="border-b border-white/15 pb-10 mb-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-4">
            {copy.workTogether}
          </p>
          <a
            href="mailto:hello@amplify.com"
            className="group inline-flex items-baseline gap-4 font-ultra leading-none text-[clamp(2rem,6vw,4.5rem)] hover:text-pink transition-colors"
          >
            hello@amplify.com
            <span aria-hidden className="text-[0.5em] transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

        <div className="hidden md:flex justify-between gap-12">
          {/* Brand block with contact folded in */}
          <div className="max-w-[340px] flex flex-col">
            <ScrollTopLink href="/" className="inline-block mb-5" ariaLabel={copy.homeAria}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20white%20Amplify-WxVUbdYwzsPtaJElv5ALlt62DWt3nT.png"
                alt="Amplify Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </ScrollTopLink>
            <p className="text-sm text-white/70 leading-relaxed mb-6">{copy.tagline}</p>
            <address className="not-italic mt-auto space-y-2">
              <a
                href="mailto:hello@amplify.com"
                className="flex items-center gap-2 text-sm font-bold hover:text-pink transition-colors"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                hello@amplify.com
              </a>
              <a
                href="tel:+31629239092"
                className="flex items-center gap-2 text-sm font-bold hover:text-pink transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +31 6 29239092
              </a>
            </address>
          </div>

          {/* Link columns */}
          <div className="flex gap-16 lg:gap-24">
            <div>
              <h3 className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-white/50 mb-6">
                {copy.navigation}
              </h3>
              <ul className="space-y-4 text-xl font-bold" aria-label="Main Navigation">
                <li>
                  <ScrollTopLink href="/" className="hover:text-pink transition-colors">
                    {copy.home}
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/about" className="hover:text-pink transition-colors">
                    {copy.about}
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/portfolio" className="hover:text-pink transition-colors">
                    {copy.portfolio}
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/contact" className="hover:text-pink transition-colors">
                    {copy.contact}
                  </ScrollTopLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-white/50 mb-6">
                {copy.services}
              </h3>
              <ul className="space-y-4 text-xl font-bold" aria-label="Services Navigation">
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

        <div className="border-t-2 border-white/80 mt-10 pt-5 pb-5 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-widest">&copy; {currentYear} Amplify. {copy.rights}</p>
            <div className="flex space-x-6">
              <ScrollTopLink href="/privacy" className="font-mono text-xs uppercase tracking-widest hover:text-pink transition-colors">
                {copy.privacy}
              </ScrollTopLink>
              <ScrollTopLink href="/terms" className="font-mono text-xs uppercase tracking-widest hover:text-pink transition-colors">
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
