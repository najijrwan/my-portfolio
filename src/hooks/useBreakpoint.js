import { useState, useEffect } from "react";

export const useBreakpoint = (breakpoint = 768) => {
    const [isAbove, setIsAbove] = useState(window.innerWidth >= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setIsAbove(window.innerWidth >= breakpoint);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isAbove;
}