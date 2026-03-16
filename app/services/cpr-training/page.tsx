import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/sections/newsletter"
import { CheckCircle2, Heart, Zap, Users, Clock, Phone, ArrowRight, Shield, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HLTAID009 – Provide CPR | First Aid Network Australia",
  description: "Learn CPR for adults, children and infants. Nationally recognised HLTAID009 training covering DRSABCD, AED use, and life-threatening emergency response.",
}

export default function CprTrainingPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#2a1a35] to-[#CB154E]/80 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/course-cpr.png')] bg-cover bg-center opacity-10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#CB154E]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/20 border border-[#CB154E]/30 text-[#ff6b9d] text-sm font-semibold mb-6">
                  <Heart className="w-4 h-4" />
                  Nationally Recognised Training · In partnership with Healthcorp (RTO 91222)
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                  HLTAID009
                  <span className="block text-2xl md:text-3xl font-semibold text-white/70 mt-2">Provide Cardiopulmonary Resuscitation (CPR)</span>
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
                  This course covers the essential skills needed to perform CPR in line with Australian Resuscitation Council guidelines.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[{icon: Clock, label: "Face-to-face & Blended"}, {icon: Users, label: "All workplaces & community"}, {icon: Shield, label: "ARC Guidelines"}].map(({icon: Icon, label}) => (
                    <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                      <Icon className="w-4 h-4 text-[#CB154E]" />{label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 rounded-lg shadow-lg shadow-[#CB154E]/30">
                    <Link href="/contact">Book This Training <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                    <Link href="/contact"><Phone className="w-4 h-4 mr-2" />Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-[440px]">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/3]">
                  <Image src="/images/course-cpr.png" alt="CPR training" fill className="object-cover" />
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

        {/* ── WHAT YOU LEARN ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/[0.07] text-[#CB154E] text-sm font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />Course Content
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">What This Course Covers</h2>
              <p className="text-[#64648c] mt-3 max-w-2xl mx-auto">Participants will learn to respond to cardiac emergencies, perform chest compressions and rescue breaths, and use an AED.</p>
            </div>
            {/* DRSABCD Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-12">
              {[
                {letter: "D", label: "Danger", desc: "Scene safety"},
                {letter: "R", label: "Response", desc: "Check consciousness"},
                {letter: "S", label: "Send", desc: "Call 000"},
                {letter: "A", label: "Airway", desc: "Open & clear"},
                {letter: "B", label: "Breathing", desc: "Assess breathing"},
                {letter: "C", label: "CPR", desc: "Compressions & breaths"},
                {letter: "D", label: "Defib", desc: "Use AED"},
              ].map(({letter, label, desc}) => (
                <div key={label} className="flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-[#3B3969]/5 to-[#3B3969]/10 border border-[#3B3969]/10 hover:border-[#CB154E]/30 hover:from-[#CB154E]/5 hover:to-[#CB154E]/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#CB154E] text-white font-extrabold text-xl flex items-center justify-center mb-2 shadow-lg shadow-[#CB154E]/20">{letter}</div>
                  <p className="font-bold text-[#1a1a2e] text-sm">{label}</p>
                  <p className="text-[#64648c] text-xs mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#F7F7FA] rounded-2xl p-7 border border-[#E8E8F0]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#3B3969] flex items-center justify-center"><Heart className="w-5 h-5 text-white" /></div>
                  <h3 className="text-lg font-bold text-[#1a1a2e]">CPR Skills</h3>
                </div>
                <ul className="space-y-3">
                  {["Perform effective adult CPR","Perform infant and child CPR","Safely operate an Automated External Defibrillator (AED)","Place a casualty into the recovery position","Manage unconscious breathing casualties"].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#CB154E] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F7F7FA] rounded-2xl p-7 border border-[#E8E8F0]">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#CB154E] flex items-center justify-center"><Zap className="w-5 h-5 text-white" /></div>
                  <h3 className="text-lg font-bold text-[#1a1a2e]">Emergency Response</h3>
                </div>
                <ul className="space-y-3">
                  {["Recognise signs of cardiac arrest","Communicate effectively with emergency services (000)","Understand the chain of survival","Follow legal and duty of care requirements","Respond to emergencies in any setting"].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#CB154E] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── DELIVERY METHOD ── */}
        <section className="py-16 md:py-20 bg-[#1a1a2e] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#2d1a42]" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#CB154E]/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />Delivery Method
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Flexible Training Options</h2>
              <p className="text-white/60 mt-3 max-w-xl mx-auto">The theory component can be completed online before a practical session, or you can do it all face-to-face.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#3B3969]/30 blur-2xl group-hover:bg-[#CB154E]/20 transition-colors duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#3B3969] flex items-center justify-center mb-5 group-hover:bg-[#CB154E] transition-colors duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Face-to-Face Training</h3>
                  <p className="text-white/60 leading-relaxed mb-5">Full practical training delivered at your workplace or our training facility. Hands-on experience with CPR manikins and AED trainers.</p>
                  <div className="flex items-center gap-2 text-[#CB154E] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4" /><span>Hands-on practical assessment</span>
                  </div>
                </div>
              </div>
              <div className="group relative rounded-2xl border border-[#CB154E]/30 bg-[#CB154E]/10 p-8 hover:bg-[#CB154E]/15 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#CB154E]/20 blur-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-[#CB154E] flex items-center justify-center mb-5">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Blended Learning</h3>
                  <p className="text-white/60 leading-relaxed mb-5">Complete the theory component online at your own pace, then attend a shorter practical session. Ideal for busy teams and workplaces.</p>
                  <div className="flex items-center gap-2 text-[#CB154E] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4" /><span>Online theory + practical session</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO SHOULD ATTEND ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Who Should Attend
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-5">Who Needs CPR Training?</h2>
                <p className="text-[#64648c] leading-relaxed text-base mb-8">CPR training is relevant for everyone — from workplace first aiders to parents and community members. It is a core requirement across many industries in Australia.</p>
                <div className="grid grid-cols-2 gap-3">
                  {["All workplace employees","Healthcare workers","Teachers & educators","Childcare workers","Sports coaches","Aged care workers","Community volunteers","Anyone 18+"].map(item => (
                    <div key={item} className="flex items-center gap-2.5 bg-[#F7F7FA] rounded-xl px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0" />
                      <span className="text-[#333333] text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image src="/images/cpr-classroom.png" alt="CPR classroom training" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-[#E8E8F0] p-5 w-48">
                  <p className="text-3xl font-extrabold text-[#CB154E]">ARC</p>
                  <p className="text-[#64648c] text-xs font-medium mt-1">Australian Resuscitation Council Guidelines</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#CB154E] to-[#a01040]">
          <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Book CPR Training?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">Book a session for your team or contact us to discuss your training needs. We deliver across the region with flexible scheduling.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-white text-[#CB154E] hover:bg-white/90 font-bold px-10 py-3 rounded-lg shadow-lg text-base">
                <Link href="/contact">Book This Training</Link>
              </Button>
              <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/50 bg-[#3B3969] text-white hover:bg-[#CB154E] hover:text-white font-semibold px-8 py-3 rounded-lg text-base transition-colors duration-200">
                <Link href="/contact"><Phone className="w-4 h-4 mr-2" />Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

