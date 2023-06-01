import { useMenuContext } from './useMenuContext'

type MenuButtonProps = React.PropsWithChildren

const MenuButton: React.FC<MenuButtonProps> = ({ children }) => {
  const { toggleMenu } = useMenuContext()

  return (
    <div onClick={toggleMenu}>{children}</div>
  )
}

export default MenuButton
