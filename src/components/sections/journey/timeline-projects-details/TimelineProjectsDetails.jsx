import { useMemo } from "react";
import { mergeTimelineProjects } from "@utils"
import { SectionTitle } from '@about'
import ProjectDetails from './ProjectDetails'

const TimelineProjectsDetails = () => {
    const MERGED_PROJECTS = useMemo(() => mergeTimelineProjects({ dedupe: true }), []);

    return (
        <section>
            <SectionTitle title="Projects Details" />

            <section className="pb-5 flex flex-wrap gap-4 overflow-x-auto has-scrollbar">
                {MERGED_PROJECTS.map((project) => (
                    <ProjectDetails key={project.ref ?? project.title} project={project} />
                ))}
            </section>
        </section>
    )
}

export default TimelineProjectsDetails;