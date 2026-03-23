import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/sections/newsletter"
import { CheckCircle2, Phone, ShieldPlus, ArrowRight, Users, Clock, BookOpen, AlertTriangle } from "lucide-react"
import { FiDroplet, FiZap, FiActivity, FiWind, FiAlertOctagon, FiAlertCircle, FiHeart, FiUser } from "react-icons/fi"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { NationallyRecognisedBadge } from "@/components/nationally-recognised-badge"
import { RTONotice } from "@/components/rto-notice"

export const metadata = {
  title: "HLTAID011 Provide First Aid | First Aid Network Australia",
  description: "Australia's most comprehensive general first aid qualification. Covers CPR, AED use, medical emergencies, wound management, and more.",
}

const emergencies = [
  { icon: FiDroplet, label: "Severe Bleeding", desc: "Control life-threatening haemorrhage with pressure and tourniquets" },
  { icon: FiZap, label: "Burns & Scalds", desc: "Treat thermal, chemical and electrical burns safely" },
  { icon: FiActivity, label: "Fractures", desc: "Immobilise broken bones and manage spinal injuries" },
  { icon: FiWind, label: "Asthma Attack", desc: "Administer reliever medication and manage breathing emergencies" },
  { icon: FiAlertOctagon, label: "Stroke", desc: "Recognise FAST signs and provide urgent first response" },
  { icon: FiAlertCircle, label: "Anaphylaxis", desc: "Use adrenaline auto-injectors for severe allergic reactions" },
  { icon: FiHeart, label: "Heart Attack", desc: "Recognise symptoms and perform CPR with AED" },
  { icon: FiUser, label: "Seizures", desc: "Manage convulsions and protect the casualty from harm" },
]

const cardColors = [
  { bg: "bg-[#FEF0F4]", iconBg: "bg-[#CB154E]/15", iconColor: "text-[#CB154E]" },
  { bg: "bg-[#EEF0FF]", iconBg: "bg-[#3B3969]/15", iconColor: "text-[#3B3969]" },
  { bg: "bg-[#FFF5EC]", iconBg: "bg-[#E67E22]/15", iconColor: "text-[#E67E22]" },
  { bg: "bg-[#ECFDF5]", iconBg: "bg-[#10B981]/15", iconColor: "text-[#10B981]" },
  { bg: "bg-[#F0F4FE]", iconBg: "bg-[#6366F1]/15", iconColor: "text-[#6366F1]" },
  { bg: "bg-[#FEF3F2]", iconBg: "bg-[#EF4444]/15", iconColor: "text-[#EF4444]" },
  { bg: "bg-[#FDF4FF]", iconBg: "bg-[#A855F7]/15", iconColor: "text-[#A855F7]" },
  { bg: "bg-[#F0FDFA]", iconBg: "bg-[#14B8A6]/15", iconColor: "text-[#14B8A6]" },
]

export default function ProvideFirstAidPage() {

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[520px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #3B3969 0%, #2d2b5e 50%, #1a1a2e 100%)" }}>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#CB154E]/20 blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B3969]/30 blur-3xl animate-blob-delay" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl animate-blob-delay-2" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B3969]/80 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-16 pb-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <NationallyRecognisedBadge />
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/20 text-white/90 text-sm font-medium border border-[#CB154E]/30">
                    In partnership with Healthcorp (RTO 91222)
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white/70 text-xs font-mono mb-4 border border-white/10">
                  HLTAID011
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Provide First Aid<br />
                  <span className="text-[#CB154E]">Including CPR</span>
                </h1>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  Australia&apos;s most comprehensive general first aid qualification. Suitable for workplaces, community groups, support workers, healthcare assistants and individuals wanting life-saving skills.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg shadow-[#CB154E]/20">
                    <Link href="/book-training">Book Training <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                    <Link href="/contact">Enquire Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-[420px]">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/3]">
                  <Image src="/images/cpr-classroom.png" alt="First aid training session" fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex-shrink-0 flex items-center justify-center">
                      <ShieldPlus className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1a1a2e] font-bold text-sm">HLTAID011 Certified</p>
                      <p className="text-[#64648c] text-xs">Nationally Recognised Qualification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Stat strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex flex-wrap gap-6">
              {[{ icon: <Clock className="w-4 h-4" />, text: "Face-to-face & Blended" }, { icon: <Users className="w-4 h-4" />, text: "All industries" }, { icon: <BookOpen className="w-4 h-4" />, text: "Nationally Recognised" }].map((s) => (
                <div key={s.text} className="flex items-center gap-2 text-white/70 text-sm">
                  {s.icon}<span>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency tiles — Auto-scrolling carousel */}
        <section className="py-12 md:py-16 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/[0.06] text-[#CB154E] text-sm font-semibold mb-4">
                  <AlertTriangle className="w-4 h-4" />What You&apos;ll Be Ready For
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">Medical Emergencies Covered</h2>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="relative">
              <style>{`
              @keyframes scrollCards {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .scroll-track {
                display: flex;
                gap: 1rem;
                width: max-content;
                animation: scrollCards 30s linear infinite;
              }
              .scroll-track:hover {
                animation-play-state: paused;
              }
            `}</style>
              <div className="scroll-track">
                {[...emergencies, ...emergencies].map(({ icon: Icon, label, desc }, i) => {
                  const color = cardColors[i % cardColors.length]
                  return (
                    <div key={`${label}-${i}`} className={`flex-shrink-0 w-[260px] ${color.bg} rounded-2xl p-5 border border-transparent hover:shadow-lg transition-shadow duration-300`}>
                      <div className={`w-11 h-11 rounded-xl ${color.iconBg} flex items-center justify-center mb-3`}>
                        <Icon className={`w-5 h-5 ${color.iconColor}`} />
                      </div>
                      <h3 className="text-sm font-bold text-[#1a1a2e] mb-1.5">{label}</h3>
                      <p className="text-xs text-[#64648c] leading-relaxed">{desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Skills grid */}
        <section className="py-12 md:py-16 bg-[#F7F7FA]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Key Learning Outcomes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10">What You Will Learn</h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-7 border border-[#E8E8F0] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mb-5">
                    <ShieldPlus className="w-5 h-5 text-[#3B3969]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Core Skills</h3>
                  <ul className="space-y-3">
                    {["Assess emergencies using DRSABCD", "CPR for adults, children & infants", "Use an Automated External Defibrillator (AED)", "Manage casualties until help arrives", "Duty of care and legal principles"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-7 border border-[#E8E8F0] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center mb-5">
                    <AlertTriangle className="w-5 h-5 text-[#CB154E]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Medical Emergencies</h3>
                  <ul className="space-y-3">
                    {["Heart attack and stroke", "Anaphylaxis and severe allergic reactions", "Asthma attacks", "Seizures and diabetic emergencies", "Shock, unconsciousness and fainting"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-7 border border-[#E8E8F0] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mb-5">
                    <BookOpen className="w-5 h-5 text-[#3B3969]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Injury Management</h3>
                  <ul className="space-y-3">
                    {["Severe bleeding and wound care", "Burns and scalds", "Fractures and sprains", "Head and spinal injuries", "Poisoning, bites and marine stings"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Delivery */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-[#F5F5F5] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333333 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#CB154E]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#3B3969]/5 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/10 text-[#CB154E] text-sm font-semibold mb-5 border border-[#CB154E]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />Delivery Method
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">How This Training Is Delivered</h2>
                  <p className="text-[#64648c] text-base leading-relaxed mb-8">We deliver HLTAID011 in formats that work for your situation, whether you need a full day at your workplace or the flexibility of online theory with in-person assessment.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-[#CB154E]/40 transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-[#3B3969] flex items-center justify-center mb-4 hover:bg-[#CB154E] transition-colors duration-300">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-[#1a1a2e] font-semibold mb-2">Face-to-face</h3>
                      <p className="text-[#64648c] text-sm leading-relaxed">Full day practical training at your workplace or our training facility.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-[#CB154E]/40 transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-[#CB154E] flex items-center justify-center mb-4">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-[#1a1a2e] font-semibold mb-2">Blended Learning</h3>
                      <p className="text-[#64648c] text-sm leading-relaxed">Online theory combined with in-person practical assessment.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/cpr-classroom.png" alt="First aid training delivery" fill loading="eager" sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 via-transparent to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Who should attend */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Who Should Attend
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8">Who Is This Training For?</h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-2.5">
                {["All workplace employees", "Support workers and carers", "Healthcare assistants", "Community group members", "Teachers and educators", "Childcare workers", "Fitness instructors", "Anyone seeking first aid certification"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F7F7FA] border border-[#E8E8F0] text-[#333333] font-medium text-sm hover:bg-[#3B3969]/[0.05] hover:border-[#3B3969]/20 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E] flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16" style={{ background: "linear-gradient(135deg, #3B3969 0%, #2d2b5e 60%, #1a1a2e 100%)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <Reveal>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book First Aid Training?</h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-8">Equip your team with Australia&apos;s most comprehensive general first aid qualification. Delivered on-site or at our training facility.</p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg">
                      <Link href="/book-training">Book Training <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                    <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                      <Link href="/contact"><Phone className="w-4 h-4 mr-2" />Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: "Nationally Recognised", sub: "HLTAID011 qualification" }, { label: "RTO Partner", sub: "Healthcorp (RTO 91222)" }, { label: "All Formats", sub: "F2F & Blended options" }, { label: "All Industries", sub: "Workplaces & community" }].map((s) => (
                    <div key={s.label} className="bg-white/[0.08] rounded-2xl p-5 border border-white/10">
                      <div className="text-white font-bold text-sm mb-1">{s.label}</div>
                      <div className="text-white/60 text-xs">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <RTONotice
          courseCode="HLTAID011"
          courseTitle="Provide First Aid"
        />

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

