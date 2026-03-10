import { StackIcons } from '@ui'

const ProjectsSection = ({ project }) => (
  <>
    <header className="mb-2.5 justify-center text-white">
      <h1>
        <i className="uppercase">{project.name}</i>
        <span> &nbsp; • &nbsp; </span>
        <span>{project.title.charAt(0).toUpperCase() + project.title.slice(1)}</span>
      </h1>

      <h2 className='capitalize'>{project.duration}</h2>

      <StackIcons stack={project.stack} className='my-1.25' />
    </header>
    
    <ul>
      {project.details?.map((detail) => (
        <li
          key={detail}
          className="
                relative
                pl-[1em] ml-5
                before:content-[''] before:absolute before:left-0 before:top-[9px]
                before:size-[5px]
                before:bg-[#ffd700] before:rounded-full
              "
        >
          {detail}
        </li>
      ))}
    </ul>
  </>
)

export default ProjectsSection;