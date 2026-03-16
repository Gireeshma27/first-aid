import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/sections/newsletter"
import { CheckCircle2, Phone, ArrowRight, Users, Clock, AlertTriangle, Wind, Syringe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Anaphylaxis & Asthma Management Training | First Aid Network Australia",
  description: "Training for the prevention, recognition, and emergency management of anaphylaxis and asthma incidents. Ideal for schools and childcare settings.",
}

export default function AnaphylaxisAsthmaTrainingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[520px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #3B3969 0%, #2d2b5e 50%, #1a1a2e 100%)" }}>
          <div className="absolute inset-0">
            <Image src="/images/course-first-aid.png" alt="" fill className="object-cover opacity-10" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B3969]/70 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20 pb-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/20">
                    <AlertTriangle className="w-4 h-4" />
                    Specialist Training
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/20 text-white/90 text-sm font-medium border border-[#CB154E]/30">
                    Schools &amp; Childcare Settings
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Anaphylaxis &amp; Asthma<br />
                  <span className="text-[#CB154E]">Management Training</span>
                </h1>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  Training for the prevention, recognition, and emergency management of anaphylaxis and asthma incidents. Essential for schools and childcare settings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg shadow-[#CB154E]/20">
                    <Link href="/contact">Book Training <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                    <Link href="/contact">Enquire Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-[420px]">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/3]">
                  <Image src="/images/hero-training.jpg" alt="Anaphylaxis and asthma training" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex-shrink-0 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1a1a2e] font-bold text-sm">Schools &amp; Childcare</p>
                      <p className="text-[#64648c] text-xs">Anaphylaxis &amp; Asthma Response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex flex-wrap gap-6">
              {[{ icon: <Clock className="w-4 h-4" />, text: "Face-to-face & Blended" }, { icon: <Users className="w-4 h-4" />, text: "Schools & Childcare" }, { icon: <AlertTriangle className="w-4 h-4" />, text: "Emergency Response Focus" }].map((s) => (
                <div key={s.text} className="flex items-center gap-2 text-white/70 text-sm">{s.icon}<span>{s.text}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* Split comparison */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/[0.06] text-[#CB154E] text-sm font-semibold mb-4">
                <AlertTriangle className="w-4 h-4" />Dual-Condition Training
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">Two Critical Conditions — One Course</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Anaphylaxis column */}
              <div className="rounded-2xl overflow-hidden border border-[#CB154E]/20 shadow-sm">
                <div className="bg-gradient-to-br from-[#CB154E] to-[#a01040] px-7 py-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Syringe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Anaphylaxis Management</h3>
                  <p className="text-white/80 text-sm">Life-threatening allergic reactions</p>
                </div>
                <div className="bg-white p-7">
                  <ul className="space-y-3">
                    {["Recognise early signs of anaphylaxis", "Respond to life-threatening allergic reactions", "Administer adrenaline using EpiPens or Anapen", "Develop and implement an anaphylaxis action plan", "Understand allergy triggers and prevention strategies"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Asthma column */}
              <div className="rounded-2xl overflow-hidden border border-[#3B3969]/20 shadow-sm">
                <div className="bg-gradient-to-br from-[#3B3969] to-[#2d2b5e] px-7 py-6">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Wind className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Asthma Management</h3>
                  <p className="text-white/80 text-sm">Respiratory emergencies & triggers</p>
                </div>
                <div className="bg-white p-7">
                  <ul className="space-y-3">
                    {["Recognise asthma symptoms and triggers", "Identify and avoid asthma triggers", "Assist someone experiencing an asthma attack", "Use asthma inhalers and spacer devices correctly", "Implement asthma management plans"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#3B3969] flex-shrink-0 mt-0.5" />
                        <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery */}
        <section className="py-16 md:py-20 bg-[#F7F7FA]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Delivery Method
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8">How This Training Is Delivered</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative bg-gradient-to-br from-[#3B3969] to-[#1e1c3d] rounded-2xl p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/[0.03] blur-2xl" />
                <h3 className="text-xl font-semibold mb-3 relative">Face-to-face</h3>
                <p className="text-white/70 leading-relaxed relative">Hands-on practical training delivered at your school or childcare centre by experienced trainers.</p>
              </div>
              <div className="relative bg-gradient-to-br from-[#CB154E] to-[#a01040] rounded-2xl p-8 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/[0.03] blur-2xl" />
                <h3 className="text-xl font-semibold mb-3 relative">Blended Learning</h3>
                <p className="text-white/70 leading-relaxed relative">Online theory combined with a practical component for flexibility around school schedules.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who should attend */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Who Should Attend
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8">Who Is This Training For?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Teachers and school staff", "Childcare educators", "Early childhood workers", "Education support workers", "School canteen staff", "Sports coaches in schools", "After-school care staff", "Any staff with duty of care for children"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl p-4 bg-[#F7F7FA] border border-[#E8E8F0] hover:border-[#CB154E]/30 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-[#CB154E]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#CB154E]" />
                  </div>
                  <span className="text-[#1a1a2e] font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20" style={{ background: "linear-gradient(135deg, #3B3969 0%, #CB154E 70%, #a01040 100%)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Anaphylaxis &amp; Asthma Training</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Ensure your school or care centre team is prepared to respond to allergic and asthmatic emergencies.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg">
                <Link href="/contact">Book Training <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
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

