import GithubIcon from '@/assets/github.svg?react'
import InstagramIcon from '@/assets/instagram.svg?react'
import LinkedInIcon from '@/assets/linkedin.svg?react'
import TwitterIcon from '@/assets/twitter.svg?react'

const Profile: React.FC = () => {
  return (
    <div className="w-full laptop:sticky laptop:top-0 laptop:max-h-screen laptop:py-24">
      <h1 className="text-4xl font-bold text-slate-200">Luis Tupa</h1>
      <h2 className="mt-2 text-lg font-medium text-slate-200">
        Frontend Developer
      </h2>
      <p className="mt-3 max-w-xs">
        Experienced frontend developer with a focus on building digital
        experiences.
      </p>
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
