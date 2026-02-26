import { mergedProjects, splitEvenOdd } from "@utils"
import { useBreakpoint } from "@hooks";
import { SectionContainer } from '@about'

const TimelineProjectsDetails = () => {
    const [evenProjects, oddProjects] = splitEvenOdd(mergedProjects);

    const isViewportLarge = useBreakpoint(1024);

    return (
        <SectionContainer title="Projects Details">
            <div
                className="
                pt-4 overflow-x-auto
                grid grid-cols-1 lg:grid-cols-2 gap-3"
            >
                {
                    isViewportLarge ? (
                        <>
                            <Pillar projects={evenProjects} />
                            <Pillar projects={oddProjects} />
                        </>
                    ) : (
                        <Pillar projects={mergedProjects} />
                    )
                }
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