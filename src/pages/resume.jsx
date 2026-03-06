import { PageTitle, JumpToTopButton } from "@ui";
import { ResumeNote, ResumeSections } from '@resume';

const Resume = () => (
    <>
        <PageTitle title='Resume' />

        <ResumeNote />

        <ResumeSections />

        <JumpToTopButton />
    </>
)

export default Resume;