import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

interface EmptyCampaignStateProps {
  onNewCampaign: () => void;
}

export default function EmptyCampaignState({ onNewCampaign }: EmptyCampaignStateProps) {
  return (
    <div className="flex flex-col w-full h-full bg-white dark:bg-[#0f172a]/50 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800/60 transition-colors overflow-hidden">
      
      {/* Top Controls */}
      <div className="flex items-center justify-between p-6 md:px-8 border-b border-transparent flex-wrap gap-4">
         <div className="flex items-center gap-3">
           {/* Dropdown */}
           <div className="relative">
             <button className="flex items-center justify-between w-[120px] px-3 py-2 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-md text-[13px] text-slate-600 dark:text-slate-300 transition-colors shadow-sm">
               All
               <ChevronDown className="w-4 h-4 text-slate-400" />
             </button>
           </div>

           {/* Search */}
           <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
             <input 
               type="text" 
               placeholder="Search" 
               className="w-[200px] pl-9 pr-4 py-2 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-md text-[13px] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 outline-none focus:border-[#4F6BFF] transition-colors shadow-sm"
             />
           </div>
         </div>
      </div>

      {/* Center Illustration */}
      <div className="flex-1 flex flex-col items-center justify-center  pb-24 ">
         <img 
           src="/empty_state.png" 
           alt="No campaigns yet" 
           className="w-[320px] md:w-[420px] h-[400px] object-contain  dark:opacity-90 transition-opacity"
         />
         <button 
           onClick={onNewCampaign}
           className="px-8 py-2.5 bg-[#4F6BFF] hover:bg-[#435CE5] text-white text-[14px] font-medium rounded-md shadow-[0_4px_12px_rgba(79,107,255,0.25)] transition-all"
         >
           New Campaign
         </button>
      </div>

    </div>
  );
}
