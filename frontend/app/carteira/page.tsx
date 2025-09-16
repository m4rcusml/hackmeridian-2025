"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useUser } from "@/contexts/user-context"
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
} from "lucide-react"

export default function CarteiraPage() {
  const { userType } = useUser()
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [isConnecting, setIsConnecting] = useState(false)
  const [balance, setBalance] = useState(0)
  const [availableForWithdraw, setAvailableForWithdraw] = useState(0)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [isWithdrawing, setIsWithdrawing] = useState(false)
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      type: "deposit",
      amount: 500,
      date: "2024-01-15",
      status: "completed",
      hash: "ABC123...DEF456",
    },
    {
      id: "2",
      type: "withdraw",
      amount: 150,
      date: "2024-01-10",
      status: "completed",
      hash: "GHI789...JKL012",
    },
  ])

  // Simular dados baseados no tipo de usuário
  useEffect(() => {
    if (userType === "organization") {
      setBalance(2500)
      setAvailableForWithdraw(1200)
    } else {
      setBalance(850)
      setAvailableForWithdraw(320)
    }
  }, [userType])

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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
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
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
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
        <>
          {/* Saldos */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Saldo Total
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {balance.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {userType === "organization" ? "Total arrecadado pelos projetos" : "Total investido + rendimentos"}
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
                  {availableForWithdraw.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "USD",
                  })}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {userType === "organization"
                    ? "Rendimentos da pool de investimentos"
                    : "Lucros dos seus investimentos"}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Resgate */}
          <Card className="mb-6">
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
                    Máximo disponível:{" "}
                    {availableForWithdraw.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    O resgate será processado na rede Stellar. Taxas de transação podem ser aplicadas.
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
              </div>
            </CardContent>
          </Card>

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
                        <div
                          className={`p-2 rounded-full ${
                            transaction.type === "deposit" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {transaction.type === "deposit" ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <ArrowDownToLine className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{transaction.type === "deposit" ? "Depósito" : "Resgate"}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(transaction.date).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p
                          className={`font-medium ${
                            transaction.type === "deposit" ? "text-green-600" : "text-blue-600"
                          }`}
                        >
                          {transaction.type === "deposit" ? "+" : "-"}
                          {transaction.amount.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                        <p className="text-sm text-muted-foreground">{transaction.hash}</p>
                      </div>
                    </div>
                    {index < transactions.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
