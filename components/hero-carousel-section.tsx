"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, HeartPulse, ShieldCheck, Briefcase } from "lucide-react"

const slides = [
  {
    title: "CPR Training",
    description:
      "Learn life-saving CPR techniques and how to use an AED in emergencies.",
    points: ["DRSABCD Action Plan", "AED Usage", "Emergency Response"],
    icon: HeartPulse,
    accent: "#ca1254",
  },
  {
    title: "First Aid Certification",
    description:
      "Comprehensive training covering injuries, illnesses, and medical emergencies.",
    points: ["Wound Care", "Fractures", "Asthma & Anaphylaxis"],
    icon: ShieldCheck,
    accent: "#3b3f69",
  },
  {
    title: "Workplace Training",
    description:
      "Custom training programs for organisations and teams.",
    points: ["On-site Training", "Flexible Delivery", "Compliance Ready"],
    icon: Briefcase,
    accent: "#ca1254",
  },
]

export function HeroCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("next")
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setDirection("prev")
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setDirection("next")
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "next" : "prev")
    setCurrentIndex(index)
  }

  return (
    <section
      ref={sectionRef}
      className={`w-full relative overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "linear-gradient(135deg, #3b3f69 0%, #2d3154 50%, #1f2340 100%)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#ca1254]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#3b3f69]/30 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Static content */}
          <div>
            <p className="text-[#ca1254] font-bold text-sm uppercase tracking-widest mb-4">
              First Aid Training Services
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mb-5">
              Professional First Aid Training for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca1254] to-[#e91e63]">
                Real-Life Emergencies
              </span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed max-w-md">
              Hands-on first aid and CPR training designed to prepare
              individuals and organisations to respond effectively in emergency
              situations.
            </p>

            {/* Nav arrows — desktop below text */}
            <div className="hidden lg:flex items-center gap-3 mt-8">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 ml-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? "bg-[#ca1254] w-8"
                        : "bg-white/20 w-4 hover:bg-white/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Stacked card carousel */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] mx-auto" style={{ minHeight: "360px" }}>
              {slides.map((slide, index) => {
                const isCurrent = index === currentIndex
                const SlideIcon = slide.icon
                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-600 ease-out"
                    style={{
                      opacity: isCurrent ? 1 : 0,
                      transform: isCurrent
                        ? "translateX(0) scale(1)"
                        : direction === "next"
                        ? "translateX(60px) scale(0.92)"
                        : "translateX(-60px) scale(0.92)",
                      pointerEvents: isCurrent ? "auto" : "none",
                      zIndex: isCurrent ? 2 : 1,
                    }}
                  >
                    <div
                      className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
                      style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.3)" }}
                    >
                      {/* Top accent bar */}
                      <div
                        className="h-1.5 w-full"
                        style={{
                          background: `linear-gradient(to right, ${slide.accent}, ${
                            slide.accent === "#ca1254" ? "#e91e63" : "#5c6090"
                          })`,
                        }}
                      />

                      <div className="p-8 md:p-10">
                        {/* Icon + Title */}
                        <div className="flex items-center gap-4 mb-5">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{
                              background: `${slide.accent}15`,
                              border: `1.5px solid ${slide.accent}30`,
                            }}
                          >
                            <SlideIcon
                              className="w-6 h-6"
                              style={{ color: slide.accent }}
                            />
                          </div>
                          <h3 className="text-xl font-bold text-[#1a1a2e]">
                            {slide.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                          {slide.description}
                        </p>

                        {/* Feature pills */}
                        <div className="flex flex-wrap gap-2">
                          {slide.points.map((point, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-medium"
                              style={{
                                background: `${slide.accent}10`,
                                color: slide.accent,
                                border: `1px solid ${slide.accent}20`,
                              }}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ background: slide.accent }}
                              />
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile arrows + dots */}
            <div className="lg:hidden absolute -bottom-14 left-0 right-0 flex items-center justify-center gap-3">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? "bg-[#ca1254] w-6"
                        : "bg-white/20 w-3"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
