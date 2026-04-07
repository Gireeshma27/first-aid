"use client"

import { useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { ShieldCheck, Award, CheckCircle } from "lucide-react"

/**
 * Infinite scrolling ticker showing trust credentials.
 * Each "tile" is a horizontal chip with icon + text,
 * all flowing left continuously in a marquee.
 */

const items = [
  {
    type: "icon" as const,
    icon: ShieldCheck,
    label: "ASQA Regulated",
    sublabel: "Quality Assured Training",
  },
  {
    type: "icon" as const,
    icon: Award,
    label: "In Partnership",
    sublabel: "Healthcorp RTO 91222",
  },
  {
    type: "image" as const,
    icon: null,
    label: "Nationally Recognised Training",
    sublabel: "Government Recognised Provider",
  },
]

// Repeat enough times so the strip is always wider than the viewport
const repeated = [...items, ...items, ...items, ...items, ...items, ...items]

export function TrustBadgesStrip() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const animRef = useRef<number>(0)
  const speed = 0.6

  const animate = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    posRef.current -= speed
    const setW = track.scrollWidth / 2
    if (Math.abs(posRef.current) >= setW) posRef.current += setW
    track.style.transform = `translate3d(${posRef.current}px, 0, 0)`
    animRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [animate])

  return (
    <section className="relative overflow-hidden bg-white border-y border-gray-100">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

      <div className="py-5 md:py-6">
        <div
          ref={trackRef}
          className="flex items-center gap-10 md:gap-14 will-change-transform"
          style={{ width: "max-content" }}
        >
          {repeated.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 flex-shrink-0 select-none"
            >
              {/* Icon / image */}
              <div className="w-10 h-10 rounded-lg bg-[#3b3f69]/[0.07] flex items-center justify-center flex-shrink-0">
                {item.type === "image" ? (
                  <Image
                    src="/images/nationally-recognised.svg"
                    alt="NRT"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                ) : item.icon ? (
                  <item.icon className="w-5 h-5 text-[#3b3f69]" />
                ) : null}
              </div>

              {/* Text */}
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-bold text-[#1a1a2e] whitespace-nowrap">
                  {item.label}
                </span>
                <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap mt-0.5">
                  {item.sublabel}
                </span>
              </div>

              {/* Verified tick */}
              <CheckCircle className="w-4 h-4 text-[#ca1254] flex-shrink-0 opacity-60" />

              {/* Separator dot */}
              <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0 ml-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
