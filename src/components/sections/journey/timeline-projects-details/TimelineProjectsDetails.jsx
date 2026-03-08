import { splitEvenOdd } from "@utils"
import { extendedTimelineArrows } from '@data'
import { useBreakpoint } from "@hooks";
import { SectionContainer } from '@about'

const TimelineProjectsDetails = () => {
    const allProjects = extendedTimelineArrows.flatMap(timeline => timeline.projects || []);

    const [evenProjects, oddProjects] = splitEvenOdd(allProjects);

    const isViewportLarge = useBreakpoint(1024);

    return (
        <SectionContainer title="Projects Details">
            <div
                className="
                pt-4
                grid grid-cols-1 lg:grid-cols-2 gap-3"
            >
                {
                    isViewportLarge ? (
                        <>
                            <Pillar projects={evenProjects} />
                            <Pillar projects={oddProjects} />
                        </>
                    ) : (
                        <Pillar projects={allProjects} />
                    )
                }
            </div>
        </SectionContainer>
    )
}

export default TimelineProjectsDetails;


import ProjectDetails from './project-details/ProjectDetails'

const Pillar = ({ projects }) => (
    <div className="flex flex-col gap-6">
        {projects.map((project) => (
            <ProjectDetails key={project.id} project={project} />
        ))}
    </div>
)