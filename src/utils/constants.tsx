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
    image: '/images/project1.jpg?height=200&width=300',
    tech: techProjects.Android,
  },
  {
    image: '/images/project2.jpg?height=200&width=300',
    tech: techProjects.Laravel,
  },
  {
    image: '/images/project3.jpg?height=200&width=300',
    tech: techProjects.NextJs,
  },
]

export const sections = ['home', 'projects', 'skills', 'tech-stack']