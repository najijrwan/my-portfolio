export const ArrowTail = ({ month, year, }) => (
    <div
        className="
                    w-13 h-5
                    flex-center flex-col gap-px
                    text-[10px]/2 text-black tracking-wider
                    border-t-[10px] border-t-yellow-crayola
                    border-b-[10px] border-b-yellow-crayola
                    border-l-[12px] border-l-transparent
                    "
    >
        <span>{month}</span>
        <span>{year}</span>
    </div>
);