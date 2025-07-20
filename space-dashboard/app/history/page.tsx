"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Filter, TrendingUp, CheckCircle, Clock, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  const [dateFilter, setDateFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const historyData = [
    {
      id: 1,
      customerName: "John Stellar",
      email: "john@stellar.com",
      packageName: "Stellar Basic",
      recommendedDate: "2024-01-15",
      status: "Successful",
      amount: 299,
      comments: "Customer showed high interest in basic features",
    },
    {
      id: 2,
      customerName: "Sarah Cosmos",
      email: "sarah@cosmos.com",
      packageName: "Galaxy Premium",
      recommendedDate: "2024-01-14",
      status: "In Process",
      amount: 599,
      comments: "Follow-up scheduled for next week",
    },
    {
      id: 3,
      customerName: "Mike Nebula",
      email: "mike@nebula.com",
      packageName: "Universe Enterprise",
      recommendedDate: "2024-01-12",
      status: "Successful",
      amount: 999,
      comments: "Upgraded from previous package",
    },
    {
      id: 4,
      customerName: "Lisa Galaxy",
      email: "lisa@galaxy.com",
      packageName: "Stellar Basic",
      recommendedDate: "2024-01-10",
      status: "In Process",
      amount: 299,
      comments: "Waiting for budget approval",
    },
    {
      id: 5,
      customerName: "David Orbit",
      email: "david@orbit.com",
      packageName: "Galaxy Premium",
      recommendedDate: "2024-01-08",
      status: "Successful",
      amount: 599,
      comments: "Quick decision, very satisfied",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Successful":
        return "bg-green-500"
      case "In Process":
        return "bg-yellow-500"
      case "Rejected":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Successful":
        return <CheckCircle className="w-4 h-4" />
      case "In Process":
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const filteredData = historyData.filter((item) => {
    const matchesDate = !dateFilter || item.recommendedDate.includes(dateFilter)
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    return matchesDate && matchesStatus
  })

  const totalEvents = historyData.length
  const successfulRecommendations = historyData.filter((item) => item.status === "Successful").length
  const pendingRecommendations = historyData.filter((item) => item.status === "In Process").length
  const totalRevenue = historyData
    .filter((item) => item.status === "Successful")
    .reduce((sum, item) => sum + item.amount, 0)

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
            <h1 className="text-4xl font-bold text-white mb-2">Recommendation History</h1>
            <p className="text-gray-300">Track and analyze package recommendation outcomes</p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glassmorphism border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Total Events</p>
                  <p className="text-3xl font-bold text-white">{totalEvents}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glassmorphism border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Successful</p>
                  <p className="text-3xl font-bold text-white">{successfulRecommendations}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glassmorphism border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">In Process</p>
                  <p className="text-3xl font-bold text-white">{pendingRecommendations}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="glassmorphism border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Revenue</p>
                  <p className="text-3xl font-bold text-white">${totalRevenue.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="glassmorphism border-white/20 mb-6">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Filter className="w-6 h-6 mr-2" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Date Range</label>
                <Input
                  type="date"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All statuses</SelectItem>
                    <SelectItem value="Successful">Successful</SelectItem>
                    <SelectItem value="In Process">In Process</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  onClick={() => {
                    setDateFilter("")
                    setStatusFilter("all")
                  }}
                  variant="outline"
                  className="glassmorphism border-white/30 text-white hover:bg-white/20"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* History Table */}
        <Card className="glassmorphism border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              Recommendation History ({filteredData.length} records)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left text-gray-300 py-3">Customer</th>
                    <th className="text-left text-gray-300 py-3">Package</th>
                    <th className="text-left text-gray-300 py-3">Date</th>
                    <th className="text-left text-gray-300 py-3">Amount</th>
                    <th className="text-left text-gray-300 py-3">Status</th>
                    <th className="text-left text-gray-300 py-3">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.id} className="border-b border-white/10 hover:bg-white/5">
                      <td className="py-4">
                        <div>
                          <div className="text-white font-semibold">{item.customerName}</div>
                          <div className="text-gray-400 text-sm">{item.email}</div>
                        </div>
                      </td>
                      <td className="text-white py-4">{item.packageName}</td>
                      <td className="text-white py-4">{item.recommendedDate}</td>
                      <td className="text-white py-4">${item.amount}</td>
                      <td className="py-4">
                        <Badge className={`${getStatusColor(item.status)} text-white flex items-center w-fit`}>
                          {getStatusIcon(item.status)}
                          <span className="ml-1">{item.status}</span>
                        </Badge>
                      </td>
                      <td className="text-gray-300 py-4 max-w-xs truncate">{item.comments}</td>
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
