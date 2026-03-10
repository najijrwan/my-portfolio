import { StackIcons } from '@ui'

const ProjectsSection = ({ project }) => (
  <>
    <header className="mb-2.5 flex flex-col gap-0.5 justify-center text-white">
      <h1 className='capitalize italic'>
        <span className='mr-2'>{project.name}</span>
        <span className='not-italic text-sm'>({project.role})</span>
      </h1>

      <h2 className='text-sm'>{project.title}</h2>

      <h3 className='text-sm capitalize'>{project.duration}</h3>

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