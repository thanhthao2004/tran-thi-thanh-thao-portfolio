"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Lightbulb } from "lucide-react"
import { activities } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function ActivitiesSection() {
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
      id="activities"
      ref={sectionRef}
      className="section-shell bg-secondary/30"
    >
      <div className="section-container">
        {/* Section Header */}
        <div
          className={cn(
            "section-header transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium mb-2">Community & Events</p>
          <h2 className="section-title">
            Activities
          </h2>
          <p className="section-description">
            Contributing to the community through active participation in tech organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {activities.map((activity, index) => (
            <div
              key={activity.organization}
              className={cn(
                "p-6 bg-card border border-border rounded-xl transition-all duration-500 hover:border-primary/50",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
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

              <p className="text-muted-foreground text-sm mb-4 whitespace-pre-line">{activity.description}</p>

              {activity.image && (
                <div className="mb-4 rounded-lg overflow-hidden border border-border/50 max-w-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={activity.image} alt={activity.organization} className="w-full h-auto object-cover" />
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {activity.highlights && activity.highlights.map((highlight, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
