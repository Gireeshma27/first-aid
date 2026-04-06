import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, Clock, MapPin, MessageSquare, Shield } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our team",
    value: "(02) 9627 2659",
    subtext: "Monday to Friday, 8am - 6pm AEST",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message anytime",
    value: "info@firstaidnetworkaustralia.com.au",
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
    title: "Headquarters",
    description: "Visit our office",
    value: "Suite 226, 2–8 Brookhollow Ave",
    subtext: "Norwest NSW 2153",
  },
]

const faqs = [
  {
    question: "How do I book a training course?",
    answer: "You can book training by filling out the contact form below, calling us on (02) 9627 2659, or emailing info@firstaidnetworkaustralia.com.au. We'll discuss your requirements and arrange a suitable date and location.",
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
        {/*  Massive Split Screen Contact  */}
        <div className="flex flex-col lg:flex-row min-h-[90vh]">
          
          {/* LEFT  Deep Blue Panel */}
          <div className="lg:w-1/2 bg-[#3b3f69] text-white px-6 py-20 lg:p-24 xl:p-32 flex flex-col justify-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#ca1254]/10 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-lg mx-auto lg:mx-0 w-full lg:ml-auto">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-semibold mb-8 border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#ca1254]" />
                Get in Touch
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight tracking-tight mb-4">
                Let's discuss your training needs.
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 font-medium">
                Whether you need to book training, ask a question, or request a quote, our team is ready to help.
              </p>

              <div className="space-y-10">
                {contactMethods.map((method, idx) => (
                  <div key={method.title} className="flex items-start gap-6 group stagger-item" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ca1254] group-hover:scale-110 transition-all duration-500 border border-white/10 icon-bounce">
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

          {/* RIGHT — Premium Form Panel */}
          <div className="lg:w-1/2 bg-[#FAFAFA] px-6 py-20 lg:p-16 xl:p-24 flex flex-col justify-center relative overflow-hidden">
            {/* Decorative background pattern */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "transparent",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Decorative gradient blob */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[#ca1254]/[0.04] blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-[#3b3f69]/[0.04] blur-3xl pointer-events-none" />

            <div className="max-w-xl mx-auto lg:mx-0 w-full lg:mr-auto relative z-10">
              {/* Header with accent line */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-1 rounded-full bg-[#ca1254]" />
                  <span className="text-sm font-bold text-[#ca1254] uppercase tracking-widest">Enquire Now</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-3 tracking-tight">
                  Request Consultation
                </h2>
                <p className="text-base text-[#666666] font-medium leading-relaxed">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Form card */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100/80">
                <ContactForm />
              </div>

              {/* What to Include card */}
              <div className="mt-8 bg-white rounded-3xl p-7 border border-gray-100/80 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#3b3f69] flex items-center justify-center shadow-sm">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-[#333333] text-base">What to Include</h4>
                </div>
                <ul className="space-y-3">
                  {[
                    "Type of training required",
                    "Estimated number of participants",
                    "Preferred dates and location",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#ca1254]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-[#ca1254]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#555555] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust strip */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: Clock, label: "24hr Response" },
                  { icon: Shield, label: "Secure & Private" },
                  { icon: MessageSquare, label: "Free Quote" },
                ].map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center gap-2 py-4 px-3 bg-white rounded-2xl border border-gray-100/80 shadow-sm">
                    <badge.icon className="w-5 h-5 text-[#3b3f69]" />
                    <span className="text-xs font-semibold text-[#555555] text-center">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*  FAQs  */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-6 lg:px-12">
            <Reveal>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#3b3f69]/8 text-[#3b3f69] text-sm font-semibold mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ca1254]" />
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#333333] leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-[#666666] leading-relaxed max-w-xl mx-auto">
                Find answers to common questions about our training and services.
              </p>
            </div>
            </Reveal>
            <Reveal delay={100}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-100 rounded-2xl px-6 bg-white shadow-sm data-[state=open]:shadow-md transition-shadow stagger-item card-shimmer"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-[#333333] hover:text-[#3b3f69] py-5 text-base [&[data-state=open]>svg]:rotate-180 cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
