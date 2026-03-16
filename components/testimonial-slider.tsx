"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

interface Testimonial {
  content: string
  author: string
  role: string
  organisation?: string
  rating?: number
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  )
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const maxIndex = testimonials.length - 1

  const goToSlide = useCallback((newIndex: number) => {
    if (isAnimating) return
    const clamped = Math.max(0, Math.min(newIndex, maxIndex))
    setIsAnimating(true)
    setCurrentIndex(clamped)
    setTimeout(() => setIsAnimating(false), 700)
  }, [isAnimating, maxIndex])

  useEffect(() => {
    const timer = setInterval(() => {
      const next = currentIndex >= maxIndex ? 0 : currentIndex + 1
      goToSlide(next)
    }, 7000)
    return () => clearInterval(timer)
  }, [currentIndex, maxIndex, goToSlide])

  const goToPrevious = () => {
    goToSlide(currentIndex <= 0 ? maxIndex : currentIndex - 1)
  }

  const goToNext = () => {
    goToSlide(currentIndex >= maxIndex ? 0 : currentIndex + 1)
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Background large quote watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 md:-translate-y-16 opacity-[0.03] pointer-events-none">
        <Quote className="w-40 h-40 md:w-64 md:h-64 text-[#3B3969] fill-[#3B3969]" />
      </div>

      {/* Cards container */}
      <div className="overflow-hidden relative z-10 px-4 md:px-12">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2 md:px-8"
            >
              <div className="text-center space-y-8 md:space-y-10 py-8 md:py-16">
                
                {/* Star rating */}
                <div className="flex justify-center">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Testimonial text */}
                <p className="text-2xl md:text-3xl lg:text-4xl text-[#333333] leading-[1.6] md:leading-[1.7] font-light italic">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="flex flex-col items-center gap-4 pt-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#3B3969] to-[#CB154E] flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg ring-4 ring-white">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-[#333333] mb-1 tracking-tight">{testimonial.author}</p>
                    <p className="text-sm md:text-base text-[#666666] font-medium">
                      {testimonial.role}
                      {testimonial.organisation && (
                        <span className="text-[#CB154E]"> · {testimonial.organisation}</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-4 md:mt-8 relative z-20">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#333333] hover:border-[#3B3969] hover:bg-[#3B3969] hover:text-white transition-all duration-300 shadow-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-3 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "bg-[#CB154E] w-10 h-2.5"
                  : "bg-gray-200 hover:bg-gray-300 w-2.5 h-2.5"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#333333] hover:border-[#3B3969] hover:bg-[#3B3969] hover:text-white transition-all duration-300 shadow-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
