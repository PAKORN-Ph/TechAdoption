"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, User, Star, Clock, Eye, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RecommendationsPage() {
  const [expandedCustomers, setExpandedCustomers] = useState<number[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<any>(null)
  const [selectedPackage, setSelectedPackage] = useState<any>(null)

  const customers = [
    {
      id: 1,
      name: "John Stellar",
      email: "john@stellar.com",
      group: "Group 1",
      totalTransactions: 245,
      lastActivity: "2024-01-15",
      recommendedPackages: [
        { id: 1, name: "Stellar Basic", price: 299, match: 95 },
        { id: 2, name: "Galaxy Premium", price: 599, match: 78 },
      ],
    },
    {
      id: 2,
      name: "Sarah Cosmos",
      email: "sarah@cosmos.com",
      group: "Group 1",
      totalTransactions: 189,
      lastActivity: "2024-01-14",
      recommendedPackages: [
        { id: 2, name: "Galaxy Premium", price: 599, match: 92 },
        { id: 3, name: "Universe Enterprise", price: 999, match: 65 },
      ],
    },
    {
      id: 3,
      name: "Mike Nebula",
      email: "mike@nebula.com",
      group: "Group 1",
      totalTransactions: 312,
      lastActivity: "2024-01-16",
      recommendedPackages: [
        { id: 3, name: "Universe Enterprise", price: 999, match: 88 },
        { id: 1, name: "Stellar Basic", price: 299, match: 72 },
      ],
    },
  ]

  const toggleCustomerExpansion = (customerId: number) => {
    setExpandedCustomers((prev) =>
      prev.includes(customerId) ? prev.filter((id) => id !== customerId) : [...prev, customerId],
    )
  }

  const getMatchColor = (match: number) => {
    if (match >= 90) return "text-green-400"
    if (match >= 75) return "text-yellow-400"
    return "text-orange-400"
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/segmentation">
            <Button
              variant="outline"
              className="glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Segmentation
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Package Recommendations</h1>
            <p className="text-gray-300">Manage customer package recommendations for Group 1</p>
          </div>
        </div>

        <div className="space-y-6">
          {customers.map((customer) => (
            <Card key={customer.id} className="glassmorphism border-white/20">
              <Collapsible>
                <CollapsibleTrigger className="w-full" onClick={() => toggleCustomerExpansion(customer.id)}>
                  <CardHeader className="hover:bg-white/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#002850] to-[#7209b7] flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <CardTitle className="text-white text-xl">{customer.name}</CardTitle>
                          <p className="text-gray-300">{customer.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="glassmorphism border-white/30 text-white">
                          {customer.group}
                        </Badge>
                        <div className="text-right text-sm text-gray-300">
                          <div>{customer.totalTransactions} transactions</div>
                          <div>Last: {customer.lastActivity}</div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-white transition-transform ${expandedCustomers.includes(customer.id) ? "rotate-180" : ""}`}
                        />
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="border-t border-white/20 pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-white">Recommended Packages</h3>
                        <Link href={`/customer-behavior/${customer.id}`}>
                          <Button
                            variant="outline"
                            className="glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Customer Details
                          </Button>
                        </Link>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {customer.recommendedPackages.map((pkg) => (
                          <Card key={pkg.id} className="bg-white/5 border-white/10">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-white">{pkg.name}</h4>
                                <div className={`text-sm font-bold ${getMatchColor(pkg.match)}`}>
                                  {pkg.match}% match
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-cyan-400 mb-3">${pkg.price}</div>
                              <div className="flex space-x-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      size="sm"
                                      className="flex-1 glow-button bg-gradient-to-r from-[#002850] to-[#7209b7]"
                                      onClick={() => {
                                        setSelectedCustomer(customer)
                                        setSelectedPackage(pkg)
                                      }}
                                    >
                                      <Star className="w-4 h-4 mr-1" />
                                      Recommend
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="glassmorphism border-white/20 text-white max-w-2xl">
                                    <DialogHeader>
                                      <DialogTitle className="text-xl">Recommend Package</DialogTitle>
                                    </DialogHeader>
                                    {selectedCustomer && selectedPackage && (
                                      <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                          <div>
                                            <h4 className="font-semibold text-white mb-2">Customer Details</h4>
                                            <div className="space-y-1 text-sm text-gray-300">
                                              <div>Name: {selectedCustomer.name}</div>
                                              <div>Email: {selectedCustomer.email}</div>
                                              <div>Group: {selectedCustomer.group}</div>
                                              <div>Transactions: {selectedCustomer.totalTransactions}</div>
                                            </div>
                                          </div>
                                          <div>
                                            <h4 className="font-semibold text-white mb-2">Package Details</h4>
                                            <div className="space-y-1 text-sm text-gray-300">
                                              <div>Package: {selectedPackage.name}</div>
                                              <div>Price: ${selectedPackage.price}</div>
                                              <div className={`Match: ${getMatchColor(selectedPackage.match)}`}>
                                                {selectedPackage.match}%
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div>
                                          <label className="block text-sm font-medium text-white mb-2">Comments</label>
                                          <Textarea
                                            placeholder="Add any comments or notes about this recommendation..."
                                            className="bg-white/10 border-white/20 text-white"
                                            rows={4}
                                          />
                                        </div>
                                        <div className="flex space-x-4">
                                          <Button className="flex-1 glow-button bg-gradient-to-r from-[#002850] to-[#7209b7]">
                                            Send Recommendation
                                          </Button>
                                          <Button
                                            variant="outline"
                                            className="flex-1 glassmorphism border-white/30 text-white bg-transparent"
                                          >
                                            Save for Later
                                          </Button>
                                        </div>
                                      </div>
                                    )}
                                  </DialogContent>
                                </Dialog>

                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="flex-1 glassmorphism border-white/30 text-white hover:bg-white/20 bg-transparent"
                                      onClick={() => {
                                        setSelectedCustomer(customer)
                                        setSelectedPackage(pkg)
                                      }}
                                    >
                                      <Clock className="w-4 h-4 mr-1" />
                                      Later
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="glassmorphism border-white/20 text-white">
                                    <DialogHeader>
                                      <DialogTitle className="text-xl">Save for Later</DialogTitle>
                                    </DialogHeader>
                                    {selectedCustomer && selectedPackage && (
                                      <div className="space-y-4">
                                        <p className="text-gray-300">
                                          Save recommendation for {selectedCustomer.name} - {selectedPackage.name} for
                                          later review.
                                        </p>
                                        <div>
                                          <label className="block text-sm font-medium text-white mb-2">
                                            Reason for delay
                                          </label>
                                          <Textarea
                                            placeholder="Why are you saving this for later?"
                                            className="bg-white/10 border-white/20 text-white"
                                            rows={3}
                                          />
                                        </div>
                                        <Button className="w-full glow-button bg-gradient-to-r from-[#002850] to-[#7209b7]">
                                          Save for Later
                                        </Button>
                                      </div>
                                    )}
                                  </DialogContent>
                                </Dialog>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
