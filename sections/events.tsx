"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { CheckCircle2, ArrowRight } from "lucide-react"

const eventServices = [
  "School carnivals",
  "Excursions",
  "Corporate functions",
  "Community gatherings",
  "Sports competitions",
]

export function EventsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-[44px] md:py-[56px] bg-white relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'transparent 0%, transparent 40%), transparent 0%, transparent 40%)',
        animation: 'subtleFloat 10s ease-in-out infinite'
      }} />
      <div className="mx-auto max-w-[1200px] px-4 lg:px-8 relative z-10">
        <div ref={ref} className="reveal-section grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
              <Image
                src="/images/event_medics.png"
                alt="Event medical team providing first aid support at a community event"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                className="object-cover"
              />
            </div>
            {/* 24/7 badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#ca1254] text-white rounded-2xl p-5 shadow-xl hidden md:block">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm font-medium text-white/80">Event Support</p>
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full border-4 border-[#3b3f69]/10 hidden lg:block" />
          </div>

          {/* Right - Content */}
          <div className="space-y-7">
            <SectionHeader
              badge="Event Medical Services"
              title="Event Medics and On-Site Medical Support"
              description="In addition to training, we provide qualified medics for events such as school carnivals, excursions, corporate functions, and community gatherings. Our event medics are equipped to handle on-site medical situations and ensure participant safety."
              centered={false}
            />
            <ul className="space-y-4">
              {eventServices.map((event) => (
                <li key={event} className="flex items-center gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-[#ca1254]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ca1254] transition-colors duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ca1254] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[#666666] group-hover:text-[#333333] transition-colors">{event}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="bg-[#ca1254] hover:bg-[#ca1254]/90 text-white font-medium rounded-xl px-8 py-6 shadow-lg shadow-[#ca1254]/20 hover:shadow-xl transition-all duration-300"
            >
              <Link href="/events">
                Book Event Medics
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
