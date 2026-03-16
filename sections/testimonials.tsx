"use client"

import { useState } from "react"
import { SectionHeader } from "@/components/section-header"
import    { Star, Quote, ChevronRight } from "lucide-react"

const testimonials = [
  {
    content: "The First Aid Network training was outstanding. Our staff now feel confident and prepared to handle emergencies in our childcare centre. The trainer made complex concepts easy to understand and the hands-on practice was invaluable.",
    author: "Sarah Mitchell",
    role: "Centre Director",
    organisation: "Little Stars Early Learning",
    rating: 5,
  },
  {
    content: "Participants consistently report that our training programs are practical, engaging and highly valuable in real-life situations. The scenario-based learning approach really helps cement the knowledge.",
    author: "James Thompson",
    role: "WHS Manager",
    organisation: "BuildRight Construction",
    rating: 5,
  },
  {
    content: "Our experienced trainers provide clear instruction and hands-on guidance, helping participants build confidence during emergencies. We've had nothing but positive feedback from every session.",
    author: "Emma Chen",
    role: "HR Director",
    organisation: "Horizon Healthcare",
    rating: 5,
  },
  {
    content: "Organisations appreciate our flexible delivery options and customised training programs. The team worked with us to deliver training at our regional sites, which made compliance much easier to achieve.",
    author: "Michael Roberts",
    role: "Operations Manager",
    organisation: "Regional Mining Co",
    rating: 4,
  },
]

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-white/20 fill-white/10"
          }`}
        />
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  return (
    <section className="py-[60px] md:py-[80px] bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          description="Hear from organisations and individuals who have completed our training programs."
        />

        <   div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* ── Left: person selector ── */}
          <div className="flex flex-col gap-3">
            {testimonials.map((t, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={t.author}
                  onClick={() => setActiveIndex(i)}
                  className={`group w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 stagger-item card-shimmer ${
                    isActive
                      ? "bg-[#3B3969] shadow-lg"
                      : "bg-white border border-gray-100 hover:border-[#CB154E]/40 hover:shadow-md"
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Avatar */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-[#CB154E] text-white" : "bg-[#3B3969]/10 text-[#3B3969]"
                    }`}
                  >
                    {t.author.charAt(0)}
                  </div>

                  {/* Name + role */}
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm leading-tight ${ isActive ? "text-white" : "text-[#333333]" }`}>
                      {t.author}
                    </p>
                    <p className={`text-xs mt-0.5 truncate ${ isActive ? "text-white/60" : "text-gray-500" }`}>
                      {t.role} · {t.organisation}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                      isActive ? "text-[#CB154E]" : "text-gray-300 group-hover:text-[#CB154E]"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* ── Right: active testimonial display ── */}
          <div className="lg:col-span-2 bg-[#3B3969] rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[340px]">
            <div>
              <Quote className="w-10 h-10 text-[#CB154E] fill-[#CB154E] mb-6" />
              <p
                key={activeIndex}
                className="text-white text-lg md:text-xl leading-relaxed font-medium"
              >
                &ldquo;{active.content}&rdquo;
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#CB154E] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {active.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{active.author}</p>
                  <p className="text-xs text-white/50">{active.role} · {active.organisation}</p>
                </div>
              </div>
              <StarRating rating={active.rating} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
