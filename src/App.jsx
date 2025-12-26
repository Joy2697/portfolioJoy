import { useState } from 'react'
import { Navigation } from './components/navigation'
import { FloatingOrbs } from './components/floating-orbs'
import { Hero } from './components/hero'
import { Skills } from './components/skills'
import { Projects } from './components/project'
import { Experience } from './components/experiance'
import { Contact } from './components/contact'
import { About } from './components/about'

function App() {

  return (
    <>
    <main className="relative min-h-screen animated-gradient">
      <FloatingOrbs/>
      <Navigation />
      <Hero />
      <About/>
      <Skills />
      <Experience />  
      <Projects />
      <Contact />
      
      </main>

      </>
  )
}

export default App
