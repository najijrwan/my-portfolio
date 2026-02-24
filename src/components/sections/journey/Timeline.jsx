import { useScrollFade } from "@hooks";
import { timelineArrows } from '@data';
import { ArrowTail, ArrowBodySkills, ArrowBodyProjects, ArrowHead } from './index';

const COLORS = [
    { bg: "bg-blue-300", border: "border-blue-300" },
    { bg: "bg-green-300", border: "border-green-300" },
    { bg: "bg-red-300", border: "border-red-300" },
    { bg: "bg-cyan-300", border: "border-cyan-300" },
    { bg: "bg-purple-300", border: "border-purple-300" },
    { bg: "bg-lime-300", border: "border-lime-300" },
    { bg: "bg-orange-300", border: "border-orange-300" },
];

const Timeline = () => {
    const { scrollRef, showLeftFade, showRightFade } = useScrollFade();

    return (
        <section className="relative flex flex-col">
            {showLeftFade && (
                <div
                    className="
                        absolute top-0 left-0 z-20
                        w-12 h-full
                        bg-gradient-to-r from-[hsl(240,2%,12%)] to-transparent
                        pointer-events-none
                    "
                />
            )}

            <section ref={scrollRef} className="pb-5 flex overflow-x-auto has-scrollbar lg:flex-wrap">
                {timelineArrows.map((arrow, i) => {
                    const color = COLORS[i % COLORS.length];

                    return (
                        <section key={i} className="flex items-center lg:py-5">
                            <ArrowTail color={color} month={arrow.startDateMonth} year={arrow.startDateYear} />

                            {arrow.skills?.length > 0 && <ArrowBodySkills skills={arrow.skills} />}
                            {arrow.projects?.length > 0 && <ArrowBodyProjects projects={arrow.projects} />}

                            <ArrowHead color={color} month={arrow.endDateMonth} year={arrow.endDateYear} />
                        </section>
                    );
                })}
            </section>

            {showRightFade && (
                <div
                    className="
                        absolute top-0 right-0 z-20
                        w-12 h-full
                        bg-gradient-to-l from-[hsl(240,2%,12%)] to-transparent
                        pointer-events-none
                    "
                />
            )}
        </section>
    );
};


export default Timeline;