import { redirect } from "next/navigation";

import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";

import currentProfile from "@/lib/current-profile";
import { db } from "@/lib/db";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import NavigationAction from "./navigation-action";
import NavigationItem from "./navigation-item";

const NavigationSidebar = async () => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect('/');
  }

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })



  return ( 
    <div className="space-y-4 flex flex-col items-center h-full text-primary w-full py-3 bg-secondary rounded-r-lg shadow-lg">
        <NavigationAction />
        <Separator className="h-[2px] bg-black/25 rounded-lg w-10 mx-auto" />
        <ScrollArea className="flex h-full w-full">
          {
            servers.map((server) => (
              <div 
              key={server.id}
              className="my-2">
                <NavigationItem 
                id={server.id}
                name={server.name}
                imageUrl={server.imageUrl}/>
              </div>
            ))
          }
        </ScrollArea>
        <div className="pb-3 mt-auto flex flex-col items-center gap-y-4">
          <ModeToggle />
          <UserButton 
          afterSignOutUrl="/"
          appearance={{
            elements: {
              rootBox: '',
              avatarBox: 'h-[48px] w-[48px] rounded-lg',
              userButtonPopoverCard: 'bg-background text-foreground rounded-lg border shadow-md',
              userPreviewSecondaryIdentifier: 'text-foreground',
              userButtonPopoverActionButton: 'hover:bg-secondary',
              userButtonPopoverActionButtonText: 'text-foreground',
              userButtonPopoverActionButtonIcon: 'text-foreground',
              userButtonPopoverFooter: 'hidden',
              userButtonTrigger: 'h-[48px] w-[48px] rounded-lg focus:outline focus:shadow-none'
            }
          }}/>
        </div>
    </div>
   );
}
 
export default NavigationSidebar;