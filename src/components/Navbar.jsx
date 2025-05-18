import { useState, useEffect } from "react";
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from "../assets/NavIcons";

const Navbar = () => {
  const icons = [<Icon1 />, <Icon2 />, <Icon3 />, <Icon4 />, <Icon5 />];
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionIds = ["section1", "section2", "section3", "section4", "section5"];
  const anglePerItem = 360 / icons.length;

  useEffect(() => {
    const handleScroll = () => {
      const sectionTops = sectionIds.map((id) => {
        const el = document.getElementById(id);
        return el?.getBoundingClientRect().top ?? Infinity;
      });

      const visibleIndex = sectionTops.findIndex((top) => top >= 0 && top < window.innerHeight / 2);

      if (visibleIndex !== -1 && visibleIndex !== activeIndex) {
        setActiveIndex(visibleIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const rotation = -activeIndex * anglePerItem;

  const containerSize = 100;
  const iconSize = 40;
  const center = containerSize / 2;
  const radius = center - iconSize / 2;

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[100px] h-[100px] bg-background rounded-full shadow-lg z-50">
      <ul
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = center + radius * Math.cos(rad);
          const y = center + radius * Math.sin(rad);
          return (
            <li
              key={i}
              className="absolute cursor-pointer"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
              }}
              onClick={() => {
                document.getElementById(sectionIds[i])?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {icons[i]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;