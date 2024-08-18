const Description: React.FC = () => {
  return (
    <section id="description" className="w-full laptop:mb-24">
      <div className="sticky top-0 z-10 -mx-6 mb-4 bg-[#252735]/75 px-6 py-5 backdrop-blur laptop:hidden">
        <h2 className="text-sm font-bold uppercase text-slate-200">About</h2>
      </div>
      <p className="mb-4">
        Hello! My name is Luis Tupa and I enjoy creating things that I learn on
        the internet. My interest in web development started in 2018 when I
        finished my college classes. It was there that I was interested in the
        world of frontend development.
      </p>
      <p className="mb-4">
        I have the privilege of working at a{' '}
        <a
          href="https://neouto.com"
          target="_blank"
          rel="noreferrer"
          title="NeoAuto"
          className="font-medium text-white"
        >
          huge corporation
        </a>{' '}
        in my country and I can put into practice my knowledge. My main focus is
        still learning and building accesible products for clients.
      </p>
    </section>
  )
}

export default Description
