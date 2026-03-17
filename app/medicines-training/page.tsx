import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { NewsletterSection } from "@/sections/newsletter"
import { CheckCircle2, Shield, Syringe, Wind, Heart, AlertTriangle, Users } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Reveal } from "@/components/reveal"

const trainingPrograms = [
  {
    icon: Syringe,
    title: "Anaphylaxis Management Training",
    description: "Learn to recognise and respond to severe allergic reactions quickly and effectively.",
    purpose: "This training equips participants with the knowledge and skills to identify the signs of anaphylaxis and administer emergency treatment including the use of adrenaline auto-injectors (EpiPen).",
    skills: [
      "Recognise signs and symptoms of allergic reactions",
      "Differentiate between mild allergies and anaphylaxis",
      "Administer adrenaline auto-injectors correctly",
      "Provide follow-up care and monitoring",
      "Communicate with emergency services",
      "Document incidents appropriately",
    ],
    participants: [
      "Childcare educators and teachers",
      "School staff and administration",
      "Food service workers",
      "Healthcare workers",
      "Parents and carers of at-risk individuals",
      "Workplace first aid officers",
    ],
  },
  {
    icon: Wind,
    title: "Asthma Management Training",
    description: "Comprehensive training on asthma recognition, treatment, and emergency response.",
    purpose: "This course provides participants with the skills to recognise asthma symptoms, assist with medication administration, and respond appropriately to asthma emergencies including severe asthma attacks.",
    skills: [
      "Understand asthma triggers and prevention",
      "Recognise mild, moderate, and severe asthma symptoms",
      "Assist with reliever medication administration",
      "Implement asthma first aid procedures",
      "Use spacer devices correctly",
      "Know when to call for emergency assistance",
    ],
    participants: [
      "Childcare and early learning staff",
      "Primary and secondary school teachers",
      "Sports coaches and physical education staff",
      "Camp and outdoor activity leaders",
      "Parents and family members",
      "Youth group leaders",
    ],
  },
  {
    icon: Heart,
    title: "RAMOAP Training",
    description: "Risk Assessment and Management of Anaphylaxis Program for education and care settings.",
    purpose: "RAMOAP training provides a comprehensive framework for managing anaphylaxis risk in schools and childcare settings, meeting regulatory requirements and ensuring child safety.",
    skills: [
      "Conduct anaphylaxis risk assessments",
      "Develop individual health care plans",
      "Create allergen-aware environments",
      "Train staff in anaphylaxis procedures",
      "Communicate with parents and medical professionals",
      "Review and update management plans",
    ],
    participants: [
      "School principals and administrators",
      "Childcare centre directors",
      "Health and wellbeing coordinators",
      "Risk management personnel",
      "Education department staff",
      "Compliance officers",
    ],
  },
  {
    icon: Users,
    title: "Community Clinical Awareness Training",
    description: "Tailored clinical awareness programs for community organisations and groups.",
    purpose: "This customised training increases health literacy and clinical awareness within community settings, empowering participants to recognise health issues and respond appropriately.",
    skills: [
      "Recognise common health emergencies",
      "Understand when to seek medical help",
      "Support individuals with chronic conditions",
      "Promote health and wellbeing",
      "Implement basic health monitoring",
      "Navigate healthcare systems effectively",
    ],
    participants: [
      "Community group volunteers",
      "Religious organisation staff",
      "Disability support workers",
      "Aged care workers",
      "Neighbourhood centre staff",
      "Social service providers",
    ],
  },
  {
    icon: Shield,
    title: "Infection Control Training",
    description: "Essential infection prevention and control practices for all workplace settings.",
    purpose: "This training covers the principles of infection control, standard precautions, and best practices for preventing the spread of infectious diseases in workplaces and community settings.",
    skills: [
      "Understand how infections spread",
      "Apply standard precautions consistently",
      "Use personal protective equipment (PPE)",
      "Implement hand hygiene protocols",
      "Manage spills and contamination",
      "Dispose of waste safely",
    ],
    participants: [
      "Healthcare and aged care workers",
      "Childcare and education staff",
      "Food handlers and hospitality workers",
      "Cleaning and maintenance staff",
      "Office workers and administrators",
      "Retail and customer service staff",
    ],
  },
]

export default function MedicinesTrainingPage() {
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
              Specialised Training
            </span>
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight">Medicines and Clinical Training Programs</h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Comprehensive training programs designed to build confidence and competence in managing specific health conditions and clinical situations.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <Reveal>
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#CB154E]/[0.06] flex items-center justify-center mx-auto">
                <AlertTriangle className="w-8 h-8 text-[#CB154E]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a2e]">
                Beyond Basic First Aid
              </h2>
              <p className="text-lg text-[#64648c] leading-relaxed">
                Our specialised training programs address specific health conditions and clinical scenarios that require targeted knowledge and skills. These programs complement our nationally recognised first aid courses and can be customised to meet your organisation&apos;s needs.
              </p>
            </div>
            </Reveal>
          </div>
        </section>

        {/* Training Programs */}
        {trainingPrograms.map((program, index) => (
          <section 
            key={program.title} 
            className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-[#F7F7FA]' : 'bg-white'}`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              <Reveal>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-16 h-16 rounded-xl bg-[#3B3969]/[0.07] flex items-center justify-center">
                    <program.icon className="w-8 h-8 text-[#3B3969]" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#1a1a2e]">{program.title}</h2>
                  <p className="text-lg text-[#64648c] leading-relaxed">{program.description}</p>
                  
                  <div className="bg-white rounded-xl p-6 border border-[#E8E8F0] shadow-sm">
                    <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">Purpose</h3>
                    <p className="text-[#64648c] leading-relaxed">{program.purpose}</p>
                  </div>

                  <Button asChild className="bg-[#CB154E] hover:bg-[#CB154E]/90 text-white">
                    <Link href="/contact">Enquire About This Training</Link>
                  </Button>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white rounded-xl p-7 border border-[#E8E8F0] shadow-sm">
                    <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">Skills Taught</h3>
                    <ul className="space-y-2">
                      {program.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2 text-[#64648c]">
                          <CheckCircle2 className="w-4 h-4 text-[#CB154E] mt-0.5 shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-7 border border-[#E8E8F0] shadow-sm">
                    <h3 className="text-lg font-semibold text-[#1a1a2e] mb-3">Suitable Participants</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.participants.map((participant) => (
                        <li key={participant} className="flex items-start gap-2 text-sm text-[#64648c]">
                          <CheckCircle2 className="w-4 h-4 text-[#3B3969] mt-0.5 shrink-0" />
                          <span>{participant}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              </Reveal>
            </div>
          </section>
        ))}

        <NewsletterSection />
      </main>
      <Footer />
    </>
  )
}
