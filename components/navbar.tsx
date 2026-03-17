"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu, X, ChevronDown,
} from "lucide-react"
import logo from "@/public/images/logo.png"
import { Button } from "@/components/ui/button"

const services = [
  { name: "HLTAID009 – Provide CPR", href: "/services/cpr-training" },
  { name: "HLTAID011 – Provide First Aid", href: "/services/provide-first-aid" },
  { name: "HLTAID012 – First Aid in Education & Care", href: "/services/first-aid-education-care" },
  { name: "Anaphylaxis & Asthma Management", href: "/services/anaphylaxis-asthma-training" },
  { name: "RAMOAP Training for NSW Teachers", href: "/services/ramoap-training" },
  { name: "Community Clinical Awareness", href: "/services/community-clinical-awareness" },
  { name: "Drug and Alcohol Testing", href: "/services/drug-alcohol-testing" },
  { name: "Event Medics & On-Site Support", href: "/services/event-medics" },
  { name: "Custom & Tailored Training", href: "/services/custom-training" },
]

type ServiceItem = typeof services[number]

const navigation = [
  { name: "Home", href: "/", dropdown: null as null | ServiceItem[], isServices: false },
  { name: "Services", href: "/services", dropdown: services as ServiceItem[], isServices: true },
  { name: "Events", href: "/events", dropdown: null, isServices: false },
  { name: "Statistics", href: "/statistics", dropdown: null, isServices: false },
  { name: "About Us", href: "/about", dropdown: null, isServices: false },
  { name: "Contact", href: "/contact", dropdown: null, isServices: false },
]

/* ── Compact 2-column dropdown (Services — click only, no icons) ── */
function ServicesDropdown({ items, isOpen }: { items: ServiceItem[]; isOpen: boolean }) {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 animate-slide-down">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-white/40 p-3 w-[460px]">
        <div className="grid grid-cols-2 gap-2">
          {items.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="block px-4 py-3 rounded-xl text-sm text-[#333333] hover:bg-[#3B3969]/5 hover:text-[#3B3969] transition-all duration-200 font-semibold leading-relaxed"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen])

  return (
    <>
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
        }`}
    >
      <nav
        ref={navRef}
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src={logo}
              alt="First Aid Network Australia"
              className="h-[45px] lg:h-[55px] w-auto object-contain transition-transform hover:scale-105 duration-300"
              width={200}
              height={55}
              priority
            />
          </Link>
        </div>

        {/* Mobile button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-[#333333] hover:bg-[#3B3969]/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-2">
          {navigation.map((item) => {
            const hasDropdown = !!item.dropdown
            const isOpen = activeDropdown === item.name

            return (
              <div
                key={item.name}
                className="relative"
              >
                {hasDropdown ? (
                  <button
                    onClick={() => setActiveDropdown(prev => (prev === item.name ? null : item.name))}
                    className={`inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${isOpen
                        ? "text-[#3B3969] bg-[#3B3969]/5"
                        : "text-[#333333] hover:text-[#3B3969] hover:bg-[#3B3969]/5"
                      }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 text-[#333333] hover:text-[#3B3969] hover:bg-[#3B3969]/5"
                  >
                    {item.name}
                  </Link>
                )}

                {item.isServices && item.dropdown && (
                  <ServicesDropdown items={item.dropdown as ServiceItem[]} isOpen={isOpen} />
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            className="bg-[#CB154E] hover:bg-[#a50f3d] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 px-7 h-11 text-sm"
          >
            <Link href="/book-training">Book Training</Link>
          </Button>
        </div>
      </nav>
    </header>

      {/* ── Mobile menu — rendered outside <header> to avoid backdrop-filter
           creating a new containing block that breaks position:fixed children ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-[70] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200 animate-slide-in">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image src={logo} alt="First Aid Network Australia" className="h-[40px] w-auto" width={200} height={40} />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-lg p-2.5 text-[#333333] hover:bg-[#F5F5F5] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => setMobileAccordion(mobileAccordion === item.name ? null : item.name)}
                          className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-[#333333] hover:bg-[#F5F5F5] transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === item.name ? "rotate-180" : ""}`} />
                        </button>
                        {mobileAccordion === item.name && (
                          <div className="ml-4 space-y-1 animate-slide-down">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block rounded-lg px-4 py-2.5 text-sm text-[#666666] hover:bg-[#F5F5F5] hover:text-[#3B3969] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-base font-medium text-[#333333] hover:bg-[#F5F5F5] hover:text-[#3B3969] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button asChild className="w-full bg-[#CB154E] hover:bg-[#a50f3d] text-white font-semibold rounded-full py-6 text-base">
                  <Link href="/book-training" onClick={() => setMobileMenuOpen(false)}>Book Training</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
