"use client"

import Image from "next/image"
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react"

const badges = [
  {
    type: "icon" as const,
    icon: ShieldCheck,
    label: "ASQA Regulated",
    sublabel: "Quality Assured Training",
    color: "#3B3969",
  },
  {
    type: "icon" as const,
    icon: Award,
    label: "RTO Certified",
    sublabel: "Healthcorp RTO 91222",
    color: "#3B3969",
  },
  {
    type: "image" as const,
    icon: null,
    label: "Nationally Recognised Training",
    sublabel: "Government Recognised Provider",
    color: "#CB154E",
  },
]

export function TrustBadgesStrip() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle, #3B3969 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-10 py-8 md:py-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#CB154E]/30" />
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#3B3969]">
            Trusted &amp; Accredited
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#CB154E]/30" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-3xl mx-auto">
          {badges.map((badge, i) => {
            const isPink = badge.color === "#CB154E"
            return (
              <div
                key={i}
                className={`group relative flex flex-col items-center gap-4 py-7 px-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 cursor-default ${
                  isPink
                    ? "bg-gradient-to-b from-[#CB154E]/[0.03] to-[#CB154E]/[0.07] border-[#CB154E]/20 shadow-[0_2px_16px_rgba(203,21,78,0.06)] hover:shadow-[0_8px_30px_rgba(203,21,78,0.12)] hover:border-[#CB154E]/30"
                    : "bg-gradient-to-b from-[#3B3969]/[0.02] to-[#3B3969]/[0.05] border-[#3B3969]/12 shadow-[0_2px_12px_rgba(59,57,105,0.04)] hover:shadow-[0_8px_30px_rgba(59,57,105,0.1)] hover:border-[#3B3969]/20"
                }`}
              >
              {/* Verified tick */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className={`w-4 h-4 ${isPink ? "text-[#CB154E]" : "text-[#3B3969]"}`} />
              </div>

              {/* Icon container */}
              <div
                className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{
                  background: isPink
                    ? "linear-gradient(135deg, rgba(203,21,78,0.08), rgba(203,21,78,0.15))"
                    : "linear-gradient(135deg, rgba(59,57,105,0.06), rgba(59,57,105,0.12))",
                  border: isPink
                    ? "1.5px solid rgba(203,21,78,0.2)"
                    : "1.5px solid rgba(59,57,105,0.12)",
                }}
              >
                {badge.type === "image" ? (
                  <Image
                    src="/images/nationally-recognised.svg"
                    alt="Nationally Recognised Training"
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                ) : badge.icon ? (
                  <badge.icon className="w-7 h-7 stroke-[1.6]" style={{ color: badge.color }} />
                ) : null}
              </div>

              {/* Text */}
              <div className="text-center">
                <p className={`text-sm font-bold leading-snug ${isPink ? "text-[#CB154E]" : "text-[#3B3969]"}`}>
                  {badge.label}
                </p>
                <p className="text-[11px] font-medium text-[#999] mt-1 leading-snug">
                  {badge.sublabel}
                </p>
              </div>

              {/* Bottom accent line — always visible */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300 w-10 group-hover:w-16"
                style={{ background: badge.color }}
              />
            </div>
            )
          })}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  )
}
