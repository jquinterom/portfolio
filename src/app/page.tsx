'use client'

import { useEffect, useState } from "react";
import useThemeProvider from "./hooks/useThemeProvider";
import { motion } from 'framer-motion'
import {
  ChevronDown,
  Server,
  Database,
  Smartphone,
  Moon,
  Sun
} from "react-feather"
import { techStack } from "@/utils/constants";
import { TechIcon } from "./components/TechIcon";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  const { theme, toggleTheme } = useThemeProvider()

  const [activeSection, setActiveSection] = useState('home')
  const developText = "< Front-end & Android Developer />"

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'tech-stack']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white bg-slate-100 text-black">
      <header className="fixed top-0 left-0 right-0 z-50  bg-opacity-90 backdrop-blur-sm">

        <button onClick={toggleTheme} className="p-2 absolute top-2 right-2 rounded-full  transition-colors">
          {theme === 'light' ? <Moon /> : <Sun />}
        </button>

        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {['Home', 'Skills', 'Projects', 'Tech Stack'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`text-lg font-semibold hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase().replace(' ', '-') ? 'text-blue-400' : ''
                    }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              Jhon Quintero
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl dark:text-gray-300 mb-8"
            >
              {developText}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-lg dark:text-gray-300 mt-6 mb-8 px-4"
            >
              Ingeniero de sistemas y desarrollador enfocado en tecnologías frontend/android/backend con experiencia en React Js, Jetpack compose y Laravel. Me apasiona crear aplicaciones efectivas, optimizar procesos, y ofrecer soluciones que impacten positivamente a los clientes. Adicionalmente, soy un entusiasta del aprendizaje continuo y empírico, por lo general, estoy actualizando mi conocimiento sobre las áreas que me llaman la atención.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('footer')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                Get in touch
              </button>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} />
          </div>
        </section>

        <section id="skills" className="py-20 bg-slate-200 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['React.js', 'Kotlin', 'JavaScript', 'HTML/CSS', 'Android Development', 'Responsive Design', 'Git', 'UI/UX'].map((skill) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-colors"
                >
                  <h3 className="text-xl font-semibold">{skill}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection />

        <section id="tech-stack" className="py-20 bg-slate-200 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center"><Server className="mr-2" /> Front-end</h3>
                <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
                  {techStack.frontend.map((tech) => (
                    <TechIcon key={tech.name} name={tech.name} color={tech.color}>
                      {typeof tech.icon === 'string' ? tech.icon : tech.icon}
                    </TechIcon>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center"><Smartphone className="mr-2" /> Android</h3>
                <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
                  {techStack.android.map((tech) => (
                    <TechIcon key={tech.name} name={tech.name} color={tech.color}>
                      {tech.icon}
                    </TechIcon>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6 flex items-center"><Database className="mr-2" /> Back-end</h3>
                <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
                  {techStack.backend.map((tech) => (
                    <TechIcon key={tech.name} name={tech.name} color={tech.color}>
                      {tech.icon}
                    </TechIcon>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}