"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  User,
  Wallet,
  TrendingUp,
  Target,
  DollarSign,
  BarChart3,
  Settings,
  Edit3,
  Camera,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Activity,
  Heart,
  Building2,
  LogOut,
} from "lucide-react"
import { useUser } from "@/contexts/user-context"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ProfilePage() {
  const { userType, setUserType, setIsLoggedIn } = useUser()
  const [isEditing, setIsEditing] = useState(false)
  const router = useRouter()

  const handleDisconnect = () => {
    setUserType(null)
    setIsLoggedIn(false)
    router.push("/")
  }

  const investorData = {
    name: "John Silva",
    email: "john@email.com",
    phone: "+1 555 999-9999",
    location: "New York, NY",
    joinDate: "2024-01-15",
    bio: "Investor focused on social impact and sustainability projects. I believe in the power of technology to transform communities.",
    walletAddress: "GCKFBEIYTKP...",
    totalInvested: 25000,
    currentValue: 27500,
    totalReturn: 2500,
    returnPercentage: 10,
    activeInvestments: 8,
    riskProfile: "Moderate",
    preferredSectors: ["Environment", "Education", "Health"],
    investments: [
      {
        id: 1,
        projectName: "Atlantic Forest Reforestation",
        organization: "EcoGreen USA",
        invested: 5000,
        currentValue: 5750,
        return: 750,
        returnPercentage: 15,
        date: "2024-01-15",
      },
      {
        id: 2,
        projectName: "Community Solar Energy",
        organization: "EcoGreen USA",
        invested: 8000,
        currentValue: 8400,
        return: 400,
        returnPercentage: 5,
        date: "2024-02-20",
      },
      {
        id: 3,
        projectName: "Rural Digital Education",
        organization: "Education For All",
        invested: 3000,
        currentValue: 3300,
        return: 300,
        returnPercentage: 10,
        date: "2024-03-10",
      },
    ],
    favoriteProjects: [
      {
        id: 1,
        title: "Digital Education for Rural Communities",
        organization: "Connect Institute",
        category: "Education",
        targetAmount: 150000,
        currentAmount: 89500,
        image: "/rural-education-technology-center.jpg",
        status: "active",
        addedDate: "2024-01-20",
      },
      {
        id: 4,
        title: "Urban Community Gardens",
        organization: "Green City",
        category: "Food",
        targetAmount: 120000,
        currentAmount: 78000,
        image: "/urban-community-garden-vegetables.jpg",
        status: "active",
        addedDate: "2024-01-25",
      },
    ],
  }

  const organizationData = {
    name: "EcoGreen USA",
    email: "contact@ecogreenusa.org",
    phone: "+1 555 333-4444",
    location: "San Francisco, CA",
    foundedDate: "2020-03-15",
    bio: "Organization dedicated to environmental preservation and sustainable development. We work with local communities to create innovative solutions.",
    website: "www.ecogreenusa.org",
    cnpj: "12-345-678/0001-90",
    walletAddress: "GCKFBEIYTKP...",
    totalRaised: 2500000,
    totalProjects: 12,
    activeProjects: 5,
    totalInvestors: 1250,
    impactMetrics: {
      treesPlanted: 15000,
      co2Reduced: 2500,
      communitiesImpacted: 45,
    },
    projects: [
      {
        id: 1,
        title: "Atlantic Forest Reforestation",
        goal: 150000,
        raised: 89000,
        investors: 234,
        returns: 12500,
        status: "Active",
        startDate: "2024-01-15",
      },
      {
        id: 2,
        title: "Community Solar Energy",
        goal: 200000,
        raised: 156000,
        investors: 189,
        returns: 8900,
        status: "Active",
        startDate: "2024-02-01",
      },
      {
        id: 3,
        title: "Urban Composting",
        goal: 80000,
        raised: 80000,
        investors: 156,
        returns: 15600,
        status: "Completed",
        startDate: "2023-11-10",
      },
    ],
  }

  const currentData = userType === "investor" ? investorData : organizationData

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-t-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <Camera className="h-4 w-4 mr-2" />
              Change Cover
            </Button>
          </div>

          {/* Profile Info */}
          <div className="bg-card rounded-b-xl border border-t-0 p-6">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              {/* Avatar */}
              <div className="relative -mt-16 md:-mt-20">
                <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background">
                  <AvatarImage src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback className="text-2xl font-bold bg-emerald-100 text-emerald-700">
                    {currentData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button size="sm" variant="secondary" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              {/* Profile Details */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground">{currentData.name}</h1>
                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">{currentData.email}</span>
                      </div>
                      {currentData.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">{currentData.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{currentData.location}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="mt-2">
                      {userType === "investor" ? "Investor" : "Organization"}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                      <Edit3 className="h-4 w-4 mr-2" />
                      {isEditing ? "Cancel" : "Edit Profile"}
                    </Button>
                    <Button variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className={`grid w-full ${userType === "investor" ? "grid-cols-5" : "grid-cols-4"}`}>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">{userType === "investor" ? "Investments" : "Projects"}</TabsTrigger>
            {userType === "investor" && <TabsTrigger value="favorites">Favorites</TabsTrigger>}
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {userType === "investor" ? (
                <>
                  <Card className="border-l-4 border-l-emerald-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${investorData.totalInvested.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Since {new Date(investorData.joinDate).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Current Value</CardTitle>
                      <Wallet className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${investorData.currentValue.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground mt-1">Current portfolio</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Return</CardTitle>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">
                        +${investorData.totalReturn.toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">+{investorData.returnPercentage}% return</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Investments</CardTitle>
                      <Target className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{investorData.activeInvestments}</div>
                      <p className="text-xs text-muted-foreground mt-1">Ongoing projects</p>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  <Card className="border-l-4 border-l-emerald-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
                      <DollarSign className="h-4 w-4 text-emerald-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">${(organizationData.totalRaised / 1000000).toFixed(1)}M</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Since {new Date(organizationData.foundedDate).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                      <Target className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{organizationData.activeProjects}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {organizationData.totalProjects} total projects
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Investors</CardTitle>
                      <User className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{organizationData.totalInvestors}</div>
                      <p className="text-xs text-muted-foreground mt-1">Active community</p>
                    </CardContent>
                  </Card>
                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                      <BarChart3 className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">85%</div>
                      <p className="text-xs text-muted-foreground mt-1">Successful projects</p>
                    </CardContent>
                  </Card>
                </>
              )}
            </div>

            {userType === "organization" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-emerald-600" />
                    Impact Metrics
                  </CardTitle>
                  <CardDescription>Social and environmental impact of your projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-emerald-50 rounded-lg">
                      <div className="text-3xl font-bold text-emerald-600">
                        {organizationData.impactMetrics.treesPlanted.toLocaleString()}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Trees Planted</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">
                        {organizationData.impactMetrics.co2Reduced.toLocaleString()}t
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">CO₂ Reduced</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600">
                        {organizationData.impactMetrics.communitiesImpacted}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Communities Impacted</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            {userType === "investor" ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    My Investments
                  </CardTitle>
                  <CardDescription>Track the performance of your investments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {investorData.investments.map((investment) => (
                      <div
                        key={investment.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-1">
                          <h3 className="font-semibold">{investment.projectName}</h3>
                          <p className="text-sm text-muted-foreground">{investment.organization}</p>
                          <p className="text-xs text-muted-foreground">
                            Invested on {new Date(investment.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">${investment.currentValue.toLocaleString()}</div>
                          <div className="text-sm text-green-600">
                            +${investment.return.toLocaleString()} ({investment.returnPercentage}%)
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Invested: ${investment.invested.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    My Projects
                  </CardTitle>
                  <CardDescription>Manage your projects and track returns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {organizationData.projects.map((project) => (
                      <div key={project.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              Started on {new Date(project.startDate).toLocaleDateString()}
                            </p>
                          </div>
                          <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Goal</p>
                            <p className="font-semibold">${project.goal.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Raised</p>
                            <p className="font-semibold">${project.raised.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Investors</p>
                            <p className="font-semibold">{project.investors}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Returns</p>
                            <p className="font-semibold text-green-600">${project.returns.toLocaleString()}</p>
                          </div>
                        </div>

                        <Progress value={(project.raised / project.goal) * 100} className="mb-2" />
                        <p className="text-sm text-muted-foreground">
                          {Math.round((project.raised / project.goal) * 100)}% of goal achieved
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {userType === "investor" && (
            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Favorite Projects
                  </CardTitle>
                  <CardDescription>Projects you've marked as favorites</CardDescription>
                </CardHeader>
                <CardContent>
                  {investorData.favoriteProjects.length > 0 ? (
                    <div className="space-y-4">
                      {investorData.favoriteProjects.map((project) => {
                        const progress = (project.currentAmount / project.targetAmount) * 100
                        return (
                          <div
                            key={project.id}
                            className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <h3 className="font-semibold leading-tight">{project.title}</h3>
                                <div className="flex gap-1">
                                  <Badge variant="secondary" className="text-xs">
                                    {project.category}
                                  </Badge>
                                  <Badge
                                    className={`text-xs ${project.status === "active" ? "bg-green-600" : "bg-gray-500"}`}
                                  >
                                    {project.status === "active" ? "Active" : "Inactive"}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <Building2 className="h-4 w-4 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">{project.organization}</p>
                              </div>
                              <div className="space-y-1 mb-3">
                                <div className="flex justify-between text-sm">
                                  <span>${project.currentAmount.toLocaleString()}</span>
                                  <span>${project.targetAmount.toLocaleString()}</span>
                                </div>
                                <Progress value={progress} className="h-2" />
                                <p className="text-xs text-muted-foreground">{progress.toFixed(0)}% raised</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-muted-foreground">
                                  Favorited on {new Date(project.addedDate).toLocaleDateString()}
                                </p>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm" asChild>
                                    <Link href={`/projects/${project.id}`}>View Project</Link>
                                  </Button>
                                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                                    <Heart className="h-4 w-4 fill-current" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No favorite projects</h3>
                      <p className="text-muted-foreground mb-4">
                        Explore projects and mark your favorites to track them easily
                      </p>
                      <Button asChild>
                        <Link href="/projects">Explore Projects</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Manage your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue={currentData.name} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={currentData.email} />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue={currentData.phone} />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue={currentData.location} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="bio">Biography</Label>
                      <Textarea id="bio" defaultValue={currentData.bio} rows={4} />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => setIsEditing(false)}>Save Changes</Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Biography</Label>
                      <p className="mt-1">{currentData.bio}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Join Date</Label>
                        <p className="mt-1 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(
                            userType === "investor" ? investorData.joinDate : organizationData.foundedDate,
                          ).toLocaleDateString()}
                        </p>
                      </div>
                      {userType === "investor" && (
                        <>
                          <div>
                            <Label className="text-sm font-medium text-muted-foreground">Risk Profile</Label>
                            <p className="mt-1">{investorData.riskProfile}</p>
                          </div>
                          <div className="md:col-span-2">
                            <Label className="text-sm font-medium text-muted-foreground">Preferred Sectors</Label>
                            <div className="flex gap-2 mt-1">
                              {investorData.preferredSectors.map((sector) => (
                                <Badge key={sector} variant="secondary">
                                  {sector}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                      {userType === "organization" && (
                        <>
                          <div>
                            <Label className="text-sm font-medium text-muted-foreground">Tax ID</Label>
                            <p className="mt-1">{organizationData.cnpj}</p>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-muted-foreground">Website</Label>
                            <p className="mt-1">{organizationData.website}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Stellar Wallet</CardTitle>
                  <CardDescription>Manage your connected wallet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Wallet className="h-8 w-8 text-emerald-600" />
                      <div>
                        <p className="font-medium">Connected Wallet</p>
                        <p className="text-sm text-muted-foreground">{currentData.walletAddress}</p>
                      </div>
                    </div>
                    <Button variant="outline" onClick={handleDisconnect}>
                      Disconnect
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Configure your platform preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates about your investments</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  <CardDescription>Irreversible account actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                    <div>
                      <p className="font-medium text-red-800">Disconnect Account</p>
                      <p className="text-sm text-red-600">Log out of the platform and disconnect your wallet</p>
                    </div>
                    <Button variant="destructive" onClick={handleDisconnect}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Disconnect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
