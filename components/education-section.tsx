"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"
import { education } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function EducationSection() {
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
      id="education"
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
          <p className="text-primary font-medium mb-2">Academic Background</p>
          <h2 className="section-title">
            Education
          </h2>
          <p className="section-description">
            Formal education in Information Systems with a focus on data, analytics and enterprise architecture.
          </p>
        </div>

        {/* Education Card */}
        <div
          className={cn(
            "bg-card border border-border rounded-2xl p-8 lg:p-10 transition-all duration-700 hover:border-primary/50",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="p-4 bg-primary/10 rounded-2xl flex-shrink-0 w-fit">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {education.university}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {education.degree}
                  </p>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1.5 w-fit">
                  <Calendar className="h-3 w-3" />
                  Expected {education.expectedGraduation}
                </Badge>
              </div>

              {/* GPA Highlight */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg mt-3">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  GPA: {education.gpa}
                </span>
                <span className="text-xs text-muted-foreground">
                  ({education.gpaNote})
                </span>
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="border-t border-border pt-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">
                Relevant Coursework
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, index) => (
                <div
                  key={course}
                  className={cn(
                    "px-4 py-2 bg-secondary/50 border border-border text-sm text-foreground rounded-lg transition-all duration-500 hover:border-primary/50 hover:bg-primary/5",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: isVisible ? `${index * 60}ms` : "0ms" }}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
