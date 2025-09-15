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

export default function MeusProjetosPage() {
  const { userType, isLoggedIn } = useUser()

  if (!isLoggedIn || userType !== "organization") {
    redirect("/")
  }

  const projetos = [
    {
      id: 1,
      nome: "Educação Digital Rural",
      categoria: "Educação",
      metaFinanciamento: 50000,
      valorArrecadado: 32000,
      investidores: 45,
      status: "ativo",
      retornoPool: "8.5% a.a.",
      dataInicio: "2024-01-15",
    },
    {
      id: 2,
      nome: "Horta Comunitária Sustentável",
      categoria: "Sustentabilidade",
      metaFinanciamento: 25000,
      valorArrecadado: 25000,
      investidores: 32,
      status: "financiado",
      retornoPool: "8.5% a.a.",
      dataInicio: "2023-11-20",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">Meus Projetos</h1>
              <p className="text-xl text-muted-foreground text-balance">
                Gerencie seus projetos sociais e acompanhe o desempenho
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Novo Projeto
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Arrecadado</p>
                    <p className="text-2xl font-bold">R$ 57.000</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Projetos Ativos</p>
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
                    <p className="text-sm text-muted-foreground">Total Investidores</p>
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
                    <p className="text-sm text-muted-foreground">Retorno da Pool</p>
                    <p className="text-2xl font-bold">8.5% a.a.</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6">
            {projetos.map((projeto) => (
              <Card key={projeto.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{projeto.nome}</CardTitle>
                      <p className="text-muted-foreground mt-1">{projeto.categoria}</p>
                    </div>
                    <Badge variant={projeto.status === "ativo" ? "default" : "secondary"}>
                      {projeto.status === "ativo" ? "Ativo" : "Financiado"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progresso do Financiamento</span>
                          <span>{Math.round((projeto.valorArrecadado / projeto.metaFinanciamento) * 100)}%</span>
                        </div>
                        <Progress value={(projeto.valorArrecadado / projeto.metaFinanciamento) * 100} />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Arrecadado:</span>
                        <span className="font-medium">R$ {projeto.valorArrecadado.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Meta:</span>
                        <span className="font-medium">R$ {projeto.metaFinanciamento.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Investidores:</span>
                        <span className="font-medium">{projeto.investidores}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Retorno da Pool:</span>
                        <span className="font-medium text-green-600">{projeto.retornoPool}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Data de Início:</span>
                        <span className="font-medium">{new Date(projeto.dataInicio).toLocaleDateString("pt-BR")}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                    <Button variant="outline" size="sm">
                      Relatórios
                    </Button>
                    {projeto.status === "ativo" && (
                      <Button variant="outline" size="sm">
                        Editar
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
