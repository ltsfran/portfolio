import { fireEvent, render, screen, renderHook, act } from '@testing-library/react'
import Menu from './menu'
import MenuButton from './menuButton'
import MenuList from './menuList'
import MenuItem from './menuItem'
import { useMenuContext } from './useMenuContext'

describe('Menu component', () => {
  it('Menu => render correctly', () => {
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

  it('Menu => throws error when not used within a MenuContextProvider', () => {
    let error: Error | null = null

    const consoleError = console.error
    console.error = jest.fn()

    try {
      act(() => {
        renderHook(() => useMenuContext())
      })
    } catch (e) {
      error = e as Error
    }

    console.error = consoleError

    expect(error).toBeDefined()
    expect(error?.message).toEqual('useMenuContext must be used within a MenuContextProvicer')
  })
})
