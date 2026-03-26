"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Menu, X, ChevronDown,
} from "lucide-react"
import logo from "@/public/images/logo.png"
import { Button } from "@/components/ui/button"

const coursesList = [
  { name: "HLTAID009 Provide CPR", href: "/services/cpr-training" },
  { name: "HLTAID011 Provide First Aid", href: "/services/provide-first-aid" },
  { name: "HLTAID012 First Aid in Education & Care", href: "/services/first-aid-education-care" },
  { name: "Anaphylaxis & Asthma Management", href: "/services/anaphylaxis-asthma-training" },
  { name: "RAMOAP Training for NSW Teachers", href: "/services/ramoap-training" },
]

const servicesList = [
  { name: "Drug and Alcohol Testing", href: "/services/drug-alcohol-testing" },
  { name: "Event Medical Services", href: "/services/event-medics" },
  { name: "Medicine and Onsite Support", href: "/services/medicine-onsite-support" },
  { name: "Custom and Tailored Training", href: "/services/custom-training" },
]

const navigation = [
  { name: "Home", href: "/", type: "link" },
  { name: "Courses", href: "/courses", type: "courses" },
  { name: "Services", href: "/services", type: "services" },
  { name: "Statistics", href: "/statistics", type: "link" },
  { name: "About Us", href: "/about", type: "link" },
  { name: "Contact", href: "/contact", type: "link" },
]

function CoursesDropdown({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 animate-slide-down">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-white/40 p-5 w-[640px] max-w-[90vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1">
          {coursesList.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="block px-3 py-2.5 rounded-xl text-sm text-[#333333] hover:bg-[#3B3969]/5 hover:text-[#3B3969] transition-all duration-200 font-semibold leading-relaxed"
            >
              {name}
            </Link>
          ))}
        </div>
        
        <div className="mt-3 mb-3 border-t border-gray-200/60"></div>
        
        <div className="px-3 pb-1">
          <p className="text-[11px] text-gray-500 tracking-wider uppercase font-semibold mb-1 opacity-80">
            In partnership with Healthcorp RTO 91222
          </p>
          <Link
            href="/services/community-clinical-awareness"
            className="block py-2 rounded-xl group"
          >
            <div className="text-sm text-[#333333] group-hover:text-[#3B3969] transition-colors font-semibold leading-relaxed">
              Community Clinical Awareness
            </div>
            <div className="text-[12.5px] text-gray-400 mt-0.5 font-medium">
              Non-accredited (Not nationally recognised)
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ServicesDropdown({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 animate-slide-down">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-white/40 p-3 w-[460px]">
        <div className="grid grid-cols-2 gap-2">
          {servicesList.map(({ name, href }) => (
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

function MobileCoursesDropdown({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="ml-4 space-y-1 animate-slide-down">
      {coursesList.map((subItem) => (
        <Link
          key={subItem.name}
          href={subItem.href}
          className="block rounded-lg px-4 py-2.5 text-sm text-[#666666] hover:bg-[#F5F5F5] hover:text-[#3B3969] transition-colors"
          onClick={closeMenu}
        >
          {subItem.name}
        </Link>
      ))}
      <div className="my-2 border-t border-gray-200/60 mx-4"></div>
      <div className="px-4 py-1">
        <p className="text-[10px] text-gray-500 tracking-wider uppercase font-semibold mb-1 opacity-80">
          In partnership with Healthcorp RTO 91222
        </p>
        <Link
          href="/services/community-clinical-awareness"
          className="block py-2 rounded-lg group"
          onClick={closeMenu}
        >
          <div className="text-sm text-[#666666] group-hover:text-[#3B3969] transition-colors">
            Community Clinical Awareness
          </div>
          <div className="text-[12px] text-gray-400 mt-0.5">
            Non-accredited (Not nationally recognised)
          </div>
        </Link>
      </div>
    </div>
  )
}

function MobileServicesDropdown({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="ml-4 space-y-1 animate-slide-down">
      {servicesList.map((subItem) => (
        <Link
          key={subItem.name}
          href={subItem.href}
          className="block rounded-lg px-4 py-2.5 text-sm text-[#666666] hover:bg-[#F5F5F5] hover:text-[#3B3969] transition-colors"
          onClick={closeMenu}
        >
          {subItem.name}
        </Link>
      ))}
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
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src={logo}
              alt="First Aid Network Australia"
              className="h-[55px] lg:h-[70px] w-auto object-contain transition-transform hover:scale-105 duration-300"
              width={250}
              height={70}
              priority
            />
            <span className="font-bold text-sm sm:text-base lg:text-lg leading-tight tracking-tight">
              <span className="text-[#3B3969]">First Aid </span><span className="text-[#CB154E]">Network</span>
            </span>
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
            const hasDropdown = item.type === "courses" || item.type === "services"
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

                {item.type === "courses" && <CoursesDropdown isOpen={isOpen} />}
                {item.type === "services" && <ServicesDropdown isOpen={isOpen} />}
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
                <Image src={logo} alt="First Aid Network Australia" className="h-[50px] w-auto" width={220} height={50} />
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
                {navigation.map((item) => {
                  const hasDropdown = item.type === "courses" || item.type === "services"
                  
                  return (
                  <div key={item.name}>
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={() => setMobileAccordion(mobileAccordion === item.name ? null : item.name)}
                          className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-[#333333] hover:bg-[#F5F5F5] transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAccordion === item.name ? "rotate-180" : ""}`} />
                        </button>
                        {mobileAccordion === item.name && (
                          item.type === "courses" ? (
                            <MobileCoursesDropdown closeMenu={() => setMobileMenuOpen(false)} />
                          ) : (
                            <MobileServicesDropdown closeMenu={() => setMobileMenuOpen(false)} />
                          )
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
                )})}
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
