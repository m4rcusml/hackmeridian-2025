import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Target, Users } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "investment",
    title: "Novo investimento realizado",
    description: "Investiu R$ 2.000 em Hortas Comunitárias Urbanas",
    time: "2 horas atrás",
    icon: DollarSign,
    color: "text-primary",
  },
  {
    id: 2,
    type: "return",
    title: "Retorno recebido",
    description: "R$ 156 de retorno do projeto Energia Solar",
    time: "1 dia atrás",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    id: 3,
    type: "milestone",
    title: "Marco alcançado",
    description: "Projeto Educação Digital atingiu 75% da meta",
    time: "2 dias atrás",
    icon: Target,
    color: "text-secondary",
  },
  {
    id: 4,
    type: "impact",
    title: "Impacto gerado",
    description: "Seus investimentos impactaram 45 novas pessoas",
    time: "3 dias atrás",
    icon: Users,
    color: "text-secondary",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade Recente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium text-sm">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
