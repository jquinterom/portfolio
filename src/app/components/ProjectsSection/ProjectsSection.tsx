import { projects, techProjects } from "@/utils/constants";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";
import ProjectFilter from "./ProjectFilter";
import { useState } from "react";

const ProjectsSection = () => {
  const t = useTranslations("ProjectsSection");
  const [projectsFilter, setProjectsFilter] = useState(projects);

  const getProjectProps = (index: string) => {
    const randomText = `cards.${index}`;
    return {
      title: t(`${randomText}.title`),
      description: t(`${randomText}.description`),
    };
  };

  const handleOnFilterChange = (element: string) => {
    if (element === "all") return setProjectsFilter(projects);

    const tech = techProjects[element as keyof typeof techProjects];
    const newProjects = projects.filter((project) => project.tech === tech);
    setProjectsFilter(newProjects);
  };

  return (
    <section id="projects" className="py-20 bg-slate-200 dark:bg-gray-800">
      <div className="container mx-auto px-6 space-y-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("title")}</h2>
        <ProjectFilter handleOnFilterChange={handleOnFilterChange} />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsFilter
            .sort((a, b) => b.id - a.id)
            .map((project, index) => {
              const { title, description } = getProjectProps(
                project.index || ""
              );

              return (
                <ProjectCard
                  key={index}
                  index={index}
                  title={title}
                  description={description}
                  project={project}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
