import { PROJECTS } from '@data'
import ProjectCard from './project-card/ProjectCard'

const ProjectsGrid = ({ selectedRole }) => (
    <ul className="mb-2.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5">
        {PROJECTS
            .filter(project => project.id !== "portfolio")
            .sort((a, b) => a.rank - b.rank)
            .map((project) => {
                const isVisible = selectedRole === "all" || project.role.toLowerCase() === selectedRole;

                return (
                    <li
                        key={project.id}
                        className={`block w-full group cursor-pointer ${isVisible ? "animate-scaleUp" : "hidden"}`}
                    >
                        <ProjectCard project={project} />
                    </li>
                );
            })}
    </ul>
)

export default ProjectsGrid;