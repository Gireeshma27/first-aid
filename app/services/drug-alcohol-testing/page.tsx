import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/sections/newsletter"
import { CheckCircle2, Phone, ArrowRight, Shield, Building, FlaskConical, ClipboardCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Drug and Alcohol Testing | First Aid Network Australia",
  description: "We provide on-site workplace drug and alcohol testing services using approved saliva testing devices.",
}

export default function DrugAlcoholPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[480px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #3B3969 0%, #2d2b5e 50%, #1a1a2e 100%)" }}>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#CB154E]/20 blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B3969]/30 blur-3xl animate-blob-delay" />
          <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl animate-blob-delay-2" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3B3969]/80 via-transparent to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/20">
                    <Shield className="w-4 h-4" />
                    Workplace Compliance
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/20 text-white/90 text-sm font-medium border border-[#CB154E]/30">
                    Approved Saliva Testing Devices
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Drug and Alcohol<br />
                  <span className="text-[#CB154E]">Testing Services</span>
                </h1>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  On-site workplace drug and alcohol testing services using approved saliva testing devices. Helping organisations maintain workplace safety and meet compliance obligations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg shadow-[#CB154E]/20">
                    <Link href="/book-training">Book a Testing Visit <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                    <Link href="/contact">Enquire Now</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-[420px]">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/3]">
                  <Image src="/images/drug.png" alt="Drug and alcohol testing services" fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex-shrink-0 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1a1a2e] font-bold text-sm">Workplace Compliance</p>
                      <p className="text-[#64648c] text-xs">On-Site Testing Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service overview */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Service Overview
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">Workplace Drug &amp; Alcohol Testing</h2>
                  <p className="text-[#64648c] leading-relaxed text-base mb-6">
                    We provide on-site workplace drug and alcohol testing services using approved saliva testing devices. Our testing helps organisations maintain a safe working environment and meet their health and safety compliance obligations.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { icon: <Building className="w-5 h-5" />, label: "At workplaces", sub: "On-site testing conducted at your location" },
                      { icon: <FlaskConical className="w-5 h-5" />, label: "Training visits", sub: "Testing conducted during training sessions" },
                      { icon: <ClipboardCheck className="w-5 h-5" />, label: "Large organisations", sub: "Scalable testing for bigger teams" },
                      { icon: <Shield className="w-5 h-5" />, label: "Events", sub: "On-site medical and safety events" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F7F7FA] border border-[#E8E8F0]">
                        <div className="w-8 h-8 rounded-lg bg-[#3B3969]/10 flex items-center justify-center text-[#3B3969] flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-[#1a1a2e] font-semibold text-sm">{item.label}</div>
                          <div className="text-[#64648c] text-xs mt-0.5">{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/drug.png" alt="Drug and alcohol testing services" fill loading="eager" sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/40 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Compliance benefits */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#3B3969] to-[#2d2b5e] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3B3969]/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-5 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />Why Drug &amp; Alcohol Testing Matters
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">This Service Helps Organisations Maintain</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <Shield className="w-6 h-6" />, title: "Workplace Safety", desc: "Reduce risk of accidents caused by impaired workers. Protect your team and clients from preventable incidents." },
                  { icon: <ClipboardCheck className="w-6 h-6" />, title: "Policy Compliance", desc: "Meet health and safety compliance requirements and demonstrate adherence to your workplace drug and alcohol policies." },
                  { icon: <Building className="w-6 h-6" />, title: "Risk Reduction", desc: "Implement effective risk reduction strategies to protect your organisation from liability and workplace hazards." },
                ].map((b) => (
                  <div key={b.title} className="bg-white/[0.06] rounded-2xl p-7 border border-white/10">
                    <div className="w-12 h-12 rounded-2xl bg-[#CB154E]/20 flex items-center justify-center text-[#CB154E] mb-5">
                      {b.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16" style={{ background: "linear-gradient(135deg, #3B3969 0%, #2d2b5e 60%, #1a1a2e 100%)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Drug &amp; Alcohol Testing</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Maintain a safe and compliant workplace. Contact us to arrange on-site testing for your organisation.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg">
                  <Link href="/book-training">Book Testing <ArrowRight className="w-4 h-4 ml-2" /></Link>
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

