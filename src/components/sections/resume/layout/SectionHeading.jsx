import { IconBox } from '@ui'

const SectionHeading = ({ heading }) => (
    <header className="mb-5 sm:mb-6 flex items-center gap-[15px]">
        <IconBox iconName='book-outline' />

        <h1 className="text-vegas-gold text-[18px] sm:text-[24px] font-bold uppercase">
            {heading}
        </h1>
    </header>
)

export default SectionHeading;