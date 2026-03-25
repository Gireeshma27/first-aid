import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/sections/hero"
import { TrustBadgesStrip } from "@/sections/trust-badges"

import { StatisticsSection } from "@/sections/statistics"
import { ServicesSection } from "@/sections/services"
import { EventsSection } from "@/sections/events"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBadgesStrip />

        <StatisticsSection />
        <ServicesSection />
        <EventsSection />
      </main>
      <Footer />
    </>
  )
}
