import SectionContainer from './SectionContainer';
import { TECHS_BY_TECH } from '@data';
import { TechTooltip } from '@ui';

const Skills = () => (
    <SectionContainer title='Skills' className='lg:gap-0!'>
        <ul
            className="
                p-[25px] pt-0 lg:p-[45px] mx-[-15px] sm:mx-[-30px]
                overflow-x-auto
                flex-start-start gap-[15px] sm:gap-[50px]
                has-scrollbar scroll-smooth overscroll-x-contain snap-both scroll-px-6 sm:scroll-px-[45px]"
        >
            {Object.values(TECHS_BY_TECH)
                .filter(tech => !tech.tool)
                .map((tech) => (
                    <li
                        key={tech.tech ?? tech.tool}
                        className='
                        relative group
                        min-w-[50%]
                        bg-white/10 snap-start rounded-4xl
                        clients-item
                    '
                    >
                        <img
                            src={tech.imgSrc}
                            alt={tech.name}
                            className=""
                        />

                        <TechTooltip tech={tech.name} />
                    </li>
                ))}
        </ul>
    </SectionContainer>
)

export default Skills;