"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Rocket, Users, Zap } from "lucide-react"

export function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const highlights = [
        {
            icon: Code2,
            title: "3+ Years",
            description: "Professional Experience",
        },
        {
  icon: Rocket,
  title: "Clean Architecture",
  description: "Maintainable & Scalable UI",
},
        {
            icon: Users,
            title: "Client Focused",
            description: "User-Centric Design",
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Optimization Expert",
        },
    ]

    return (
        <section id="about" ref={ref} className="relative py-20 sm:py-32 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-6">About Me</h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Passionate about creating pixel-perfect, accessible, and performant web applications
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass rounded-3xl p-8 sm:p-12 space-y-6"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Building the Future of Web</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            As a Frontend Engineer with 3.7+ years of professional experience, I specialize in building scalable,
                            high-performance, and production-ready web applications using React, Next.js, and TypeScript.
                        </p>

                        <p className="text-muted-foreground leading-relaxed text-lg">
                            I bring strong expertise in performance optimization, component-driven architecture, and state
                            management with Redux Toolkit. I focus on writing clean, maintainable code that improves user
                            experience, reduces load times, and scales efficiently as products grow.
                        </p>

                        <p className="text-muted-foreground leading-relaxed text-lg">
                            If hired, I contribute by improving frontend performance, enforcing best practices, collaborating
                            closely with backend teams, and delivering reliable, business-focused UI solutions that directly
                            impact user engagement and product success.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                className="glass rounded-2xl p-6 text-center hover:bg-primary/10 transition-all hover:scale-105"
                            >
                                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
