import { useContext } from 'react'
import { ThemeContext, type ThemeContextType } from '@contexts/theme'

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider')
  }

  return context
}
