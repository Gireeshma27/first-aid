"use client"

import { useEffect, useRef, useCallback, useImperativeHandle, forwardRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, HeartPulse, ShieldPlus, Baby, Wind, GraduationCap, Stethoscope, FlaskConical, Ambulance, Settings } from "lucide-react"
import { Reveal } from "@/components/reveal"

const servicesData = [
  {
    title: "HLTAID009 Provide Cardiopulmonary Resuscitation (CPR)",
    shortTitle: "CPR Training",
    description: "This course covers the essential skills needed to perform CPR in line with Australian Resuscitation Council guidelines. Participants will learn to respond to cardiac emergencies, perform chest compressions and rescue breaths, and use an automated external defibrillator (AED).",
    image: "/images/course-cpr.png",
    link: "/services/cpr-training",
    icon: HeartPulse,
    accent: "#ca1254",
  },
  {
    title: "HLTAID011 Provide First Aid (Including CPR)",
    shortTitle: "First Aid",
    description: "This comprehensive course includes all elements of HLTAID009 plus additional first aid skills. Participants will learn to manage a range of common emergencies including bleeding, burns, fractures, and medical conditions like asthma or anaphylaxis.",
    image: "/images/compensive first aid.png",
    link: "/services/provide-first-aid",
    icon: ShieldPlus,
    accent: "#3b3f69",
  },
  {
    title: "HLTAID012 Provide First Aid in an Education and Care Setting",
    shortTitle: "Education & Care",
    description: "This course is tailored for those working in childcare, early education, and school settings. It covers first aid response to infants and children, including asthma, anaphylaxis, and other childhood-specific emergencies.",
    image: "/images/education.png",
    link: "/services/first-aid-education-care",
    icon: Baby,
    accent: "#ca1254",
  },
  {
    title: "Anaphylaxis and Asthma Management Training",
    shortTitle: "Anaphylaxis & Asthma",
    description: "This training focuses on the prevention, recognition, and emergency management of anaphylaxis and asthma incidents. It is particularly useful for schools and childcare settings to ensure staff are equipped to respond to allergic and asthmatic emergencies.",
    image: "/images/anaphylaxis.png",
    link: "/services/anaphylaxis-asthma-training",
    icon: Wind,
    accent: "#3b3f69",
  },
  {
    title: "RAMOAP Training for NSW Teachers",
    shortTitle: "RAMOAP",
    description: "A specialised course designed for New South Wales school teachers. It focuses on recognizing and managing medical emergencies in a school environment, ensuring staff can respond effectively to student health crises.",
    image: "/images/infection.png",
    link: "/services/ramoap-training",
    icon: GraduationCap,
    accent: "#ca1254",
  },
  {
    title: "Community Clinical Awareness Training",
    shortTitle: "Clinical Awareness",
    description: "A non-accredited course aimed at community support workers. It includes training on recognizing clinical signs of conditions like stroke, heart attack, sepsis, and diabetes-related complications. It also covers practical skills like checking blood pressure and blood glucose levels.",
    image: "/images/community.png",
    link: "/services/community-clinical-awareness",
    icon: Stethoscope,
    accent: "#3b3f69",
  },
  {
    title: "Drug and Alcohol Testing",
    shortTitle: "Drug & Alcohol",
    description: "We offer on-site saliva-based drug and alcohol testing to help organisations maintain a safe workplace. This service can be integrated into training schedules as we move through different regions.",
    image: "/images/drug.png",
    link: "/services/drug-alcohol-testing",
    icon: FlaskConical,
    accent: "#ca1254",
  },
  {
    title: "Event Medics and On-Site Medical Support",
    shortTitle: "Event Medics",
    description: "In addition to training, we provide qualified medics for events such as school carnivals, excursions, corporate functions, and community gatherings. Our event medics are equipped to handle on-site medical situations and ensure participant safety.",
    image: "/images/event medical services.png",
    link: "/services/event-medics",
    icon: Ambulance,
    accent: "#3b3f69",
  },
  {
    title: "Custom and Tailored Training Solutions",
    shortTitle: "Custom Training",
    description: "We understand that every organisation has unique needs. Therefore, we offer the flexibility to create tailored training modules, including non-accredited mental health strategies, additional infection control topics, or any other area of focus your team requires.",
    image: "/images/custom and tailored.png",
    link: "/services/custom-training",
    icon: Settings,
    accent: "#ca1254",
  },
]

/* ─── Service Card — New vertical design ─── */
function ServiceCard({
  title,
  image,
  link,
  description,
  icon: Icon,
  accent,
}: {
  title: string
  image: string
  link: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  accent: string
}) {
  return (
    <div className="group relative flex-shrink-0 w-[300px] sm:w-[330px] md:w-[350px] self-stretch">
      <div
        className="relative h-full flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        style={{
          background: "#fff",
          border: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        {/* Image area */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="350px"
            loading="eager"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Floating icon badge */}
          <div
            className="absolute bottom-4 left-5 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
            style={{
              background: accent,
              boxShadow: `0 4px 16px ${accent}50`,
            }}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>

          {/* View label on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-bold text-gray-800 shadow-md">
              View Course
              <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Content area */}
        <div className="p-6 md:p-7 flex flex-col flex-1">
          <h3 className="text-base md:text-[17px] font-bold text-[#1a1a2e] leading-snug mb-3 min-h-[44px] md:min-h-[48px] line-clamp-2">
            {title}
          </h3>
          <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed line-clamp-3">
            {description}
          </p>

          <div className="mt-auto pt-5">
            <Link
              href={link}
              className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
              style={{ color: accent }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom accent strip */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"
          style={{ background: accent }}
        />
      </div>
    </div>
  )
}

/* ─── Scrolling Row with imperative nudge ─── */
interface ScrollingRowHandle {
  nudge: (dir: "left" | "right") => void
}

const ScrollingRow = forwardRef<ScrollingRowHandle, { items: typeof servicesData; direction: "left" | "right" }>(
  function ScrollingRow({ items, direction }, ref) {
    const trackRef = useRef<HTMLDivElement>(null)
    const animRef = useRef<number>(0)
    const posRef = useRef(0)
    const pausedRef = useRef(false)
    const resumeTimer = useRef<ReturnType<typeof setTimeout>>(null)
    const isDragging = useRef(false)
    const dragStartX = useRef(0)
    const dragStartPos = useRef(0)
    const velocityRef = useRef(0)
    const speed = 0.35

    const duplicated = [...items, ...items, ...items]

    const wrapPosition = useCallback(() => {
      const track = trackRef.current
      if (!track) return
      const setW = track.scrollWidth / 3
      if (posRef.current <= -setW) posRef.current += setW
      if (posRef.current >= 0) posRef.current -= setW
    }, [])

    useImperativeHandle(ref, () => ({
      nudge(dir: "left" | "right") {
        const amount = 380
        const target = dir === "left" ? posRef.current - amount : posRef.current + amount
        const start = posRef.current
        const startTime = performance.now()
        const duration = 500

        pausedRef.current = true
        if (resumeTimer.current) clearTimeout(resumeTimer.current)

        function easeOutCubic(t: number) {
          return 1 - Math.pow(1 - t, 3)
        }

        function step(now: number) {
          const elapsed = now - startTime
          const progress = Math.min(elapsed / duration, 1)
          posRef.current = start + (target - start) * easeOutCubic(progress)
          wrapPosition()
          if (progress < 1) {
            requestAnimationFrame(step)
          } else {
            resumeTimer.current = setTimeout(() => {
              pausedRef.current = false
            }, 1200)
          }
        }
        requestAnimationFrame(step)
      },
    }), [wrapPosition])

    const animate = useCallback(() => {
      const track = trackRef.current
      if (!track) return

      if (!pausedRef.current && !isDragging.current) {
        if (Math.abs(velocityRef.current) > 0.1) {
          posRef.current += velocityRef.current
          velocityRef.current *= 0.95
        } else {
          velocityRef.current = 0
          posRef.current += direction === "left" ? -speed : speed
        }
        wrapPosition()
      }

      track.style.transform = `translate3d(${posRef.current}px, 0, 0)`
      animRef.current = requestAnimationFrame(animate)
    }, [direction, wrapPosition])

    useEffect(() => {
      if (direction === "right" && trackRef.current) {
        posRef.current = -(trackRef.current.scrollWidth / 3)
      }
      animRef.current = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animRef.current)
    }, [animate, direction])

    const pause = useCallback(() => {
      pausedRef.current = true
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }, [])

    const resume = useCallback(() => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
      resumeTimer.current = setTimeout(() => {
        pausedRef.current = false
      }, 1500)
    }, [])

    const lastX = useRef(0)
    const onMouseDown = useCallback((e: React.MouseEvent) => {
      isDragging.current = true
      dragStartX.current = e.clientX
      dragStartPos.current = posRef.current
      lastX.current = e.clientX
      velocityRef.current = 0
      pause()
    }, [pause])

    const onMouseMove = useCallback((e: React.MouseEvent) => {
      if (!isDragging.current) return
      const dx = e.clientX - dragStartX.current
      posRef.current = dragStartPos.current + dx
      velocityRef.current = e.clientX - lastX.current
      lastX.current = e.clientX
    }, [])

    const onMouseUp = useCallback(() => {
      if (!isDragging.current) return
      isDragging.current = false
      resume()
    }, [resume])

    const lastTouchX = useRef(0)
    const onTouchStart = useCallback((e: React.TouchEvent) => {
      isDragging.current = true
      dragStartX.current = e.touches[0].clientX
      dragStartPos.current = posRef.current
      lastTouchX.current = e.touches[0].clientX
      velocityRef.current = 0
      pause()
    }, [pause])

    const onTouchMove = useCallback((e: React.TouchEvent) => {
      if (!isDragging.current) return
      const dx = e.touches[0].clientX - dragStartX.current
      posRef.current = dragStartPos.current + dx
      velocityRef.current = e.touches[0].clientX - lastTouchX.current
      lastTouchX.current = e.touches[0].clientX
    }, [])

    const onTouchEnd = useCallback(() => {
      isDragging.current = false
      resume()
    }, [resume])

    return (
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={pause}
        onMouseLeave={() => { if (!isDragging.current) resume() }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div ref={trackRef} className="flex items-stretch gap-7 will-change-transform" style={{ width: "max-content" }}>
          {duplicated.map((service, i) => (
            <ServiceCard key={`${service.title}-${i}`} {...service} />
          ))}
        </div>
      </div>
    )
  }
)

/* ─── Main Section ─── */
export function ServicesSection() {
  const row1Ref = useRef<ScrollingRowHandle>(null)

  const handleArrow = (dir: "left" | "right") => {
    row1Ref.current?.nudge(dir)
  }

  return (
    <section
      className="pt-8 pb-16 md:pt-10 md:pb-24 relative overflow-hidden bg-white"
    >
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-100" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 lg:px-8 mb-14">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{
                background: "rgba(202,18,84,0.08)",
                color: "#ca1254",
                border: "1px solid rgba(202,18,84,0.15)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ca1254]" />
              What We Offer
            </span>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-[#1a1a2e] leading-tight tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-base md:text-[18px] text-gray-500 leading-relaxed font-medium max-w-3xl mx-auto">
              Training is delivered by qualified and experienced registered nurses. Upon successful completion, participants will receive a nationally recognised certification.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Carousel area */}
      <div className="relative z-10">
        {/* Arrow buttons */}
        <button
          onClick={() => handleArrow("right")}
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer bg-white shadow-lg border border-gray-100 hover:shadow-xl"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-[#3b3f69]" />
        </button>

        <button
          onClick={() => handleArrow("left")}
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer bg-white shadow-lg border border-gray-100 hover:shadow-xl"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-[#3b3f69]" />
        </button>

        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
        />

        <ScrollingRow ref={row1Ref} items={servicesData} direction="left" />
      </div>
    </section>
  )
}