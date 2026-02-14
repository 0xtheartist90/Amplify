import type React from "react"
import type { Metadata, Viewport } from "next"
import { AR_One_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ForceScrollTop } from "@/components/force-scroll-top"
import { LoadingScreen } from "@/components/loading-screen"
import { SearchParamsWrapper } from "@/components/search-params-wrapper"
import { DeviceDetector } from "@/components/device-detector"
import Script from "next/script"
import { Suspense } from "react"

// AR One Sans font for body text
const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ar-one-sans",
  display: "swap", // Improve font loading performance
})

export const metadata: Metadata = {
  title: "Amplify | Your Brand's Voice",
  description: "Amplify your brand with our social media, advertising, branding, and website services.",
  generator: 'Next.js'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff5a79",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Load ULTRA font for headings */}
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/ultra" />

        {/* Load Knewave font for hero title */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Knewave&display=swap" />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HomeHeroBackground-UOejpObMcS0S9QjA1oYNDn4YFy0kw1.png"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HomeHeroBackgroundMobile-QjtFWxUDvymqT1vAbLEqWm5QGjX5zp.png"
          as="image"
          fetchPriority="high"
        />
        <link rel="preload" href="/images/HomeSection2.png" as="image" />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HomeSection3-qQZUNIFQDUN9v7V2GlfOylCo6U7bAb.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HomeSection4-RcIYcGN2RfJInWyA3DHBh6S9HRcAjn.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepagehero%20character-x0fe4ouHiYTPqJBvDGtpbGMux1f9is.png"
          as="image"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Button%20pink-76zetW5rz2pRhoqjwHVojX1P3LwVax.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Button%20yellow-C2YKIneALpxIcMO52Gtk8BiOQoXhdh.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Button%20black-s6DdxXmv7hebllq57tOoNQmMR2Y6Wl.png"
          as="image"
        />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20black%20Amplify-kTsLQ4RAwj0NiiWS8ZonpCci5I9q4c.png"
          as="image"
          fetchPriority="high"
        />
        {/* Add preload for the services hero character */}
        <link rel="preload" href="/images/services-hero-character.png" as="image" />

        {/* Add preload links for the new background images */}
        <link rel="preload" href="/images/Homesection2BackgroundMobile.png" as="image" type="image/png" />
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homesection2BackgroundMobile-1-lOaNofO9vYDfLCGnEWkoB2zkCcfi7N.png"
          as="image"
          type="image/png"
        />

        <link rel="preload" href="/images/herohomecharacter.png" as="image" />
        <link rel="preload" href="/images/homecharacter2ndsection.png" as="image" />
        <link rel="preload" href="/images/homecharacter3rdsection.png" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
      </head>
      <body className={`${arOneSans.variable} font-sans overflow-x-hidden w-full`}>
        <Script id="force-scroll-top" strategy="afterInteractive">
          {`
            // Force scroll to top on page load
            window.addEventListener('load', function() {
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            });
            
            // Force scroll to top on navigation
            if ('scrollRestoration' in history) {
              history.scrollRestoration = 'manual';
            }
            
            // Handle browser back/forward buttons
            window.addEventListener('popstate', function() {
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            });
          `}
        </Script>

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          {/* Loading screen */}
          <LoadingScreen />

          {/* Force scroll to top */}
          <ForceScrollTop />

          <Header />
          <SearchParamsWrapper />
          <DeviceDetector />
          <main className="overflow-x-hidden w-full">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
