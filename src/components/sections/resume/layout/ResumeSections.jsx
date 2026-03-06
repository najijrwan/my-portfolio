import { resumeSections } from '../config/resume.config'
import SectionRenderer from '../SectionRenderer'

const ResumeSections = () =>
    resumeSections.map(({ heading, type, data }) => {
        const items = SectionRenderer(type, data);

        return (
            <section key={heading} className="mb-6 sm:mb-7.5">
                <SectionHeading heading={heading} />

                <SectionContent items={items} />
            </section>
        );
    });

export default ResumeSections;