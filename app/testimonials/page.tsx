import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { NewsletterSection } from "@/sections/newsletter"
import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    content: "The First Aid Network training was outstanding. Our staff now feel confident and prepared to handle emergencies in our childcare centre. The trainer made complex concepts easy to understand and the hands-on practice was invaluable.",
    author: "Sarah Mitchell",
    role: "Centre Director",
    organisation: "Little Stars Early Learning",
    rating: 5,
  },
  {
    content: "We've been using First Aid Network for our workplace first aid training for over three years. The trainers are professional, knowledgeable, and make the sessions engaging. Highly recommend their services.",
    author: "James Thompson",
    role: "WHS Manager",
    organisation: "BuildRight Construction",
    rating: 5,
  },
  {
    content: "Excellent event medical coverage for our community festival. The team was professional, prepared, and handled several incidents efficiently. We'll definitely be booking them again next year.",
    author: "Emma Chen",
    role: "Event Coordinator",
    organisation: "Riverside Festival Committee",
    rating: 5,
  },
  {
    content: "Our staff appreciated the practical approach to the training. The scenario-based learning really helped cement the knowledge and gave everyone confidence to respond in real situations.",
    author: "Michael Roberts",
    role: "Operations Manager",
    organisation: "Regional Mining Co",
    rating: 5,
  },
  {
    content: "The anaphylaxis management training was exactly what our school needed. The trainer was patient, thorough, and ensured all staff could confidently use an EpiPen by the end of the session.",
    author: "Jennifer Walsh",
    role: "School Principal",
    organisation: "Greenwood Primary School",
    rating: 5,
  },
  {
    content: "Flexible scheduling and on-site delivery made it easy to train our entire team. The customised content addressed our specific workplace hazards perfectly.",
    author: "David Lee",
    role: "HR Director",
    organisation: "Coastal Manufacturing",
    rating: 5,
  },
  {
    content: "The CPR refresher course was quick, efficient, and our staff left feeling confident. The trainer was fantastic at explaining the latest guidelines and techniques.",
    author: "Amanda Price",
    role: "Practice Manager",
    organisation: "City Dental Clinic",
    rating: 5,
  },
  {
    content: "First Aid Network provided excellent medical support for our school athletics carnival. Having qualified first aiders on site gave us peace of mind throughout the day.",
    author: "Robert Kelly",
    role: "Sports Coordinator",
    organisation: "St Mary's College",
    rating: 5,
  },
  {
    content: "The training was engaging, practical and relevant. Our team now has the skills and confidence to respond effectively to workplace emergencies. Thank you First Aid Network!",
    author: "Lisa Turner",
    role: "Office Manager",
    organisation: "Turner Legal Services",
    rating: 5,
  },
]

const stats = [
  { value: "10,000+", label: "Participants Trained" },
  { value: "500+", label: "Organisations Served" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "15+", label: "Years Experience" },
]

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-[#3B3969] via-[#2d2b52] to-[#1e1c3d] py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#CB154E]/[0.06] blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#3B3969]/30 blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] text-white text-sm font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
              Testimonials
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">What Our Clients Say</h1>
            <p className="text-lg text-white/70 max-w-2xl mb-12">
              Hear from organisations and individuals across Australia who have experienced our training programs and services.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative text-center p-6 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/10">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                  {i < stats.length - 1 && <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/[0.06]" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24 bg-[#F7F7FA]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Reveal key={index} delay={index * 80}>
                <div className="bg-white rounded-xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E8E8F0] group flex flex-col h-full">
                  <Quote className="w-10 h-10 text-[#CB154E]/20 mb-4 group-hover:text-[#CB154E]/40 transition-colors shrink-0" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#CB154E] text-[#CB154E]" />
                    ))}
                  </div>
                  <blockquote className="text-[#64648c] leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div className="pt-4 border-t border-[#E8E8F0] mt-auto">
                    <p className="font-semibold text-[#1a1a2e]">{testimonial.author}</p>
                    <p className="text-sm text-[#64648c]">
                      {testimonial.role}, {testimonial.organisation}
                    </p>
                  </div>
                </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#3B3969] to-[#1e1c3d] text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <Reveal>
            <h2 className="text-3xl font-semibold mb-4">Join Our Growing Community</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Experience the same high-quality training that has earned us praise from organisations across Australia.
            </p>
            </Reveal>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
