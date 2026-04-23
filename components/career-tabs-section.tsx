"use client"

import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, CheckCircle2, Github, Clock, Database, LineChart, Briefcase } from "lucide-react"
import { projects, careerRoles, type CareerRole } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function CareerTabsSection() {
  const roleIcons = {
    database: Database,
    chart: LineChart,
    briefcase: Briefcase,
  }

  const [activeRole, setActiveRole] = useState<CareerRole>("Data Engineer")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const activeRoleData = careerRoles.find((r) => r.id === activeRole)
  const filteredProjects = projects.filter((p) =>
    p.roles.includes(activeRole)
  )

  return (
    <section
      id="career"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">3 Career Paths</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects by Role
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I pursue three interconnected career paths. Select a role to explore projects and skills tailored to that direction.
          </p>
        </div>

        {/* Role Tabs */}
        <div
          className={cn(
            "flex flex-col sm:flex-row gap-3 mb-10 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {careerRoles.map((role) => {
            const Icon = roleIcons[role.iconName as keyof typeof roleIcons] || Database
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id as CareerRole)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl font-semibold text-sm border-2 transition-all duration-300",
                  activeRole === role.id
                    ? cn(role.bgColor, role.borderColor, role.color)
                    : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                {role.label}
              </button>
            )
          })}
        </div>

        {activeRoleData && (
          <div
            key={activeRole}
            className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            {/* Role Overview Card */}
            <div
              className={cn(
                "p-6 rounded-2xl border-2",
                activeRoleData.bgColor,
                activeRoleData.borderColor,
              )}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <h3 className={cn("text-xl font-bold mb-2 flex items-center gap-2", activeRoleData.color)}>
                    {React.createElement(roleIcons[activeRoleData.iconName as keyof typeof roleIcons] || Database, { className: "h-6 w-6" })}
                    {activeRoleData.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {activeRoleData.summary}
                  </p>
                </div>
                <div className="lg:w-64">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Core Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeRoleData.keySkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={cn("text-xs cursor-default", activeRoleData.color)}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects for this role */}
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No projects listed for this role yet.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProjects.map((project, index) => (
                  <a
                    key={project.id}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex flex-col bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-400",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                    style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        {project.status === "in-progress" && (
                          <Badge className="text-xs bg-amber-500/20 text-amber-300 border-amber-500/30 flex items-center gap-1">
                            <Clock className="h-2.5 w-2.5" />
                            In Progress
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                        <Github className="h-4 w-4" />
                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                      {project.title}
                    </h4>

                    {/* Meta */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="font-medium text-foreground/70">{project.role}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Key achievement */}
                    <div className="space-y-1.5 mb-4">
                      {project.achievements.slice(0, 2).map((ach, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* View all on GitHub link */}
            <div className="text-center pt-4">
              <a
                href="https://github.com/thanhthao2004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                View all repositories on GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
