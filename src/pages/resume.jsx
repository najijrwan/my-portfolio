import { PageTitle, VariousActionsButton } from "@ui";
import { ResumeSections } from '@resume';

const Resume = () => (
    <>
        <PageTitle title='Resume' />

        <ResumeSections />

        <VariousActionsButton
            onClick={() => window.open('/Naji_Aljarwan_resume.pdf', '_blank')}
            variant='v1'
            iconName='document-text-outline'
            label='Download CV'
        />

    </>
)

export default Resume;