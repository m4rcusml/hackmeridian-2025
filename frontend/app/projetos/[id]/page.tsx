"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { useUser } from "@/contexts/user-context"
import {
  ArrowLeft,
  MapPin,
  Users,
  TrendingUp,
  Heart,
  Share2,
  Calendar,
  DollarSign,
  Building2,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"

const projectsData = [
  {
    id: 1,
    title: "Digital Education for Rural Communities",
    organization: "Connect Institute",
    organizationId: 1,
    description: "Bringing internet access and digital education to 500 families in rural interior communities.",
    fullDescription:
      "This project aims to transform the educational reality of rural communities through the implementation of digital technology centers. Our goal is to establish high-speed internet access points and create digital literacy programs for all ages. The project includes equipment installation, training of local educators, and development of educational content adapted to the specific needs of each community. We expect to directly impact 500 families, providing new learning and economic development opportunities.",
    location: "São Paulo",
    category: "Education",
    targetAmount: 150000,
    currentAmount: 89500,
    investors: 234,
    expectedReturn: "8.5%",
    duration: "18 months",
    startDate: "2024-03-01",
    endDate: "2024-08-31",
    image: "/rural-education-technology-center.jpg",
    status: "active",
    milestones: [
      { title: "Community analysis", completed: true, date: "2024-01-15" },
      { title: "Infrastructure installation", completed: true, date: "2024-02-28" },
      { title: "Educator training", completed: false, date: "2024-04-15" },
      { title: "Program launch", completed: false, date: "2024-06-01" },
      { title: "Impact assessment", completed: false, date: "2024-08-15" },
    ],
    updates: [
      {
        date: "2024-01-20",
        title: "First phase completed",
        content: "We have finished mapping all participating communities and identified the main technological needs.",
      },
      {
        date: "2024-01-10",
        title: "Project approved",
        content: "The project has been officially approved and we are starting fundraising.",
      },
    ],
  },
  {
    id: 2,
    title: "Solar Energy for Public Schools",
    organization: "EcoFuture",
    organizationId: 2,
    description: "Installing solar panels in 20 public schools, reducing costs and environmental impact.",
    fullDescription:
      "Sustainability project that aims to install photovoltaic solar energy systems in 20 public schools in the metropolitan region. The goal is to reduce operational costs of educational institutions and promote environmental education among students and the community. Each installation will have the capacity to supply 80% of the school's energy demand, generating significant savings that can be reinvested in educational improvements.",
    location: "Rio de Janeiro",
    category: "Sustainability",
    targetAmount: 300000,
    currentAmount: 245000,
    investors: 456,
    expectedReturn: "9.2%",
    duration: "24 months",
    startDate: "2024-02-01",
    endDate: "2024-12-31",
    image: "/solar-panels-on-school-building.jpg",
    status: "active",
    milestones: [
      { title: "School selection", completed: true, date: "2024-01-30" },
      { title: "Technical design", completed: true, date: "2024-03-15" },
      { title: "Installation - Phase 1", completed: true, date: "2024-05-30" },
      { title: "Installation - Phase 2", completed: false, date: "2024-08-30" },
      { title: "Monitoring and evaluation", completed: false, date: "2024-12-15" },
    ],
    updates: [
      {
        date: "2024-01-25",
        title: "15 schools already installed",
        content:
          "We have completed the installation of solar panels in 15 of the 20 planned schools. Energy savings are already visible!",
      },
    ],
  },
]

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { userType, isLoggedIn } = useUser()
  const [project, setProject] = useState<any>(null)
  const [donationAmount, setDonationAmount] = useState("")
  const [returnPercentage, setReturnPercentage] = useState([70])
  const [message, setMessage] = useState("")
  const [isDonating, setIsDonating] = useState(false)

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login")
      return
    }

    const projectId = Number.parseInt(params.id as string)
    const foundProject = projectsData.find((p) => p.id === projectId)
    if (foundProject) {
      setProject(foundProject)
    } else {
      router.push("/projetos")
    }
  }, [params.id, router, isLoggedIn])

  const handleDonation = async () => {
    if (!donationAmount || !isLoggedIn) return

    setIsDonating(true)
    setTimeout(() => {
      setIsDonating(false)
      setDonationAmount("")
      setMessage("")
      setReturnPercentage([70])

      const organizationPercentage = 100 - returnPercentage[0]
      alert(
        `Donation of $${donationAmount} completed successfully!\n` +
          `${returnPercentage[0]}% of returns for you, ${organizationPercentage}% for the organization.\n` +
          `Donation identified as ${userType === "investor" ? "investor" : "user"}.`,
      )
    }, 2000)
  }

  if (!isLoggedIn) {
    return <div>Redirecting to login...</div>
  }

  if (!project) {
    return <div>Loading...</div>
  }

  const progress = (project.currentAmount / project.targetAmount) * 100
  const remainingAmount = project.targetAmount - project.currentAmount

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-6">
            <Button variant="outline" asChild>
              <Link href="/projetos">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <div className="aspect-video bg-muted relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">{project.category}</Badge>
                  <Badge
                    className={`absolute top-4 right-16 ${project.status === "active" ? "bg-green-600" : "bg-gray-500"}`}
                  >
                    {project.status === "active" ? "Active" : "Inactive"}
                  </Badge>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button variant="ghost" size="sm" className="bg-background/80 hover:bg-background">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="bg-background/80 hover:bg-background">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-balance">{project.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link
                      href={`/organizacoes/${project.organizationId}`}
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      <Building2 className="h-4 w-4" />
                      {project.organization}
                    </Link>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Funding Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Raised</span>
                      <span className="font-medium">
                        ${project.currentAmount.toLocaleString()} / ${project.targetAmount.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={progress} className="h-3" />
                    <div className="text-sm text-muted-foreground">{progress.toFixed(1)}% of goal achieved</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-lg font-semibold">{project.investors}</div>
                      <div className="text-sm text-muted-foreground">Investors</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-lg font-semibold">{project.expectedReturn}</div>
                      <div className="text-sm text-muted-foreground">Expected Return</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-lg font-semibold">${remainingAmount.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Remaining</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Milestones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.milestones.map((milestone: any, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div
                          className={`mt-1 p-1 rounded-full ${
                            milestone.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {milestone.completed ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4
                              className={`font-medium ${milestone.completed ? "text-foreground" : "text-muted-foreground"}`}
                            >
                              {milestone.title}
                            </h4>
                            <span className="text-sm text-muted-foreground">
                              {new Date(milestone.date).toLocaleDateString("en-US")}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Project Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {project.updates.map((update: any, index: number) => (
                      <div key={index}>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 p-2 bg-primary/10 rounded-full">
                            <AlertCircle className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{update.title}</h4>
                              <span className="text-sm text-muted-foreground">
                                {new Date(update.date).toLocaleDateString("en-US")}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">{update.content}</p>
                          </div>
                        </div>
                        {index < project.updates.length - 1 && <Separator className="mt-6" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {userType === "investor" && isLoggedIn && project.status === "active" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Make Donation</CardTitle>
                    <CardDescription>Donate to this project and define how to split the returns</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="donation-amount">Donation Amount ($)</Label>
                      <Input
                        id="donation-amount"
                        type="number"
                        placeholder="0.00"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        min="1"
                        step="1"
                      />
                      <p className="text-xs text-muted-foreground mt-1">No minimum value</p>
                    </div>

                    <div>
                      <Label>Return Division</Label>
                      <div className="space-y-3 mt-2">
                        <div className="px-3">
                          <Slider
                            value={returnPercentage}
                            onValueChange={setReturnPercentage}
                            max={100}
                            min={0}
                            step={5}
                            className="w-full"
                          />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            For you: <span className="font-medium text-foreground">{returnPercentage[0]}%</span>
                          </span>
                          <span className="text-muted-foreground">
                            For organization:{" "}
                            <span className="font-medium text-foreground">{100 - returnPercentage[0]}%</span>
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          You decide how to split the investment returns between you and the organization
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message (optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Leave a support message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                      />
                    </div>

                    <Button
                      className="w-full"
                      onClick={handleDonation}
                      disabled={!donationAmount || Number(donationAmount) < 1 || isDonating}
                    >
                      {isDonating ? "Processing..." : "Donate Now"}
                    </Button>

                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• Expected return: {project.expectedReturn} per year</p>
                      <p>• Duration: {project.duration}</p>
                      <p>• You define how to split the returns</p>
                      <p>• All donations are identified</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Project Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start</span>
                    <span className="font-medium">{new Date(project.startDate).toLocaleDateString("en-US")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Expected Completion</span>
                    <span className="font-medium">{new Date(project.endDate).toLocaleDateString("en-US")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge className={project.status === "active" ? "bg-green-600" : "bg-gray-500"}>
                      {project.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>About the Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">{project.organization}</h4>
                      <p className="text-sm text-muted-foreground">Verified organization</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href={`/organizacoes/${project.organizationId}`}>View Organization Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
