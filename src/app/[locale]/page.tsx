"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import HomeSection from "../components/HomeSection";
import SkillsSection from "../components/SkillsSection";
import TechStackSection from "../components/TechStackSection/TechStackSection";
import Nav from "../components/Nav";
import ToggleTheme from "../components/common/ToggleTheme";
import LocalSwitcher from "../components/common/LocalSwitcher";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "projects", "skills", "tech-stack"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white bg-slate-100 text-black">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute top-2 right-2 flex space-x-4 justify-center items-center">
          <LocalSwitcher />
          <ToggleTheme />
        </div>
        <Nav activeSection={activeSection} />
      </header>

      <main>
        <HomeSection />

        <ProjectsSection />

        <SkillsSection />

        <TechStackSection />
      </main>

      <Footer />
    </div>
  );
}
