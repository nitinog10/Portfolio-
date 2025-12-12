"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap, Sparkles } from "lucide-react"

const experiences = [
  {
    icon: Briefcase,
    title: "AI Developer & Technical Operations",
    company: "HARON INDIA",
    period: "Current",
    description:
      "Leading AI development initiatives and technical operations, building production-level AI applications and managing technical infrastructure.",
    gradient: "from-[#2a2bf7] to-[#8b49ff]",
  },
  {
    icon: Briefcase,
    title: "AI Developer Intern",
    company: "TheTechBus",
    period: "Current",
    description:
      "Developing cutting-edge AI solutions, implementing machine learning models, and contributing to innovative AI projects.",
    gradient: "from-[#8b49ff] to-[#00b7ff]",
  },
  {
    icon: GraduationCap,
    title: "Head Alumni",
    company: "Oriental Group of Institutes",
    period: "Present",
    description:
      "Managing technical operations and community engagement, fostering connections between alumni and current students.",
    gradient: "from-[#00b7ff] to-[#2a2bf7]",
  },
]

export function Experience() {
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
            Experience
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] mx-auto mb-6 rounded-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
          <p className={`text-xl text-foreground/70 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Professional journey in AI development and leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] opacity-30" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-24 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-br ${exp.gradient} border-4 border-background shadow-lg`} />
                
                <div className="group bg-card/40 backdrop-blur-md border border-[#2a2bf7]/20 rounded-xl p-6 hover:border-[#00b7ff]/50 hover:bg-card/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#2a2bf7]/20">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <exp.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-foreground">{exp.title}</h3>
                          <p className={`text-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold`}>
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-foreground/60 mt-2 md:mt-0 px-3 py-1 bg-[#2a2bf7]/10 rounded-full border border-[#2a2bf7]/20">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
