import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, Wallet, BarChart3 } from "lucide-react"

const actions = [
  {
    title: "Explore Projects",
    description: "Find new projects to invest in",
    icon: Search,
    href: "/projetos",
  },
  {
    title: "Make Investment",
    description: "Invest in a specific project",
    icon: Plus,
    href: "/investir",
  },
  {
    title: "Manage Wallet",
    description: "View and manage your wallet",
    icon: Wallet,
    href: "/carteira",
  },
  {
    title: "Reports",
    description: "View detailed reports",
    icon: BarChart3,
    href: "/relatorios",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
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
