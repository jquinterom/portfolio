import { projects } from "@/utils/constants";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";

function ProjectProps(index: string) {
  const t = useTranslations("ProjectsSection");

  const randomText = `cards.${index}`;

  return {
    title: t(`${randomText}.title`),
    description: t(`${randomText}.description`),
  };
}

const ProjectsSection = () => {
  const t = useTranslations("ProjectsSection");
  return (
    <section id="projects" className="py-20 bg-slate-200 dark:bg-gray-800">
      <div className="container mx-auto px-6 space-y-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("title")}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const { title, description } = ProjectProps(project.index || "");

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
