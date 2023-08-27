import { Helmet } from 'react-helmet'
import Image from '@components/image'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => (
  <>
    <Helmet>
      <title>Homepage | Frontend Developer - Luis Tupa</title>
      <meta name="title" content="Homepage | Frontend Developer - Luis Tupa" />
    </Helmet>
    <div className="flex flex-wrap px-4 box-border max-w-screen-sm mx-auto w-full">
      <div className="w-full flex flex-wrap flex-col justify-center items-center py-5 box-border gap-5 md:py-12 md:flex-row-reverse md:flex-nowrap md:justify-between md:gap-16">
        <div className="w-[200px] h-[200px]">
          <div className="relative pt-[100%] h-0">
            <Image
              className="absolute top-0 left-0 w-full h-full rounded-full"
              width={200}
              height={200}
              src="/profile.png"
              alt="profile" />
          </div>
        </div>
        <div className="w-full md:max-w-xs">
          <h1 className="text-4xl font-bold mb-1">Hi, I&apos;m Luis</h1>
          <p className="text-lg mb-2">Frontend Developer</p>
          <p>Luis is a developer based in Peru with a passion for learning new technologies and putting them into practice.</p>
        </div>
      </div>
      <div className="mb-6 md:my-10">
        <h2 className="text-2xl font-bold mb-2.5">About me</h2>
        <p className="text-justify indent-4">
          Hello! My name is Luis Tupa and I enjoy creating things that I learn on the internet. My interest in web development started in 2018 when I finished my college classes. It was there that I was interested in the world of frontend development.
        </p>
        <p className="text-justify indent-4 mt-2.5 mb-6">
I have the privilege of working at a huge corporation in my country and I can put into practice my knowledge. My main focus is still learning and building accesible products for clients.
        </p>
        <Link to="/works">
          <button className="font-semibold px-4 py-2 bg-[#626ed4] rounded-md text-white dark:text-[#181818]">
            My portfolio
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default HomePage
