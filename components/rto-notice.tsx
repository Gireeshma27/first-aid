import { ShieldCheck } from "lucide-react"

interface RTONoticeProps {
  courseCode?: string
  courseTitle?: string
  className?: string
}

/**
 * RTONotice — Highlighted compliance banner shown below service page content.
 * Communicates the Healthcorp RTO partnership in a visually distinct, official way.
 */
export function RTONotice({ courseCode, courseTitle, className = "" }: RTONoticeProps) {
  return (
    <section className={`py-10 md:py-12 bg-[#F5F5F5] ${className}`}>
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start gap-5 rounded-2xl bg-white border border-[#3B3969]/15 border-l-4 border-l-[#3B3969] shadow-sm px-6 py-6 md:px-8 md:py-7">
          {/* Icon */}
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#3B3969]/10 flex items-center justify-center mt-0.5">
            <ShieldCheck className="w-6 h-6 text-[#3B3969]" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-widest text-[#3B3969] mb-1.5">
              Nationally Recognised Training
            </p>
            <p className="text-sm text-[#444] leading-relaxed">
              This training is delivered in partnership with{" "}
              <strong className="text-[#1a1a2e]">Healthcorp (RTO 91222)</strong>, a Registered Training
              Organisation approved to deliver nationally recognised qualifications under the Australian
              Skills Quality Authority (ASQA).
            </p>
            {courseCode && courseTitle && (
              <p className="text-sm text-[#444] leading-relaxed mt-2">
                Upon successful completion, participants receive the nationally recognised unit of
                competency{" "}
                <strong className="text-[#1a1a2e]">
                  {courseCode}: {courseTitle}
                </strong>
                , issued by Healthcorp (RTO 91222).
              </p>
            )}

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-xs font-semibold border border-[#3B3969]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />
                RTO 91222 Accredited
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-xs font-semibold border border-[#CB154E]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                ASQA Approved
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                Nationally Recognised Qualification
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
