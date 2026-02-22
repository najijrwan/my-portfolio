const ArrowTail = ({ month, year, color }) => {
  return (
    <div
      className={`
        w-15 h-5
        flex-center flex-col gap-px
        text-[10px]/2 text-black tracking-wider
        border-t-[10px] ${color.border}
        border-b-[10px] ${color.border}
        border-l-[12px] border-l-transparent
      `}
    >
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
};

export default ArrowTail;