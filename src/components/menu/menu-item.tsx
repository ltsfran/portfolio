import { useMenuContext } from './menu.hooks'
import { MenuItemContent } from './menu.styled'

type MenuItemProps = React.PropsWithChildren

const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
  const { toggleMenu } = useMenuContext()

  return (
    <MenuItemContent onClick={toggleMenu}>{children}</MenuItemContent>
  )
}

export default MenuItem
