'use client';

import { Plus } from "lucide-react";

import ActionTooltip from "@/components/action-tooltip";

const NavigationAction = () => {
  return (
    <div>
      <ActionTooltip 
      side="right"
      align="center"
      lable="Add a server">
        <button className="group flex items-center outline-none">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-lg transition-all overflow-hidden items-center justify-center bg-background group-hover:bg-accent group-focus:outline border">
            <Plus 
            className="group-hover:text-accent-foreground transition-all "
            size={25}/>
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
}

export default NavigationAction