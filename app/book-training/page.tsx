"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  CheckCircle2, Loader2, ArrowRight, Users, Phone, Mail,
  Building2, MessageSquare, User, ShieldCheck, Clock, Award,
  MapPin, Star, HeartPulse, CalendarCheck, Headphones,
} from "lucide-react"
import { Reveal } from "@/components/reveal"

interface FormData {
  fullName: string
  organisation: string
  participants: string
  phone: string
  email: string
  message: string
}

interface FormErrors {
  fullName?: string
  phone?: string
  email?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.fullName.trim()) errors.fullName = "Full name is required."
  if (!data.phone.trim()) errors.phone = "Phone number is required."
  if (!data.email.trim()) {
    errors.email = "Email address is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address."
  }
  return errors
}

const benefits = [
  {
    icon: ShieldCheck,
    title: "Nationally Recognised",
    desc: "All courses are RTO-certified and nationally accredited.",
  },
  {
    icon: MapPin,
    title: "We Come to You",
    desc: "On-site training at your workplace, school, or venue.",
  },
  {
    icon: Users,
    title: "Any Group Size",
    desc: "From small teams to large corporate events, fully flexible.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Scheduling",
    desc: "Weekdays, weekends, and after-hours sessions available.",
  },
  {
    icon: Award,
    title: "Expert Trainers",
    desc: "Delivered by qualified healthcare professionals.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "Post-training support and refresher courses included.",
  },
]

const stats = [
  { value: "10,000+", label: "People Trained" },
  { value: "500+", label: "Organisations" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Cert. Pass Rate" },
]

export default function BookTrainingPage() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    organisation: "",
    participants: "",
    phone: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [serverError, setServerError] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setServerError("")
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Submission failed.")
      }
      setIsSubmitted(true)
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero Banner ── */}
        <section className="relative overflow-hidden bg-[#3B3969] py-20 lg:py-28">
          {/* Background decorative blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#CB154E]/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
            {/* Dot grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium tracking-wide uppercase px-5 py-2 rounded-full mb-7 backdrop-blur-sm">
              <HeartPulse className="w-4 h-4 text-[#CB154E]" />
              Training Enquiry
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Book First Aid{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#CB154E]">Training</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#CB154E]/40 rounded-full" />
              </span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-10">
              Workplace, school, or community. Our certified trainers come to you. Fill in the form and our team will tailor a program around your needs.
            </p>

            {/* Stats row */}
            <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 backdrop-blur-sm px-6 py-4 text-center">
                  <p className="text-2xl font-extrabold text-white">{s.value}</p>
                  <p className="text-xs text-white/60 mt-0.5 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Main Content: Two-column ── */}
        <section className="bg-gradient-to-b from-[#F0F0F5] to-[#FAFAFA] py-16 lg:py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 xl:gap-16 items-start">

              {/* ── Left: Info Panel ── */}
              <Reveal>
              <div className="space-y-8">
                {/* Why book with us */}
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-[#CB154E] mb-2 block">
                    Why choose us
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#3B3969] mb-1">
                    Everything you need, nothing you don&apos;t.
                  </h2>
                  <p className="text-[#666666] text-sm leading-relaxed">
                    We make first aid training simple, flexible, and effective for organisations of every size.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map(({ icon: Icon, title, desc }, idx) => (
                    <div
                      key={title}
                      className="group flex items-start gap-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[#3B3969]/20 transition-all duration-200 stagger-item card-shimmer"
                      style={{ animationDelay: `${idx * 80}ms` }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#3B3969]/8 flex items-center justify-center group-hover:bg-[#CB154E]/10 transition-colors">
                        <Icon className="w-5 h-5 text-[#3B3969] group-hover:text-[#CB154E] transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#3B3969] mb-0.5">{title}</p>
                        <p className="text-xs text-[#888888] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial snippet */}
                <div className="relative bg-[#3B3969] rounded-2xl p-6 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#CB154E]/20 blur-2xl pointer-events-none" />
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#CB154E] text-[#CB154E]" />
                    ))}
                  </div>
                  <blockquote className="relative text-white/90 text-sm leading-relaxed font-medium italic mb-4">
                    &ldquo;The trainer was fantastic, engaging, knowledgeable, and incredibly professional. Our whole team felt confident after the session.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                      S
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Sarah M.</p>
                      <p className="text-white/50 text-xs">HR Manager, Brisbane</p>
                    </div>
                  </div>
                </div>

                {/* Contact strip */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+61400000000"
                    className="flex-1 flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4 shadow-sm hover:shadow-md hover:border-[#CB154E]/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center group-hover:bg-[#CB154E] transition-colors">
                      <Phone className="w-4 h-4 text-[#CB154E] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-[#999999] font-medium">Call Us</p>
                      <p className="text-sm font-bold text-[#3B3969]">0400 000 000</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@firstaidnetworkaustralia.com.au"
                    className="flex-1 flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-5 py-4 shadow-sm hover:shadow-md hover:border-[#CB154E]/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center group-hover:bg-[#CB154E] transition-colors">
                      <Mail className="w-4 h-4 text-[#CB154E] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-[#999999] font-medium">Email Us</p>
                      <p className="text-sm font-bold text-[#3B3969] truncate">info@firstaidnetwork...</p>
                    </div>
                  </a>
                </div>

                {/* Response time badge */}
                <div className="flex items-center gap-3 text-sm text-[#555555]">
                  <Clock className="w-4 h-4 text-[#CB154E] flex-shrink-0" />
                  <span>We typically respond within <strong className="text-[#3B3969]">1 business day</strong>.</span>
                </div>
              </div>

              {/* ── Right: Form Card ── */}
              </Reveal>
              <Reveal delay={100}>
              <div className="lg:sticky lg:top-24">
                {isSubmitted ? (
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#10b981]/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#10b981]" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#3B3969] mb-3">Request Submitted!</h2>
                    <p className="text-[#666666] leading-relaxed text-sm max-w-xs mx-auto">
                      Thank you! Your training request has been received. Our team will be in touch shortly.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-2 text-[#10b981] text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      Expect a reply within 1 business day
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    {/* Form header band */}
                    <div className="bg-gradient-to-r from-[#3B3969] to-[#4e4a8a] px-8 py-6">
                      <h2 className="text-xl font-bold text-white">Training Request Form</h2>
                      <p className="text-white/60 text-sm mt-1">
                        Fill in your details and we&apos;ll handle the rest.
                      </p>
                    </div>

                    <div className="px-8 py-7 space-y-5">
                      {serverError && (
                        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
                          {serverError}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        {/* Row 1: Full Name + Organisation */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="fullName" className="block text-xs font-bold text-[#3B3969] uppercase tracking-wider mb-2">
                              Full Name <span className="text-[#CB154E]">*</span>
                            </label>
                            <div className="relative">
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAAAAA]" />
                              <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="Jane Smith"
                                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#333333] placeholder:text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#3B3969]/25 focus:border-[#3B3969] transition-all bg-[#FAFAFA] ${
                                  errors.fullName ? "border-red-400 bg-red-50 focus:ring-red-200" : "border-gray-200"
                                }`}
                              />
                            </div>
                            {errors.fullName && (
                              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                                {errors.fullName}
                              </p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="organisation" className="block text-xs font-bold text-[#3B3969] uppercase tracking-wider mb-2">
                              Organisation
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAAAAA]" />
                              <input
                                id="organisation"
                                name="organisation"
                                type="text"
                                value={form.organisation}
                                onChange={handleChange}
                                placeholder="Company / School"
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] text-sm text-[#333333] placeholder:text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#3B3969]/25 focus:border-[#3B3969] transition-all"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Number of Participants */}
                        <div>
                          <label htmlFor="participants" className="block text-xs font-bold text-[#3B3969] uppercase tracking-wider mb-2">
                            Number of Participants
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAAAAA]" />
                            <input
                              id="participants"
                              name="participants"
                              type="number"
                              min="1"
                              value={form.participants}
                              onChange={handleChange}
                              placeholder="e.g. 15"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] text-sm text-[#333333] placeholder:text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#3B3969]/25 focus:border-[#3B3969] transition-all"
                            />
                          </div>
                        </div>

                        {/* Phone + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="phone" className="block text-xs font-bold text-[#3B3969] uppercase tracking-wider mb-2">
                              Phone <span className="text-[#CB154E]">*</span>
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAAAAA]" />
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="0400 000 000"
                                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#333333] placeholder:text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#3B3969]/25 focus:border-[#3B3969] transition-all bg-[#FAFAFA] ${
                                  errors.phone ? "border-red-400 bg-red-50 focus:ring-red-200" : "border-gray-200"
                                }`}
                              />
                            </div>
                            {errors.phone && (
                              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                                {errors.phone}
                              </p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-xs font-bold text-[#3B3969] uppercase tracking-wider mb-2">
                              Email <span className="text-[#CB154E]">*</span>
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAAAAA]" />
                              <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-[#333333] placeholder:text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#3B3969]/25 focus:border-[#3B3969] transition-all bg-[#FAFAFA] ${
                                  errors.email ? "border-red-400 bg-red-50 focus:ring-red-200" : "border-gray-200"
                                }`}
                              />
                            </div>
                            {errors.email && (
                              <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                                <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                                {errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-xs font-bold text-[#3B3969] uppercase tracking-wider mb-2">
                            Message
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[#AAAAAA]" />
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              value={form.message}
                              onChange={handleChange}
                              placeholder="Tell us about your training requirements, preferred dates, location..."
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-[#FAFAFA] text-sm text-[#333333] placeholder:text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#3B3969]/25 focus:border-[#3B3969] transition-all resize-none"
                            />
                          </div>
                        </div>

                        {/* Required note */}
                        <p className="text-xs text-[#AAAAAA]">
                          Fields marked <span className="text-[#CB154E] font-semibold">*</span> are required.
                        </p>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-[#CB154E] text-white font-bold text-base hover:bg-[#a50f3d] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#CB154E]/30 hover:shadow-xl hover:shadow-[#CB154E]/40 hover:-translate-y-0.5"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Request Training Consultation
                              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>

                    {/* Form footer trust strip */}
                    <div className="border-t border-gray-100 bg-[#FAFAFA] px-8 py-4 flex flex-wrap items-center justify-center gap-4 text-xs text-[#AAAAAA]">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                        Secure & private
                      </span>
                      <span className="w-px h-3 bg-gray-200" />
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#3B3969]" />
                        Reply within 1 business day
                      </span>
                      <span className="w-px h-3 bg-gray-200" />
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CB154E]" />
                        No spam, ever
                      </span>
                    </div>
                  </div>
                )}
              </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
