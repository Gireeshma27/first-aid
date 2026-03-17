"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { CheckCircle2, Award, Users, Clock } from "lucide-react"

const trainers = [
  {
    name: "David Mercer",
    role: "Lead Trainer & Paramedic",
    description: "Over 15 years of experience in emergency response and paramedicine. David brings real-world emergency expertise to every training session.",
    image: "/images/trainer-1.png",
  },
  {
    name: "Sarah Williams",
    role: "Registered Nurse & Trainer",
    description: "A qualified registered nurse with extensive experience in critical care and emergency departments. Sarah specialises in child-focused first aid training.",
    image: "/images/trainer-2.png",
  },
  {
    name: "Mark Thompson",
    role: "Workplace Safety Specialist",
    description: "An experienced EMT with 20+ years in workplace health and safety. Mark delivers engaging, scenario-based training tailored to industry needs.",
    image: "/images/trainer-3.png",
  },
]

const highlights = [
  { icon: Award,  text: "All trainers hold current industry qualifications and certifications" },
  { icon: Clock,  text: "15+ years average industry experience per trainer" },
  { icon: Users,  text: "Trained 10,000+ participants across Australia" },
  { icon: CheckCircle2, text: "Real-world emergency response backgrounds" },
]

export function TrainersSection() {
  const ref = useRef<HTMLDivElement>(null)

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
    <section className="py-[44px] md:py-[56px] bg-[#F5F5F5] relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 70% 30%, rgba(203,21,78,0.04) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(59,57,105,0.04) 0%, transparent 50%)',
        animation: 'subtleFloat 12s ease-in-out infinite'
      }} />
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div ref={ref} className="reveal-section grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT: trainer photo grid ── */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Lead Trainer */}
            <div className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/3] bg-gray-100">
              <Image
                src={trainers[0].image}
                alt={trainers[0].name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="eager"
                className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c3d]/90 via-[#1e1c3d]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1.5">{trainers[0].name}</h3>
                <p className="text-[#CB154E] font-semibold flex items-center gap-2 text-sm md:text-base">
                   <Award className="w-4 h-4" /> {trainers[0].role}
                </p>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="text-white/80 mt-4 text-sm md:text-base leading-relaxed max-w-lg">
                      {trainers[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Trainers */}
            <div className="grid grid-cols-2 gap-5 md:gap-6">
              {trainers.slice(1).map((trainer, index) => (
                <div key={trainer.name} className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/5] md:aspect-square bg-gray-100">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="eager"
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ${index === 1 ? "object-top" : "object-[center_15%]"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c3d]/90 via-[#1e1c3d]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                    <p className="text-[#CB154E] font-medium text-xs md:text-sm">{trainer.role}</p>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <p className="text-white/80 mt-3 text-xs md:text-sm leading-relaxed">
                          {trainer.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: text content ── */}
          <div className="space-y-7">
            <SectionHeader
              badge="Our Trainers"
              title="Learn from Experienced Healthcare Professionals"
              description="Our trainers bring real-world emergency response experience to every session, ensuring you receive practical, applicable knowledge."
              centered={false}
            />

            <ul className="space-y-4">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-xl bg-[#3B3969]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B3969] transition-colors duration-300 mt-0.5">
                    <Icon className="w-4.5 h-4.5 text-[#3B3969] group-hover:text-white transition-colors duration-300 w-5 h-5" />
                  </div>
                  <p className="text-[#666666] leading-relaxed text-sm mt-1.5">{text}</p>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "10k+", label: "Participants" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm">
                  <p className="text-2xl font-bold text-[#3B3969]">{stat.value}</p>
                  <p className="text-xs text-[#666666] mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
