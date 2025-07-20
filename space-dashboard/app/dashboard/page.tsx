"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Users, TrendingUp, History, Star, Globe, Rocket, Zap, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const metrics = [
    { title: "Total Customers", value: "2,847", icon: Users, color: "from-blue-500 to-cyan-500" },
    { title: "Active Packages", value: "156", icon: Package, color: "from-purple-500 to-pink-500" },
    { title: "Monthly Growth", value: "+23%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { title: "Recommendations", value: "89", icon: Star, color: "from-orange-500 to-red-500" },
  ]

  const shortcuts = [
    {
      title: "Packages",
      description: "Manage service packages",
      icon: Package,
      href: "/packages",
      color: "from-[#002850] to-[#7209b7]",
    },
    {
      title: "Customer Segmentation",
      description: "Analyze customer groups",
      icon: Users,
      href: "/segmentation",
      color: "from-[#7209b7] to-[#002850]",
    },
    {
      title: "Recommendations",
      description: "Package recommendations",
      icon: Star,
      href: "/recommendations",
      color: "from-[#002850] to-[#7209b7]",
    },
    {
      title: "History",
      description: "View recommendation history",
      icon: History,
      href: "/history",
      color: "from-[#7209b7] to-[#002850]",
    },
  ]

  return (
    <div className="min-h-screen p-6">
      {/* Floating cosmic elements */}
      <div className="absolute top-20 right-20 floating-planet">
        <Globe className="w-12 h-12 text-blue-300 opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 floating-planet" style={{ animationDelay: "3s" }}>
        <Rocket className="w-8 h-8 text-purple-300 opacity-50" />
      </div>

      {/* Navigation Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/">
          <Button
            variant="outline"
            className="glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Login
          </Button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Mission Control Dashboard</h1>
          <p className="text-gray-300">Navigate through the cosmic data universe</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="glassmorphism border-white/20 hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">{metric.title}</p>
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${metric.color}`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Shortcuts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shortcuts.map((shortcut, index) => (
            <Link key={index} href={shortcut.href}>
              <Card className="glassmorphism border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${shortcut.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <shortcut.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{shortcut.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{shortcut.description}</p>
                  <Button className="mt-4 w-full glow-button bg-gradient-to-r from-[#002850] to-[#7209b7] hover:from-[#003d75] hover:to-[#8b2fc7]">
                    <Zap className="w-4 h-4 mr-2" />
                    Launch
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-8">
          <Card className="glassmorphism border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">98.5%</div>
                  <div className="text-gray-300">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">1.2s</div>
                  <div className="text-gray-300">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">847</div>
                  <div className="text-gray-300">Active Sessions</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
