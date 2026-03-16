"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

const servicesData = [
  {
    title: "HLTAID009 – Provide Cardiopulmonary Resuscitation (CPR)",
    description: "This course covers the essential skills needed to perform CPR in line with Australian Resuscitation Council guidelines. Participants will learn to respond to cardiac emergencies, perform chest compressions and rescue breaths, and use an automated external defibrillator (AED).",
    image: "/images/course-cpr.png",
    link: "/services/cpr-training",
    overlayColor: "bg-[#3B3969]/90", // Primary Indigo
    buttonTextColor: "text-[#3B3969]"
  },
  {
    title: "HLTAID011 – Provide First Aid (Including CPR)",
    description: "This comprehensive course includes all elements of HLTAID009 plus additional first aid skills. Participants will learn to manage a range of common emergencies including bleeding, burns, fractures, and medical conditions like asthma or anaphylaxis.",
    image: "/images/course-first-aid.png",
    link: "/services/provide-first-aid",
    overlayColor: "bg-[#CB154E]/90", // Secondary Rose
    buttonTextColor: "text-[#CB154E]"
  },
  {
    title: "HLTAID012 – Provide First Aid in an Education and Care Setting",
    description: "This course is tailored for those working in childcare, early education, and school settings. It covers first aid response to infants and children, including asthma, anaphylaxis, and other childhood-specific emergencies.",
    image: "/images/course-childcare.png",
    link: "/services/first-aid-education-care",
    overlayColor: "bg-[#2A284D]/90", // Darker Indigo
    buttonTextColor: "text-[#2A284D]"
  },
  {
    title: "Anaphylaxis and Asthma Management Training",
    description: "This training focuses on the prevention, recognition, and emergency management of anaphylaxis and asthma incidents. It is particularly useful for schools and childcare settings to ensure staff are equipped to respond to allergic and asthmatic emergencies.",
    image: "/images/trainer-1.png",
    link: "/services/anaphylaxis-asthma-training",
    overlayColor: "bg-[#A3103E]/90", // Darker Rose
    buttonTextColor: "text-[#A3103E]"
  },
  {
    title: "RAMOAP Training for NSW Teachers",
    description: "A specialised course designed for New South Wales school teachers. It focuses on recognizing and managing medical emergencies in a school environment, ensuring staff can respond effectively to student health crises.",
    image: "/images/trainer-2.png",
    link: "/services/ramoap-training",
    overlayColor: "bg-[#3B3969]/90", // Primary Indigo
    buttonTextColor: "text-[#3B3969]"
  },
  {
    title: "Community Clinical Awareness Training",
    description: "A non-accredited course aimed at community support workers. It includes training on recognizing clinical signs of conditions like stroke, heart attack, sepsis, and diabetes-related complications. It also covers practical skills like checking blood pressure and blood glucose levels.",
    image: "/images/cpr-classroom.png",
    link: "/services/community-clinical-awareness",
    overlayColor: "bg-[#CB154E]/90", // Secondary Rose
    buttonTextColor: "text-[#CB154E]"
  },
  {
    title: "Drug and Alcohol Testing",
    description: "We offer on-site saliva-based drug and alcohol testing to help organisations maintain a safe workplace. This service can be integrated into training schedules as we move through different regions.",
    image: "/images/trainer.png",
    link: "/services/drug-alcohol-testing",
    overlayColor: "bg-[#2A284D]/90", // Darker Indigo
    buttonTextColor: "text-[#2A284D]"
  },
  {
    title: "Event Medics and On-Site Medical Support",
    description: "In addition to training, we provide qualified medics for events such as school carnivals, excursions, corporate functions, and community gatherings. Our event medics are equipped to handle on-site medical situations and ensure participant safety.",
    image: "/images/event-medical.png",
    link: "/services/event-medics",
    overlayColor: "bg-[#A3103E]/90", // Darker Rose
    buttonTextColor: "text-[#A3103E]"
  },
  {
    title: "Custom and Tailored Training Solutions",
    description: "We understand that every organisation has unique needs. Therefore, we offer the flexibility to create tailored training modules, including non-accredited mental health strategies, additional infection control topics, or any other area of focus your team requires.",
    image: "/images/trainer-3.png",
    link: "/services/custom-training",
    overlayColor: "bg-[#3B3969]/90", // Primary Indigo
    buttonTextColor: "text-[#3B3969]"
  }
]

function ServiceCard({ title, description, image, link, overlayColor, buttonTextColor, index }: {
  title: string;
  description: string;
  image: string;
  link: string;
  overlayColor: string;
  buttonTextColor: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)] transition-all duration-500 border border-gray-100 flex flex-col h-full reveal-section stagger-item card-shimmer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className={`absolute inset-0 ${overlayColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 sm:p-8 text-center overflow-hidden`}>
          {/* Overlay Content with slide-up effect */}
          <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-center items-center w-full h-full max-h-full">
            <p className="text-white text-sm sm:text-base leading-relaxed mb-4 font-medium">
              {description}
            </p>
            <Link
              href={link}
              className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full font-semibold text-sm transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg flex-shrink-0"
              aria-label={`Learn more about ${title}`}
            >
              <span className={buttonTextColor}>Learn More</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 ${buttonTextColor}`} />
            </Link>
          </div>
        </div>
      </div>

      {/* Title Below Image */}
      <div className="p-6 md:p-8 flex items-center justify-center min-h-[96px] bg-white relative z-10 transition-colors duration-300">
        <h3 className="text-lg md:text-xl font-bold text-center text-[#3B3969] leading-snug">
          {title}
        </h3>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5] relative overflow-hidden">
      {/* Background patterns */}
      <div className="medical-pattern-bg opacity-30" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#3B3969]/5 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-[#CB154E]/5 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Our Services"
          description="We deliver practical first aid training and healthcare support services for workplaces, schools and community organisations across Australia."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
