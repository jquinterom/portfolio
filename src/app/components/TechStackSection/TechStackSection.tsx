import { Database, Icon, Server, Smartphone } from "react-feather";
import { TechIcon } from "./TechIcon";
import { FaAndroid } from "react-icons/fa";
import {
  RiJavaFill,
  RiJavascriptFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiGraphql,
  SiJest,
  SiJetpackcompose,
  SiKotlin,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiReact,
  SiSqlite,
  SiStorybook,
  SiSupabase,
  SiTestinglibrary,
  SiTypescript,
  SiReactquery,
} from "react-icons/si";
import { BsAndroid, BsAndroid2, BsDatabase } from "react-icons/bs";
import { ImAndroid } from "react-icons/im";
import { LiaLaravel } from "react-icons/lia";
import { MdHttp } from "react-icons/md";

interface TechStackSectionType {
  name: string;
  icon: Icon;
  color: string;
}

interface TechStackSectionProps {
  frontend: TechStackSectionType[];
  android: TechStackSectionType[];
  backend: TechStackSectionType[];
}

const techStack: TechStackSectionProps = {
  frontend: [
    { name: "React", icon: SiReact, color: "text-blue-500" },
    { name: "Next.js", icon: RiNextjsLine, color: "text-gray-300" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "JavaScript", icon: RiJavascriptFill, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-cyan-400" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
    { name: "Storybook", icon: SiStorybook, color: "text-purple-600" },
    { name: "Jest", icon: SiJest, color: "text-red-600" },
    {
      name: "React Testing Library",
      icon: SiTestinglibrary,
      color: "text-red-400",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      color: "text-green-500",
    },
    {
      name: "TanStack Query",
      icon: SiReactquery,
      color: "text-green-500",
    },
  ],
  android: [
    { name: "Kotlin", icon: SiKotlin, color: "text-orange-500" },
    { name: "Java", icon: RiJavaFill, color: "text-orange-500" },
    {
      name: "Jetpack Compose",
      icon: SiJetpackcompose,
      color: "text-green-500",
    },
    { name: "Retrofit", icon: BsAndroid, color: "text-blue-400" },
    { name: "Hilt", icon: BsAndroid2, color: "text-teal-500" },
    { name: "Unit Testing", icon: FaAndroid, color: "text-yellow-600" },
    { name: "Mockito", icon: ImAndroid, color: "text-green-600" },
    { name: "Room", icon: BsDatabase, color: "text-green-200" },
    { name: "SQLite", icon: SiSqlite, color: "text-blue-300" },
  ],
  backend: [
    { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
    { name: "PHP", icon: SiPhp, color: "text-purple-400" },
    { name: "Eloquent", icon: LiaLaravel, color: "text-red-400" },
    { name: "Mysql", icon: SiMysql, color: "text-blue-500" },
    { name: "Rest Api", icon: MdHttp, color: "text-yellow-400" },
  ],
};

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="py-20 bg-slate-200 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Server className="mr-2" /> Front-end
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
              {techStack.frontend.map((tech) => (
                <TechIcon
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Smartphone className="mr-2" /> Android
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
              {techStack.android.map((tech) => (
                <TechIcon
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Database className="mr-2" /> Back-end
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
              {techStack.backend.map((tech) => (
                <TechIcon
                  key={tech.name}
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
