"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "React", level: 95 },
    { name: "Next.js", level: 92 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 98 },
    { name: "Tailwind CSS", level: 93 },
    { name: "Redux", level: 88 },
    { name: "Framer Motion", level: 85 },
    { name: "Jest", level: 82 },
    { name: "Git", level: 90 },
    { name: "Webpack", level: 80 },
    { name: "Sass/SCSS", level: 87 },
    { name: "Vue.js", level: 75 },
    { name: "Cypress", level: 80 },
    { name: "React Query", level: 85 },
    { name: "Figma", level: 88 },
  ]

  return (
    <section id="skills" ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">Skills & Expertise</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mastering the tools and technologies that power modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                {/* Background circle */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-primary/10"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    animate={
                      isInView
                        ? {
                            strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100),
                          }
                        : {}
                    }
                    transition={{ duration: 1.5, delay: index * 0.05, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#14b8a6" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Percentage text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    className="text-lg sm:text-xl font-bold gradient-text"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 + 0.5 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
