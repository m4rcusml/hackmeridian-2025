import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { UserPlus, Search, DollarSign, TrendingUp, Building, Target } from "lucide-react"

const investorSteps = [
  {
    icon: UserPlus,
    title: "Connect Your Wallet",
    description: "Connect your Stellar wallet and complete your investor profile",
  },
  {
    icon: Search,
    title: "Explore Projects",
    description: "Browse available social projects and analyze their impacts",
  },
  {
    icon: DollarSign,
    title: "Invest",
    description: "Choose the amount you want to invest and confirm the transaction",
  },
  {
    icon: TrendingUp,
    title: "Receive Returns",
    description: "Track your investments and receive returns as agreed",
  },
]

const organizationSteps = [
  {
    icon: Building,
    title: "Register Your Organization",
    description: "Register your organization and prove your legitimacy",
  },
  {
    icon: Target,
    title: "Create Your Project",
    description: "Detail your social project, goals and expected impact",
  },
  {
    icon: DollarSign,
    title: "Set Parameters",
    description: "Establish required amount, timeline and returns for investors",
  },
  {
    icon: TrendingUp,
    title: "Receive Investments",
    description: "Your investment pool grows and you execute the project",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            A simple and transparent process for investors and organizations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Investors */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">For Investors</h3>
              <p className="text-muted-foreground">Invest in social projects and receive financial returns</p>
            </div>

            <div className="space-y-6">
              {investorSteps.map((step, index) => (
                <Card key={index} className="relative">
                  <div className="absolute -left-4 top-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">{step.title}</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* For Organizations */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Building className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">For Organizations</h3>
              <p className="text-muted-foreground">Create social projects and receive investments to execute them</p>
            </div>

            <div className="space-y-6">
              {organizationSteps.map((step, index) => (
                <Card key={index} className="relative">
                  <div className="absolute -left-4 top-6 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <step.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <h4 className="font-semibold">{step.title}</h4>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
