import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { NewsletterSection } from "@/sections/newsletter"
import { Phone, Mail, Clock, MapPin, MessageSquare } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our team",
    value: "1300 FIRST AID",
    subtext: "Monday to Friday, 8am â€“ 6pm AEST",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message anytime",
    value: "info@firstaidnetwork.com.au",
    subtext: "We'll respond within 24 hours",
  },
  {
    icon: Clock,
    title: "Training Hours",
    description: "Flexible scheduling available",
    value: "7 Days a Week",
    subtext: "Weekdays, weekends and evenings",
  },
  {
    icon: MapPin,
    title: "Service Area",
    description: "We come to you",
    value: "All of Australia",
    subtext: "On-site training nationwide",
  },
]

const faqs = [
  {
    question: "How do I book a training course?",
    answer: "You can book training by filling out the contact form below, calling us on 1300 FIRST AID, or emailing info@firstaidnetwork.com.au. We'll discuss your requirements and arrange a suitable date and location.",
  },
  {
    question: "Do you offer on-site training?",
    answer: "Yes! We deliver training at your workplace, school, or organisation anywhere in Australia. On-site training is convenient for your team and can be scheduled to suit your operational requirements.",
  },
  {
    question: "How many participants can attend each session?",
    answer: "Most of our courses accommodate up to 20 participants per session. For larger groups, we can run multiple sessions or arrange additional trainers.",
  },
  {
    question: "Are your qualifications nationally recognised?",
    answer: "Yes, all our training is delivered in partnership with Healthcorp RTO and results in nationally recognised qualifications that meet Australian standards.",
  },
  {
    question: "How long are qualifications valid?",
    answer: "First aid qualifications (HLTAID011, HLTAID012) are valid for 3 years. CPR qualifications (HLTAID009) are valid for 12 months. We recommend annual CPR refresher training.",
  },
  {
    question: "Can you provide event medical services for my event?",
    answer: "Absolutely! We provide professional event medical coverage for events of all sizes. Contact us with your event details and we'll provide a tailored quote.",
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Massive Split Screen Contact ── */}
        <div className="flex flex-col lg:flex-row min-h-[90vh]">
          
          {/* LEFT — Deep Blue Panel */}
          <div className="lg:w-1/2 bg-[#3B3969] text-white px-6 py-20 lg:p-24 xl:p-32 flex flex-col justify-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#CB154E]/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-lg mx-auto lg:mx-0 w-full lg:ml-auto">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-8 border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#CB154E]" />
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Let's discuss your training needs.
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-16 font-medium">
                Whether you need to book training, ask a question, or request a quote — our team is ready to help.
              </p>

              <div className="space-y-10">
                {contactMethods.map((method, idx) => (
                  <div key={method.title} className="flex items-start gap-6 group stagger-item" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#CB154E] group-hover:scale-110 transition-all duration-500 border border-white/10 icon-bounce">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white/40 uppercase tracking-widest mb-1">{method.title}</p>
                      <p className="text-2xl font-bold text-white mb-1 tracking-tight">{method.value}</p>
                      <p className="text-base text-white/60 font-medium">{method.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Minimal White Form Panel */}
          <div className="lg:w-1/2 bg-white px-6 py-20 lg:p-24 xl:p-32 flex flex-col justify-center relative">
            <div className="max-w-xl mx-auto lg:mx-0 w-full lg:mr-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4 tracking-tight">Request Consultation</h2>
              <p className="text-lg text-[#666666] mb-12 font-medium">Fill out the form and we'll get back to you within 24 hours.</p>
              
              <ContactForm />
              
              <div className="mt-16 p-8 bg-[#F5F5F5] rounded-[2rem] border border-gray-100 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#CB154E]/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-[#CB154E]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#333333] mb-3 text-sm uppercase tracking-widest">What to Include</h4>
                  <ul className="space-y-2 text-[15px] font-medium text-[#666666]">
                    <li>• Type of training required</li>
                    <li>• Estimated number of participants</li>
                    <li>• Preferred dates and location</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FAQs ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3B3969]/8 text-[#3B3969] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CB154E]" />
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[#666666] leading-relaxed max-w-xl mx-auto">
                Find answers to common questions about our training and services.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm data-[state=open]:shadow-md transition-shadow stagger-item card-shimmer"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-[#333333] hover:text-[#3B3969] py-5 text-base [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* â”€â”€ CTA â”€â”€ */}
        <section
          className="py-16 md:py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #3B3969 0%, #1e1c3d 100%)" }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#CB154E]/8 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Whether you need workplace first aid training, event medical services, or customised training solutions, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1300347782"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#CB154E] hover:bg-[#CB154E]/90 text-white font-semibold transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call 1300 FIRST AID
              </a>
              <a
                href="mailto:info@firstaidnetwork.com.au"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
