import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DashboardStats } from "@/components/dashboard-stats"
import { InvestmentPortfolio } from "@/components/investment-portfolio"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-balance mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Acompanhe seus investimentos e impacto social</p>
          </div>

          <div className="grid gap-8">
            <DashboardStats />

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <InvestmentPortfolio />
                <RecentActivity />
              </div>
              <div>
                <QuickActions />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
