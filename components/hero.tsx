"use client"

import { ArrowDown, Mail, Github, Linkedin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center z-10 relative w-full">
        <div className="space-y-8 md:space-y-12">
          {/* Name with animated gradient */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-balance leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-white via-[#c9b5ff] to-white bg-clip-text text-transparent animate-gradient">
                Nitin Kumar Mishra
              </span>
            </h1>
            
            {/* Title with icon */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Sparkles className="w-6 h-6 text-[#00b7ff] animate-pulse" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium">
                <span className="bg-gradient-to-r from-[#2a2bf7] via-[#00b7ff] to-[#8b49ff] bg-clip-text text-transparent">
                  AI Developer
                </span>
                <span className="text-foreground/40 mx-3">|</span>
                <span className="bg-gradient-to-r from-[#8b49ff] via-[#c9b5ff] to-[#2a2bf7] bg-clip-text text-transparent">
                  Generative AI Engineer
                </span>
              </p>
            </div>
          </div>

          {/* Achievement Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#2a2bf7]/30 via-[#8b49ff]/30 to-[#00b7ff]/30 border border-[#2a2bf7]/40 backdrop-blur-md shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00b7ff] animate-pulse shadow-lg shadow-[#00b7ff]/50" />
            <span className="text-base sm:text-lg font-semibold text-[#c9b5ff]">NASA Space Apps Winner</span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed font-body px-4">
            Building intelligent, scalable AI systems with RAG architectures, agentic pipelines, and next-generation
            machine learning solutions
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="group text-lg px-10 py-7 bg-gradient-to-r from-[#2a2bf7] to-[#8b49ff] hover:from-[#2a2bf7]/90 hover:to-[#8b49ff]/90 transition-all duration-300 shadow-xl shadow-[#2a2bf7]/40 hover:shadow-2xl hover:shadow-[#2a2bf7]/50 hover:scale-105"
            >
              Explore My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-10 py-7 border-2 border-[#00b7ff]/50 hover:border-[#00b7ff] hover:bg-[#00b7ff]/10 transition-all duration-300 bg-transparent/50 backdrop-blur-sm hover:shadow-xl hover:shadow-[#00b7ff]/30 hover:scale-105"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 items-center justify-center pt-8">
            <a
              href="mailto:nitinkmishra010@gmail.com"
              className="group text-foreground/50 hover:text-[#00b7ff] transition-all duration-300 hover:scale-125 transform"
              aria-label="Email"
            >
              <Mail className="w-7 h-7 group-hover:drop-shadow-[0_0_8px_rgba(0,183,255,0.6)]" />
            </a>
            <a
              href="https://github.com/nitinog10"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-foreground/50 hover:text-[#00b7ff] transition-all duration-300 hover:scale-125 transform"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7 group-hover:drop-shadow-[0_0_8px_rgba(0,183,255,0.6)]" />
            </a>
            <a
              href="https://www.linkedin.com/in/nitin-kumar-mishra-520615331"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-foreground/50 hover:text-[#00b7ff] transition-all duration-300 hover:scale-125 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 group-hover:drop-shadow-[0_0_8px_rgba(0,183,255,0.6)]" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#00b7ff]/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#00b7ff]/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
