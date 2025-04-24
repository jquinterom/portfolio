import { techProjects } from "@/utils/constants";
import { useTranslations } from "next-intl";

interface ProjectFilterProps {
  handleOnFilterChange: (element: string) => void;
}

const techs = () => {
  return Object.keys(techProjects);
};

const ProjectFilter = ({ handleOnFilterChange }: ProjectFilterProps) => {
  const handleChange = (element: string) => {
    handleOnFilterChange(element);
  };

  const t = useTranslations("ProjectsSection");

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <label htmlFor="filter-technology">{t("Technologies")}</label>

      <select
        className="w-full max-w-xl rounded-md border border-gray-300 bg-white py-2 px-4 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => handleChange(e.target.value)}
        name="filter-technology"
      >
        <option value={"all"}>All</option>
        {techs().map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectFilter;
