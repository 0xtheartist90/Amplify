"use client"

import type { ReactNode } from "react"
import { ReactLenis } from "lenis/react"

// Lenis smooth scrolling for the whole page.
// anchors.offset accounts for the sticky header so in-page anchors land correctly.
export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        anchors: { offset: -100 },
      }}
    >
      {children}
    </ReactLenis>
  )
}
