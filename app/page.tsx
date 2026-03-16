import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/sections/hero"

import { StatisticsSection } from "@/sections/statistics"
import { ServicesSection } from "@/sections/services"
import { NewsletterSection } from "@/sections/newsletter"
import { EventsSection } from "@/sections/events"
import { TrainersSection } from "@/sections/trainers"
import { TestimonialsSection } from "@/sections/testimonials"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <StatisticsSection />
        <ServicesSection />
        <NewsletterSection />
        <EventsSection />
        <TrainersSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
