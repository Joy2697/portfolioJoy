"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Twitter, MessageCircle } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary text-lg sm:text-xl font-medium"
            >
              {"Hello I,m"}
            </motion.p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold gradient-text">Frontend Developer</h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Crafting exceptional digital experiences with <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-primary font-semibold">Next.js</span>, and modern web technologies
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25"
            >
              View My Work
            </button>

            <a
              href="#contact"
              className="px-8 py-4 glass rounded-xl font-semibold text-lg hover:scale-105 transition-transform"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            {[

              { Icon: FaLinkedin, href: "https://linkedin.com" },
              { Icon: FaWhatsapp, href: "https://wa.me/918105409926" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.button>
    </section>
  )
}
