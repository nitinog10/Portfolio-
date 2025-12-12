"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"

const Globe = dynamic(() => import("@/components/Globe").then(mod => ({ default: mod.Globe })), { ssr: false })

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-background" />}>
          <Globe />
        </Suspense>
      </div>

      <div className="relative z-10">
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}
