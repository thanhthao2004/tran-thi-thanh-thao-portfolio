"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, LineChart, Briefcase, Wrench } from "lucide-react"
import { skillCategories } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const categoryConfig: Record<string, { icon: typeof Code2; color: string; bg: string }> = {
  "Data Engineering": {
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
  },
  "Data Analysis & BI": {
    icon: LineChart,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
  },
  "Business Analysis": {
    icon: Briefcase,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/30",
  },
  "Tools & Platforms": {
    icon: Wrench,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
  },
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-shell"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={cn(
            "section-header transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium mb-2">Expertise</p>
          <h2 className="section-title">
            Skills & Technologies
          </h2>
          <p className="section-description">
            A comprehensive toolkit across data engineering, analytics, business analysis and modern development platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const config = categoryConfig[category.title] ?? { icon: Code2, color: "text-primary", bg: "bg-primary/10 border-primary/30" }
            const Icon = config.icon
            return (
              <div
                key={category.title}
                className={cn(
                  "p-6 bg-card border rounded-xl transition-all duration-700 hover:shadow-lg",
                  config.bg,
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-background/50 rounded-lg">
                    <Icon className={cn("h-5 w-5", config.color)} />
                  </div>
                  <h3 className={cn("font-semibold", config.color)}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="hover:bg-primary/10 hover:text-primary transition-colors cursor-default text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
