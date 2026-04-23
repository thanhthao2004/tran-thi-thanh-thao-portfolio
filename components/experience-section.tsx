"use client"

import { useEffect, useRef, useState } from "react"
import { Users, TrendingUp, Calendar, Briefcase, Lightbulb, Code } from "lucide-react"
import { experience, activities } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const stats = [
  { icon: Users, value: "8+", label: "Learners Trained" },
  { icon: TrendingUp, value: "90%", label: "Completion Rate Improvement" },
  { icon: Code, value: "4+", label: "Tech Stacks Taught" },
]

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium mb-2">Professional Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Activities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contributing to the data community through mentorship and active participation in tech organizations.
          </p>
        </div>

        <div
          className={cn(
            "grid lg:grid-cols-2 gap-12 items-start transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Left: Professional Experience */}
          <div className="space-y-6">
            <div className="p-6 bg-card border border-border rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{experience.role}</h3>
                  <p className="text-muted-foreground">{experience.company}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">{experience.type}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {experience.duration}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {experience.responsibilities.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex flex-col items-center p-4 bg-card border border-border rounded-xl text-center transition-all duration-500 hover:border-primary/50",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
                >
                  <div className="p-2 bg-primary/10 rounded-lg mb-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Activities */}
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div
                key={activity.organization}
                className={cn(
                  "p-6 bg-card border border-border rounded-xl transition-all duration-500 hover:border-primary/50",
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                )}
                style={{ transitionDelay: isVisible ? `${(index + 1) * 150}ms` : "0ms" }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{activity.role}</h3>
                    <p className="text-muted-foreground text-sm">{activity.organization}</p>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3" />
                      {activity.duration}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{activity.description}</p>

                <div className="flex flex-wrap gap-2">
                  {activity.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </di