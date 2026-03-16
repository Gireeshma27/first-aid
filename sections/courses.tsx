"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Heart, Shield, GraduationCap } from "lucide-react"

const courses = [
  {
    code: "HLTAID009",
    title: "Provide Cardiopulmonary Resuscitation (CPR)",
    description: "This course covers the essential skills needed to perform CPR in line with Australian Resuscitation Council guidelines. Participants will learn to respond to cardiac emergencies, perform chest compressions and rescue breaths, and use an automated external defibrillator (AED).",
    href: "/courses/hltaid009",
    icon: Heart,
    delivery: "Face-to-face & blended",
  },
  {
    code: "HLTAID011",
    title: "Provide First Aid (Including CPR)",
    description: "This comprehensive course includes all elements of HLTAID009 plus additional first aid skills. Participants will learn to manage a range of common emergencies including bleeding, burns, fractures, and medical conditions like asthma or anaphylaxis.",
    href: "/courses/hltaid011",
    icon: Shield,
    delivery: "Face-to-face & blended",
  },
  {
    code: "HLTAID012",
    title: "Provide First Aid in an Education and Care Setting",
    description: "This course is tailored for those working in childcare, early education, and school settings. It covers first aid response to infants and children, including asthma, anaphylaxis, and other childhood-specific emergencies.",
    href: "/courses/hltaid012",
    icon: GraduationCap,
    delivery: "Face-to-face & blended",
  },
]

function CourseCard({ course, index }: { course: typeof courses[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const Icon = course.icon

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect() }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="reveal-section group flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-[#CB154E]/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="p-7 flex flex-col flex-1">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-[#CB154E]/10 flex items-center justify-center mb-6 group-hover:bg-[#CB154E]/15 transition-colors duration-300">
          <Icon className="w-7 h-7 text-[#CB154E] stroke-[1.6]" />
        </div>

        {/* Code badge */}
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#3B3969]/10 text-[#3B3969] text-[10px] font-bold tracking-widest uppercase mb-3">
          {course.code}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#1a1a2e] leading-snug mb-3">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#666666] leading-relaxed flex-1 mb-6">
          {course.description}
        </p>

        {/* Delivery note */}
        <p className="text-xs text-[#999] mb-5">
          <span className="font-semibold text-[#555]">Delivery:</span> {course.delivery}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-5" />

        {/* CTA */}
        <Link
          href={course.href}
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#3B3969] text-white text-sm font-semibold hover:bg-[#CB154E] transition-colors duration-300"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export function CoursesSection() {
  const headingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect() }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-[60px] md:py-[80px] bg-[#F5F5F7]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">

        {/* Section heading */}
        <div ref={headingRef} className="reveal-section mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight mb-4">
            Our <span className="text-[#CB154E]">Courses</span> &amp; Training Programs
          </h2>
          <p className="text-[#666666] max-w-2xl leading-relaxed">
            In partnership with Healthcorp (RTO 91222), our accredited training programs equip you with the knowledge and practical skills to respond confidently in emergency situations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.code} course={course} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
