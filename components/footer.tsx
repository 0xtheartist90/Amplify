import Image from "next/image"
import { ScrollTopLink } from "./scroll-top-link"
import { memo } from "react"

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12" role="contentinfo" aria-label="Site Footer">
      <div className="container">
        {/* Desktop Footer */}
        <div className="hidden md:grid grid-cols-4 gap-8">
          <div className="col-span-1">
            <ScrollTopLink href="/" className="inline-block mb-4" aria-label="Amplify Home">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20white%20Amplify-WxVUbdYwzsPtaJElv5ALlt62DWt3nT.png"
                alt="Amplify Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </ScrollTopLink>
            <p className="text-sm mb-4">Amplify your brand's voice with our strategic marketing solutions.</p>
          </div>

          <div>
            <h3 className="text-lg font-ultra mb-4">Services</h3>
            <ul className="space-y-2" aria-label="Services Navigation">
              <li>
                <ScrollTopLink href="/services/socials" className="hover:text-pink transition-colors">
                  Socials
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/services/ads" className="hover:text-pink transition-colors">
                  Ads
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/services/branding" className="hover:text-pink transition-colors">
                  Branding
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/services/website" className="hover:text-pink transition-colors">
                  Website
                </ScrollTopLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-ultra mb-4">About</h3>
            <ul className="space-y-2" aria-label="About Navigation">
              <li>
                <ScrollTopLink href="/about#story" className="hover:text-pink transition-colors">
                  Our Story
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/about#leadership" className="hover:text-pink transition-colors">
                  Leadership
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/about#team" className="hover:text-pink transition-colors">
                  Team
                </ScrollTopLink>
              </li>
              <li>
                <ScrollTopLink href="/about#values" className="hover:text-pink transition-colors">
                  Values
                </ScrollTopLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-ultra mb-4">Contact</h3>
            <address className="not-italic">
              <ul className="space-y-2">
                <li>
                  <a href="mailto:hello@amplify.com" className="hover:text-pink transition-colors">
                    hello@amplify.com
                  </a>
                </li>
                <li>
                  <a href="tel:+31 6 29239092" className="hover:text-pink transition-colors">
                    +31 6 29239092
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Mobile Footer - Compact Version */}
        <div className="md:hidden">
          <div className="flex justify-center items-center mb-6">
            <ScrollTopLink href="/" className="inline-block" aria-label="Amplify Home">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20white%20Amplify-WxVUbdYwzsPtaJElv5ALlt62DWt3nT.png"
                alt="Amplify Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </ScrollTopLink>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 text-center">
            <div>
              <h3 className="text-base font-ultra mb-2">Services</h3>
              <ul className="space-y-1 text-sm" aria-label="Services Navigation">
                <li>
                  <ScrollTopLink href="/services/socials" className="hover:text-pink transition-colors">
                    Socials
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/services/ads" className="hover:text-pink transition-colors">
                    Ads
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/services/branding" className="hover:text-pink transition-colors">
                    Branding
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/services/website" className="hover:text-pink transition-colors">
                    Website
                  </ScrollTopLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-ultra mb-2">About</h3>
              <ul className="space-y-1 text-sm" aria-label="About Navigation">
                <li>
                  <ScrollTopLink href="/about#story" className="hover:text-pink transition-colors">
                    Our Story
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/about#team" className="hover:text-pink transition-colors">
                    Team
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/about#values" className="hover:text-pink transition-colors">
                    Values
                  </ScrollTopLink>
                </li>
                <li>
                  <ScrollTopLink href="/portfolio" className="hover:text-pink transition-colors">
                    Portfolio
                  </ScrollTopLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-xs text-center">
            <address className="not-italic">
              <p className="mb-1">
                <a href="mailto:hello@amplify.com" className="hover:text-pink transition-colors">
                  hello@amplify.com
                </a>{" "}
                |{" "}
                <a href="tel:+31 6 29239092" className="hover:text-pink transition-colors">
                  +31 6 29239092
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Amplify. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <ScrollTopLink href="/privacy" className="hover:text-pink transition-colors">
                Privacy Policy
              </ScrollTopLink>
              <ScrollTopLink href="/terms" className="hover:text-pink transition-colors">
                Terms of Service
              </ScrollTopLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer
