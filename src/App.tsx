import Description from '@/components/Description'
import Experience from '@/components/Experience'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'

function App(): JSX.Element {
  return (
    <div className="min-h-dvh w-full bg-[#252735] font-inter text-slate-400">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap px-6 py-12 laptop:grid laptop:grid-cols-2 laptop:py-0">
        <Profile />
        <div className="w-full pt-20 laptop:py-24">
          <Description />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  )
}

export default App
