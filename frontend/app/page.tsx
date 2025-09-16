"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { ImpactStats } from "@/components/impact-stats"
import { Footer } from "@/components/footer"
import { useUser } from "@/contexts/user-context"

export default function HomePage() {
  const router = useRouter()
  const { isLoggedIn } = useUser()

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/projetos")
    }
  }, [isLoggedIn, router])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ImpactStats />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
