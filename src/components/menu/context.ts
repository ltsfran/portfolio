import { createContext } from 'react'

export interface MenuContextType {
  isMenuOpen: boolean
  toggleMenu: () => void
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined)
