import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, Phone, ArrowRight, HeartPulse, Building, Stethoscope, ShieldPlus, BriefcaseMedical } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { RTONotice } from "@/components/rto-notice"

export const metadata: Metadata = {
  title: "Medicine & On-Site Support | First Aid Network Australia",
  description: "Professional on-site medical support, medicine administration and health management for workplaces and specialised environments.",
}

export default function MedicineOnsiteSupportPage() {
  const servicesList = [
    { icon: <BriefcaseMedical className="w-5 h-5" />, title: "Medicine Administration", desc: "Safe, compliant and professional administration of scheduled medicines and treatments on-site." },
    { icon: <Stethoscope className="w-5 h-5" />, title: "Clinical Assessments", desc: "Ongoing health monitoring, vital signs checks and clinical risk assessments for your workforce." },
    { icon: <Building className="w-5 h-5" />, title: "Workplace Health Clinics", desc: "Establishing and staffing temporary or permanent on-site medical clinics tailored to your operations." },
    { icon: <ShieldPlus className="w-5 h-5" />, title: "Emergency Response", desc: "Immediate, dedicated medical response teams ready to handle trauma, medical crises or health emergencies." },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[480px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #3B3969 0%, #1e1c3d 40%, #CB154E 100%)" }}>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#CB154E]/25 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B3969]/30 blur-3xl" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(59,57,105,0.85) 0%, rgba(30,28,61,0.75) 50%, rgba(203,21,78,0.4) 100%)" }} />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/20">
                    <HeartPulse className="w-4 h-4" />
                    Clinical Excellence
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/20">
                    Professional Care
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Medicine &amp; <br />
                  <span className="text-[#CB154E]">On-Site Support</span>
                </h1>
                <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  Comprehensive medical support for your organization. From medicine administration to complex clinical assessments, our registered health professionals provide peace of mind in high-risk environments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-[#CB154E] hover:bg-[#a50f3d] text-white font-semibold px-8 py-3 h-auto rounded-xl shadow-lg shadow-[#CB154E]/20">
                    <Link href="/contact">Request Support <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0 w-full lg:w-[420px]">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 aspect-[4/3]">
                  <Image src="/images/community.png" alt="On-Site Medical Support" fill priority sizes="(max-width: 1024px) 100vw, 420px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-lg">
                    <div className="w-10 h-10 rounded-lg bg-[#CB154E] flex-shrink-0 flex items-center justify-center">
                      <Stethoscope className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1a1a2e] font-bold text-sm">Qualified Professionals</p>
                      <p className="text-[#64648c] text-xs">Registered Nurses &amp; Medics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/[0.07] text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />Our Competencies
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">Dedicated On-Site Care</h2>
              <p className="text-[#64648c] text-base mb-10 max-w-2xl">We deliver a comprehensive suite of medical services configured to your site requirements, mitigating risk and ensuring personnel wellbeing.</p>
              <div className="grid md:grid-cols-2 gap-6">
                {servicesList.map((m) => (
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

        {/* Why Choose Us */}
        <section className="py-12 md:py-16" style={{ background: "linear-gradient(135deg, #3B3969 0%, #2d2b5e 50%, #1a1a2e 100%)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-semibold mb-5 border border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />Excellence in Care
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Trust Our Support Teams</h2>
                  <p className="text-white/70 leading-relaxed mb-8">Our medical teams bring years of clinical experience to your workplace. We bridge the gap between first aid and hospital-level care by providing registered professionals where you need them most.</p>
                  <ul className="space-y-4">
                    {["Staffed by experienced Registered Nurses and advanced clinical practitioners", "Compliant with all state and federal health regulations", "Seamless integration into your existing site safety protocols", "Equipped with industry-standard medical technology and supplies"].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image src="/images/hero-training.png" alt="Clinical professionals" fill loading="eager" sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3969]/60 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16" style={{ background: "linear-gradient(135deg, #CB154E 0%, #a01040 50%, #3B3969 100%)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Secure Professional Medical Support</h2>
              <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">Discuss your site-specific requirements with our clinical management team and construct a robust medical support framework.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-white text-[#CB154E] hover:bg-white/90 font-semibold px-8 py-3 h-auto rounded-xl shadow-lg">
                  <Link href="/contact">Enquire Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button asChild className="inline-flex items-center justify-center gap-2 border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-3 h-auto rounded-xl transition-colors duration-200">
                  <Link href="tel:1300000000"><Phone className="w-4 h-4 mr-2" />1300 000 000</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* RTO Compliance */}
        <RTONotice />
      </main>
      <Footer />
    </>
  )
}
