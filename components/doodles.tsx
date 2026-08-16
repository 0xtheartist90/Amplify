import type { CSSProperties, ReactNode } from "react"

// Hand-drawn accents shared across the site. All decorative (aria-hidden),
// colors come in via className (text-*) or the `color` prop.

// Squiggly hand-drawn underline — absolutely positioned under the parent,
// so the parent needs `relative inline-block`.
export function ScribbleUnderline({ color = "var(--yellow)", className = "" }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 220 14" className={`absolute left-0 -bottom-3 w-[80%] ${className}`} aria-hidden>
      <path
        d="M3 10C25 2 45 12 68 7s47-4 72 1 50 3 74-3"
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Filled 4-point sparkle — scatter around headings, desktop-only.
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={`pointer-events-none absolute ${className}`} aria-hidden>
      <path d="M12 1l2.4 8.6L23 12l-8.6 2.4L12 23l-2.4-8.6L1 12l8.6-2.4Z" />
    </svg>
  )
}

// Sketchy marker-pen squiggle arrow.
export function SquiggleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden
    >
      <path d="M8 12c14 2 26 10 30 22 3 9 1 16-4 22" />
      <path d="M26 50l8 8 10-4" />
    </svg>
  )
}

// Round sticker with text spinning on a circular path — the "quality stamp".
// Give it a size via className (e.g. size-28 md:size-36) plus position/rotate.
export function StampBadge({
  text,
  center,
  bg = "var(--yellow)",
  className = "",
  style,
}: {
  text: string
  center: ReactNode
  bg?: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`pointer-events-none absolute grid place-items-center rounded-full border-2 border-[var(--ink)] shadow-[3px_3px_0_0_var(--ink)] ${className}`}
      style={{ backgroundColor: bg, ...style }}
    >
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-[spin_26s_linear_infinite]" aria-hidden>
        <defs>
          <path id="stamp-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" fill="none" />
        </defs>
        <text className="fill-black text-[11px] font-extrabold uppercase">
          <textPath href="#stamp-ring" textLength="276" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="relative text-5xl">{center}</span>
    </div>
  )
}

// Hand-drawn starburst sticker — ink-outlined 12-point star with a short
// shouty label. Position with absolute offsets + rotate; text counter-rotates.
const BURST_POINTS =
  "100,50 86.7,59.8 93.3,75 76.9,76.9 75,93.3 59.8,86.7 50,100 40.2,86.7 25,93.3 23.1,76.9 6.7,75 13.3,59.8 0,50 13.3,40.2 6.7,25 23.1,23.1 25,6.7 40.2,13.3 50,0 59.8,13.3 75,6.7 76.9,23.1 93.3,25 86.7,40.2"

export function Burst({
  children,
  fill = "var(--yellow)",
  className = "",
}: {
  children: ReactNode
  fill?: string
  className?: string
}) {
  return (
    <div className={`pointer-events-none absolute grid place-items-center ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <polygon points={BURST_POINTS} fill={fill} stroke="var(--ink)" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
      <span className="relative -rotate-6 px-4 text-center text-[11px] leading-tight font-extrabold uppercase text-black">
        {children}
      </span>
    </div>
  )
}
