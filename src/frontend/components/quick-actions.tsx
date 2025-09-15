import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, Wallet, BarChart3 } from "lucide-react"

const actions = [
  {
    title: "Explorar Projetos",
    description: "Encontre novos projetos para investir",
    icon: Search,
    href: "/projetos",
  },
  {
    title: "Fazer Investimento",
    description: "Invista em um projeto específico",
    icon: Plus,
    href: "/investir",
  },
  {
    title: "Gerenciar Carteira",
    description: "Visualize e gerencie sua carteira",
    icon: Wallet,
    href: "/carteira",
  },
  {
    title: "Relatórios",
    description: "Veja relatórios detalhados",
    icon: BarChart3,
    href: "/relatorios",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ações Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {actions.map((action, index) => (
            <Button key={index} variant="outline" className="w-full justify-start h-auto p-4 bg-transparent" asChild>
              <a href={action.href}>
                <div className="flex items-center space-x-3">
                  <action.icon className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-xs text-muted-foreground">{action.description}</div>
                  </div>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
