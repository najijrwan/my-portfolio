import { timelineArrows } from '@data';
import ArrowTail from './ArrowTail';
import ArrowHead from './ArrowHead';
import { ArrowBodySkills, ArrowBodyProjects } from './ArrowBody';

const COLORS = [
  { bg: "bg-blue-300", border: "border-blue-300" },
  { bg: "bg-green-300", border: "border-green-300" },
  { bg: "bg-red-300", border: "border-red-300" },
  { bg: "bg-cyan-300", border: "border-cyan-300" },
  { bg: "bg-purple-300", border: "border-purple-300" },
  { bg: "bg-lime-300", border: "border-lime-300" },
  { bg: "bg-orange-300", border: "border-orange-300" },
];

const Timeline = () => (
    <section className="pb-5 flex overflow-x-scroll has-scrollbar">
        {timelineArrows.map((arrow, i) => {
            const color = COLORS[i % COLORS.length];

            return (
                <section key={i} className="flex items-center">
                    <ArrowTail color={color} month={arrow.startDateMonth} year={arrow.startDateYear} />

                    {arrow.skills?.length > 0 && <ArrowBodySkills skills={arrow.skills} />}
                    {arrow.projects?.length > 0 && <ArrowBodyProjects projects={arrow.projects} />}

                    <ArrowHead color={color} month={arrow.endDateMonth} year={arrow.endDateYear} />
                </section>
            );
        })}
    </section>

);

export default Timeline;