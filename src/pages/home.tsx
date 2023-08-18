import { Helmet } from 'react-helmet'
import Profile from '@components/profile'

const HomePage: React.FC = () => (
  <>
    <Helmet>
      <title>Homepage | Frontend Developer - Luis Tupa</title>
      <meta name="title" content="Homepage | Frontend Developer - Luis Tupa" />
    </Helmet>
    <div className="flex flex-wrap px-4 box-border max-w-screen-sm mx-auto w-full">
      <Profile />
    </div>
  </>
)

export default HomePage
