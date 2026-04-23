"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react"
import { personalInfo } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30"
    >
      <div className="mx-auto max-w-4xl">
        <div
          className={cn(
            "text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium mb-2">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            {"Let's Work Together"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            {"I'm always interested in discussing new opportunities, data engineering challenges, or potential collaborations. Feel free to reach out!"}
          </p>

          {/* CTA Button */}
          <Button size="lg" asChild className="group mb-12">
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 h-5 w-5" />
              Send me an email
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-card border border-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
