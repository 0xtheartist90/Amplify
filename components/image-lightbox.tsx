"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"

interface ImageLightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  // Close on escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [onClose])

  // Prevent scrolling when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>
        <div className="relative h-[80vh] w-auto max-w-[90vw]">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 80vw"
            priority
          />
        </div>
      </div>
    </div>
  )
}
