import { PageTitle, } from '@ui'
import { Timeline } from '@journey/timeline'
import { TimelineProjectsDetails } from '@journey/timeline-projects-details'

const Journey = () => {
    return (
        <>
            <PageTitle title="Journey" />

            <Timeline />

            <TimelineProjectsDetails />
        </>
    )
}

export default Journey;