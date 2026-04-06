"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export function ServiceCard({ icon: Icon, title, description, href = "/services" }: ServiceCardProps) {
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
      className="reveal-section group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 card-glow relative overflow-hidden"
    >
      {/* Decorative gradient corner */}
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#3b3f69] group-hover:scale-[2] transition-transform duration-700" />

      <div className="relative">
        <div className="w-14 h-14 rounded-2xl bg-[#3b3f69]/10 flex items-center justify-center mb-6 group-hover:bg-[#3b3f69] group-hover:shadow-lg group-hover:shadow-[#3b3f69]/20 transition-all duration-300">
          <Icon className="w-7 h-7 text-[#3b3f69] group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-bold text-[#333333] mb-3 group-hover:text-[#3b3f69] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#666666] leading-relaxed mb-6">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#ca1254] hover:text-[#ca1254]/80 transition-colors group/link"
        >
          Learn more
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
