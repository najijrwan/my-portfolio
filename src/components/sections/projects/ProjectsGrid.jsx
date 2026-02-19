import { projectsMeta } from '@data'

const ProjectsGrid = ({ selectedCategory }) => (
    <ul
        className="
            mb-2.5
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5"
    >
        {projectsMeta.map((project, index) => {
            const isVisible = selectedCategory === "all" || project.type === selectedCategory;

            return (
                <li
                    key={index}
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
        href={project.link}
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
            {/* try to combine the classes */}
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

            <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover custom-transition-1 group-hover:scale-[1.1]"
            />
        </div>

        <h3 className="ml-[10px] text-base text-[15px]/4 font-[400]">
            {project.title}
        </h3>

        <p className="ml-2.5 text-light-gray-70 text-[15px] capitalize font-[300]">
            {project.type}
        </p>
    </a>
)