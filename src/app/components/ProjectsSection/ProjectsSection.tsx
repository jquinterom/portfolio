import { projects } from "@/utils/constants";
import ProjectCard from "./ProjectCard";
import { useTranslations } from "next-intl";

function ProjectProps(index: number) {
  const t = useTranslations("ProjectsSection");

  switch (index) {
    case 0:
      return {
        title: t("cards.first-project.title"),
        description: t("cards.first-project.description"),
      };
    case 1:
      return {
        title: t("cards.second-project.title"),
        description: t("cards.second-project.description"),
      };
    case 2:
      return {
        title: t("cards.third-project.title"),
        description: t("cards.third-project.description"),
      };
    case 3:
      return {
        title: t("cards.fourth-project.title"),
        description: t("cards.fourth-project.description"),
      };
    case 4:
      return {
        title: t("cards.fifth-project.title"),
        description: t("cards.fifth-project.description"),
      };
    default:
      return {
        title: t("cards.first-project.title"),
        description: t("cards.first-project.description"),
      };
  }
}

const ProjectsSection = () => {
  const t = useTranslations("ProjectsSection");
  return (
    <section id="projects" className="py-20 bg-slate-200 dark:bg-gray-800">
      <div className="container mx-auto px-6 space-y-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const projectProps = ProjectProps(index);

            return (
              <ProjectCard
                key={index}
                index={index}
                title={projectProps.title}
                description={projectProps.description}
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
