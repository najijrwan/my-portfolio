

const Temp = () => (
    <section className="flex flex-wrap gap-10">
        <section
            className="flex items-end"
        >
            <div
                className="flex items-center"
            >
                <div className="w-7.5 h-px bg-jet"></div>
                <div
                    className="
                    w-15 h-8
                    flex flex-col items-center justify-center
                    text-xs text-black
                    bg-yellow-crayola"
                >
                    <span>Mar</span>
                    <span>2023</span>
                </div>
            </div>

            <div
                className="pb-4 flex flex-col items-center justify-center"
            >
                <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                    <img src="images/java.png" alt="" className="size-10" />
                </div>
                <div className="w-px h-5 bg-jet"></div>
                <div className="w-20 h-px bg-jet"></div>
            </div>

            <div
                className="flex items-center"
            >
                <div
                    className="
                    w-15 h-8
                    flex flex-col items-center justify-center
                    text-xs text-black
                    bg-yellow-crayola"
                >
                    <span>Mar</span>
                    <span>2023</span>
                </div>
            </div>
        </section>


        <section className="w-full flex items-center">
            <div
                className="flex items-center"
            >
                <div className="w-5 h-px bg-jet"></div>
                <div
                    className="
                    w-15 h-8
                    flex flex-col items-center justify-center
                    text-xs text-black
                    bg-yellow-crayola rounded-sm"
                >
                    <span>Mar</span>
                    <span>2023</span>
                </div>
            </div>

            <div
                className=""
            >
                <div className="w-fit px-2.5 flex gap-2.5">
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                            <img src="images/java.png" alt="" className="size-8" />
                        </div>
                        <div className="w-px h-5 bg-jet"></div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                            <img src="images/java.png" alt="" className="size-8" />
                        </div>
                        <div className="w-px h-5 bg-jet"></div>
                    </div>
                </div>

                <div className="h-px bg-jet"></div>

                <div className="w-fit pl-[36px] pr-2.5 flex gap-2.5">
                    <div className="flex flex-col-reverse items-center justify-center">
                        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                            <img src="images/java.png" alt="" className="size-8" />
                        </div>
                        <div className="w-px h-5 bg-jet"></div>
                    </div>
                    <div className="flex flex-col-reverse items-center justify-center">
                        <div className="bg-[#2b2b2cbf] border border-jet p-1 rounded-2xl">
                            <img src="images/java.png" alt="" className="size-8" />
                        </div>
                        <div className="w-px h-5 bg-jet"></div>
                    </div>
                </div>
            </div>

            <div className="relative px-2 py-3 border bg-[#2b2b2cbf]  border-jet rounded-xl">
                <div
                    className="
                        absolute top-0 left-1/2 -translate-1/2
                        px-1
                        text-[10px] text-yellow-crayola
                        bg-amber-600 rounded-sm"
                >
                    Fitnesso
                </div>
                <div
                    className="
                        px-1
                        text-[10px] text-yellow-crayola
                        bg-amber-600 rounded-sm"
                >
                    Fitnesso
                </div>
                <div
                    className="
                        absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
                        px-1
                        text-[10px] text-yellow-crayola
                        bg-amber-600 rounded-sm"
                >
                    Fitnesso
                </div>
            </div>
        </section>
    </section>
);

export default Temp;