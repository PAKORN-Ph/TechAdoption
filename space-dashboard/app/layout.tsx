import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FloatingNav } from "@/components/floating-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Space Dashboard",
  description: "A futuristic space-themed dashboard application",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-[#000814] via-[#001d3d] to-[#003566] relative overflow-hidden">
          <div className="stars-bg absolute inset-0 z-0"></div>
          <div className="relative z-10">{children}</div>
          <FloatingNav />
        </div>
      </body>
    </html>
  )
}
