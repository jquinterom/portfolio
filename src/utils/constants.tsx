import { FaAndroid, FaLaravel } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { ProjectType } from "./types"

const techProjects = {
  'NextJs': <RiNextjsFill size={24} />,
  'Android': <FaAndroid size={24} />,
  'Laravel': <FaLaravel size={24} />,
}


export const projects: ProjectType[] = [
  {
    title: 'AppSurgas',
    image: 'images/project1.jpg?height=200&width=300',
    tech: techProjects.Android,
    description: 'AppSurgas es una aplicación para Android construida para toma de lecturas de contadores de gas, la aplicación contaba con módulos de verificación de lectura, notificaciones de lectura incorrecta entre muchas funciones más.'
  },
  {
    title: 'Naranja ERP - POS',
    image: '/images/project2.jpg?height=200&width=300',
    tech: techProjects.Laravel,
    description: 'Aplicación para llevar registros de inventario, clientes, usuarios, reportes y más.'
  },
  {
    title: 'Private - Artificial intelligent',
    image: '/images/project3.jpg?height=200&width=300',
    tech: techProjects.NextJs,
    description: 'Aplicación web para el manejo de gran cantidad de multimedia procesada por inteligencia artificial. En esta aplicación se aplicó la estructura tipo atomic design para mantener componentes reutilizables.',
  },
]

export const sections = ['home', 'projects', 'skills', 'tech-stack']