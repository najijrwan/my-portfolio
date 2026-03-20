import { StackIcons } from '@ui'

const ProjectsSection = ({ project }) => (
  <>
    <header className="mb-2.5 flex flex-col gap-0.5 justify-center text-white capitalize">
      <h1 className=''>
        <span className='mr-2 text-highlight italic'>{project.displayName ?? project.name}</span>
        <span className='text-sm text-highlight'>({project.role})</span>
      </h1>

      <h2 className='text-sm md:inline'>{project.title}</h2>

      <h3 className='text-sm'>{project.duration}</h3>

      <StackIcons stack={project.techStack} className='my-1.25' />
    </header>

    <ul>
      {project.keyFeatures?.map((detail) => (
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