import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/sections/services"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | First Aid Network Australia",
  description: "Comprehensive health and safety solutions including CPR, First Aid, Event Medics, and Drug Testing.",
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="pt-8 md:pt-12">
          <ServicesSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

