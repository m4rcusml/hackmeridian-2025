import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, MapPin } from "lucide-react"

const investments = [
  {
    id: 1,
    title: "Educação Digital Rural",
    organization: "Instituto Conecta",
    invested: 5000,
    currentValue: 5420,
    return: 8.4,
    progress: 67,
    category: "Educação",
    location: "São Paulo",
  },
  {
    id: 2,
    title: "Energia Solar Escolas",
    organization: "EcoFuturo",
    invested: 8000,
    currentValue: 8736,
    return: 9.2,
    progress: 82,
    category: "Sustentabilidade",
    location: "Rio de Janeiro",
  },
  {
    id: 3,
    title: "Microcrédito Mulheres",
    organization: "Mulheres em Ação",
    invested: 3000,
    currentValue: 3234,
    return: 7.8,
    progress: 81,
    category: "Empreendedorismo",
    location: "Nordeste",
  },
]

export function InvestmentPortfolio() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meu Portfólio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {investments.map((investment) => (
            <div key={investment.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-semibold">{investment.title}</h3>
                  <p className="text-sm text-muted-foreground">{investment.organization}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {investment.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {investment.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Retorno</div>
                  <div className="flex items-center text-primary font-medium">
                    <TrendingUp className="h-4 w-4 mr-1" />+{investment.return}%
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progresso do Projeto</span>
                  <span>{investment.progress}%</span>
                </div>
                <Progress value={investment.progress} className="h-2" />
              </div>

              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Investido</div>
                  <div className="font-medium">R$ {investment.invested.toLocaleString()}</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-sm text-muted-foreground">Valor Atual</div>
                  <div className="font-medium">R$ {investment.currentValue.toLocaleString()}</div>
                </div>
                <Button variant="outline" size="sm">
                  Ver Detalhes
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
