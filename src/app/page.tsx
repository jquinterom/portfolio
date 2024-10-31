'use client'

import { useEffect, useState } from "react";
import useThemeProvider from "./hooks/useThemeProvider";
import { motion } from 'framer-motion'
import { ChevronDown, Linkedin, Youtube, GitHub, Server, Database, Smartphone, Mail, Moon, Sun } from "react-feather"


const TechIcon = ({ name, color, children }: { name: string, color: string, children: React.ReactNode }) => (
  <div className="flex flex-col items-center">
    <div className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white mb-1`}>
      {children}
    </div>
    <span className="text-xs text-center">{name}</span>
  </div>
)



export default function Home() {
  const { theme, toggleTheme } = useThemeProvider()

  const [activeSection, setActiveSection] = useState('home')

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

  const handleClickOnMail = () => {
    const mailtoLink = `mailto:jfqm7710@gmail.com`;
    window.location.href = mailtoLink;
  };

  const techStack = {
    frontend: [
      { name: 'React', icon: "svg", color: 'bg-blue-500' },
      { name: 'Next.js', icon: 'Nj', color: 'bg-black' },
      { name: 'TypeScript', icon: 'Ts', color: 'bg-blue-600' },
      { name: 'JavaScript', icon: 'Js', color: 'bg-yellow-400' },
      { name: 'Tailwind CSS', icon: 'Tw', color: 'bg-cyan-400' },
      { name: 'GraphQL', icon: 'Gq', color: 'bg-pink-600' },
      { name: 'Storybook', icon: 'Sb', color: 'bg-purple-600' },
      { name: 'Jest', icon: 'Je', color: 'bg-red-600' },
      { name: 'React Testing Library', icon: 'Rtl', color: 'bg-red-400' },
    ],
    android: [
      { name: 'Kotlin', icon: 'Kt', color: 'bg-orange-500' },
      { name: 'Jetpack Compose', icon: 'Jc', color: 'bg-green-500' },
      { name: 'Retrofit', icon: 'Rt', color: 'bg-blue-400' },
      { name: 'Hilt', icon: 'Hi', color: 'bg-teal-500' },
      { name: 'Unit Testing', icon: 'Ut', color: 'bg-yellow-600' },
      { name: 'Mockito', icon: 'Mo', color: 'bg-green-600' },
      { name: 'SQLite', icon: 'Sq', color: 'bg-blue-300' },
    ],
    backend: [
      { name: 'Laravel', icon: 'Lv', color: 'bg-red-500' },
      { name: 'PHP', icon: 'Php', color: 'bg-purple-400' },
      { name: 'Eloquent', icon: 'El', color: 'bg-red-400' },
    ],
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
              Front-end & Android Developer
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

        <section id="projects" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Project 1', description: 'A React.js web application', image: '/placeholder.svg?height=200&width=300' },
                { title: 'Project 2', description: 'An Android app built with Kotlin', image: '/placeholder.svg?height=200&width=300' },
                { title: 'Project 3', description: 'A responsive website', image: '/placeholder.svg?height=200&width=300' },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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

      <footer id="footer" className="bg-slate-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Your Name. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/jquinterom" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <GitHub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/jquinterom" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@commondev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
            <span onClick={handleClickOnMail} className="text-gray-400 hover:text-white transition-colors hover:cursor-pointer">
              <Mail size={24} />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
