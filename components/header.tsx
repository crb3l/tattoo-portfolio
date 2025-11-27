"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Work", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 mix-blend-difference",
        isScrolled ? "py-4" : "py-6",
      )}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <nav className="flex items-center justify-between">
          <a href="#" className="group relative">
            <span className="font-mono text-xl md:text-2xl font-bold tracking-tighter text-white uppercase">NERO</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-white relative group overflow-hidden block"
                >
                  <span className="relative z-10 transition-transform duration-300 block group-hover:-translate-y-full">
                    {item.label}
                  </span>
                  <span className="absolute inset-0 z-10 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:block font-mono text-xs uppercase tracking-[0.2em] text-white relative group"
          >
            <span className="relative z-10">Let's Talk</span>
            <span className="absolute -bottom-1 left-0 w-full h-px bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white relative z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-700 md:hidden",
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          )}
        >
          <ul className="flex flex-col items-center gap-8">
            {navItems.map((item, index) => (
              <li
                key={item.label}
                className={`transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-3xl uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
