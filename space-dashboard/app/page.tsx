"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Rocket, Star, Globe, User, Lock, Mail } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)
  const router = useRouter()

  const handleLogin = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Floating cosmic elements */}
      <div className="absolute top-20 left-20 floating-planet">
        <Globe className="w-8 h-8 text-blue-300 opacity-60" />
      </div>
      <div className="absolute top-40 right-32 floating-planet" style={{ animationDelay: "2s" }}>
        <Star className="w-6 h-6 text-purple-300 opacity-70" />
      </div>
      <div className="absolute bottom-32 left-40 floating-planet" style={{ animationDelay: "4s" }}>
        <Rocket className="w-10 h-10 text-cyan-300 opacity-50" />
      </div>

      <div className="glassmorphism rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-[#002850] to-[#7209b7]">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Space Dashboard</h1>
          <p className="text-gray-300">Enter the cosmic realm</p>
        </div>

        <form className="space-y-6">
          <div>
            <Label htmlFor="username" className="text-white">
              Username
            </Label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
          </div>

          <Button
            type="button"
            onClick={handleLogin}
            className="w-full glow-button bg-gradient-to-r from-[#002850] to-[#7209b7] hover:from-[#003d75] hover:to-[#8b2fc7] text-white font-semibold py-3"
          >
            Launch Into Dashboard
          </Button>
        </form>

        <div className="flex justify-between mt-6 space-x-4">
          <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex-1 glassmorphism text-white border-white/30 hover:bg-white/20 bg-transparent"
              >
                Register
              </Button>
            </DialogTrigger>
            <DialogContent className="glassmorphism border-white/20 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-xl">Join the Space Crew</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" className="bg-white/10 border-white/20 text-white" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="regUsername">Username</Label>
                  <Input id="regUsername" className="bg-white/10 border-white/20 text-white" />
                </div>
                <div>
                  <Label htmlFor="regPassword">Password</Label>
                  <Input id="regPassword" type="password" className="bg-white/10 border-white/20 text-white" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" className="bg-white/10 border-white/20 text-white" />
                </div>
                <div>
                  <Label htmlFor="employeeId">Employee ID</Label>
                  <Input id="employeeId" className="bg-white/10 border-white/20 text-white" />
                </div>
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="division">Division</Label>
                  <Select>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select division" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="north">North Division</SelectItem>
                      <SelectItem value="south">South Division</SelectItem>
                      <SelectItem value="east">East Division</SelectItem>
                      <SelectItem value="west">West Division</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full glow-button bg-gradient-to-r from-[#002850] to-[#7209b7]">
                  Create Account
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={isForgotPasswordOpen} onOpenChange={setIsForgotPasswordOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex-1 glassmorphism text-white border-white/30 hover:bg-white/20 bg-transparent"
              >
                Forgot Password
              </Button>
            </DialogTrigger>
            <DialogContent className="glassmorphism border-white/20 text-white">
              <DialogHeader>
                <DialogTitle className="text-center text-xl">Reset Password</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="resetEmail">Email Address</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="resetEmail"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="resetUsername">Username</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <Input
                      id="resetUsername"
                      placeholder="Enter your username"
                      className="pl-10 bg-white/10 border-white/20 text-white"
                    />
                  </div>
                </div>
                <Button className="w-full glow-button bg-gradient-to-r from-[#002850] to-[#7209b7]">
                  Send Reset Link
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
