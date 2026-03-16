"use client"

import { useEffect, useRef } from "react"
import { SectionHeader } from "@/components/section-header"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

export function BookingSection() {
  const ref = useRef<HTMLElement>(null)

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
    <section
      ref={ref}
      className="py-[60px] md:py-[80px] relative overflow-hidden reveal-section"
      style={{
        background: "linear-gradient(135deg, #3B3969 0%, #2a2850 60%, #1e1c3d 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#CB154E]/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
            Book Your First Aid Training Today
          </h2>
          <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Ready to upskill your team? Fill out the form and we&apos;ll be in touch to discuss your training requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CB154E] transition-colors duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Call Us</h4>
                <p className="text-white/60">1300 FIRST AID</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CB154E] transition-colors duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email Us</h4>
                <p className="text-white/60">info@firstaidnetwork.com.au</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CB154E] transition-colors duration-300">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Flexible Scheduling</h4>
                <p className="text-white/60">Weekdays, weekends & evenings available</p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CB154E] transition-colors duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Australia Wide</h4>
                <p className="text-white/60">Servicing all of Australia</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-7 md:p-10 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
