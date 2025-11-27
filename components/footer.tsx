"use client"

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 bg-background border-t border-border">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-mono text-lg font-bold tracking-tighter text-foreground uppercase">
            CIPRI
          </a>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#gallery"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href="#about"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="flex flex-col">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              © {new Date().getFullYear()} Ciprian Munteanu Tattoo
            </p>
            <div className="flex items-center justify-center">
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground">
                Made with love by{" "}
                <a
                  href="https://portfolio.treideee.ro"
                  className="inline font-mono text-[8px] uppercase tracking-[0.2em] text-muted-background flex items-center justify-center hover:text-yellow  group transition-all duration-300"> {/*hover:bg-yellow hover:border-yellow hover:rounded-[4] add this if border is wanted*/}
                  Theodor Ionică
                </a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
