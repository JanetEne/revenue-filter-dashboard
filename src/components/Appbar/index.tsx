import { useState } from "react";
import { AppbarInvoicing, AppbarLink, AppbarMediakit, AppbarStore } from "../Icon/icons";
import { Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipTrigger } from "../Tooltip";

interface AppbarIcons {
  icon: React.ReactNode;
  description: string;
}

const Appbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const appbarIcons: AppbarIcons[] = [
    { icon: <AppbarLink className="w-5 h-5" isHovered={hoveredIndex === 0} />, description: "Link in Bio" },
    { icon: <AppbarStore className="w-5 h-5" isHovered={hoveredIndex === 1} />, description: "Store" },
    { icon: <AppbarMediakit className="w-5 h-5" isHovered={hoveredIndex === 2} />, description: "Media Kit" },
    { icon: <AppbarInvoicing className="w-5 h-5" isHovered={hoveredIndex === 3} />, description: "Invoicing" },
  ];

  return (
    <div className="hidden lg:inline-flex p-2 fixed top-[310px] h-[192px] left-4 bg-white rounded-full shadow-app-bar">
      <div className="inline-flex flex-col justify-between items-center h-full">
        <TooltipProvider delayDuration={100}>
          {appbarIcons.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  className="p-2 rounded-full hover:bg-gray cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={16}>
                {item.description}
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Appbar;
