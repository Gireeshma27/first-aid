import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, Phone, ArrowRight, Users, Activity, Heart, AlertTriangle, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Community Clinical Awareness Training | First Aid Network Australia",
  description: "A non-accredited course for disability support workers, aged care workers, and community carers. Covers stroke, heart attack, sepsis, and practical vital signs checks.",
}

export default function CommunityClinicalAwarenessPage() {
  const conditions = [
    { icon: "", label: "Stroke" },
    { icon: "", label: "Heart Attack" },
    { icon: "", label: "Sepsis" },
    { icon: "", label: "Breathing Distress" },
    { icon: "", label: "Sudden Confusion" },
    { icon: "", label: "Diabetic Complications" },
    { icon: "", label: "Infection" },
    { icon: "", label: "Dehydration" },
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B3969]/70 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 pb-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/20">
                    <Activity className="w-4 h-4" />
                    Non-Accredited Training
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/20 text-white/90 text-sm font-medium border border-[#CB154E]/30">
                    NDIS &amp; Community Support Workers
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Community Clinical<br />
                  <span className="text-[#CB154E]">Awareness Training</span>
                </h1>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  Recognising early warning signs of clinical deterioration in community settings. Designed for support workers, carers, and NDIS staff who work with vulnerable clients.
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
                  <Image src="/images/community.png" alt="Community clinical awareness training" fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex-shrink-0 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1a1a2e] font-bold text-sm">NDIS &amp; Community Focus</p>
                      <p className="text-[#64648c] text-xs">Clinical Deterioration Recognition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex flex-wrap gap-6">
              {[{ icon: <Activity className="w-4 h-4" />, text: "Clinical Recognition" }, { icon: <Heart className="w-4 h-4" />, text: "Vital Signs Assessment" }, { icon: <Users className="w-4 h-4" />, text: "Community & NDIS Focus" }].map((s) => (
                <div key={s.text} className="flex items-center gap-2 text-white/70 text-sm">{s.icon}<span>{s.text}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions tiles */}
        <section className="py-12 md:py-14 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/[0.06] text-[#CB154E] text-sm font-semibold mb-4">
                  <AlertTriangle className="w-4 h-4" />Clinical Warning Signs Covered
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">Conditions You&apos;ll Learn to Recognise</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {conditions.map((c) => (
                  <div key={c.label} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#3B3969]/[0.04] border border-[#3B3969]/10 hover:border-[#CB154E]/30 hover:bg-[#CB154E]/[0.03] transition-colors">
                    <span className="text-3xl">{c.icon}</span>
                    <span className="text-sm font-semibold text-[#1a1a2e] text-center">{c.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section className="py-12 md:py-16 bg-[#F7F7FA]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Key Learning Outcomes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10">Topics Covered</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 border border-[#E8E8F0] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mb-5">
                    <Activity className="w-5 h-5 text-[#3B3969]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Clinical Signs Recognition</h3>
                  <p className="text-[#64648c] text-sm mb-4">Participants learn how to recognise symptoms of:</p>
                  <ul className="space-y-3">
                    {["Stroke", "Heart attack", "Sepsis", "Sudden confusion or delirium", "Breathing distress", "Diabetic complications", "Infection and dehydration"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-[#E8E8F0] shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center mb-5">
                    <Heart className="w-5 h-5 text-[#CB154E]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Practical Vital Signs Skills</h3>
                  <p className="text-[#64648c] text-sm mb-4">Participants learn how to safely perform basic observations including:</p>
                  <ul className="space-y-3">
                    {["Checking blood pressure", "Monitoring blood glucose levels", "Recognising abnormal vital signs", "Identifying when escalation of care is required"].map((item) => (
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
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#3B3969] to-[#2d2b5e] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#3B3969]/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-5 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />Delivery Method
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How This Training Is Delivered</h2>
              <p className="text-white/60 mb-8 max-w-xl">Delivered in formats that work for your organisation and client base.</p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                <div className="bg-white/[0.07] rounded-2xl p-6 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#3B3969] flex items-center justify-center mb-4">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Face-to-face</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Delivered at your organisation or care facility with hands-on practical components.</p>
                </div>
                <div className="bg-white/[0.07] rounded-2xl p-6 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-[#CB154E] flex items-center justify-center mb-4">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Group Training</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Tailored sessions for teams of community workers, support staff, and carers.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Who should attend */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Who Should Attend
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-3">Who Is This Training For?</h2>
              <p className="text-[#64648c] mb-6">This training is particularly valuable for workers who support clients in community settings.</p>
              <div className="flex flex-wrap gap-2.5">
                {["Disability support workers", "Aged care workers", "Community carers", "NDIS support staff", "Social workers", "Community health workers", "Home care staff", "Volunteer support workers"].map((item) => (
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
        <section className="py-12 md:py-16" style={{ background: "linear-gradient(135deg, #3B3969 0%, #CB154E 70%, #a01040 100%)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Community Clinical Awareness Training</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Equip your team with the knowledge to recognise and respond to clinical deterioration in the community.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg">
                  <Link href="/book-training">Book Training <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                  <Link href="/contact"><Phone className="w-4 h-4 mr-2" />Contact Us</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* RTO Compliance */}
        <section className="py-10 md:py-14 bg-[#F7F7FA] border-t border-[#E8E8F0]">
          <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
            <p className="text-[#64648c] text-sm leading-relaxed">
              This training is delivered in partnership with{" "}
              <strong className="text-[#1a1a2e]">Healthcorp (RTO 91222)</strong>, a Registered Training Organisation approved to deliver nationally recognised qualifications under the Australian Skills Quality Authority (ASQA).
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

