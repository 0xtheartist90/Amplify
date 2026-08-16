import type React from "react"
import type { Metadata, Viewport } from "next"
import { AR_One_Sans, Knewave } from "next/font/google"
import { cookies } from "next/headers"
import "./globals.css"
import "lenis/dist/lenis.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ForceScrollTop } from "@/components/force-scroll-top"
import { LoadingScreen } from "@/components/loading-screen"
import { SearchParamsWrapper } from "@/components/search-params-wrapper"
import { DeviceDetector } from "@/components/device-detector"
import Script from "next/script"
import { Suspense } from "react"
import { LocaleProvider, type Locale } from "@/lib/i18n"
import { SmoothScroll } from "@/components/smooth-scroll"

// AR One Sans font for body text
const arOneSans = AR_One_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ar-one-sans",
  display: "swap", // Improve font loading performance
})

const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-knewave",
  display: "swap",
})
export const metadata: Metadata = {
  title: "Amplify Your Brand",
  description: "Amplify your brand with our social media, advertising, branding, and website services.",
  generator: "Next.js",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff5a79",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get("NEXT_LOCALE")?.value
  const initialLocale: Locale = localeCookie === "nl" ? "nl" : "en"

  return (
    <html lang={initialLocale} className="overflow-x-hidden">
      <head>
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20black%20Amplify-kTsLQ4RAwj0NiiWS8ZonpCci5I9q4c.png"
          as="image"
          fetchPriority="high"
        />

        {/* DNS prefetch for external resources */}
        <link rel="preconnect" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
      </head>
      <body className={`${arOneSans.variable} ${knewave.variable} font-sans w-full`}>
        <LocaleProvider initialLocale={initialLocale}>
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

          <SmoothScroll>
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <LoadingScreen />
              <ForceScrollTop />
              <Header />
              <SearchParamsWrapper />
              <DeviceDetector />
              <main className="overflow-x-hidden w-full">{children}</main>
              <Footer />
            </Suspense>
          </SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  )
}
