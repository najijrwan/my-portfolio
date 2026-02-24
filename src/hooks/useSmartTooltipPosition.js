import { useState, useEffect } from "react";

export const useSmartTooltipPosition = (ref) => {
    const [position, setPosition] = useState("right");

    useEffect(() => {
        const el = ref.current?.parentElement;
        if (!el) return;

        const handleHover = () => {
            const rect = el.getBoundingClientRect();
            const viewportWidth = window.innerWidth;
            setPosition(rect.left > viewportWidth / 2 ? "left" : "right");
        };

        el.addEventListener("mouseenter", handleHover);
        window.addEventListener("resize", handleHover);
        window.addEventListener("scroll", handleHover);

        return () => {
            el.removeEventListener("mouseenter", handleHover);
            window.removeEventListener("resize", handleHover);
            window.removeEventListener("scroll", handleHover);
        };
    }, []);

    return position;
};