import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, MapPin, Users, Calendar, Target, Globe, Mail, Phone } from "lucide-react"
import Link from "next/link"

// Mock data - in real app, this would come from your backend
const organizationData = {
  1: {
    name: "EcoVerde Brasil",
    description:
      "A EcoVerde Brasil é uma organização sem fins lucrativos dedicada à preservação ambiental e desenvolvimento sustentável. Fundada em 2018, já impactou mais de 50 comunidades em todo o país.",
    location: "São Paulo, SP",
    founded: "2018",
    website: "www.ecoverdebrasil.org",
    email: "contato@ecoverdebrasil.org",
    phone: "+55 11 9999-9999",
    totalRaised: "R$ 2.5M",
    totalProjects: 12,
    activeProjects: 5,
    image: "/environmental-organization-office.jpg",
    verified: true,
    projects: [
      {
        id: 1,
        title: "Reflorestamento da Mata Atlântica",
        description: "Projeto para plantar 10.000 árvores nativas na região da Serra do Mar",
        goal: 150000,
        raised: 89000,
        investors: 234,
        daysLeft: 45,
        category: "Meio Ambiente",
        image: "/forest-reforestation-project.jpg",
      },
      {
        id: 2,
        title: "Energia Solar Comunitária",
        description: "Instalação de painéis solares em escolas rurais",
        goal: 200000,
        raised: 156000,
        investors: 189,
        daysLeft: 23,
        category: "Energia",
        image: "/solar-panels-school-rural.jpg",
      },
    ],
  },
}

export default function OrganizationDetailPage({ params }: { params: { id: string } }) {
  const org = organizationData[params.id as keyof typeof organizationData]

  if (!org) {
    return <div>Organização não encontrada</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/organizacoes"
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para Organizações
        </Link>

        {/* Organization Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4 mb-6">
              <img src={org.image || "/placeholder.svg"} alt={org.name} className="w-24 h-24 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold text-foreground">{org.name}</h1>
                  {org.verified && <Badge variant="secondary">Verificada</Badge>}
                </div>
                <p className="text-muted-foreground mb-4">{org.description}</p>
              </div>
            </div>
          </div>

          {/* Organization Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                {org.location}
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                Fundada em {org.founded}
              </div>
              <div className="flex items-center text-sm">
                <Target className="h-4 w-4 mr-2 text-muted-foreground" />
                {org.totalProjects} projetos criados
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                {org.totalRaised} arrecadados
              </div>
              <div className="flex items-center text-sm">
                <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href={`https://${org.website}`} className="text-primary hover:underline">
                  {org.website}
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                <a href={`mailto:${org.email}`} className="text-primary hover:underline">
                  {org.email}
                </a>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                {org.phone}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Organization Projects */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Projetos Ativos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {org.projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="mb-2">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{project.description}</CardDescription>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progresso</span>
                        <span>{Math.round((project.raised / project.goal) * 100)}%</span>
                      </div>
                      <Progress value={(project.raised / project.goal) * 100} className="mb-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>R$ {project.raised.toLocaleString()}</span>
                        <span>Meta: R$ {project.goal.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{project.investors} investidores</span>
                      <span>{project.daysLeft} dias restantes</span>
                    </div>

                    <Link href={`/projetos/${project.id}`}>
                      <Button className="w-full">Ver Projeto</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
