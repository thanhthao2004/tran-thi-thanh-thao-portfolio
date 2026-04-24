"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, ExternalLink } from "lucide-react"
import { awards } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function AwardsSection() {
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
      id="awards"
      ref={sectionRef}
      className="section-shell"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <p className="text-primary font-medium mb-2">Recognition</p>
          <h2 className="section-title">
            Awards & Achievements
          </h2>
          <p className="section-description">
            Milestones and recognitions highlighting my dedication to excellence in research and analytics.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className={cn(
                "group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={award.image}
                  alt={award.title}
                  className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-md text-foreground shadow-sm flex gap-1.5 items-center px-3 py-1 text-xs">
                    <Trophy className="w-3.5 h-3.5 text-primary" />
                    {award.year}
                  </Badge>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors shrink-0"
                      title="View Project"
                    >
                      <ExternalLink className="h-4 w-4 text-primary" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {award.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
