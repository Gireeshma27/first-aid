import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/sections/newsletter"
import { CheckCircle2, Phone, ArrowRight, Settings, Layers, Users, Building, GraduationCap, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Custom Training Programs | First Aid Network Australia",
  description: "We offer customised training programs designed to meet the specific needs of organisations.",
}

export default function CustomTrainingPage() {
  const modules = [
    { icon: <Building className="w-5 h-5" />, title: "Workplace Safety Training", desc: "Industry-specific safety inductions, emergency procedures and compliance training tailored to your workspace." },
    { icon: <Heart className="w-5 h-5" />, title: "Health Awareness Programs", desc: "Tailored health education for your workforce covering topics relevant to your team's specific health risks." },
    { icon: <GraduationCap className="w-5 h-5" />, title: "Mental Health Strategies", desc: "Awareness and response training for mental health challenges in the workplace, built for your team culture." },
    { icon: <Layers className="w-5 h-5" />, title: "Industry-Specific Medical", desc: "Specialist medical training designed around the unique risks and requirements of your specific industry." },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[480px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #3B3969 0%, #2d2b5e 40%, #CB154E 100%)" }}>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#CB154E]/25 blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B3969]/30 blur-3xl animate-blob-delay" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl animate-blob-delay-2" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(59,57,105,0.85) 0%, rgba(45,43,94,0.75) 50%, rgba(203,21,78,0.4) 100%)" }} />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/20">
                    <Settings className="w-4 h-4" />
                    Fully Customisable
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/20">
                    Tailored to Your Organisation
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Custom &amp; Tailored<br />
                  <span className="text-[#CB154E]">Training Solutions</span>
                </h1>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  We design and deliver training programs built specifically for your organisation — practical, relevant, and engaging content tailored to your workforce.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg shadow-[#CB154E]/20">
                    <Link href="/book-training">Discuss Your Needs <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                  <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-[420px]">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/3]">
                  <Image src="/images/custom and tailored.png" alt="Custom training programs" fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex-shrink-0 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1a1a2e] font-bold text-sm">Fully Customisable</p>
                      <p className="text-[#64648c] text-xs">Tailored to Your Organisation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training modules */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Training Options
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">What We Can Build For You</h2>
            <p className="text-[#64648c] text-base mb-10 max-w-2xl">Our custom programs can be designed around any of the following areas, or a combination that fits your needs:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {modules.map((m) => (
                <div key={m.title} className="flex items-start gap-5 p-7 rounded-2xl bg-[#F7F7FA] border border-[#E8E8F0] hover:border-[#3B3969]/20 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-[#3B3969] flex items-center justify-center text-white flex-shrink-0">
                    {m.icon}
                  </div>
                  <div>
                    <h3 className="text-[#1a1a2e] font-bold text-base mb-2">{m.title}</h3>
                    <p className="text-[#64648c] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* Our approach */}
        <section className="py-12 md:py-16" style={{ background: "linear-gradient(135deg, #3B3969 0%, #2d2b5e 50%, #1a1a2e 100%)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-5 border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />Our Process
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How We Build Your Program</h2>
                <p className="text-white/70 leading-relaxed mb-8">We work closely with your organisation to understand your workforce, risks, and goals — then build a program from the ground up that delivers real value.</p>
                <ul className="space-y-4">
                  {["We consult with you to understand your organisation's specific needs", "We design content tailored to your workforce and industry", "We deliver training at your location or online", "We ensure practical, relevant and engaging learning outcomes"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/cpr-classroom.png" alt="Custom training session" fill loading="eager" sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/60 via-transparent to-transparent" />
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        {/* Who we work with */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Who We Work With
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8">Organisations We Build Custom Programs For</h2>
            <div className="flex flex-wrap gap-2.5">
              {["Corporations and businesses", "Schools and education providers", "Healthcare providers", "NDIS and disability services", "Mining and resource companies", "Construction and trade", "Hospitality and events", "Any organisation with unique training needs"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F7F7FA] border border-[#E8E8F0] text-[#333333] font-medium text-sm hover:bg-[#3B3969]/[0.05] hover:border-[#3B3969]/20 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969] flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16" style={{ background: "linear-gradient(135deg, #CB154E 0%, #a01040 50%, #3B3969 100%)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let&apos;s Build Your Custom Program</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Tell us about your organisation and we&apos;ll design a training solution that fits your team perfectly.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-white text-[#CB154E] hover:bg-white/90 font-semibold px-8 py-3 h-auto rounded-xl shadow-lg">
                <Link href="/book-training">Start the Conversation <ArrowRight className="w-4 h-4 ml-2" /></Link>
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

