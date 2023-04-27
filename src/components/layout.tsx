import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useFullScreenHeight } from '@hooks'
import Logo from '@assets/logo.svg'
import MenuIcon from '@assets/menu.svg'

interface LayoutOptions {
  title: string
}

type LayoutProps = React.PropsWithChildren<LayoutOptions>

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  useFullScreenHeight()

  return (
    <div className="w-full min-h-viewport flex flex-col bg-[#242424] text-[#FFFFFFDE]">
      <Helmet>
        <html lang="es" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://ltsfran.github.io" />
        <title>{`${title} | Frontend Developer - Luis Tupa`}</title>
        <meta name="title" content={`${title} | Frontend Developer - Luis Tupa`} />
        <meta name="description" content="Portfolio to show my experience as a developer and post some topics about web development. Building animations and interactive experiences, website maintenance security." />
        <meta property="og:site_name" content="DigitalCode" />
        <meta property="og:description" content="Portfolio to show my experience as a developer and post some topics about web development. Building animations and interactive experiences, website maintenance security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ltsfran.github.io" />
      </Helmet>
      <header className="flex flex-wrap justify-center w-full bg-[#252735]">
        <div className="flex flex-wrap items-center justify-between w-full max-w-[1200px] px-4 py-2.5 md:px-6">
          <Link to="/" className="text-4xl">
            <Logo />
          </Link>
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
          <button className="text-white text-2xl p-2 box-border border border-white rounded md:hidden">
            <MenuIcon />
          </button>
        </div>
      </header>
      <main className="w-full bg-[#252735] flex-1 flex flex-wrap">{children}</main>
    </div>
  )
}

export default Layout
