"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Calendar, DollarSign, TrendingUp, Activity } from "lucide-react"
import { useRouter } from "next/navigation"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, BarChart, Bar } from "recharts"
import Link from "next/link"

export default function CustomerBehaviorPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  const customer = {
    id: 1,
    name: "John Stellar",
    email: "john@stellar.com",
    phone: "+1 (555) 123-4567",
    group: "Group 1",
    joinDate: "2023-03-15",
    totalTransactions: 245,
    totalSpent: 12450,
    avgMonthlySpend: 1037,
    lastActivity: "2024-01-15",
    status: "Active",
  }

  const transactionHistory = [
    { id: 1, date: "2024-01-15", type: "Collection Service", amount: 150, status: "Completed" },
    { id: 2, date: "2024-01-12", type: "Payment Service", amount: 75, status: "Completed" },
    { id: 3, date: "2024-01-10", type: "Liquidity Management", amount: 300, status: "Completed" },
    { id: 4, date: "2024-01-08", type: "Collection Service", amount: 120, status: "Completed" },
    { id: 5, date: "2024-01-05", type: "Payment Service", amount: 90, status: "Pending" },
  ]

  const monthlySpendData = [
    { month: "Jul", amount: 850 },
    { month: "Aug", amount: 920 },
    { month: "Sep", amount: 1100 },
    { month: "Oct", amount: 980 },
    { month: "Nov", amount: 1200 },
    { month: "Dec", amount: 1350 },
    { month: "Jan", amount: 1037 },
  ]

  const serviceUsageData = [
    { service: "Collection", usage: 45 },
    { service: "Payment", usage: 35 },
    { service: "Liquidity", usage: 20 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500"
      case "Pending":
        return "bg-yellow-500"
      case "Failed":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 mb-8">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              Dashboard
            </Button>
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/segmentation">
            <Button
              variant="outline"
              className="glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              Segmentation
            </Button>
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/recommendations">
            <Button
              variant="outline"
              className="glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              Recommendations
            </Button>
          </Link>
          <span className="text-gray-400">/</span>
          <Button
            variant="outline"
            className="glassmorphism border-white/30 text-white hover:bg-white/20 mr-4 bg-transparent"
            onClick={() => router.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Customer Behavior Analysis</h1>
            <p className="text-gray-300">Detailed insights for {customer.name}</p>
          </div>
        </div>

        {/* Customer Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="glassmorphism border-white/20 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="w-6 h-6 mr-2" />
                Customer Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Full Name</label>
                    <div className="text-white font-semibold">{customer.name}</div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Email</label>
                    <div className="text-white">{customer.email}</div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Phone</label>
                    <div className="text-white">{customer.phone}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Customer Group</label>
                    <div>
                      <Badge variant="outline" className="glassmorphism border-white/30 text-white">
                        {customer.group}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Join Date</label>
                    <div className="text-white">{customer.joinDate}</div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Status</label>
                    <div>
                      <Badge className="bg-green-500 text-white">{customer.status}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glassmorphism border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Total Transactions</p>
                    <p className="text-3xl font-bold text-white">{customer.totalTransactions}</p>
                  </div>
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Total Spent</p>
                    <p className="text-3xl font-bold text-white">${customer.totalSpent.toLocaleString()}</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Avg Monthly Spend</p>
                    <p className="text-3xl font-bold text-white">${customer.avgMonthlySpend}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="chart-container">
            <CardHeader>
              <CardTitle className="text-white">Monthly Spending Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  amount: {
                    label: "Amount ($)",
                    color: "#0ea5e9",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlySpendData}>
                    <XAxis dataKey="month" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                      type="monotone"
                      dataKey="amount"
                      stroke="#0ea5e9"
                      strokeWidth={3}
                      dot={{ fill: "#0ea5e9", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="chart-container">
            <CardHeader>
              <CardTitle className="text-white">Service Usage Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  usage: {
                    label: "Usage (%)",
                    color: "#8b5cf6",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={serviceUsageData}>
                    <XAxis dataKey="service" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="usage" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="glassmorphism border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-gray-300 py-3">Date</th>
                    <th className="text-left text-gray-300 py-3">Service Type</th>
                    <th className="text-left text-gray-300 py-3">Amount</th>
                    <th className="text-left text-gray-300 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="text-white py-3">{transaction.date}</td>
                      <td className="text-white py-3">{transaction.type}</td>
                      <td className="text-white py-3">${transaction.amount}</td>
                      <td className="py-3">
                        <Badge className={`${getStatusColor(transaction.status)} text-white`}>
                          {transaction.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
