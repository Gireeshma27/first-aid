import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import CprContent from "./CprContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "HLTAID009 Provide CPR | First Aid Network Australia",
  description: "Learn CPR for adults, children and infants. Nationally recognised HLTAID009 training covering DRSABCD, AED use, and life-threatening emergency response.",
}

export default function CprTrainingPage() {
  return (
    <>
      <Navbar />
      <main>
        <CprContent />
      </main>
      <Footer />
    </>
  )
}
