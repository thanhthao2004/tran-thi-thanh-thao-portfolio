"use client"

import Image from "next/image"
import { ArrowDown, FileText, Briefcase, GraduationCap, MapPin, Database, LineChart } from "lucide-react"
import { personalInfo, education } from "@/lib/portfolio-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  const handleScrollToWork = () => {
    const element = document.querySelector("#featured")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary/20 blur-sm opacity-80 animate-spin" style={{ animationDuration: "6s" }} />
            {/* Solid ring */}
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary to-primary/30" />
            {/* Avatar image */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-background">
              <Image
                src="/tran-thi-thanh-thao-portfolio/image/avatar.jpeg"
                alt="Tran Thi Thanh Thao"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Online indicator */}
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 border-2 border-background rounded-full" />
          </div>
        </div>

        {/* Greeting */}
        <p className="text-primary font-medium mb-3 tracking-wide">
          Hello, I&apos;m
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
          {personalInfo.name}
        </h1>

        {/* Title badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <Badge className="text-sm bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 flex items-center gap-1.5"><Database className="h-3.5 w-3.5" /> Data Engineer</Badge>
          <span className="text-muted-foreground">·</span>
          <Badge className="text-sm bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30 flex items-center gap-1.5"><LineChart className="h-3.5 w-3.5" /> Data Analyst</Badge>
          <span className="text-muted-foreground">·</span>
          <Badge className="text-sm bg-violet-500/20 text-violet-300 border-violet-500/30 hover:bg-violet-500/30 flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> Business Analyst</Badge>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-5">
          <MapPin className="h-4 w-4" />
          <span>{personalInfo.location}</span>
        </div>

        {/* Education Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground">{education.university}</span>
          </div>
          <Badge variant="secondary" className="text-sm">
            {education.degree} | GPA: {education.gpa}
          </Badge>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-10 text-pretty">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleScrollToWork}
            className="group"
          >
            <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <a href={`mailto:${personalInfo.email}`}>
              <FileText className="mr-2 h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToWork}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  )
}
