const ArrowHead = ({ month, year, }) => (
    <div
        className="flex items-center"
    >

        <div
            className="
                w-10 h-5
                flex-center flex-col
                text-[10px]/2.5 text-black tracking-wider
                bg-yellow-crayola
                "
        >
            <span>{month}</span>
            <span>{year}</span>
        </div>
        <div
            className="
                w-0 h-0 z-20
                border-t-[10px] border-t-transparent
                border-b-[10px] border-b-transparent
                border-l-[12px] border-l-yellow-crayola
                "
        />
    </div>
)

export default ArrowHead;