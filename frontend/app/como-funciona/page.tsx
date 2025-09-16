"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Search,
  DollarSign,
  TrendingUp,
  Shield,
  Users,
  Target,
  Wallet,
  CheckCircle,
  ArrowRight,
  Building2,
  BarChart3,
  Globe,
  Lock,
  Zap,
  Award,
} from "lucide-react"

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              How <span className="text-primary">StellarImpact</span> Works
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
              We connect conscious investors with social and environmental impact projects, using Stellar blockchain technology for transparency and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/projetos">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">
                  <Users className="mr-2 h-5 w-5" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">A Simple 4-Step Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Investing in social impact has never been so easy and transparent
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Connect Your Wallet</h3>
                <p className="text-muted-foreground">
                  Connect your Stellar wallet to start investing securely
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">2. Explore Projects</h3>
                <p className="text-muted-foreground">
                  Discover verified projects from organizations with proven impact
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Invest</h3>
                <p className="text-muted-foreground">
                  Choose to invest and decide how your financial return will be directed
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">4. Track Your Impact</h3>
                <p className="text-muted-foreground">Monitor the progress and results of your investments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="investor" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="investor">Para Investidores</TabsTrigger>
                <TabsTrigger value="organization">Para Organizações</TabsTrigger>
              </TabsList>

              <TabsContent value="investor" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Como Investir com Impacto</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Gere retorno financeiro enquanto contribui para um mundo melhor
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Investimento com Propósito
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Invista em projetos que geram impacto social e ambiental positivo, com retornos financeiros
                        competitivos.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Retornos de 6% a 12% ao ano
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Projetos verificados e auditados
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Diversificação automática
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Segurança e Transparência
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Tecnologia blockchain Stellar garante transparência total e segurança em todas as transações.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Transações imutáveis e auditáveis
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Relatórios de impacto em tempo real
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Contratos inteligentes automatizados
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Tipos de Investimento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Globe className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h4 className="font-semibold mb-2">Impacto Ambiental</h4>
                        <p className="text-sm text-muted-foreground">
                          Energia renovável, reflorestamento, agricultura sustentável
                        </p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold mb-2">Impacto Social</h4>
                        <p className="text-sm text-muted-foreground">Educação, saúde, habitação, inclusão digital</p>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Building2 className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold mb-2">Desenvolvimento</h4>
                        <p className="text-sm text-muted-foreground">Infraestrutura, microcrédito, empreendedorismo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="organization" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Para Organizações</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Acesse capital para seus projetos de impacto social e ambiental
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        Captação Eficiente
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Acesse uma rede global de investidores interessados em projetos de impacto positivo.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Processo de aprovação simplificado
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Suporte na estruturação do projeto
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Ferramentas de gestão incluídas
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        Transparência e Credibilidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">
                        Demonstre o impacto real dos seus projetos com relatórios automáticos e métricas verificáveis.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Relatórios de impacto automatizados
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Verificação de terceiros
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Comunicação direta com investidores
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Requisitos para Participar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Documentação Necessária</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• CNPJ ativo e regularizado</li>
                          <li>• Estatuto social atualizado</li>
                          <li>• Demonstrações financeiras dos últimos 2 anos</li>
                          <li>• Plano detalhado do projeto</li>
                          <li>• Métricas de impacto definidas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Critérios de Avaliação</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Impacto social/ambiental mensurável</li>
                          <li>• Viabilidade financeira do projeto</li>
                          <li>• Experiência da equipe executora</li>
                          <li>• Transparência e governança</li>
                          <li>• Alinhamento com ODS da ONU</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que Escolher a StellarImpact?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tecnologia avançada, transparência total e impacto real
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Blockchain Stellar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Utilizamos a rede Stellar para garantir transações rápidas, baratas e completamente transparentes.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Taxa de transação:</span>
                      <span className="font-medium">~$0.00001</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tempo de confirmação:</span>
                      <span className="font-medium">3-5 segundos</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transparência:</span>
                      <span className="font-medium">100% auditável</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Projetos Verificados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Todos os projetos passam por rigoroso processo de verificação e auditoria antes de serem listados.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2">
                      Due Diligence
                    </Badge>
                    <Badge variant="secondary" className="mr-2">
                      Auditoria Financeira
                    </Badge>
                    <Badge variant="secondary" className="mr-2">
                      Verificação de Impacto
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Comunidade Ativa
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Faça parte de uma comunidade global de investidores comprometidos com o impacto positivo.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">1,200+</div>
                      <div className="text-xs text-muted-foreground">Investidores</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">150+</div>
                      <div className="text-xs text-muted-foreground">Organizações</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Junte-se a centenas de investidores que já estão gerando impacto positivo enquanto obtêm retornos
              financeiros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/projetos">
                  <Search className="mr-2 h-5 w-5" />
                  Ver Projetos
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/login">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Criar Conta
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
