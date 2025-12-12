"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Code } from "lucide-react"

const projects = [
  {
    title: "MindMapBhopal",
    subtitle: "AI Urban Planning Simulator",
    tech: ["AI Agents", "ML Models", "GIS", "Simulation", "Python"],
    description:
      "Large-scale AI-driven urban planning engine simulating traffic congestion, utility load distribution, population density, heatmaps & pollution. Built using ML-based prediction models with agentic simulation loops generating 3D visual planning outputs.",
    role: "Lead AI Architect - Built ML models, simulation logic, and visualization pipeline",
    gradient: "from-[#2a2bf7] to-[#8b49ff]",
  },
  {
    title: "Bhopal Beyond Time",
    subtitle: "AI + VR Tourism Reconstruction",
    tech: ["ML Audio Models", "Vision AI", "VR", "360° Rendering"],
    description:
      "Full AI-powered VR experience narrating the story of Bhopal across past, present, good future, and bad future. Features emotion-based AI voiceovers, scene enhancement using ML, and live question-answering inside VR.",
    role: "Built AI narration engine, ML scene adaptation, and interaction logic",
    gradient: "from-[#8b49ff] to-[#00b7ff]",
  },
  {
    title: "Real-Time Facial Emotion Recognition",
    subtitle: "Deep Learning Computer Vision System",
    tech: ["CNN", "TensorFlow", "OpenCV"],
    description:
      "Production-ready deep learning model detecting facial emotions in real-time. Classifies 7 emotion categories using custom CNN trained on FER datasets. Runs with high FPS using OpenCV optimization with heatmaps and confidence scores.",
    role: "Model training, optimization, and deployment",
    gradient: "from-[#00b7ff] to-[#2a2bf7]",
  },
  {
    title: "Credit Risk Prediction System",
    subtitle: "Ensemble ML Models",
    tech: ["Random Forest", "XGBoost", "Logistic Regression", "Pandas"],
    description:
      "ML system for financial institutions to predict loan defaults. Includes automated feature engineering, handling imbalanced data (SMOTE), model stacking, and hyperparameter optimization. Achieved 92% ROC-AUC.",
    role: "Designed full ML pipeline, API deployment, and model evaluation",
    gradient: "from-[#2a2bf7] to-[#00b7ff]",
  },
  {
    title: "ReWear",
    subtitle: "AI-Based Sustainable Exchange Platform",
    tech: ["Firebase", "ML Recommendations", "Python"],
    description:
      "Sustainability platform with clothing exchange, ML similarity & recommendation system, usage prediction, and carbon impact calculator.",
    role: "Created ML recommendation engine, built frontend, and integrated backend",
    gradient: "from-[#8b49ff] to-[#2a2bf7]",
  },
]

export function Projects() {
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
            Featured Projects
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] mx-auto mb-6 rounded-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
          <p className={`text-xl text-foreground/70 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            High-impact AI systems and production-level applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-card/40 backdrop-blur-md border border-[#2a2bf7]/20 rounded-xl p-8 hover:border-[#00b7ff]/50 hover:bg-card/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#2a2bf7]/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-foreground/30 group-hover:text-[#00b7ff] transition-colors" />
              </div>
              
              <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.title}
              </h3>
              <p className="text-lg text-foreground/60 mb-4">{project.subtitle}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 text-foreground/80 text-xs rounded-full border border-[#2a2bf7]/20 group-hover:border-[#00b7ff]/40 transition-colors`}>
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-foreground/70 leading-relaxed mb-4">{project.description}</p>

              <div className="pt-4 border-t border-[#2a2bf7]/20">
                <p className="text-sm font-medium text-[#00b7ff]">
                  Role: <span className="text-foreground/80">{project.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
