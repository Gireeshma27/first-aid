"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react"
import logo from "@/public/images/logo.png"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/services" },
  { name: "Services", href: "/services" },
  { name: "Statistics", href: "/statistics" },
  { name: "Contact", href: "/contact" },
]

const TiktokIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3 3z" />
  </svg>
)

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/firstaidnetworkaustralia?igsh=M3UxdWc2cWo3OGg=" },
  { name: "TikTok", icon: TiktokIcon, href: "https://vt.tiktok.com/ZSu3kFXt9/" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@FirstAidNetworkAustralia" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        background: "#3b3f69",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          
          
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          
          
        }}
      />

      {/* Main footer content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 pt-10 pb-8 lg:px-10 lg:pt-14 lg:pb-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Branding */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image
                src={logo}
                alt="First Aid Network Australia"
                className="w-16 h-16 group-hover:scale-105 transition-transform duration-300"
                width={64}
                height={64}
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  First Aid Network
                </span>
                <span className="text-xs font-semibold text-[#ca1254] tracking-[0.2em]">
                  AUSTRALIA
                </span>
              </div>
            </Link>
            <p className="text-sm text-white leading-relaxed max-w-[280px]">
              Delivering high-quality health and safety training across workplaces, schools, and communities throughout Australia.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/[0.07] border border-white/[0.08] flex items-center justify-center text-white hover:bg-[#ca1254] hover:border-[#ca1254] hover:text-white transition-all duration-300"
                  aria-label={name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-[#ca1254] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-[#ca1254] font-bold text-xs mt-0.5 w-4 shrink-0">P:</span>
                <a
                  href="tel:0296272659"
                  className="text-sm text-white hover:text-white transition-colors duration-200"
                >
                  (02) 9627 2659
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ca1254] font-bold text-xs mt-0.5 w-4 shrink-0">E:</span>
                <a
                  href="mailto:admin@firstaidnetworkaustralia.com.au"
                  className="text-sm text-white hover:text-white transition-colors duration-200 break-all"
                >
                  admin@firstaidnetworkaustralia.com.au
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / CTA */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Stay in the Loop
            </h3>
            <p className="text-sm text-white leading-relaxed mb-5">
              Subscribe to our newsletter for the latest training updates and health &amp; safety tips.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                if (!email) return
                setIsSubmitting(true)
                try {
                  const res = await fetch("/api/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                  })
                  if (!res.ok) {
                    const data = await res.json().catch(() => ({}))
                    throw new Error(data.error || "Subscription failed")
                  }
                  setIsSubscribed(true)
                  setEmail("")
                } catch (err) {
                  console.error("Subscribe error:", err)
                  alert("Failed to subscribe. Please try again.")
                } finally {
                  setIsSubmitting(false)
                }
              }}
              className="flex flex-col gap-3"
            >
              {isSubscribed ? (
                <p className="text-sm text-green-400 font-semibold py-3">✓ Thank you for subscribing!</p>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.07] border border-white/[0.12] text-sm text-white placeholder:text-white outline-none focus:border-[#ca1254]/50 focus:ring-1 focus:ring-[#ca1254]/30 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: "#ca1254",
                      boxShadow: "0 4px 14px rgba(202,18,84,0.35)",
                    }}
                  >
                    {isSubmitting ? "Subscribing..." : (<>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>)}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto max-w-[1200px] px-5 py-4 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white">
              © {new Date().getFullYear()} First Aid Network Australia. All rights reserved.
            </p>
            <p className="text-xs text-white">
              Training delivered in partnership with{" "}
              <span className="text-[#ca1254] font-medium">Healthcorp RTO</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
