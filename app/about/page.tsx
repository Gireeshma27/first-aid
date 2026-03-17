"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { NewsletterSection } from "@/sections/newsletter"
import { Reveal } from "@/components/reveal"
import Image from "next/image"
import type { ComponentType } from "react"
import { CheckCircle2, Heart, Target, Users, Award, Shield, Clock, Building2, BookOpen, Baby, Stethoscope } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Commitment to Excellence",
    description: "We are dedicated to delivering the highest quality training that exceeds industry standards and empowers participants with real-world skills.",
    accentBg: "bg-[#CB154E]/8",
    accentIcon: "text-[#CB154E]",
    hoverBg: "group-hover:bg-[#CB154E]",
    borderColor: "border-t-[#CB154E]",
  },
  {
    icon: Target,
    title: "Practical Focus",
    description: "Our training emphasises hands-on, practical skills that participants can confidently apply in emergency situations.",
    accentBg: "bg-[#3B3969]/8",
    accentIcon: "text-[#3B3969]",
    hoverBg: "group-hover:bg-[#3B3969]",
    borderColor: "border-t-[#3B3969]",
  },
  {
    icon: Users,
    title: "Community Centred",
    description: "We believe everyone deserves access to quality first aid education, from workplaces to schools to community groups.",
    accentBg: "bg-[#CB154E]/8",
    accentIcon: "text-[#CB154E]",
    hoverBg: "group-hover:bg-[#CB154E]",
    borderColor: "border-t-[#CB154E]",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Everything we do is focused on improving safety outcomes and building more prepared communities across Australia.",
    accentBg: "bg-[#3B3969]/8",
    accentIcon: "text-[#3B3969]",
    hoverBg: "group-hover:bg-[#3B3969]",
    borderColor: "border-t-[#3B3969]",
  },
]

const milestones = [
  { year: "2008", event: "First Aid Network Australia established" },
  { year: "2012", event: "Expanded to deliver training nationally" },
  { year: "2015", event: "Launched event medical services division" },
  { year: "2018", event: "Partnership with Healthcorp RTO established" },
  { year: "2020", event: "Introduced blended learning programs" },
  { year: "2023", event: "Trained over 10,000 participants" },
]

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Participants Trained" },
  { value: "500+", label: "Organisations Served" },
  { value: "98%", label: "Satisfaction Rate" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero & Story ── */}
        <section
          className="relative pt-16 pb-14 md:pt-20 md:pb-18 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e1c3d 0%, #3B3969 55%, #4A4880 100%)" }}
        >
          {/* Decorative blobs */}
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-[#CB154E]/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}
          />

          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left */}
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-[#CB154E]" />
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] tracking-tight">
                  Building Confidence in{" "}
                  <span className="text-[#CB154E]">Emergency Response</span>
                </h1>
                <div className="space-y-5 text-lg text-white/70 leading-relaxed font-medium">
                  <p>
                    First Aid Network Australia was founded with a simple mission: to make quality first aid training accessible to everyone. We believe that when more people are trained in first aid, our communities become safer places.
                  </p>
                  <p>
                    Today, we deliver nationally recognised training programs in partnership with Healthcorp RTO, serving workplaces, schools, community organisations, and individuals across Australia.
                  </p>
                </div>
                {/* Trust strip */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20">
                    <Award className="w-4 h-4 text-[#CB154E]" />
                    <span className="text-white/80 text-sm font-semibold">RTO 91222 Partner</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20">
                    <Shield className="w-4 h-4 text-[#CB154E]" />
                    <span className="text-white/80 text-sm font-semibold">Nationally Recognised</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 border border-white/20">
                    <Clock className="w-4 h-4 text-[#CB154E]" />
                    <span className="text-white/80 text-sm font-semibold">15+ Years’ Experience</span>
                  </div>
                </div>
              </div>

              {/* Right — Image */}
              <div className="relative">
                <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/trainer.png"
                    alt="First Aid Network Australia training session"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c3d]/50 via-transparent to-transparent" />
                </div>
                {/* Floating RTO badge */}
                <div className="absolute -left-6 md:-left-12 bottom-16 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 hidden sm:flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#3B3969] flex items-center justify-center shadow-lg flex-shrink-0">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-[#333333]">RTO 91222</p>
                    <p className="text-sm font-medium text-[#666666]">Healthcorp Partner</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-12 md:py-16 bg-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #3B3969 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <div className="text-center mb-10">
              <Reveal>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-[#3B3969]" />
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight">
                Trusted Across Australia
              </h2>
              </Reveal>
            </div>
            <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] border border-[#E5E5E5] rounded-2xl overflow-hidden">
              {([Clock, Users, Building2, Heart] as const).map((Icon, i) => (
                <div key={stats[i].label} className="bg-white flex flex-col items-center text-center px-6 py-8">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    i % 2 === 0 ? "bg-[#3B3969]/10" : "bg-[#CB154E]/10"
                  }`}>
                    <Icon className={`w-5 h-5 ${i % 2 === 0 ? "text-[#3B3969]" : "text-[#CB154E]"}`} />
                  </div>
                  <p className={`text-3xl md:text-4xl font-bold tracking-tight mb-1 ${
                    i % 2 === 0 ? "text-[#3B3969]" : "text-[#CB154E]"
                  }`}>
                    {stats[i].value}
                  </p>
                  <p className="text-sm text-[#666666] leading-snug">{stats[i].label}</p>
                </div>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* ── Our Values ── */}
        <section className="py-12 md:py-16 bg-[#F5F5F5] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3B3969]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-1" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#CB154E]/3 to-transparent rounded-full blur-3xl pointer-events-none -z-1" />
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <div className="text-center mb-10 md:mb-14">
              <Reveal>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-[#3B3969]" />
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] tracking-tight leading-tight">
                What Drives Us
              </h2>
              </Reveal>
            </div>

            <Reveal delay={100}>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${value.accentBg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <value.icon className={`w-6 h-6 ${value.accentIcon}`} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#333333] mb-1.5">{value.title}</h3>
                    <p className="text-sm text-[#666666] leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* ── Journey Timeline ── */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #3B3969 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <Reveal>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-[#CB154E]" />
                Our History
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] tracking-tight leading-tight">
                Our Journey
              </h2>
              <p className="mt-3 text-base md:text-lg text-[#666666] max-w-2xl mx-auto">
                A decade and a half of building safer communities across Australia.
              </p>
              </Reveal>
            </div>

            {/* Timeline */}
            <Reveal delay={100}>
            <div className="relative">
              {/* Mobile — vertical connector line */}
              <div className="absolute left-7 top-7 bottom-0 w-0.5 bg-gradient-to-b from-[#3B3969]/40 via-[#CB154E]/30 to-transparent lg:hidden" />
              {/* Desktop — horizontal connector line */}
              <div className="hidden lg:block absolute top-7 left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-gradient-to-r from-transparent via-[#3B3969]/25 to-transparent" />

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
                {milestones.map((milestone, i) => (
                  <div
                    key={milestone.year}
                    className="relative lg:flex-1 flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center lg:px-3"
                  >
                    {/* Step node */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg font-bold text-sm text-white ${
                        i % 2 === 0 ? "bg-[#3B3969]" : "bg-[#CB154E]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Text */}
                    <div className="lg:mt-6">
                      <p
                        className={`text-2xl md:text-3xl font-black mb-1 tracking-tight ${
                          i % 2 === 0 ? "text-[#3B3969]" : "text-[#CB154E]"
                        }`}
                      >
                        {milestone.year}
                      </p>
                      <p className="text-sm md:text-base text-[#666666] leading-relaxed max-w-xs">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>
          </div>
        </section>

        {/* ── Partnership with Healthcorp RTO ── */}
        <section className="py-12 md:py-16 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Left — RTO visual block */}
              <Reveal>
              <div className="relative">
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #1e1c3d 0%, #3B3969 100%)" }}
                >
                  <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#CB154E]/10 blur-3xl pointer-events-none" />
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
                  />
                  <div className="relative z-10 p-10 md:p-12 text-center">
                    <div className="w-20 h-20 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-5 shadow-inner">
                      <Award className="w-10 h-10 text-white" />
                    </div
>
                    <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-2">
                      Registered Training Organisation
                    </p>
                    <p className="text-5xl font-black text-white tracking-tight mb-1">RTO</p>
                    <p className="text-5xl font-black text-[#CB154E] tracking-tight mb-6">91222</p>
                    <div className="h-px bg-white/10 mb-6" />
                    <p className="text-white/60 text-base leading-relaxed">
                      Healthcorp — delivering nationally recognised qualifications across Australia
                    </p>
                  </div>
                </div>
              </div>
              </Reveal>

              {/* Right — Text content */}
              <Reveal delay={100}>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-sm font-semibold border border-[#CB154E]/10">
                  <Award className="w-4 h-4" />
                  Nationally Recognised
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] leading-tight tracking-tight">
                  Partnership with Healthcorp RTO
                </h2>
                <div className="space-y-5 text-lg text-[#666666] leading-relaxed">
                  <p>
                    First Aid Network Australia delivers training in partnership with Healthcorp, a nationally recognised Registered Training Organisation (RTO). This partnership ensures that all our qualifications are nationally recognised and meet the requirements of employers, regulators, and industry bodies.
                  </p>
                  <p>
                    Our trainers are qualified assessors who maintain current industry knowledge and experience. We are committed to continuous improvement and regularly review our training materials and methods to ensure they reflect the latest guidelines and best practices.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Nationally recognised qualifications",
                    "Qualified and experienced trainers",
                    "Current Australian Resuscitation Council guidelines",
                    "Compliance with national training standards",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#3B3969]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B3969]" />
                      </div>
                      <span className="text-base text-[#666666] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              </Reveal>

            </div>
          </div>
        </section>

        {/* ── Trainer Expertise ── */}
        <section className="py-12 md:py-16 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <SectionHeader
              badge="Our Team"
              title="Experienced Healthcare Professionals"
              description="Our trainers bring real-world emergency response experience to every session, ensuring you receive practical, applicable knowledge."
            />
            </Reveal>
            <Reveal delay={100}>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Qualified Trainers",
                  body: "All trainers hold Certificate IV in Training and Assessment and maintain current first aid qualifications.",
                  bg: "bg-[#3B3969]/8",
                  iconColor: "text-[#3B3969]",
                  hoverBg: "group-hover:bg-[#3B3969]",
                },
                {
                  icon: Shield,
                  title: "Industry Experience",
                  body: "Our trainers come from emergency services, healthcare, and education backgrounds with real-world experience.",
                  bg: "bg-[#CB154E]/8",
                  iconColor: "text-[#CB154E]",
                  hoverBg: "group-hover:bg-[#CB154E]",
                },
                {
                  icon: Clock,
                  title: "Current Knowledge",
                  body: "We stay up-to-date with the latest guidelines, techniques, and best practices in emergency care.",
                  bg: "bg-[#3B3969]/8",
                  iconColor: "text-[#3B3969]",
                  hoverBg: "group-hover:bg-[#3B3969]",
                },
              ].map((item) => (
                <div key={item.title} className="group bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 ${item.hoverBg} transition-colors duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#333333] mb-2 group-hover:text-[#3B3969] transition-colors">{item.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
            </Reveal>
          </div>
        </section>

        {/* ── Who We Work With ── */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle, #3B3969 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <div className="text-center mb-10">
              <Reveal>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-[#CB154E]" />
                Our Clients
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight leading-tight">
                Who We Work With
              </h2>
              <p className="mt-3 text-base md:text-lg text-[#666666] max-w-2xl mx-auto">
                We deliver first aid training and event medical services across a wide range of industries and communities.
              </p>
              </Reveal>
            </div>
            <Reveal delay={100}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {([
                {
                  icon: Building2,
                  label: "Workplaces",
                  description: "Compliant first aid solutions for businesses, manufacturing, construction, and professional office environments of all sizes.",
                  primary: true,
                },
                {
                  icon: BookOpen,
                  label: "Schools",
                  description: "Age-appropriate training for teaching staff and students, ensuring safety on campus and during excursions.",
                  primary: false,
                },
                {
                  icon: Baby,
                  label: "Childcare Services",
                  description: "Specialised programs meeting ACECQA childcare compliance requirements for educators and support staff.",
                  primary: true,
                },
                {
                  icon: Users,
                  label: "Community Organisations",
                  description: "Empowering volunteers and community groups to respond confidently and effectively in emergency situations.",
                  primary: false,
                },
                {
                  icon: Stethoscope,
                  label: "Healthcare Providers",
                  description: "Clinical refresher training aligned with the latest Australian Resuscitation Council guidelines.",
                  primary: true,
                },
              ] as { icon: ComponentType<{ className?: string }>; label: string; description: string; primary: boolean }[]).map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F7FA] border border-[#E8E8F0] hover:border-[#3B3969]/20 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    item.primary ? "bg-[#3B3969]/10" : "bg-[#CB154E]/10"
                  }`}>
                    <item.icon className={`w-5 h-5 ${item.primary ? "text-[#3B3969]" : "text-[#CB154E]"}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#333333] mb-1">{item.label}</h3>
                    <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
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
