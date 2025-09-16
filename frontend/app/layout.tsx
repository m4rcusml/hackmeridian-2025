import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { UserProvider } from "@/contexts/user-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "FourBridges - Social Impact Investments",
  description:
    "Social impact investment platform on the Stellar network. Invest in projects that generate positive impact and receive returns.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <UserProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </UserProvider>
        <Analytics />
      </body>
    </html>
  )
}
