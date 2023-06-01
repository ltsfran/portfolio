import { CSSTransition } from 'react-transition-group'
import { useMenuContext } from './useMenuContext'
import { MenuListWrapper, MenuListContent } from './styled'

type MenuListProps = React.PropsWithChildren

const MenuList: React.FC<MenuListProps> = ({ children }) => {
  const { isMenuOpen } = useMenuContext()

  return (
    <MenuListWrapper>
      <CSSTransition
        in={isMenuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <MenuListContent>{children}</MenuListContent>
      </CSSTransition>
    </MenuListWrapper>
  )
}

export default MenuList
