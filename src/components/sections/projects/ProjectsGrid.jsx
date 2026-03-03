import { PROJECTS } from '@data'

const ProjectsGrid = ({ selectedCategory }) => (
    <ul className="mb-2.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
        {PROJECTS
            .filter(project => project.id !== "portfolio")
            .sort((a, b) => a.rank - b.rank)
            .map((project) => {
                const isVisible = selectedCategory === "all" || project.role.toLowerCase() === selectedCategory;

                return (
                    <li
                        key={project.id}
                        className={`block ${isVisible ? "animate-scaleUp" : "hidden"}`}
                    >
                        <ProjectCard project={project} />
                    </li>
                );
            })}
    </ul>
)

export default ProjectsGrid;

const ProjectCard = ({ project }) => (
    <a
        href={project.liveLink || project.gitLink}
        className="block w-full group"
        target="_blank"
    >
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
            <span
                className="
                    absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10
                    p-[14px]
                    flex-center
                    bg-jet rounded-[12px] opacity-0
                    custom-transition-1 scale-[0.8] group-hover:scale-[1.3] group-hover:opacity-100"
            >
                <ion-icon
                    name="eye-outline"
                    className="size-4 text-yellow-crayola [--ionicon-stroke-width:50px]"
                />
            </span>

            {project.rank <= 3 && (
                <span
                    className='
                        absolute -top-1/2 -left-18
                        size-30
                        text-black
                        bg-yellow-crayola rounded-full
                    '
                >
                    <span className='absolute bottom-5 right-5'>#{project.rank}</span>
                </span>
            )}

            <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover custom-transition-1 group-hover:scale-[1.1]"
            />
        </div>

        <p className="ml-2.5 text-white text-[15px] capitalize">{project.name}</p>

        <p className="ml-2.5 text-light-gray-70 text-[15px] font-[300]">{project.type}</p>
    </a>
)