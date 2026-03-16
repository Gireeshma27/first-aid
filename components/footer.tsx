import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import logo from "@/public/images/logo.png"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Statistics", href: "/statistics" },
  { name: "Events", href: "/events" },
]

const services = [
  { name: "Event Medical Services", href: "/events" },
  { name: "Drug & Alcohol Testing", href: "/services" },
  { name: "Custom Training Programs", href: "/services" },
  { name: "Community Clinical Training", href: "/services" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-[#1e1c3d] text-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src={logo}
                alt="First Aid Network Australia"
                className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">First Aid Network</span>
                <span className="text-xs font-semibold text-[#CB154E] tracking-widest">AUSTRALIA</span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              First Aid Network Australia delivers high-quality health and safety training across workplaces, schools, and community organisations throughout Australia.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#CB154E] hover:text-white transition-all duration-300"
                  aria-label={name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#CB154E] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-[#CB154E]" />
                </div>
                <span className="text-sm text-white/50">1300 FIRST AID</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-[#CB154E]" />
                </div>
                <span className="text-sm text-white/50">info@firstaidnetwork.com.au</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#CB154E]" />
                </div>
                <span className="text-sm text-white/50">Servicing all of Australia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} First Aid Network Australia. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Training delivered in partnership with{" "}
              <span className="text-[#CB154E] font-medium">Healthcorp RTO</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
