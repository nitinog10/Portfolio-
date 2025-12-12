"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, Send } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/nitinog10",
    username: "nitinog10",
    gradient: "from-[#2a2bf7] to-[#8b49ff]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nitin-kumar-mishra-520615331",
    username: "Connect on LinkedIn",
    gradient: "from-[#8b49ff] to-[#00b7ff]",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nitinkmishra010@gmail.com",
    username: "nitinkmishra010@gmail.com",
    gradient: "from-[#00b7ff] to-[#2a2bf7]",
  },
]

export function Contact() {
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
    <section ref={sectionRef} id="contact" className="relative py-24 sm:py-32 md:py-40 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl sm:text-6xl md:text-7xl font-heading font-bold mb-4 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] bg-clip-text text-transparent transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Let's Connect
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-[#2a2bf7] via-[#8b49ff] to-[#00b7ff] mx-auto mb-6 rounded-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
          <p className={`text-xl text-foreground/70 max-w-2xl mx-auto text-balance transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Open to collaborations, exciting AI projects, and innovative opportunities
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-card/40 backdrop-blur-md border border-[#2a2bf7]/20 rounded-xl p-8 hover:border-[#00b7ff]/50 hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#2a2bf7]/20 text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">{link.label}</h3>
                  <p className="text-sm text-foreground/60 break-all group-hover:text-foreground/80 transition-colors">
                    {link.username}
                  </p>
                </div>
                <Send className="w-4 h-4 text-foreground/30 group-hover:text-[#00b7ff] transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className={`text-center text-sm text-foreground/50 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <p>© 2025 Nitin Kumar Mishra. Built with passion for AI and innovation.</p>
        </div>
      </div>
    </section>
  )
}
