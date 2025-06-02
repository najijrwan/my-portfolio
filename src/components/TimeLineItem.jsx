// src/components/TimelineItem.jsx
const TimelineItem = ({ item }) => {
  const {
    name,
    imgSrc,
    color,
    date,
    bounceAnim,
    hasPoint = true,
    fadeDelay,
    left,
  } = item;

  return (
    <span
      className={`
        absolute top-0 translate-y-[-100%] h-3 w-px bg-highlight opacity-0 animate-fade-2 
        ${name === "PHP" && hasPoint ? "before:content-[''] before:absolute before:bottom-[-60%] before:left-13 lg:before:left-11.5 before:size-3 before:bg-green-500 before:rounded-full after:content-[''] after:absolute after:bottom-[-60%] after:-left-16.5 after:sm:-left-11 after:md:-left-16.5 lg:after:-left-14 after:size-3 after:bg-red-500 after:rounded-full" : ""}
        ${name === "C#" && hasPoint ? "before:content-[''] before:absolute before:bottom-[-60%] before:left-13 lg:before:left-11.5 before:size-3 before:bg-base before:rounded-full" : ""}
        ${name === "Python" && hasPoint ? "before:content-[''] before:absolute before:bottom-[-60%] before:left-13 lg:before:left-11.5 before:size-3 before:bg-blue-500 before:rounded-full" : ""}
        ${name === "React" && hasPoint ? "before:content-[''] before:absolute before:bottom-[-60%] before:left-13 lg:before:left-11.5 before:size-3 before:bg-amber-500 before:rounded-full" : ""}
      `}
      style={{
        left,
        animationDelay: `${fadeDelay}s`,
      }}
    >
      {/* Top Container: icon + label */}
      <div
        className={`absolute left-0 top-0 translate-x-[-50%] translate-y-[-110%] flex-center-col w-20 opacity-0 ${bounceAnim}`}
        style={{
          animationDelay: `${fadeDelay}s`,
        }}
      >
        <img
          src={imgSrc}
          alt={name}
          className="size-14"
        />
        <p className="m-0 font-extrabold text-xs">{name}</p>
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
