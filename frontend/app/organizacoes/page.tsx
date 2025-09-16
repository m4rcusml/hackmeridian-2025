"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Users, Target } from "lucide-react"
import Link from "next/link"
import { useUser } from "@/contexts/user-context"

const organizations = [
  {
    id: 1,
    name: "EcoGreen Brazil",
    description: "Organization focused on sustainability and environmental preservation projects",
    location: "São Paulo, SP",
    activeProjects: 5,
    totalRaised: "$500K",
    category: "Environment",
    image: "/environmental-organization-logo.png",
    verified: true,
  },
  {
    id: 2,
    name: "Education For All",
    description: "Democratizing access to quality education in underserved communities",
    location: "Rio de Janeiro, RJ",
    activeProjects: 8,
    totalRaised: "$360K",
    category: "Education",
    image: "/education-organization-logo.jpg",
    verified: true,
  },
  {
    id: 3,
    name: "Community Health",
    description: "Bringing basic medical care to remote regions of Brazil",
    location: "Manaus, AM",
    activeProjects: 3,
    totalRaised: "$190K",
    category: "Healthcare",
    image: "/healthcare-organization-logo.png",
    verified: true,
  },
  {
    id: 4,
    name: "TechSocial",
    description: "Empowering youth in technology for social transformation",
    location: "Belo Horizonte, MG",
    activeProjects: 6,
    totalRaised: "$240K",
    category: "Technology",
    image: "/tech-social-organization-logo.jpg",
    verified: false,
  },
  {
    id: 5,
    name: "Clean Water",
    description: "Bringing clean water to rural communities",
    location: "Fortaleza, CE",
    activeProjects: 4,
    totalRaised: "$160K",
    category: "Environment",
    image: "/water-organization-logo.png",
    verified: true,
  },
]

export default function OrganizationsPage() {
  const router = useRouter()
  const { isLoggedIn } = useUser()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return <div>Redirecting to login...</div>
  }

  const filteredOrganizations = organizations.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "All" || org.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categories = ["All", "Environment", "Education", "Healthcare", "Technology"]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Organizations</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Meet the organizations that are transforming the world through social projects
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search organizations..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrganizations.map((org) => (
            <Card key={org.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg">{org.name}</CardTitle>
                      {org.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <Badge variant="outline" className="mb-2">
                      {org.category}
                    </Badge>
                  </div>
                  <img
                    src={org.image || "/placeholder.svg"}
                    alt={org.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 line-clamp-2">{org.description}</CardDescription>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {org.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Target className="h-4 w-4 mr-2" />
                    {org.activeProjects} active projects
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {org.totalRaised} raised
                  </div>
                </div>

                <Link href={`/organizacoes/${org.id}`}>
                  <Button className="w-full">View Projects</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOrganizations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No organizations found with the selected filters.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
