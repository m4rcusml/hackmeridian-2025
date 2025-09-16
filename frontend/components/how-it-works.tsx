import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { UserPlus, Search, DollarSign, TrendingUp, Building, Target } from "lucide-react"

const investorSteps = [
  {
    icon: UserPlus,
    title: "Conecte sua Carteira",
    description: "Conecte sua carteira Stellar e complete seu perfil de investidor",
  },
  {
    icon: Search,
    title: "Explore Projetos",
    description: "Navegue pelos projetos sociais disponíveis e analise seus impactos",
  },
  {
    icon: DollarSign,
    title: "Invista",
    description: "Escolha o valor que deseja investir e confirme a transação",
  },
  {
    icon: TrendingUp,
    title: "Receba Retornos",
    description: "Acompanhe seus investimentos e receba os retornos conforme acordado",
  },
]

const organizationSteps = [
  {
    icon: Building,
    title: "Cadastre sua Organização",
    description: "Registre sua organização e comprove sua legitimidade",
  },
  {
    icon: Target,
    title: "Crie seu Projeto",
    description: "Detalhe seu projeto social, metas e impacto esperado",
  },
  {
    icon: DollarSign,
    title: "Defina Parâmetros",
    description: "Estabeleça valor necessário, prazo e retorno para investidores",
  },
  {
    icon: TrendingUp,
    title: "Receba Investimentos",
    description: "Sua pool de investimentos cresce e você executa o projeto",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Como Funciona</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Um processo simples e transparente para investidores e organizações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Para Investidores */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Para Investidores</h3>
              <p className="text-muted-foreground">Invista em projetos sociais e receba retornos financeiros</p>
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

          {/* Para Organizações */}
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Building className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Para Organizações</h3>
              <p className="text-muted-foreground">Crie projetos sociais e receba investimentos para executá-los</p>
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
