import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, Phone, ArrowRight, Users, Clock, BookOpen, Baby, GraduationCap, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { NationallyRecognisedBadge } from "@/components/nationally-recognised-badge"
import { RTONotice } from "@/components/rto-notice"

export const metadata: Metadata = {
  title: "HLTAID012 First Aid in Education & Care | First Aid Network Australia",
  description: "Specifically designed for childcare educators, teachers and school staff. Covers infant and child CPR, anaphylaxis, asthma and paediatric emergencies.",
}

export default function FirstAidEducationCarePage() {
  const paediatricTopics = [
    { icon: "", label: "Infant CPR" },
    { icon: "", label: "Child CPR" },
    { icon: "", label: "Choking" },
    { icon: "", label: "Asthma" },
    { icon: "", label: "Anaphylaxis" },
    { icon: "", label: "Febrile Seizures" },
    { icon: "", label: "Head Injuries" },
    { icon: "", label: "Burns & Scalds" },
  ]

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
                  HLTAID012
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  First Aid in Education<br />
                  <span className="text-[#CB154E]">&amp; Care Settings</span>
                </h1>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  Specifically designed for professionals working with children and infants in childcare, early education, and school settings. Includes all HLTAID011 content plus paediatric-specific emergency training.
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
                  <Image src="/images/course-childcare.png" alt="Education and care first aid training" fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex-shrink-0 flex items-center justify-center">
                      <Baby className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1a1a2e] font-bold text-sm">HLTAID012 Certified</p>
                      <p className="text-[#64648c] text-xs">Education &amp; Care Settings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex flex-wrap gap-6">
              {[{ icon: <Clock className="w-4 h-4" />, text: "Face-to-face & Blended" }, { icon: <Baby className="w-4 h-4" />, text: "Paediatric Focus" }, { icon: <BookOpen className="w-4 h-4" />, text: "Nationally Recognised" }].map((s) => (
                <div key={s.text} className="flex items-center gap-2 text-white/70 text-sm">
                  {s.icon}<span>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Paediatric tiles */}
        <section className="py-14 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/[0.06] text-[#CB154E] text-sm font-semibold mb-4">
                  <Baby className="w-4 h-4" />Paediatric Emergencies Covered
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">Child-Specific Emergency Training</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {paediatricTopics.map((t) => (
                  <div key={t.label} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#3B3969]/[0.04] border border-[#3B3969]/10 hover:border-[#CB154E]/30 hover:bg-[#CB154E]/[0.03] transition-colors">
                    <span className="text-3xl">{t.icon}</span>
                    <span className="text-sm font-semibold text-[#1a1a2e] text-center">{t.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Skills grid */}
        <section className="py-12 md:py-16 bg-[#F7F7FA]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Key Learning Outcomes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10">What You Will Learn</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 border border-[#E8E8F0] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center mb-5">
                    <Baby className="w-5 h-5 text-[#CB154E]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Child &amp; Infant Emergencies</h3>
                  <ul className="space-y-3">
                    {["Infant and child CPR", "Childhood choking emergencies", "Asthma management in children", "Anaphylaxis and severe allergic reactions", "Febrile seizures", "Head injuries and falls in children", "Burns, scalds and fractures"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-[#E8E8F0] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mb-5">
                    <GraduationCap className="w-5 h-5 text-[#3B3969]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Risk Management in Education Settings</h3>
                  <ul className="space-y-3">
                    {["Duty of care responsibilities", "Managing medical conditions in childcare", "Incident reporting and documentation", "Infection control in childcare environments", "Managing emergencies during excursions"].map((item) => (
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
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/10 text-[#CB154E] text-sm font-semibold mb-5 border border-[#CB154E]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />Delivery Method
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">How This Training Is Delivered</h2>
              <p className="text-[#64648c] text-base leading-relaxed mb-8 max-w-2xl">We deliver the HLTAID012 course in formats that suit education and care settings, with practical components essential for compliance.</p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-[#CB154E]/40 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#3B3969] flex items-center justify-center mb-4 hover:bg-[#CB154E] transition-colors duration-300">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-[#1a1a2e] font-semibold mb-2">Face-to-face</h3>
                  <p className="text-[#64648c] text-sm leading-relaxed">Full practical training delivered at your education setting or training facility.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-[#CB154E]/40 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#CB154E] flex items-center justify-center mb-4">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-[#1a1a2e] font-semibold mb-2">Blended Learning</h3>
                  <p className="text-[#64648c] text-sm leading-relaxed">Online theory with in-person practical assessment, ideal for busy educators.</p>
                </div>
              </div>
            </Reveal>
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
              <div className="flex flex-wrap gap-2.5">
                {["Childcare educators", "Early childhood workers", "Teachers and school staff", "Education support workers", "Preschool staff", "Family day care providers", "Out-of-school-hours care staff", "Anyone working with children"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F7F7FA] border border-[#E8E8F0] text-[#333333] font-medium text-sm hover:bg-[#3B3969]/[0.04] hover:border-[#3B3969]/20 transition-colors">
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
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Book Education &amp; Care First Aid Training?</h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-8">Equip your team with the required qualification for educators in regulated care settings.</p>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg">
                      <Link href="/book-training">Book Training <ArrowRight className="w-4 h-4 ml-2" /></Link>
                    </Button>
                    <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                      <Link href="/contact"><Phone className="w-4 h-4 mr-2" />Contact Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: "Nationally Recognised", sub: "HLTAID012 qualification" }, { label: "RTO Partner", sub: "Healthcorp (RTO 91222)" }, { label: "All Formats", sub: "F2F & Blended options" }, { label: "Education Sector", sub: "Childcare & school focus" }].map((s) => (
                    <div key={s.label} className="bg-white/[0.08] rounded-2xl p-5 border border-white/10">
                      <div className="text-white font-bold text-sm mb-1">{s.label}</div>
                      <div className="text-white/60 text-xs">{s.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <RTONotice
          courseCode="HLTAID012"
          courseTitle="Provide First Aid in an Education and Care Setting"
        />
      </main>
      <Footer />
    </>
  )
}

