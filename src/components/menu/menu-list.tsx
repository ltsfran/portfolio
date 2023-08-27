import { CSSTransition } from 'react-transition-group'
import { useMenuContext } from './menu.hooks'
import { MenuListWrapper, MenuListContent } from './menu.styled'

interface MenuListOptions {
  className?: string
}

type MenuListProps = React.PropsWithChildren<MenuListOptions>

const MenuList: React.FC<MenuListProps> = ({
  className,
  children
}) => {
  const { isMenuOpen } = useMenuContext()

  return (
    <MenuListWrapper>
      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <MenuListContent className={className}>{children}</MenuListContent>
      </CSSTransition>
    </MenuListWrapper>
  )
}

export default MenuList
