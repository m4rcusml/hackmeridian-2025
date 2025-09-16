"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectFilters } from "@/components/project-filters"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useUser } from "@/contexts/user-context"

export default function ProjectsPage() {
  const router = useRouter()
  const { isLoggedIn } = useUser()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return <div>Redirecting to login...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">Social Projects</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Discover investment opportunities that generate positive impact
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProjectFilters
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
              />
            </div>
            <div className="lg:col-span-3">
              <ProjectsGrid
                searchTerm={searchTerm}
                selectedCategories={selectedCategories}
                selectedLocations={selectedLocations}
                selectedStatus={selectedStatus}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
