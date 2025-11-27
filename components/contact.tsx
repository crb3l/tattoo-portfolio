"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ArrowUpRight, Instagram } from "lucide-react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none">
        <span className="text-[25vw] font-bold text-foreground/[0.02] tracking-tighter leading-none translate-y-1/4">
          CONTACT
        </span>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-8 leading-[0.95]">
              LET'S CREATE
              <br />
              <span className="text-muted-foreground">SOMETHING</span>
              <br />
              PERMANENT
            </h2>

            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-12 max-w-md">
              Ready to transform your vision into art? Whether you have a clear concept or just the seed of an idea, I'm
              here to bring it to life.
            </p>

            {/* Contact info */}
            <div className="space-y-4 mb-12">
              <a href="mailto:nero@neroink.com" className="group flex items-center gap-4">
                <span className="font-mono text-sm text-muted-foreground">Email</span>
                <span className="flex-1 h-px bg-border" />
                <span className="font-mono text-sm text-foreground group-hover:text-muted-foreground transition-colors">
                  nero@neroink.com
                </span>
              </a>
              <a href="#" className="group flex items-center gap-4">
                <span className="font-mono text-sm text-muted-foreground">Instagram</span>
                <span className="flex-1 h-px bg-border" />
                <span className="font-mono text-sm text-foreground group-hover:text-muted-foreground transition-colors">
                  @nero.ink
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-muted-foreground">Location</span>
                <span className="flex-1 h-px bg-border" />
                <span className="font-mono text-sm text-foreground">Los Angeles, CA</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:border-foreground group transition-all duration-300"
              >
                <Instagram className="text-foreground group-hover:text-background transition-colors" size={18} />
              </a>
              <a
                href="#"
                className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:border-foreground group transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-foreground group-hover:text-background transition-colors"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`font-mono text-[10px] uppercase tracking-[0.3em] absolute left-0 transition-all duration-300 ${
                    focusedField === "name" || formState.name ? "-top-6 text-foreground" : "top-3 text-muted-foreground"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground focus:outline-none transition-colors duration-300 font-mono text-sm"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className={`font-mono text-[10px] uppercase tracking-[0.3em] absolute left-0 transition-all duration-300 ${
                    focusedField === "email" || formState.email
                      ? "-top-6 text-foreground"
                      : "top-3 text-muted-foreground"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground focus:outline-none transition-colors duration-300 font-mono text-sm"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className={`font-mono text-[10px] uppercase tracking-[0.3em] absolute left-0 transition-all duration-300 ${
                    focusedField === "message" || formState.message
                      ? "-top-6 text-foreground"
                      : "top-3 text-muted-foreground"
                  }`}
                >
                  Tell Me About Your Idea
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-foreground focus:outline-none transition-colors duration-300 resize-none font-mono text-sm"
                />
              </div>

              <button
                type="submit"
                className="group w-full py-5 bg-foreground text-background font-mono text-xs uppercase tracking-[0.3em] hover:bg-muted-foreground transition-all duration-300 flex items-center justify-center gap-3"
              >
                Send Message
                <ArrowUpRight
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={16}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
