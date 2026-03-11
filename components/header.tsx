"use client"

import { useState, useEffect, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { CustomButton } from "./custom-button"
import { ScrollTopLink } from "./scroll-top-link"
import { type Locale, useLocale } from "@/lib/i18n"

const SERVICE_LINKS = [
  { href: "/services/socials", label: "Social Media" },
  { href: "/services/ads", label: "Advertising" },
  { href: "/services/branding", label: "Branding" },
  { href: "/services/website", label: "Website" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { locale, switchLocalePath } = useLocale()

  const copy =
    locale === "nl"
      ? {
          home: "Home",
          about: "Over",
          services: "Diensten",
          portfolio: "Portfolio",
          contact: "Contact",
          socialMedia: "Social media",
          advertising: "Advertising",
          branding: "Branding",
          website: "Website",
          language: "Taal",
          openMenu: "Menu openen",
          closeMenu: "Menu sluiten",
          homeAria: "Amplify Home",
        }
      : {
          home: "Home",
          about: "About",
          services: "Services",
          portfolio: "Portfolio",
          contact: "Contact Us",
          socialMedia: "Social Media",
          advertising: "Advertising",
          branding: "Branding",
          website: "Website",
          language: "Language",
          openMenu: "Open menu",
          closeMenu: "Close menu",
          homeAria: "Amplify Home",
        }

  const normalizedPath =
    pathname?.replace(/^\/(en|nl)(?=\/|$)/, "") === ""
      ? "/"
      : pathname?.replace(/^\/(en|nl)(?=\/|$)/, "") || "/"

  const isActive = (href: string) => normalizedPath === href
  const isServicesActive = normalizedPath?.startsWith("/services")
  const handleLanguageChange = (nextLocale: Locale) => {
    router.push(switchLocalePath(nextLocale))
    setIsMenuOpen(false)
  }

  // Debounced resize handler
  const debouncedCheckMobile = useCallback(() => {
    let timeoutId: NodeJS.Timeout | null = null

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768)
        timeoutId = null
      }, 100) // 100ms debounce
    }
  }, [])

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = debouncedCheckMobile()

    // Initial check
    checkMobile()

    // Add event listener for resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [debouncedCheckMobile])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => window.removeEventListener("keydown", handleEscKey)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header className="bg-white sticky top-0 z-[9999] shadow-sm h-[54px] md:h-[72px]">
      <div className="container h-full">
        <div className="relative flex items-center justify-between h-full">
          <div className="md:hidden absolute left-4 top-1/2 -translate-y-1/2">
            <label className="flex items-center text-sm font-medium">
              <select
                value={locale}
                onChange={(event) => handleLanguageChange(event.target.value as Locale)}
                className="rounded-full border-2 border-black bg-white px-3 py-1 text-sm"
                aria-label={copy.language}
              >
                <option value="en">🇬🇧</option>
                <option value="nl">🇳🇱</option>
              </select>
            </label>
          </div>

          {/* Logo, absolutely centered on mobile */}
          <ScrollTopLink
            href="/"
            className="flex items-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            ariaLabel={copy.homeAria}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20black%20Amplify-kTsLQ4RAwj0NiiWS8ZonpCci5I9q4c.png"
              alt="Amplify Logo"
              width={150}
              height={50}
              style={{ height: "40px", width: "auto" }}
              priority
            />
          </ScrollTopLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center ml-auto" aria-label="Main Navigation">
            <ScrollTopLink
              href="/"
              className={`font-medium transition-colors ${isActive("/") ? "text-pink" : "hover:text-pink"}`}
            >
              {copy.home}
            </ScrollTopLink>
            <ScrollTopLink
              href="/about"
              className={`font-medium transition-colors ${isActive("/about") ? "text-pink" : "hover:text-pink"}`}
            >
              {copy.about}
            </ScrollTopLink>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <ScrollTopLink
                href="/services/socials"
                className={`font-medium transition-colors flex items-center gap-1 ${
                  isServicesActive ? "text-pink" : "hover:text-pink"
                }`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
              >
                {copy.services}
                <span className={`transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : "rotate-0"}`}>
                  ▾
                </span>
              </ScrollTopLink>
              {isServicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-3">
                  <div className="w-52 rounded-2xl border-2 border-black bg-white shadow-xl p-3 flex flex-col gap-1">
                    {SERVICE_LINKS.map((link) => (
                      <ScrollTopLink
                        key={link.href}
                        href={link.href}
                        className={`px-3 py-2 rounded-xl transition-colors ${
                          isActive(link.href) ? "bg-pink-100 text-pink" : "hover:bg-pink-100"
                        }`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        {link.href === "/services/socials"
                          ? copy.socialMedia
                          : link.href === "/services/ads"
                            ? copy.advertising
                            : link.href === "/services/branding"
                              ? copy.branding
                              : copy.website}
                      </ScrollTopLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <ScrollTopLink
              href="/portfolio"
              className={`font-medium transition-colors ${isActive("/portfolio") ? "text-pink" : "hover:text-pink"}`}
            >
              {copy.portfolio}
            </ScrollTopLink>
            <label className="flex items-center text-sm font-medium">
              <select
                value={locale}
                onChange={(event) => handleLanguageChange(event.target.value as Locale)}
                className="rounded-full border-2 border-black bg-white px-3 py-1 text-sm"
                aria-label={copy.language}
              >
                <option value="en">🇬🇧</option>
                <option value="nl">🇳🇱</option>
              </select>
            </label>
            <CustomButton href="/contact" color="orange">
              {copy.contact}
            </CustomButton>
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button
              className="text-black flex items-center justify-center p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? copy.closeMenu : copy.openMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50"
          role="navigation"
          aria-label="Mobile Navigation"
        >
          <div className="container py-4 flex flex-col space-y-4">
            <ScrollTopLink
              href="/"
              className={`font-medium transition-colors ${isActive("/") ? "text-pink" : "hover:text-pink"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {copy.home}
            </ScrollTopLink>
            <ScrollTopLink
              href="/about"
              className={`font-medium transition-colors ${isActive("/about") ? "text-pink" : "hover:text-pink"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {copy.about}
            </ScrollTopLink>
            <div className="space-y-2">
              <ScrollTopLink
                href="/services/socials"
                className={`font-medium transition-colors ${isServicesActive ? "text-pink" : "hover:text-pink"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {copy.services}
              </ScrollTopLink>
              <div className="pl-4 flex flex-col space-y-1 text-sm text-gray-700">
                {SERVICE_LINKS.map((link) => (
                  <ScrollTopLink
                    key={link.href}
                    href={link.href}
                    className={`transition-colors ${isActive(link.href) ? "text-pink" : "hover:text-pink"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.href === "/services/socials"
                      ? copy.socialMedia
                      : link.href === "/services/ads"
                        ? copy.advertising
                        : link.href === "/services/branding"
                          ? copy.branding
                          : copy.website}
                  </ScrollTopLink>
                ))}
              </div>
            </div>
            <ScrollTopLink
              href="/portfolio"
              className={`font-medium transition-colors ${isActive("/portfolio") ? "text-pink" : "hover:text-pink"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {copy.portfolio}
            </ScrollTopLink>
            <div onClick={() => setIsMenuOpen(false)}>
              <CustomButton href="/contact" color="orange">
                {copy.contact}
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
