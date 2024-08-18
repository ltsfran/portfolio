const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full">
      <div className="sticky top-0 z-10 -mx-6 mb-4 bg-[#252735]/75 px-6 py-5 backdrop-blur laptop:hidden">
        <h2 className="text-sm font-bold uppercase text-slate-200">Projects</h2>
      </div>
      <div className="mb-4">
        <ul>
          <li>
            <a
              href="https://workspaces-clone.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="grid gap-4 sm:grid-cols-8"
            >
              <div className="sm:order-2 sm:col-span-6">
                <h3 className="text-slate-200">Workspaces Clone</h3>
                <p className="mt-2">
                  A clone web app of Workspaces that allow to users post their
                  workspace rooms using NextJS App Router, TailwindCSS and
                  PostgresSQL.
                </p>
              </div>
              <img
                src="/workspaces-clone.png"
                loading="lazy"
                alt="Workspaces Clone"
                title="Workspaces Clone"
                className="aspect-[20/13] w-full max-w-[200px] rounded-md bg-gray-400 object-cover object-center sm:order-1 sm:col-span-2"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects
