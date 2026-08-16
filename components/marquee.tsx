import { Fragment } from "react"

// Full-bleed scrolling word strip — black bar, ink borders, Ultra type.
// Items are duplicated 4x because the keyframe shifts -50%.
export function Marquee({ items, className = "" }: { items: string[]; className?: string }) {
  const row = [...items, ...items, ...items, ...items]
  return (
    <div
      className={`overflow-hidden border-y-2 border-[var(--ink)] bg-black py-3 md:py-4 ${className}`}
      aria-hidden
    >
      <div className="marquee-track items-center gap-6 md:gap-10 pr-6 md:pr-10">
        {row.map((item, i) => (
          <Fragment key={i}>
            <span className="font-ultra whitespace-nowrap text-xl md:text-3xl uppercase text-white">{item}</span>
            <svg viewBox="0 0 24 24" fill="var(--yellow)" className="size-4 shrink-0 md:size-6" aria-hidden>
              <path d="M12 1l2.4 8.6L23 12l-8.6 2.4L12 23l-2.4-8.6L1 12l8.6-2.4Z" />
            </svg>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
