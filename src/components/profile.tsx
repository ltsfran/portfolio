import { Image } from '@components/image'

const Profile: React.FC = () => (
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
)

export default Profile
