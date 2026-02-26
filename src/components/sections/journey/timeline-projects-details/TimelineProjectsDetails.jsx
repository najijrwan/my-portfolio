import { mergedProjects } from "@utils"
import { SectionContainer } from '@about'
import ProjectDetails from './ProjectDetails'

const TimelineProjectsDetails = () => {
    return (
        <SectionContainer title="Projects Details">
            <div className="pt-3 flex flex-wrap gap-6 overflow-x-auto has-scrollbar">
                {mergedProjects.map((project) => (
                    <ProjectDetails key={project.id} project={project} />
                ))}
            </div>
        </SectionContainer>
    )
}

export default TimelineProjectsDetails;