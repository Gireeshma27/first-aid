"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"

interface EventType {
  title: string
  image: string
  description: string
}

interface EventCarouselProps {
  events: EventType[]
}

export function EventCarousel({ events }: EventCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const animRef = useRef<number>(0)
  const speedRef = useRef(0.6)

  // Auto-scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let lastTime = 0
    const step = (time: number) => {
      if (lastTime) {
        const delta = time - lastTime
        if (!isPaused && !isDragging) {
          track.scrollLeft += speedRef.current * (delta / 16)
          // Seamless loop: when scrolled past the duplicate set, jump back
          const halfScroll = track.scrollWidth / 2
          if (track.scrollLeft >= halfScroll) {
            track.scrollLeft -= halfScroll
          }
        }
      }
      lastTime = time
      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animRef.current)
  }, [isPaused, isDragging])

  // Drag handlers
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const track = trackRef.current
    if (!track) return
    setIsDragging(true)
    setStartX(e.clientX)
    setScrollLeft(track.scrollLeft)
    track.setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging || !trackRef.current) return
      const dx = e.clientX - startX
      trackRef.current.scrollLeft = scrollLeft - dx
    },
    [isDragging, startX, scrollLeft],
  )

  const onPointerUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Arrow controls
  const scroll = useCallback((dir: number) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dir * 320, behavior: "smooth" })
  }, [])

  // Duplicate items for seamless loop
  const items = [...events, ...events]

  return (
    <div
      className="relative group/carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation arrows */}
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center text-[#3B3969] hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center text-[#3B3969] hover:bg-white hover:scale-110 transition-all duration-200 opacity-0 group-hover/carousel:opacity-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#F5F5F5] to-transparent z-[5] pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#F5F5F5] to-transparent z-[5] pointer-events-none" />

      {/* Scrollable track */}
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="flex gap-5 overflow-x-hidden cursor-grab active:cursor-grabbing select-none px-4 md:px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {items.map((event, i) => (
          <div
            key={`${event.title}-${i}`}
            className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] group/card"
          >
            <div className="relative h-[340px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              {/* Background image */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                draggable={false}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c3d]/95 via-[#1e1c3d]/40 to-transparent" />

              {/* Top icon */}
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-white font-bold text-lg mb-2 leading-snug drop-shadow-md">
                  {event.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
