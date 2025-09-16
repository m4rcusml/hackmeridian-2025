"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useUser } from "@/contexts/user-context"
import Link from "next/link"
import {
  Wallet,
  Copy,
  ExternalLink,
  ArrowDownToLine,
  CheckCircle,
  AlertCircle,
  Loader2,
  DollarSign,
  TrendingUp,
  ArrowLeft,
  PieChart,
  BarChart3,
  RefreshCw,
  Shield,
  Clock,
  ArrowUpRight,
} from "lucide-react"

export default function CarteiraPage() {
  const { userType, isLoggedIn } = useUser()
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)
  const [balance, setBalance] = useState(0)
  const [availableForWithdraw, setAvailableForWithdraw] = useState(0)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      type: "investment_return",
      amount: 125.5,
      date: "2024-01-20",
      status: "completed",
      hash: "ABC123...DEF456",
      project: "Energia Solar Comunitária",
    },
    {
      id: "2",
      type: "deposit",
      amount: 500,
      date: "2024-01-15",
      status: "completed",
      hash: "GHI789...JKL012",
      project: null,
    },
    {
      id: "3",
      type: "withdraw",
      amount: 150,
      date: "2024-01-10",
      status: "completed",
      hash: "MNO345...PQR678",
      project: null,
    },
    {
      id: "4",
      type: "investment",
      amount: 300,
      date: "2024-01-08",
      status: "completed",
      hash: "STU901...VWX234",
      project: "Reflorestamento Mata Atlântica",
    },
  ])

  useEffect(() => {
    if (userType === "organization") {
      setBalance(12500.75)
      setAvailableForWithdraw(3200.5)
    } else {
      setBalance(2850.25)
      setAvailableForWithdraw(420.75)
    }
  }, [userType])

  useEffect(() => {
    if (isLoggedIn) {
      setIsConnected(true)
      setWalletAddress("GCKFBEIYTKP74Q7SMPFIIHFGICNPANCH6BNXEV2HQPBR4WGXVQZOF7XZ")
    }
  }, [isLoggedIn])

  const connectWallet = async () => {
    setIsConnecting(true)
    // Simular conexão com carteira Stellar
    setTimeout(() => {
      setIsConnected(true)
      setWalletAddress("GCKFBEIYTKP74Q7SMPFIIHFGICNPANCH6BNXEV2HQPBR4WGXVQZOF7XZ")
      setIsConnecting(false)
    }, 2000)
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  const refreshBalance = async () => {
    setIsRefreshing(true)
    setTimeout(() => {
      // Simular pequena variação no saldo
      const variation = (Math.random() - 0.5) * 50
      setBalance((prev) => Math.max(0, prev + variation))
      setIsRefreshing(false)
    }, 1500)
  }

  const handleWithdraw = async () => {
    if (!withdrawAmount || Number.parseFloat(withdrawAmount) <= 0) return

    setIsWithdrawing(true)
    // Simular transação de resgate
    setTimeout(() => {
      const amount = Number.parseFloat(withdrawAmount)
      setAvailableForWithdraw((prev) => prev - amount)
      setBalance((prev) => prev - amount)
      setWithdrawAmount("")
      setIsWithdrawing(false)

      // Adicionar nova transação
      const newTransaction = {
        id: Date.now().toString(),
        type: "withdraw",
        amount,
        date: new Date().toISOString().split("T")[0],
        status: "completed",
        hash: `${Math.random().toString(36).substring(2, 8).toUpperCase()}...${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
        project: null,
      }
      setTransactions((prev) => [newTransaction, ...prev])
    }, 3000)
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress)
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-8)}`
  }

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <ArrowDownToLine className="h-4 w-4" />
      case "withdraw":
        return <ArrowUpRight className="h-4 w-4" />
      case "investment":
        return <TrendingUp className="h-4 w-4" />
      case "investment_return":
        return <DollarSign className="h-4 w-4" />
      default:
        return <DollarSign className="h-4 w-4" />
    }
  }

  const getTransactionLabel = (type: string) => {
    switch (type) {
      case "deposit":
        return "Depósito"
      case "withdraw":
        return "Resgate"
      case "investment":
        return "Investimento"
      case "investment_return":
        return "Retorno de Investimento"
      default:
        return "Transação"
    }
  }

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "deposit":
        return "bg-green-100 text-green-600"
      case "withdraw":
        return "bg-blue-100 text-blue-600"
      case "investment":
        return "bg-purple-100 text-purple-600"
      case "investment_return":
        return "bg-emerald-100 text-emerald-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const totalInvested = transactions.filter((t) => t.type === "investment").reduce((sum, t) => sum + t.amount, 0)

  const totalReturns = transactions.filter((t) => t.type === "investment_return").reduce((sum, t) => sum + t.amount, 0)

  const returnPercentage = totalInvested > 0 ? (totalReturns / totalInvested) * 100 : 0

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Início
                </Link>
              </Button>
              {isConnected && (
                <Button variant="outline" onClick={refreshBalance} disabled={isRefreshing}>
                  {isRefreshing ? (
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  ) : (
                    <RefreshCw className="h-4 w-4 mr-2" />
                  )}
                  Atualizar
                </Button>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">Carteira Stellar</h1>
            <p className="text-muted-foreground">
              {userType === "organization"
                ? "Gerencie os rendimentos da sua organização e resgate valores"
                : "Conecte sua carteira e gerencie seus investimentos"}
            </p>
          </div>

          {/* Status da Conexão */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Status da Carteira
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!isConnected ? (
                <div className="text-center py-6">
                  <div className="mb-4">
                    <Wallet className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                    <p className="text-muted-foreground">Nenhuma carteira conectada</p>
                  </div>
                  <Button onClick={connectWallet} disabled={isConnecting} className="w-full sm:w-auto">
                    {isConnecting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Conectando...
                      </>
                    ) : (
                      <>
                        <Wallet className="mr-2 h-4 w-4" />
                        Conectar Carteira Stellar
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Carteira Conectada</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-50 text-green-700">
                      Ativo
                    </Badge>
                  </div>

                  <div className="bg-muted rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Endereço da Carteira</p>
                        <p className="font-mono text-sm">{formatAddress(walletAddress)}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={copyAddress}>
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={`https://stellar.expert/explorer/public/account/${walletAddress}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" onClick={disconnectWallet}>
                    Desconectar Carteira
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {isConnected && (
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                <TabsTrigger value="withdraw">Resgatar</TabsTrigger>
                <TabsTrigger value="history">Histórico</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Saldos */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Saldo Total
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">
                        ${balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {userType === "organization"
                          ? "Total arrecadado pelos projetos"
                          : "Total investido + rendimentos"}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Disponível para Resgate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">
                        ${availableForWithdraw.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {userType === "organization"
                          ? "Rendimentos da pool de investimentos"
                          : "Lucros dos seus investimentos"}
                      </p>
                    </CardContent>
                  </Card>

                  {userType === "investor" && (
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base flex items-center gap-2">
                          <BarChart3 className="h-4 w-4" />
                          Retorno Total
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-emerald-600">+{returnPercentage.toFixed(1)}%</div>
                        <p className="text-sm text-muted-foreground mt-1">
                          ${totalReturns.toLocaleString("en-US", { minimumFractionDigits: 2 })} em retornos
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Performance Chart Placeholder */}
                {userType === "investor" && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-5 w-5" />
                        Performance dos Investimentos
                      </CardTitle>
                      <CardDescription>Evolução do seu portfólio nos últimos 6 meses</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Energia Solar Comunitária</span>
                          <div className="flex items-center gap-2">
                            <Progress value={75} className="w-20 h-2" />
                            <span className="text-sm font-medium">+12.5%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Reflorestamento Mata Atlântica</span>
                          <div className="flex items-center gap-2">
                            <Progress value={60} className="w-20 h-2" />
                            <span className="text-sm font-medium">+8.3%</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Educação Digital Rural</span>
                          <div className="flex items-center gap-2">
                            <Progress value={45} className="w-20 h-2" />
                            <span className="text-sm font-medium">+6.1%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Security Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Segurança da Carteira
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Criptografia de ponta a ponta</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Transações na rede Stellar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Auditoria de contratos inteligentes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Backup automático de chaves</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="withdraw">
                {/* Resgate */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ArrowDownToLine className="h-5 w-5" />
                      Resgatar Valores
                    </CardTitle>
                    <CardDescription>Transfira seus rendimentos para sua carteira Stellar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="withdraw-amount">Valor para Resgate (USD)</Label>
                        <Input
                          id="withdraw-amount"
                          type="number"
                          placeholder="0.00"
                          value={withdrawAmount}
                          onChange={(e) => setWithdrawAmount(e.target.value)}
                          max={availableForWithdraw}
                          step="0.01"
                        />
                        <p className="text-sm text-muted-foreground mt-1">
                          Máximo disponível: $
                          {availableForWithdraw.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </p>
                      </div>

                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          O resgate será processado na rede Stellar. Taxa de transação: ~$0.00001 USD
                        </AlertDescription>
                      </Alert>

                      <div className="flex gap-2">
                        <Button
                          onClick={handleWithdraw}
                          disabled={
                            !withdrawAmount ||
                            Number.parseFloat(withdrawAmount) <= 0 ||
                            Number.parseFloat(withdrawAmount) > availableForWithdraw ||
                            isWithdrawing
                          }
                          className="flex-1"
                        >
                          {isWithdrawing ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Processando...
                            </>
                          ) : (
                            <>
                              <ArrowDownToLine className="mr-2 h-4 w-4" />
                              Resgatar
                            </>
                          )}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setWithdrawAmount(availableForWithdraw.toString())}
                          disabled={availableForWithdraw <= 0}
                        >
                          Máximo
                        </Button>
                      </div>

                      {/* Estimativa de tempo */}
                      <div className="bg-muted rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Tempo estimado</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Resgates são processados em 3-5 segundos na rede Stellar
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                {/* Histórico de Transações */}
                <Card>
                  <CardHeader>
                    <CardTitle>Histórico de Transações</CardTitle>
                    <CardDescription>Suas últimas movimentações na rede Stellar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions.map((transaction, index) => (
                        <div key={transaction.id}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`p-2 rounded-full ${getTransactionColor(transaction.type)}`}>
                                {getTransactionIcon(transaction.type)}
                              </div>
                              <div>
                                <p className="font-medium">{getTransactionLabel(transaction.type)}</p>
                                {transaction.project && (
                                  <p className="text-sm text-muted-foreground">{transaction.project}</p>
                                )}
                                <p className="text-sm text-muted-foreground">
                                  {new Date(transaction.date).toLocaleDateString("pt-BR")}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p
                                className={`font-medium ${
                                  transaction.type === "withdraw" || transaction.type === "investment"
                                    ? "text-red-600"
                                    : "text-green-600"
                                }`}
                              >
                                {transaction.type === "withdraw" || transaction.type === "investment" ? "-" : "+"}$
                                {transaction.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                              </p>
                              <p className="text-sm text-muted-foreground font-mono">{transaction.hash}</p>
                              <Badge variant="secondary" className="text-xs">
                                {transaction.status === "completed" ? "Concluído" : "Pendente"}
                              </Badge>
                            </div>
                          </div>
                          {index < transactions.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
