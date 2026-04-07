"use client"

import { useRef, useEffect, useState } from "react"
import { Stethoscope, HandHeart, Home, ArrowRight } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    title: "Be Prepared to Save Lives",
    description:
      "Gain the confidence and skills to respond quickly during emergencies such as cardiac arrest, choking, or injury.",
    icon: Stethoscope,
    tag: "Confidence",
  },
  {
    title: "Nationally Recognised Training",
    description:
      "Our courses are delivered in partnership with a certified RTO, ensuring compliance with Australian standards.",
    icon: HandHeart,
    tag: "Accredited",
  },
  {
    title: "Practical Hands-On Learning",
    description:
      "Learn through real-life scenarios with experienced trainers to build confidence in emergency situations.",
    icon: Home,
    tag: "Hands-On",
  },
]

export function FirstAidBenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f7f7fb 0%, #ffffff 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 md:py-28">
        {/* ─── Bento Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-auto">

          {/* ── Cell 1: Heading (spans 7 cols) ── */}
          <div
            className={`md:col-span-7 flex flex-col justify-center rounded-3xl bg-white border border-gray-100 p-8 md:p-12 transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-[#ca1254] font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-[2.6rem] font-extrabold text-[#1a1a2e] leading-[1.12] mb-4">
              Why Choose First Aid{" "}
              <span className="text-[#ca1254]">Training?</span>
            </h2>
            <p className="text-gray-500 text-[15px] md:text-base leading-relaxed max-w-lg">
              Discover the key benefits of investing in professional first aid
              training for yourself or your team.
            </p>
          </div>

          {/* ── Cell 2: CTA card (spans 5 cols) ── */}
          <div
            className={`md:col-span-5 rounded-3xl overflow-hidden relative transition-all duration-700 ease-out delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ background: "linear-gradient(145deg, #3b3f69, #2a2e52)" }}
          >
            {/* Decorative rings */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full border border-white/[0.06] pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border border-white/[0.04] pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#ca1254]/15 blur-[50px] pointer-events-none" />

            <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">
                  Ready to start?
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  Life-saving training.<br />
                  <span className="text-[#ca1254]">Be ready</span> when it matters.
                </h3>
              </div>
              <div className="mt-6">
                <Link
                  href="/book-training"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#ca1254] text-white text-sm font-bold hover:bg-[#e91e63] transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book Training
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Cells 3-5: Three benefit cards (each spans 4 cols) ── */}
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const colors = [
              { bg: "#3b3f69", light: "rgba(59,63,105,0.06)", border: "rgba(59,63,105,0.1)" },
              { bg: "#ca1254", light: "rgba(202,18,84,0.06)", border: "rgba(202,18,84,0.1)" },
              { bg: "#3b3f69", light: "rgba(59,63,105,0.06)", border: "rgba(59,63,105,0.1)" },
            ][index]

            return (
              <div
                key={benefit.title}
                className={`md:col-span-4 group rounded-3xl bg-white border border-gray-100 p-7 md:p-8 flex flex-col transition-all duration-700 ease-out hover:shadow-lg hover:-translate-y-1 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 120}ms` }}
              >
                {/* Top: tag + icon */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                    style={{
                      background: colors.light,
                      color: colors.bg,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    {benefit.tag}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ background: colors.light }}
                  >
                    <Icon className="w-5 h-5" style={{ color: colors.bg }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[17px] md:text-lg font-bold text-[#1a1a2e] leading-snug mb-2.5">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-gray-500 leading-relaxed flex-1">
                  {benefit.description}
                </p>

                {/* Divider + arrow */}
                <div className="mt-5 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-gray-300 uppercase tracking-wider">
                    0{index + 1} / 03
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                    style={{ background: colors.light }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: colors.bg }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
