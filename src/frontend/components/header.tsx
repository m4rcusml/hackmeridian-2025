"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Wallet, User, Building2, LogOut } from "lucide-react"
import { useUser } from "@/contexts/user-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false)
  const { userType, setUserType, isLoggedIn, setIsLoggedIn, organizationData, investorData } = useUser()

  const handleLogin = (type: "investor" | "organization") => {
    console.log("[v0] Login attempt:", type)
    setUserType(type)
    setIsLoggedIn(true)
    setIsLoginDropdownOpen(false)
    console.log("[v0] Login successful, userType:", type, "isLoggedIn:", true)
  }

  const handleLogout = () => {
    console.log("[v0] Logout attempt")
    setUserType(null)
    setIsLoggedIn(false)
  }

  console.log("[v0] Current state - userType:", userType, "isLoggedIn:", isLoggedIn)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SI</span>
              </div>
              <span className="font-bold text-xl text-foreground">StellarImpact</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/projetos" className="text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </Link>
            <Link href="/organizacoes" className="text-muted-foreground hover:text-foreground transition-colors">
              Organizações
            </Link>
            {(!isLoggedIn || userType === "investor") && (
              <Link href="/como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
                Como Funciona
              </Link>
            )}
            {userType === "organization" && (
              <Link href="/meus-projetos" className="text-muted-foreground hover:text-foreground transition-colors">
                Meus Projetos
              </Link>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/carteira">
                    <Wallet className="h-4 w-4 mr-2" />
                    Conectar Carteira
                  </Link>
                </Button>
                <DropdownMenu open={isLoginDropdownOpen} onOpenChange={setIsLoginDropdownOpen}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="sm"
                      onClick={() => {
                        console.log("[v0] Login button clicked, current state:", isLoginDropdownOpen)
                        setIsLoginDropdownOpen(!isLoginDropdownOpen)
                      }}
                    >
                      Entrar
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("[v0] Investor option clicked")
                        handleLogin("investor")
                      }}
                      className="cursor-pointer"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Como Investidor
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        console.log("[v0] Organization option clicked")
                        handleLogin("organization")
                      }}
                      className="cursor-pointer"
                    >
                      <Building2 className="h-4 w-4 mr-2" />
                      Como Organização
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/carteira">
                    <Wallet className="h-4 w-4 mr-2" />
                    Carteira
                  </Link>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      {userType === "organization" ? (
                        <Building2 className="h-4 w-4 mr-2" />
                      ) : (
                        <User className="h-4 w-4 mr-2" />
                      )}
                      {userType === "organization" ? organizationData?.name : investorData?.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/perfil">
                        <User className="h-4 w-4 mr-2" />
                        Perfil
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/carteira">
                        <Wallet className="h-4 w-4 mr-2" />
                        Carteira
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <Link
                href="/projetos"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </Link>
              <Link
                href="/organizacoes"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Organizações
              </Link>
              {(!isLoggedIn || userType === "investor") && (
                <Link
                  href="/como-funciona"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Como Funciona
                </Link>
              )}
              {userType === "organization" && (
                <Link
                  href="/meus-projetos"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meus Projetos
                </Link>
              )}
              {isLoggedIn && (
                <>
                  <Link
                    href="/perfil"
                    className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Perfil
                  </Link>
                  <Link
                    href="/carteira"
                    className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Carteira
                  </Link>
                </>
              )}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                  <Link href="/carteira">
                    <Wallet className="h-4 w-4 mr-2" />
                    {isLoggedIn ? "Carteira" : "Conectar Carteira"}
                  </Link>
                </Button>
                {!isLoggedIn ? (
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      className="w-full"
                      onClick={() => {
                        handleLogin("investor")
                        setIsMenuOpen(false)
                      }}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Entrar como Investidor
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                      onClick={() => {
                        handleLogin("organization")
                        setIsMenuOpen(false)
                      }}
                    >
                      <Building2 className="h-4 w-4 mr-2" />
                      Entrar como Organização
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
