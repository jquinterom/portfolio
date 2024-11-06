import { Moon, Sun } from "react-feather"
import useThemeProvider from "../../hooks/useThemeProvider"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeProvider()

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full transition-colors">
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  )
}

export default ToggleTheme