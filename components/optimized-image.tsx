"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  loading?: "eager" | "lazy"
  onLoad?: () => void
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  loading = "lazy",
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // Check if the image is already cached
    if (imageRef.current?.complete) {
      setIsLoaded(true)
      onLoad?.()
    }
  }, [onLoad])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  return (
    <div className={`relative ${className}`} style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.3s ease" }}>
      <Image
        ref={imageRef}
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={loading}
        onLoad={handleLoad}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          transform: "translateZ(0)",
          willChange: "transform, opacity",
        }}
      />
    </div>
  )
}
