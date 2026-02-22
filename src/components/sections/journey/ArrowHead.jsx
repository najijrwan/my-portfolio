const ArrowHead = ({ month, year, color }) => {
    return (
        <div className="flex items-center">
            <div
                className={`
          w-12 h-5
          flex-center flex-col
          text-[10px]/2.5 text-black tracking-wider
          ${color.bg}
        `}
            >
                <span>{month}</span>
                <span>{year}</span>
            </div>
            <div
                className={`
          w-0 h-0 z-20
          border-t-[10px] border-t-transparent
          border-b-[10px] border-b-transparent
          border-l-[12px] ${color.border}
        `}
            />
        </div>
    );
};

export default ArrowHead;