import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { UserProvider } from "@/contexts/user-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "StellarImpact - Investimentos Sociais",
  description:
    "Plataforma de investimentos sociais na rede Stellar. Invista em projetos que geram impacto positivo e receba retornos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <UserProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </UserProvider>
        <Analytics />
      </body>
    </html>
  )
}
