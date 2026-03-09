import SectionContainer from './SectionContainer';
import { TECHS } from '@data';
import { TechTooltip } from '@ui';

const Skills = () => (
    <SectionContainer title='Skills'>
        <ul
            className="
                p-[25px] pt-0 xl:p-[45px] mx-[-15px] sm:mx-[-30px]
                overflow-x-auto
                flex-start-start gap-[15px] sm:gap-[50px]
                has-scrollbar scroll-smooth overscroll-x-contain snap-both scroll-px-6 sm:scroll-px-[45px]"
        >
            {TECHS.map((tech) => (
                <li
                    key={tech.tech}
                    className='
                        relative group
                        min-w-[50%]
                        bg-white/10 snap-start rounded-4xl
                        clients-item
                    '
                >
                    <img
                        src={tech.src}
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