// timelineGroups.js
import {
    timeLineData1, timeLineData2, timeLineData3, timeLineData4, timeLineData5, timeLineData6,
    timeLineDataAtSM1, timeLineDataAtSM2, timeLineDataAtSM3, timeLineDataAtSM4,
    timeLineDataAtMD1, timeLineDataAtMD2, timeLineDataAtMD3, timeLineDataAtMD4,
    timeLineDataAtLG1, timeLineDataAtLG2, timeLineDataAtLG3,
    timeLineDataForFSD1, timeLineDataForFSD2, timeLineDataForFSD3,
    timeLineDataForFSDAtSM1, timeLineDataForFSDAtSM2, timeLineDataForFSDAtSM3,
    timeLineDataForFSDAtMD1, timeLineDataForFSDAtMD2,
    timeLineDataForFSDAtLG1, timeLineDataForFSDAtLG2,
    timeLineDataForADV1, timeLineDataForADV2,
    timeLineDataForADVAtSM1, timeLineDataForADVAtSM2,
    timeLineDataForADVAtMD1,
    timeLineDataForADVAtLG1,
} from "./timeLineData";

import TimelineItem from "../components/TimeLineItem";

export const section = `
  relative w-full flex justify-center sm:hidden lg:hidden`;

export const sectionAtSM = `
  relative w-full hidden sm:block md:hidden lg:hidden`;

export const sectionAtMD = `
  relative w-full hidden md:block lg:hidden`;

export const sectionAtLG = `
  relative w-full hidden lg:flex lg:justify-center`;

export const arrowLineContainer = `
  w-full max-w-[350px] h-0.5 relative`;

export const arrowLineContainerAtSMandMD = `
  w-full h-0.5 relative`;

export const arrowLineContainerAtLG = `
  w-full max-w-[350px] h-0.5 relative lg:max-w-full`;

export const arrowLine = `
  w-0 h-0.5 bg-highlight animate-width relative
  after:absolute after:right-[-8px] after:top-1/2 after:translate-y-[-50%] after:w-0 after:h-0
  after:border-t-6 after:border-b-6 after:border-l-8 after:border-transparent after:border-l-highlight
`;

export const timelineGroups = [
    {
        label: "Main",
        timelines: [
            { data: timeLineData1, sectionClass: section, containerClass: arrowLineContainer },
            { data: timeLineData2, sectionClass: section, containerClass: arrowLineContainer },
            { data: timeLineData3, sectionClass: section, containerClass: arrowLineContainer },
            { data: timeLineData4, sectionClass: section, containerClass: arrowLineContainer },
            { data: timeLineData5, sectionClass: section, containerClass: arrowLineContainer },
            { data: timeLineData6, sectionClass: section, containerClass: arrowLineContainer },

            { data: timeLineDataAtSM1, sectionClass: sectionAtSM, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataAtSM2, sectionClass: sectionAtSM, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataAtSM3, sectionClass: sectionAtSM, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataAtSM4, sectionClass: sectionAtSM, containerClass: arrowLineContainerAtSMandMD },

            { data: timeLineDataAtMD1, sectionClass: sectionAtMD, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataAtMD2, sectionClass: sectionAtMD, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataAtMD3, sectionClass: sectionAtMD, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataAtMD4, sectionClass: sectionAtMD, containerClass: arrowLineContainerAtSMandMD },

            { data: timeLineDataAtLG1, sectionClass: sectionAtLG, containerClass: arrowLineContainerAtLG },
            { data: timeLineDataAtLG2, sectionClass: sectionAtLG, containerClass: arrowLineContainerAtLG },
            { data: timeLineDataAtLG3, sectionClass: sectionAtLG, containerClass: arrowLineContainerAtLG },
        ],
    },
    {
        label: "Full Stack Developer",
        timelines: [
            { data: timeLineDataForFSD1, sectionClass: section, containerClass: arrowLineContainer },
            { data: timeLineDataForFSD2, sectionClass: section, containerClass: arrowLineContainer },
            { data: timeLineDataForFSD3, sectionClass: section, containerClass: arrowLineContainer },

            { data: timeLineDataForFSDAtSM1, sectionClass: sectionAtSM, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataForFSDAtSM2, sectionClass: sectionAtSM, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataForFSDAtSM3, sectionClass: sectionAtSM, containerClass: arrowLineContainerAtSMandMD },

            { data: timeLineDataForFSDAtMD1, sectionClass: sectionAtMD, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataForFSDAtMD2, sectionClass: sectionAtMD, containerClass: arrowLineContainerAtSMandMD },

            { data: timeLineDataForFSDAtLG1, sectionClass: sectionAtLG, containerClass: arrowLineContainerAtLG },
            { data: timeLineDataForFSDAtLG2, sectionClass: sectionAtLG, containerClass: arrowLineContainerAtLG },
        ],
    },
    {
        label: "Application Development",
        timelines: [
            { data: timeLineDataForADV1, sectionClass: section, containerClass: arrowLineContainer },
            { data: timeLineDataForADV2, sectionClass: section, containerClass: arrowLineContainer },

            { data: timeLineDataForADVAtSM1, sectionClass: sectionAtSM, containerClass: arrowLineContainerAtSMandMD },
            { data: timeLineDataForADVAtSM2, sectionClass: sectionAtSM, containerClass: arrowLineContainerAtSMandMD },

            { data: timeLineDataForADVAtMD1, sectionClass: sectionAtMD, containerClass: arrowLineContainerAtSMandMD },

            { data: timeLineDataForADVAtLG1, sectionClass: sectionAtLG, containerClass: arrowLineContainerAtLG },
        ],
    },
];

export const TimelineSection = ({ sectionClass, containerClass, data }) => (
    <section className={sectionClass}>
        <div className={containerClass}>
            <div className="arrowLine">
                {data.map((item, index) => (
                    <TimelineItem key={item.name} item={item} index={index} />
                ))}
            </div>
        </div>
    </section>
);
