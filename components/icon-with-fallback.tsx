"use client"

import { useState } from "react"
import Image from "next/image"

interface IconWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fallbackColor?: string
}

export default function IconWithFallback({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackColor = "#f472b6", // Default to pink
}: IconWithFallbackProps) {
  const [error, setError] = useState(false)

  // If the image fails to load, show a colored div with the first letter of the alt text
  if (error) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ width, height, backgroundColor: fallbackColor, borderRadius: "50%" }}
      >
        <span className="text-white font-bold">{alt.charAt(0)}</span>
      </div>
    )
  }

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
      onError={() => setError(true)}
    />
  )
}
