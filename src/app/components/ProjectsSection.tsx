import { projects } from "@/utils/constants"
import { motion } from 'framer-motion'

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-400">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection