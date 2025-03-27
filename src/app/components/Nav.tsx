import { useState } from "react";
import { sections } from "@/utils/constants";
import { scrollToSection } from "@/utils/scrollToSection";
import { useTranslations } from "next-intl";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavProps {
  activeSection: string;
}

const Nav = ({ activeSection }: NavProps) => {
  const t = useTranslations("Navbar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="container mx-auto py-4 md:px-24">
      <div className="flex justify-between items-center md:hidden ps-2">
        <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <ul className="h-9 hidden md:flex justify-center items-center space-x-8 bg-opacity-90 backdrop-blur-sm">
        {sections.map((item) => (
          <li key={item}>
            <button
              onClick={() => scrollToSection(item)}
              className={`text-lg font-semibold hover:text-blue-400 transition-colors ${
                activeSection === item ? "text-blue-400" : ""
              }`}
            >
              {t(item)}
            </button>
          </li>
        ))}
      </ul>

      {isMobileMenuOpen && (
        <ul className="flex flex-col items-center space-y-4 mt-4 md:hidden bg-opacity-90 backdrop-blur-sm">
          {sections.map((item) => (
            <li key={item}>
              <button
                onClick={() => {
                  scrollToSection(item);
                  setIsMobileMenuOpen(false); // Close menu after selection
                }}
                className={`text-lg font-semibold hover:text-blue-400 transition-colors ${
                  activeSection === item ? "text-blue-400" : ""
                }`}
              >
                {t(item)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
