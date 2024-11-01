import { Database, Server, Smartphone } from "react-feather"
import { TechIcon } from "./TechIcon"

const techStack = {
    frontend: [
        { name: 'React', icon: "svg", color: 'bg-blue-500' },
        { name: 'Next.js', icon: 'Nj', color: 'bg-black' },
        { name: 'TypeScript', icon: 'Ts', color: 'bg-blue-600' },
        { name: 'JavaScript', icon: 'Js', color: 'bg-yellow-400' },
        { name: 'Tailwind CSS', icon: 'Tw', color: 'bg-cyan-400' },
        { name: 'GraphQL', icon: 'Gq', color: 'bg-pink-600' },
        { name: 'Storybook', icon: 'Sb', color: 'bg-purple-600' },
        { name: 'Jest', icon: 'Je', color: 'bg-red-600' },
        { name: 'React Testing Library', icon: 'Rtl', color: 'bg-red-400' },
    ],
    android: [
        { name: 'Kotlin', icon: 'Kt', color: 'bg-orange-500' },
        { name: 'Jetpack Compose', icon: 'Jc', color: 'bg-green-500' },
        { name: 'Retrofit', icon: 'Rt', color: 'bg-blue-400' },
        { name: 'Hilt', icon: 'Hi', color: 'bg-teal-500' },
        { name: 'Unit Testing', icon: 'Ut', color: 'bg-yellow-600' },
        { name: 'Mockito', icon: 'Mo', color: 'bg-green-600' },
        { name: 'SQLite', icon: 'Sq', color: 'bg-blue-300' },
    ],
    backend: [
        { name: 'Laravel', icon: 'Lv', color: 'bg-red-500' },
        { name: 'PHP', icon: 'Php', color: 'bg-purple-400' },
        { name: 'Eloquent', icon: 'El', color: 'bg-red-400' },
        { name: 'Mysql', icon: 'My', color: 'bg-blue-500' },
    ],
}


const TechStackSection = () => {

    return (
        <section id="tech-stack" className="py-20 bg-slate-200 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
                <div className="space-y-3">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center"><Server className="mr-2" /> Front-end</h3>
                        <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
                            {techStack.frontend.map((tech) => (
                                <TechIcon key={tech.name} name={tech.name} color={tech.color}>
                                    {typeof tech.icon === 'string' ? tech.icon : tech.icon}
                                </TechIcon>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center"><Smartphone className="mr-2" /> Android</h3>
                        <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
                            {techStack.android.map((tech) => (
                                <TechIcon key={tech.name} name={tech.name} color={tech.color}>
                                    {tech.icon}
                                </TechIcon>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center"><Database className="mr-2" /> Back-end</h3>
                        <div className="grid grid-cols-4 md:grid-cols-10 gap-4">
                            {techStack.backend.map((tech) => (
                                <TechIcon key={tech.name} name={tech.name} color={tech.color}>
                                    {tech.icon}
                                </TechIcon>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStackSection