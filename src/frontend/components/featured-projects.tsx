import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Users, Target, TrendingUp } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Educação Digital para Comunidades Rurais",
    organization: "Instituto Conecta",
    description: "Levar acesso à internet e educação digital para 500 famílias em comunidades rurais do interior.",
    location: "Interior de São Paulo",
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
    currentAmount: 245000,
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
    currentAmount: 65200,
    investors: 189,
    expectedReturn: "7.8%",
    duration: "12 meses",
    image: "/women-entrepreneurs-working-together.jpg",
    status: "inativo",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Projetos em Destaque</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Descubra oportunidades de investimento que geram impacto social positivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const progress = (project.currentAmount / project.targetAmount) * 100

            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary">{project.category}</Badge>
                  <Badge
                    className={`absolute top-3 right-3 ${
                      project.status === "ativo" ? "bg-green-600 hover:bg-green-700" : "bg-gray-500 hover:bg-gray-600"
                    }`}
                  >
                    {project.status === "ativo" ? "Ativo" : "Inativo"}
                  </Badge>
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
                  <Button className="w-full" disabled={project.status === "inativo"}>
                    {project.status === "ativo" ? "Investir Agora" : "Projeto Inativo"}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
