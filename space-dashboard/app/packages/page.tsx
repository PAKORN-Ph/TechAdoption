"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Eye, Trash2, Upload, Star, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PackagesPage() {
  const [isAddPackageOpen, setIsAddPackageOpen] = useState(false)
  const [isDeletePackageOpen, setIsDeletePackageOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<any>(null)

  const packages = [
    {
      id: 1,
      name: "Stellar Basic",
      price: 299,
      description: "Perfect for small businesses starting their cosmic journey",
      image: "/placeholder.svg?height=200&width=300",
      subProducts: ["Gold Standard", "Platinum Elite"],
    },
    {
      id: 2,
      name: "Galaxy Premium",
      price: 599,
      description: "Advanced features for growing enterprises",
      image: "/placeholder.svg?height=200&width=300",
      subProducts: ["Gold Standard", "Platinum Elite", "Diamond Exclusive"],
    },
    {
      id: 3,
      name: "Universe Enterprise",
      price: 999,
      description: "Complete solution for large organizations",
      image: "/placeholder.svg?height=200&width=300",
      subProducts: ["Gold Standard", "Platinum Elite", "Diamond Exclusive", "Cosmic Ultimate"],
    },
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
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
              <h1 className="text-4xl font-bold text-white mb-2">Service Packages</h1>
              <p className="text-gray-300">Manage your cosmic service offerings</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Dialog open={isAddPackageOpen} onOpenChange={setIsAddPackageOpen}>
              <DialogTrigger asChild>
                <Button className="glow-button bg-gradient-to-r from-[#002850] to-[#7209b7]">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Package
                </Button>
              </DialogTrigger>
              <DialogContent className="glassmorphism border-white/20 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-xl">Create New Package</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="packageName">Package Name</Label>
                    <Input id="packageName" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="packagePrice">Price ($)</Label>
                    <Input id="packagePrice" type="number" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="packageDescription">Description</Label>
                    <Textarea id="packageDescription" className="bg-white/10 border-white/20 text-white" rows={3} />
                  </div>
                  <div>
                    <Label htmlFor="packageImage">Package Image</Label>
                    <div className="flex items-center space-x-2">
                      <Input id="packageImage" type="file" className="bg-white/10 border-white/20 text-white" />
                      <Button type="button" variant="outline" className="glassmorphism border-white/30 bg-transparent">
                        <Upload className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label>Sub-Products</Label>
                    <div className="space-y-2">
                      <Input placeholder="Gold Standard" className="bg-white/10 border-white/20 text-white" />
                      <Input placeholder="Platinum Elite" className="bg-white/10 border-white/20 text-white" />
                      <Button
                        type="button"
                        variant="outline"
                        className="glassmorphism border-white/30 text-white bg-transparent"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Sub-Product
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full glow-button bg-gradient-to-r from-[#002850] to-[#7209b7]">
                    Create Package
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isDeletePackageOpen} onOpenChange={setIsDeletePackageOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive" className="glow-button">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Package
                </Button>
              </DialogTrigger>
              <DialogContent className="glassmorphism border-white/20 text-white">
                <DialogHeader>
                  <DialogTitle className="text-xl">Delete Package</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-gray-300">Select a package to delete:</p>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Choose package to delete" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((pkg) => (
                        <SelectItem key={pkg.id} value={pkg.id.toString()}>
                          {pkg.name} - ${pkg.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      className="flex-1 glassmorphism border-white/30 bg-transparent"
                      onClick={() => setIsDeletePackageOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button variant="destructive" className="flex-1">
                      Delete Package
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="glassmorphism border-white/20 hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                  <div className="absolute top-2 right-2">
                    <div className="bg-gradient-to-r from-[#002850] to-[#7209b7] px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                <CardTitle className="text-white text-xl">{pkg.name}</CardTitle>
                <div className="text-2xl font-bold text-cyan-400">${pkg.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{pkg.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full glow-button bg-gradient-to-r from-[#002850] to-[#7209b7]"
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="glassmorphism border-white/20 text-white max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl">{selectedPackage?.name}</DialogTitle>
                    </DialogHeader>
                    {selectedPackage && (
                      <div className="space-y-4">
                        <div className="relative h-64 rounded-lg overflow-hidden">
                          <Image
                            src={selectedPackage.image || "/placeholder.svg"}
                            alt={selectedPackage.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-3xl font-bold text-cyan-400">${selectedPackage.price}</div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <Star className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                        <p className="text-gray-300">{selectedPackage.description}</p>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Sub-Products:</h4>
                          <div className="space-y-2">
                            {selectedPackage.subProducts.map((subProduct: string, index: number) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Zap className="w-4 h-4 text-cyan-400" />
                                <span className="text-gray-300">{subProduct}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
