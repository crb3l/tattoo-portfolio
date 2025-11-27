"use client"

export function Marquee() {
  const items = ["REALISM", "PORTRAITS", "DARK ART", "CUSTOM DESIGNS", "BLACK & GREY", "FINE DETAIL"]

  return (
    <div className="py-6 bg-foreground overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="font-mono text-sm uppercase tracking-[0.3em] text-background mx-8 inline-flex items-center gap-8"
          >
            {item}
            <span className="w-2 h-2 bg-background rounded-full" />
          </span>
        ))}
      </div>
    </div>
  )
}
