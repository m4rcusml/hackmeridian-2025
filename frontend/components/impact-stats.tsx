import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Globe, Zap } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "$2.5M+",
    label: "Total Invested",
    description: "In social projects",
  },
  {
    icon: Users,
    value: "15,000+",
    label: "People Impacted",
    description: "Directly by projects",
  },
  {
    icon: Globe,
    value: "85",
    label: "Active Projects",
    description: "Across the country",
  },
  {
    icon: Zap,
    value: "12.3%",
    label: "Average Return",
    description: "Annual for investors",
  },
]

export function ImpactStats() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-balance mb-4">Our Impact in Numbers</h2>
          <p className="text-muted-foreground text-balance">
            Real results from a community committed to positive change
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
