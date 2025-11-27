"use client"

import { useEffect, useState, useRef } from "react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      >
        <img
          src="/black-and-white-hyperrealistic-tattoo-sleeve-close.jpg"
          alt="Tattoo artwork"
          className="w-full h-full object-cover opacity-30 scale-110 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="overflow-hidden">
          <h1
            className={`text-[15vw] md:text-[12vw] font-bold leading-[0.85] tracking-tighter text-foreground transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
          >
            BLACK
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1
            className={`text-[15vw] md:text-[12vw] font-bold leading-[0.85] tracking-tighter text-foreground transition-all duration-1000 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
          >
            &amp; GREY
          </h1>
        </div>
        <div className="overflow-hidden mt-4">
          <p
            className={`font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
              }`}
          >
            Hyperrealistic Tattoo Art
          </p>
        </div>

        <div
          className={`absolute right-6 md:right-12 top-1/2 -translate-y-1/2 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
        >
          <div className="flex flex-col items-end gap-4">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground writing-mode-vertical rotate-180"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll to explore
            </span>
            <div className="w-px h-24 bg-muted-foreground/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-foreground animate-pulse" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`bottom-12 left-6 md:left-12 flex gap-12 transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="">
            <span className="font-mono text-4xl md:text-5xl font-bold text-foreground">12+</span>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Years</p>
          </div>
          <div>
            <span className="font-mono text-4xl md:text-5xl font-bold text-foreground">3K+</span>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">Pieces</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border">
        <div
          className={`h-full bg-foreground transition-all duration-1500 ${isLoaded ? "w-full" : "w-0"}`}
          style={{ transitionDelay: "1s" }}
        />
      </div>
    </section>
  )
}
