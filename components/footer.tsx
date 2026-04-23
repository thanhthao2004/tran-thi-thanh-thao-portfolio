import { personalInfo, navLinks } from "@/lib/portfolio-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Name and Copyright */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-foreground mb-1">
              {personalInfo.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {currentYear} All rights reserved.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Location */}
          <p className="text-sm text-muted-foreground">
            Based in {personalInfo.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
