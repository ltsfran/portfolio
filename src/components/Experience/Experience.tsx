import ExperienceList from './ExperienceList'

const Experience: React.FC = () => {
  const experienceItems = [
    {
      startDate: 'Jun 2020',
      endDate: 'Present',
      title: 'Frontend Developer SSR · NeoAuto',
      description:
        'Build and maintain web applications and design systems, implementing continuous deployment processes and enhancing usability metrics. Manage scalable design systems and automate deployment processes, ensuring iterative improvements in performance and user experience.',
      technologies: [
        'Typescript',
        'NextJS',
        'GraphQl',
        'TanStack Query',
        'TailwindCSS',
        'Vitest',
        'React Testing Library',
        'Lerna, Nx',
        'Bitbucket Pipelines'
      ]
    },
    {
      startDate: 'Mar 2019',
      endDate: 'Jun 2020',
      title: 'Frontend Developer Jr · PagoEfectivo',
      description:
        'Developed innovative web applications and scalable design systems, ensuring efficient continuous deployment processes and enhanced usability metrics. Created HTML email templates using React and Styled Components for improved efficiency and maintainability. Led the creation of a client-side rendered React project to automate support workflows, resulting in the development of a new dashboard.',
      technologies: [
        'Grid Layout',
        'Flexbox',
        'Javascript',
        'React',
        'React Hook Form',
        'Styled Components',
        'Redux',
        'Jest',
        'Webpack',
        'Jenkins'
      ]
    },
    {
      startDate: 'Apr 2018',
      endDate: 'Mar 2019',
      title: 'Frontend Intern · Grupo El Comercio',
      description:
        'Built and maintained HTML email templates using PugJS and StylusJS for improved efficiency and maintainability. Collaborated on the development of reusable component libraries using PugJS and StylusJS, enhancing project efficiency and maintainability. Implemented Google Tag Manager tracking functionalities to monitor website analytics and user behavior.',
      technologies: ['HTML', 'CSS', 'PugJS', 'StylusJS']
    }
  ]

  return (
    <section className="w-full laptop:mb-24">
      <div className="sticky top-0 z-10 -mx-6 mb-4 bg-[#252735]/75 px-6 py-5 backdrop-blur laptop:hidden">
        <h2 className="text-sm font-bold uppercase text-slate-200">
          Experience
        </h2>
      </div>
      <div className="mb-4">
        <ExperienceList items={experienceItems} />
      </div>
    </section>
  )
}

export default Experience
