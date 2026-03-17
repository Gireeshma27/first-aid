"use client"

import { useState } from "react"
import { Mail, CheckCircle2 } from "lucide-react"
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

  const isDark = !lightTheme

  return (
    <section className={`py-[44px] md:py-[56px] relative overflow-hidden ${
      isDark
        ? "bg-gradient-to-br from-[#3B3969] to-[#2E2C5A]"
        : "bg-[#F5F5F5] border-t border-[#E5E5E5]"
    }`}>
      {/* Subtle Pattern overlay */}
      {isDark && <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>}
      
      <div className="mx-auto max-w-4xl px-5 lg:px-8 relative z-10">
        <Reveal>
        {isSubmitted ? (
          /* ── Success ── */
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-green-400" />
            </div>
            <div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-[#1a1a2e]"}`}>Thank you for subscribing!</h3>
              <p className={`text-sm leading-relaxed max-w-sm mx-auto ${isDark ? "text-white/70" : "text-[#64648c]"}`}>
                We&apos;ll keep you updated with the latest news and training opportunities.
              </p>
            </div>
          </div>
        ) : (
          /* ── Default: Centered layout ── */
          <div className="text-center">
            <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-3 ${isDark ? "text-white" : "text-[#1a1a2e]"}`}>
              Stay Updated with First Aid Training and Safety Tips
            </h2>

            <p className={`text-base max-w-2xl mx-auto mb-8 ${isDark ? "text-white/80" : "text-[#64648c]"}`}>
              Subscribe to receive updates about upcoming training programs, safety resources, and community events.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className={`rounded-lg px-5 py-3.5 w-full focus:outline-none focus:ring-2 focus:ring-[#CB154E] transition-all ${
                  isDark
                    ? "bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:bg-white/15"
                    : "bg-white border border-[#E5E5E5] text-[#1a1a2e] placeholder:text-[#9090a0] focus:bg-white"
                }`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#CB154E] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#a51140] hover:scale-[1.02] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        )}
        </Reveal>
      </div>
    </section>
  )
}
