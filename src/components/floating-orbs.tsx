"use client"

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Orb 1 - Large cyan */}
      <div
        className="orb-1 absolute top-20 left-10 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.18 195) 0%, transparent 70%)",
        }}
      />

      {/* Orb 2 - Medium teal */}
      <div
        className="orb-2 absolute top-1/3 right-20 w-80 h-80 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.60 0.20 180) 0%, transparent 70%)",
        }}
      />

      {/* Orb 3 - Large blue-cyan */}
      <div
        className="orb-3 absolute bottom-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.15 200) 0%, transparent 70%)",
        }}
      />

      {/* Orb 4 - Small accent */}
      <div
        className="orb-1 absolute bottom-40 right-1/4 w-64 h-64 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.70 0.16 185) 0%, transparent 70%)",
        }}
      />
    </div>
  )
}
