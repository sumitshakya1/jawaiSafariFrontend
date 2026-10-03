import React from 'react';

export interface SideRailProps {
  type?: 'scroll-prompt' | 'sound-frequency';
  text?: string;
  subtext?: string;
}

export function SideRail({
  type = 'scroll-prompt',
  text = 'Scroll down to explore',
  subtext = 'ARAVALLI NIGHT',
}: SideRailProps) {
  if (type === 'sound-frequency') {
    return (
      <div className="hidden lg:flex absolute right-16 top-[42%] z-30 flex-col items-center gap-4 text-[#263238]/60 pointer-events-none">
        <div className="flex items-end gap-[3px] h-6 px-1">
          <span className="w-[2px] h-3 bg-primary animate-[pulse_1s_infinite]" />
          <span className="w-[2px] h-6 bg-primary animate-[pulse_1.4s_infinite]" />
          <span className="w-[2px] h-2 bg-primary animate-[pulse_0.8s_infinite]" />
          <span className="w-[2px] h-5 bg-primary animate-[pulse_1.2s_infinite]" />
        </div>
        <div className="[writing-mode:vertical-rl] font-label-nav text-[9px] tracking-[0.28em] uppercase text-[#263238]/70 flex items-center gap-2">
          <span>{text}</span>
          <span className="w-1 h-1 rounded-full bg-primary/60 my-1" />
          <span className="text-[#005B5C]">{subtext}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-margin-mobile md:left-margin top-[200px] z-20 hidden md:flex flex-col items-center gap-4 pointer-events-none">
      <div className="w-[1px] h-28 bg-gradient-to-b from-white/40 via-white/20 to-transparent" />
      <div className="[writing-mode:vertical-rl] rotate-180 font-label-nav text-[9px] uppercase tracking-[0.3em] text-white/50 flex items-center gap-3">
        <span>{text}</span>
        <span className="material-symbols-outlined text-[14px] text-primary rotate-90 animate-pulse">
          arrow_forward
        </span>
      </div>
      <div className="w-[1px] h-12 bg-white/10" />
    </div>
  );
}
