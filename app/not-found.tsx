import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <OptimizedImage
            src="/images/character-hero.webp"
            alt="404 Character"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>

        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Go Back Home
          </Link>

          <div className="flex justify-center space-x-4 mt-6">
            <Link href="/services" className="text-purple-600 hover:text-purple-800 font-medium">
              Our Services
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/contact" className="text-purple-600 hover:text-purple-800 font-medium">
              Contact Us
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/about" className="text-purple-600 hover:text-purple-800 font-medium">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
