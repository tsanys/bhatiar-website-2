"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Network, Mail, Github, Linkedin } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen gradient-shift flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl float-animation"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-secondary/10 rounded-full blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/10 rounded-full blur-xl float-animation"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-primary/10 rounded-full blur-xl float-animation"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Profile section */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium animate-pulse">
              <MapPin className="w-4 h-4 mr-2" />
              Depok, Indonesia
            </Badge>
          </div>

          {/* Name with staggered animation */}
          <h1
            className={`text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent transition-all duration-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Bhatiar Azhari
          </h1>

          {/* Title with animation */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="flex items-center justify-center mb-6">
              <Network className="w-6 h-6 mr-3 text-primary" />
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Network Engineer</h2>
            </div>
          </div>

          {/* Tagline */}
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.6s" }}
          >
            {
              "Connecting networks, building bridges. Passionate about creating robust, scalable network infrastructures that power the digital world."
            }
          </p>

          {/* Skills badges */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.8s" }}
          >
            {["Network Security", "Cisco", "Cloud Infrastructure", "Network Automation", "CCNA"].map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "1s" }}
          >
            <Button
              size="lg"
              className="px-8 py-3 text-lg font-semibold pulse-glow hover:scale-105 transition-all duration-300"
            >
              Explore My Work
            </Button>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                className="p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 bg-transparent"
              >
                <Mail className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 bg-transparent"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="p-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 bg-transparent"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating network nodes decoration */}
        <div
          className="absolute -top-10 -left-10 w-4 h-4 bg-primary rounded-full opacity-60 float-animation"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-1/4 -right-8 w-3 h-3 bg-secondary rounded-full opacity-60 float-animation"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute -bottom-8 left-1/3 w-5 h-5 bg-accent rounded-full opacity-60 float-animation"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="absolute bottom-1/4 -left-6 w-2 h-2 bg-primary rounded-full opacity-60 float-animation"
          style={{ animationDelay: "3.5s" }}
        />
      </div>
    </main>
  )
}
