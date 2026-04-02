"use client"

import { useEffect, useRef } from "react"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ badge, title, description, centered = true }: SectionHeaderProps) {
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
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-8 reveal-section`}
    >
      {badge && (
        <span className="section-header-badge">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#333333] leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-[12px] text-lg text-[#666666] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
