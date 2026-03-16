"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Activity, Home, ArrowRight, type LucideIcon } from "lucide-react"

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
    value: "30,000+",
    numericValue: 30000,
    label: "Australians experience cardiac arrest outside hospital each year",
    suffix: "+",
  },
  {
    icon: Home,
    value: "70%",
    numericValue: 70,
    label: "Of cardiac arrests occur at home",
    suffix: "%",
  },
  {
    icon: Activity,
    value: "70%",
    numericValue: 70,
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
    <section className="relative py-[60px] md:py-[80px] bg-[#F5F5F5]">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-[32px] max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3B3969] mb-[12px] tracking-tight">
            Why First Aid Matters
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Learning CPR and first aid empowers individuals to take action during critical moments when every second counts.
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div ref={ref} className="reveal-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {statistics.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col items-start"
              >
                <div className="w-14 h-14 rounded-full bg-[#CB154E]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#CB154E]" />
                </div>
                <div className="mb-3">
                  <p className="text-[2.5rem] font-bold text-[#3B3969] tracking-tight leading-none">
                    <AnimatedCounter target={stat.numericValue} suffix={stat.suffix} prefix={stat.prefix} />
                  </p>
                </div>
                <p className="text-base text-gray-600 leading-relaxed font-medium">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* View Statistics Button */}
        <div className="flex justify-center">
          <a
            href="/statistics"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View Statistics
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
