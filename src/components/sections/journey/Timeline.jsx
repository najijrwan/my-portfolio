import { ArrowTail, } from './ArrowTail';
import { ArrowHead, } from './ArrowHead';
import { ArrowBodySkills, ArrowBodyProjects} from './ArrowBody';

const timelineArrows = [
    {
        startDateMonth: 'Feb',
        startDateYear: '2023',
        skills: [
            {
                src: 'images/java.png',
                lan: 'Java',
            },
        ],
        endDateMonth: 'Jun',
        endDateYear: '2023',
    },
    {
        startDateMonth: 'Oct',
        startDateYear: '2023',
        skills: [
            {
                src: 'images/java.png',
                lan: 'Java',
            },
        ],
        endDateMonth: 'Jan',
        endDateYear: '2024',
    },
    {
        startDateMonth: 'Feb',
        startDateYear: '2024',
        skills: [
            {
                lan: 'HTML',
                src: 'images/html.png',
            },
            {
                lan: 'CSS',
                src: 'images/css.png',
            },
            {
                lan: 'JavaScript',
                src: 'images/javascript.png',
            },
            {
                src: 'images/php.png',
                lan: 'PHP',
            },
        ],
        projects: ['fitensso',],
        endDateMonth: 'Jun',
        endDateYear: '2024',
    },
    {
        startDateMonth: 'Oct',
        startDateYear: '2024',
        skills: [
            {
                src: 'images/javascript.png',
                lan: 'JavaScript',
            },
            {
                src: 'images/php.png',
                lan: 'PHP',
            },
            {
                src: 'images/csharp.png',
                lan: 'C#',
            },
        ],
        projects: ['fitensso', 'Quizo'],
        endDateMonth: 'Jan',
        endDateYear: '2025',
    },
    {
        startDateMonth: 'Feb',
        startDateYear: '2025',
        skills: [
            {
                src: 'images/python.png',
                lan: 'Python',
            },
        ],
        projects: ['Ma7ali', 'Portfolio'],
        endDateMonth: 'Jun',
        endDateYear: '2025',
    },
    {
        startDateMonth: 'Dec',
        startDateYear: '2025',
        projects: ['3legant', 'Hekto', 'Portfolio', 'I2F'],
        endDateMonth: 'Feb',
        endDateYear: '2026',
    },
]

const Timeline = () => (
    <section className="flex justify-center flex-wrap">
        {timelineArrows.map((arrow, i) => (
            <section key={i} className="flex items-center">
                <ArrowTail month={arrow.startDateMonth} year={arrow.startDateYear} />

                {arrow.skills?.length > 0 && <ArrowBodySkills skills={arrow.skills} />}

                {arrow.projects?.length > 0 && <ArrowBodyProjects projects={arrow.projects} />}

                <ArrowHead month={arrow.endDateMonth} year={arrow.endDateYear} />
            </section>
        ))}

        {/* <section className="w-fit flex items-center">
            <div className="flex items-center">
                <div
                    className="
                        relative
                        w-10 h-8
                        flex flex-col items-center justify-center
                        text-xs text-black
                        bg-blue-400
                        before:content-['']
                        before:absolute before:left-0 before:-translate-x-full before:top-0 before:z-10
                        before:w-2 before:h-8
                        before:bg-blue-400"
                >
                    <span>Oct</span>
                    <span>2024</span>

                </div>
            </div>

            <div className="h-[150px] flex flex-col justify-center"
            >
                <div className="w-fit px-2.5 flex gap-2.5">
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                            <img src="images/javascript.png" alt="" className="size-8" />
                        </div>
                        <div className="w-px h-5 bg-jet"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                            <img src="images/csharp.png" alt="" className="size-8" />
                        </div>
                        <div className="w-px h-5 bg-jet"></div>
                    </div>
                </div>

                <div className="w-full h-px bg-jet"></div>

                <div className="w-fit pl-[36px] pr-2.5 flex gap-2.5">
                    <div className="flex flex-col-reverse items-center justify-center">
                        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                            <img src="images/php.png" alt="" className="size-8" />
                        </div>
                        <div className="w-px h-5 bg-jet"></div>
                    </div>
                </div>
            </div>

            <div className="relative min-w-[70px] min-h-[45px] px-2 py-3 border border-jet rounded-lg">
                <div
                    className="
                        absolute top-0 left-1/2 -translate-1/2
                        px-1
                        text-[10px] text-yellow-crayola
                        border border-jet bg-eerie-2 rounded-lg"
                >
                    Fitnesso
                </div>
                <div
                    className="
                        px-1
                        text-[10px] text-yellow-crayola
                        border border-jet bg-eerie-2 rounded-lg"
                >
                    test
                </div>
                <div
                    className="
                        absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                        px-1
                        text-[10px] text-yellow-crayola
                       border border-jet bg-eerie-2 rounded-lg"
                >
                    Quizo
                </div>
            </div>

            <div
                className="flex items-center"
            >
                <div className="w-5 h-px bg-jet"></div>
                <div
                    className="
                    w-10 h-8
                    flex flex-col items-center justify-center
                    text-xs text-black
                    bg-blue-400"
                >
                    <span>Jan</span>
                    <span>2025</span>
                </div>
                <div
                    className="
                        w-0 h-0 z-20
                        border-t-[16px] border-t-transparent
                        border-b-[16px] border-b-transparent
                        border-l-[8px] border-l-blue-400"
                ></div>
            </div>
        </section> */}
    </section >
);

export default Timeline;