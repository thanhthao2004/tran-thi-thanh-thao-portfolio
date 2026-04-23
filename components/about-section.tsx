"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { about, personalInfo } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code2, Users, Sparkles, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const storyIcons = {
  graduation: GraduationCap,
  code: Code2,
  people: Users,
}

export function AboutSection() {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={cn(
            "mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary tracking-wide uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance max-w-3xl">
            {about.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Col 1: Avatar + Identity Card */}
          <div
            className={cn(
              "transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            )}
          >
            <div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center text-center gap-4">
              {/* Avatar */}
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary/60 to-primary/10" />
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-background">
                  <Image
                    src="/image/avatar.jpeg"
                    alt="Tran Thi Thanh Thao"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <p className="font-bold text-lg text-foreground">{personalInfo.name}</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Quick stat chips */}
              <div className="grid grid-cols-2 gap-2 w-full pt-2 border-t border-border">
                {about.highlights.map((h) => (
                  <div key={h.label} className="bg-background/50 rounded-lg p-2.5 text-center">
                    <p className="text-xl font-bold text-primary">{h.value}</p>
                    <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">{h.label}</p>
                  </div>
                ))}
              </div>

              {/* Focus tags */}
              <div className="flex flex-wrap gap-1.5 justify-center pt-1">
                {about.focus.map((area) => (
                  <Badge
                    key={area}
                    variant="secondary"
                    className="text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2–3: Story moments */}
          <div
            className={cn(
              "lg:col-span-2 flex flex-col gap-5 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
            )}
          >
            {about.story.map((item, index) => {
              const Icon = storyIcons[item.icon as keyof typeof storyIcons] || Code2
              return (
                <div
                  key={item.title}
                  className={cn(
                    "flex items-start gap-5 p-5 bg-card border border-border rounded-xl hover:border-primary/40 transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                  )}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              )
            })}

            {/* Bottom CTA row */}
            <div
              className={cn(
                "mt-2 p-5 bg-primary/5 border border-primary/20 rounded-xl transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Open to opportunities</span> — looking for roles in data engineering, analytics and business analysis. Available from{" "}
                <span className="text-primary font-medium">Aug 2026</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
