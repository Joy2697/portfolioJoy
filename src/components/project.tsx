"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

 const projects = [
  {
    title: "Rental Management Application",
    description:
      "A responsive rental management system enabling property listings, tenant management, and streamlined rental workflows with a focus on usability and performance.",
    image: "../assets/image.png",
    tech: ["React", "JavaScript (ES6+)", "Material-UI", "REST APIs"],

  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard featuring interactive data visualizations, charts, and performance metrics for business insights and decision-making.",
    image: "../assets/saas1.png",
    tech: ["React", "TypeScript", "Redux Toolkit", "Chart.js"],
  },
  {
    title: "Project Management System",
    description:
      "Collaborative project management platform with task tracking, kanban boards, and team workflows designed for productivity and scalability.",
    image: "../assets/PM Tool.png",
    tech: ["React", "TypeScript", "DnD Kit", "Zustand"], 
  },
];
  return (
    <section id="projects" ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden group hover:bg-primary/5 transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                 
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
