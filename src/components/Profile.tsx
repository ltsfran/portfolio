import GithubIcon from '@/assets/github.svg?react'
import InstagramIcon from '@/assets/instagram.svg?react'
import LinkedInIcon from '@/assets/linkedin.svg?react'
import TwitterIcon from '@/assets/twitter.svg?react'
import { useLayoutEffect, useState } from 'react'

const clamp = (value: number): number => Math.max(0, value)
const isBetween = (value: number, floor: number, ceil: number): boolean =>
  value >= floor && value <= ceil

const useScrollSpy = (sections: string[], offset = 0): string => {
  const [currentSection, setCurrentSection] = useState('')

  useLayoutEffect(() => {
    const listener = (): void => {
      const scrollY = window.scrollY
      const position = sections
        .map((section) => {
          const element = document.getElementById(section)
          if (element === null) return { section, top: -1, bottom: -1 }
          const rect = element.getBoundingClientRect()
          const top = clamp(rect.top + scrollY - offset)
          const bottom = clamp(rect.bottom + scrollY - offset)
          return { section, top, bottom }
        })
        .find(({ top, bottom }) => isBetween(scrollY, top, bottom))
      setCurrentSection(position?.section ?? '')
    }

    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  })

  return currentSection
}

const Profile: React.FC = () => {
  const sections = [
    {
      heading: 'description',
      label: 'About'
    },
    {
      heading: 'experience',
      label: 'Experience'
    },
    {
      heading: 'projects',
      label: 'Projects'
    }
  ]

  const currentSection = useScrollSpy(
    sections.map((section) => section.heading),
    50
  )
  console.log('🚀 ~ currentSection:', currentSection)

  return (
    <div className="w-full laptop:sticky laptop:top-0 laptop:flex laptop:max-h-screen laptop:flex-col laptop:justify-between laptop:py-24">
      <div>
        <h1 className="text-4xl font-bold text-slate-200">Luis Tupa</h1>
        <h2 className="mt-2 text-lg font-medium text-slate-200">
          Frontend Developer
        </h2>
        <p className="mt-3 max-w-xs">
          Experienced frontend developer with a focus on building digital
          experiences.
        </p>
        <nav className="mt-12 hidden list-none laptop:block">
          {sections.map((section) => (
            <li key={crypto.randomUUID()} className="flex flex-wrap">
              <a href={`#${section.heading}`} className="py-3">
                <span
                  className={`${section.heading === currentSection ? 'text-blue-800' : ''} text-slate-200`}
                >
                  {section.label}
                </span>
              </a>
            </li>
          ))}
        </nav>
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-2xl">
        <a
          href="https://github.com/ltsfran"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
          title="Github"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/ltsfran/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.instagram.com/tsfran/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://x.com/TSFran"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          title="Twitter"
        >
          <TwitterIcon />
        </a>
      </div>
    </div>
  )
}

export default Profile
