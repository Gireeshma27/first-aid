import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { NewsletterSection } from "@/sections/newsletter"
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
          className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden"
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
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-2 h-2 rounded-full bg-[#3B3969]" />
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight">
                Trusted Across Australia
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {([Clock, Users, Building2, Heart] as const).map((Icon, i) => (
                <div
                  key={stats[i].label}
                  className="group relative bg-[#F5F5F5] rounded-3xl p-10 text-center overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Watermark value in background */}
                  <div className="absolute -bottom-3 -right-2 text-[5.5rem] font-black opacity-[0.06] select-none pointer-events-none leading-none text-[#333333]">
                    {stats[i].value}
                  </div>
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                        i % 2 === 0 ? "bg-[#3B3969]/10" : "bg-[#CB154E]/10"
                      }`}
                    >
                      <Icon className={`w-8 h-8 ${i % 2 === 0 ? "text-[#3B3969]" : "text-[#CB154E]"}`} />
                    </div>
                    <p
                      className={`text-5xl md:text-6xl font-black mb-3 tracking-tight ${
                        i % 2 === 0 ? "text-[#3B3969]" : "text-[#CB154E]"
                      }`}
                    >
                      {stats[i].value}
                    </p>
                    <p className="text-sm font-semibold text-[#666666] uppercase tracking-wider">{stats[i].label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Values ── */}
        <section className="py-16 md:py-24 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#3B3969]" />
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] tracking-tight leading-tight">
                What Drives Us
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className={`group bg-white rounded-3xl p-8 md:p-10 border-t-4 ${value.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${value.accentBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className={`w-7 h-7 md:w-8 md:h-8 ${value.accentIcon}`} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-3 tracking-tight">{value.title}</h3>
                  <p className="text-base md:text-lg text-[#666666] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Journey Timeline ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-14 md:mb-20">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#CB154E]" />
                Our History
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] tracking-tight leading-tight">
                Our Journey
              </h2>
              <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
                A decade and a half of building safer communities across Australia.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Mobile — vertical connector line */}
              <div className="absolute left-7 top-7 bottom-0 w-0.5 bg-gradient-to-b from-[#3B3969]/40 via-[#CB154E]/30 to-transparent lg:hidden" />
              {/* Desktop — horizontal connector line */}
              <div className="hidden lg:block absolute top-7 left-[calc(100%/12)] right-[calc(100%/12)] h-0.5 bg-gradient-to-r from-transparent via-[#3B3969]/25 to-transparent" />

              <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
                {milestones.map((milestone, i) => (
                  <div
                    key={milestone.year}
                    className="relative lg:flex-1 flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 lg:text-center lg:px-3"
                  >
                    {/* Step node */}
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg ${
                        i % 2 === 0 ? "bg-[#3B3969]" : "bg-[#CB154E]"
                      }`}
                    >
                      <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                    </div>

                    {/* Text */}
                    <div className="lg:mt-7">
                      <p
                        className={`text-2xl md:text-3xl font-black mb-1.5 tracking-tight ${
                          i % 2 === 0 ? "text-[#3B3969]" : "text-[#CB154E]"
                        }`}
                      >
                        {milestone.year}
                      </p>
                      <p className="text-sm md:text-base text-[#666666] leading-relaxed">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Partnership with Healthcorp RTO ── */}
        <section className="py-16 md:py-24 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left — RTO visual block */}
              <div className="relative">
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #1e1c3d 0%, #3B3969 100%)" }}
                >
                  <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#CB154E]/10 blur-3xl pointer-events-none" />
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
                  />
                  <div className="relative z-10 p-12 md:p-16 text-center">
                    <div className="w-24 h-24 mx-auto bg-white/10 rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                      <Award className="w-12 h-12 text-white" />
                    </div>
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

              {/* Right — Text content */}
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

            </div>
          </div>
        </section>

        {/* ── Trainer Expertise ── */}
        <section className="py-16 md:py-20 bg-[#F5F5F5]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <SectionHeader
              badge="Our Team"
              title="Experienced Healthcare Professionals"
              description="Our trainers bring real-world emergency response experience to every session, ensuring you receive practical, applicable knowledge."
            />
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
                <div key={item.title} className="group bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-5 ${item.hoverBg} transition-colors duration-300`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <h3 className="text-lg font-bold text-[#333333] mb-2 group-hover:text-[#3B3969] transition-colors">{item.title}</h3>
                  <p className="text-sm text-[#666666] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who We Work With ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#CB154E]" />
                Our Clients
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] tracking-tight leading-tight">
                Who We Work With
              </h2>
              <p className="mt-4 text-lg text-[#666666] max-w-2xl mx-auto">
                We deliver first aid training and event medical services across a wide range of industries and communities.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className={`group bg-white rounded-2xl p-8 border border-gray-100 border-l-4 ${
                    item.primary ? "border-l-[#3B3969]" : "border-l-[#CB154E]"
                  } shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      item.primary ? "bg-[#3B3969]/8" : "bg-[#CB154E]/8"
                    }`}
                  >
                    <item.icon
                      className={`w-7 h-7 ${item.primary ? "text-[#3B3969]" : "text-[#CB154E]"}`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 tracking-tight ${
                      item.primary ? "text-[#3B3969]" : "text-[#CB154E]"
                    }`}
                  >
                    {item.label}
                  </h3>
                  <p className="text-base text-[#666666] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
