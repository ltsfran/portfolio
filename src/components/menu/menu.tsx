import React, { useState } from 'react'
import { MenuContext } from './menu.contexts'

type MenuProps = React.PropsWithChildren

const Menu: React.FC<MenuProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <MenuContext.Provider value={{
      isMenuOpen,
      toggleMenu
    }}>
      <div>{children}</div>
    </MenuContext.Provider>
  )
}

export default Menu
