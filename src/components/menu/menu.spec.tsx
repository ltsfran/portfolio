import { fireEvent, render, screen } from '@testing-library/react'
import Menu from './menu'
import MenuButton from './menuButton'
import MenuList from './menuList'
import MenuItem from './menuItem'

describe('Menu component', () => {
  test('Menu => render correctly', () => {
    render(
      <Menu>
        <MenuButton>
          <button>Click me!</button>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <div>Child One</div>
          </MenuItem>
        </MenuList>
      </Menu>
    )

    const menuButtonElement = screen.getByText('Click me!')

    fireEvent.click(menuButtonElement)

    const menuItemElement = screen.getByText('Child One')

    expect(menuItemElement).toBeInTheDocument()
  })
})
