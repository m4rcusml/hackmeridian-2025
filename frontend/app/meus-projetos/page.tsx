"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useUser } from "@/contexts/user-context"
import { Plus, TrendingUp, Users, DollarSign } from "lucide-react"
import { redirect } from "next/navigation"

export default function MyProjectsPage() {
  const { userType, isLoggedIn } = useUser()

  if (!isLoggedIn || userType !== "organization") {
    redirect("/")
  }

  const projects = [
    {
      id: 1,
      name: "Rural Digital Education",
      category: "Education",
      fundingGoal: 50000,
      amountRaised: 32000,
      investors: 45,
      status: "active",
      poolReturn: "8.5% p.a.",
      startDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Sustainable Community Garden",
      category: "Sustainability",
      fundingGoal: 25000,
      amountRaised: 25000,
      investors: 32,
      status: "funded",
      poolReturn: "8.5% p.a.",
      startDate: "2023-11-20",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">My Projects</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Manage your social projects and track performance
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Project
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Raised</p>
                    <p className="text-2xl font-bold">$57,000</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Projects</p>
                    <p className="text-2xl font-bold">2</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Investors</p>
                    <p className="text-2xl font-bold">77</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pool Return</p>
                    <p className="text-2xl font-bold">8.5% p.a.</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <p className="text-muted-foreground mt-1">{project.category}</p>
                    </div>
                    <Badge variant={project.status === "active" ? "default" : "secondary"}>
                      {project.status === "active" ? "Active" : "Funded"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Funding Progress</span>
                          <span>{Math.round((project.amountRaised / project.fundingGoal) * 100)}%</span>
                        </div>
                        <Progress value={(project.amountRaised / project.fundingGoal) * 100} />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Raised:</span>
                        <span className="font-medium">${project.amountRaised.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Goal:</span>
                        <span className="font-medium">${project.fundingGoal.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investors:</span>
                        <span className="font-medium">{project.investors}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Pool Return:</span>
                        <span className="font-medium text-green-600">{project.poolReturn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Start Date:</span>
                        <span className="font-medium">{new Date(project.startDate).toLocaleDateString("en-US")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Reports
                    </Button>
                    {project.status === "active" && (
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    )}
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
