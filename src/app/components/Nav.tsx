import { sections } from "@/utils/constants"
import { scrollToSection } from "@/utils/scrollToSection"

interface NavProps {
    activeSection: string
}

const Nav = ({ activeSection }: NavProps) => {
    return (
        <nav className="container mx-auto px-6 py-4">
            <ul className="flex justify-center space-x-8">
                {sections.map((item) => (
                    <li key={item}>
                        <button
                            onClick={() => scrollToSection(item)}
                            className={`text-lg font-semibold hover:text-blue-400 transition-colors ${activeSection === item ? 'text-blue-400' : ''
                                }`}
                        >
                            {(item.charAt(0).toUpperCase() + item.slice(1)).replace('-', ' ')}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav