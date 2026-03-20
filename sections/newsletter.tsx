"use client"

import { useState } from "react"
import { Mail, CheckCircle2, ArrowRight, Bell } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function NewsletterSection({ lightTheme = true }: { lightTheme?: boolean }) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-[#F7F7FB]">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#3B3969]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#CB154E]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          {isSubmitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center gap-4 text-center max-w-md mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a2e]">You&apos;re all set!</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We&apos;ll keep you updated with the latest training news and opportunities.
              </p>
            </div>
          ) : (
            /* ── Two-column layout ── */
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left — Content */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3B3969]/10 text-[#3B3969] text-xs font-semibold mb-5 tracking-wide">
                  <Bell className="w-3.5 h-3.5" />
                  Stay in the Loop
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight tracking-tight mb-4">
                  Get the Latest Training Updates
                </h2>

                <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-lg">
                  Subscribe to receive updates about upcoming training programs, safety resources, and community events — straight to your inbox.
                </p>

                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                    No spam
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                    Unsubscribe anytime
                  </span>
                </div>
              </div>

              {/* Right — Form card */}
              <div className="rounded-2xl bg-white border border-gray-200 shadow-lg p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#CB154E]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a2e]">Subscribe to Newsletter</p>
                    <p className="text-xs text-gray-400">Join 10,000+ subscribers</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F5F5F8] border border-gray-200 text-sm text-[#1a1a2e] placeholder:text-gray-400 outline-none focus:border-[#CB154E]/50 focus:ring-1 focus:ring-[#CB154E]/30 focus:bg-white transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #CB154E 0%, #e02460 100%)",
                      boxShadow: "0 4px 14px rgba(203,21,78,0.35)",
                    }}
                  >
                    {isSubmitting ? "Subscribing..." : (
                      <>Subscribe Now <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>
                </form>

                <p className="text-[11px] text-gray-400 mt-4 text-center">
                  By subscribing, you agree to receive our newsletter emails.
                </p>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
