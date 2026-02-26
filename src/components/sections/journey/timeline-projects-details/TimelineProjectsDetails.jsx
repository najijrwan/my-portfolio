import { mergedProjects, splitEvenOdd } from "@utils"
import { SectionContainer } from '@about'

const TimelineProjectsDetails = () => {
    const [evenProjects, oddProjects] = splitEvenOdd(mergedProjects);

    return (
        <SectionContainer title="Projects Details">
            <div
                className="
                pt-4 overflow-x-auto
                grid grid-cols-1 lg:grid-cols-2 gap-3"
            >
                <Pillar projects={evenProjects} />
                <Pillar projects={oddProjects} />
            </div>
        </SectionContainer>
    )
}

export default TimelineProjectsDetails;


import ProjectDetails from './ProjectDetails'

export const Pillar = ({ projects }) => (
    <div className="flex flex-col gap-6">
        {projects.map((project) => (
            <ProjectDetails key={project.id} project={project} />
        ))}
    </div>
)