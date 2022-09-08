import { useEffect, useRef, useState } from "react";

export default function FavouritesTab({ onTabChange }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
      onTabChange(activeTabIndex);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="flex space-x-3 border-b justify-between">
            <button
              ref={(el) => (tabsRef.current[0] = el)}
              className={`pt-2 pb-3 w-full \\
              ${activeTabIndex === 0 ? 'text-brightGreen' : 'text-white'} \\
              font-bold text-lg transition-all duration-300`}
              onClick={() => setActiveTabIndex(0)}>
              Anime
            </button>
            <button
              ref={(el) => (tabsRef.current[1] = el)}
              className={`pt-2 pb-3 w-full \\
              ${activeTabIndex === 1 ? 'text-brightGreen' : 'text-white'} \\
              font-bold text-lg transition-all duration-300`}
              onClick={() => setActiveTabIndex(1)}>
              Manga
            </button>
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-brightGreen transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
    </div>
  );
}