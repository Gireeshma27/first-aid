import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/sections/newsletter"
import { CheckCircle2, Phone, ArrowRight, Users, GraduationCap, AlertTriangle, Syringe, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "RAMOAP Training for NSW Teachers | First Aid Network Australia",
  description: "Recognition and Management of Anaphylaxis Program for NSW school staff. Specifically designed to support teachers in recognising and responding to anaphylaxis in school-aged children.",
}

export default function RamoapTrainingPage() {
  const steps = [
    { step: "1", title: "Recognise", desc: "Identify mild to moderate and severe allergic reaction symptoms in children" },
    { step: "2", title: "Act Immediately", desc: "Follow the student's individual emergency response process without delay" },
    { step: "3", title: "Administer", desc: "Use EpiPen or Anapen adrenaline auto-injector as trained" },
    { step: "4", title: "Call 000", desc: "Contact emergency services and monitor the student until ambulance arrives" },
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
                    <GraduationCap className="w-4 h-4" />
                    NSW Schools Program
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/20 text-white/90 text-sm font-medium border border-[#CB154E]/30">
                    Anaphylaxis Emergency Training
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  RAMOAP Training<br />
                  <span className="text-[#CB154E]">for NSW Teachers</span>
                </h1>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
                  Recognition and Management of Anaphylaxis Program — specifically designed to support school staff in recognising and responding to anaphylaxis in school-aged children.
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xl">
                  Anaphylaxis can develop rapidly and become life-threatening within minutes. This training gives educators the confidence to act without delay.
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
                  <Image src="/images/anaphylaxis.png" alt="RAMOAP anaphylaxis training" fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex-shrink-0 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1a1a2e] font-bold text-sm">NSW Schools Program</p>
                      <p className="text-[#64648c] text-xs">RAMOAP Anaphylaxis Response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex flex-wrap gap-6">
              {[{ icon: <GraduationCap className="w-4 h-4" />, text: "NSW Schools" }, { icon: <AlertTriangle className="w-4 h-4" />, text: "Anaphylaxis Focused" }, { icon: <Syringe className="w-4 h-4" />, text: "EpiPen & Anapen Training" }].map((s) => (
                <div key={s.text} className="flex items-center gap-2 text-white/70 text-sm">{s.icon}<span>{s.text}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* Response steps */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/[0.06] text-[#CB154E] text-sm font-semibold mb-4">
                Emergency Response Steps
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">The RAMOAP Emergency Response</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s) => (
                <div key={s.step} className="relative">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#CB154E] flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg">
                      {s.step}
                    </div>
                    <h3 className="text-base font-bold text-[#1a1a2e] mb-2">{s.title}</h3>
                    <p className="text-[#64648c] text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* Course content */}
        <section className="py-12 md:py-16 bg-[#F7F7FA]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Key Learning Outcomes
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10">What RAMOAP Training Covers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-7 border border-[#E8E8F0] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mb-5">
                  <AlertTriangle className="w-5 h-5 text-[#3B3969]" />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Recognition of Allergic Reactions</h3>
                <ul className="space-y-3">
                  {["Mild to moderate allergic reactions", "Signs that an allergic reaction is escalating", "Symptoms of anaphylaxis in schoolchildren", "Differences between mild and life-threatening responses"].map((item) => (
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
                <h3 className="text-base font-bold text-[#1a1a2e] mb-4">ASCIA Action Plan for Anaphylaxis</h3>
                <ul className="space-y-3">
                  {["How to read and follow the ASCIA Action Plan", "How the action plan supports rapid decision-making", "Why action plans are essential in school medical emergencies", "Acting on symptoms rather than waiting for them to worsen"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-[#E8E8F0] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center mb-5">
                  <Syringe className="w-5 h-5 text-[#CB154E]" />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Adrenaline Auto-Injector Use</h3>
                <ul className="space-y-3">
                  {["When an adrenaline auto-injector should be used", "How to safely administer EpiPen and Anapen", "Practical familiarity with the devices", "Confidence in responding under pressure"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-7 border border-[#E8E8F0] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mb-5">
                  <Users className="w-5 h-5 text-[#3B3969]" />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Emergency Response Procedures</h3>
                <ul className="space-y-3">
                  {["Acting immediately if anaphylaxis is suspected", "Following the student's individual emergency response process", "Calling for help and contacting emergency services", "Monitoring the student while waiting for an ambulance"].map((item) => (
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
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#3B3969]/20 blur-3xl animate-blob" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-5 border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />Delivery Method
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How This Training Is Delivered</h2>
            <p className="text-white/60 mb-8 max-w-xl">RAMOAP is delivered in formats designed to fit around school schedules and requirements.</p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="bg-white/[0.07] rounded-2xl p-6 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#3B3969] flex items-center justify-center mb-4">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Face-to-face</h3>
                <p className="text-white/60 text-sm leading-relaxed">Delivered at your school by our experienced trainers with hands-on practical components.</p>
              </div>
              <div className="bg-white/[0.07] rounded-2xl p-6 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#CB154E] flex items-center justify-center mb-4">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Blended Learning</h3>
                <p className="text-white/60 text-sm leading-relaxed">Online theory with a practical session, designed to fit around school schedules.</p>
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
            <p className="text-[#64648c] mb-6">RAMOAP training is suitable for NSW school-based staff who may need to respond to anaphylaxis emergencies involving children, including:</p>
            <div className="flex flex-wrap gap-2.5">
              {["Teachers", "School support staff", "Administrative staff", "Teacher aides", "Playground duty staff", "Excursion supervisors", "School canteen staff", "Other education staff"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F7F7FA] border border-[#E8E8F0] text-[#333333] font-medium text-sm hover:bg-[#CB154E]/[0.04] hover:border-[#CB154E]/30 transition-colors">
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
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book RAMOAP Training for Your School</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Ensure your school staff are confident and prepared to respond to anaphylaxis emergencies.</p>
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

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

