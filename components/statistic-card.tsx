"use client"

import { useEffect, useState, useRef } from "react"
import { type LucideIcon } from "lucide-react"

interface StatisticCardProps {
  icon: LucideIcon
  value: string
  label: string
  suffix?: string
}

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return { count, ref }
}

export function StatisticCard({ icon: Icon, value, label, suffix = "" }: StatisticCardProps) {
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0
  const { count, ref } = useCountUp(numericValue)

  const displayValue = value.includes("+")
    ? `${count.toLocaleString()}+`
    : value.includes("%")
    ? `${count}%`
    : count.toLocaleString()

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group card-glow overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#3B3969]/[0.03] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#CB154E]/10 to-[#CB154E]/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-[#CB154E]" />
      </div>
      <span className="text-4xl md:text-5xl font-bold text-[#3B3969] mb-3">
        {displayValue}{suffix}
      </span>
      <p className="text-sm text-[#666666] leading-relaxed max-w-[240px]">{label}</p>
    </div>
  )
}
