import { StackIcons } from '@ui'

const ProjectsSection = ({ item }) => (
  <>
    <header className="mb-2.5 justify-center text-white">
      <h1>
        <i className="uppercase">{item.name}</i> &nbsp; • &nbsp; {item.subTitle}
      </h1>
      <h2 className='capitalize'>{item.duration}</h2>
      <StackIcons stack={item.stack} className='my-1.25' />
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