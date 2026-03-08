import SectionContainer from './SectionContainer';
import { SKILLS_IMAGE } from '@data';

const Skills = () => (
    <SectionContainer title='Skills'>
        <ul
            className="
                p-[25px] pt-0 sm:pt-0 sm:p-[45px] mx-[-15px] sm:mx-[-30px] overflow-x-auto
                flex-start-start gap-[15px] sm:gap-[50px]
                has-scrollbar scroll-smooth overscroll-x-contain snap-both scroll-px-6 sm:scroll-px-[45px]"
        >
            {SKILLS_IMAGE.map((src) => (
                <li
                    key={src}
                    className='min-w-[50%] bg-white/10 snap-start rounded-4xl clients-item'
                >
                    <img
                        src={src}
                        alt=""
                        className=""
                    />
                </li>
            ))}
        </ul>
    </SectionContainer>
)

export default Skills;