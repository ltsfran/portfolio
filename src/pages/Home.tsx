import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const HomePage: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full min-h-viewport flex flex-col bg-[#242424] text-[#FFFFFFDE] justify-center">
      <div className="max-w-[1200px] mx-auto p-8 text-center">
        <div className="flex justify-center">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="flex flex-wrap">
            <img src={viteLogo} className="h-24 p-6 box-content will-change-[filter] transition duration-300 hover:drop-shadow-[0_0_2em_#646CFFAA]" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer" className="flex flex-wrap">
            <img src={reactLogo} className="animate-logoSpin h-24 p-6 box-content will-change-[filter] transition duration-300 hover:drop-shadow-[0_0_2em_#61DAFBAA]" alt="React logo" />
          </a>
        </div>
        <h1 className="text-5xl my-8 font-bold">Vite + React</h1>
        <div className="p-8">
          <button
            onClick={() => { setCount((count) => count + 1) }}
            className="rounded-lg border-solid border-transparent border py-2 px-5 bg-[#1A1A1A] cursor-pointer transition-all duration-[0.25s] hover:border-[#646CFF]">
            count is {count}
          </button>
          <p className="my-4">
            Edit <code>src/App.tsx</code> and save to test the application
          </p>
        </div>
        <p className="text-[#888888] my-4">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default HomePage
