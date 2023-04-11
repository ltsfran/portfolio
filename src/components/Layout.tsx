import { Helmet } from 'react-helmet'

type LayoutProps = React.PropsWithChildren

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="w-full min-h-viewport flex flex-col bg-[#242424] text-[#FFFFFFDE] justify-center">
    <div className="max-w-[1200px] mx-auto p-8 text-center">
      <Helmet>
        <html lang="es" />
        <meta name="description" content="Portfolio to show my experience as a developer and post some topics about web development. Building animations and interactive experiences, website maintenance security." />
      </Helmet>
      {children}
    </div>
  </div>
)

export default Layout
