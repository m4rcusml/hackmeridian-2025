"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { useUser } from "@/contexts/user-context"
import {
  ArrowLeft,
  MapPin,
  Users,
  TrendingUp,
  Heart,
  Share2,
  Calendar,
  DollarSign,
  Building2,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"

// Mock data - in a real app this would come from an API
const projectsData = [
  {
    id: 1,
    title: "Educação Digital para Comunidades Rurais",
    organization: "Instituto Conecta",
    organizationId: 1,
    description: "Levar acesso à internet e educação digital para 500 famílias em comunidades rurais do interior.",
    fullDescription:
      "Este projeto visa transformar a realidade educacional de comunidades rurais através da implementação de centros de tecnologia digital. Nosso objetivo é estabelecer pontos de acesso à internet de alta velocidade e criar programas de capacitação digital para todas as idades. O projeto inclui a instalação de equipamentos, treinamento de educadores locais e desenvolvimento de conteúdo educacional adaptado às necessidades específicas de cada comunidade. Esperamos impactar diretamente 500 famílias, proporcionando novas oportunidades de aprendizado e desenvolvimento econômico.",
    location: "São Paulo",
    category: "Educação",
    targetAmount: 150000,
    currentAmount: 89500,
    investors: 234,
    expectedReturn: "8.5%",
    duration: "18 meses",
    startDate: "2024-03-01",
    endDate: "2024-08-31",
    image: "/rural-education-technology-center.jpg",
    status: "ativo",
    milestones: [
      { title: "Análise das comunidades", completed: true, date: "2024-01-15" },
      { title: "Instalação da infraestrutura", completed: true, date: "2024-02-28" },
      { title: "Treinamento dos educadores", completed: false, date: "2024-04-15" },
      { title: "Lançamento dos programas", completed: false, date: "2024-06-01" },
      { title: "Avaliação de impacto", completed: false, date: "2024-08-15" },
    ],
    updates: [
      {
        date: "2024-01-20",
        title: "Primeira fase concluída",
        content:
          "Finalizamos o mapeamento de todas as comunidades participantes e identificamos as principais necessidades tecnológicas.",
      },
      {
        date: "2024-01-10",
        title: "Projeto aprovado",
        content: "O projeto foi oficialmente aprovado e estamos iniciando a captação de recursos.",
      },
    ],
  },
  {
    id: 2,
    title: "Energia Solar para Escolas Públicas",
    organization: "EcoFuturo",
    organizationId: 2,
    description: "Instalação de painéis solares em 20 escolas públicas, reduzindo custos e impacto ambiental.",
    fullDescription:
      "Projeto de sustentabilidade que visa instalar sistemas de energia solar fotovoltaica em 20 escolas públicas da região metropolitana. O objetivo é reduzir os custos operacionais das instituições de ensino e promover a educação ambiental entre estudantes e comunidade. Cada instalação terá capacidade para suprir 80% da demanda energética da escola, gerando economia significativa que poderá ser reinvestida em melhorias educacionais.",
    location: "Rio de Janeiro",
    category: "Sustentabilidade",
    targetAmount: 300000,
    currentAmount: 245000,
    investors: 456,
    expectedReturn: "9.2%",
    duration: "24 meses",
    startDate: "2024-02-01",
    endDate: "2024-12-31",
    image: "/solar-panels-on-school-building.jpg",
    status: "ativo",
    milestones: [
      { title: "Seleção das escolas", completed: true, date: "2024-01-30" },
      { title: "Projeto técnico", completed: true, date: "2024-03-15" },
      { title: "Instalação - Fase 1", completed: true, date: "2024-05-30" },
      { title: "Instalação - Fase 2", completed: false, date: "2024-08-30" },
      { title: "Monitoramento e avaliação", completed: false, date: "2024-12-15" },
    ],
    updates: [
      {
        date: "2024-01-25",
        title: "15 escolas já instaladas",
        content:
          "Concluímos a instalação dos painéis solares em 15 das 20 escolas previstas. A economia de energia já é visível!",
      },
    ],
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { userType, isLoggedIn } = useUser()
  const [project, setProject] = useState<any>(null)
  const [donationAmount, setDonationAmount] = useState("")
  const [returnPercentage, setReturnPercentage] = useState([70])
  const [message, setMessage] = useState("")
  const [isDonating, setIsDonating] = useState(false)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
      return
    }

    const projectId = Number.parseInt(params.id as string)
    const foundProject = projectsData.find((p) => p.id === projectId)
    if (foundProject) {
      setProject(foundProject)
    } else {
      router.push("/projetos")
    }
  }, [params.id, router, isLoggedIn])

  const handleDonation = async () => {
    if (!donationAmount || !isLoggedIn) return

    setIsDonating(true)
    setTimeout(() => {
      setIsDonating(false)
      setDonationAmount("")
      setMessage("")
      setReturnPercentage([70])

      const organizationPercentage = 100 - returnPercentage[0]
      alert(
        `Doação de R$ ${donationAmount} realizada com sucesso!\n` +
          `${returnPercentage[0]}% do retorno para você, ${organizationPercentage}% para a organização.\n` +
          `Doação identificada como ${userType === "investor" ? "investidor" : "usuário"}.`,
      )
    }, 2000)
  }

  if (!isLoggedIn) {
    return <div>Redirecionando para login...</div>
  }

  if (!project) {
    return <div>Carregando...</div>
  }

  const progress = (project.currentAmount / project.targetAmount) * 100
  const remainingAmount = project.targetAmount - project.currentAmount

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-6">
            <Button variant="outline" asChild>
              <Link href="/projetos">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar aos Projetos
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">{project.category}</Badge>
                  <Badge
                    className={`absolute top-4 right-16 ${project.status === "ativo" ? "bg-green-600" : "bg-gray-500"}`}
                  >
                    {project.status === "ativo" ? "Ativo" : "Inativo"}
                  </Badge>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button variant="ghost" size="sm" className="bg-background/80 hover:bg-background">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="bg-background/80 hover:bg-background">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-balance">{project.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link
                      href={`/organizacoes/${project.organizationId}`}
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      <Building2 className="h-4 w-4" />
                      {project.organization}
                    </Link>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Progresso do Financiamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Arrecadado</span>
                      <span className="font-medium">
                        R$ {project.currentAmount.toLocaleString()} / R$ {project.targetAmount.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={progress} className="h-3" />
                    <div className="text-sm text-muted-foreground">{progress.toFixed(1)}% do objetivo alcançado</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-lg font-semibold">{project.investors}</div>
                      <div className="text-sm text-muted-foreground">Investidores</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-lg font-semibold">{project.expectedReturn}</div>
                      <div className="text-sm text-muted-foreground">Retorno Esperado</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-lg font-semibold">R$ {remainingAmount.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Restante</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Marcos do Projeto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.milestones.map((milestone: any, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`mt-1 p-1 rounded-full ${
                            milestone.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {milestone.completed ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4
                              className={`font-medium ${milestone.completed ? "text-foreground" : "text-muted-foreground"}`}
                            >
                              {milestone.title}
                            </h4>
                            <span className="text-sm text-muted-foreground">
                              {new Date(milestone.date).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Atualizações do Projeto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {project.updates.map((update: any, index: number) => (
                      <div key={index}>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 p-2 bg-primary/10 rounded-full">
                            <AlertCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{update.title}</h4>
                              <span className="text-sm text-muted-foreground">
                                {new Date(update.date).toLocaleDateString("pt-BR")}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">{update.content}</p>
                          </div>
                        </div>
                        {index < project.updates.length - 1 && <Separator className="mt-6" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {userType === "investor" && isLoggedIn && project.status === "ativo" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Fazer Doação</CardTitle>
                    <CardDescription>Doe para este projeto e defina como dividir os retornos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="donation-amount">Valor da Doação (R$)</Label>
                      <Input
                        id="donation-amount"
                        type="number"
                        placeholder="0,00"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        min="1"
                        step="1"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Sem valor mínimo</p>
                    </div>

                    <div>
                      <Label>Divisão dos Retornos</Label>
                      <div className="space-y-3 mt-2">
                        <div className="px-3">
                          <Slider
                            value={returnPercentage}
                            onValueChange={setReturnPercentage}
                            max={100}
                            min={0}
                            step={5}
                            className="w-full"
                          />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Para você: <span className="font-medium text-foreground">{returnPercentage[0]}%</span>
                          </span>
                          <span className="text-muted-foreground">
                            Para organização:{" "}
                            <span className="font-medium text-foreground">{100 - returnPercentage[0]}%</span>
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Você decide como dividir os retornos do investimento entre você e a organização
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem (opcional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Deixe uma mensagem de apoio..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                      />
                    </div>

                    <Button
                      className="w-full"
                      onClick={handleDonation}
                      disabled={!donationAmount || Number(donationAmount) < 1 || isDonating}
                    >
                      {isDonating ? "Processando..." : "Doar Agora"}
                    </Button>

                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• Retorno esperado: {project.expectedReturn} ao ano</p>
                      <p>• Prazo: {project.duration}</p>
                      <p>• Você define como dividir os retornos</p>
                      <p>• Todas as doações são identificadas</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Informações do Projeto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Categoria</span>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Localização</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Início</span>
                    <span className="font-medium">{new Date(project.startDate).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Previsão de Término</span>
                    <span className="font-medium">{new Date(project.endDate).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge className={project.status === "ativo" ? "bg-green-600" : "bg-gray-500"}>
                      {project.status === "ativo" ? "Ativo" : "Inativo"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sobre a Organização</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{project.organization}</h4>
                      <p className="text-sm text-muted-foreground">Organização verificada</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={`/organizacoes/${project.organizationId}`}>Ver Perfil da Organização</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
