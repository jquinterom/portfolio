import { projects } from "@/utils/constants"
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20 bg-slate-200 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                        />
                    ))}
                </div>
            </div>
        </section >
    )
}

export default ProjectsSection