import { miniProjects } from "@/utils/constants";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { GitHub } from "react-feather";
import { Tooltip } from "react-tooltip";

function ProjectProps(index: number) {
  const t = useTranslations("MiniProjectsSection");

  switch (index) {
    case 0:
      return {
        title: t("cards.first-project.title"),
        description: t("cards.first-project.description"),
      };
    default:
      return {
        title: t("cards.first-project.title"),
        description: t("cards.first-project.description"),
      };
  }
}

const MiniProjectsSection = () => {
  return (
    <div className="w-full container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Tooltip id="tooltip-project" delayShow={1} place="bottom" />
      {miniProjects.map((project, index) => {
        const { title, description } = ProjectProps(index);

        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
            data-tooltip-id="tooltip-project"
            data-tooltip-content={description}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-center">{title}</div>
              <Link href={project.github} target="_blank">
                <GitHub />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MiniProjectsSection;
