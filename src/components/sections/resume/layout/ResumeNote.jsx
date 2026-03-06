import { VariousActionsButton } from '@ui'

const ResumeNote = () => (
    <div className="flex items-center gap-2 mb-6 sm:mb-7.5">
        <ion-icon name="alert-circle-outline" className='text-yellow-500 size-5 sm:size-6 flex-shrink-0' />

        <p className="text-yellow-500 text-sm sm:text-base">
            This is an extended version — download the PDF for a printable summary.
        </p>

        <VariousActionsButton
            onClick={() => window.open('/Naji_Aljarwan_resume.pdf', '_blank')}
            variant='v1'
            iconName='document-text-outline'
            label='Download CV'
        />
    </div>
)

export default ResumeNote;