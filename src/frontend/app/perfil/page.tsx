"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  User,
  Wallet,
  TrendingUp,
  Target,
  DollarSign,
  BarChart3,
  Settings,
  Edit3,
  Camera,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Activity,
} from "lucide-react"
import { useUser } from "@/contexts/user-context"

export default function ProfilePage() {
  const { userType } = useUser()
  const [isEditing, setIsEditing] = useState(false)

  const investorData = {
    name: "João Silva",
    email: "joao@email.com",
    phone: "+55 11 99999-9999",
    location: "São Paulo, SP",
    joinDate: "2024-01-15",
    bio: "Investidor focado em projetos de impacto social e sustentabilidade. Acredito no poder da tecnologia para transformar comunidades.",
    walletAddress: "GCKFBEIYTKP...",
    totalInvested: 25000,
    currentValue: 27500,
    totalReturn: 2500,
    returnPercentage: 10,
    activeInvestments: 8,
    riskProfile: "Moderado",
    preferredSectors: ["Meio Ambiente", "Educação", "Saúde"],
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

  const organizationData = {
    name: "EcoVerde Brasil",
    email: "contato@ecoverdebrasil.org",
    phone: "+55 11 3333-4444",
    location: "São Paulo, SP",
    foundedDate: "2020-03-15",
    bio: "Organização dedicada à preservação ambiental e desenvolvimento sustentável. Trabalhamos com comunidades locais para criar soluções inovadoras.",
    website: "www.ecoverdebrasil.org",
    cnpj: "12.345.678/0001-90",
    walletAddress: "GCKFBEIYTKP...",
    totalRaised: 2500000,
    totalProjects: 12,
    activeProjects: 5,
    totalInvestors: 1250,
    impactMetrics: {
      treesPlanted: 15000,
      co2Reduced: 2500,
      communitiesImpacted: 45,
    },
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

  const currentData = userType === "investor" ? investorData : organizationData

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <Camera className="h-4 w-4 mr-2" />
              Alterar Capa
            </Button>
          </div>

          {/* Profile Info */}
          <div className="bg-card rounded-b-xl border border-t-0 p-6">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              {/* Avatar */}
              <div className="relative -mt-16 md:-mt-20">
                <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback className="text-2xl font-bold bg-emerald-100 text-emerald-700">
                    {currentData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button size="sm" variant="secondary" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              {/* Profile Details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground">{currentData.name}</h1>
                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">{currentData.email}</span>
                      </div>
                      {currentData.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">{currentData.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{currentData.location}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="mt-2">
                      {userType === "investor" ? "Investidor" : "Organização"}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                      <Edit3 className="h-4 w-4 mr-2" />
                      {isEditing ? "Cancelar" : "Editar Perfil"}
                    </Button>
                    <Button variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Configurações
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="activity">{userType === "investor" ? "Investimentos" : "Projetos"}</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {userType === "investor" ? (
                <>
                  <Card className="border-l-4 border-l-emerald-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Investido</CardTitle>
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ {investorData.totalInvested.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Desde {new Date(investorData.joinDate).toLocaleDateString("pt-BR")}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Valor Atual</CardTitle>
                      <Wallet className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">R$ {investorData.currentValue.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground mt-1">Portfolio atual</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Retorno Total</CardTitle>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">
                        +R$ {investorData.totalReturn.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">+{investorData.returnPercentage}% de retorno</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Investimentos Ativos</CardTitle>
                      <Target className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{investorData.activeInvestments}</div>
                      <p className="text-xs text-muted-foreground mt-1">Projetos em andamento</p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="border-l-4 border-l-emerald-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Arrecadado</CardTitle>
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        R$ {(organizationData.totalRaised / 1000000).toFixed(1)}M
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Desde {new Date(organizationData.foundedDate).toLocaleDateString("pt-BR")}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Projetos Ativos</CardTitle>
                      <Target className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{organizationData.activeProjects}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {organizationData.totalProjects} projetos total
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total de Investidores</CardTitle>
                      <User className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{organizationData.totalInvestors}</div>
                      <p className="text-xs text-muted-foreground mt-1">Comunidade ativa</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">85%</div>
                      <p className="text-xs text-muted-foreground mt-1">Projetos bem-sucedidos</p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>

            {userType === "organization" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-emerald-600" />
                    Métricas de Impacto
                  </CardTitle>
                  <CardDescription>Impacto social e ambiental dos seus projetos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">
                        {organizationData.impactMetrics.treesPlanted.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Árvores Plantadas</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">
                        {organizationData.impactMetrics.co2Reduced.toLocaleString()}t
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">CO₂ Reduzido</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">
                        {organizationData.impactMetrics.communitiesImpacted}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Comunidades Impactadas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            {userType === "investor" ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Meus Investimentos
                  </CardTitle>
                  <CardDescription>Acompanhe o desempenho dos seus investimentos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {investorData.investments.map((investment) => (
                      <div
                        key={investment.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
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
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Meus Projetos
                  </CardTitle>
                  <CardDescription>Gerencie seus projetos e acompanhe os rendimentos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {organizationData.projects.map((project) => (
                      <div key={project.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
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
            )}
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
                <CardDescription>Gerencie suas informações pessoais</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome</Label>
                        <Input id="name" defaultValue={currentData.name} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={currentData.email} />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" defaultValue={currentData.phone} />
                      </div>
                      <div>
                        <Label htmlFor="location">Localização</Label>
                        <Input id="location" defaultValue={currentData.location} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bio">Biografia</Label>
                      <Textarea id="bio" defaultValue={currentData.bio} rows={4} />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => setIsEditing(false)}>Salvar Alterações</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancelar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Biografia</Label>
                      <p className="mt-1">{currentData.bio}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Data de Cadastro</Label>
                        <p className="mt-1 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(
                            userType === "investor" ? investorData.joinDate : organizationData.foundedDate,
                          ).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      {userType === "investor" && (
                        <>
                          <div>
                            <Label className="text-sm font-medium text-muted-foreground">Perfil de Risco</Label>
                            <p className="mt-1">{investorData.riskProfile}</p>
                          </div>
                          <div className="md:col-span-2">
                            <Label className="text-sm font-medium text-muted-foreground">Setores de Interesse</Label>
                            <div className="flex gap-2 mt-1">
                              {investorData.preferredSectors.map((sector) => (
                                <Badge key={sector} variant="secondary">
                                  {sector}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                      {userType === "organization" && (
                        <>
                          <div>
                            <Label className="text-sm font-medium text-muted-foreground">CNPJ</Label>
                            <p className="mt-1">{organizationData.cnpj}</p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-muted-foreground">Website</Label>
                            <p className="mt-1">{organizationData.website}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Carteira Stellar</CardTitle>
                  <CardDescription>Gerencie sua carteira conectada</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Wallet className="h-8 w-8 text-emerald-600" />
                      <div>
                        <p className="font-medium">Carteira Conectada</p>
                        <p className="text-sm text-muted-foreground">{currentData.walletAddress}</p>
                      </div>
                    </div>
                    <Button variant="outline">Desconectar</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferências</CardTitle>
                  <CardDescription>Configure suas preferências da plataforma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações por Email</p>
                      <p className="text-sm text-muted-foreground">Receba atualizações sobre seus investimentos</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configurar
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Autenticação em Duas Etapas</p>
                      <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Ativar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
