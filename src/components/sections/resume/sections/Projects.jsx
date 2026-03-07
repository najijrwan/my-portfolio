import { StackIcons } from '@ui'

const ProjectsSection = ({ item }) => (
  <>
    <header className="mb-4 text-white">
      <h1 className='mb-1.5'>
        <i className="uppercase">{item.name}</i> &nbsp; • &nbsp; {item.subTitle}
      </h1>
      <h2 className='flex items-center gap-2'>
        <span>stack:</span> <StackIcons stack={item.stack} />
      </h2>
    </header>
    <ul>
      {item.details?.map((skill) => (
        <li
          key={skill}
          className="
                relative
                pl-[1em] ml-5
                before:content-[''] before:absolute before:left-0 before:top-[9px]
                before:size-[5px]
                before:bg-[#ffd700] before:rounded-full
              "
        >
          {skill}
        </li>
      ))}
    </ul>
  </>
)

export default ProjectsSection;