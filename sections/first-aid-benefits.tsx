"use client"

import { useRef, useEffect, useState } from "react"
import { Stethoscope, HandHeart, Home } from "lucide-react"

const benefits = [
  {
    title: "Be Prepared to Save Lives",
    description:
      "Gain the confidence and skills to respond quickly during emergencies such as cardiac arrest, choking, or injury.",
    icon: Stethoscope,
  },
  {
    title: "Nationally Recognised Training",
    description:
      "Our courses are delivered in partnership with a certified RTO, ensuring compliance with Australian standards.",
    icon: HandHeart,
  },
  {
    title: "Practical Hands-On Learning",
    description:
      "Learn through real-life scenarios with experienced trainers to build confidence in emergency situations.",
    icon: Home,
  },
]

export function FirstAidBenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-10 pb-20 md:pt-12 md:pb-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        
        {/* Header Section */}
        <div 
          className={`flex flex-col items-center text-center mb-12 lg:mb-16 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#1a1a2e] mb-5">
            Why Choose First Aid{" "}
            <span className="text-[#ca1254]">Training?</span>
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[17px] max-w-[650px] mx-auto leading-relaxed">
            Discover the key benefits of investing in professional first aid training for yourself or your team.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className={`bg-[#f9f9f9] rounded-2xl p-7 lg:p-8 flex flex-col transition-all duration-700 ease-out ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <div className="mb-5">
                  <Icon className="w-[34px] h-[34px] text-[#ca1254]" strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] lg:text-[18px] font-bold text-[#1a1a2e] mb-3 leading-snug tracking-tight lg:whitespace-nowrap">
                  {benefit.title}
                </h3>
                <p className="text-[15px] lg:text-[16px] text-gray-500 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div 
          className={`bg-[#ca1254] rounded-2xl p-5 md:p-6 text-center transition-all duration-700 ease-out delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-white text-[15px] md:text-[17px]">
            <span className="font-bold">This is life-saving training.</span> Be ready when it matters most.
          </p>
        </div>

      </div>
    </section>
  )
}
