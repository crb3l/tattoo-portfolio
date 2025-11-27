"use client"

import { useEffect, useState } from "react"

export function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const handlePointerChange = () => {
      const target = document.elementFromPoint(position.x, position.y) as HTMLElement
      if (target) {
        const computedStyle = window.getComputedStyle(target)
        setIsPointer(computedStyle.cursor === "pointer" || target.tagName === "A" || target.tagName === "BUTTON")
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseover", handlePointerChange)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseover", handlePointerChange)
    }
  }, [position.x, position.y])

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-300 ease-out ${
            isPointer ? "w-12 h-12 opacity-50" : "w-3 h-3 opacity-100"
          } ${isVisible ? "scale-100" : "scale-0"}`}
        />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] hidden md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full border border-white/30 transition-all duration-500 ease-out ${
            isPointer ? "w-16 h-16" : "w-8 h-8"
          } ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        />
      </div>
    </>
  )
}
