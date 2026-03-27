"use client";

import { useState } from "react";
import { 
  Megaphone, 
  LogOut, 
  Sun, 
  Moon, 
  Search, 
  Home, 
  ChevronRight, 
  ChevronDown,
  X,
  Menu
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AdvancedBuilder from "../components/AdvancedBuilder";
import CampaignList from "../components/CampaignList";
import EmptyCampaignState from "../components/EmptyCampaignState";
import { useTheme } from "../components/ThemeProvider";

export default function Page() {
  const { theme, setTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState<"advanced" | "standard">("advanced");
  const [currentView, setCurrentView] = useState<"empty" | "dashboard" | "advanced">("empty");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#f4f6f8] dark:bg-[#020617] text-slate-800 dark:text-slate-200 font-sans overflow-hidden transition-colors">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-30 xl:hidden transition-opacity" 
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside className={`fixed xl:relative inset-y-0 left-0 w-[240px] xl:w-[280px] bg-white dark:bg-[#0f172a] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between shrink-0 h-full z-40 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}`}>
        {/* Top Section */}
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-[8px] mb-[24px] px-1">
            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 drop-shadow-sm">
               <defs>
                 <linearGradient id="logo-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#2F66F6" />
                   <stop offset="1" stopColor="#0FC3FF" />
                 </linearGradient>
               </defs>
               <g stroke="url(#logo-grad)">
                 {/* Box frame */}
                 <path d="M10 4.5H6.5C5.4 4.5 4.5 5.4 4.5 6.5V10" />
                 <path d="M19.5 14V17.5C19.5 18.6 18.6 19.5 17.5 19.5H14" />
                 
                 {/* Top left stroke */}
                 <circle cx="3.5" cy="15.5" r="1.5" />
                 <path d="M4.5 14.5L14.5 4.5" />
                 
                 {/* Main Arrow stroke */}
                 <circle cx="8.5" cy="20.5" r="1.5" />
                 <path d="M9.5 19.5L20.5 8.5" />
                 <path d="M16 8.5H20.5V13" />
                 
                 {/* Middle short stroke */}
                 <path d="M6.5 13.5L9.5 10.5" />
               </g>
            </svg>
            <span className="font-semibold text-[17px] text-[#00002B] dark:text-slate-100 tracking-tight">Frontend Task</span>
            <svg width="18" height="18  " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#9692A4] cursor-pointer hover:opacity-80 transition-opacity ml-auto">
              <rect x="3" y="3" width="18" height="18" rx="3.5" ry="3.5" />
              <line x1="15" y1="3" x2="15" y2="21" />
              <polyline points="8 9.5 11.5 12 8 14.5" />
            </svg>
          </div>

          {/* Nav */}
          <nav>
            <Link 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentView("dashboard"); }}
              className="flex items-center gap-[4px] bg-[linear-gradient(239.27deg,_#8BA6FF_-27.06%,_#3762EE_83.4%)] text-[#F6F6F6] text-[15px] px-4 py-3 rounded-[4px] font-medium shadow-[0_4px_12px_rgba(79,107,255,0.25)] transition-all hover:bg-[#435CE5]"
            >
              <Megaphone className="w-5 h-5" />
              Campaign
            </Link>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-6 flex flex-col gap-4 mt-auto">
          {/* User Profile Card */}
          <div className="bg-[#f8f9fa] dark:bg-slate-800/50 p-4 rounded-2xl flex flex-col gap-4 border border-slate-100 dark:border-slate-700/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="https://ui-avatars.com/api/?name=John+Doe&background=CBD5E1&color=334155" alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#22c55e] border-2 border-white rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-regular text-[#6E6B7B] dark:text-slate-300 leading-tight">John Doe</span>
                  <span className="text-[12px] text-[#B9B9C3] dark:text-slate-400 font-regular">Admin</span>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-white dark:bg-slate-700/50 p-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-600 transition-colors">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col gap-0.5 px-0.5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Email</span>
              <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">johndoe@gmail.com</span>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center bg-[#f8f9fa] dark:bg-slate-800 p-1.5 rounded-full border border-slate-100 dark:border-slate-700 transition-colors">
            <button 
              onClick={() => setTheme('light')}
              className={`flex-1 flex items-center justify-center gap-2 text-sm py-2 rounded-full transition-all ${theme === 'light' ? 'bg-white text-slate-800 shadow-sm border border-slate-100/50 font-semibold' : 'text-slate-400 font-medium hover:text-slate-600 dark:hover:text-slate-300'}`}
             >
              <Sun className={`w-4 h-4 ${theme === 'light' ? 'text-slate-800' : ''}`} />
              Light
            </button>
            <button 
              onClick={() => setTheme('dark')}
              className={`flex-1 flex items-center justify-center gap-2 text-sm py-2 rounded-full transition-all ${theme === 'dark' ? 'bg-slate-700 text-white shadow-sm border border-slate-600 font-semibold' : 'text-slate-400 font-medium hover:text-slate-600 dark:hover:text-slate-300'}`}
             >
              <Moon className={`w-4 h-4 ${theme === 'dark' ? 'text-white' : ''}`} />
              Dark
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 md:p-6 gap-4 md:gap-6 h-full overflow-hidden relative z-0">
        {/* Top Header */}
        <header className="bg-white dark:bg-[#0f172a] rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 h-[64px] md:h-[72px] px-4 md:px-6 flex items-center justify-between shrink-0 transition-colors">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 md:gap-2 text-sm">
             <button 
               onClick={() => setIsSidebarOpen(true)}
               className="p-1.5 -ml-1 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg xl:hidden transition-colors"
             >
               <Menu className="w-5 h-5" />
             </button>

             <div className="hidden sm:flex w-7 h-7 rounded bg-blue-50 dark:bg-blue-900/40 text-[#4F6BFF] items-center justify-center cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors" onClick={() => setCurrentView("dashboard")}>
                <Home className="w-4 h-4" />
             </div>
             <ChevronRight className="hidden sm:block w-4 h-4 text-slate-300 dark:text-slate-600 mx-1" />
             {currentView === "advanced" ? (
               <>
                 <span className="text-[#4F6BFF] font-medium cursor-pointer hover:underline" onClick={() => setCurrentView("dashboard")}>Campaign</span>
                 <ChevronRight className="w-4 h-4 text-slate-300 mx-1" />
                 <span className="text-slate-500 font-medium">Advance Campaign</span>
               </>
             ) : (
               <span className="text-slate-500 font-medium">Campaign</span>
             )}
          </div>

          {/* Header Profile */}
          <div className="flex items-center gap-3">
             <div className="flex flex-col items-end">
                <span className="text-sm font-semibold text-slate-800 leading-tight">John Doe</span>
                <span className="text-xs text-slate-400 font-medium">Admin</span>
             </div>
             <div className="relative">
                <img src="https://ui-avatars.com/api/?name=John+Doe&background=CBD5E1&color=334155" alt="Avatar" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#22c55e] border-[1.5px] border-white rounded-full"></div>
             </div>
          </div>
        </header>

        {/* Content Area */}
        {currentView === "empty" ? (
          <EmptyCampaignState onNewCampaign={() => setIsModalOpen(true)} />
        ) : currentView === "dashboard" ? (
          <CampaignList onNewCampaign={() => setIsModalOpen(true)} />
        ) : (
          <AdvancedBuilder />
        )}
      </main>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-[2px] transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 rounded-2xl shadow-xl w-full max-w-[620px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
             {/* Header */}
             <div className="flex items-start justify-between p-6 md:p-8 pb-4 md:pb-5">
               <div className="flex flex-col gap-[3px]">
                 <h2 className="text-[18px] md:text-[18px] font-medium text-[#5E5873] dark:text-slate-200 tracking-tight">Select Workflow Mode</h2>
                 <p className="text-[14px] md:text-[14px] text-[#5E5873] dark:text-slate-400 font-normal">Choose how you want your campaign to behave</p>
               </div>
               <button 
                 onClick={() => setIsModalOpen(false)}
                 className="p-2 -mr-2 -mt-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors flex items-center justify-center"
               >
                 <div className="w-[22px] h-[22px] border-[2px] border-current rounded-full flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                   <X className="w-[12px] h-[12px]" strokeWidth={3} />
                 </div>
               </button>
             </div>

             {/* Content Layout */}
             <div className="p-8 pt-0 flex flex-col gap-4">
               {/* Advanced Card */}
               <div 
                 onClick={() => setSelectedWorkflow("advanced")}
                 className={`cursor-pointer border-2 rounded-lg p-6 flex gap-[13px] transition-all duration-200 ${
                   selectedWorkflow === "advanced" 
                     ? "border-[#CFDAFE] dark:border-[#4F6BFF] bg-blue-50/20 dark:bg-blue-900/20 shadow-[0_4px_20px_rgba(79,107,255,0.08)]" 
                     : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
                 }`}
               >
                 {/* Radio */}
                 <div className="mt-0.5">
                   <div className={`w-[22px] h-[22px] rounded-full border-[2.5px] flex items-center justify-center transition-colors ${
                     selectedWorkflow === "advanced" ? "border-[#4F6BFF]" : "border-slate-300"
                   }`}>
                     {selectedWorkflow === "advanced" && <div className="w-[10px] h-[10px] rounded-full bg-[#4F6BFF]" />}
                   </div>
                 </div>

                 {/* Text Area */}
                 <div className="flex-1 flex flex-col gap-[4px] pt-0.5">
                   <div className="flex items-center gap-[17px]">
                     <h3 className="text-[14px] font-bold text-[#5E5873] dark:text-slate-200">Advanced Workflow</h3>
                     <span className="px-2.5 py-0.5 bg-[#dcfce7] dark:bg-[#166534] text-[#28C76F] dark:text-[#4ade80] text-[12px] font-medium rounded-full uppercase tracking-widest">
                       Recommended
                     </span>
                   </div>
                   <p className="text-[14px] text-[ #5E5873] dark:text-slate-400 font-normal mb-[10px]">Best for high-volume outreach</p>
                   
                   <div className="flex items-center gap-4 text-[13px] font-normal text-[#5E5873] dark:text-slate-500">
                     <div className="flex items-center gap-[6px]"><div className="w-1.5 h-1.5 rounded-full bg-[#B1B1B1]" /> Conditional logic</div>
                     <div className="flex items-center gap-[6px]"><div className="w-1.5 h-1.5 rounded-full bg-[#B1B1B1]" /> Multiple paths</div>
                     <div className="flex items-center gap-[6px]"><div className="w-1.5 h-1.5 rounded-full bg-[#B1B1B1]" /> More control</div>
                   </div>
                 </div>

                 {/* Miniature Graphic - Advanced */}
                 <div className="w-24 shrink-0 flex items-center justify-center">
                    <div className="w-[88px] h-[60px] relative shrink-0">
                      
                      {/* Back shadow card */}
                      <div className="absolute top-[6px] left-[8px] w-[68px] h-[50px] bg-[#f8fbff] rounded-[6px]  pointer-events-none"></div>
                      
                      {/* Main front card */}
                      <div className="absolute top-0 left-[4px] w-[68px] h-[50px] bg-[#eef7ff] rounded-[6px]  overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.03)] z-0 flex flex-col">
                        
                        {/* Header */}
                        <div className="h-2 w-full bg-[#5fa8f5]"></div>
                        
                        {/* Body container */}
                        <div className="relative flex-1 p-1.5 flex justify-between">
                          
                          {/* Left Column */}
                          <div className="flex flex-col w-[20px] h-full">
                            <div className="w-full h-[6px] bg-[#add5f8] rounded-[3px] flex items-center px-[2px] mb-1">
                              <div className="w-[3px] h-[3px] border-[0.5px] border-white rounded-full"></div>
                            </div>
                            <div className="w-full h-[6px] bg-white border border-[#cbe3fb] rounded-[3px] mb-auto shadow-sm"></div>
                            
                            {/* Bottom bar chart */}
                            <div className="flex items-end justify-between w-full h-[10px] mb-[2px]">
                               <div className="w-[1.5px] h-[6px] bg-[#8cc7f8] rounded-t-[0.5px]"></div>
                               <div className="w-[1.5px] h-[8px] bg-[#8cc7f8] rounded-t-[0.5px]"></div>
                               <div className="w-[1.5px] h-[5px] bg-[#8cc7f8] rounded-t-[0.5px]"></div>
                               <div className="w-[1.5px] h-[10px] bg-[#8cc7f8] rounded-t-[0.5px]"></div>
                               <div className="w-[1.5px] h-[7px] bg-[#8cc7f8] rounded-t-[0.5px]"></div>
                               <div className="w-[1.5px] h-[6px] bg-[#8cc7f8] rounded-t-[0.5px]"></div>
                               <div className="w-[1.5px] h-[8px] bg-[#8cc7f8] rounded-t-[0.5px]"></div>
                            </div>
                          </div>

                          {/* Center block */}
                          <div className="w-[14px] h-[18px] bg-[#e6f2fd] rounded-[2px] mt-[1px]"></div>
                          
                          {/* Right Column / Bottom check list */}
                          <div className="flex flex-col gap-[3px] w-[16px] justify-end pb-[2px]">
                            {[1,2,3].map(i => (
                               <div key={i} className="flex items-center gap-[3px]">
                                  <div className="flex-1 h-[1px] bg-[#badcfa] rounded-full"></div>
                                  <svg viewBox="0 0 10 10" fill="none" className="w-[5px] h-[5px] text-[#72b7f5]">
                                     <path d="M2.5 5.5L4 7L7.5 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                               </div>
                            ))}
                          </div>

                        </div>
                      </div>
                      
                      {/* Overlapping Badge: Left */}
                      <div className="absolute top-[21px] left-0 w-[20px] h-[8px] bg-[#70b3fa] rounded-full shadow-sm flex items-center px-[3px] border border-white/60 z-10">
                         <div className="w-[4px] h-[4px] border border-white/90 shadow-sm rounded-full bg-[#82bdf9]"></div>
                      </div>
                      
                      {/* Overlapping Badge: Right */}
                      <div className="absolute top-[16px] left-[56px] w-[26px] h-[16px] bg-[#70b3fa] rounded-[3px] shadow-sm border border-white/40 p-[2px] flex items-start gap-[3px] z-10">
                         <div className="w-[8px] h-[8px] bg-[#f0f7ff] rounded-[1.5px] mt-[1px] ml-[1px]"></div>
                         <div className="flex flex-col gap-[1.5px] mt-[2px]">
                            <div className="w-[10px] h-[1.5px] bg-[#f0f7ff] rounded-sm"></div>
                            <div className="w-[7px] h-[1.5px] bg-[#f0f7ff] rounded-sm"></div>
                         </div>
                         <div className="absolute bottom-[2px] right-[3px] w-[5px] h-[1.5px] bg-[#f0f7ff] rounded-sm"></div>
                      </div>
                      
                      {/* Overlapping Badge: Bottom */}
                      <div className="absolute top-[44px] left-[38px] w-[18px] h-[14px] bg-[#70b3fa] rounded-[3px] shadow-sm border border-white/40 z-10 flex p-[2px] gap-[2px]">
                         <div className="flex flex-col gap-[2px] mt-[1px] ml-[1px]">
                            <div className="w-[4px] h-[1.5px] bg-[#f0f7ff] rounded-sm"></div>
                            <div className="w-[3px] h-[1.5px] bg-[#f0f7ff] rounded-sm"></div>
                         </div>
                         <div className="w-[7px] h-[8px] bg-[#f0f7ff] rounded-[1.5px] mt-[1px] ml-auto"></div>
                      </div>
                      
                    </div>
                 </div>
               </div>

               {/* Standard Card */}
               <div 
                 onClick={() => setSelectedWorkflow("standard")}
                 className={`cursor-pointer border-2 rounded-lg p-6 flex gap-[13px] transition-all duration-200 ${
                   selectedWorkflow === "standard" 
                     ? "border-[#4F6BFF] bg-blue-50/20 dark:bg-blue-900/20 shadow-[0_4px_20px_rgba(79,107,255,0.08)]" 
                     : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
                 }`}
               >
                 {/* Radio */}
                 <div className="mt-0.5">
                   <div className={`w-[22px] h-[22px] rounded-full border-[2.5px] flex items-center justify-center transition-colors ${
                     selectedWorkflow === "standard" ? "border-[#4F6BFF]" : "border-slate-300"
                   }`}>
                     {selectedWorkflow === "standard" && <div className="w-[10px] h-[10px] rounded-full bg-[#4F6BFF]" />}
                   </div>
                 </div>

                 {/* Text Area */}
                 <div className="flex-1 flex flex-col gap-[4px] pt-0.5">
                   <h3 className="text-[14px] font-bold text-[#5E5873] dark:text-slate-200">Standard Workflow</h3>
                   <p className="text-[14px] text-[#5E5873] dark:text-slate-400 font-normal mb-[10px]">Best for beginners</p>
                   
                   <div className="flex items-center gap-4 text-[13px] font-normal text-[#5E5873] dark:text-slate-500">
                     <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#B1B1B1]" /> Linear steps</div>
                     <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#B1B1B1]" /> No conditions</div>
                     <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#B1B1B1]" /> Easy Setup</div>
                   </div>
                 </div>

                 {/* Miniature Graphic - Standard */}
                 <div className="w-24 shrink-0 flex items-center justify-center">
                    <div className="w-[74px] h-[58px] relative shrink-0">
                      {/* Back card */}
                      <div className="absolute bottom-0 left-0 w-[70px] h-[54px] bg-[#f8fbff] rounded-[7px] border-2 border-slate-100/80 pointer-events-none"></div>
                      
                      {/* Front card */}
                      <div className="absolute top-0 right-0 w-[70px] h-[54px] bg-[#eef7ff] rounded-[7px] border border-white overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)] z-10 flex flex-col">
                        
                        {/* Header */}
                        <div className="h-2.5 w-full bg-[#5fa8f5]"></div>
                        
                        {/* Body */}
                        <div className="flex-1 px-[7px] py-[6px] flex gap-[7px]">
                           
                           {/* Left Column */}
                           <div className="flex flex-col w-[26px] h-full shrink-0">
                             <div className="w-full h-2 bg-[#add5f8] rounded-sm mb-[3px]"></div>
                             <div className="w-full h-2.5 bg-[#74b8f6] rounded-sm mb-auto"></div>
                             
                             {/* Bar Chart */}
                             <div className="flex items-end justify-between h-[10px] w-full px-[0.5px]">
                                <div className="w-[2.5px] h-[6px] bg-[#8cc7f8] rounded-t-[1px]"></div>
                                <div className="w-[2.5px] h-[8px] bg-[#8cc7f8] rounded-t-[1px]"></div>
                                <div className="w-[2.5px] h-[4px] bg-[#8cc7f8] rounded-t-[1px]"></div>
                                <div className="w-[2.5px] h-[10px] bg-[#8cc7f8] rounded-t-[1px]"></div>
                                <div className="w-[2.5px] h-[7px] bg-[#8cc7f8] rounded-t-[1px]"></div>
                                <div className="w-[2.5px] h-[6px] bg-[#8cc7f8] rounded-t-[1px]"></div>
                             </div>
                           </div>
                           
                           {/* Right Column */}
                           <div className="flex flex-col justify-between w-full h-full py-[1px]">
                             {[1,2,3,4,5,6].map(i => (
                               <div key={i} className="flex items-center justify-between w-full">
                                  <div className="w-[14px] h-[1.5px] bg-[#b7d9f7] rounded-full"></div>
                                  <svg viewBox="0 0 10 10" fill="none" className="w-[8px] h-[8px] text-[#72b7f5] shrink-0">
                                     <path d="M2.5 5.5L4 7L7.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                               </div>
                             ))}
                           </div>

                        </div>
                      </div>
                    </div>
                 </div>
               </div>
             </div>

             {/* Footer */}
             <div className="flex items-center justify-end gap-[8px] p-6 md:p-8 pt-0 mt-2">
               <button 
                 onClick={() => setIsModalOpen(false)}
                 className="px-[22px] py-[10px] text-[14px] font-medium text-[#9692A4] bg-[#E8E8E8] hover:bg-slate-200 rounded-[5px] transition-colors"
               >
                 Close
               </button>
               <button 
                 onClick={() => {
                   setIsModalOpen(false);
                   if (selectedWorkflow === "advanced") {
                     setCurrentView("advanced");
                   }
                 }}
                 className="px-[22px] py-[10px] text-[14px] font-medium text-[#fff] bg-[linear-gradient(239.27deg,#8BA6FF_-27.06%,#3762EE_83.4%)] hover:opacity-90 rounded-[5px] shadow-[0_4px_12px_rgba(55,98,238,0.25)] transition-all"
               >
                 Next
               </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
