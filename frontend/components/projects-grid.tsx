"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Users, Target, TrendingUp, Heart, ChevronLeft, ChevronRight, Share2 } from "lucide-react"

const allProjects = [
  {
    id: 1,
    title: "Educação Digital para Comunidades Rurais",
    organization: "Instituto Conecta",
    description: "Levar acesso à internet e educação digital para 500 famílias em comunidades rurais do interior.",
    location: "São Paulo",
    category: "Educação",
    targetAmount: 150000,
    currentAmount: 89500,
    investors: 234,
    expectedReturn: "8.5%",
    duration: "18 meses",
    image: "/rural-education-technology-center.jpg",
    status: "ativo",
  },
  {
    id: 2,
    title: "Energia Solar para Escolas Públicas",
    organization: "EcoFuturo",
    description: "Instalação de painéis solares em 20 escolas públicas, reduzindo custos e impacto ambiental.",
    location: "Rio de Janeiro",
    category: "Sustentabilidade",
    targetAmount: 300000,
    currentAmount: 300000, // Made this project fully funded
    investors: 456,
    expectedReturn: "9.2%",
    duration: "24 meses",
    image: "/solar-panels-on-school-building.jpg",
    status: "ativo",
  },
  {
    id: 3,
    title: "Microcrédito para Mulheres Empreendedoras",
    organization: "Mulheres em Ação",
    description: "Programa de microcrédito para apoiar 200 mulheres a iniciarem seus próprios negócios.",
    location: "Nordeste",
    category: "Empreendedorismo",
    targetAmount: 80000,
    currentAmount: 80000, // Made this project completed
    investors: 189,
    expectedReturn: "7.8%",
    duration: "12 meses",
    image: "/women-entrepreneurs-working-together.jpg",
    status: "concluido", // Changed status to completed
  },
  {
    id: 4,
    title: "Hortas Comunitárias Urbanas",
    organization: "Verde Cidade",
    description: "Criação de hortas comunitárias em áreas urbanas para promover segurança alimentar.",
    location: "São Paulo",
    category: "Alimentação",
    targetAmount: 120000,
    currentAmount: 78000,
    investors: 156,
    expectedReturn: "6.5%",
    duration: "15 meses",
    image: "/urban-community-garden-vegetables.jpg",
    status: "ativo",
  },
  {
    id: 5,
    title: "Telemedicina para Comunidades Isoladas",
    organization: "Saúde Digital",
    description: "Implementar sistema de telemedicina para atender comunidades isoladas da Amazônia.",
    location: "Norte",
    category: "Saúde",
    targetAmount: 200000,
    currentAmount: 134000,
    investors: 298,
    expectedReturn: "8.8%",
    duration: "20 meses",
    image: "/telemedicine-consultation-rural-clinic.jpg",
    status: "inativo",
  },
  {
    id: 6,
    title: "Reciclagem de Eletrônicos",
    organization: "TechVerde",
    description: "Centro de reciclagem de eletrônicos com geração de empregos para jovens em situação de risco.",
    location: "Minas Gerais",
    category: "Sustentabilidade",
    targetAmount: 180000,
    currentAmount: 95000,
    investors: 167,
    expectedReturn: "7.2%",
    duration: "16 meses",
    image: "/electronics-recycling-center-workers.jpg",
    status: "ativo",
  },
  {
    id: 7,
    title: "Biblioteca Digital Comunitária",
    organization: "Saber Popular",
    description: "Criação de bibliotecas digitais em comunidades carentes com acesso gratuito a livros e cursos.",
    location: "Minas Gerais",
    category: "Educação",
    targetAmount: 90000,
    currentAmount: 45000,
    investors: 123,
    expectedReturn: "6.8%",
    duration: "14 meses",
    image: "/digital-library-community-center.jpg",
    status: "ativo",
  },
  {
    id: 8,
    title: "Purificação de Água Rural",
    organization: "Água Limpa",
    description: "Instalação de sistemas de purificação de água em comunidades rurais sem acesso à água potável.",
    location: "Nordeste",
    category: "Saúde",
    targetAmount: 250000,
    currentAmount: 250000, // Made this project completed
    investors: 340,
    expectedReturn: "8.1%",
    duration: "22 meses",
    image: "/water-purification-system-rural.jpg",
    status: "concluido", // Changed status to completed
  },
  {
    id: 9,
    title: "Capacitação em Tecnologia",
    organization: "TechSocial",
    description: "Curso de programação e desenvolvimento web para jovens de comunidades carentes.",
    location: "Sul",
    category: "Tecnologia",
    targetAmount: 100000,
    currentAmount: 100000,
    investors: 200,
    expectedReturn: "7.5%",
    duration: "18 meses",
    image: "/tech-training-classroom.jpg",
    status: "concluido",
  },
]

interface ProjectsGridProps {
  searchTerm: string
  selectedCategories: string[]
  selectedLocations: string[]
  selectedStatus: string[]
}

export function ProjectsGrid({ searchTerm, selectedCategories, selectedLocations, selectedStatus }: ProjectsGridProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [favoriteProjects, setFavoriteProjects] = useState<number[]>([])
  const projectsPerPage = 6

  const filteredProjects = useMemo(() => {
    console.log("[v0] Filtering projects with:", { searchTerm, selectedCategories, selectedLocations, selectedStatus })

    return allProjects.filter((project) => {
      // Search filter
      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())

      // Category filter
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(project.category)

      // Location filter
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(project.location)

      const matchesStatus = (() => {
        if (selectedStatus.length === 0) return true

        const isFullyFunded = project.currentAmount >= project.targetAmount

        return selectedStatus.some((status) => {
          switch (status) {
            case "Ativo":
              return project.status === "ativo"
            case "Totalmente Financiado":
              return isFullyFunded && project.status !== "concluido"
            case "Concluído":
              return project.status === "concluido"
            default:
              return false
          }
        })
      })()

      const result = matchesSearch && matchesCategory && matchesLocation && matchesStatus
      console.log("[v0] Project:", project.title, "matches:", {
        matchesSearch,
        matchesCategory,
        matchesLocation,
        matchesStatus,
        result,
      })

      return result
    })
  }, [searchTerm, selectedCategories, selectedLocations, selectedStatus])

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategories, selectedLocations, selectedStatus])

  const toggleFavorite = (projectId: number) => {
    setFavoriteProjects((prev) =>
      prev.includes(projectId) ? prev.filter((id) => id !== projectId) : [...prev, projectId],
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground">{filteredProjects.length} projetos encontrados</p>
        {totalPages > 1 && (
          <p className="text-sm text-muted-foreground">
            Página {currentPage} de {totalPages}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedProjects.map((project) => {
          const progress = (project.currentAmount / project.targetAmount) * 100
          const isFullyFunded = project.currentAmount >= project.targetAmount
          const isFavorited = favoriteProjects.includes(project.id)

          return (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className="bg-primary">{project.category}</Badge>
                  <Badge
                    className={`${
                      project.status === "concluido"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : project.status === "ativo"
                          ? isFullyFunded
                            ? "bg-orange-600 hover:bg-orange-700"
                            : "bg-green-600 hover:bg-green-700"
                          : "bg-gray-500 hover:bg-gray-600"
                    }`}
                  >
                    {project.status === "concluido"
                      ? "Concluído"
                      : project.status === "ativo"
                        ? isFullyFunded
                          ? "Financiado"
                          : "Ativo"
                        : "Inativo"}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-background/80 hover:bg-background"
                    onClick={() => toggleFavorite(project.id)}
                  >
                    <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <Button variant="ghost" size="sm" className="bg-background/80 hover:bg-background">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg leading-tight text-balance">{project.title}</h3>
                </div>
                <p className="text-sm text-primary font-medium">{project.organization}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-medium">
                      R$ {project.currentAmount.toLocaleString()} / R$ {project.targetAmount.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="text-xs text-muted-foreground">{progress.toFixed(1)}% do objetivo alcançado</div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm font-medium">{project.investors}</div>
                    <div className="text-xs text-muted-foreground">Investidores</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm font-medium">{project.expectedReturn}</div>
                    <div className="text-xs text-muted-foreground">Retorno</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm font-medium">{project.duration}</div>
                    <div className="text-xs text-muted-foreground">Prazo</div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  disabled={project.status === "inativo"}
                  asChild={project.status !== "inativo"}
                >
                  {project.status === "inativo" ? (
                    <span>Projeto Inativo</span>
                  ) : (
                    <Link href={`/projetos/${project.id}`}>Ver Detalhes</Link>
                  )}
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2 pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Anterior
          </Button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className="w-10"
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Próxima
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-2">Nenhum projeto encontrado</div>
          <p className="text-sm text-muted-foreground">Tente ajustar os filtros ou termo de busca</p>
        </div>
      )}
    </div>
  )
}
