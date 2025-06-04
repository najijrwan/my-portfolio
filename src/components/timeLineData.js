// Journey Items
const timelineSegments = {
  segment1: [
    { name: "Java", imgSrc: "src/assets/java.png", color: "#D43609", date: "Mar 2023", bounceAnim: "animate-bounce" },
    { name: "HTML", imgSrc: "src/assets/html.png", color: "#F66B4E", date: "Mar 2024", bounceAnim: "animate-bounce" },
    { name: "CSS", imgSrc: "src/assets/css.png", color: "#45A8F2", date: "Apr 2024", bounceAnim: "animate-bounce" },
  ],
  segment2: [
    { name: "JavaScript", imgSrc: "src/assets/javascript.png", color: "#F7DF1E", date: "May 2024", bounceAnim: "animate-bounce" },
    { name: "PHP", imgSrc: "src/assets/php.png", color: "#777BB4", date: "Oct 2024", bounceAnim: "animate-bounce" },
    { name: "C#", imgSrc: "src/assets/csharp.png", color: "#8A2BE2", date: "Oct 2024", bounceAnim: "animate-bounce" },
  ],
  segment3: [
    { name: "Python", imgSrc: "src/assets/python.png", color: "#3776AB", date: "Mar 2025", bounceAnim: "animate-bounce" },
    { name: "Tailwind", imgSrc: "src/assets/tailwind-css.png", color: "#06B6D4", date: "May 2025", bounceAnim: "animate-bounce" },
    { name: "React", imgSrc: "src/assets/react.png", color: "#61DAFB", date: "May 2025", bounceAnim: "animate-bounce" },
  ],
  segment4: [
    { name: "Next JS", imgSrc: "src/assets/nextjavascript.png", color: "#FFFFFF", date: "Next", bounceAnim: "animate-bounce" },
    { name: "TypeScript", imgSrc: "src/assets/typescript.png", color: "#3178C6", date: "Next", bounceAnim: "animate-bounce" },
    { name: "Node JS", imgSrc: "src/assets/nodejavascript.png", color: "#98FB98", date: "Next", bounceAnim: "animate-bounce" },
  ],
  segment5: [
    { name: "React Native", imgSrc: "src/assets/expo.png", color: "var(--color-react-native)", date: "Next", bounceAnim: "animate-bounce" },
    { name: "Dart", imgSrc: "src/assets/dart.png", color: "#00B4AB", date: "Next", bounceAnim: "animate-bounce" },
    { name: "Flutter", imgSrc: "src/assets/flutter.png", color: "#02569B", date: "Next", bounceAnim: "animate-bounce" },
  ],
  segment6: [
    { name: "Swift", imgSrc: "src/assets/swift.png", color: "#FA7343", date: "Next", bounceAnim: "animate-bounce" },
  ],
};

// Helper function to add if an item has point, and to add fade delay and left offset
function addTimelineMeta(data, hasPoint = true, leftStep = 7.5, startLeft = 2.5, fadeStep = 0.25) {
  return data.map((item, index) => ({
    ...item,
    hasPoint,
    fadeDelay: +(fadeStep * (index + 1)).toFixed(2),
    left: `${startLeft + leftStep * index}rem`,
  }));
}

// Base
const timeLineData1 = addTimelineMeta(timelineSegments.segment1);
const timeLineData2 = addTimelineMeta(timelineSegments.segment2);
const timeLineData3 = addTimelineMeta(timelineSegments.segment3);
const timeLineData4 = addTimelineMeta(timelineSegments.segment4);
const timeLineData5 = addTimelineMeta(timelineSegments.segment5);
const timeLineData6 = addTimelineMeta(timelineSegments.segment6);

// At small breakpoint
const timeLineDataAtSM1 = addTimelineMeta([...timeLineData1, timeLineData2[0],]);
const timeLineDataAtSM2 = addTimelineMeta([...timeLineData2.slice(1), ...timeLineData3.slice(0, 2),]);
const timeLineDataAtSM3 = addTimelineMeta([timeLineData3[2], ...timeLineData4,]);
const timeLineDataAtSM4 = addTimelineMeta([...timeLineData5, timeLineData6[0],]);

// At medium breakpoint
const timeLineDataAtMD1 = addTimelineMeta([...timeLineDataAtSM1, timeLineDataAtSM2[0],]);
const timeLineDataAtMD2 = addTimelineMeta([...timeLineDataAtSM2.slice(1), ...timeLineDataAtSM3.slice(0, 2),]);
const timeLineDataAtMD3 = addTimelineMeta([...timeLineDataAtSM3.slice(2), ...timeLineDataAtSM4.slice(0, 3),]);
const timeLineDataAtMD4 = addTimelineMeta([timeLineDataAtSM4[3],]);

// At large and extra large breakpoints
const timeLineDataAtLG1 = addTimelineMeta([...timeLineDataAtMD1, ...timeLineDataAtMD2.slice(0, 2),]);
const timeLineDataAtLG2 = addTimelineMeta([...timeLineDataAtMD2.slice(2), ...timeLineDataAtMD3.slice(0, 4)]);
const timeLineDataAtLG3 = addTimelineMeta([timeLineDataAtMD3[4], ...timeLineDataAtMD4]);

//For full stack development roadmap base
const timeLineDataForFSD1 = addTimelineMeta([...timeLineData1.slice(1), timeLineData2[0],], false,);
const timeLineDataForFSD2 = addTimelineMeta([timeLineData2[1], ...timeLineData3.slice(1)], false,);
const timeLineDataForFSD3 = addTimelineMeta([...timeLineData4,], false,);

// For full stack development roadmap at small breakpoint
const timeLineDataForFSDAtSM1 = addTimelineMeta([...timeLineDataForFSD1, timeLineDataForFSD2[0],], false,);
const timeLineDataForFSDAtSM2 = addTimelineMeta([...timeLineDataForFSD2.slice(1), ...timeLineDataForFSD3.slice(0, 2)], false,);
const timeLineDataForFSDAtSM3 = addTimelineMeta([timeLineDataForFSD3[2],], false,);

// For full stack development roadmap at medium breakpoint
const timeLineDataForFSDAtMD1 = addTimelineMeta([...timeLineDataForFSDAtSM1, timeLineDataForFSDAtSM2[0],], false,);
const timeLineDataForFSDAtMD2 = addTimelineMeta([...timeLineDataForFSDAtSM2.slice(1), ...timeLineDataForFSDAtSM3.slice(0, 2)], false,);

// For full stack development roadmap at large and extra large breakpoints
const timeLineDataForFSDAtLG1 = addTimelineMeta([...timeLineDataForFSDAtMD1, ...timeLineDataForFSDAtMD2.slice(0, 2),], false,);
const timeLineDataForFSDAtLG2 = addTimelineMeta([...timeLineDataForFSDAtMD2.slice(2),], false,);

// For applications development roadmap base
const timeLineDataForADV1 = addTimelineMeta([...timeLineData5,], false,)
const timeLineDataForADV2 = addTimelineMeta([timeLineData1[0], timeLineData6[0],], false,);

// For applications development roadmap at small breakpoint
const timeLineDataForADVAtSM1 = addTimelineMeta([...timeLineDataForADV1, timeLineDataForADV2[0],], false,);
const timeLineDataForADVAtSM2 = addTimelineMeta([...timeLineDataForADV2.slice(1),], false,);

// For applications development roadmap at medium breakpoint
const timeLineDataForADVAtMD1 = addTimelineMeta([...timeLineDataForADVAtSM1, timeLineDataForADVAtSM2[0],], false,);

// For applications development roadmap at large and extra large breakpoints
const timeLineDataForADVAtLG1 = addTimelineMeta([...timeLineDataForADVAtMD1,], false,);

export {
  // Base segments
  timeLineData1, timeLineData2, timeLineData3, timeLineData4, timeLineData5, timeLineData6,

  // Small screens
  timeLineDataAtSM1, timeLineDataAtSM2, timeLineDataAtSM3, timeLineDataAtSM4,

  // Medium screens
  timeLineDataAtMD1, timeLineDataAtMD2, timeLineDataAtMD3, timeLineDataAtMD4,

  // Large screens
  timeLineDataAtLG1, timeLineDataAtLG2, timeLineDataAtLG3,

  // FSD level
  timeLineDataForFSD1, timeLineDataForFSD2, timeLineDataForFSD3,
  timeLineDataForFSDAtSM1, timeLineDataForFSDAtSM2, timeLineDataForFSDAtSM3,
  timeLineDataForFSDAtMD1, timeLineDataForFSDAtMD2,
  timeLineDataForFSDAtLG1, timeLineDataForFSDAtLG2,

  // ADV level
  timeLineDataForADV1, timeLineDataForADV2,
  timeLineDataForADVAtSM1, timeLineDataForADVAtSM2,
  timeLineDataForADVAtMD1,
  timeLineDataForADVAtLG1,
};

