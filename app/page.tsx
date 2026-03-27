import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/sections/hero"
import { TrustBadgesStrip } from "@/sections/trust-badges"
import { HeroCarouselSection } from "@/components/hero-carousel-section"

import { StatisticsSection } from "@/sections/statistics"
import { ServicesSection } from "@/sections/services"
import { FirstAidBenefitsSection } from "@/sections/first-aid-benefits"
import { EventsSection } from "@/sections/events"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadgesStrip />

        <ServicesSection />
        <FirstAidBenefitsSection />
        <StatisticsSection />
        <HeroCarouselSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  )
}
