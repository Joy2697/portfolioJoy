"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

const experiences = [
  {
    title: "Software Engineer",
    company: "Bix Bytes Solutions Pvt Ltd",
    period: "Jun 2025 – Present",
    description:
      "Frontend-focused Software Engineer working on production-grade E-commerce applications. Driving performance optimization, scalable architecture, and quality improvements using modern React and Next.js ecosystems.",
    achievements: [
      "Optimized critical E-commerce user flows using React.js, Next.js, and TypeScript, reducing page load times by 38% and improving checkout completion rates by 22%, directly contributing to revenue growth.",
      "Implemented end-to-end automated testing with Jest and Cypress, increasing test coverage to 65%+ and reducing pre-production defects by 40%.",
      "Enhanced SSR and ISR strategies in Next.js, improving cache regeneration efficiency and reducing server load by 25% during high-traffic events.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Raasoft Infotech",
    period: "Jun 2022 – Jun 2025",
    description:
      "Frontend Engineer specializing in scalable UI systems and FinTech applications, focusing on performance, maintainability, and robust state management.",
    achievements: [
      "Engineered scalable front-end architectures using React.js, Redux Toolkit, and Material-UI for enterprise and FinTech applications.",
      "Improved UI rendering performance by 60% through component optimization, memoization, and dynamic code splitting.",
      "Integrated complex FinTech API workflows using Redux Toolkit and Axios, improving data consistency and reducing integration bugs by 40%.",
      "Collaborated closely with backend teams to design and consume RESTful APIs, improving overall system reliability.",
      "Built shared UI component libraries, improving developer productivity and reducing development time by 20%.",
      "Implemented automated test suites using Jest, reducing production regressions and ensuring smoother releases.",
    ],
  },
]


  return (
    <section id="experience" ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">Experience</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional journey and milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full ring-8 ring-background z-10" />

                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <div className="glass rounded-3xl p-8 hover:bg-primary/5 transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <p className="text-primary font-semibold mb-2">{exp.company}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
