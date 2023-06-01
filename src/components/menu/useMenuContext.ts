import { useContext } from 'react'
import { MenuContext, type MenuContextType } from './context'

export const useMenuContext = (): MenuContextType => {
  const context = useContext(MenuContext)

  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuContextProvicer')
  }

  return context
}
