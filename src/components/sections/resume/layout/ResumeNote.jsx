import { PrimaryButton } from '@ui'

const ResumeNote = () => (
    <div
        className="
            mb-7.5 sm:mb-9
            flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-3
        "
    >
        <div className='flex items-center gap-2'>
            <ion-icon name="alert-circle-outline" className='text-yellow-500 size-5 sm:size-6 flex-shrink-0' />

            <p className="text-yellow-500 text-sm sm:text-base">
                This is an extended version — download the PDF for a printable summary.
            </p>
        </div>

        <PrimaryButton
            onClick={() => window.open('/pdfs/Naji_Aljarwan_resume.pdf', '_blank')}
            variant='v1'
            iconName='document-text-outline'
            label='Download CV'
            className='ml-0!'
        />
    </div>
)

export default ResumeNote;