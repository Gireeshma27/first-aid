"use client"

import { useState } from "react"
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("/api/send-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          organisation: data.get("organisation"),
          participants: data.get("participants"),
          phone: data.get("phone"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || "Request failed")
      }

      setIsSubmitted(true)
    } catch (err: any) {
      console.error("Booking submit error:", err)
      setError(err.message || "Failed to send your enquiry. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-16 animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-[#10b981]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#10b981]" />
        </div>
        <h3 className="text-2xl font-bold text-[#333333] mb-3">Thank You!</h3>
        <p className="text-[#666666] max-w-sm mx-auto">
          We have received your enquiry and will be in touch shortly to discuss your training requirements.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <input
            id="fullName"
            name="fullName"
            placeholder="Full Name *"
            required
            className="w-full bg-transparent border-b border-gray-200 py-3 placeholder:text-[#999999] text-[#333333] font-medium focus:outline-none focus:border-[#CB154E] transition-colors rounded-none"
          />
        </div>
        <div>
          <input
            id="organisation"
            name="organisation"
            placeholder="Organisation"
            className="w-full bg-transparent border-b border-gray-200 py-3 placeholder:text-[#999999] text-[#333333] font-medium focus:outline-none focus:border-[#CB154E] transition-colors rounded-none"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address *"
            required
            className="w-full bg-transparent border-b border-gray-200 py-3 placeholder:text-[#999999] text-[#333333] font-medium focus:outline-none focus:border-[#CB154E] transition-colors rounded-none"
          />
        </div>
        <div>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-transparent border-b border-gray-200 py-3 placeholder:text-[#999999] text-[#333333] font-medium focus:outline-none focus:border-[#CB154E] transition-colors rounded-none"
          />
        </div>
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your training requirements... *"
          rows={4}
          required
          className="w-full bg-transparent border-b border-gray-200 py-3 placeholder:text-[#999999] text-[#333333] font-medium focus:outline-none focus:border-[#CB154E] transition-colors rounded-none resize-none"
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#CB154E] text-white font-semibold text-base hover:bg-[#a50f3d] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Submit Request
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  )
}

