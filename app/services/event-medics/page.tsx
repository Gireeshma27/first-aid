import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/sections/newsletter"
import { CheckCircle2, Phone, ArrowRight, MapPin, Calendar, Shield, Zap, Users, Heart } from "lucide-react"
import { FiCalendar, FiBriefcase, FiActivity, FiMusic, FiSun, FiUsers, FiMapPin, FiAward } from "react-icons/fi"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Event Medics & On-Site Medical Support | First Aid Network Australia",
  description: "Qualified event medics for school carnivals, corporate functions, excursions and community gatherings. On-site medical support to keep your participants safe.",
}

export default function EventMedicsPage() {
  const eventTypes = [
    { icon: FiCalendar, label: "School Carnivals" },
    { icon: FiBriefcase, label: "Corporate Events" },
    { icon: FiActivity, label: "Sporting Events" },
    { icon: FiMusic, label: "Concerts & Festivals" },
    { icon: FiSun, label: "Excursions & Camps" },
    { icon: FiUsers, label: "Community Gatherings" },
    { icon: FiMapPin, label: "Council Events" },
    { icon: FiAward, label: "Public Events" },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[560px] flex items-center overflow-hidden bg-[#1a1a2e]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#CB154E]/20 blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B3969]/30 blur-3xl animate-blob-delay" />
          <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-white/5 blur-3xl animate-blob-delay-2" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-[#1a1a2e]/60 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/20">
                  <Shield className="w-4 h-4" />
                  Qualified Event Medics
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/20 text-white/90 text-sm font-medium border border-[#CB154E]/30">
                  On-Site Medical Coverage
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Event Medics &amp;<br />
                <span className="text-[#CB154E]">On-Site Medical Support</span>
              </h1>
              <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Qualified medics for events of all sizes — from school carnivals and excursions to corporate functions and community gatherings. Peace of mind for every event.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg">
                  <Link href="/contact">Book Event Coverage <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-12 py-4 flex flex-wrap gap-6">
              {[{ icon: <MapPin className="w-4 h-4" />, text: "On-site at your event" }, { icon: <Calendar className="w-4 h-4" />, text: "All event types" }, { icon: <Zap className="w-4 h-4" />, text: "Rapid medical response" }].map((s) => (
                <div key={s.text} className="flex items-center gap-2 text-white/70 text-sm">{s.icon}<span>{s.text}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* Event type tiles */}
        <section className="py-12 md:py-14 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/[0.06] text-[#CB154E] text-sm font-semibold mb-4">
                <Calendar className="w-4 h-4" />Events We Cover
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]">Every Event, Every Size</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {eventTypes.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#F7F7FA] border border-[#E8E8F0] hover:border-[#CB154E]/30 hover:bg-[#CB154E]/[0.02] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#CB154E]" />
                  </div>
                  <span className="text-sm font-semibold text-[#1a1a2e] text-center">{label}</span>
                </div>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* What's included */}
        <section className="py-12 md:py-16 bg-[#F7F7FA]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />What&apos;s Included
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-10">What Our Event Medics Provide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-[#E8E8F0] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center mb-5">
                  <Heart className="w-5 h-5 text-[#CB154E]" />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-4">On-Site Medical Coverage</h3>
                <ul className="space-y-3">
                  {["Qualified first aid and emergency medical response", "CPR and AED management", "Wound and injury management", "Management of medical emergencies (cardiac, respiratory, allergic)", "Casualty assessment and monitoring", "Liaison with emergency services when required"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#CB154E] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#E8E8F0] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mb-5">
                  <Shield className="w-5 h-5 text-[#3B3969]" />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-4">Why Hire an Event Medic?</h3>
                <ul className="space-y-3">
                  {["Rapid on-site response — seconds, not minutes", "Demonstrates duty of care to participants", "Appropriate medical equipment on-site", "Experienced across diverse event environments", "Works with you to scope the right coverage level", "Professionalism and accountability"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3B3969] flex-shrink-0 mt-0.5" />
                      <span className="text-[#64648c] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        {/* Key benefits */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#3B3969] to-[#2d2b5e] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#CB154E]/10 blur-3xl animate-blob" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#3B3969]/20 blur-3xl animate-blob-delay" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Zap className="w-6 h-6" />, title: "Immediate Response", desc: "A medic on-site can respond in seconds. Early intervention in medical emergencies significantly improves outcomes." },
                { icon: <Shield className="w-6 h-6" />, title: "Duty of Care", desc: "Event organisers have a duty of care to participants. Qualified medical coverage demonstrates responsibility and compliance." },
                { icon: <Users className="w-6 h-6" />, title: "Tailored Coverage", desc: "We work with you to understand your event and provide the right level of medical support for your specific needs." },
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

        {/* Who should use */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Who Should Use This Service
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6">Who Should Book Event Medical Coverage?</h2>
            <div className="flex flex-wrap gap-2.5">
              {["Schools and education providers", "Corporations and businesses", "Sports clubs and associations", "Community event organisers", "Festival and concert promoters", "Councils and local government", "Charities and non-profits", "Anyone organising a public event"].map((item) => (
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
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#3B3969] to-[#2d2b5e] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#CB154E]/10 blur-3xl animate-blob" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#3B3969]/20 blur-3xl animate-blob-delay" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Event Medical Coverage</h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Ensure your event has qualified medical support on-site. Contact us to discuss your event requirements and get a quote.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg">
                <Link href="/contact">Book Event Coverage <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                <Link href="/contact"><Phone className="w-4 h-4 mr-2" />Contact Us</Link>
              </Button>
            </div>
            </Reveal>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

