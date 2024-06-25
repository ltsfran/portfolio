const Chip: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="rounded-full bg-[#626ED4] px-3 py-1 text-sm font-medium text-[#212121] opacity-90">
    {children}
  </div>
)

export default Chip
