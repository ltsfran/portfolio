import { useState } from 'react'
import Layout from '@components/layout'
import ViteLogo from '../assets/vite.svg'
import ReactLogo from '../assets/react.svg'
import { Image } from '@components/image'

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <Layout title="Homepage">
      <div className="w-full flex flex-wrap justify-center items-center flex-col text-center">
        <div className="flex justify-center">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="flex flex-wrap">
            <div className="flex flex-wrap text-8xl p-6 box-content will-change-[filter] transition duration-300 hover:drop-shadow-[0_0_2em_#646CFFAA]">
              <ViteLogo />
            </div>
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer" className="flex flex-wrap">
            <div className="flex flex-wrap animate-logoSpin text-8xl p-6 box-content will-change-[filter] transition duration-300 hover:drop-shadow-[0_0_2em_#61DAFBAA]">
              <ReactLogo />
            </div>
          </a>
        </div>
        <h1 className="text-[#181818] dark:text-white text-5xl my-8 font-bold">Vite + React</h1>
        <div className="w-full flex flex-wrap justify-center">
          <div className="w-[200px] h-[200px]">
            <div className="relative pt-[100%] h-0">
              <Image
                className="absolute top-0 left-0 w-full h-full"
                src="https://picsum.photos/200"
                alt="profile"
                width={200}
                height={200} />
            </div>
          </div>
        </div>
        <div className="p-8">
          <button
            onClick={() => { setCount((count) => count + 1) }}
            className="rounded-lg border-solid border-transparent border py-2 px-5 bg-[#626ED4] text-white dark:text-[#181818] cursor-pointer transition-all duration-[0.25s] hover:border-[#646CFF]">
            count is {count}
          </button>
          <p className="my-4 text-[#181818] dark:text-white">
            Edit <code>src/App.tsx</code> and save to test the application
          </p>
        </div>
        <p className="text-[#888888] my-4">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Layout>
  )
}

export default HomePage
