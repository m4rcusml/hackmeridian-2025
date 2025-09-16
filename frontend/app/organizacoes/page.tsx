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
    name: "EcoVerde Brasil",
    description: "Organização focada em projetos de sustentabilidade e preservação ambiental",
    location: "São Paulo, SP",
    activeProjects: 5,
    totalRaised: "R$ 2.5M",
    category: "Meio Ambiente",
    image: "/environmental-organization-logo.png",
    verified: true,
  },
  {
    id: 2,
    name: "Educação Para Todos",
    description: "Democratizando o acesso à educação de qualidade em comunidades carentes",
    location: "Rio de Janeiro, RJ",
    activeProjects: 8,
    totalRaised: "R$ 1.8M",
    category: "Educação",
    image: "/education-organization-logo.jpg",
    verified: true,
  },
  {
    id: 3,
    name: "Saúde Comunitária",
    description: "Levando cuidados médicos básicos para regiões remotas do Brasil",
    location: "Manaus, AM",
    activeProjects: 3,
    totalRaised: "R$ 950K",
    category: "Saúde",
    image: "/healthcare-organization-logo.png",
    verified: true,
  },
  {
    id: 4,
    name: "TechSocial",
    description: "Capacitando jovens em tecnologia para transformação social",
    location: "Belo Horizonte, MG",
    activeProjects: 6,
    totalRaised: "R$ 1.2M",
    category: "Tecnologia",
    image: "/tech-social-organization-logo.jpg",
    verified: false,
  },
  {
    id: 5,
    name: "Água Limpa",
    description: "Levando água potável para comunidades rurais",
    location: "Fortaleza, CE",
    activeProjects: 4,
    totalRaised: "R$ 800K",
    category: "Meio Ambiente",
    image: "/water-organization-logo.png",
    verified: true,
  },
]

export default function OrganizationsPage() {
  const router = useRouter()
  const { isLoggedIn } = useUser()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn) {
    return <div>Redirecionando para login...</div>
  }

  const filteredOrganizations = organizations.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      org.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "Todas" || org.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const categories = ["Todas", "Meio Ambiente", "Educação", "Saúde", "Tecnologia"]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Organizações</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Conheça as organizações que estão transformando o mundo através de projetos sociais
          </p>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar organizações..."
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
                          Verificada
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
                    {org.activeProjects} projetos ativos
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {org.totalRaised} arrecadados
                  </div>
                </div>

                <Link href={`/organizacoes/${org.id}`}>
                  <Button className="w-full">Ver Projetos</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOrganizations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nenhuma organização encontrada com os filtros selecionados.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
