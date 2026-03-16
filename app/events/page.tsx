import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/sections/newsletter"
import { CheckCircle2, Shield, Clock, Stethoscope, ArrowRight, Zap, Award, Heart } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Event Medical Services | First Aid Network Australia",
  description: "First Aid Network Australia provides qualified medics for events, ensuring the safety and wellbeing of participants.",
}

const eventTypes = [
  { title: "School Carnivals & Excursions", image: "/images/cpr-classroom.png"   },
  { title: "Sports Competitions",           image: "/images/hero-training.png"   },
  { title: "Community Festivals",           image: "/images/course-childcare.png"},
  { title: "Corporate Events",              image: "/images/course-first-aid.png"},
  { title: "Event Medical Staff",           image: "/images/event-medical.png"   },
  { title: "Public Gatherings",             image: "/images/trainer.png"         },
]

const whyCards = [
  { icon: Zap,          text: "Rapid response to medical incidents on site" },
  { icon: Shield,       text: "Professional first aid coverage for events of all sizes" },
  { icon: Award,        text: "Experienced and qualified medical personnel" },
  { icon: Stethoscope,  text: "Comprehensive medical equipment on site" },
  { icon: CheckCircle2, text: "Compliance with event safety requirements" },
  { icon: Heart,        text: "Peace of mind for event organisers and participants" },
]

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e1c3d 0%, #3B3969 60%, #4A4880 100%)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-[#CB154E]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left — Text + CTA */}
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                  Event Medical Services
                </span>
                <h1 className="text-3xl md:text-[42px] lg:text-[52px] font-bold leading-[1.15] tracking-tight text-white">
                  Event Medical Support for{" "}
                  <span className="text-[#CB154E]">
                    Schools, Sports and Community Events
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-medium">
                  Qualified first aid medics ensuring safety at events across Australia.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#event-services"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#CB154E] text-white font-semibold text-base hover:bg-[#a81040] transition-colors duration-300 shadow-lg shadow-[#CB154E]/40"
                  >
                    Explore Event Services
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="#types"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base hover:bg-white/20 border border-white/20 transition-colors duration-300"
                  >
                    View Event Types
                  </a>
                </div>
                {/* Mini stats */}
                <div className="flex flex-wrap gap-10 pt-4 border-t border-white/10">
                  {[
                    { val: "24/7",  lbl: "On-site Support" },
                    { val: "100+",  lbl: "Events Covered" },
                    { val: "Fast",  lbl: "Response Time" },
                  ].map(({ val, lbl }) => (
                    <div key={lbl}>
                      <p className="text-2xl font-black text-white">{val}</p>
                      <p className="text-sm text-white/60 mt-0.5">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/event-medical.png"
                    alt="Event medic team providing first aid support at a community event"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c3d]/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 right-6 bg-[#CB154E] text-white rounded-2xl px-6 py-4 shadow-xl shadow-[#CB154E]/40 hidden sm:block">
                  <p className="text-xl font-bold">Nationally</p>
                  <p className="text-sm font-medium text-white/80">Qualified Medics</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Overview — alternating (image right) ── */}
        <section id="event-services" className="py-20 md:py-32 bg-white relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-sm font-bold tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                  Overview
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight tracking-tight">
                  Dedicated Event Medical Support
                </h2>
                <div className="space-y-4 text-lg text-[#666666] leading-relaxed">
                  <p>
                    First Aid Network Australia also provides qualified medics for events, ensuring the safety and wellbeing of participants.
                  </p>
                  <p>
                    Our trained medical personnel are equipped to respond quickly to medical incidents and provide immediate care.
                  </p>
                </div>
                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
                  {[
                    { icon: Clock,      value: "24/7",  label: "Available" },
                    { icon: Shield,     value: "100+",  label: "Events Covered" },
                    { icon: Stethoscope,value: "Rapid", label: "Response" },
                  ].map(({ icon: Icon, value, label }) => (
                    <div key={label} className="bg-white rounded-2xl p-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
                      <div className="w-12 h-12 mx-auto bg-[#CB154E]/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#CB154E]" />
                      </div>
                      <p className="text-2xl font-bold text-[#333333]">{value}</p>
                      <p className="text-sm font-medium text-[#666666] mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative lg:ml-10">
                <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/event-medical.png"
                    alt="Event medical team providing first aid support at a community event"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3B3969]/30 via-transparent to-transparent" />
                </div>
                {/* Overlapping badge */}
                <div className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hidden sm:flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#CB154E] rounded-full flex items-center justify-center shadow-lg shadow-[#CB154E]/30">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#333333]">24/7</p>
                    <p className="text-sm font-medium text-[#666666]">Event Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Types of Events ── */}
        <section id="types" className="py-20 md:py-32 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />
                Types of Events
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight tracking-tight">
                Types of Events Supported
              </h2>
              <p className="mt-6 text-xl text-[#666666] max-w-2xl mx-auto">
                Our event medical services are available for a wide range of events across Australia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {eventTypes.map((event) => (
                <div
                  key={event.title}
                  className="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-white"
                  style={{ height: "300px" }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c3d]/90 via-[#1e1c3d]/30 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#CB154E] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-white transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4 text-white group-hover:text-[#CB154E] transition-colors duration-300" />
                    </div>
                    <span className="text-white font-bold text-base drop-shadow-md leading-snug min-w-0 line-clamp-2">{event.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Professional Event Medics ── */}
        <section className="py-20 md:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-sm font-bold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />
                Why It Matters
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#333333] leading-tight tracking-tight">
                Why Professional Event Medics Are Important
              </h2>
              <p className="mt-6 text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
                Having qualified medical personnel at events ensures that any medical incidents are handled swiftly and professionally, providing peace of mind for organisers and participants alike.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyCards.map((card, i) => (
                <div
                  key={card.text}
                  className="group bg-[#F5F5F5] rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      i % 2 === 0 ? "bg-[#CB154E]/10" : "bg-[#3B3969]/8"
                    }`}
                  >
                    <card.icon
                      className={`w-7 h-7 ${i % 2 === 0 ? "text-[#CB154E]" : "text-[#3B3969]"}`}
                    />
                  </div>
                  <p className="text-base font-medium text-[#333333] leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
