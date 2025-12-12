"use client"

import { useEffect, useRef, useState } from "react"
import { Sparkles, Zap, Cpu, Database, Code2 } from "lucide-react"

const skillCategories = [
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    gradient: "from-[#2a2bf7] to-[#8b49ff]",
    skills: [
      "Deep Learning (CNN, RNN, Attention Models)",
      "Computer Vision & OpenCV",
      "Reinforcement Learning",
      "ML Algorithms (Regression, Clustering, Ensembles)",
    ],
  },
  {
    icon: Zap,
    title: "Generative AI",
    gradient: "from-[#8b49ff] to-[#00b7ff]",
    skills: ["RAG Systems", "LangChain, LangFlow, LangGraph", "Prompt Engineering", "Fine-tuning LLMs"],
  },
  {
    icon: Cpu,
    title: "Agentic AI",
    gradient: "from-[#00b7ff] to-[#2a2bf7]",
    skills: [
      "Multi-agent pipelines",
      "Autonomous AI systems",
      "AI workflow orchestration",
      "Intelligent simulation agents",
    ],
  },
  {
    icon: Code2,
    title: "MCP & Development",
    gradient: "from-[#2a2bf7] to-[#00b7ff]",
    skills: [
      "Model Context Protocol servers",
      "Custom IDE tools",
      "Automation systems",
      "Developer-focused AI utilities",
    ],
  },
  {
    icon: Database,
    title: "Tech Stack",
    gradient: "from-[#8b49ff] to-[#2a2bf7]",
    skills: [
      "Python, C++, Kotlin",
      "TensorFlow, PyTorch",
      "Docker, Firebase, Google Cloud",
      "REST APIs, Web Integrations",
    ],
  },
]

export function Skills() {
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

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 md:py-40 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl md:text-7xl font-heading font-bold mb-4 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] bg-clip-text text-transparent transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Technical Skills
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] mx-auto mb-6 rounded-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
          <p className={`text-xl text-foreground/70 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Comprehensive expertise across the AI and ML ecosystem
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group bg-card/40 backdrop-blur-md border border-[#2a2bf7]/20 rounded-xl p-6 hover:border-[#00b7ff]/50 hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#2a2bf7]/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-foreground/70 leading-relaxed flex items-start group-hover:text-foreground/90 transition-colors">
                    <span className={`text-transparent bg-gradient-to-r ${category.gradient} bg-clip-text mr-2 font-bold`}>▸</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
