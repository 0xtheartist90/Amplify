"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { CustomButton } from "./custom-button"
import { ScrollTopLink } from "./scroll-top-link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

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
        <div className="flex flex-row justify-between items-center h-full">
          {/* Logo - left aligned */}
          <div className="flex items-center h-full">
            <ScrollTopLink href="/" className="flex items-center" aria-label="Amplify Home">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20black%20Amplify-kTsLQ4RAwj0NiiWS8ZonpCci5I9q4c.png"
                alt="Amplify Logo"
                width={150}
                height={50}
                style={{ height: "40px", width: "auto" }}
                priority
              />
            </ScrollTopLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center" aria-label="Main Navigation">
            <ScrollTopLink href="/" className="font-medium hover:text-pink transition-colors">
              Home
            </ScrollTopLink>
            <ScrollTopLink href="/about" className="font-medium hover:text-pink transition-colors">
              About
            </ScrollTopLink>
            <ScrollTopLink href="/services" className="font-medium hover:text-pink transition-colors">
              Services
            </ScrollTopLink>
            <ScrollTopLink href="/portfolio" className="font-medium hover:text-pink transition-colors">
              Portfolio
            </ScrollTopLink>
            <CustomButton href="/contact" color="orange">
              Contact Us
            </CustomButton>
          </nav>

          {/* Mobile Menu Button - explicitly on the right */}
          <div className="md:hidden flex items-center h-full">
            <button
              className="text-black flex items-center justify-center p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
              className="font-medium hover:text-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </ScrollTopLink>
            <ScrollTopLink
              href="/about"
              className="font-medium hover:text-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </ScrollTopLink>
            <ScrollTopLink
              href="/services"
              className="font-medium hover:text-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </ScrollTopLink>
            <ScrollTopLink
              href="/portfolio"
              className="font-medium hover:text-pink transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </ScrollTopLink>
            <div onClick={() => setIsMenuOpen(false)}>
              <CustomButton href="/contact" color="orange">
                Contact Us
              </CustomButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
