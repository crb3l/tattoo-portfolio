"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { X, ArrowUpRight } from "lucide-react"

const artworks = [
  {
    id: 1,
    src: "/black-and-grey-realistic-lion-portrait-tattoo-high.jpg",
    title: "Lion Portrait",
    category: "Realism",
  },
  {
    id: 2,
    src: "/black-and-grey-skull-with-roses-tattoo-hyperrealis.jpg",
    title: "Memento Mori",
    category: "Dark Art",
  },
  {
    id: 3,
    src: "/black-and-grey-female-portrait-tattoo-photorealist.jpg",
    title: "Portrait Study",
    category: "Portraits",
  },
  {
    id: 4,
    src: "/black-and-grey-wolf-tattoo-realistic-nature-dramat.jpg",
    title: "Alpha Wolf",
    category: "Realism",
  },
  {
    id: 5,
    src: "/black-and-grey-eye-tattoo-hyperrealistic-detail-ma.jpg",
    title: "The Watcher",
    category: "Dark Art",
  },
  {
    id: 6,
    src: "/black-and-grey-hand-skeleton-tattoo-anatomical-det.jpg",
    title: "Anatomy",
    category: "Realism",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
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
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Selected Works</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              THE
              <br />
              PORTFOLIO
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-md leading-relaxed">
            Each piece is a collaboration between artist and client, transforming ideas into permanent art that speaks
            volumes in shades of black and grey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              onClick={() => setSelectedImage(artwork.id)}
              className={cn(
                "group relative cursor-pointer overflow-hidden transition-all duration-700",
                index === 0 ? "md:col-span-2 md:row-span-2" : "",
                index === 3 ? "md:col-span-2" : "",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={cn("relative overflow-hidden", index === 0 ? "aspect-square" : "aspect-[4/5]")}>
                <img
                  src={artwork.src || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500" />

                {/* Content on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                        {artwork.category}
                      </p>
                      <h3 className="text-2xl font-bold text-foreground tracking-tight">{artwork.title}</h3>
                    </div>
                    <div className="w-12 h-12 border border-foreground flex items-center justify-center group-hover:bg-foreground transition-all duration-300">
                      <ArrowUpRight
                        className="text-foreground group-hover:text-background transition-colors"
                        size={20}
                      />
                    </div>
                  </div>
                </div>

                {/* Number badge */}
                <div className="absolute top-6 left-6 font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 border border-foreground flex items-center justify-center hover:bg-foreground group transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="text-foreground group-hover:text-background transition-colors" size={20} />
          </button>

          <div className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const artwork = artworks.find((art) => art.id === selectedImage)
              return artwork ? (
                <div className="relative">
                  <img
                    src={artwork.src || "/placeholder.svg"}
                    alt={artwork.title}
                    className="max-h-[85vh] mx-auto object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                      {artwork.category}
                    </p>
                    <h3 className="text-xl font-bold text-foreground">{artwork.title}</h3>
                  </div>
                </div>
              ) : null
            })()}
          </div>
        </div>
      )}
    </section>
  )
}
