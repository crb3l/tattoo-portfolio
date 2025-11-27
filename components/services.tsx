"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Custom Realism",
    description: "Photorealistic portraits and imagery brought to life in stunning black and grey detail.",
  },
  {
    number: "02",
    title: "Cover-Up Work",
    description: "Transform old tattoos into new masterpieces. Specializing in challenging cover-ups.",
  },
  {
    number: "03",
    title: "Large Scale",
    description: "Full sleeves, back pieces, and ambitious projects executed with patience and precision.",
  },
  {
    number: "04",
    title: "Consultations",
    description: "In-depth discussions to understand your vision and plan the perfect piece.",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What I Do</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">SERVICES</h2>
        </div>

        <div className="border-t border-border">
          {services.map((service, index) => (
            <div
              key={service.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group border-b border-border py-8 md:py-12 cursor-pointer transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-6 md:gap-12">
                  <span
                    className={`font-mono text-sm text-muted-foreground transition-all duration-300 ${
                      hoveredIndex === index ? "text-foreground" : ""
                    }`}
                  >
                    {service.number}
                  </span>
                  <h3
                    className={`text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-300 ${
                      hoveredIndex === index ? "text-foreground translate-x-4" : "text-muted-foreground"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="flex items-center gap-8">
                  <p
                    className={`hidden lg:block font-mono text-sm text-muted-foreground max-w-xs transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {service.description}
                  </p>
                  <div
                    className={`w-12 h-12 border border-border flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === index ? "bg-foreground border-foreground" : ""
                    }`}
                  >
                    <ArrowRight
                      className={`transition-all duration-300 ${
                        hoveredIndex === index ? "text-background translate-x-1" : "text-muted-foreground"
                      }`}
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
