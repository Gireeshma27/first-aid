"use client"

import Image from "next/image"
import { ShieldCheck, Award, CheckCircle2 } from "lucide-react"

const badges = [
  {
    type: "icon" as const,
    icon: ShieldCheck,
    label: "ASQA Regulated",
    sublabel: "Quality Assured Training",
    color: "#3b3f69",
  },
  {
    type: "icon" as const,
    icon: Award,
    label: "In Partnership",
    sublabel: "Healthcorp RTO 91222",
    color: "#3b3f69",
  },
  {
    type: "image" as const,
    icon: null,
    label: "Nationally Recognised Training",
    sublabel: "Government Recognised Provider",
    color: "#ca1254",
  },
]

export function TrustBadgesStrip() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "transparent",
        backgroundSize: "24px 24px",
      }} />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-10 py-8 md:py-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#3b3f69]" />
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#3b3f69]">
            Trusted &amp; Accredited
          </p>
          <div className="h-px w-12 bg-[#3b3f69]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-3xl mx-auto">
          {badges.map((badge, i) => {
            const isPink = badge.color === "#ca1254"
            return (
              <div
                key={i}
                className={`group relative flex flex-col items-center gap-4 py-7 px-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 cursor-default ${
                  isPink
                    ? "bg-[#ca1254]/[0.05] border-[#ca1254]/20 shadow-[0_2px_16px_rgba(202,18,84,0.06)] hover:shadow-[0_8px_30px_rgba(202,18,84,0.12)] hover:border-[#ca1254]/30"
                    : "bg-[#3b3f69]/[0.04] border-[#3b3f69]/12 shadow-[0_2px_12px_rgba(59,63,105,0.04)] hover:shadow-[0_8px_30px_rgba(59,63,105,0.1)] hover:border-[#3b3f69]/20"
                }`}
              >
              {/* Verified tick */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 className={`w-4 h-4 ${isPink ? "text-[#ca1254]" : "text-[#3b3f69]"}`} />
              </div>

              {/* Icon container */}
              <div
                className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{
                  background: isPink
                    ? "rgba(202,18,84,0.1)"
                    : "rgba(59,63,105,0.08)",
                  border: isPink
                    ? "1.5px solid rgba(202,18,84,0.2)"
                    : "1.5px solid rgba(59,63,105,0.12)",
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
                <p className={`text-sm font-bold leading-snug ${isPink ? "text-[#ca1254]" : "text-[#3b3f69]"}`}>
                  {badge.label}
                </p>
                <p className="text-[13px] font-medium text-[#777] mt-1.5 leading-relaxed">
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
      <div className="h-px bg-[#3b3f69]" />
    </section>
  )
}
