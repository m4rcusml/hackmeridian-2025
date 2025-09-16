import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Target, Users } from "lucide-react"

const stats = [
  {
    title: "Total Invested",
    value: "$25,450",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Total Return",
    value: "$3,120",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Active Projects",
    value: "8",
    change: "+2",
    changeType: "positive" as const,
    icon: Target,
  },
  {
    title: "People Impacted",
    value: "1,247",
    change: "+156",
    changeType: "positive" as const,
    icon: Users,
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs ${stat.changeType === "positive" ? "text-primary" : "text-destructive"}`}>
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
