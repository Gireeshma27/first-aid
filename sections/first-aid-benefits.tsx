"use client"

import { useRef, useEffect } from "react"
import { Stethoscope, HandHeart, Home } from "lucide-react"

const benefits = [
  {
    title: "Be Prepared to Save Lives",
    description: "Gain the confidence and skills to respond quickly during emergencies such as cardiac arrest, choking, or injury.",
    icon: Stethoscope,
  },
  {
    title: "Nationally Recognised Training",
    description: "Our courses are delivered in partnership with a certified RTO, ensuring compliance with Australian standards.",
    icon: HandHeart,
  },
  {
    title: "Practical Hands-On Learning",
    description: "Learn through real-life scenarios with experienced trainers to build confidence in emergency situations.",
    icon: Home,
  },
]

function BenefitCard({ title, description, icon: Icon, index }: { title: string; description: string; icon: React.ComponentType<{ className?: string }>; index: number }) {
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
    <div
      ref={ref}
      className="reveal-section bg-[#F5F5F5] rounded-2xl p-8"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="flex flex-col">
        {/* Icon */}
        <Icon className="w-12 h-12 text-[#CB154E] mb-6" />

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-[#2D2D2D] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export function FirstAidBenefitsSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [headingRef.current, ctaRef.current]
    els.forEach((el) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el?.classList.add("visible")
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    })
  }, [])

  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Heading */}
        <div ref={headingRef} className="reveal-section mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight mb-4">
            Why Choose First Aid <span className="text-[#CB154E]">Training?</span>
          </h2>
          <p className="text-[#666666] max-w-2xl leading-relaxed mx-auto">
            Discover the key benefits of investing in professional first aid training for yourself or your team.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              index={index}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div
          ref={ctaRef}
          className="reveal-section mt-10 py-6 px-4 rounded-xl bg-[#CB154E] text-white text-center text-sm md:text-base font-medium"
        >
          This is life-saving training. Be ready when it matters most.
        </div>
      </div>
    </section>
  )
}
