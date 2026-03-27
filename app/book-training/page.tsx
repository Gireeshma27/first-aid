"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  CheckCircle2, Loader2, ArrowRight, Users, Phone, Mail,
  Building2, MessageSquare, User, ShieldCheck, Clock, Award,
  MapPin, Star, HeartPulse, CalendarCheck, Headphones, Sparkles,
  BadgeCheck, Zap,
} from "lucide-react"

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
    color: "#6366f1",
  },
  {
    icon: MapPin,
    title: "We Come to You",
    desc: "On-site training at your workplace, school, or venue.",
    color: "#CB154E",
  },
  {
    icon: Users,
    title: "Any Group Size",
    desc: "From small teams to large corporate events, fully flexible.",
    color: "#0ea5e9",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Scheduling",
    desc: "Weekdays, weekends, and after-hours sessions available.",
    color: "#f59e0b",
  },
  {
    icon: Award,
    title: "Expert Trainers",
    desc: "Delivered by qualified healthcare professionals.",
    color: "#10b981",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    desc: "Post-training support and refresher courses included.",
    color: "#8b5cf6",
  },
]

const stats = [
  { value: "10,000+", label: "People Trained", icon: Users },
  { value: "500+", label: "Organisations", icon: Building2 },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "100%", label: "Cert. Pass Rate", icon: BadgeCheck },
]

const steps = [
  { num: "01", title: "Submit Enquiry", desc: "Fill in the form with your details and requirements." },
  { num: "02", title: "Get a Tailored Quote", desc: "We design a program around your needs and schedule." },
  { num: "03", title: "Training Delivered", desc: "Our certified trainers come to you — anywhere in Australia." },
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .book-page { font-family: 'Plus Jakarta Sans', sans-serif; }
        .book-page * { font-family: inherit; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .anim-up {
          animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-right {
          animation: fadeInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .anim-scale {
          animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.15s; }
        .d3 { animation-delay: 0.25s; }
        .d4 { animation-delay: 0.35s; }
        .d5 { animation-delay: 0.45s; }
        .d6 { animation-delay: 0.55s; }

        /* Form input focus glow */
        .form-input {
          transition: all 0.2s ease;
        }
        .form-input:focus {
          box-shadow: 0 0 0 3px rgba(59, 57, 105, 0.12);
        }

        /* Gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #CB154E 0%, #f7395e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Noise overlay */
        .noise-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* Dot grid */
        .dot-grid-bg {
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        /* Submit button shimmer */
        .btn-submit {
          position: relative;
          overflow: hidden;
        }
        .btn-submit::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0s;
        }
        .btn-submit:hover::after {
          transform: translateX(100%);
          transition: transform 0.55s ease;
        }

        /* Benefit card hover */
        .benefit-card {
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(59, 57, 105, 0.12);
        }

        /* Step connector line */
        .step-connector::after {
          content: '';
          position: absolute;
          top: 22px;
          left: 44px;
          width: calc(100% - 44px);
          height: 2px;
          background: linear-gradient(90deg, #CB154E, rgba(203, 21, 78, 0.1));
        }
        @media (max-width: 767px) {
          .step-connector::after { display: none; }
        }
      `}</style>

      <Navbar />
      <main className="book-page">

        {/* ══════════════════════════════════════════════════════════════
            HERO — Full-width immersive section
        ══════════════════════════════════════════════════════════════ */}
        <section className="noise-bg relative overflow-hidden" style={{
          background: "linear-gradient(150deg, #3B3969 0%, #2e2c5c 30%, #241f4d 60%, #1c1a3a 100%)",
          minHeight: "520px",
        }}>
          {/* Decorative blobs */}
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(203,21,78,0.15) 0%, transparent 60%)", filter: "blur(12px)" }} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 60%)", filter: "blur(12px)" }} />

          {/* Dot grid overlay */}
          <div className="dot-grid-bg absolute inset-0 opacity-40 pointer-events-none" style={{ zIndex: 2 }} />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28" style={{ zIndex: 3 }}>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left — Hero copy */}
              <div className="flex flex-col gap-6">
                <div className="anim-up d1">
                  <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full backdrop-blur-sm">
                    <HeartPulse className="w-3.5 h-3.5 text-[#CB154E]" />
                    Training Enquiry
                  </div>
                </div>

                <div className="anim-up d2">
                  <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] tracking-tight">
                    Book Your{" "}
                    <span className="gradient-text">First Aid</span>{" "}
                    Training
                  </h1>
                </div>

                <div className="anim-up d3">
                  <p className="text-base md:text-lg leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Workplace, school, or community — our certified trainers come to you. Fill in the form and we&apos;ll tailor a program around your needs.
                  </p>
                </div>

                {/* Stats row */}
                <div className="anim-up d4 grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/8 backdrop-blur-sm rounded-2xl px-4 py-4 text-center hover:bg-white/8 transition-colors">
                      <s.icon className="w-4 h-4 text-[#CB154E] mx-auto mb-2" />
                      <p className="text-xl md:text-2xl font-extrabold text-white leading-none">{s.value}</p>
                      <p className="text-[0.65rem] text-white/40 mt-1 font-medium uppercase tracking-wider">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Quick contact */}
                <div className="anim-up d5 flex flex-wrap gap-5 items-center mt-1">
                  <a href="tel:0296272659" className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors text-sm">
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5 text-[#CB154E]" />
                    </div>
                    (02) 9627 2659
                  </a>
                  <a href="mailto:info@firstaidnetworkaustralia.com.au" className="flex items-center gap-2.5 text-white/50 hover:text-white/80 transition-colors text-sm">
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center">
                      <Mail className="w-3.5 h-3.5 text-[#CB154E]" />
                    </div>
                    info@firstaidnetwork...
                  </a>
                </div>
              </div>

              {/* Right — Form Card */}
              <div className="anim-right d3">
                {isSubmitted ? (
                  <div className="bg-white rounded-3xl shadow-2xl p-10 text-center" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.25)" }}>
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
                  <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.25)" }}>
                    {/* Form header */}
                    <div className="px-8 pt-8 pb-5">
                      <div className="flex items-center gap-3 mb-1">
                        <div className="w-9 h-9 rounded-xl bg-[#3B3969] flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-[#1e1c3d]">Training Request</h2>
                      </div>
                      <p className="text-sm text-[#999] mt-1 ml-12">Fill in your details and we&apos;ll handle the rest.</p>
                    </div>

                    <div className="px-8 pb-6">
                      {serverError && (
                        <div className="p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm mb-4">
                          {serverError}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} noValidate className="space-y-4">
                        {/* Row 1: Full Name + Organisation */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="fullName" className="block text-[11px] font-bold text-[#3B3969] uppercase tracking-wider mb-1.5">
                              Full Name <span className="text-[#CB154E]">*</span>
                            </label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bbb]" />
                              <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="Jane Smith"
                                className={`form-input w-full pl-9 pr-4 py-3 rounded-xl border text-sm text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#3B3969] bg-[#f8f8fb] ${
                                  errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200"
                                }`}
                              />
                            </div>
                            {errors.fullName && (
                              <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="organisation" className="block text-[11px] font-bold text-[#3B3969] uppercase tracking-wider mb-1.5">
                              Organisation
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bbb]" />
                              <input
                                id="organisation"
                                name="organisation"
                                type="text"
                                value={form.organisation}
                                onChange={handleChange}
                                placeholder="Company / School"
                                className="form-input w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-[#f8f8fb] text-sm text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#3B3969]"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Number of Participants */}
                        <div>
                          <label htmlFor="participants" className="block text-[11px] font-bold text-[#3B3969] uppercase tracking-wider mb-1.5">
                            Number of Participants
                          </label>
                          <div className="relative">
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bbb]" />
                            <input
                              id="participants"
                              name="participants"
                              type="number"
                              min="1"
                              value={form.participants}
                              onChange={handleChange}
                              placeholder="e.g. 15"
                              className="form-input w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-[#f8f8fb] text-sm text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#3B3969]"
                            />
                          </div>
                        </div>

                        {/* Phone + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label htmlFor="phone" className="block text-[11px] font-bold text-[#3B3969] uppercase tracking-wider mb-1.5">
                              Phone <span className="text-[#CB154E]">*</span>
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bbb]" />
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="0400 000 000"
                                className={`form-input w-full pl-9 pr-4 py-3 rounded-xl border text-sm text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#3B3969] bg-[#f8f8fb] ${
                                  errors.phone ? "border-red-400 bg-red-50" : "border-gray-200"
                                }`}
                              />
                            </div>
                            {errors.phone && (
                              <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-[11px] font-bold text-[#3B3969] uppercase tracking-wider mb-1.5">
                              Email <span className="text-[#CB154E]">*</span>
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#bbb]" />
                              <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`form-input w-full pl-9 pr-4 py-3 rounded-xl border text-sm text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#3B3969] bg-[#f8f8fb] ${
                                  errors.email ? "border-red-400 bg-red-50" : "border-gray-200"
                                }`}
                              />
                            </div>
                            {errors.email && (
                              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                            )}
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-[11px] font-bold text-[#3B3969] uppercase tracking-wider mb-1.5">
                            Message
                          </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-[#bbb]" />
                            <textarea
                              id="message"
                              name="message"
                              rows={3}
                              value={form.message}
                              onChange={handleChange}
                              placeholder="Tell us about your training requirements, preferred dates, location..."
                              className="form-input w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 bg-[#f8f8fb] text-sm text-[#333] placeholder:text-[#ccc] focus:outline-none focus:border-[#3B3969] resize-none"
                            />
                          </div>
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-submit group w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-xl text-white font-bold text-sm hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                          style={{
                            background: "linear-gradient(135deg, #CB154E 0%, #e02460 100%)",
                            boxShadow: "0 8px 24px rgba(203,21,78,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                          }}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Request Training Consultation
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>

                    {/* Form footer */}
                    <div className="border-t border-gray-100 bg-[#fbfbfd] px-8 py-3.5 flex flex-wrap items-center justify-center gap-4 text-[11px] text-[#aaa]">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                        Secure &amp; private
                      </span>
                      <span className="w-px h-3 bg-gray-200" />
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#3B3969]" />
                        Reply within 1 day
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

            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute -bottom-px left-0 right-0 pointer-events-none" style={{ zIndex: 4 }}>
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
              <path d="M0 40L48 36.7C96 33.3 192 26.7 288 26.7C384 26.7 480 33.3 576 40C672 46.7 768 53.3 864 50C960 46.7 1056 33.3 1152 30C1248 26.7 1344 33.3 1392 36.7L1440 40V80H0V40Z" fill="#FAFAFA" />
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            HOW IT WORKS — 3 Steps
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-[#FAFAFA] py-16 lg:py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#CB154E] mb-2 block">
                Simple Process
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e1c3d]">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
              {steps.map((step, idx) => (
                <div key={step.num} className="relative flex flex-col items-center text-center px-6">
                  {/* Connector line between steps */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5"
                      style={{ background: "linear-gradient(90deg, #CB154E, rgba(203,21,78,0.1))" }} />
                  )}
                  <div className="relative w-11 h-11 rounded-full flex items-center justify-center text-sm font-extrabold text-white mb-4"
                    style={{ background: "linear-gradient(135deg, #CB154E 0%, #e02460 100%)", boxShadow: "0 6px 16px rgba(203,21,78,0.3)" }}>
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-[#1e1c3d] mb-1.5">{step.title}</h3>
                  <p className="text-sm text-[#888] leading-relaxed max-w-[220px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            WHY CHOOSE US — Benefit Cards
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 lg:py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#CB154E] mb-2 block">
                Why Choose Us
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1e1c3d] mb-3">
                Everything you need, nothing you don&apos;t.
              </h2>
              <p className="text-sm text-[#888] max-w-lg mx-auto">
                We make first aid training simple, flexible, and effective for organisations of every size.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="benefit-card bg-[#fafafa] rounded-2xl border border-gray-100 p-6 cursor-default"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${color}12` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <h3 className="text-sm font-bold text-[#1e1c3d] mb-1">{title}</h3>
                  <p className="text-sm text-[#888] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            TESTIMONIAL + CTA
        ══════════════════════════════════════════════════════════════ */}
        <section className="bg-[#FAFAFA] py-16 lg:py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <div className="relative bg-gradient-to-br from-[#3B3969] to-[#2a2854] rounded-3xl p-10 lg:p-14 overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#CB154E]/15 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                {/* Testimonial */}
                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                    ))}
                  </div>
                  <blockquote className="text-white/90 text-base lg:text-lg leading-relaxed font-medium italic mb-6">
                    &ldquo;The trainer was fantastic — engaging, knowledgeable, and incredibly professional. Our whole team felt confident after the session.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm">
                      S
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Sarah M.</p>
                      <p className="text-white/45 text-xs">HR Manager, Brisbane</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">Ready to get started?</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-6">
                    Get in touch today and we&apos;ll have your training organised in no time.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:0296272659"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/15 text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-white/15 transition-all backdrop-blur-sm"
                    >
                      <Phone className="w-4 h-4 text-[#CB154E]" />
                      (02) 9627 2659
                    </a>
                    <a
                      href="mailto:info@firstaidnetworkaustralia.com.au"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/15 text-white rounded-xl px-5 py-3 text-sm font-semibold hover:bg-white/15 transition-all backdrop-blur-sm"
                    >
                      <Mail className="w-4 h-4 text-[#CB154E]" />
                      Email Us
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 text-xs mt-4 justify-center md:justify-start">
                    <Clock className="w-3.5 h-3.5" />
                    We typically respond within 1 business day
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
