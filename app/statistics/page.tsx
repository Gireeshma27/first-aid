"use client"

import { useEffect, useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsletterSection } from "@/sections/newsletter"
import Link from "next/link"
import {
  Heart,
  Activity,
  Home,
  Users,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Clock,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   Animated counter
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number
  suffix?: string
  prefix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   Animated progress bar
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function AnimatedBar({ percent, color }: { percent: number; color: string }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          setTimeout(() => setWidth(percent), 100)
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [percent])

  return (
    <div ref={ref} className="h-3 w-full rounded-full bg-gray-100 overflow-hidden">
      <div
        className={`h-full rounded-full ${color} transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   Page
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function StatisticsPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            HERO
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section
          className="relative pt-16 pb-14 md:pt-20 md:pb-16 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e1c3d 0%, #3B3969 55%, #4A4880 100%)" }}
        >
          {/* Blobs */}
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-[#CB154E]/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-32 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
          {/* ECG line watermark */}
          <svg
            className="absolute bottom-0 left-0 right-0 w-full opacity-[0.05] pointer-events-none"
            height="100"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0 50 L280 50 L295 20 L310 80 L325 10 L340 75 L355 48 L580 48 L595 50 L870 50 L885 20 L900 80 L915 10 L930 75 L945 48 L1160 48 L1175 50 L1440 50"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
          {/* dot grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left: headline + CTAs */}
              <div>
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white/80 text-xs font-semibold border border-white/15 mb-8 tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                  CPR &amp; First Aid Statistics â€” Australia
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white leading-[1.1] tracking-tight mb-6">
                  The Numbers That Make
                  <br />
                  <span className="text-[#CB154E]">First Aid Training</span>
                  <br />
                  <span className="text-[#CB154E]">Essential</span>
                </h1>
                <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg mb-10 font-medium">
                  Every statistic on this page represents a real life. These are the facts behind why knowing
                  CPR is one of the most important skills any Australian can have.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-[#CB154E] hover:bg-[#a50f3d] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 px-8 h-12 text-sm"
                  >
                    <Link href="/courses">
                      View CPR Courses
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/25 text-white bg-white/8 hover:bg-white/15 font-semibold rounded-full px-8 h-12 text-sm transition-all duration-300"
                  >
                    <Link href="/book-training">Book Training</Link>
                  </Button>
                </div>
              </div>

              {/* Right: 2Ã—2 stat cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-[#CB154E]/20 border border-[#CB154E]/35 p-7 text-center backdrop-blur-sm hover:bg-[#CB154E]/25 transition-colors duration-300">
                  <p className="text-4xl font-black text-white tracking-tight mb-2">32,000+</p>
                  <div className="w-8 h-px bg-white/20 mx-auto mb-2" />
                  <p className="text-xs text-white/55 font-medium leading-snug">Cardiac arrests<br />per year in Australia</p>
                </div>
                <div className="rounded-3xl bg-white/8 border border-white/12 p-7 text-center backdrop-blur-sm hover:bg-white/12 transition-colors duration-300">
                  <p className="text-4xl font-black text-white tracking-tight mb-2">~70</p>
                  <div className="w-8 h-px bg-white/20 mx-auto mb-2" />
                  <p className="text-xs text-white/55 font-medium leading-snug">Cardiac arrests<br />every single day</p>
                </div>
                <div className="rounded-3xl bg-white/8 border border-white/12 p-7 text-center backdrop-blur-sm hover:bg-white/12 transition-colors duration-300">
                  <p className="text-4xl font-black text-white tracking-tight mb-2">Only 10%</p>
                  <div className="w-8 h-px bg-white/20 mx-auto mb-2" />
                  <p className="text-xs text-white/55 font-medium leading-snug">Currently survive<br />out-of-hospital arrest</p>
                </div>
                <div className="rounded-3xl bg-[#CB154E]/20 border border-[#CB154E]/35 p-7 text-center backdrop-blur-sm hover:bg-[#CB154E]/25 transition-colors duration-300">
                  <p className="text-4xl font-black text-white tracking-tight mb-2">80%</p>
                  <div className="w-8 h-px bg-white/20 mx-auto mb-2" />
                  <p className="text-xs text-white/55 font-medium leading-snug">Of cardiac arrests<br />happen at home</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 1 â€” SCALE OF THE PROBLEM
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">

            <div className="mb-12">
              <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-xs font-bold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                Cardiac Arrest in Australia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e1c3d] tracking-tight leading-tight max-w-lg">
                Understanding the Scale of the Crisis
              </h2>
              </Reveal>
            </div>

            {/* Feature layout: large card left + two stacked right */}
            <div className="grid lg:grid-cols-5 gap-6">

              {/* Large feature card — 32,000 */}
              <Reveal className="lg:col-span-3" delay={0}>
              <div
                className="relative rounded-3xl overflow-hidden p-10 flex flex-col justify-between min-h-[360px] h-full"
                style={{ background: "linear-gradient(135deg, #1e1c3d 0%, #3B3969 100%)" }}
              >
                <div className="absolute -top-6 -right-4 text-[220px] font-black opacity-[0.04] text-white select-none pointer-events-none leading-none tracking-tighter">32K</div>
                <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-[#CB154E]/15 blur-3xl pointer-events-none" />

                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/70 text-xs font-semibold w-fit border border-white/10">
                  <Heart className="w-3.5 h-3.5 text-[#CB154E]" />
                  Annual cardiac arrests
                </span>

                <div className="relative z-10 mt-8">
                  <p className="text-7xl md:text-8xl font-black text-white tracking-tight leading-none mb-5">
                    <AnimatedCounter target={32000} suffix="+" />
                  </p>
                  <p className="text-xl font-bold text-white mb-3 leading-snug">
                    Australians experience out-of-hospital cardiac arrest every year
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed max-w-md">
                    Over 32,000 cardiac arrests occur outside of hospitals annually â€” one of the highest rates in the developed world. Most happen without warning.
                  </p>
                </div>
              </div>
              </Reveal>

              {/* Two stacked cards */}
              <Reveal className="lg:col-span-2 flex flex-col gap-6" delay={120}>

                {/* ~70/day */}
                <div className="group relative rounded-3xl bg-[#F9F9FC] border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex-1">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#3B3969] rounded-t-3xl" />
                  <div className="absolute -bottom-4 -right-2 text-[110px] font-black opacity-[0.04] text-[#3B3969] select-none pointer-events-none leading-none">70</div>
                  <div className="w-11 h-11 rounded-2xl bg-[#3B3969]/10 flex items-center justify-center mb-5">
                    <Clock className="w-5 h-5 text-[#3B3969]" />
                  </div>
                  <p className="text-5xl font-black text-[#3B3969] tracking-tight mb-2 relative z-10">
                    <AnimatedCounter target={70} prefix="~" />
                  </p>
                  <p className="text-base font-bold text-[#1e1c3d] mb-1">Cardiac arrests every day</p>
                  <p className="text-sm text-[#666] leading-relaxed">One cardiac arrest every 21 minutes â€” across homes, workplaces, and public spaces nationwide.</p>
                </div>

                {/* 10% survival */}
                <div className="group relative rounded-3xl bg-[#F9F9FC] border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex-1">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#CB154E] rounded-t-3xl" />
                  <div className="absolute -bottom-4 -right-2 text-[110px] font-black opacity-[0.04] text-[#CB154E] select-none pointer-events-none leading-none">10</div>
                  <div className="w-11 h-11 rounded-2xl bg-[#CB154E]/10 flex items-center justify-center mb-5">
                    <AlertCircle className="w-5 h-5 text-[#CB154E]" />
                  </div>
                  <p className="text-5xl font-black text-[#CB154E] tracking-tight mb-2 relative z-10">
                    <AnimatedCounter target={10} suffix="%" />
                  </p>
                  <p className="text-base font-bold text-[#1e1c3d] mb-1">Current survival rate</p>
                  <p className="text-sm text-[#666] leading-relaxed">Only 1 in 10 victims survive — because trained bystander help rarely reaches them in time.</p>
                </div>

              </Reveal>
            </div>

          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 2 â€” EVERY SECOND COUNTS
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section
          className="relative py-12 md:py-16 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e1c3d 0%, #3B3969 60%, #4A4880 100%)" }}
        >
          <div className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full bg-[#CB154E]/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-6 lg:px-12 text-center z-10">
            <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest border border-white/15 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
              Why Every Second Counts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Survival Drops Every Single Minute
            </h2>
            <p className="text-white/55 text-base max-w-xl mx-auto mb-14 leading-relaxed">
              Without CPR or defibrillation, chances of survival decrease by 7–10% for every minute that
              passes. The window to act is dangerously short.
            </p>
            </Reveal>

            {/* ── Horizontal timeline ── */}
            <Reveal delay={200}>
            <div className="relative max-w-3xl mx-auto mb-6">
              {/* Connecting gradient line â€” sits at vertical centre of circles */}
              <div
                className="absolute top-[52px] left-[4%] right-[4%] h-px opacity-20 pointer-events-none"
                style={{ background: "linear-gradient(to right, #22c55e, #84cc16, #eab308, #f97316, #ef4444, #CB154E)" }}
              />
              <div className="relative flex justify-between items-start">
                {[
                  { time: "0 min",  rate: "98%",  ring: "ring-[#22c55e]",  bg: "bg-[#22c55e]/15",  text: "text-[#22c55e]" },
                  { time: "2 min",  rate: "80%",  ring: "ring-[#84cc16]",  bg: "bg-[#84cc16]/15",  text: "text-[#84cc16]" },
                  { time: "4 min",  rate: "60%",  ring: "ring-[#eab308]",  bg: "bg-[#eab308]/15",  text: "text-[#eab308]" },
                  { time: "6 min",  rate: "40%",  ring: "ring-[#f97316]",  bg: "bg-[#f97316]/15",  text: "text-[#f97316]" },
                  { time: "8 min",  rate: "20%",  ring: "ring-[#ef4444]",  bg: "bg-[#ef4444]/15",  text: "text-[#ef4444]" },
                  { time: "10 min", rate: "~10%", ring: "ring-[#CB154E]",  bg: "bg-[#CB154E]/15",  text: "text-[#CB154E]" },
                ].map((node) => (
                  <div key={node.time} className="flex flex-col items-center gap-2 relative z-10">
                    <p className="text-white/50 text-[10px] md:text-xs font-semibold tracking-wide">{node.time}</p>
                    <div
                      className={`w-14 h-14 md:w-20 md:h-20 rounded-full ${node.bg} ring-2 ${node.ring} flex items-center justify-center shadow-lg`}
                    >
                      <span className={`text-xs md:text-sm font-black ${node.text}`}>{node.rate}</span>
                    </div>
                    <p className="text-white/30 text-[9px] md:text-[10px] font-medium">survival</p>
                  </div>
                ))}
              </div>
            </div>
            </Reveal>

            {/* Legend */}
            <Reveal delay={350}>
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                <span className="text-white/50 text-xs font-medium">CPR started immediately</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#CB154E]" />
                <span className="text-white/50 text-xs font-medium">No CPR given</span>
              </div>
            </div>
            </Reveal>

            {/* Callout */}
            <Reveal delay={450}>
            <div className="rounded-2xl bg-white/8 border border-white/12 px-7 py-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#CB154E] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/80 text-sm leading-relaxed font-medium">
                When CPR <em>and</em> an AED are used within{" "}
                <strong className="text-white">3–5 minutes</strong> of collapse, survival rates can reach{" "}
                <strong className="text-[#CB154E]">up to 70%</strong> — compared to just 10% today.
              </p>
            </div>
            </Reveal>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 3 â€” CPR IMPACT
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="py-12 md:py-16 bg-[#F9F9FC]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="text-center mb-14">
              <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-xs font-bold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />
                The Impact of CPR
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e1c3d] tracking-tight">
                What Trained Bystanders Can Achieve
              </h2>
              </Reveal>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <Reveal delay={0}>
              <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 h-full">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#3B3969] rounded-t-3xl" />
                <div className="w-12 h-12 rounded-2xl bg-[#3B3969]/10 flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6 text-[#3B3969]" />
                </div>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-5xl font-black text-[#3B3969] tracking-tight leading-none">2â€“3</span>
                  <span className="text-3xl font-black text-[#3B3969] leading-none pb-0.5">Ã—</span>
                </div>
                <p className="text-base font-bold text-[#1e1c3d] mb-2">Higher survival chances with CPR</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  Immediate CPR from a bystander can double or even triple a person's chance of surviving cardiac arrest compared to waiting for paramedics alone.
                </p>
              </div>
              </Reveal>

              {/* Card 2 */}
              <Reveal delay={100}>
              <div className="relative bg-[#CB154E] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 h-full">
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-5xl font-black text-white tracking-tight leading-none">
                    <AnimatedCounter target={70} suffix="%" />
                  </span>
                </div>
                <p className="text-base font-bold text-white mb-2">Survival rate possible with early AED</p>
                <p className="text-sm text-white/75 leading-relaxed">
                  When CPR is combined with defibrillation within 3â€“5 minutes of collapse, survival rates can climb to up to 70%.
                </p>
              </div>
              </Reveal>

              {/* Card 3 */}
              <Reveal delay={200}>
              <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#CB154E] rounded-t-3xl" />
                <div className="w-12 h-12 rounded-2xl bg-[#CB154E]/10 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6 text-[#CB154E]" />
                </div>
                <div className="flex items-end gap-1 mb-3">
                  <span className="text-5xl font-black text-[#CB154E] tracking-tight leading-none">7â€“10</span>
                  <span className="text-3xl font-black text-[#CB154E] leading-none pb-0.5">%</span>
                </div>
                <p className="text-base font-bold text-[#1e1c3d] mb-2">Survival drop per minute without CPR</p>
                <p className="text-sm text-[#666] leading-relaxed">
                  For every minute that passes without CPR or defibrillation, the chance of survival falls by 7â€“10%. Fast action is not optional â€” it is everything.
                </p>
              </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 4 â€” BYSTANDER & LOCATION
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">

            <div className="text-center mb-12">
              <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-xs font-bold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                Bystander Response &amp; Location
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e1c3d] tracking-tight">
                You Are the Most Likely First Responder
              </h2>
              <p className="text-[#666] mt-4 max-w-xl mx-auto leading-relaxed text-base">
                In most cardiac emergencies, ambulance services cannot arrive fast enough. A trained bystander
                on scene in the first critical minutes is the single greatest factor in improving survival.
              </p>
              </Reveal>
            </div>

            {/* â”€â”€ Featured 80% at home â”€â”€ */}
            <Reveal delay={100}>
            <div
              className="relative rounded-3xl overflow-hidden p-10 md:p-14 mb-6"
              style={{ background: "linear-gradient(135deg, #1e1c3d 0%, #3B3969 100%)" }}
            >
              <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[#CB154E]/12 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/[0.02] blur-2xl pointer-events-none" />

              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/70 text-xs font-semibold border border-white/10 mb-6">
                    <Home className="w-3.5 h-3.5 text-[#CB154E]" />
                    Where cardiac arrests occur
                  </span>
                  <p className="text-8xl md:text-9xl font-black text-white tracking-tight leading-none mb-4">
                    <AnimatedCounter target={80} suffix="%" />
                  </p>
                  <p className="text-xl font-bold text-white mb-3">of cardiac arrests occur at home</p>
                  <p className="text-white/50 text-base leading-relaxed">
                    This means the first responder isn&rsquo;t usually a paramedic â€” it&rsquo;s a family
                    member, a partner, or a friend. Being trained in CPR could mean saving someone you love.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      Icon: Users,
                      stat: "Only 40%",
                      label: "of victims receive bystander CPR before the ambulance arrives",
                    },
                    {
                      Icon: Activity,
                      stat: "45â€“75%",
                      label: "bystander CPR rates vary across Australian states and territories",
                    },
                    {
                      Icon: Clock,
                      stat: "7â€“10%",
                      label: "survival drops per minute without CPR or defibrillation",
                    },
                  ].map((item) => (
                    <div
                      key={item.stat}
                      className="flex items-start gap-4 bg-white/8 rounded-2xl p-5 border border-white/10 hover:bg-white/12 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                        <item.Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-sm text-white/65 leading-relaxed">
                        <strong className="text-white font-bold">{item.stat}</strong> {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </Reveal>

            {/* â”€â”€ Bottom callout strip â”€â”€ */}
            <Reveal delay={200}>
            <div className="rounded-3xl bg-[#F9F9FC] border border-gray-100 px-8 py-6 flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <AlertCircle className="w-6 h-6 text-[#CB154E] shrink-0" />
              <p className="text-sm text-[#444] leading-relaxed font-medium text-center sm:text-left">
                Across Australia, bystander CPR rates range from <strong className="text-[#1e1c3d]">45% to 75%</strong> depending on
                location â€” meaning tens of thousands of cardiac arrest victims each year do not receive
                the help they need in time. <strong className="text-[#1e1c3d]">Training more Australians closes this gap.</strong>
              </p>
            </div>
            </Reveal>

          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 5 â€” TRAINING GAP
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="py-12 md:py-16 bg-[#F9F9FC]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: copy */}
              <div className="space-y-6">
              <Reveal>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-xs font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B3969]" />
                  CPR Training in Australia
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e1c3d] leading-tight tracking-tight">
                  The Training Gap
                  <br />
                  <span className="text-[#CB154E]">We Need to Close</span>
                </h2>
                <p className="text-[#555] text-base leading-relaxed">
                  While more than half of Australians have done CPR training at some point, only a fraction
                  are <em>currently</em> trained. CPR guidelines are updated regularly and skills fade fast
                  without practice.
                </p>
                <p className="text-[#555] text-base leading-relaxed">
                  Annual refresher training is strongly recommended â€” and is the single most effective way
                  to ensure you're ready to act when it truly matters.
                </p>
                <Button
                  asChild
                  className="bg-[#CB154E] hover:bg-[#a50f3d] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-8 h-12 text-sm"
                >
                  <Link href="/courses/hltaid009">
                    Get CPR Trained Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Reveal>
              </div>

              {/* Right: progress bars */}
              <div className="space-y-5">
              <Reveal delay={100}>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3B3969]/10 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-[#3B3969]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1e1c3d]">Have done CPR training</p>
                        <p className="text-xs text-[#888]">at some point in their lives</p>
                      </div>
                    </div>
                    <span className="text-3xl font-black text-[#3B3969]">
                      <AnimatedCounter target={56} suffix="%" />
                    </span>
                  </div>
                  <AnimatedBar percent={56} color="bg-[#3B3969]" />
                </div>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#CB154E]/10 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-[#CB154E]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#1e1c3d]">Currently trained in CPR</p>
                        <p className="text-xs text-[#888]">completed training within the last year</p>
                      </div>
                    </div>
                    <span className="text-3xl font-black text-[#CB154E]">
                      <AnimatedCounter target={22} suffix="%" />
                    </span>
                  </div>
                  <AnimatedBar percent={22} color="bg-[#CB154E]" />
                </div>

                <div className="rounded-3xl bg-[#1e1c3d] border border-white/5 px-7 py-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#CB154E] flex items-center justify-center shrink-0 mt-0.5">
                    <AlertCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed font-medium">
                    That means <strong className="text-white">78% of Australians</strong> are not currently
                    equipped to respond confidently in a cardiac emergency.
                  </p>
                </div>
              </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            CTA â€” WHY TRAINING MATTERS
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section
          className="relative py-12 md:py-16 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #F9F9FC 0%, #F0F0F6 100%)" }}
        >
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#CB154E]/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-[#3B3969]/3 blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-5xl px-6 lg:px-12 z-10">

            {/* Centred heading */}
            <div className="text-center mb-12">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CB154E]/8 text-[#CB154E] text-xs font-bold uppercase tracking-widest border border-[#CB154E]/20 mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                Why Training Matters
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1e1c3d] leading-tight tracking-tight mb-5">
                Be the Person Who
                <br />
                <span className="text-[#CB154E]">Makes the Difference</span>
              </h2>
              <p className="text-[#666] text-base leading-relaxed max-w-2xl mx-auto">
                Learning CPR gives you the skills and confidence to act in those critical first minutes before
                emergency services arrive. The facts below show exactly why it matters.
              </p>
            </Reveal>
            </div>

            {/* â”€â”€ 3-col fact grid â”€â”€ */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <Reveal delay={100}>
              {[
                { icon: Heart,       text: "Over 32,000 Australians suffer cardiac arrest every year." },
                { icon: AlertCircle, text: "Only 1 in 10 survive â€” often because help didn't arrive in time." },
                { icon: Activity,    text: "Immediate CPR can double or triple survival chances." },
                { icon: Clock,       text: "Every minute without CPR reduces survival by up to 10%." },
                { icon: Home,        text: "80% of cardiac arrests occur at home â€” it could be someone you love." },
                { icon: BookOpen,    text: "Only 22% of Australians have current CPR training." },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#CB154E]/10 border border-[#CB154E]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4.5 h-4.5 text-[#CB154E]" style={{ width: "18px", height: "18px" }} />
                  </div>
                  <p className="text-[#555] text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </Reveal>
            </div>

            {/* â”€â”€ CTA bar â”€â”€ */}
            <div className="rounded-3xl bg-gradient-to-r from-[#3B3969] to-[#4A4880] border border-[#3B3969]/20 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-white/80 text-base font-medium leading-relaxed max-w-xl text-center md:text-left">
                Don&rsquo;t wait until it&rsquo;s too late. Getting trained takes just a few hours â€” and it
                could save a life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Button
                  asChild
                  className="bg-[#CB154E] hover:bg-[#a50f3d] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 px-8 h-12 text-sm"
                >
                  <Link href="/courses">
                    View Our Courses
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/25 text-white bg-white/8 hover:bg-white/15 font-semibold rounded-full px-8 h-12 text-sm transition-all duration-300"
                >
                  <Link href="/contact">Book Team Training</Link>
                </Button>
              </div>
            </div>

          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}


