"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Clock, Users, Award, Heart, ShieldCheck, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CourseCardProps {
  code: string
  title: string
  description: string
  duration?: string
  participants?: string
  icon: React.ReactNode
  color: string
  href?: string
}

export function CourseCard({
  code,
  title,
  description,
  duration,
  participants,
  icon,
  color,
  href = "/courses",
}: CourseCardProps) {
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
      className="reveal-section group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 card-glow"
    >
      {/* Top accent bar */}
      <div className={`h-1.5 ${color}`} />

      <div className="p-7">
        {/* Icon & Badge */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-xl ${color}/10 flex items-center justify-center`} style={{ backgroundColor: `${color === 'bg-[#CB154E]' ? 'rgba(203,21,78,0.1)' : color === 'bg-[#3B3969]' ? 'rgba(59,57,105,0.1)' : 'rgba(59,57,105,0.1)'}` }}>
            {icon}
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#3B3969]/10 text-[#3B3969] text-xs font-semibold">
            <Award className="w-3 h-3" />
            {code}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#3B3969] transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-[#666666] text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Meta info */}
        {(duration || participants) && (
          <div className="flex items-center gap-5 mb-6 pb-6 border-b border-gray-100">
            {duration && (
              <div className="flex items-center gap-2 text-sm text-[#666666]">
                <Clock className="w-4 h-4 text-[#CB154E]" />
                <span>{duration}</span>
              </div>
            )}
            {participants && (
              <div className="flex items-center gap-2 text-sm text-[#666666]">
                <Users className="w-4 h-4 text-[#CB154E]" />
                <span>{participants}</span>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#3B3969] hover:text-[#CB154E] transition-colors group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
