const ArrowTail = ({ month, year, color }) => {
  return (
    <div
      className={`
        w-15 h-6
        flex-center flex-col gap-1
        text-[10px]/2 text-black tracking-wider font-bold
        border-t-[12px] ${color.border}
        border-b-[12px] ${color.border}
        border-l-[12px] border-l-transparent
      `}
    >
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
};

export default ArrowTail;