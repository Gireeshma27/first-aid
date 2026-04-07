"use client"

import { useRef, useEffect, useState } from "react"
import { Stethoscope, HandHeart, Home, ArrowRight, CheckCheck } from "lucide-react"

const benefits = [
  {
    title: "Be Prepared to Save Lives",
    description:
      "Gain the confidence and skills to respond quickly during emergencies such as cardiac arrest, choking, or injury.",
    icon: Stethoscope,
  },
  {
    title: "Nationally Recognised Training",
    description:
      "Our courses are delivered in partnership with a certified RTO, ensuring compliance with Australian standards.",
    icon: HandHeart,
  },
  {
    title: "Practical Hands-On Learning",
    description:
      "Learn through real-life scenarios with experienced trainers to build confidence in emergency situations.",
    icon: Home,
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
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorative large watermark number */}
      <div className="absolute -right-16 top-8 text-[280px] md:text-[400px] font-black text-[#3b3f69]/[0.02] leading-none select-none pointer-events-none">
        ?
      </div>

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* ─── Top: Heading ─── */}
        <div
          className={`mb-16 md:mb-20 max-w-2xl transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[#ca1254] font-bold text-xs uppercase tracking-[0.2em] mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a2e] leading-[1.1] mb-5">
            Why Choose First Aid{" "}
            <span className="text-[#ca1254]">Training?</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            Discover the key benefits of investing in professional first aid
            training for yourself or your team.
          </p>
        </div>

        {/* ─── Main: 2-column split ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT — Featured big card */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#3b3f69] p-10 md:p-12 min-h-[380px] flex flex-col justify-between">
              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Glow */}
              <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-[#ca1254]/20 blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-8">
                  <CheckCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                  Life-saving training.<br />Be ready when it matters most.
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed mb-8 max-w-sm">
                  Our nationally accredited programs are designed to give you real skills for real emergencies — delivered by registered nurses.
                </p>
              </div>

              <div className="relative z-10">
                <a
                  href="/book-training"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#ca1254] text-white text-sm font-bold hover:bg-[#e91e63] transition-colors duration-300 shadow-lg shadow-[#ca1254]/30"
                >
                  Book Training
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Numbered benefit list */}
          <div className="flex flex-col gap-0">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className={`group transition-all duration-700 ease-out ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${200 + index * 150}ms` }}
                >
                  <div className="flex gap-5 md:gap-6 py-7 border-b border-gray-100 last:border-b-0">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span className="text-4xl md:text-5xl font-extrabold text-[#3b3f69]/[0.08] leading-none select-none">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                          style={{
                            background:
                              index === 1
                                ? "rgba(202,18,84,0.08)"
                                : "rgba(59,63,105,0.06)",
                          }}
                        >
                          <Icon
                            className="w-[18px] h-[18px]"
                            style={{
                              color:
                                index === 1 ? "#ca1254" : "#3b3f69",
                            }}
                          />
                        </div>
                        <h3 className="text-base md:text-lg font-bold text-[#1a1a2e] leading-tight">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed pl-12">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Bottom link */}
            <div
              className={`pt-6 transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ca1254] hover:gap-3 transition-all duration-300"
              >
                Explore all our courses
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
