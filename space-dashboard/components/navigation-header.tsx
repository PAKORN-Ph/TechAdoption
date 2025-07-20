"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import Link from "next/link"

interface NavigationHeaderProps {
  title: string
  subtitle?: string
  backLink: string
  backLabel: string
  showHomeButton?: boolean
}

export function NavigationHeader({
  title,
  subtitle,
  backLink,
  backLabel,
  showHomeButton = true,
}: NavigationHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <Link href={backLink}>
          <Button
            variant="outline"
            className="glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLabel}
          </Button>
        </Link>
        {showHomeButton && (
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
          </Link>
        )}
      </div>
      <div className="text-right">
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        {subtitle && <p className="text-gray-300">{subtitle}</p>}
      </div>
    </div>
  )
}
