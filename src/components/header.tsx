import { Link } from 'react-router-dom'
import { useThemeContext } from '@hooks'
import Logo from '@assets/logo.svg'
import MenuIcon from '@assets/menu.svg'
import SunIcon from '@assets/sun.svg'
import MoonIcon from '@assets/moon.svg'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@components/menu'

const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <header className="flex flex-wrap justify-center w-full bg-[#ECECF1] dark:bg-[#252735] text-[#181818] dark:text-white">
      <div className="flex flex-wrap items-center justify-between w-full max-w-[1200px] px-4 py-2.5 md:px-6">
        <Link to="/" className="text-4xl">
          <Logo />
        </Link>
        <div className="flex flex-wrap gap-2 md:gap-4">
          <nav className="hidden md:flex flex-wrap">
            <ul className="flex flex-wrap gap-4">
              <li className="flex flex-wrap">
                <Link className="p-1.5 box-border" to="/">Home</Link>
              </li>
              <li className="flex flex-wrap">
                <Link className="p-1.5 box-border" to="/works">Works</Link>
              </li>
              <li className="flex flex-wrap">
                <a
                  href="https://github.com/ltsfran/ltsfran.github.io"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 box-border">
                  View Source
                </a>
              </li>
            </ul>
          </nav>
          <button
            onClick={toggleTheme}
            className="text-white dark:text-[#252735] text-2xl box-border p-2 border-none rounded bg-[#626ED4] dark:bg-[#FBD38D]">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <div className="flex flex-wrap md:hidden">
            <Menu>
              <MenuButton>
                <button className="text-[#181818] dark:text-white text-2xl p-2 box-border outline-1 outline outline-[#181818] dark:outline-white rounded">
                  <MenuIcon />
                </button>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link
                    to="/"
                    className="py-2 px-4">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/works"
                    className="py-2 px-4">
                    Works
                  </Link>
                </MenuItem>
                <MenuItem>
                  <a
                    className="py-2 px-4"
                    href="https://github.com/ltsfran/portfolio"
                    rel="noreferrer">
                    View Source
                  </a>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
