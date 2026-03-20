"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react"
import logo from "@/public/images/logo.png"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Events", href: "/events" },
  { name: "Statistics", href: "/statistics" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #3B3969 0%, #2e2c5c 35%, #231f4b 65%, #1e1c3d 100%)",
      }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(203,21,78,0.08) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,57,105,0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Main footer content */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 pb-10 lg:px-10 lg:pt-20 lg:pb-12">
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
                <span className="text-xs font-semibold text-[#CB154E] tracking-[0.2em]">
                  AUSTRALIA
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed max-w-[280px]">
              Delivering high-quality health and safety training across workplaces, schools, and communities throughout Australia.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/[0.07] border border-white/[0.08] flex items-center justify-center text-white/50 hover:bg-[#CB154E] hover:border-[#CB154E] hover:text-white transition-all duration-300"
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
                    className="text-sm text-white/50 hover:text-[#CB154E] hover:translate-x-1 inline-block transition-all duration-200"
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
                <span className="text-[#CB154E] font-bold text-xs mt-0.5 w-4 shrink-0">A:</span>
                <span className="text-sm text-white/55 leading-relaxed">
                  Servicing all of Australia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CB154E] font-bold text-xs mt-0.5 w-4 shrink-0">P:</span>
                <a
                  href="tel:1300347782"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                >
                  1300 FIRST AID
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#CB154E] font-bold text-xs mt-0.5 w-4 shrink-0">E:</span>
                <a
                  href="mailto:info@firstaidnetwork.com.au"
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200 break-all"
                >
                  info@firstaidnetwork.com.au
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / CTA */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Subscribe to our newsletter for the latest training updates and health &amp; safety tips.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setEmail("")
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/[0.07] border border-white/[0.12] text-sm text-white placeholder:text-white/30 outline-none focus:border-[#CB154E]/50 focus:ring-1 focus:ring-[#CB154E]/30 transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #CB154E 0%, #e02460 100%)",
                  boxShadow: "0 4px 14px rgba(203,21,78,0.35)",
                }}
              >
                Subscribe <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-5 py-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} First Aid Network Australia. All rights reserved.
            </p>
            <p className="text-xs text-white/35">
              Training delivered in partnership with{" "}
              <span className="text-[#CB154E] font-medium">Healthcorp RTO</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
