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
    image: '/images/project1.jpg',
    tech: techProjects.Android,
  },
  {
    image: '/images/project2.jpg',
    tech: techProjects.Laravel,
  },
  {
    image: '/images/project3.jpg',
    tech: techProjects.NextJs,
  },
]

export const sections = ['home', 'projects', 'skills', 'tech-stack']

export const skills = ['React.js', 'Android Development', 'Laravel', 'Mysql',]  