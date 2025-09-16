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
    title: "Digital Education for Rural Communities",
    organization: "Connect Institute",
    description: "Bringing internet access and digital education to 500 families in rural interior communities.",
    location: "São Paulo",
    category: "Education",
    targetAmount: 150000,
    currentAmount: 89500,
    investors: 234,
    expectedReturn: "8.5%",
    duration: "18 months",
    image: "/rural-education-technology-center.jpg",
    status: "active",
  },
  {
    id: 2,
    title: "Solar Energy for Public Schools",
    organization: "EcoFuture",
    description: "Installing solar panels in 20 public schools, reducing costs and environmental impact.",
    location: "Rio de Janeiro",
    category: "Sustainability",
    targetAmount: 300000,
    currentAmount: 300000,
    investors: 456,
    expectedReturn: "9.2%",
    duration: "24 months",
    image: "/solar-panels-on-school-building.jpg",
    status: "active",
  },
  {
    id: 3,
    title: "Microcredit for Women Entrepreneurs",
    organization: "Women in Action",
    description: "Microcredit program to support 200 women in starting their own businesses.",
    location: "Northeast",
    category: "Entrepreneurship",
    targetAmount: 80000,
    currentAmount: 80000,
    investors: 189,
    expectedReturn: "7.8%",
    duration: "12 months",
    image: "/women-entrepreneurs-working-together.jpg",
    status: "completed",
  },
  {
    id: 4,
    title: "Urban Community Gardens",
    organization: "Green City",
    description: "Creating community gardens in urban areas to promote food security.",
    location: "São Paulo",
    category: "Food",
    targetAmount: 120000,
    currentAmount: 78000,
    investors: 156,
    expectedReturn: "6.5%",
    duration: "15 months",
    image: "/urban-community-garden-vegetables.jpg",
    status: "active",
  },
  {
    id: 5,
    title: "Telemedicine for Isolated Communities",
    organization: "Digital Health",
    description: "Implementing telemedicine system to serve isolated communities in the Amazon.",
    location: "Amazon",
    category: "Health",
    targetAmount: 200000,
    currentAmount: 134000,
    investors: 298,
    expectedReturn: "8.8%",
    duration: "20 months",
    image: "/telemedicine-consultation-rural-clinic.jpg",
    status: "inactive",
  },
  {
    id: 6,
    title: "Electronics Recycling",
    organization: "TechGreen",
    description: "Electronics recycling center generating jobs for at-risk youth.",
    location: "Minas Gerais",
    category: "Sustainability",
    targetAmount: 180000,
    currentAmount: 95000,
    investors: 167,
    expectedReturn: "7.2%",
    duration: "16 months",
    image: "/electronics-recycling-center-workers.jpg",
    status: "active",
  },
  {
    id: 7,
    title: "Community Digital Library",
    organization: "Popular Knowledge",
    description: "Creating digital libraries in underserved communities with free access to books and courses.",
    location: "Minas Gerais",
    category: "Education",
    targetAmount: 90000,
    currentAmount: 45000,
    investors: 123,
    expectedReturn: "6.8%",
    duration: "14 months",
    image: "/digital-library-community-center.jpg",
    status: "active",
  },
  {
    id: 8,
    title: "Rural Water Purification",
    organization: "Clean Water",
    description: "Installing water purification systems in rural communities without access to clean water.",
    location: "Northeast",
    category: "Health",
    targetAmount: 250000,
    currentAmount: 250000,
    investors: 340,
    expectedReturn: "8.1%",
    duration: "22 months",
    image: "/water-purification-system-rural.jpg",
    status: "completed",
  },
  {
    id: 9,
    title: "Technology Training",
    organization: "TechSocial",
    description: "Programming and web development course for youth from underserved communities.",
    location: "South",
    category: "Technology",
    targetAmount: 100000,
    currentAmount: 100000,
    investors: 200,
    expectedReturn: "7.5%",
    duration: "18 months",
    image: "/tech-training-classroom.jpg",
    status: "completed",
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
            case "Active":
              return project.status === "active"
            case "Fully Funded":
              return isFullyFunded && project.status !== "completed"
            case "Completed":
              return project.status === "completed"
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
        <p className="text-muted-foreground">{filteredProjects.length} projects found</p>
        {totalPages > 1 && (
          <p className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
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
                      project.status === "completed"
                        ? "bg-blue-600 hover:bg-blue-700"
                        : project.status === "active"
                          ? isFullyFunded
                            ? "bg-orange-600 hover:bg-orange-700"
                            : "bg-green-600 hover:bg-green-700"
                          : "bg-gray-500 hover:bg-gray-600"
                    }`}
                  >
                    {project.status === "completed"
                      ? "Completed"
                      : project.status === "active"
                        ? isFullyFunded
                          ? "Funded"
                          : "Active"
                        : "Inactive"}
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
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">
                      ${project.currentAmount.toLocaleString()} / ${project.targetAmount.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="text-xs text-muted-foreground">{progress.toFixed(1)}% of goal achieved</div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm font-medium">{project.investors}</div>
                    <div className="text-xs text-muted-foreground">Investors</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm font-medium">{project.expectedReturn}</div>
                    <div className="text-xs text-muted-foreground">Return</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm font-medium">{project.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  disabled={project.status === "inactive"}
                  asChild={project.status !== "inactive"}
                >
                  {project.status === "inactive" ? (
                    <span>Inactive Project</span>
                  ) : (
                    <Link href={`/projetos/${project.id}`}>View Details</Link>
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
            Previous
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
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-2">No projects found</div>
          <p className="text-sm text-muted-foreground">Try adjusting the filters or search term</p>
        </div>
      )}
    </div>
  )
}
