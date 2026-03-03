import ProjectCardLink from './ProjectCardLink'

const ProjectCard = ({ project }) => (
    <>
        <div
            className="
                relative
                w-full h-50 sm:h-auto mb-[15px] overflow-hidden
                rounded-[16px] sm:rounded-[16px] 
                before:content-[''] before:absolute before:top-0 before:left-0 before:z-10
                before:w-full before:h-full
                before:bg-transparent 
                group-hover:before:bg-[#00000080] before:custom-transition-1"
        >
            <div
                className="
                    absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10
                    flex gap-5"
            >
                {project.liveLink && (
                    <ProjectCardLink link={project.liveLink} iconName="eye-outline" />
                )}

                <ProjectCardLink link={project.gitLink} iconName="logo-github" />
            </div>

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

        <div className='flex lg:flex-col text-[17px] lg:text-[15px]'>
            <p className="ml-2.5 text-white capitalize">
                {project.name}
            </p>

            <p className="ml-2.5 text-light-gray-70 font-[300]">
                {project.platform}
            </p>
        </div>
    </>
)

export default ProjectCard;