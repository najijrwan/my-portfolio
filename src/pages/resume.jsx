import { PageTitle, VariousActionsButton } from "@ui";
import { ResumeSections } from '@resume';

const Resume = () => (
    <>
        <PageTitle title='Resume' />

        <ResumeSections />

        <VariousActionsButton
            
            variant='md'
            iconName='document-text-outline'
            label='Download CV'
        />

    </>
)

export default Resume;