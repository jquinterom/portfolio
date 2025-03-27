import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ProjectType } from "@/utils/types";
import Link from "next/link";
import { GitHub } from "react-feather";
import { isValidUrl } from "@/utils/isValidUrl";

interface CardProps {
  index: number;
  title: string;
  description: string;
  project: ProjectType;
}

const ImageCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <Image
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
      height={200}
      width={300}
      priority
    />
  );
};

const ProjectCard = ({ index, title, description, project }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("ProjectsSection.cards");

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-300 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative"
    >
      {isValidUrl(project.urlProduction) ? (
        <Link href={project.urlProduction || ""} target="_blank">
          <ImageCard image={project.image} title={title} />
        </Link>
      ) : (
        <ImageCard image={project.image} title={title} />
      )}
      <div className="absolute bottom-0 right-0 p-2 flex justify-between space-x-1">
        <div className="rounded-full bg-slate-400 dark:bg-gray-600 text-white p-1 shadow-md">
          {project.tech}
        </div>

        {project.github && (
          <div className="flex">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="rounded-full bg-slate-400 dark:bg-gray-600 text-white p-1 shadow-md "
            >
              <Link href={project.github} target="_blank">
                <GitHub />
              </Link>
            </motion.div>
          </div>
        )}
      </div>

      <div className="px-6 py-2">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div
          className={`text-sm text-gray-600 dark:text-gray-300 ${
            isExpanded ? "" : "line-clamp-1"
          }`}
        >
          {description}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 text-sm mt-2"
        >
          {isExpanded ? t("show-less") : t("show-more")}
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
