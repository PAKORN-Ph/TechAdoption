"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Package, Users, Star, History, Menu, X, Rocket } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/packages", icon: Package, label: "Packages" },
    { href: "/segmentation", icon: Users, label: "Segmentation" },
    { href: "/recommendations", icon: Star, label: "Recommendations" },
    { href: "/history", icon: History, label: "History" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="glassmorphism border-white/20 p-4 mb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-[#002850] to-[#7209b7] text-white"
                      : "text-white hover:bg-white/20"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
            <div className="border-t border-white/20 pt-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full glow-button bg-gradient-to-r from-[#002850] to-[#7209b7] hover:from-[#003d75] hover:to-[#8b2fc7] shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
    </div>
  )
}
