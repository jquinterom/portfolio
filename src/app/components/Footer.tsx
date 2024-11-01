import { GitHub, Linkedin, Mail, Youtube } from "react-feather"

const Footer = () => {

    const handleClickOnMail = () => {
        const mailtoLink = `mailto:jfqm7710@gmail.com`;
        window.location.href = mailtoLink;
    };

    return (
        <footer id="footer" className="bg-slate-100 dark:bg-gray-900 py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Jhon Quintero. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="https://github.com/jquinterom" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <GitHub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/jquinterom" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://www.youtube.com/@commondev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <Youtube size={24} />
                    </a>
                    <span onClick={handleClickOnMail} className="text-gray-400 hover:text-white transition-colors hover:cursor-pointer">
                        <Mail size={24} />
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer