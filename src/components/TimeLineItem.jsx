// src/components/TimelineItem.jsx
const TimelineItem = ({ item }) => {
  const {
    name,
    imgSrc,
    color,
    date,
    bounceAnim,
    hasPoint,
    fadeDelay,
    left,
  } = item;

  return (
    <span
      className={`
        absolute top-0 translate-y-[-100%] h-3 w-px bg-highlight opacity-0 animate-fade-2 
        ${name === "JavaScript" && hasPoint ? "before:content-[''] before:absolute before:bottom-[-60%] before:left-13 before:size-3 before:bg-red-500 before:rounded-full" : ""}
        ${name === "PHP" && hasPoint ? "before:content-[''] before:absolute before:bottom-[-60%] before:left-13 before:size-3 before:bg-green-500 before:rounded-full" : ""}
        ${name === "C#" && hasPoint ? "before:content-[''] before:absolute before:bottom-[-60%] before:left-13 before:size-3 before:bg-base before:rounded-full" : ""}
        ${name === "Python" && hasPoint ? "before:content-[''] before:absolute before:bottom-[-60%] before:left-13 before:size-3 before:bg-blue-500 before:rounded-full" : ""}
        ${name === "React" && hasPoint ? "before:content-[''] before:absolute before:bottom-[-60%] before:left-13 before:size-3 before:bg-amber-500 before:rounded-full" : ""}
      `}
      style={{
        left,
        animationDelay: `${fadeDelay}s`,
      }}
    >
      {/* Top Container: icon + label */}
      <div
        className={`
          absolute left-0 top-0 translate-x-[-50%] translate-y-[-110%] flex-center-col shadow-2 z-10 bg-gradient-onyx py-1 rounded-[25px] 
          w-25 opacity-0 
          before:content-[""] before:block before:absolute before:rounded-[inherit] before:inset-[1px] before:-z-[1] before:bg-gradient-jet 
          ${bounceAnim}`}
        style={{
          animationDelay: `${fadeDelay}s`,
        }}
      >
        <img
          src={imgSrc}
          alt={name}
          className="size-14"
        />
        <p className="m-0 font-extrabold text-[10px]">{name}</p>
      </div>

      {/* Bottom Container: color bar + date */}
      <div
        className="absolute left-0 top-6 translate-x-[-50%] size-20 flex flex-col justify-start items-center gap-1 opacity-0 animate-fade-2"
        style={{
          animationDelay: `${fadeDelay}s`,
        }}
      >
        <div
          className="w-full h-2.5"
          style={{
            background: name === "Python"
              ? "linear-gradient(to right, #306998, #FFD43B)"
              : color
          }}
        ></div>
        <div className="w-full h-2.5 text-white text-[13px] font-extrabold text-center">
          {date}
        </div>
      </div>
    </span>
  );
};

export default TimelineItem;
