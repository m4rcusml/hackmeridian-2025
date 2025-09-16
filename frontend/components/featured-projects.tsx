import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Users, Target, TrendingUp } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Digital Education for Rural Communities",
    organization: "Connect Institute",
    description: "Bringing internet access and digital education to 500 families in rural interior communities.",
    location: "São Paulo Interior",
    category: "Education",
    targetAmount: 150000,
    currentAmount: 89500,
    investors: 234,
    expectedReturn: "8.5%",
    duration: "18 months",
    image: "/rural-education-technology-center.jpg",
    status: "active",
  },
  {
    id: 2,
    title: "Solar Energy for Public Schools",
    organization: "EcoFuture",
    description: "Installing solar panels in 20 public schools, reducing costs and environmental impact.",
    location: "Rio de Janeiro",
    category: "Sustainability",
    targetAmount: 300000,
    currentAmount: 245000,
    investors: 456,
    expectedReturn: "9.2%",
    duration: "24 months",
    image: "/solar-panels-on-school-building.jpg",
    status: "active",
  },
  {
    id: 3,
    title: "Microcredit for Women Entrepreneurs",
    organization: "Women in Action",
    description: "Microcredit program to support 200 women in starting their own businesses.",
    location: "Northeast",
    category: "Entrepreneurship",
    targetAmount: 80000,
    currentAmount: 65200,
    investors: 189,
    expectedReturn: "7.8%",
    duration: "12 months",
    image: "/women-entrepreneurs-working-together.jpg",
    status: "inactive",
  },
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Discover investment opportunities that generate positive social impact
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
                      project.status === "active" ? "bg-green-600 hover:bg-green-700" : "bg-gray-500 hover:bg-gray-600"
                    }`}
                  >
                    {project.status === "active" ? "Active" : "Inactive"}
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
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        ${project.currentAmount.toLocaleString()} / ${project.targetAmount.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <div className="text-xs text-muted-foreground">{progress.toFixed(1)}% of goal achieved</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm font-medium">{project.investors}</div>
                      <div className="text-xs text-muted-foreground">Investors</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm font-medium">{project.expectedReturn}</div>
                      <div className="text-xs text-muted-foreground">Return</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-1">
                        <Target className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-sm font-medium">{project.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" disabled={project.status === "inactive"}>
                    {project.status === "active" ? "Invest Now" : "Inactive Project"}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
