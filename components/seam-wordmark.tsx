"use client"

import { motion } from "framer-motion"

// Giant Knewave "Amplify" straddling the seam between two sections,
// replacing the version that used to be baked into the background images.
//
// Each seam is built from TWO halves, one rendered inside each adjoining
// section (place it right after the .section-background div):
//   - half="top"    → sits at the section's bottom edge, upper half visible
//   - half="bottom" → sits at the section's top edge, lower half visible
// The section's own `overflow: hidden` clips the other half, and z-0 keeps
// the word above the background but behind the section content.
// On reveal, the top half slides in from the left and the bottom half from
// the right, settling into one aligned word.
export function SeamWordmark({
  half,
  color,
  className = "",
}: {
  half: "top" | "bottom"
  color: string
  className?: string
}) {
  const isTop = half === "top"
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-0 select-none ${
        isTop ? "bottom-0 translate-y-1/2" : "top-0 -translate-y-1/2"
      } ${className}`}
      style={{ height: "26vw" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          initial={{ x: isTop ? "-10%" : "10%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="whitespace-nowrap leading-none"
          style={{ rotate: -3, color, fontFamily: "var(--font-knewave)", fontSize: "25vw" }}
        >
          Amplify
        </motion.span>
      </div>
    </div>
  )
}
