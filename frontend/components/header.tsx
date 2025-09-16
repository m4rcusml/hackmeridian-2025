"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Wallet, User, Building2, LogOut, Plus } from "lucide-react"
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
  const { userType, setUserType, isLoggedIn, setIsLoggedIn, organizationData, investorData } = useUser()

  const handleLogout = () => {
    setUserType(null)
    setIsLoggedIn(false)
  }

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
            {isLoggedIn && (
              <>
                <Link href="/projetos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projetos
                </Link>
                <Link href="/organizacoes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Organizações
                </Link>
                {userType === "investor" && (
                  <Link href="/como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
                    Como Funciona
                  </Link>
                )}
                {userType === "organization" && (
                  <Link href="/meus-projetos" className="text-muted-foreground hover:text-foreground transition-colors">
                    Meus Projetos
                  </Link>
                )}
              </>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Button size="sm" asChild>
                  <Link href="/login">Entrar</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/carteira">
                    <Wallet className="h-4 w-4 mr-2" />
                    Carteira
                  </Link>
                </Button>
                {userType === "organization" && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/novo-projeto">
                      <Plus className="h-4 w-4 mr-2" />
                      Novo Projeto
                    </Link>
                  </Button>
                )}
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
              {isLoggedIn && (
                <>
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
                  {userType === "investor" && (
                    <Link
                      href="/como-funciona"
                      className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Como Funciona
                    </Link>
                  )}
                  {userType === "organization" && (
                    <>
                      <Link
                        href="/meus-projetos"
                        className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Meus Projetos
                      </Link>
                      <Link
                        href="/novo-projeto"
                        className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Novo Projeto
                      </Link>
                    </>
                  )}
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
                {!isLoggedIn ? (
                  <Button size="sm" className="w-full" asChild>
                    <Link href="/login">Entrar</Link>
                  </Button>
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
