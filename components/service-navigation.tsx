"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import { useEffect, useState, useCallback, memo } from "react"

interface ServiceNavigationProps {
  className?: string
  showBackButton?: boolean
  hideOnMobile?: boolean
}

const ServiceNavigation = memo(function ServiceNavigation({
  className,
  showBackButton = false,
  hideOnMobile = false,
}: ServiceNavigationProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Enhanced debounced resize handler to detect both mobile and tablet
  const debouncedCheckViewport = useCallback(() => {
    let timeoutId: NodeJS.Timeout | null = null

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        const width = window.innerWidth
        setIsMobile(width < 768)
        setIsTablet(width >= 768 && width < 1024)
        timeoutId = null
      }, 100) // 100ms debounce
    }
  }, [])

  // Check viewport size
  useEffect(() => {
    const checkViewport = debouncedCheckViewport()

    // Initial check
    checkViewport()

    // Add event listener for resize
    window.addEventListener("resize", checkViewport)

    // Cleanup
    return () => window.removeEventListener("resize", checkViewport)
  }, [debouncedCheckViewport])

  // Always show navigation on service detail pages, even on mobile
  // We'll check if we're on a service detail page by checking the pathname
  const isServiceDetailPage =
    pathname.includes("/services/") &&
    (pathname.includes("/socials") ||
      pathname.includes("/ads") ||
      pathname.includes("/branding") ||
      pathname.includes("/website"))

  // Only hide on mobile if hideOnMobile is true AND we're not on a service detail page
  if (isMobile && hideOnMobile && !isServiceDetailPage) {
    return null
  }

  const services = [
    { name: "Socials", path: "/services/socials", color: "bg-pink" },
    { name: "Ads", path: "/services/ads", color: "bg-yellow" },
    { name: "Branding", path: "/services/branding", color: "bg-blue" },
    { name: "Website", path: "/services/website", color: "bg-purple" },
  ]

  // For mobile, we'll use a completely different layout structure
  if (isMobile) {
    return (
      <nav
        className={cn("py-4 bg-white relative z-[100] mt-4", showBackButton ? "mb-4" : "", className)}
        aria-label="Service Navigation"
      >
        {/* Mobile layout with stacked elements */}
        <div className="container px-4">
          {/* Back button row - only if showBackButton is true */}
          {showBackButton && (
            <div className="flex justify-start mb-4">
              <Link
                href="/services"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-pink hover:text-white transition-colors shadow-md"
                aria-label="Back to services"
              >
                <ArrowLeft size={20} />
              </Link>
            </div>
          )}

          {/* Service tabs row - always shown */}
          <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto no-scrollbar" role="tablist">
            {services.map((service) => {
              const isActive = pathname === service.path

              return (
                <Link
                  key={service.path}
                  href={service.path}
                  className={cn(
                    "px-3 py-1 rounded-full font-body text-xs whitespace-nowrap transition-all transform hover:scale-105 flex-shrink-0",
                    isActive ? `${service.color} text-white` : "bg-gray-100 hover:bg-gray-200",
                  )}
                  style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${service.name.toLowerCase()}-panel`}
                >
                  {service.name}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    )
  }

  // Desktop and tablet layout
  return (
    <nav
      className={cn("py-3 lg:py-4 bg-white relative z-[100]", showBackButton ? "mb-4 lg:mb-6" : "", className)}
      aria-label="Service Navigation"
    >
      <div className="container px-4">
        {/* Container with space-between to position back button and filters */}
        <div className="flex flex-row items-center justify-between">
          {/* Back Button Container - Always on the left with proper spacing */}
          <div className="flex-shrink-0 mr-4">
            {showBackButton ? (
              <Link
                href="/services"
                className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-pink transition-colors shadow-md"
                aria-label="Back to services"
              >
                <ArrowLeft size={20} />
              </Link>
            ) : (
              <div className="w-0" aria-hidden="true"></div> /* Empty placeholder when no back button */
            )}
          </div>

          {/* Service Navigation Links - Centered with responsive adjustments */}
          <div
            className={cn(
              "flex flex-row items-center justify-center gap-4 overflow-x-auto no-scrollbar",
              showBackButton ? "" : "mx-auto",
            )}
            role="tablist"
          >
            {services.map((service) => {
              const isActive = pathname === service.path

              return (
                <Link
                  key={service.path}
                  href={service.path}
                  className={cn(
                    "px-4 py-1 rounded-full font-body text-sm whitespace-nowrap transition-all transform hover:scale-105 flex-shrink-0",
                    isActive ? `${service.color} text-white` : "bg-gray-100 hover:bg-gray-200",
                  )}
                  style={{ whiteSpace: "nowrap", flexShrink: 0 }}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${service.name.toLowerCase()}-panel`}
                >
                  {service.name}
                </Link>
              )
            })}
          </div>

          {/* Empty div to balance the layout - adjusted for responsive design */}
          <div className="flex-shrink-0 w-10 lg:w-14" aria-hidden="true"></div>
        </div>
      </div>
    </nav>
  )
})

export default ServiceNavigation
export { ServiceNavigation }
