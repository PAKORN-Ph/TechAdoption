"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from "recharts"
import { TrendingUp, Users, PieChartIcon, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SegmentationPage() {
  const router = useRouter()

  const customerGroupData = [
    { group: "Group 1", customers: 1250, color: "#0ea5e9" },
    { group: "Group 2", customers: 890, color: "#8b5cf6" },
    { group: "Group 3", customers: 707, color: "#06d6a0" },
  ]

  const transactionTypeData = [
    { name: "Collection Service", value: 45, color: "#0ea5e9" },
    { name: "Payment Service", value: 35, color: "#8b5cf6" },
    { name: "Liquidity Management", value: 20, color: "#06d6a0" },
  ]

  const trendData = [
    { month: "Jan", group1: 120, group2: 80, group3: 60 },
    { month: "Feb", group1: 135, group2: 85, group3: 65 },
    { month: "Mar", group1: 140, group2: 90, group3: 70 },
    { month: "Apr", group1: 155, group2: 95, group3: 75 },
    { month: "May", group1: 160, group2: 100, group3: 80 },
    { month: "Jun", group1: 175, group2: 105, group3: 85 },
    { month: "Jul", group1: 180, group2: 110, group3: 90 },
    { month: "Aug", group1: 195, group2: 115, group3: 95 },
    { month: "Sep", group1: 200, group2: 120, group3: 100 },
    { month: "Oct", group1: 215, group2: 125, group3: 105 },
    { month: "Nov", group1: 220, group2: 130, group3: 110 },
    { month: "Dec", group1: 235, group2: 135, group3: 115 },
  ]

  const handleChartClick = (group: string) => {
    router.push(`/recommendations?group=${group}`)
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Customer Segmentation</h1>
            <p className="text-gray-300">Analyze customer groups and transaction patterns</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Customer Groups Bar Chart */}
          <Card className="chart-container">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Customer Groups Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  customers: {
                    label: "Customers",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={customerGroupData}>
                    <XAxis dataKey="group" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar
                      dataKey="customers"
                      radius={[4, 4, 0, 0]}
                      onClick={(data) => handleChartClick(data.group)}
                      className="cursor-pointer"
                    >
                      {customerGroupData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Transaction Types Pie Chart */}
          <Card className="chart-container">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <PieChartIcon className="w-6 h-6 mr-2" />
                Transaction Type Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  value: {
                    label: "Percentage",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={transactionTypeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {transactionTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Transaction Trends Line Chart */}
        <Card className="chart-container">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <TrendingUp className="w-6 h-6 mr-2" />
              Transaction Usage Trends (Last 12 Months)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                group1: {
                  label: "Group 1",
                  color: "#0ea5e9",
                },
                group2: {
                  label: "Group 2",
                  color: "#8b5cf6",
                },
                group3: {
                  label: "Group 3",
                  color: "#06d6a0",
                },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <XAxis dataKey="month" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="group1"
                    stroke="#0ea5e9"
                    strokeWidth={3}
                    dot={{ fill: "#0ea5e9", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#0ea5e9", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="group2"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#8b5cf6", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="group3"
                    stroke="#06d6a0"
                    strokeWidth={3}
                    dot={{ fill: "#06d6a0", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#06d6a0", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {customerGroupData.map((group, index) => (
            <Card
              key={index}
              className="glassmorphism border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => handleChartClick(group.group)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">{group.group}</p>
                    <p className="text-2xl font-bold text-white">{group.customers.toLocaleString()}</p>
                    <p className="text-gray-400 text-xs">customers</p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: group.color }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
