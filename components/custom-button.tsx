"use client"

// Add href to the props type definition
import type React from "react"

type CustomButtonProps = {
  children: React.ReactNode
  color?: "black" | "yellow" | "pink" | "orange" | "blue" | "purple"
  className?: string
  onClick?: () => void
  href?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  size?: "default" | "large"
  ariaLabel?: string
  target?: string
  rel?: string
}

// Update the component to handle href
export function CustomButton({
  children,
  color = "black",
  className = "",
  onClick,
  href,
  type,
  disabled,
  size,
  ariaLabel,
  target,
  rel,
}: CustomButtonProps) {
  const buttonImageSrc =
    color === "yellow"
      ? "/images/button-yellow.webp"
      : color === "pink"
        ? "/images/button-pink.webp"
        : color === "orange"
          ? "/images/Button-orange.webp"
          : color === "black"
            ? "/images/button-black.webp"
            : color === "blue"
              ? "/images/button-yellow.webp" // Using yellow button shape for blue
              : color === "purple"
                ? "/images/button-pink.webp" // Using pink button shape for purple
                : "/images/button-black.webp"

  const ButtonTag = href ? "a" : "button"

  // Determine if this is a service explore button based on className and children
  const isServiceButton = className?.includes("w-auto") && children === "Explore"

  // Apply specific styling for service buttons
  const serviceButtonStyle = isServiceButton
    ? {
        display: "inline-block",
        width: "auto",
        minWidth: "100px", // Set minimum width for explore buttons
        maxWidth: "150px", // Limit maximum width
      }
    : {}

  // Apply color filters only for blue and purple buttons
  let filterValue = "none"
  if (color === "blue") {
    filterValue = "hue-rotate(140deg) saturate(2)" // Blue filter for yellow button
  } else if (color === "purple") {
    filterValue = "hue-rotate(230deg)" // Purple filter for pink button
  }

  return (
    <ButtonTag
      href={href}
      type={!href ? type : undefined}
      disabled={disabled}
      aria-label={ariaLabel}
      target={href ? target : undefined}
      rel={href ? rel : undefined}
      className={`relative inline-flex items-center justify-center font-medium text-white ${size === "large" ? "px-8 py-4 text-lg" : "px-6 py-3"} text-center overflow-hidden ${className}`}
      onClick={onClick}
      style={serviceButtonStyle}
    >
      <img
        src={buttonImageSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{ filter: filterValue }}
      />
      <span className="relative z-10">{children}</span>
    </ButtonTag>
  )
}

export default CustomButton
