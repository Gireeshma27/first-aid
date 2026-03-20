"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, PlayCircle, Shield, Heart, Stethoscope, Cross, Activity } from "lucide-react"
import { NationallyRecognisedBadge } from "@/components/nationally-recognised-badge"

const floatingIcons = [
  { Icon: Shield, top: "12%", left: "4%", delay: "0s", size: "w-7 h-7" },
  { Icon: Heart, top: "22%", right: "6%", delay: "1s", size: "w-6 h-6" },
  { Icon: Cross, bottom: "22%", left: "2%", delay: "2s", size: "w-5 h-5" },
  { Icon: Activity, top: "58%", right: "2%", delay: "0.5s", size: "w-6 h-6" },
  { Icon: Stethoscope, bottom: "12%", right: "10%", delay: "1.5s", size: "w-5 h-5" },
]

const stats = [
  { value: "10,000+", label: "Trained Participants" },
  { value: "500+", label: "Organisations" },
  { value: "98%", label: "Satisfaction Rate" },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) section.classList.add("visible") },
      { threshold: 0.1 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        .hero-wrap { font-family: 'Plus Jakarta Sans', sans-serif; }
        .hero-wrap * { font-family: inherit; }

        /* ── Animations ── */
        @keyframes floatY {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-10px); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes fadeRight {
          from { opacity:0; transform:translateX(26px); }
          to   { opacity:1; transform:translateX(0);    }
        }
        @keyframes ping {
          75%,100% { transform:scale(2.2); opacity:0; }
        }
        @keyframes shimmerMove {
          0%   { transform:translateX(-100%); }
          100% { transform:translateX(100%);  }
        }

        .anim-float { animation: floatY ease-in-out infinite; }
        .anim-up    { animation: fadeUp   0.75s cubic-bezier(.16,1,.3,1) both; }
        .anim-right { animation: fadeRight 0.75s cubic-bezier(.16,1,.3,1) both; }

        .d1{ animation-delay:0.05s; } .d2{ animation-delay:0.15s; }
        .d3{ animation-delay:0.25s; } .d4{ animation-delay:0.35s; }
        .d5{ animation-delay:0.48s; }

        /* ── Ping dot ── */
        .ping-dot::after {
          content:''; position:absolute; inset:0; border-radius:9999px;
          background:#CB154E;
          animation: ping 1.5s cubic-bezier(0,0,.2,1) infinite;
        }

        /* ── Background noise texture ── */
        .hero-noise::before {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:1;
          opacity:0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        /* ── Dot grid ── */
        .dot-grid {
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        /* ── Icon float pill ── */
        .icon-pill {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          border-radius: 14px;
          transition: background 0.3s;
        }
        .icon-pill:hover { background: rgba(255,255,255,0.1); }

        /* ── Buttons ── */
        .btn-cta {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg, #CB154E 0%, #e02460 100%);
          color: white; border: none; border-radius: 12px;
          padding: 15px 30px; font-size: 0.94rem; font-weight: 700;
          display: inline-flex; align-items: center; gap: 9px;
          cursor: pointer; letter-spacing: 0.02em; text-decoration: none;
          box-shadow: 0 6px 20px rgba(203,21,78,0.4), inset 0 1px 0 rgba(255,255,255,0.18);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .btn-cta::after {
          content:''; position:absolute; top:0; left:0; right:0; bottom:0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0s;
        }
        .btn-cta:hover { transform:translateY(-2px); box-shadow: 0 12px 28px rgba(203,21,78,0.5), inset 0 1px 0 rgba(255,255,255,0.18); }
        .btn-cta:hover::after { transform:translateX(100%); transition:transform 0.55s ease; }

        .btn-ghost {
          background: rgba(255,255,255,0.06);
          color: white; border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 12px; padding: 14px 26px;
          font-size: 0.94rem; font-weight: 600;
          display: inline-flex; align-items: center; gap: 9px;
          cursor: pointer; backdrop-filter: blur(10px);
          transition: all 0.22s ease; text-decoration: none;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.35);
          transform: translateY(-2px);
        }

        /* ── Stats glass row ── */
        .stats-glass {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          border-radius: 16px;
          padding: 18px 28px;
          display: flex;
          gap: 0;
        }
        .stat-col {
          flex: 1;
          position: relative;
          padding: 0 24px;
        }
        .stat-col:first-child { padding-left: 0; }
        .stat-col:last-child  { padding-right: 0; }
        .stat-col + .stat-col::before {
          content:'';
          position:absolute; left:0; top:10%; bottom:10%;
          width:1px;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.18), transparent);
        }

        /* ── Image border glow ── */
        .img-frame {
          position: relative;
          border-radius: 24px;
          padding: 2px;
          background: linear-gradient(150deg, rgba(203,21,78,0.55) 0%, rgba(59,57,105,0.25) 50%, rgba(255,255,255,0.08) 100%);
        }
        .img-frame-inner {
          border-radius: 22px;
          overflow: hidden;
          position: relative;
        }
        .img-glow-bg {
          position: absolute; inset: -30px; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse at 60% 50%, rgba(203,21,78,0.2) 0%, transparent 65%);
          filter: blur(20px);
        }

        /* ── Floating badge cards ── */
        .badge-white {
          background: #ffffff;
          border-radius: 16px; padding: 13px 16px;
          display: flex; align-items: center; gap: 11px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.05);
          min-width: 186px;
        }
        .badge-dark {
          background: linear-gradient(135deg, #3B3969 0%, #2d2b58 100%);
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 16px; padding: 13px 16px;
          display: flex; align-items: center; gap: 11px;
          box-shadow: 0 16px 40px rgba(0,0,0,0.35);
          min-width: 172px;
        }
        .badge-icon-wrap {
          width: 40px; height: 40px; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* ── Heading underline accent ── */
        .h-accent {
          display: block; width: 48px; height: 3px; border-radius: 99px;
          background: linear-gradient(90deg, #CB154E, rgba(203,21,78,0.25));
          margin-bottom: 18px;
        }

        /* ── Inner image label ── */
        .img-label {
          background: rgba(20,18,50,0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 7px 13px;
          display: inline-flex; align-items: center; gap: 7px;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="hero-wrap hero-noise relative overflow-hidden"
        style={{
          minHeight: "calc(100vh - 70px)",
          background: "linear-gradient(145deg, #3B3969 0%, #2e2c5c 35%, #231f4b 65%, #1e1c3d 100%)",
        }}
      >
        {/* Ambient colour blobs */}
        <div className="absolute top-[-60px] right-[-60px] w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(203,21,78,0.13) 0%, transparent 65%)", filter: "blur(8px)" }} />
        <div className="absolute bottom-[-80px] left-[-80px] w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,57,105,0.45) 0%, transparent 70%)", filter: "blur(8px)" }} />

        {/* Dot grid — top right only */}
        <div className="dot-grid absolute top-0 right-0 w-80 h-80 opacity-30 pointer-events-none" style={{ zIndex: 2 }} />

        {/* Floating medical icons */}
        {floatingIcons.map(({ Icon, delay, size, ...pos }, i) => (
          <div
            key={i}
            className="absolute hidden lg:flex items-center justify-center w-11 h-11 icon-pill anim-float"
            style={{ ...pos, zIndex: 2, animationDelay: delay, animationDuration: `${4.5 + i * 0.5}s` }}
          >
            <Icon className={`${size} text-white/20`} />
          </div>
        ))}

        {/* ── Main grid ── */}
        <div className="relative mx-auto max-w-7xl px-5 lg:px-10 pt-[44px] pb-[16px] md:pt-[56px] md:pb-[20px]" style={{ zIndex: 3 }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── LEFT ── */}
            <div className="flex flex-col gap-6">

              {/* Badge pill */}
              <div className="anim-up d1">
                <NationallyRecognisedBadge />
              </div>

              {/* Heading */}
              <div className="anim-up d2">
                <span className="h-accent" />
                <h1 className="text-[2.55rem] md:text-[2.9rem] lg:text-[3.2rem] font-extrabold text-white leading-[1.1] tracking-tight">
                  First Aid{" "}
                  <span style={{
                    background: "linear-gradient(130deg, #CB154E 20%, #f7395e 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Network
                  </span>
                </h1>
              </div>

              {/* Body */}
              <div className="anim-up d3">
                <p className="text-[1rem] leading-[1.8] max-w-[490px]"
                  style={{ color: "rgba(255,255,255,0.58)", fontWeight: 400 }}>
                  Practical, nationally recognised first aid training delivered by experienced healthcare professionals for workplaces, schools and communities.
                </p>
              </div>

              {/* CTAs */}
              <div className="anim-up d4 flex flex-wrap gap-3 items-center">
                <Link href="/book-training" className="btn-cta">
                  Book Training <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services" className="btn-ghost">
                  <PlayCircle className="w-4 h-4" style={{ color: "#CB154E" }} />
                  Explore Services
                </Link>
              </div>

              {/* Stats — glassmorphism row */}
              <div className="anim-up d5 stats-glass mt-2">
                {stats.map((s, i) => (
                  <div key={i} className={`stat-col ${i === 2 ? "hidden sm:block" : ""}`}>
                    <p className="text-[1.75rem] font-extrabold text-white leading-none tracking-tight">{s.value}</p>
                    <p className="text-[0.72rem] mt-1.5 font-medium uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.4)", letterSpacing: "0.09em" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Image ── */}
            <div className="anim-right d3 relative flex justify-center lg:justify-end">

              {/* Glow behind image */}
              <div className="img-glow-bg" />

              {/* Gradient-border frame */}
              <div className="img-frame w-full max-w-[560px]" style={{ position: "relative", zIndex: 1 }}>
                <div className="img-frame-inner">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/images/hero aid.png"
                      alt="CPR training session with first aid instructor teaching students"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Bottom fade overlay */}
                    <div className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(25,22,55,0.65) 0%, rgba(25,22,55,0.1) 45%, transparent 100%)" }} />

                    {/* "Live" label inside image */}
                    <div className="absolute bottom-4 left-4">
                      <div className="img-label">
                        <span className="ping-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-[#CB154E]" />
                        <span className="text-white/75 text-[10px] font-semibold uppercase tracking-widest">
                          Live Training Sessions
                        </span>
                      </div>
                    </div>

                    {/* Rating chip inside image — top right */}
                    <div className="absolute top-4 right-4">
                      <div className="img-label gap-1.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3" fill="#f59e0b" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-white/70 text-[10px] font-semibold ml-0.5">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge — Accredited (bottom-left) */}
              <div
                className="badge-white absolute -bottom-5 -left-4 hidden md:flex anim-float"
                style={{ animationDelay: "1s", animationDuration: "5.5s", zIndex: 10 }}
              >
                <div className="badge-icon-wrap" style={{ background: "rgba(203,21,78,0.1)" }}>
                  <svg className="w-5 h-5" fill="none" stroke="#CB154E" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.83rem", color: "#1e1c3d", lineHeight: 1.3 }}>Accredited Training</p>
                  <p style={{ fontSize: "0.68rem", color: "#aaa", marginTop: 3, fontWeight: 500 }}>RTO Certified Programs</p>
                </div>
              </div>

              {/* Badge — Flexible (top-right) */}
              <div
                className="badge-dark absolute -top-4 -right-4 hidden md:flex anim-float"
                style={{ animationDelay: "2s", animationDuration: "6s", zIndex: 10 }}
              >
                <div className="badge-icon-wrap" style={{ background: "rgba(203,21,78,0.2)" }}>
                  <svg style={{ width: 18, height: 18 }} fill="none" stroke="#CB154E" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: "0.83rem", color: "white", lineHeight: 1.3 }}>Flexible Delivery</p>
                  <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.42)", marginTop: 3, fontWeight: 500 }}>On-site & Online</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 4 }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L48 36.7C96 33.3 192 26.7 288 26.7C384 26.7 480 33.3 576 40C672 46.7 768 53.3 864 50C960 46.7 1056 33.3 1152 30C1248 26.7 1344 33.3 1392 36.7L1440 40V80H0V40Z" fill="#F5F5F5" />
          </svg>
        </div>
      </section>
    </>
  )
}