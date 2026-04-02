"use client"

import { useEffect, useRef } from "react"
import { Reveal } from "@/components/reveal"
import {
  CheckCircle2,
  Award,
  Users,
  Clock,
  BookOpen,
  Monitor,
  ClipboardCheck,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react"

const highlights = [
  {
    icon: Award,
    text: "All trainers hold current industry qualifications and certifications",
  },
  {
    icon: Clock,
    text: "15+ years average industry experience per trainer",
  },
  {
    icon: Users,
    text: "Trained 10,000+ participants across Australia",
  },
  {
    icon: CheckCircle2,
    text: "Real-world emergency response backgrounds",
  },
]

export function TrainersSection() {
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
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #3B3969 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        ref={ref}
        className="reveal-section mx-auto max-w-[1200px] px-6 lg:px-12 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-sm font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#3B3969]" />
              Online Learning
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#333333] leading-tight tracking-tight">
              Flexible Online Learning Options
            </h2>
            <p className="mt-3 text-base md:text-lg text-[#666666] leading-relaxed max-w-2xl mx-auto">
              Access flexible online learning modules designed to complement
              practical first aid training. Our blended learning model combines
              self-paced online theory with hands-on practical sessions.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <Reveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5 md:gap-6">
            {/* ── Hero Card (spans left, tall) ── */}
            <div
              className="md:col-span-6 lg:col-span-5 lg:row-span-2 rounded-3xl p-8 md:p-10 relative overflow-hidden group cursor-default"
              style={{
                background:
                  "linear-gradient(145deg, #1e1c3d 0%, #3B3969 60%, #4a4880 100%)",
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#CB154E]/15 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 blur-3xl pointer-events-none" />
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 group-hover:bg-[#CB154E]/20 transition-colors duration-500">
                    <Sparkles className="w-7 h-7 text-[#CB154E]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                    Blended Learning
                    <br />
                    <span className="text-[#CB154E]">Model</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed text-base md:text-lg mb-8 max-w-sm">
                    Our unique approach combines flexible online theory with
                    hands-on practical sessions for a comprehensive learning
                    experience.
                  </p>
                </div>

                {/* Mini stats inside hero card */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "15+", label: "Years Experience" },
                    { value: "10k+", label: "Participants" },
                    { value: "100%", label: "Satisfaction" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/8 backdrop-blur-sm rounded-xl p-3 text-center border border-white/10"
                    >
                      <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        {stat.value}
                      </p>
                      <p className="text-[10px] md:text-xs text-white/50 mt-0.5 font-medium uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Card: Self-Paced Online Theory ── */}
            <div className="md:col-span-3 lg:col-span-4 group bg-[#F7F7FA] rounded-3xl p-7 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mb-5 group-hover:bg-[#3B3969] transition-colors duration-300">
                <Monitor className="w-6 h-6 text-[#3B3969] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#3B3969] transition-colors">
                Self-Paced Online Theory
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Complete theoretical components at your own pace with
                interactive online modules accessible 24/7 from any device.
              </p>
            </div>

            {/* ── Card: Nationally Recognised ── */}
            <div className="md:col-span-3 lg:col-span-3 group bg-[#F7F7FA] rounded-3xl p-7 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#CB154E]/10 flex items-center justify-center mb-5 group-hover:bg-[#CB154E] transition-colors duration-300">
                <GraduationCap className="w-6 h-6 text-[#CB154E] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#CB154E] transition-colors">
                Nationally Recognised
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                All qualifications are nationally recognised and delivered in
                partnership with Healthcorp RTO 91222.
              </p>
            </div>

            {/* ── Card: Practical Sessions ── */}
            <div className="md:col-span-3 lg:col-span-3 group bg-[#F7F7FA] rounded-3xl p-7 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mb-5 group-hover:bg-[#3B3969] transition-colors duration-300">
                <BookOpen className="w-6 h-6 text-[#3B3969] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#3B3969] transition-colors">
                Practical Sessions
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Hands-on practical training with experienced professionals
                ensures you can confidently apply skills in real emergencies.
              </p>
            </div>

            {/* ── Card: Compliance & Assessment ── */}
            <div className="md:col-span-3 lg:col-span-4 group bg-[#F7F7FA] rounded-3xl p-7 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-default">
              <div className="w-12 h-12 rounded-xl bg-[#CB154E]/10 flex items-center justify-center mb-5 group-hover:bg-[#CB154E] transition-colors duration-300">
                <ClipboardCheck className="w-6 h-6 text-[#CB154E] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#CB154E] transition-colors">
                Blended Assessment
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Our blended learning model combines self-paced online theory
                with hands-on practical sessions for thorough competency
                assessment.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Highlights Strip ── */}
        <Reveal delay={200}>
          <div className="mt-10 md:mt-14 rounded-3xl overflow-hidden border border-gray-100 bg-[#F7F7FA]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/60">
              {highlights.map(({ icon: Icon, text }, i) => (
                <div
                  key={text}
                  className="group flex items-start gap-4 p-6 hover:bg-white transition-colors duration-300 cursor-default"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      i % 2 === 0
                        ? "bg-[#3B3969]/10 group-hover:bg-[#3B3969]"
                        : "bg-[#CB154E]/10 group-hover:bg-[#CB154E]"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 group-hover:text-white transition-colors duration-300 ${
                        i % 2 === 0 ? "text-[#3B3969]" : "text-[#CB154E]"
                      }`}
                    />
                  </div>
                  <p className="text-sm text-[#666666] leading-relaxed mt-1">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
