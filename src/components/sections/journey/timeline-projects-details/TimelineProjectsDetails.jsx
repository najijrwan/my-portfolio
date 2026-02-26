import { mergedProjects, splitEvenOdd } from "@utils"
import { SectionContainer } from '@about'
import Pillar from './Pillar'

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