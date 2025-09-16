"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Building2, ArrowLeft } from "lucide-react"
import { useUser } from "@/contexts/user-context"

export default function LoginPage() {
  const [selectedType, setSelectedType] = useState<"investor" | "organization" | null>(null)
  const { setUserType, setIsLoggedIn } = useUser()
  const router = useRouter()

  const handleLogin = (type: "investor" | "organization") => {
    setUserType(type)
    setIsLoggedIn(true)
    router.push("/") // Redireciona para a página inicial após login
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo!</h1>
          <p className="text-gray-600">Escolha como você deseja acessar a plataforma</p>
        </div>

        {/* Login Options */}
        <div className="space-y-4">
          <Card
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
              selectedType === "investor"
                ? "border-emerald-500 bg-emerald-50"
                : "border-gray-200 hover:border-emerald-300"
            }`}
            onClick={() => setSelectedType("investor")}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <User className="h-8 w-8 text-emerald-600" />
              </div>
              <CardTitle className="text-xl">Sou Investidor</CardTitle>
              <CardDescription>Quero investir em projetos sociais e ambientais</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Explore projetos de impacto</li>
                <li>• Invista com segurança</li>
                <li>• Acompanhe seus retornos</li>
                <li>• Gere impacto positivo</li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-2 ${
              selectedType === "organization"
                ? "border-emerald-500 bg-emerald-50"
                : "border-gray-200 hover:border-emerald-300"
            }`}
            onClick={() => setSelectedType("organization")}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Building2 className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="text-xl">Sou Organização</CardTitle>
              <CardDescription>Represento uma ONG ou organização social</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Publique seus projetos</li>
                <li>• Receba investimentos</li>
                <li>• Gerencie campanhas</li>
                <li>• Amplie seu impacto</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Continue Button */}
        <Button
          className="w-full py-6 text-lg font-semibold"
          disabled={!selectedType}
          onClick={() => selectedType && handleLogin(selectedType)}
        >
          {selectedType === "investor" && "Continuar como Investidor"}
          {selectedType === "organization" && "Continuar como Organização"}
          {!selectedType && "Selecione uma opção"}
        </Button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>
            Ao continuar, você concorda com nossos{" "}
            <Link href="/termos" className="text-emerald-600 hover:underline">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link href="/privacidade" className="text-emerald-600 hover:underline">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
