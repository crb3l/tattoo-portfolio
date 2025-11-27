"use client"

import { useEffect, useState } from "react"

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative">
        <span className="font-mono text-8xl md:text-9xl font-bold text-foreground tracking-tighter">
          {Math.min(Math.floor(progress), 100)}
        </span>
        <span className="font-mono text-2xl text-muted-foreground absolute -right-8 top-0">%</span>
      </div>
      <div className="w-48 h-px bg-muted mt-8 overflow-hidden">
        <div
          className="h-full bg-foreground transition-all duration-300"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="font-mono text-xs text-muted-foreground mt-4 uppercase tracking-[0.3em]">Loading</p>
    </div>
  )
}
