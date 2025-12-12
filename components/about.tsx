"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Code, Rocket } from "lucide-react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const highlights = [
    {
      icon: Brain,
      title: "AI & ML Expertise",
      description: "Deep Learning, Computer Vision, Reinforcement Learning",
    },
    {
      icon: Code,
      title: "Generative AI",
      description: "RAG Systems, LangChain, LangFlow, LangGraph, MCP Servers",
    },
    {
      icon: Rocket,
      title: "Production Systems",
      description: "Building scalable AI applications and automation systems",
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 md:py-40 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2a2bf7]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl md:text-7xl font-heading font-bold mb-4 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] bg-clip-text text-transparent transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            About Me
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] mx-auto mb-6 rounded-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className={`space-y-6 text-lg sm:text-xl leading-relaxed text-foreground/80 font-body transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <p className="text-pretty">
              I am an <span className="text-[#00b7ff] font-semibold">AI Developer</span> and <span className="text-[#8b49ff] font-semibold">Generative AI Engineer</span>, passionate about building intelligent, scalable, and
              real-world AI systems. My expertise spans across Agentic AI pipelines, RAG architectures, and Model
              Context Protocol (MCP) servers.
            </p>
            <p className="text-pretty">
              Currently working as <span className="text-[#2a2bf7] font-semibold">AI Developer & Technical Operations</span> at HARON INDIA and <span className="text-[#2a2bf7] font-semibold">AI Developer Intern</span> at
              TheTechBus, I have consistently delivered high-impact AI projects and led teams in building
              production-level applications using modern AI stacks.
            </p>
            <p className="text-pretty">
              My mission is to build next-gen AI agents, powerful automation systems, and real-world ML applications
              that solve large-scale problems. I specialize in Computer Vision, Reinforcement Learning, LangChain,
              LangFlow, and LangGraph.
            </p>
          </div>

          {/* Profile Picture */}
          <div className={`flex justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#2a2bf7]/30 shadow-2xl shadow-[#2a2bf7]/20 group-hover:border-[#00b7ff]/50 transition-all duration-300 group-hover:scale-[1.02]">
                <img
                  src="/pfp.png"
                  alt="Nitin Kumar Mishra"
                  className="w-full max-w-md h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Cards */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-card/40 backdrop-blur-md border border-[#2a2bf7]/20 rounded-xl p-6 hover:border-[#00b7ff]/50 hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#2a2bf7]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#2a2bf7]/20 to-[#8b49ff]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-[#00b7ff]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{highlight.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
