import { FaAndroid, FaLaravel } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { ProjectType } from "./types";

const techProjects = {
  NextJs: <RiNextjsFill size={24} />,
  Android: <FaAndroid size={24} />,
  Laravel: <FaLaravel size={24} />,
};

export const projects: ProjectType[] = [
  {
    image: "/images/project1.jpg",
    tech: techProjects.Android,
  },
  {
    image: "/images/project2.jpg",
    tech: techProjects.Laravel,
    urlProduction: "https://naranjaerp.com/",
  },
  {
    image: "/images/project3.jpg",
    tech: techProjects.NextJs,
  },
  {
    image: "/images/project4.png",
    tech: techProjects.NextJs,
    github: "https://github.com/jquinterom/seek-todo",
    urlProduction: "https://seek-todo.vercel.app/",
  },
  {
    image: "/images/project5.png",
    tech: techProjects.NextJs,
    github: "https://github.com/jquinterom/shop-gadget-admin",
    urlProduction: "https://gadget-shop-omega.vercel.app/",
  },
  {
    image: "/images/project6.png",
    tech: techProjects.Android,
    github: "https://github.com/jquinterom/rn-shop",
  },
];

export const sections = ["home", "projects", "skills", "tech-stack"];

export const skills = [
  "React.js",
  "React Native",
  "Next.js",
  "Android Development",
  "Laravel",
  "Mysql",
];
