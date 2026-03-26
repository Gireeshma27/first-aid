"use client"

import { useEffect, useRef, useCallback, useImperativeHandle, forwardRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, HeartPulse, ShieldPlus, Baby, Wind, GraduationCap, Stethoscope, FlaskConical, Ambulance, Settings } from "lucide-react"
import { Reveal } from "@/components/reveal"

const servicesData = [
  {
    title: "HLTAID009 Provide Cardiopulmonary Resuscitation (CPR)",
    description: "This course covers the essential skills needed to perform CPR in line with Australian Resuscitation Council guidelines. Participants will learn to respond to cardiac emergencies, perform chest compressions and rescue breaths, and use an automated external defibrillator (AED).",
    image: "/images/course-cpr.png",
    link: "/services/cpr-training",
    overlayColor: "bg-[#3B3969]/90",
    buttonTextColor: "text-[#3B3969]",
    icon: HeartPulse,
    accent: "#CB154E",
  },
  {
    title: "HLTAID011 Provide First Aid (Including CPR)",
    description: "This comprehensive course includes all elements of HLTAID009 plus additional first aid skills. Participants will learn to manage a range of common emergencies including bleeding, burns, fractures, and medical conditions like asthma or anaphylaxis.",
    image: "/images/compensive first aid.png",
    link: "/services/provide-first-aid",
    overlayColor: "bg-[#CB154E]/90",
    buttonTextColor: "text-[#CB154E]",
    icon: ShieldPlus,
    accent: "#3B3969",
  },
  {
    title: "HLTAID012 Provide First Aid in an Education and Care Setting",
    description: "This course is tailored for those working in childcare, early education, and school settings. It covers first aid response to infants and children, including asthma, anaphylaxis, and other childhood-specific emergencies.",
    image: "/images/education.png",
    link: "/services/first-aid-education-care",
    overlayColor: "bg-[#3B3969]/90",
    buttonTextColor: "text-[#3B3969]",
    icon: Baby,
    accent: "#CB154E",
  },
  {
    title: "Anaphylaxis and Asthma Management Training",
    description: "This training focuses on the prevention, recognition, and emergency management of anaphylaxis and asthma incidents. It is particularly useful for schools and childcare settings to ensure staff are equipped to respond to allergic and asthmatic emergencies.",
    image: "/images/anaphylaxis.png",
    link: "/services/anaphylaxis-asthma-training",
    overlayColor: "bg-[#CB154E]/90",
    buttonTextColor: "text-[#CB154E]",
    icon: Wind,
    accent: "#3B3969",
  },
  {
    title: "RAMOAP Training for NSW Teachers",
    description: "A specialised course designed for New South Wales school teachers. It focuses on recognizing and managing medical emergencies in a school environment, ensuring staff can respond effectively to student health crises.",
    image: "/images/infection.png",
    link: "/services/ramoap-training",
    overlayColor: "bg-[#3B3969]/90",
    buttonTextColor: "text-[#3B3969]",
    icon: GraduationCap,
    accent: "#CB154E",
  },
  {
    title: "Community Clinical Awareness Training",
    description: "A non-accredited course aimed at community support workers. It includes training on recognizing clinical signs of conditions like stroke, heart attack, sepsis, and diabetes-related complications. It also covers practical skills like checking blood pressure and blood glucose levels.",
    image: "/images/community.png",
    link: "/services/community-clinical-awareness",
    overlayColor: "bg-[#CB154E]/90",
    buttonTextColor: "text-[#CB154E]",
    icon: Stethoscope,
    accent: "#3B3969",
  },
  {
    title: "Drug and Alcohol Testing",
    description: "We offer on-site saliva-based drug and alcohol testing to help organisations maintain a safe workplace. This service can be integrated into training schedules as we move through different regions.",
    image: "/images/drug.png",
    link: "/services/drug-alcohol-testing",
    overlayColor: "bg-[#3B3969]/90",
    buttonTextColor: "text-[#3B3969]",
    icon: FlaskConical,
    accent: "#CB154E",
  },
  {
    title: "Event Medics and On-Site Medical Support",
    description: "In addition to training, we provide qualified medics for events such as school carnivals, excursions, corporate functions, and community gatherings. Our event medics are equipped to handle on-site medical situations and ensure participant safety.",
    image: "/images/event medical services.png",
    link: "/services/event-medics",
    overlayColor: "bg-[#CB154E]/90",
    buttonTextColor: "text-[#CB154E]",
    icon: Ambulance,
    accent: "#3B3969",
  },
  {
    title: "Custom and Tailored Training Solutions",
    description: "We understand that every organisation has unique needs. Therefore, we offer the flexibility to create tailored training modules, including non-accredited mental health strategies, additional infection control topics, or any other area of focus your team requires.",
    image: "/images/custom and tailored.png",
    link: "/services/custom-training",
    overlayColor: "bg-[#3B3969]/90",
    buttonTextColor: "text-[#3B3969]",
    icon: Settings,
    accent: "#CB154E",
  }
]

const allData = servicesData

/* ─── Service Card ─── */
function ServiceCard({ title, image, link, overlayColor, buttonTextColor, description, icon: Icon, accent }: {
  title: string
  image: string
  link: string
  overlayColor: string
  buttonTextColor: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  accent: string
}) {
  return (
    <div
      className="group relative rounded-[24px] overflow-hidden flex flex-col flex-shrink-0 w-[320px] sm:w-[360px] md:w-[390px] transition-all duration-500 ease-out hover:-translate-y-3 active:scale-[0.97]"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.13)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 12px 40px -8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* Hover glow border */}
      <div
        className="absolute -inset-[1px] rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none z-0"
        style={{
          background: `linear-gradient(135deg, ${accent}55, transparent 50%, rgba(255,255,255,0.12))`,
        }}
      />

      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden z-[1]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="380px"
          loading="eager"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1c3d]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1c3d]/20 to-transparent h-1/4" />

        {/* Icon badge */}
        <div
          className="absolute top-4 left-4 w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
          style={{
            background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
            boxShadow: `0 6px 20px ${accent}55`,
          }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 ${overlayColor} backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 sm:p-8 text-center`}>
          <div className="transition-all duration-500 ease-out translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex flex-col items-center justify-center">
            <p className="text-white text-[0.92rem] leading-[1.8] mb-5 font-medium line-clamp-4 max-w-[280px] drop-shadow-sm">
              {description}
            </p>
            <Link
              href={link}
              className="inline-flex items-center gap-2 bg-white px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
              aria-label={`Learn more about ${title}`}
            >
              <span className={buttonTextColor}>Learn More</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 ${buttonTextColor}`} />
            </Link>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="relative z-[1] px-7 py-6 md:px-8 md:py-7 flex items-center min-h-[100px]">
        <div
          className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{ background: accent }}
        />
        <h3 className="text-[0.97rem] md:text-[1.06rem] font-bold text-white/90 leading-snug tracking-tight group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
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
    const speed = 0.4

    const duplicated = [...items, ...items, ...items]

    const wrapPosition = useCallback(() => {
      const track = trackRef.current
      if (!track) return
      const setW = track.scrollWidth / 3
      if (posRef.current <= -setW) posRef.current += setW
      if (posRef.current >= 0) posRef.current -= setW
    }, [])

    // Expose nudge to parent
    useImperativeHandle(ref, () => ({
      nudge(dir: "left" | "right") {
        const amount = 400
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
        // Apply velocity decay from drag
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

    // Drag — mouse
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

    // Drag — touch
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
        <div ref={trackRef} className="flex gap-6 will-change-transform" style={{ width: "max-content" }}>
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
      className="pt-10 pb-16 md:pt-14 md:pb-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #3B3969 0%, #2e2c5c 35%, #231f4b 65%, #1e1c3d 100%)",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(203,21,78,0.12) 0%, transparent 60%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,57,105,0.35) 0%, transparent 65%)", filter: "blur(50px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(203,21,78,0.06) 0%, transparent 70%)", filter: "blur(40px)" }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 mb-14">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 tracking-wide"
              style={{
                background: "rgba(203,21,78,0.15)",
                color: "#f7395e",
                border: "1px solid rgba(203,21,78,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-[1.05rem] text-white/65 leading-relaxed font-medium">
              Training is delivered by qualified and experienced registered nurses. Upon successful completion, participants will receive a nationally recognised certification.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Carousel area with arrow controls */}
      <div className="relative z-10">
        {/* Arrow buttons — positioned on the sides */}
        <button
          onClick={() => handleArrow("right")}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-white/80" />
        </button>

        <button
          onClick={() => handleArrow("left")}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-white/80" />
        </button>

        {/* Edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #2a2750, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #1e1c3d, transparent)" }} />

        <div className="flex flex-col gap-7">
          <ScrollingRow ref={row1Ref} items={allData} direction="left" />
        </div>
      </div>
    </section>
  )
}
