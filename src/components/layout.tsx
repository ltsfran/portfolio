import { Helmet } from 'react-helmet'
import useFullScreenHeight from '@hooks/useFullScreenHeight'
import ThemeProvider from '@components/theme'
import Header from '@components/header'

type LayoutProps = React.PropsWithChildren

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useFullScreenHeight()

  return (
    <ThemeProvider>
      <div className="w-full min-h-viewport flex flex-col bg-[#F8F8FA] dark:bg-[#252735] text-[#FFFFFFDE]">
        <Helmet>
          <html lang="es" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="canonical" href="https://ltsfran.github.io" />
          <meta name="description" content="Portfolio to show my experience as a developer and post some topics about web development. Building animations and interactive experiences, website maintenance security." />
          <meta property="og:site_name" content="DigitalCode" />
          <meta property="og:description" content="Portfolio to show my experience as a developer and post some topics about web development. Building animations and interactive experiences, website maintenance security." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ltsfran.github.io" />
        </Helmet>
        <Header />
        <main className="w-full relative flex-1 flex flex-wrap flex-col text-[#181818] dark:text-white">
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
