import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, DollarSign, Target, Users } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "investment",
    title: "New investment made",
    description: "Invested $2,000 in Urban Community Gardens",
    time: "2 hours ago",
    icon: DollarSign,
    color: "text-primary",
  },
  {
    id: 2,
    type: "return",
    title: "Return received",
    description: "$156 return from Solar Energy project",
    time: "1 day ago",
    icon: TrendingUp,
    color: "text-primary",
  },
  {
    id: 3,
    type: "milestone",
    title: "Milestone reached",
    description: "Digital Education project reached 75% of goal",
    time: "2 days ago",
    icon: Target,
    color: "text-secondary",
  },
  {
    id: 4,
    type: "impact",
    title: "Impact generated",
    description: "Your investments impacted 45 new people",
    time: "3 days ago",
    icon: Users,
    color: "text-secondary",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
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
