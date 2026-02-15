import { SKILLS } from '@data';

const Skills = () => (
    <ul
        className="
        p-[25px] sm:p-[45px] mx-[-15px] sm:mx-[-30px] my-0 mb-4 overflow-x-auto
        flex-start-start gap-[15px] sm:gap-[50px]
        has-scrollbar scroll-smooth overscroll-x-contain snap-both scroll-px-6 sm:scroll-px-[45px]"
    >
        {SKILLS.map((src) => (
            <li
                key={src}
                className='
                min-w-[50%] bg-white/10 snap-start rounded-4xl clients-item'
            >
                <img
                    src={src}
                    alt=""
                    className=""
                />
            </li>
        ))}
    </ul>
)

export default Skills;