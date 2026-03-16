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
        background: 'radial-gradient(circle at 90% 10%, rgba(203,21,78,0.03) 0%, transparent 40%), radial-gradient(circle at 10% 90%, rgba(59,57,105,0.03) 0%, transparent 40%)',
        animation: 'subtleFloat 10s ease-in-out infinite'
      }} />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div ref={ref} className="reveal-section grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/event-medical.png"
                alt="Event medical team providing first aid support at a community event"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3B3969]/30 via-transparent to-transparent" />
            </div>
            {/* 24/7 badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#CB154E] text-white rounded-2xl p-5 shadow-xl hidden md:block">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm font-medium text-white/80">Event Support</p>
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full border-4 border-[#3B3969]/10 hidden lg:block" />
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
                  <div className="w-6 h-6 rounded-full bg-[#CB154E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CB154E] transition-colors duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#CB154E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[#666666] group-hover:text-[#333333] transition-colors">{event}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-medium rounded-xl px-8 py-6 shadow-lg shadow-[#CB154E]/20 hover:shadow-xl transition-all duration-300"
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
