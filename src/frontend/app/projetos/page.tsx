import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectFilters } from "@/components/project-filters"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">Projetos Sociais</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Descubra oportunidades de investimento que geram impacto positivo
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ProjectFilters />
            </div>
            <div className="lg:col-span-3">
              <ProjectsGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
