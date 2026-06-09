"use client";

import { ProfileData } from "@/lib/github";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { GitMerge } from "lucide-react";

export function ContributionGraph({ profileData }: { profileData: ProfileData | null }) {
  if (!profileData?.contributionWeeks || profileData.contributionWeeks.length === 0) return null;

  const getLevelColor = (level: string) => {
    switch (level) {
      case "NONE": return "bg-secondary/40";
      case "FIRST_QUARTILE": return "bg-green-900/60";
      case "SECOND_QUARTILE": return "bg-green-600/80";
      case "THIRD_QUARTILE": return "bg-green-500";
      case "FOURTH_QUARTILE": return "bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]";
      default: return "bg-secondary/40";
    }
  };

  return (
    <div className="w-full md:w-fit p-4 md:p-5 border border-border/50 bg-card rounded-2xl shadow-xl shadow-background/50">
      <div className="flex items-center gap-2 mb-3 text-xs md:text-sm font-medium text-muted-foreground">
        <GitMerge className="w-3.5 h-3.5 text-accent" />
        <span>{profileData.totalContributions} contributions in the last year</span>
      </div>
      
      <div className="overflow-hidden md:overflow-x-auto pb-1">
        <div className="flex gap-[2px] w-full md:w-fit justify-between md:justify-start">
          {profileData.contributionWeeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-[2px] flex-1 md:flex-none">
              {week.contributionDays.map((day, dIdx) => (
                <TooltipProvider key={`${wIdx}-${dIdx}`} delay={100}>
                  <Tooltip>
                    <TooltipTrigger
                      className={`w-full h-1 sm:w-1.5 sm:h-1.5 md:w-[6px] md:h-[6px] lg:w-2 lg:h-2 rounded-[1px] ${getLevelColor(day.contributionLevel)} transition-all hover:ring-1 hover:ring-foreground/30 cursor-crosshair border-none outline-none p-0`}
                    />
                    <TooltipContent side="top" className="text-xs bg-popover text-popover-foreground border-border font-mono px-3 py-1.5">
                      <strong>{day.contributionCount}</strong> contributions on {new Date(day.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
