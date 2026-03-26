"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Activity, Home, ArrowRight, type LucideIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"

interface Statistic {
  icon: LucideIcon
  value: string
  numericValue: number
  label: string
  suffix?: string
  prefix?: string
}

const statistics: Statistic[] = [
  {
    icon: Heart,
    value: "80,000+",
    numericValue: 80000,
    label: "Australians experience cardiac arrest outside hospital each year",
    suffix: "+",
  },
  {
    icon: Home,
    value: "100%",
    numericValue: 100,
    label: "Of cardiac arrests occur at home",
    suffix: "%",
  },
  {
    icon: Activity,
    value: "100%",
    numericValue: 100,
    label: "Survival rate increase when early CPR and defibrillation are provided",
    suffix: "%",
    prefix: "",
  },
]

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function StatisticsSection() {
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
    <section className="relative py-20 md:py-28 bg-[#F5F5F5] overflow-hidden -mt-px">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(203,21,78,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(59,57,105,0.04) 0%, transparent 50%)',
        animation: 'subtleFloat 8s ease-in-out infinite'
      }} />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
              The Importance of First Aid
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3B3969] mb-6 md:mb-8 tracking-tight leading-tight">
              The Importance of First Aid Training
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Learning CPR and first aid empowers individuals to take action during critical moments when every second counts.
            </p>
          </div>
        </Reveal>

        {/* Stats Cards Grid */}
        <div ref={ref} className="reveal-section grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {statistics.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_35px_-4px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center h-full"
              >
                <div className="w-14 h-14 rounded-full bg-[#CB154E]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#CB154E]" />
                </div>
                <div className="mb-4">
                  <p className="text-[2.5rem] md:text-[2.75rem] text-[#3B3969] tracking-tight leading-none" style={{ fontWeight: 900 }}>
                    <AnimatedCounter target={stat.numericValue} suffix={stat.suffix} prefix={stat.prefix} />
                  </p>
                </div>
                <p className="text-base md:text-[15px] text-gray-600 leading-relaxed font-medium">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* View Statistics Button */}
        <Reveal delay={100}>
          <div className="flex justify-center mt-20 md:mt-24">
            <a
              href="/statistics"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-[#CB154E] hover:bg-[#a50f3d] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 shadow-md"
            >
              View Statistics
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
