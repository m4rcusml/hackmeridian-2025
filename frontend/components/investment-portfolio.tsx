import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, MapPin } from "lucide-react"

const investments = [
  {
    id: 1,
    title: "Rural Digital Education",
    organization: "Connect Institute",
    invested: 5000,
    currentValue: 5420,
    return: 8.4,
    progress: 67,
    category: "Education",
    location: "São Paulo",
  },
  {
    id: 2,
    title: "Solar Energy Schools",
    organization: "EcoFuture",
    invested: 8000,
    currentValue: 8736,
    return: 9.2,
    progress: 82,
    category: "Sustainability",
    location: "Rio de Janeiro",
  },
  {
    id: 3,
    title: "Women Microcredit",
    organization: "Women in Action",
    invested: 3000,
    currentValue: 3234,
    return: 7.8,
    progress: 81,
    category: "Entrepreneurship",
    location: "Northeast",
  },
]

export function InvestmentPortfolio() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Portfolio</CardTitle>
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
                  <div className="text-sm text-muted-foreground">Return</div>
                  <div className="flex items-center text-primary font-medium">
                    <TrendingUp className="h-4 w-4 mr-1" />+{investment.return}%
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Project Progress</span>
                  <span>{investment.progress}%</span>
                </div>
                <Progress value={investment.progress} className="h-2" />
              </div>

              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Invested</div>
                  <div className="font-medium">${investment.invested.toLocaleString()}</div>
                </div>
                <div className="space-y-1 text-right">
                  <div className="text-sm text-muted-foreground">Current Value</div>
                  <div className="font-medium">${investment.currentValue.toLocaleString()}</div>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
