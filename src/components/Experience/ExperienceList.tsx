import Chip from '@/components/Chip'

interface ExperienceItem {
  startDate: string
  endDate: string
  title: string
  description: string
  technologies?: string[]
}

interface ExperienceListProps {
  items: ExperienceItem[]
}

const ExperienceList: React.FC<ExperienceListProps> = ({ items }) => {
  return (
    <ul className="flex flex-wrap gap-12">
      {items.map((item) => (
        <li key={crypto.randomUUID()} className="grid sm:grid-cols-8">
          <div className="mb-2 sm:col-span-2 sm:m-0">
            {item.startDate} - {item.endDate}
          </div>
          <div className="sm:col-span-6">
            <h3 className="text-slate-200">{item.title}</h3>
            <p className="mt-2 text-sm">{item.description}</p>
            {item.technologies !== undefined &&
              item.technologies.length > 0 && (
                <ul className="mt-3 flex w-full flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <Chip key={crypto.randomUUID()}>{technology}</Chip>
                  ))}
                </ul>
              )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ExperienceList
