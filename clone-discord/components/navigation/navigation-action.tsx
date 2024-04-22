'use client';

import { Plus } from "lucide-react";

import ActionTooltip from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
const { onOpen } = useModal();


  return (
    <div>
      <ActionTooltip 
      side="right"
      align="center"
      lable="Add a server">
        <button 
        onClick={() => onOpen('createServer')}
        className="group flex items-center outline-none">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-lg border-accent transition-all overflow-hidden items-center justify-center bg-transparent group-hover:bg-accent group-focus:outline border">
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