import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Globe, Zap } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "R$ 2.5M+",
    label: "Total Investido",
    description: "Em projetos sociais",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "Pessoas Impactadas",
    description: "Diretamente pelos projetos",
  },
  {
    icon: Globe,
    value: "85",
    label: "Projetos Ativos",
    description: "Em todo o Brasil",
  },
  {
    icon: Zap,
    value: "12.3%",
    label: "Retorno Médio",
    description: "Anual para investidores",
  },
]

export function ImpactStats() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-balance mb-4">Nosso Impacto em Números</h2>
          <p className="text-muted-foreground text-balance">
            Resultados reais de uma comunidade comprometida com mudanças positivas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
