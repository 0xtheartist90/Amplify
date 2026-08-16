"use client"

import type React from "react"
import { useLocale } from "@/lib/i18n"

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

// Sticker-style buttons: ink outline + hard offset shadow; hovering presses
// the button INTO its shadow. Replaces the old brush-image buttons.
const COLOR_STYLES: Record<NonNullable<CustomButtonProps["color"]>, { backgroundColor: string; color: string }> = {
  black: { backgroundColor: "#1b1b1b", color: "#ffffff" },
  pink: { backgroundColor: "#f44976", color: "#ffffff" },
  yellow: { backgroundColor: "#fec530", color: "#1b1b1b" },
  orange: { backgroundColor: "#ff8a2b", color: "#1b1b1b" },
  blue: { backgroundColor: "#7dd3f7", color: "#1b1b1b" },
  purple: { backgroundColor: "#c27ae6", color: "#ffffff" },
}

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
  const { localizeHref } = useLocale()
  const localizedHref = href ? localizeHref(href) : undefined

  const ButtonTag = href ? "a" : "button"

  return (
    <ButtonTag
      href={localizedHref}
      type={!href ? type : undefined}
      disabled={disabled}
      aria-label={ariaLabel}
      target={localizedHref ? target : undefined}
      rel={localizedHref ? rel : undefined}
      className={`inline-flex items-center justify-center rounded-[10px] border-2 border-black font-bold uppercase tracking-wider text-center shadow-[3px_3px_0_0_var(--ink)] transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_0_var(--ink)] focus:outline-none focus-visible:ring-4 focus-visible:ring-black/30 ${
        size === "large" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm"
      } ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`}
      onClick={onClick}
      style={COLOR_STYLES[color] ?? COLOR_STYLES.black}
    >
      {children}
    </ButtonTag>
  )
}

export default CustomButton
