import { FaAndroid, FaLaravel } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { type ProjectType } from "./types";

export const techProjects = {
  NextJs: <RiNextjsFill size={24} />,
  Android: <FaAndroid size={24} />,
  Laravel: <FaLaravel size={24} />,
};

export const projects: ProjectType[] = [
  {
    id: 1,
    image: "/images/project1.jpg",
    tech: techProjects.Android,
    index: "first-project",
  },
  {
    id: 2,
    image: "/images/project2.jpg",
    tech: techProjects.Laravel,
    urlProduction: "https://naranjaerp.com/",
    index: "second-project",
  },
  {
    id: 3,
    image: "/images/project3.jpg",
    tech: techProjects.NextJs,
    index: "third-project",
  },
  {
    id: 4,
    image: "/images/project4.png",
    tech: techProjects.NextJs,
    github: "https://github.com/jquinterom/seek-todo",
    urlProduction: "https://seek-todo.vercel.app/",
    index: "fourth-project",
  },
  {
    id: 5,
    image: "/images/project5.png",
    tech: techProjects.NextJs,
    github: "https://github.com/jquinterom/shop-gadget-admin",
    urlProduction: "https://gadget-shop-omega.vercel.app/",
    index: "fifth-project",
  },
  {
    id: 6,
    image: "/images/project6.png",
    tech: techProjects.Android,
    github: "https://github.com/jquinterom/rn-shop",
    index: "sixth-project",
  },
  {
    id: 7,
    image: "/images/project7.png",
    tech: techProjects.NextJs,
    github: "https://github.com/jquinterom/tickets",
    urlProduction: "https://tickets-ten.vercel.app/",
    index: "seventh-project",
  },
  {
    id: 8,
    image: "/images/project8.png",
    tech: techProjects.Laravel,
    github: "https://github.com/jquinterom/instacamp",
    index: "eighth-project",
  },
  {
    id: 9,
    image: "/images/project9.png",
    tech: techProjects.Android,
    github: "https://github.com/jquinterom/nearbyparking",
    index: "ninth-project",
  },
  {
    id: 10,
    image: "/images/project10.png",
    tech: techProjects.NextJs,
    github: "https://github.com/jquinterom/nearby-parking-web",
    index: "tenth-project",
    urlProduction: "https://nearby-parking-web.vercel.app/",
  },
];

export const sections = ["home", "projects", "skills", "tech-stack"];

export const skills = [
  "React.js",
  "Next.js",
  "Android Development",
  "React Native",
  "Laravel",
  "Mysql",
];
