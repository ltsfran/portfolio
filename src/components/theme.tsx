import { useEffect, useState } from 'react'
import { ThemeContext, type ThemeContextType } from '@contexts/theme'

type ThemeProps = React.PropsWithChildren

const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType['theme']>('dark')

  useEffect(() => {
    const hasDarkManualMode = ('theme' in localStorage)
    const isDarkManualMode = window.localStorage.theme === 'dark'
    const isDarkSystemMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (isDarkManualMode || (!hasDarkManualMode && isDarkSystemMode)) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [theme])

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
