"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { User, Wallet, TrendingUp, Target, DollarSign, BarChart3, Settings, Building2 } from "lucide-react"

export default function ProfilePage() {
  const [userType, setUserType] = useState<"investor" | "organization">("investor")

  // Mock data for investor
  const investorData = {
    name: "João Silva",
    email: "joao@email.com",
    walletAddress: "GCKFBEIYTKP...",
    totalInvested: 25000,
    currentValue: 27500,
    totalReturn: 2500,
    returnPercentage: 10,
    activeInvestments: 8,
    investments: [
      {
        id: 1,
        projectName: "Reflorestamento da Mata Atlântica",
        organization: "EcoVerde Brasil",
        invested: 5000,
        currentValue: 5750,
        return: 750,
        returnPercentage: 15,
        date: "2024-01-15",
      },
      {
        id: 2,
        projectName: "Energia Solar Comunitária",
        organization: "EcoVerde Brasil",
        invested: 8000,
        currentValue: 8400,
        return: 400,
        returnPercentage: 5,
        date: "2024-02-20",
      },
      {
        id: 3,
        projectName: "Educação Digital Rural",
        organization: "Educação Para Todos",
        invested: 3000,
        currentValue: 3300,
        return: 300,
        returnPercentage: 10,
        date: "2024-03-10",
      },
    ],
  }

  // Mock data for organization
  const organizationData = {
    name: "EcoVerde Brasil",
    email: "contato@ecoverdebrasil.org",
    walletAddress: "GCKFBEIYTKP...",
    totalRaised: 2500000,
    totalProjects: 12,
    activeProjects: 5,
    totalInvestors: 1250,
    projects: [
      {
        id: 1,
        title: "Reflorestamento da Mata Atlântica",
        goal: 150000,
        raised: 89000,
        investors: 234,
        returns: 12500,
        status: "Ativo",
        startDate: "2024-01-15",
      },
      {
        id: 2,
        title: "Energia Solar Comunitária",
        goal: 200000,
        raised: 156000,
        investors: 189,
        returns: 8900,
        status: "Ativo",
        startDate: "2024-02-01",
      },
      {
        id: 3,
        title: "Compostagem Urbana",
        goal: 80000,
        raised: 80000,
        investors: 156,
        returns: 15600,
        status: "Concluído",
        startDate: "2023-11-10",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Profile Type Selector */}
        <div className="mb-8">
          <div className="flex gap-4 mb-6">
            <Button variant={userType === "investor" ? "default" : "outline"} onClick={() => setUserType("investor")}>
              <User className="h-4 w-4 mr-2" />
              Perfil Investidor
            </Button>
            <Button
              variant={userType === "organization" ? "default" : "outline"}
              onClick={() => setUserType("organization")}
            >
              <Building2 className="h-4 w-4 mr-2" />
              Perfil Organização
            </Button>
          </div>
        </div>

        {userType === "investor" ? (
          // Investor Profile
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{investorData.name}</h1>
                <p className="text-muted-foreground">{investorData.email}</p>
              </div>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Investido</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ {investorData.totalInvested.toLocaleString()}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Valor Atual</CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ {investorData.currentValue.toLocaleString()}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Retorno Total</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    +R$ {investorData.totalReturn.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">+{investorData.returnPercentage}%</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Investimentos Ativos</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{investorData.activeInvestments}</div>
                </CardContent>
              </Card>
            </div>

            {/* Investments List */}
            <Card>
              <CardHeader>
                <CardTitle>Meus Investimentos</CardTitle>
                <CardDescription>Acompanhe o desempenho dos seus investimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {investorData.investments.map((investment) => (
                    <div key={investment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{investment.projectName}</h3>
                        <p className="text-sm text-muted-foreground">{investment.organization}</p>
                        <p className="text-xs text-muted-foreground">
                          Investido em {new Date(investment.date).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">R$ {investment.currentValue.toLocaleString()}</div>
                        <div className="text-sm text-green-600">
                          +R$ {investment.return.toLocaleString()} ({investment.returnPercentage}%)
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Investido: R$ {investment.invested.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Organization Profile
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{organizationData.name}</h1>
                <p className="text-muted-foreground">{organizationData.email}</p>
              </div>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
            </div>

            {/* Organization Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Arrecadado</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R$ {(organizationData.totalRaised / 1000000).toFixed(1)}M</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Projetos Ativos</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{organizationData.activeProjects}</div>
                  <p className="text-xs text-muted-foreground">{organizationData.totalProjects} total</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total de Investidores</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{organizationData.totalInvestors}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                </CardContent>
              </Card>
            </div>

            {/* Projects Management */}
            <Card>
              <CardHeader>
                <CardTitle>Meus Projetos</CardTitle>
                <CardDescription>Gerencie seus projetos e acompanhe os rendimentos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {organizationData.projects.map((project) => (
                    <div key={project.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Iniciado em {new Date(project.startDate).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                        <Badge variant={project.status === "Ativo" ? "default" : "secondary"}>{project.status}</Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Meta</p>
                          <p className="font-semibold">R$ {project.goal.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Arrecadado</p>
                          <p className="font-semibold">R$ {project.raised.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Investidores</p>
                          <p className="font-semibold">{project.investors}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Rendimentos</p>
                          <p className="font-semibold text-green-600">R$ {project.returns.toLocaleString()}</p>
                        </div>
                      </div>

                      <Progress value={(project.raised / project.goal) * 100} className="mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {Math.round((project.raised / project.goal) * 100)}% da meta atingida
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
