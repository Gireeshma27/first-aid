"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Users, Clock, Phone, ArrowRight, Shield, Activity, Zap, Monitor, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterSection } from "@/sections/newsletter"
import {
  FiAlertOctagon,
  FiUser,
  FiPhoneCall,
  FiWind,
  FiActivity,
  FiHeart,
  FiZap,
  FiBriefcase,
  FiBook,
  FiUserCheck,
  FiHome,
  FiUsers,
  FiAward,
} from "react-icons/fi"
import type { IconType } from "react-icons"

/* ─────────────────────────────────────────────
   Scroll-reveal wrapper
───────────────────────────────────────────── */
function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (el) {
              el.style.opacity = "1"
              el.style.transform = "translateY(0)"
            }
          }, delay)
          io.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(22px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const drsabcd: { letter: string; icon: IconType; accent: string; label: string; desc: string }[] = [
  { letter: "D", icon: FiAlertOctagon, accent: "#CB154E", label: "Danger", desc: "Ensure the scene is safe for you, bystanders and the casualty before approaching" },
  { letter: "R", icon: FiUser, accent: "#3B3969", label: "Response", desc: "Check consciousness — call their name and squeeze their shoulders firmly" },
  { letter: "S", icon: FiPhoneCall, accent: "#CB154E", label: "Send Help", desc: "Call 000 or ask a bystander to call. Confirm the ambulance is dispatched" },
  { letter: "A", icon: FiWind, accent: "#3B3969", label: "Airway", desc: "Head-tilt chin-lift to open the airway. Remove any visible obstructions" },
  { letter: "B", icon: FiActivity, accent: "#CB154E", label: "Breathing", desc: "Look, listen and feel for normal breathing — assess for no more than 10 seconds" },
  { letter: "C", icon: FiHeart, accent: "#3B3969", label: "CPR", desc: "30 compressions then 2 rescue breaths. Push hard & fast at 100–120 per minute" },
  { letter: "D", icon: FiZap, accent: "#CB154E", label: "Defib", desc: "Attach an AED as soon as possible and follow the voice and visual prompts" },
]

const cprSkills: { icon: IconType; text: string }[] = [
  { icon: FiHeart, text: "Perform effective adult CPR — 30:2 ratio, 100–120 compressions per minute" },
  { icon: FiUser, text: "Perform infant and child CPR with the correct modified technique" },
  { icon: FiZap, text: "Safely operate an Automated External Defibrillator (AED)" },
  { icon: FiActivity, text: "Place a casualty into the lateral (recovery) position" },
  { icon: FiWind, text: "Manage an unconscious but breathing casualty until help arrives" },
]

const emergencySkills: { icon: IconType; text: string }[] = [
  { icon: FiAlertOctagon, text: "Recognise the signs and symptoms of cardiac arrest" },
  { icon: FiPhoneCall, text: "Communicate clearly with Triple Zero (000) emergency services" },
  { icon: FiActivity, text: "Understand the chain of survival and why each link matters" },
  { icon: FiUserCheck, text: "Apply legal and duty of care requirements in an emergency" },
  { icon: FiUsers, text: "Respond confidently in workplace, home or community settings" },
]

const whoAttends: { icon: IconType; label: string }[] = [
  { icon: FiBriefcase, label: "Workplace staff & safety officers" },
  { icon: FiBook, label: "Teachers & childcare providers" },
  { icon: FiUserCheck, label: "Healthcare & support workers" },
  { icon: FiActivity, label: "Fitness instructors & coaches" },
  { icon: FiHome, label: "Aged care & disability workers" },
  { icon: FiUsers, label: "Sports clubs & community groups" },
  { icon: FiUser, label: "Parents & family caregivers" },
  { icon: FiAward, label: "Anyone seeking CPR certification" },
]

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function CprContent() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2a1a35] to-[#CB154E]/80 py-16 md:py-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#CB154E]/20 blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl animate-blob-delay" />
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-[#3B3969]/25 blur-3xl animate-blob-delay-2" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/20 border border-[#CB154E]/30 text-[#ff6b9d] text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" />
                Nationally Recognised Training · In partnership with Healthcorp (RTO 91222)
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                HLTAID009
                <span className="block text-2xl md:text-3xl font-semibold text-white/70 mt-2">
                  Provide Cardiopulmonary Resuscitation (CPR)
                </span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                This course covers the essential skills needed to perform CPR in line with Australian Resuscitation
                Council guidelines.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { icon: Clock, label: "Face-to-face & Blended" },
                  { icon: Users, label: "All workplaces & community" },
                  { icon: Shield, label: "ARC Guidelines" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium"
                  >
                    <Icon className="w-4 h-4 text-[#CB154E]" />
                    {label}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-[#CB154E]/30"
                >
                  <Link href="/book-training">
                    Book This Training <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  <Link href="/contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex-shrink-0 w-full lg:w-[440px]">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/3]">
                <Image
                  src="/images/course-cpr.png"
                  alt="CPR training"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex items-center justify-center flex-shrink-0">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#1a1a2e] font-bold text-sm">Life-Saving Skills</p>
                    <p className="text-[#64648c] text-xs">Cardiac arrest response &amp; AED use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DRSABCD ACTION PLAN ── */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(180deg, transparent 0%, rgba(203,21,78,0.02) 100%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/[0.07] text-[#CB154E] text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
              Emergency Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">The DRSABCD Action Plan</h2>
            <p className="text-[#64648c] mt-3 max-w-2xl mx-auto">
              Follow these seven steps in sequence to assess and respond to any life-threatening emergency.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {drsabcd.map(({ letter, icon: Icon, accent, label, desc }, i) => (
              <Reveal key={label} delay={i * 55}>
                <div className="group flex flex-col items-center text-center p-4 rounded-2xl bg-[#F7F7FA] border border-[#E8E8F0] hover:border-[#CB154E]/30 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full cursor-default select-none">
                  <div className="relative mb-3 mt-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: accent, boxShadow: `0 4px 14px ${accent}40` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm"
                      style={{ backgroundColor: accent === "#CB154E" ? "#3B3969" : "#CB154E" }}
                    >
                      {letter}
                    </span>
                  </div>
                  <p className="font-bold text-[#1a1a2e] text-sm mb-1">{label}</p>
                  <p className="text-[#64648c] text-[11px] leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU LEARN ── */}
      <section className="py-12 md:py-16 bg-[#F7F7FA]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />
              Key Learning Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">What You Will Learn</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Left card: CPR Techniques */}
            <Reveal delay={0} className="h-full">
              <div className="group bg-white rounded-2xl p-7 border border-[#E8E8F0] border-l-4 border-l-[#3B3969] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#3B3969] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e]">CPR Techniques</h3>
                </div>
                <ul className="space-y-3">
                  {cprSkills.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#3B3969]/10 flex items-center justify-center">
                        <Icon className="w-2.5 h-2.5 text-[#3B3969]" />
                      </span>
                      <span className="text-[#64648c] text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right card: Emergency Response */}
            <Reveal delay={80} className="h-full">
              <div className="group bg-white rounded-2xl p-7 border border-[#E8E8F0] border-l-4 border-l-[#CB154E] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#CB154E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e]">Emergency Response</h3>
                </div>
                <ul className="space-y-3">
                  {emergencySkills.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start gap-3">
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#CB154E]/10 flex items-center justify-center">
                        <Icon className="w-2.5 h-2.5 text-[#CB154E]" />
                      </span>
                      <span className="text-[#64648c] text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── DELIVERY METHOD ── */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#CB154E]/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#3B3969]/4 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/10 text-[#CB154E] text-sm font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
              Delivery Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">How Training Is Delivered</h2>
            <p className="text-[#64648c] mt-3 max-w-xl">
              Choose the format that suits your team — full hands-on session or flexible blended learning.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-[#E8E8F0] overflow-hidden bg-white shadow-sm">
            {/* Face-to-Face */}
            <Reveal className="p-8 border-b md:border-b-0 md:border-r border-[#E8E8F0] hover:bg-[#F7F7FA] transition-colors duration-300">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                style={{ backgroundColor: "#3B3969", boxShadow: "0 4px 14px rgba(59,57,105,0.25)" }}
              >
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-[#1a1a2e]">Face-to-Face Training</h3>
                <span className="px-2.5 py-1 rounded-full bg-[#3B3969]/10 text-[#3B3969] text-xs font-semibold">~4 hours</span>
              </div>
              <p className="text-[#64648c] text-sm leading-relaxed mb-6">
                Full practical training delivered at your workplace or our training facility. Best for teams who want
                everything in one session.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Hands-on CPR manikin practice",
                  "AED trainer operation",
                  "On-site at your workplace or venue",
                  "Immediate practical assessment",
                  "Ideal for groups of 6–24 participants",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#333333]">
                    <CheckCircle2 className="w-4 h-4 text-[#3B3969] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Blended */}
            <Reveal delay={60} className="p-8 hover:bg-[#F7F7FA] transition-colors duration-300">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md"
                style={{ backgroundColor: "#CB154E", boxShadow: "0 4px 14px rgba(203,21,78,0.25)" }}
              >
                <Monitor className="w-7 h-7 text-white" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-[#1a1a2e]">Blended Learning</h3>
                <span className="px-2.5 py-1 rounded-full bg-[#CB154E]/10 text-[#CB154E] text-xs font-semibold">Flexible</span>
              </div>
              <p className="text-[#64648c] text-sm leading-relaxed mb-6">
                Complete the theory component online at your own pace, then attend a shorter face-to-face practical
                session. Ideal for busy teams.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Online theory — self-paced, anytime",
                  "Shorter in-person practical (~2 hours)",
                  "Perfect for remote or dispersed teams",
                  "Same nationally recognised outcome",
                  "Available at locations across the region",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#333333]">
                    <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD ATTEND ── */}
      <section className="py-12 md:py-16 bg-[#F7F7FA] relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: content */}
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />
                Who Should Attend
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-4">Who Needs CPR Training?</h2>
              <p className="text-[#64648c] leading-relaxed text-base mb-7">
                CPR certification is a legal requirement across many industries in Australia and a vital life skill for
                everyone. This course is suitable for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whoAttends.map(({ icon: Icon, label }, i) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E8E8F0] hover:border-[#3B3969]/25 hover:shadow-sm transition-all duration-200"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#3B3969]/[0.07] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#3B3969]" />
                    </span>
                    <span className="text-[#333333] text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right: image */}
            <Reveal delay={100} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <Image
                  src="/images/cpr-classroom.png"
                  alt="CPR classroom training"
                  fill
                  loading="eager"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-[#E8E8F0] p-5 w-44">
                <p className="text-3xl font-extrabold text-[#CB154E]">ARC</p>
                <p className="text-[#64648c] text-xs font-medium mt-1 leading-snug">
                  Australian Resuscitation Council Guidelines
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#CB154E] to-[#a01040] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent)" }}
        />
        <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center relative z-10">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Book CPR Training?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Book a session for your team or contact us to discuss your training needs. We deliver across the region with
            flexible scheduling.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-[#CB154E] hover:bg-white/90 font-bold px-10 py-3 rounded-lg shadow-lg text-base"
            >
              <Link href="/book-training">Book This Training</Link>
            </Button>
            <Button
              asChild
              className="inline-flex items-center justify-center gap-2 border border-white/50 bg-[#3B3969] text-white hover:bg-[#CB154E] hover:text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors duration-200"
            >
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER (light theme — separated from footer) ── */}
      <NewsletterSection lightTheme />
    </>
  )
}
