"use client"

import { Suspense } from "react"
import { ScrollManager } from "./scroll-manager"

export function SearchParamsWrapper() {
  return (
    <Suspense fallback={null}>
      <ScrollManager />
    </Suspense>
  )
}
