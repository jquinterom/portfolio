import React, { useState } from "react";
import { motion } from 'framer-motion'
import Image from "next/image";

interface CardProps {
    index: number,
    title: string,
    description: string,
    image: string,
    tech: React.ReactNode
}

const ProjectCard = ({ index, title, description, image, tech }: CardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-slate-300 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
            <Image
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                height={200}
                width={300}
            />
            <div className="w-full flex items-center justify-end p-2">
                <div className="rounded-full bg-slate-400 dark:bg-gray-600 text-white p-1 shadow-md">
                    {tech}
                </div>
            </div>
            <div className="px-6 py-2">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <div className={`text-sm text-gray-600 dark:text-gray-300 ${isExpanded ? '' : 'line-clamp-1'}`}>
                    {description}
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-500 text-sm mt-2"
                >
                    {isExpanded ? "Mostrar menos" : "Mostrar más"}
                </button>
            </div>


        </motion.div>
    )
}

export default ProjectCard