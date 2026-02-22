import { timelineArrows } from '@data';
import ArrowTail from './ArrowTail';
import ArrowHead from './ArrowHead';
import { ArrowBodySkills, ArrowBodyProjects } from './ArrowBody';

const COLORS = [
  { bg: "bg-blue-400", border: "border-blue-400" },
  { bg: "bg-green-400", border: "border-green-400" },
  { bg: "bg-red-400", border: "border-red-400" },
  { bg: "bg-cyan-400", border: "border-cyan-400" },
  { bg: "bg-purple-400", border: "border-purple-400" },
  { bg: "bg-pink-400", border: "border-pink-400" },
  { bg: "bg-lime-400", border: "border-lime-400" },
  { bg: "bg-orange-400", border: "border-orange-400" },
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