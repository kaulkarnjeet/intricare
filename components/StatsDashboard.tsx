"use client";

import { 
  Megaphone, 
  Settings, 
  Pause, 
  SquarePen, 
  Mail, 
  MessageSquare, 
  UserPlus, 
  Clock, 
  Activity, 
  ChevronRight,
  ExternalLink,
  ChevronDown,
  Search
} from "lucide-react";

export default function StatsDashboard() {
  return (
    <div className="flex flex-col gap-6 w-full animate-in fade-in zoom-in-95 duration-300 pb-20">
      
      {/* Top Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="relative w-full sm:w-40">
           <select className="appearance-none w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[6px] text-[12px] font-bold text-[#5E5873] dark:text-slate-300 outline-none transition-colors">
              <option>All</option>
           </select>
           <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
        </div>
        <div className="relative w-full sm:w-64">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
           <input type="text" placeholder="Search" className="w-full pl-9 pr-4 text-[#5E5873] dark:text-slate-300 py-2 border border-slate-200 dark:border-slate-800 rounded-[6px] bg-white dark:bg-slate-900 text-[12px] font-bold placeholder-slate-400 dark:placeholder-slate-600 outline-none focus:ring-1 focus:ring-[#4F6BFF] transition-colors" />
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="flex flex-col xl:flex-row gap-6 items-start">
        {/* Left Column (Main metrics) */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          
          {/* Header Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 md:p-6 rounded-2xl shadow-sm transition-colors">
             <div className="flex items-start justify-between mb-8">
                 <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2">
                   <Megaphone className="w-5 h-5 text-[#4F6BFF]" />
                   <h2 className="text-[16px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight">Tech Founder</h2>
                 </div>
                 <div className="flex gap-2">
                   <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-[#5269AB] dark:text-blue-300 text-[12px] font-bold rounded-lg uppercase tracking-wider transition-colors">LinkedIn</span>
                   <span className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-[#5269AB] dark:text-slate-300 text-[12px] font-bold rounded-lg uppercase tracking-wider transition-colors">Email</span>
                 </div>
               </div>
               
               <div className="flex items-center gap-3">
                 <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50 rounded-full text-[12px] font-bold transition-colors">
                    <Activity className="w-3.5 h-3.5" /> Running
                 </div>
                 <div className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 dark:hover:bg-slate-800 cursor-pointer shadow-sm transition-colors"><Pause className="w-4 h-4" /></div>
                 <div className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 dark:hover:bg-slate-800 cursor-pointer shadow-sm transition-colors"><SquarePen className="w-4 h-4" /></div>
               </div>
             </div>

             <div className="flex flex-col gap-3">
               <div className="w-full h-[6px] bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden transition-colors">
                 <div className="h-full bg-[#4F6BFF] rounded-full w-[37%] flex gap-[2px]">
                   {Array.from({length: 20}).map((_, i) => <div key={i} className="h-full w-2 bg-white/20 -skew-x-12 shrink-0"></div>)}
                 </div>
               </div>
               <div className="flex items-center justify-between text-[12px] font-bold">
                 <span className="text-slate-500 dark:text-slate-400">Created: <span className="text-slate-800 dark:text-slate-200">8 Jan, 2026</span></span>
                 <div className="flex items-center gap-1.5 text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-2 py-0.5 rounded-md border border-orange-100 dark:border-orange-800/50 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    CRM Connected
                 </div>
                 <span className="text-slate-500 dark:text-slate-400"><span className="text-slate-800 dark:text-slate-200">74 / 200</span> prospects processed</span>
               </div>
             </div>
          </div>

          {/* Campaign Overview Bar Charts */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-6 overflow-hidden transition-colors">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[16px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight">Campaign Overview</h3>
              <div className="flex bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-1 rounded-xl transition-colors">
                 <button className="px-4 py-1.5 bg-white dark:bg-slate-700 text-[12px] font-bold text-[#82868B] dark:text-slate-200 rounded-lg shadow-sm transition-colors">LinkedIn</button>
                 <button className="px-4 py-1.5 text-[12px] font-bold text-[#82868B] dark:text-slate-400 hover:text-slate-300 transition-colors">Email</button>
              </div>
            </div>

            <div className="overflow-x-auto w-full pb-2 -mb-2 no-scrollbar">
              <div className="grid grid-cols-5 gap-4 items-end h-[220px] min-w-[500px]">
                
                <div className="flex flex-col h-full justify-between">
                   <div className="flex flex-col gap-1">
                     <span className="text-[12px] font-bold text-[#5E5873] dark:text-slate-400">New Leads</span>
                     <span className="text-[16px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight">1,628</span>
                   </div>
                   <div className="w-full bg-[#7C8CF8] rounded-t-xl min-h-[140px] relative shadow-inner overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                   </div>
                </div>

              <div className="flex flex-col h-full justify-between">
                 <div className="flex flex-col gap-1">
                   <span className="text-[12px] font-bold text-[#5E5873] dark:text-slate-400 flex items-center gap-1">Invites Sent <div className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600 text-[8px] flex justify-center items-center text-slate-400 dark:text-slate-500 font-serif italic">i</div></span>
                   <div className="flex items-center gap-2">
                     <span className="text-[16px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight">988</span>
                     <span className="px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded">61%</span>
                   </div>
                 </div>
                 <div className="w-full bg-[#A5B7CC] rounded-t-xl min-h-[90px] relative shadow-inner opacity-80" />
              </div>

              <div className="flex flex-col h-full justify-between">
                 <div className="flex flex-col gap-1">
                   <span className="text-[12px] font-bold text-[#5E5873] dark:text-slate-400 flex items-center gap-1">Invites Accepted <div className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600 text-[8px] flex justify-center items-center text-slate-400 dark:text-slate-500 font-serif italic">i</div></span>
                   <div className="flex items-center gap-2">
                     <span className="text-[16px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight">507</span>
                     <span className="px-1.5 py-0.5 bg-orange-50 dark:bg-orange-900/40 text-orange-500 dark:text-orange-400 text-[10px] font-bold rounded">49%</span>
                   </div>
                 </div>
                 <div className="w-full bg-[#B2E6CC] rounded-t-xl min-h-[60px] relative shadow-inner opacity-90" />
              </div>

              <div className="flex flex-col h-full justify-between">
                 <div className="flex flex-col gap-1">
                   <span className="text-[12px] font-bold text-[#5E5873] dark:text-slate-400">Messages Sent</span>
                   <div className="flex items-center gap-2">
                     <span className="text-[16px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight">460</span>
                     <span className="px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded">91%</span>
                   </div>
                 </div>
                 <div className="w-full bg-[#c0f5ab] rounded-t-xl min-h-[120px] relative shadow-inner opacity-90" />
              </div>

              <div className="flex flex-col h-full justify-between">
                 <div className="flex flex-col gap-1">
                   <span className="text-[12px] font-bold text-[#5E5873] dark:text-slate-400 flex items-center gap-1">Replies <div className="w-3 h-3 rounded-full border border-slate-300 dark:border-slate-600 text-[8px] flex justify-center items-center text-slate-400 dark:text-slate-500 font-serif italic">i</div></span>
                   <div className="flex items-center gap-2">
                     <span className="text-[16px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight">202</span>
                     <span className="px-1.5 py-0.5 bg-orange-50 dark:bg-orange-900/40 text-orange-500 dark:text-orange-400 text-[10px] font-bold rounded">44%</span>
                   </div>
                 </div>
                 <div className="w-full bg-[#d0fbd1] rounded-t-xl min-h-[50px] relative shadow-inner opacity-80" />
              </div>
            </div>
          </div>
        </div>

          {/* Bottom Split (Actions vs Performance) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm overflow-hidden text-left transition-colors">
             
             {/* Campaign Actions Table */}
             <div className="p-4 md:p-6 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800/60 flex flex-col justify-between">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex flex-col">
                    <h3 className="text-[16px] font-bold text-[#444050] dark:text-slate-100 tracking-tight">Campaign Actions</h3>
                    <p className="text-[12px] font-bold text-[#9692A4] dark:text-slate-400">Execution stats & engagement signals</p>
                  </div>
                  <div className="flex bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-0.5 rounded-lg shrink-0 ml-2 transition-colors">
                    <button className="px-3 py-1 bg-white dark:bg-slate-700 text-[12px] font-bold text-[#82868B] dark:text-slate-200 rounded-md shadow-sm transition-colors">LinkedIn</button>
                    <button className="px-3 py-1 text-[12px] font-bold text-[#82868B] dark:text-slate-400 hover:text-slate-300 transition-colors">Email</button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                   <div className="flex flex-col gap-4 flex-1">
                      <div className="flex items-center justify-between">
                         <span className="text-[13px] font-bold text-[#444050] dark:text-slate-400">Remaining Leads:</span>
                         <span className="text-[14px] font-semibold text-[#444050] dark:text-slate-200">110</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-[13px] font-bold text-[#444050] dark:text-slate-400">Follow-up message:</span>
                         <span className="text-[14px] font-semibold text-[#444050] dark:text-slate-200">10</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-[13px] font-bold text-[#444050] dark:text-slate-400">InMails Sent:</span>
                         <span className="text-[14px] font-semibold text-[#444050] dark:text-slate-200">20</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-[13px] font-bold text-[#444050] dark:text-slate-400">Emails:</span>
                         <span className="text-[14px] font-semibold text-[#444050] dark:text-slate-200">89</span>
                      </div>
                   </div>

                   <div className="flex flex-col gap-4 flex-1">
                      <div className="flex items-center justify-between">
                         <span className="text-[13px] font-bold text-slate-700 dark:text-slate-400">Profile Viewed:</span>
                         <span className="text-[14px] font-black text-slate-800 dark:text-slate-200">45</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-[13px] font-bold text-slate-700 dark:text-slate-400">Profile Followed:</span>
                         <span className="text-[14px] font-black text-slate-800 dark:text-slate-200">140</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-[13px] font-bold text-slate-700 dark:text-slate-400">Skills Endorsed:</span>
                         <span className="text-[14px] font-black text-slate-800 dark:text-slate-200">50</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-[13px] font-bold text-slate-700 dark:text-slate-400">Comments Added:</span>
                         <span className="text-[14px] font-black text-slate-800 dark:text-slate-200">54</span>
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-3 mt-8">
                   <span className="text-[14px] font-bold text-[#444050] dark:text-slate-100">Team:</span>
                   <div className="flex -space-x-2">
                     <img src="https://i.pravatar.cc/150?u=12" className="w-7 h-7 rounded-full border border-white dark:border-slate-900 transition-colors" />
                     <img src="https://i.pravatar.cc/150?u=18" className="w-7 h-7 rounded-full border border-white dark:border-slate-900 transition-colors" />
                     <img src="https://i.pravatar.cc/150?u=24" className="w-7 h-7 rounded-full border border-white dark:border-slate-900 transition-colors" />
                   </div>
                </div>
             </div>

             {/* Reply Performance Bars */}
             <div className="p-6 flex flex-col justify-between">
                 <div className="flex flex-col mb-6">
                    <h3 className="text-[16px] font-bold text-[#444050] dark:text-slate-100 tracking-tight">Reply Performance</h3>
                    <p className="text-[12px] font-bold text-[#9692A4] dark:text-slate-400">Top reply channel</p>
                 </div>

                 <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1.5">
                       <div className="flex justify-between text-[12px] font-bold">
                          <span className="text-[#6E6B7B] dark:text-slate-300 text-[14px] font-semibold">Follow-up</span>
                          <span className="text-[#4F6BFF] dark:text-[#8BA6FF]">80%</span>
                       </div>
                       <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden transition-colors">
                          <div className="bg-[#4F6BFF] h-full rounded-full" style={{width: '80%'}}></div>
                       </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                       <div className="flex justify-between text-[12px] font-bold">
                          <span className="text-[#6E6B7B] dark:text-slate-300 text-[14px] font-semibold">InMail</span>
                          <span className="text-emerald-500 dark:text-emerald-400">32%</span>
                       </div>
                       <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden transition-colors">
                          <div className="bg-emerald-500 h-full rounded-full" style={{width: '32%'}}></div>
                       </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                       <div className="flex justify-between text-[12px] font-bold">
                          <span className="text-[#6E6B7B] dark:text-slate-300 text-[14px] font-semibold">Email</span>
                          <span className="text-rose-500 dark:text-rose-400">11%</span>
                       </div>
                       <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden transition-colors">
                          <div className="bg-rose-500 h-full rounded-full" style={{width: '11%'}}></div>
                       </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                       <div className="flex justify-between text-[12px] font-bold">
                          <span className="text-[#6E6B7B] dark:text-slate-300 text-[14px] font-semibold">Connection Message</span>
                          <span className="text-[#4F6BFF] dark:text-[#8BA6FF]">79%</span>
                       </div>
                       <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden transition-colors">
                          <div className="bg-[#4F6BFF] h-full rounded-full" style={{width: '79%'}}></div>
                       </div>
                    </div>
                 </div>
             </div>
          </div>
        </div>

         {/* Right Column (Donut & Timeline) */}
        <div className="w-full xl:w-[300px] shrink-0 flex flex-col md:flex-row xl:flex-col gap-6">
           
           {/* Reply Analysis */}
           <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 md:p-6 rounded-2xl shadow-sm flex-1 xl:flex-none transition-colors">
             <h3 className="text-[16px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight mb-8">Reply Analysis</h3>
             
             {/* SVG Half Donut Mock */}
             <div className="relative w-[210px] h-[105px] mx-auto overflow-hidden mb-8">
               {/* Background Track dashed */}
               <svg viewBox="0 0 200 100" className="absolute top-0 w-full h-full">
                 <path d="M 10 100 A 90 90 0 0 1 190 100" fill="none" stroke="currentColor" className="text-[#f1f5f9] dark:text-slate-800 transition-colors" strokeWidth="18" strokeDasharray="4 8" strokeLinecap="round" />
               </svg>
               {/* Foreground dashed tracking 80% */}
               <svg viewBox="0 0 200 100" className="absolute top-0 w-full h-full">
                 <path d="M 10 100 A 90 90 0 0 1 190 100" fill="none" stroke="#4F6BFF" strokeWidth="18" strokeDasharray="6 4" strokeDashoffset="-20" strokeLinecap="round" className="opacity-90 stroke-dashoffset-20" />
               </svg>
               <div className="absolute bottom-0 w-full text-center flex flex-col pb-1">
                 <span className="text-[32px] font-semibold text-[#334155] dark:text-slate-100 leading-none">80%</span>
                 <span className="text-[14px] font-bold text-[#5E5873] dark:text-slate-400">Discussions</span>
               </div>
             </div>

             <div className="grid grid-cols-2 gap-y-3 mb-2">
                <div className="text-[14px] font-semibold text-[#444050] dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 pb-2">Status</div>
                <div className="text-[14px] font-semibold text-[#444050] dark:text-slate-200 text-right border-b border-slate-100 dark:border-slate-800 pb-2">Results</div>
                
                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#6366f1]"></div><span className="text-[13px] font-bold text-[#5E5873] dark:text-slate-400">Positive</span></div>
                <div className="text-[13px] font-bold text-[#5E5873] dark:text-slate-300 text-right">12%</div>

                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div><span className="text-[13px] font-bold text-[#5E5873] dark:text-slate-400">Neutral</span></div>
                <div className="text-[13px] font-bold text-[#5E5873] dark:text-slate-300 text-right">14%</div>

                <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div><span className="text-[13px] font-bold text-[#5E5873] dark:text-slate-400">Negative</span></div>
                <div className="text-[13px] font-bold text-[#5E5873] dark:text-slate-300 text-right">8%</div>
             </div>
           </div>

           {/* Timeline */}
           <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm transition-colors">
             <h3 className="text-[16px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight mb-8">Recent Campaign Activity</h3>
             
             <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-4 pl-8 flex flex-col gap-6">
                
                <div className="relative">
                   <div className="absolute -left-[43px] w-8 h-8 rounded-full bg-[#4F6BFF] text-white flex items-center justify-center ring-[6px] ring-white dark:ring-slate-900 transition-colors">
                      <Megaphone className="w-3.5 h-3.5" />
                   </div>
                   <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">09:14 AM</span>
                      <span className="text-[13px] font-semibold text-[#444050] dark:text-slate-200">Campaign started</span>
                      <span className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">by <span className="text-[#4F6BFF] font-semibold underline decoration-blue-200 cursor-pointer">Aman S.</span></span>
                   </div>
                </div>

                <div className="relative">
                   <div className="absolute -left-[43px] w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center ring-[6px] ring-white dark:ring-slate-900 transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                   </div>
                   <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">10:30 AM</span>
                      <span className="text-[13px] font-semibold text-[#444050] dark:text-slate-200">Reply received</span>
                      <span className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">from <span className="text-slate-800 dark:text-slate-200 font-semibold underline decoration-slate-300 dark:decoration-slate-600 cursor-pointer">Suresh K.</span></span>
                   </div>
                </div>

                <div className="relative">
                   <div className="absolute -left-[43px] w-8 h-8 rounded-full bg-rose-400 text-white flex items-center justify-center ring-[6px] ring-white dark:ring-slate-900 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                   </div>
                   <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">10:35 AM</span>
                      <span className="text-[13px] font-semibold text-[#444050] dark:text-slate-200 leading-tight">Follow-up message sent</span>
                      <span className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">by <span className="text-slate-600 dark:text-slate-300 font-semibold cursor-pointer">System</span></span>
                   </div>
                </div>

                <div className="relative">
                   <div className="absolute -left-[35px] w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 ring-[6px] ring-white dark:ring-slate-900 transition-colors"></div>
                   <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">10:35 AM</span>
                      <span className="text-[13px] font-semibold text-[#444050] dark:text-slate-200 leading-tight">Connection accepted</span>
                      <span className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">by <span className="text-[#4F6BFF] font-semibold underline decoration-blue-200 cursor-pointer">Suresh K.</span> (Prospect)</span>
                   </div>
                </div>

                <div className="relative mt-2">
                   <div className="absolute -left-[43px] w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center ring-[6px] ring-white dark:ring-slate-900 transition-colors">
                      <Pause className="w-3.5 h-3.5" />
                   </div>
                   <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">10:45 AM</span>
                      <span className="text-[13px] font-semibold text-[#444050] dark:text-slate-200 leading-tight">Campaign paused</span>
                      <span className="text-[12px] text-slate-500 dark:text-slate-400 font-medium pb-2">by <span className="text-[#4F6BFF] font-semibold underline decoration-blue-200 cursor-pointer">Aman S.</span></span>
                      <div className="flex items-center gap-1.5 text-[#4F6BFF] dark:text-[#8BA6FF] text-[12px] font-bold cursor-pointer hover:underline mt-1">
                         <ExternalLink className="w-3 h-3" />
                         Open Activity Log
                      </div>
                   </div>
                </div>

             </div>

           </div>

        </div>

      </div>
    </div>
  );
}
