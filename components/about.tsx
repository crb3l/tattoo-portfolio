"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[30vw] font-bold text-foreground/[0.02] tracking-tighter">NERO</span>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src="/tattoo-artist-portrait-black-and-white-dramatic-li.jpg"
                alt="Artist at work"
                className="w-full h-full object-cover grayscale"
              />
              {/* Frame decoration */}
              <div className="absolute top-4 left-4 w-full h-full border border-foreground/20 -z-10" />
            </div>

            {/* Floating badge */}
            <div
              className={`absolute -bottom-6 -right-6 bg-foreground text-background p-6 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="font-mono text-4xl font-bold">12+</span>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] mt-1">Years of Craft</p>
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">About the Artist</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-8 leading-[0.95]">
              EVERY MARK
              <br />
              <span className="text-muted-foreground">TELLS A STORY</span>
            </h2>

            <div className="space-y-6 font-mono text-sm text-muted-foreground leading-relaxed">
              <p>
                I've dedicated my career to mastering the art of black and grey realism. Every tattoo is more than
                ink—it's a piece of someone's story permanently etched into their skin.
              </p>
              <p>
                My approach combines traditional techniques with modern precision. I believe in pushing boundaries while
                respecting the craft, creating pieces that age beautifully and stand the test of time.
              </p>
            </div>

            {/* Signature element */}
            <div className="mt-12 pt-12 border-t border-border">
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-3xl font-bold text-foreground">Nero</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Lead Artist & Founder
                  </p>
                </div>
                <div className="flex-1 h-px bg-border" />
                <div className="font-mono text-6xl font-bold text-foreground/10">N</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
