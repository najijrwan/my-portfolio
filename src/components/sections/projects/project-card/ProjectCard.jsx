import ProjectCardLink from './ProjectCardLink'

const ProjectCard = ({ project }) => (
    <>
        <div
            className="
                relative
                w-full h-50 sm:h-auto mb-[15px] overflow-hidden
                rounded-[16px] sm:rounded-[16px]
            "
        >

            {project.rank <= 3 && (
                <>
                    <span
                        className='
                            absolute left-0 top-0 -translate-[65%]
                            size-30
                            text-black
                            bg-yellow-crayola rounded-full
                        '
                    />
                    <span
                        className='
                            absolute left-0 top-0 min-w-7 text-center rounded-full
                        '
                    >
                        #{project.rank}
                    </span>
                </>
            )}

            <img
                src={project.img}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover custom-transition-1 group-hover:scale-[1.1]"
            />
        </div>

        <div className='ml-2.5 flex items-center gap-2'>
            <p className="text-white capitalize text-[17px] lg:text-[15px]">
                {project.name}
            </p>

            <span className='text-white'>|</span>

            <ProjectCardLink link={project.gitLink} iconName="logo-github" />

            {project.liveLink && (
                <ProjectCardLink link={project.liveLink} iconName="eye-outline" />
            )}
        </div>

        <p className="ml-2.5 text-light-gray-70 font-[300]">
            {project.platform}
        </p>
    </>
)

export default ProjectCard;