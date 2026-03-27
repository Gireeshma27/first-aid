"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    title: "CPR Training",
    description: "Learn life-saving CPR techniques and how to use an AED in emergencies.",
    points: ["DRSABCD Action Plan", "AED Usage", "Emergency Response"],
  },
  {
    title: "First Aid Certification",
    description: "Comprehensive training covering injuries, illnesses, and medical emergencies.",
    points: ["Wound Care", "Fractures", "Asthma & Anaphylaxis"],
  },
  {
    title: "Workplace Training",
    description: "Custom training programs for organisations and teams.",
    points: ["On-site Training", "Flexible Delivery", "Compliance Ready"],
  },
]

export function HeroCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentSlide = slides[currentIndex]

  return (
    <section className="w-full bg-[#3B3969] py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[400px]">
          {/* LEFT SIDE - Content */}
          <div className="text-white">
            {/* Label */}
            <p className="text-sm font-semibold text-[#CB154E] mb-3 uppercase tracking-wide">
              First Aid Training Services
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Professional First Aid Training for{" "}
              <span className="text-[#CB154E]">Real-Life Emergencies</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Hands-on first aid and CPR training designed to prepare individuals and organisations to respond
              effectively in emergency situations.
            </p>
          </div>

          {/* RIGHT SIDE - Carousel */}
          <div className="flex flex-col items-center justify-center">
            {/* Outer wrapper: holds arrows + card */}
            <div className="relative flex items-center justify-center w-full max-w-md md:max-w-lg mx-auto px-6">
              {/* Left Arrow — outside the card */}
              <button
                onClick={goToPrevious}
                className="absolute z-10 bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all hover:bg-gray-50 hover:scale-110"
                style={{ left: "-16px", top: "50%", transform: "translateY(-50%)" }}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-[#3B3969]" />
              </button>

              {/* Card Container — gives explicit height so absolutes work */}
              <div className="relative w-full" style={{ minHeight: "280px" }}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    style={{
                      pointerEvents: index === currentIndex ? "auto" : "none",
                    }}
                  >
                    <div className="bg-white rounded-xl p-10 shadow-lg flex flex-col w-full h-full">
                      {/* Title */}
                      <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">{slide.title}</h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {slide.description}
                      </p>

                      {/* Bullet Points */}
                      <ul className="space-y-2.5">
                        {slide.points.map((point, idx) => (
                          <li key={idx} className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-[#CB154E] flex-shrink-0" />
                            <span className="text-sm text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow — outside the card */}
              <button
                onClick={goToNext}
                className="absolute z-10 bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl transition-all hover:bg-gray-50 hover:scale-110"
                style={{ right: "-16px", top: "50%", transform: "translateY(-50%)" }}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-[#3B3969]" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#CB154E] w-8" : "bg-gray-400/50 w-2"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
