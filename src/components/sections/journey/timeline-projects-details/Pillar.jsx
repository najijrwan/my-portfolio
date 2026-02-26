import ProjectDetails from './ProjectDetails'

const Pillar = ({ projects }) => (
    <div className="flex flex-col gap-6">
        {projects.map((project) => (
            <ProjectDetails key={project.id} project={project} />
        ))}
    </div>
)

export default Pillar;