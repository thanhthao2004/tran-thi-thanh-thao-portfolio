"use client"

import { useEffect, useRef, useState } from "react"
import {
  Database,
  Zap,
  Layers,
  CheckCircle2,
  ArrowRight,
  FileInput,
  Workflow,
  Shield,
  BarChart3,
  Cloud,
  Radio,
  Lock,
  Github,
  ExternalLink,
} from "lucide-react"
import { featuredProject } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const zoneColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  Bronze: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/40",
    text: "text-amber-400",
    dot: "bg-amber-500",
  },
  Silver: {
    bg: "bg-slate-400/10",
    border: "border-slate-400/40",
    text: "text-slate-300",
    dot: "bg-slate-400",
  },
  Gold: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/40",
    text: "text-yellow-400",
    dot: "bg-yellow-500",
  },
  "Orchestration Plane": {
    bg: "bg-violet-500/10",
    border: "border-violet-500/40",
    text: "text-violet-400",
    dot: "bg-violet-500",
  },
  "Data Ingestion Engine": {
    bg: "bg-blue-500/10",
    border: "border-blue-500/40",
    text: "text-blue-400",
    dot: "bg-blue-500",
  },
}

const defaultColor = {
  bg: "bg-muted/10",
  border: "border-muted/40",
  text: "text-muted-foreground",
  dot: "bg-muted",
}

export function FeaturedProject() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="featured" ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Featured Project</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">
            {featuredProject.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {featuredProject.subtitle} <span className="text-border mx-2">|</span> {featuredProject.duration}
          </p>
          {/* Private repo notice */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-sm text-amber-300">
              <Lock className="h-3.5 w-3.5" />
              <span>Private repository — active thesis submission</span>
            </div>
          </div>
          <a
            href={featuredProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            View author profile on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Role & Description */}
        <div
          className={cn(
            "max-w-4xl mx-auto mb-10 sm:mb-16 transition-all duration-700 delay-100",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <Badge className="text-sm">{featuredProject.role}</Badge>
            <Badge variant="outline" className="text-sm">
              Multi-Tenant
            </Badge>
            <Badge variant="outline" className="text-sm">
              Event-Driven
            </Badge>
            <Badge variant="outline" className="text-sm">
              Iceberg Lakehouse
            </Badge>
          </div>
          <p className="text-muted-foreground leading-relaxed text-center text-pretty">
            {featuredProject.description}
          </p>
        </div>

        {/* Architecture Diagram */}
        <div
          className={cn(
            "mb-16 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Workflow className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Platform Architecture</h3>
              </div>
              <Badge variant="secondary" className="text-xs hidden sm:inline-flex">
                {'<zone>.<tenant_slug>.<entity>'}
              </Badge>
            </div>

            {/* Flow: Sources → Ingestion → Zones → Consumers */}
            <div className="grid lg:grid-cols-[1fr_auto_1.5fr_auto_1fr] gap-6 lg:gap-4 items-stretch">
              {/* Column 1: Sources */}
              <div className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Sources</p>
                <div className="space-y-2">
                  {["PostgreSQL", "MySQL", "SQL Server"].map((src) => (
                    <div
                      key={src}
                      className="flex items-center gap-2 p-3 bg-secondary rounded-lg border border-border"
                    >
                      <Database className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground truncate">{src}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex items-center justify-center py-2 lg:py-0">
                <ArrowRight className="h-5 w-5 text-primary/60 rotate-90 lg:rotate-0" />
              </div>

              {/* Column 2: Medallion Zones */}
              <div className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Integrator Architecture
                </p>
                <div className="space-y-2">
                  {featuredProject.architectureZones.map((zone, i) => {
                    return (
                      <div
                        key={zone.name}
                        className={cn(
                          "p-3 rounded-lg border transition-all duration-500",
                          (zoneColors[zone.name] || defaultColor).bg,
                          (zoneColors[zone.name] || defaultColor).border,
                          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4",
                        )}
                        style={{ transitionDelay: `${300 + i * 100}ms` }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className={cn("h-2 w-2 rounded-full", (zoneColors[zone.name] || defaultColor).dot)} />
                            <span className={cn("font-semibold text-sm", (zoneColors[zone.name] || defaultColor).text)}>{zone.name}</span>
                            <span className="text-xs text-muted-foreground">· {zone.purpose}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            {zone.name === "Bronze" ? (
                              <Zap className="h-3 w-3 text-primary" />
                            ) : (
                              <Layers className="h-3 w-3 text-primary" />
                            )}
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wide">
                              {zone.engine}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{zone.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex items-center justify-center py-2 lg:py-0">
                <ArrowRight className="h-5 w-5 text-primary/60 rotate-90 lg:rotate-0" />
              </div>

              {/* Column 3: Consumers */}
              <div className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Consumers</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg border border-border">
                    <BarChart3 className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground truncate">Superset BI</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg border border-border">
                    <Database className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground truncate">Trino SQL</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-secondary rounded-lg border border-border">
                    <Cloud className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground truncate">MinIO Console</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Plane bar */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground flex-wrap">
                <Shield className="h-3.5 w-3.5 text-primary" />
                <span className="font-medium text-foreground">Control Plane</span>
                <span>·</span>
                <span>Compiler</span>
                <span>·</span>
                <span>RBAC & Tenant Filters</span>
                <span>·</span>
                <span>Async Event Bus</span>
                <span>·</span>
                <span>Data Quality Engine</span>
                <span>·</span>
                <span>Audit Log</span>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div
          className={cn(
            "mb-16 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Core Capabilities</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {featuredProject.capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={cn(
                  "p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                )}
                style={{ transitionDelay: `${400 + i * 60}ms` }}
              >
                <h4 className="font-semibold text-foreground mb-2 text-sm">{cap.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights & Tech Stack */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Highlights */}
          <div
            className={cn(
              "space-y-4 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <h3 className="text-xl font-semibold text-foreground">Technical Highlights</h3>
            <ul className="space-y-3">
              {featuredProject.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies & Impact */}
          <div
            className={cn(
              "space-y-6 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 p-5 bg-primary/10 border border-primary/30 rounded-xl">
              <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Platform Impact</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{featuredProject.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
