import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesSection } from "@/sections/services"
import { NewsletterSection } from "@/sections/newsletter"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | First Aid Network Australia",
  description: "Comprehensive health and safety solutions including CPR, First Aid, Event Medics, and Drug Testing.",
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F5F5F5]">
        <div className="pt-4 md:pt-10">
          <ServicesSection />
        </div>
        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}

