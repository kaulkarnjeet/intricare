"use client";

import { useState } from "react";
import { 
  ChevronRight, 
  ChevronUp,
  ChevronDown,
  FileText, 
  Users, 
  Globe,
  Upload,
  CheckCircle2,
  ListFilter,
  Trash2,
  Check,
  Search,
  CloudDownload,
  X,
  Plus,
  Settings,
  Gauge
} from "lucide-react";
import StatsDashboard from "./StatsDashboard";

// Custom Linkedin Icon
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function AdvancedBuilder() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);
  const [importMethod, setImportMethod] = useState<"linkedin" | "csv" | "lookalike" | "webhook" | null>(null);
  const [csvState, setCsvState] = useState<"initial" | "uploaded">("initial");
  const [isLaunched, setIsLaunched] = useState(false);
  
  // Lookalike Modal State
  const [lookalikeModalState, setLookalikeModalState] = useState<"none" | "empty" | "list">("none");
  const [selectedLookalike, setSelectedLookalike] = useState<string | null>(null);

  // Helper for CSV
  const handleSimulateUpload = () => setCsvState("uploaded");

  // Step 1 Footer Action
  const handleStep1Next = () => {
    if (!importMethod) return;
    if (importMethod === "lookalike") {
      // Toggle empty vs list playfully for the prototype
      setLookalikeModalState(lookalikeModalState === "none" || lookalikeModalState === "list" ? "empty" : "list");
    } else {
      setCurrentStep(2);
    }
  };

  // Step 1: Target Audience
  const renderStep1 = () => (
    <>
      <div className="flex gap-6 relative">
        <div className="flex flex-col items-center">
          {importMethod ? (
            <div className="bg-white dark:bg-slate-900 z-10 py-1 transition-colors"><CheckCircle2 className="w-5 h-5 text-[#22c55e] dark:text-emerald-400" /></div>
          ) : (
            <div className="bg-white dark:bg-slate-900 z-10 py-1 transition-colors"><div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#4F6BFF] mt-0.5" /></div>
          )}
          <div className="w-[1.5px] bg-slate-200 dark:bg-slate-800 flex-1 -mt-2 mb-[-16px] transition-colors" />
        </div>

        <div className="flex-1 pb-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h3 className="text-[15px] font-medium text-[#444050] dark:text-slate-100 tracking-tight">Choose Import Method</h3>
            </div>
            <ChevronUp className="w-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
            {/* LinkedIn Search */}
            <div 
              onClick={() => { setImportMethod("linkedin"); setCsvState("initial"); }}
              className={`relative cursor-pointer p-6 rounded-xl border-2 transition-all min-h-[160px] ${
                importMethod === "linkedin" ? "border-[#4F6BFF] shadow-md bg-blue-50/20 dark:bg-blue-900/20" : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-900"
              }`}
            >
              {importMethod === "linkedin" && (<div className="absolute top-2.5 right-2.5 bg-[#4F6BFF] text-white p-[3px] rounded"><Check className="w-3.5 h-3.5" strokeWidth={3} /></div>)}
              <div className="text-[#4F6BFF] dark:text-[#8BA6FF] mb-4"><LinkedinIcon className="w-[26px] h-[26px] stroke-[1.8]" /></div>
              <h4 className="font-semibold text-[14px] text-[#5E5873] dark:text-slate-200 mb-2 leading-tight tracking-tight">LinkedIn<br/>Search</h4>
              <p className="text-[12px] text-[#5E5873] dark:text-slate-400 font-regular leading-relaxed">(Basic, Sales Nav, Post, Group or Event URL)</p>
            </div>

            {/* Upload CSV */}
            <div 
              onClick={() => setImportMethod("csv")}
              className={`relative cursor-pointer p-6 rounded-xl border-2 transition-all min-h-[160px] ${
                importMethod === "csv" ? "border-[#4F6BFF] shadow-md bg-blue-50/20 dark:bg-blue-900/20" : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-900"
              }`}
            >
              {importMethod === "csv" && (<div className="absolute top-2.5 right-2.5 bg-[#4F6BFF] text-white p-[3px] rounded"><Check className="w-3.5 h-3.5" strokeWidth={3} /></div>)}
              <div className="text-slate-400 dark:text-slate-500 mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                  <rect x="3" y="4" width="18" height="18" rx="3" />
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h4 className="font-semibold text-[14px] text-[#5E5873] dark:text-slate-200 mb-2 leading-tight tracking-tight">Upload<br/>CSV File</h4>
              <p className="text-[12px] text-[#5E5873] dark:text-slate-400 font-regular leading-relaxed">Upload LinkedIn profiles via CSV. <span className="text-[#4F6BFF] dark:text-[#8BA6FF] font-semibold hover:underline">Download Sample</span></p>
            </div>

            {/* Lookalike */}
            <div 
              onClick={() => { setImportMethod("lookalike"); setCsvState("initial"); setLookalikeModalState("empty"); }}
              className={`relative cursor-pointer p-[24px] rounded-[8px] border-[1.5px] transition-all min-h-[160px] flex flex-col items-center justify-center text-center ${
                importMethod === "lookalike" ? "border-[#4F6BFF] shadow-md bg-blue-50/20 dark:bg-blue-900/20" : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-900"
              }`}
            >
              {importMethod === "lookalike" && (<div className="absolute top-2.5 right-2.5 bg-[#4F6BFF] text-white p-[3px] rounded"><Check className="w-3.5 h-3.5" strokeWidth={3} /></div>)}
              <div className="text-slate-400 dark:text-slate-500 mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                  <circle cx="9" cy="8" r="4" />
                  <path d="M9 14c-4 0-6 2-6 5v1h10" />
                  <path d="M15 10h6" />
                  <path d="M15 14h6" />
                  <path d="M21 18h-2" />
                </svg>
              </div>
              <h4 className="font-semibold text-[14px] text-[#5E5873] dark:text-slate-200 mb-2 leading-tight tracking-tight">Lookalike<br/>Audience</h4>
              <p className="text-[12px] text-[#5E5873] dark:text-slate-400 font-regular leading-relaxed">Use Lead Finder to find audience.</p>
            </div>

            {/* Inbound Webhook */}
            <div 
              onClick={() => { setImportMethod("webhook"); setCsvState("initial"); }}
              className={`relative cursor-pointer p-6 rounded-xl border-2 transition-all min-h-[160px] ${
                importMethod === "webhook" ? "border-[#4F6BFF] shadow-md bg-blue-50/20 dark:bg-blue-900/20" : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-white dark:bg-slate-900"
              }`}
            >
              {importMethod === "webhook" && (<div className="absolute top-2.5 right-2.5 bg-[#4F6BFF] text-white p-[3px] rounded"><Check className="w-3.5 h-3.5" strokeWidth={3} /></div>)}
              <div className="text-slate-400 dark:text-slate-500 mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[26px] h-[26px]">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M8 11v5" />
                  <path d="M8 8v.01" strokeWidth="2.5" />
                  <path d="M12 16v-5" />
                  <path d="M12 13a2 2 0 0 1 4 0v3" />
                </svg>
              </div>
              <h4 className="font-semibold text-[14px] !text-[#5E5873] dark:!text-slate-200 mb-2 leading-tight tracking-tight">Inbound<br/>Webhook</h4>
              <p className="text-[12px] text-[#5E5873] dark:text-slate-400 font-regular leading-relaxed">Sync leads from zapier, n8n make in real time</p>
            </div>
          </div>
        </div>
      </div>
      
      {importMethod === "linkedin" && (
         <div className="flex gap-6 relative animate-in slide-in-from-top-4 fade-in duration-300">
           <div className="flex flex-col items-center">
             <div className="bg-white dark:bg-slate-900 z-10 py-1 transition-colors"><div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#4F6BFF] mt-0.5" /></div>
           </div>
           
           <div className="flex-1 pb-10">
             <div className="mb-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-[8px] flex items-center shadow-sm transition-colors">
                <span className="text-[15px] font-medium text-[#5E5873] dark:text-slate-200">Paste LinkedIn Search URL</span>
             </div>
             
             <div className="bg-white dark:bg-slate-900 p-5 rounded-[8px] border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
                <div className="flex lg:flex-row flex-col lg:items-center justify-between mb-5 gap-3">
                  <div className="flex items-center flex-wrap gap-[6px] text-[14px] text-[#5E5873] dark:text-slate-300 font-normal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#4F6BFF" className="stroke-[#4F6BFF] dark:stroke-[#8BA6FF]" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{width: 16, height: 16}}>
                       <rect x="3" y="3" width="18" height="18" rx="4" />
                       <path d="M8 11v5" />
                       <path d="M8 8v.01" strokeWidth="2.5" />
                       <path d="M12 16v-5" />
                       <path d="M12 13a2 2 0 0 1 4 0v3" />
                    </svg>
                    <span>Find your target audience with</span> 
                    <span className="text-[#4F6BFF] dark:text-[#8BA6FF] underline underline-offset-[3px] decoration-1 decoration-[#4F6BFF]/60 dark:decoration-[#8BA6FF]/60 hover:decoration-[#4F6BFF] dark:hover:decoration-[#8BA6FF] cursor-pointer transition-colors">LinkedIn Search</span> 
                    <span>or</span>
                    <span className="text-[#4F6BFF] dark:text-[#8BA6FF] underline underline-offset-[3px] decoration-1 decoration-[#4F6BFF]/60 dark:decoration-[#8BA6FF]/60 hover:decoration-[#4F6BFF] dark:hover:decoration-[#8BA6FF] cursor-pointer transition-colors">Sales Navigator</span>
                    <span>or</span>
                    <span className="text-[#4F6BFF] dark:text-[#8BA6FF] underline underline-offset-[3px] decoration-1 decoration-[#4F6BFF]/60 dark:decoration-[#8BA6FF]/60 hover:decoration-[#4F6BFF] dark:hover:decoration-[#8BA6FF] cursor-pointer transition-colors">Post URL</span>
                    <span>or</span>
                    <span className="text-[#4F6BFF] dark:text-[#8BA6FF] underline underline-offset-[3px] decoration-1 decoration-[#4F6BFF]/60 dark:decoration-[#8BA6FF]/60 hover:decoration-[#4F6BFF] dark:hover:decoration-[#8BA6FF] cursor-pointer transition-colors">Group URL</span>
                  </div>
                  
                  <span className="flex items-center gap-[4px] text-[#4F6BFF] dark:text-[#8BA6FF] text-[13px] hover:underline underline-offset-[3px] decoration-1 cursor-pointer font-normal shrink-0 transition-colors">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]">
                       <circle cx="12" cy="12" r="10" />
                       <path d="M12 16v-4" />
                       <path d="M12 8h.01" strokeWidth="2.5" />
                     </svg>
                     Search Guide
                  </span>
                </div>
                
                <div className="flex items-center gap-[12px]">
                  <input 
                    type="text" 
                    placeholder="https://www.linkedin.com/search/results/people/?keywords=" 
                    className="flex-1 px-4 py-[10px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[6px] text-[14px] text-slate-800 dark:text-slate-200 placeholder-[#b4b4c0] dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#4F6BFF]/50 focus:border-[#4F6BFF] transition-all"
                  />
                  <button className="bg-[#4F6BFF] hover:bg-[#435CE5] text-white px-[24px] py-[10px] rounded-[6px] text-[14px] font-medium transition-colors shadow-sm shrink-0">
                    Validate
                  </button>
                </div>
             </div>
           </div>
         </div>
      )}

      {importMethod === "csv" && (
        <div className="flex gap-6 relative animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="flex flex-col items-center">
            {csvState === 'uploaded' ? (
              <div className="bg-white dark:bg-slate-900 z-10 py-1 transition-colors"><CheckCircle2 className="w-5 h-5 text-[#22c55e] dark:text-emerald-400" /></div>
            ) : (
              <div className="bg-white dark:bg-slate-900 z-10 py-1 transition-colors"><div className="w-[18px] h-[18px] rounded-full border-[2.5px] border-[#4F6BFF] mt-0.5" /></div>
            )}
            {csvState === "uploaded" && <div className="w-[1.5px] bg-slate-200 dark:bg-slate-800 flex-1 -mt-2 mb-[-16px] transition-colors" />}
          </div>
          
          <div className="flex-1 pb-10 w-full">
            <div className="mb-[24px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 py-[16px] px-[20px] rounded-[6px] flex items-center justify-between shadow-sm transition-colors">
               <div className="flex items-center gap-[12px]">
                 <span className="text-[15px] font-medium text-[#5E5873] dark:text-slate-200">Upload CSV File</span>
                 <span className="bg-[#F3F2F7] dark:bg-slate-800 text-[#5e5873] dark:text-slate-300 text-[12px] font-medium py-[4px] px-[10px] rounded-[4px] transition-colors">Step 1 of 2</span>
               </div>
               <ChevronUp className="w-5 h-5 text-[#b4b4c0] dark:text-slate-500" strokeWidth={2} />
            </div>

            {csvState === 'initial' && (
                <div className="flex flex-col w-full">
                  <div 
                    onClick={handleSimulateUpload}
                    className="w-full h-[220px] border-[1.5px] border-dashed border-[#4F6BFF]/50 dark:border-[#4F6BFF]/40 bg-[#Fbfcff] dark:bg-slate-900/50 rounded-[6px] flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50/40 dark:hover:bg-slate-800/80 mb-[16px] transition-colors"
                  >
                    <div className="w-[36px] h-[36px] bg-[#EEF2FF] dark:bg-blue-900/40 rounded-[6px] flex items-center justify-center mb-[16px] transition-colors">
                      <Upload className="w-[18px] h-[18px] text-[#4F6BFF] dark:text-[#8BA6FF]" strokeWidth={2} />
                    </div>
                    <p className="text-[15px] font-normal text-[#4F6BFF] dark:text-[#8BA6FF] mb-[8px]">Drag a File or click a browse</p>
                    <p className="text-[13px] text-[#8e8b99] dark:text-slate-400 font-normal">File with up to 100 rows works best</p>
                  </div>
                  
                  <div className="flex items-center gap-[8px] cursor-pointer group w-max mt-2">
                     <CloudDownload className="w-[18px] h-[18px] text-[#4F6BFF] dark:text-[#8BA6FF]" strokeWidth={1.8} />
                     <span className="text-[14px] text-[#8e8b99] dark:text-slate-400 group-hover:text-[#4F6BFF] dark:group-hover:text-[#8BA6FF] transition-colors font-normal">Download a sample file</span>
                  </div>
                </div>
            )}
            
            {csvState === 'uploaded' && (
               <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[8px] flex flex-col mt-[16px] animate-in fade-in slide-in-from-bottom-2 duration-300 transition-colors">
                  <div className="p-[24px] border-b border-slate-200 dark:border-slate-800 flex justify-between items-start transition-colors">
                     <div className="flex flex-col gap-[8px]">
                        <h3 className="text-[18px] font-medium text-[#444050] dark:text-slate-100">Map Properties</h3>
                        <div className="flex items-center gap-[8px]">
                           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[14px] h-[14px] text-[#4F6BFF] dark:text-[#8BA6FF]"><path d="M20 6L9 17l-5-5"/></svg>
                           <span className="text-[14px] text-[#5e5873] dark:text-slate-400 font-normal">Make sure file includes contact name and phone number</span>
                        </div>
                     </div>
                     <button className="p-[8px] border border-red-200 dark:border-red-900/50 text-red-500 dark:text-red-400 rounded-[6px] hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                        <Trash2 className="w-[18px] h-[18px]" strokeWidth={1.5} />
                     </button>
                  </div>

                  <div className="flex flex-col lg:flex-row">
                     {/* Left Panel */}
                     <div className="flex-[6.5] border-r border-slate-200 dark:border-slate-800 p-[24px] transition-colors">
                        <div className="flex gap-[32px] mb-[16px]">
                           <div className="flex-1 text-[13px] font-semibold text-[#444050] dark:text-slate-300 pl-2">Contact Field</div>
                           <div className="flex-1 text-[13px] font-semibold text-[#444050] dark:text-slate-300 pl-2">CSV Column</div>
                        </div>

                        <div className="flex flex-col gap-[16px]">
                           {[
                              { label: "Full name", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[16px] h-[16px]"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-6 2-6 6h12c0-4-2-6-6-6z"/></svg>, count: 35 },
                              { label: "First name", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[16px] h-[16px]"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-6 2-6 6h12c0-4-2-6-6-6z"/></svg>, count: 3 },
                              { label: "Last name", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[16px] h-[16px]"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-6 2-6 6h12c0-4-2-6-6-6z"/></svg>, count: 12 },
                              { label: "Company Name", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[16px] h-[16px]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, count: 36 },
                              { label: "Position", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[16px] h-[16px]"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>, count: 25 },
                              { label: "Headline", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[16px] h-[16px]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>, count: 25 },
                           ].map((item, idx) => (
                               <div key={idx} className="flex gap-[16px] md:gap-[32px] items-center">
                                 <div className="flex-1 flex items-center gap-[12px] p-[10px] px-[16px] border border-slate-200 dark:border-slate-700 rounded-[6px] bg-white dark:bg-slate-800/50 transition-colors">
                                    <div className="w-[20px] h-[20px] rounded-[4px] border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shrink-0 transition-colors">
                                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[12px] h-[12px]"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
                                    </div>
                                    <span className="text-[13.5px] text-[#5e5873] dark:text-slate-300 font-normal">{item.label}</span>
                                 </div>
                                 <div className="flex-1 flex items-center justify-between p-[10px] px-[16px] border border-slate-200 dark:border-slate-700 rounded-[6px] bg-white dark:bg-slate-800/50 text-[#5e5873] dark:text-slate-300 transition-colors">
                                    <div className="flex items-center gap-[10px] text-[#8e8b99] dark:text-slate-400">
                                       {item.icon}
                                       <span className="text-[13.5px] text-[#5e5873] dark:text-slate-300 font-normal">{item.label}</span>
                                    </div>
                                    <span className="text-[13px] text-[#8e8b99] dark:text-slate-400 font-normal">({item.count})</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Right Panel */}
                     <div className="flex-[3.5] p-[24px] flex flex-col">
                        <div className="flex items-center gap-[16px] mb-[16px]">
                           <h4 className="text-[14px] font-semibold text-[#444050] dark:text-slate-100">Unmapped Works</h4>
                           <div className="w-[1px] h-[16px] bg-slate-200 dark:bg-slate-800 transition-colors"></div>
                        </div>

                        <div className="relative mb-[16px]">
                           <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-slate-400 dark:text-slate-500" />
                           <input type="text" placeholder="Search" className="w-full pl-[36px] pr-[12px] py-[10px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[6px] text-[13px] font-normal text-slate-800 dark:text-slate-200 placeholder-slate-300 dark:placeholder-slate-600 focus:outline-none focus:border-[#4F6BFF]/50 transition-colors" />
                        </div>

                        <div className="flex flex-col gap-[12px] flex-1 mb-[20px]">
                           {[
                              { label: "Location", leftCount: 9, rightCount: 3 },
                              { label: "Industry", leftCount: 3, rightCount: 3 },
                              { label: "Notes", leftCount: 9, rightCount: 9 },
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between p-[10px] px-[16px] border border-slate-200 dark:border-slate-800 rounded-[6px] bg-[#f8f9fc] dark:bg-slate-800/40 hover:bg-[#f1f4fb] dark:hover:bg-slate-800 cursor-pointer transition-colors shadow-sm">
                                 <div className="flex items-center gap-[12px]">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[14px] h-[14px] text-[#8e8b99] dark:text-slate-400"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
                                    <span className="text-[13px] text-[#5e5873] dark:text-slate-300 font-normal">{item.label} ({item.leftCount})</span>
                                 </div>
                                 <span className="text-[13px] text-[#8e8b99] dark:text-slate-400 font-normal">({item.rightCount})</span>
                              </div>
                           ))}
                        </div>

                        <div className="flex justify-end mt-auto">
                           <span className="text-[13px] text-[#4F6BFF] dark:text-[#8BA6FF] cursor-pointer hover:underline font-medium transition-colors">Clear All Matched</span>
                        </div>
                     </div>
                  </div>
               </div>
            )}
            
          </div>
        </div>
      )}

      {/* Footer Next Button */}
      {/* Footer Next Button */}
      <div className="mt-auto flex justify-end w-full pt-8 pb-8 md:pb-10 shrink-0 mb-4 md:mb-6">
        <button 
           onClick={handleStep1Next}
           disabled={!importMethod}
           className={`px-8 py-[10px] text-white text-[14px] font-medium rounded-[6px] shadow-[0_4px_12px_rgba(79,107,255,0.25)] transition-all ${!importMethod ? "bg-[#3664EE]/80 cursor-not-allowed" : "bg-[#4F6BFF] hover:bg-[#435CE5]"}`}
        >
          Next
        </button>
      </div>
    </>
  );

  // Step 2: Sender Profiles
  const renderStep2 = () => (
    <div className="flex flex-col flex-1 relative animate-in slide-in-from-right-4 duration-300">
      <div className="flex items-center mb-[32px] pt-[8px]">
        <div className="flex items-center w-max border-[1.5px] border-[#4F6BFF]/80 rounded-[6px] overflow-hidden shadow-sm">
          <button className="px-[24px] md:px-[32px] py-[10px] text-[14px] font-medium text-[#4F6BFF] dark:text-blue-300 bg-[#DEE9FF]/70 dark:bg-[#4F6BFF]/30 border-r-[1.5px] border-[#4F6BFF]/80 transition-colors">LinkedIn Profile</button>
          <button className="px-[24px] md:px-[32px] py-[10px] text-[14px] font-medium text-[#4F6BFF] dark:text-blue-300 bg-white dark:bg-transparent hover:bg-[#DEE9FF]/20 dark:hover:bg-[#4F6BFF]/10 transition-colors">Email Accounts</button>
        </div>
      </div>

      <div className="border border-[#e2e8f0] dark:border-slate-800 rounded-[8px] bg-white dark:bg-slate-900 shadow-sm flex-1 flex flex-col w-full mb-8 overflow-hidden transition-colors">
        {/* Card Header matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-center justify-between px-[24px] py-[20px] border-b border-[#e2e8f0] dark:border-slate-800 gap-4 transition-colors">
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center gap-[10px]">
               <div className="w-[20px] h-[20px] bg-[#3664EE] rounded-[4px] text-white flex items-center justify-center font-bold text-[12px] shadow-sm">in</div>
               <h3 className="text-[15px] font-semibold text-[#5e5873] dark:text-slate-100 tracking-tight">LinkedIn Profile</h3>
            </div>
            <p className="text-[13px] text-[#8e8b99] dark:text-slate-400 font-normal">Pick which LinkedIn profiles you want to use for this campaign.</p>
          </div>
          <button className="px-[16px] py-[8px] bg-[#3664EE] text-white text-[13px] font-medium rounded-[6px] hover:bg-[#435CE5] transition-colors flex items-center gap-[6px] shadow-sm shrink-0 w-max">
            <Plus className="w-[14px] h-[14px]" strokeWidth={2.5} />
            Add Account
          </button>
        </div>

        {/* Action Bar (Show & Search) */}
        <div className="flex flex-wrap items-center justify-between px-[24px] py-[20px] gap-4">
           <div className="text-[13px] font-normal text-[#8e8b99] dark:text-slate-400 flex items-center w-full sm:w-auto">Show &nbsp;&nbsp;<span className="text-[#b4b4c0] dark:text-slate-500">10</span> &nbsp;<ChevronDown className="w-[14px] h-[14px] ml-1 dark:text-slate-500" /></div>
           <div className="relative w-full sm:w-auto">
              <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[14px] h-[14px] text-[#b4b4c0] dark:text-slate-500" />
              <input type="text" placeholder="Search" className="pl-[36px] pr-[12px] py-[8px] border border-[#e2e8f0] dark:border-slate-800 bg-white dark:bg-slate-950 rounded-[6px] text-[13px] text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#4F6BFF]/50 w-full sm:w-[220px] placeholder-[#b4b4c0] dark:placeholder-slate-600 transition-colors" />
           </div>
        </div>

        {/* Table container */}
        <div className="overflow-x-auto w-full border-t border-[#e2e8f0] dark:border-slate-800 transition-colors">
        <table className="w-full text-left">
          <thead className="bg-[#f8f8fb] dark:bg-slate-800/50 border-b border-[#e2e8f0] dark:border-slate-800 text-[12px] font-semibold text-[#5e5873] dark:text-slate-300 uppercase tracking-wider transition-colors">
            <tr>
              <th className="px-[24px] py-[14px] w-[60px]">
                <div className="w-[16px] h-[16px] rounded-[3px] border-[1.5px] border-[#d8d6de] dark:border-slate-600 mx-auto transition-colors"></div>
              </th>
              <th className="px-[24px] py-[14px]">Name</th>
              <th className="px-[24px] py-[14px] text-center">Health</th>
              <th className="px-[24px] py-[14px]">Daily Limits</th>
              <th className="px-[24px] py-[14px]">Account Type</th>
              <th className="px-[24px] py-[14px]">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-900 transition-colors">
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td className="px-[24px] py-[16px]">
                <div className="w-[16px] h-[16px] rounded-[3px] border-[1.5px] border-[#d8d6de] dark:border-slate-600 mx-auto transition-colors"></div>
              </td>
              <td className="px-[24px] py-[16px]">
                <div className="flex items-center gap-[12px]">
                  <img src="https://i.pravatar.cc/150?u=edgar" alt="Edgar" className="w-[36px] h-[36px] rounded-full border border-slate-200 dark:border-slate-700 transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-[14.5px] font-semibold text-[#5e5873] dark:text-slate-200">Edgar Jones</span>
                    <span className="text-[12.5px] text-[#8e8b99] dark:text-slate-400 font-normal">1,250 connections</span>
                  </div>
                </div>
              </td>
              <td className="px-[24px] py-[16px]">
                {/* Health Gauge specifically matching orange color */}
                <div className="relative w-[36px] h-[36px] mx-auto border-[3px] border-[#ffe8d6] dark:border-orange-900/50 rounded-full flex items-center justify-center transition-colors">
                   <div className="absolute inset-[-3px] border-[3px] border-transparent border-t-[#ff9f43] border-r-[#ff9f43] rounded-full rotate-45"></div>
                   <span className="text-[12px] font-semibold text-[#5e5873] dark:text-slate-200 relative z-10">72</span>
                </div>
              </td>
              <td className="px-[24px] py-[16px]">
                <span className="px-[12px] py-[5px] bg-white dark:bg-slate-800/50 border border-[#d8d6de] dark:border-slate-700 rounded-[4px] text-[13px] font-normal text-[#5e5873] dark:text-slate-300 whitespace-nowrap transition-colors">
                  Invites: 40 / day
                </span>
              </td>
              <td className="px-[24px] py-[16px]">
                <div className="flex items-center gap-[8px] font-normal text-[13.5px] text-[#8e8b99] dark:text-slate-300">
                   <div className="w-[18px] h-[18px] bg-[#ff9f43] text-white flex items-center justify-center rounded-[3px] text-[11px] font-bold">in</div>
                   Premium
                </div>
              </td>
              <td className="px-[24px] py-[16px]">
                <span className="px-[14px] py-[5px] bg-[#28c76f] text-white text-[12px] font-semibold rounded-[20px] whitespace-nowrap">
                  Connected
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

      <div className="mt-auto flex justify-end w-full pt-8 pb-8 md:pb-10 shrink-0 mb-4 md:mb-6 gap-3 md:gap-[7px]">
        <button 
           onClick={() => setCurrentStep(1)}
           className="px-[22px] py-[10px] text-[#4F6BFF] dark:text-[#8BA6FF] text-[14px] font-medium bg-white dark:bg-transparent border-2 border-[#4F6BFF] dark:border-[#8BA6FF]/60 rounded-[5px] hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all flex items-center gap-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px]">
             <path d="M9 14 4 9l5-5" />
             <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
          </svg>
          Previous
        </button>
        <button 
           onClick={() => setCurrentStep(3)}
           className="px-[22px] py-[10px] text-[#fff] text-[14px] font-medium bg-[#3664EE] border-2 border-[#4F6BFF] rounded-[5px] hover:bg-blue-50 transition-all flex items-center gap-2"
        >
          Submit
        </button>
      </div>
    </div>
  );

  // Step 3: Settings
  const renderStep3 = () => (
    <div className="flex flex-col flex-1 relative animate-in slide-in-from-right-4 duration-300 gap-8 pb-32">
       <div>
         <label className="block text-[16px] font-medium text-[#444050] dark:text-slate-100 mb-2">Campaign name</label>
         <input 
            type="text" 
            defaultValue="New Outreach Campaign"
            className="w-full px-4 py-3 border border-[#4F6BFF] dark:border-[#4F6BFF]/60 bg-white dark:bg-slate-950 rounded-xl text-[14px] font-regular text-[#334155] dark:text-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4F6BFF]/20 transition-colors"
         />
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
          {/* Left panel: Window */}
          <div>
            <h4 className="text-[16px] font-medium text-[ #444050] dark:text-slate-100 mb-1">Sending Window</h4>
            <p className="text-[12px] text-[#444050] dark:text-slate-400 mb-4 font-normal">Define when the campaign runs</p>
            
            <div className="bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col gap-5 transition-colors">
               <div className="relative">
                 <select className="w-full appearance-none px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-[14px] font-medium text-[ #444050] dark:text-slate-200 shadow-sm outline-none transition-colors">
                    <option>USA Outreach Time</option>
                 </select>
                 <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
               </div>

               <div className="flex flex-wrap gap-2">
                  {["MON","TUE","WED","THU"].map(day => (
                     <div key={day} className="px-3 py-2 bg-blue-50 dark:bg-blue-900/30 border border-[#4F6BFF] dark:border-[#4F6BFF]/50 text-[#4F6BFF] dark:text-[#8BA6FF] text-[12px] font-regular rounded-lg cursor-pointer transition-colors">{day}</div>
                  ))}
                  {["FRI","SAT","SUN"].map(day => (
                     <div key={day} className="px-3 py-2 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 text-[12px] font-regular rounded-lg cursor-pointer transition-colors">{day}</div>
                  ))}
                  <div className="ml-auto p-2 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 rounded-lg hover:text-red-500 dark:hover:text-red-400 cursor-pointer transition-colors shadow-sm shrink-0">
                     <Trash2 className="w-4 h-4" />
                  </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input type="text" defaultValue="11:30 AM - 04:00 PM" className="w-full pl-10 pr-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl text-[13px] font-medium text-[#444050] dark:text-slate-200 bg-white dark:bg-slate-950 shadow-sm outline-none transition-colors" />
                    <CheckCircle2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#4F6BFF] dark:text-[#8BA6FF]" />
                  </div>
                  <input type="text" defaultValue="USA Timezone" className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl text-[13px] font-medium text-[#444050] dark:text-slate-200 bg-white dark:bg-slate-950 shadow-sm outline-none transition-colors" />
               </div>

               <div className="text-[14px] font-regular text-[#3666EE] dark:text-[#8BA6FF] flex items-center gap-1.5 cursor-pointer hover:underline w-fit transition-colors">
                  <Plus className="w-4 h-4" /> Add New Window
               </div>
            </div>
          </div>

          {/* Right panel: AI Assist */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm h-fit transition-colors">
            <div className="flex items-start justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800 transition-colors">
               <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                     <div className="bg-[#4F6BFF] p-1.5 rounded-lg text-white">
                        <Users className="w-4 h-4" />
                     </div>
                     <h4 className="text-[16px] font-semibold text-[ #444050] dark:text-slate-100">AI Assist <span className="text-[14px] font-regular bg-slate-100 dark:bg-slate-800 text-[#6D6B77] dark:text-slate-400 px-2 py-0.5 rounded-full ml-1 uppercase transition-colors">Optional</span></h4>
                  </div>
                  <p className="text-[12px] text-[#444050] dark:text-slate-400 font-normal">Define when the campaign runs</p>
               </div>
               <button className="px-5 py-2.5 bg-[#3664EE] text-white text-[14px] font-medium rounded-[5px] shadow-[0_2px_8px_rgba(79,107,255,0.25)] hover:bg-[#435CE5] transition-colors">
                  Train AI
               </button>
            </div>

            <div className="flex flex-col gap-6">
               <div className="flex items-start justify-between group cursor-pointer">
                  <div className="flex gap-3">
                     <Globe className="w-5 h-5 text-[#4F6BFF] dark:text-[#8BA6FF]" />
                     <div className="flex flex-col">
                        <span className="text-[14px] font-medium text-[#444050] dark:text-slate-200 mb-1 group-hover:text-[#4F6BFF] dark:group-hover:text-[#8BA6FF] transition-colors">Auto message after reply detected</span>
                        <span className="text-[12px] text-[#444050] dark:text-slate-400 font-normal">AI auto-replies to leads who message you back</span>
                     </div>
                  </div>
                  <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative shadow-inner transition-colors"><div className="w-5 h-5 bg-white dark:bg-slate-300 rounded-full absolute left-0.5 top-0.5 shadow transition-colors"></div></div>
               </div>

               <div className="flex items-start justify-between group cursor-pointer">
                  <div className="flex gap-3">
                     <ChevronRight className="w-5 h-5 text-[#4F6BFF] dark:text-[#8BA6FF]" />
                     <div className="flex flex-col">
                        <span className="text-[14px] font-medium text-[#444050] dark:text-slate-200 mb-1 group-hover:text-[#4F6BFF] dark:group-hover:text-[#8BA6FF] transition-colors flex items-center gap-2">Auto handle leads after <span className="px-2 py-0.5 border border-slate-200 dark:border-slate-700 rounded-md transition-colors">2</span> Follow-ups</span>
                        <span className="text-[12px] text-[#444050] dark:text-slate-400 font-normal">AI takes over after two follow-ups.</span>
                     </div>
                  </div>
                  <div className="w-10 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative shadow-inner transition-colors"><div className="w-5 h-5 bg-white dark:bg-slate-300 rounded-full absolute left-0.5 top-0.5 shadow transition-colors"></div></div>
               </div>
            </div>
          </div>
       </div>

       {/* Zapier section */}
       <div className="mt-6 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden shadow-sm transition-colors mb-4 md:mb-6">
          <div className="bg-[#F8FAFC] dark:bg-slate-900/50 px-4 md:px-5 py-[14px] flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 transition-colors">
             <div className="w-[18px] h-[18px] bg-[#3664EE] text-white flex items-center justify-center rounded-[4px] shrink-0"><Check className="w-3 h-3" strokeWidth={3} /></div>
             <span className="text-[14px] font-semibold text-[#444050] dark:text-slate-200 flex items-center gap-1.5">
                Select events to trigger zapier
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 dark:text-slate-500">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
             </span>
          </div>
          <div className="bg-white dark:bg-slate-950 px-4 md:px-5 py-5 flex flex-wrap items-center gap-4 md:gap-8 border-b border-slate-200 dark:border-slate-800 transition-colors">
             <label className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-[18px] h-[18px] bg-[#3664EE] rounded-[4px] flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-white" strokeWidth={3} /></div>
                <span className="text-[14px] font-semibold text-[#444050] dark:text-slate-300">Response received</span>
             </label>
             <label className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-[18px] h-[18px] border-[1.5px] border-slate-300 dark:border-slate-600 rounded-[4px] shrink-0 transition-colors"></div>
                <span className="text-[14px] font-semibold text-[#5E5873] dark:text-slate-400">Invite sent</span>
             </label>
             <label className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-[18px] h-[18px] border-[1.5px] border-slate-300 dark:border-slate-600 rounded-[4px] shrink-0 transition-colors"></div>
                <span className="text-[14px] font-semibold text-[#5E5873] dark:text-slate-400">Invitation accepted</span>
             </label>
             <label className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-[18px] h-[18px] border-[1.5px] border-slate-300 dark:border-slate-600 rounded-[4px] shrink-0 transition-colors"></div>
                <span className="text-[14px] font-semibold text-[#5E5873] dark:text-slate-400">Invitation withdrawn</span>
             </label>
             <label className="flex items-center gap-2.5 cursor-pointer">
                <div className="w-[18px] h-[18px] border-[1.5px] border-slate-300 dark:border-slate-600 rounded-[4px] shrink-0 transition-colors"></div>
                <span className="text-[14px] font-semibold text-[#5E5873] dark:text-slate-400">Followup Sent</span>
             </label>
          </div>
          <div className="bg-white dark:bg-slate-950 px-4 md:px-5 py-[14px] flex items-center gap-4 transition-colors">
             <span className="text-[13px] font-semibold text-[#5E5873] dark:text-slate-400">Works With</span>
             <div className="flex items-center gap-2">
                <div className="h-[26px] px-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[4px] flex items-center justify-center shadow-sm">
                   <span className="text-[#FF4A00] font-bold text-[13px] tracking-tight">zapier</span>
                </div>
                <div className="h-[26px] px-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[4px] flex items-center justify-center gap-1.5 shadow-sm">
                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EA3A5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M6 9v2a2 2 0 0 0 2 2h3"/></svg>
                   <span className="text-[#EA3A5E] font-bold text-[13px] tracking-tight">n8n</span>
                </div>
                <div className="h-[26px] px-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[4px] flex items-center justify-center gap-1.5 shadow-sm">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5E5873" className="dark:stroke-slate-300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                   <span className="text-[#5E5873] dark:text-slate-300 font-bold text-[13px] tracking-tight inline-block ml-[2px]">webhooks</span>
                </div>
             </div>
          </div>
       </div>

      <div className="mt-auto flex flex-col md:flex-row md:items-end justify-between w-full pt-4 pb-8 md:pb-10 shrink-0 gap-4">
        <p className="text-[13px] leading-relaxed text-[#5E5873] dark:text-slate-400 font-medium max-w-[450px]">
           If a lead answers your invite, message, or InMail, we stop sending further steps automatically. <a href="#" className="text-[#3664EE] dark:text-[#8BA6FF] hover:underline">Learn more</a>
        </p>
        <div className="flex items-center gap-3 md:gap-[16px]">
            <button 
               onClick={() => setCurrentStep(2)}
               className="px-2 py-[10px] text-[#3664EE] dark:text-[#8BA6FF] text-[14px] font-medium bg-transparent hover:text-[#2850c9] dark:hover:text-[#a5b9ff] transition-all flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[16px] h-[16px]">
                 <path d="M9 14 4 9l5-5" />
                 <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
              </svg>
              Previous
            </button>
            <button 
               onClick={() => setCurrentStep(4)}
               className="px-[32px] py-[10px] bg-[#3664EE] text-white text-[14px] font-medium rounded-[5px] shadow-sm hover:bg-[#435CE5] transition-all"
            >
              Next
            </button>
        </div>
      </div>
    </div>
  );

  // Step 4: Stats
  const renderStep4 = () => {
    if (isLaunched) {
      return <StatsDashboard />;
    }
    return (
      <div className="flex-1 flex flex-col items-center justify-center animate-in zoom-in-95 duration-300 pb-20">
        <div className="w-[220px] h-[220px] relative mb-6 flex items-center justify-center">
           <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-100 dark:opacity-80 transition-opacity">
             {/* Back drop */}
             <circle cx="120" cy="120" r="90" fill="#EEF2FB" className="dark:fill-slate-800/50"/>
             <circle cx="190" cy="50" r="10" fill="#EEF2FB" className="dark:fill-slate-800/50"/>
             <circle cx="70" cy="220" r="14" fill="#EEF2FB" className="dark:fill-slate-800/50"/>

             {/* Back Window */}
             <g filter="drop-shadow(0px 10px 20px rgba(0,0,0,0.03))">
                <rect x="40" y="50" width="110" height="130" rx="6" fill="#F5F7FB" className="dark:fill-slate-800"/>
                <path d="M40 56C40 52.6863 42.6863 50 46 50H144C147.314 50 150 52.6863 150 56V70H40V56Z" fill="#DCE4F0" className="dark:fill-slate-700"/>
                <circle cx="50" cy="60" r="3" fill="#B3BCD2" className="dark:fill-slate-500"/>
                <circle cx="60" cy="60" r="3" fill="#B3BCD2" className="dark:fill-slate-500"/>
                <circle cx="70" cy="60" r="3" fill="#B3BCD2" className="dark:fill-slate-500"/>
                
                {/* Bars */}
                <rect x="52" y="100" width="16" height="70" fill="#DCE4F0" rx="2" className="dark:fill-slate-600"/>
                <rect x="76" y="80" width="16" height="90" fill="#EAEFF8" rx="2" className="dark:fill-slate-700"/>
                <rect x="100" y="130" width="16" height="40" fill="#EAEFF8" rx="2" className="dark:fill-slate-700"/>
             </g>

             {/* Front Window */}
             <g filter="drop-shadow(0px 10px 30px rgba(0,0,0,0.06))">
                <rect x="85" y="90" width="120" height="130" rx="6" fill="#FFFFFF" className="dark:fill-slate-900"/>
                <path d="M85 96C85 92.6863 87.6863 90 91 90H199C202.314 90 205 92.6863 205 96V110H85V96Z" fill="#DCE4F0" className="dark:fill-slate-800"/>
                <circle cx="95" cy="100" r="3" fill="#B3BCD2" className="dark:fill-slate-600"/>
                <circle cx="105" cy="100" r="3" fill="#B3BCD2" className="dark:fill-slate-600"/>
                <circle cx="115" cy="100" r="3" fill="#B3BCD2" className="dark:fill-slate-600"/>
                
                {/* Donut Chart */}
                <circle cx="145" cy="155" r="26" stroke="#F5F7FB" className="dark:stroke-slate-800" strokeWidth="14" fill="none"/>
                <circle cx="145" cy="155" r="26" stroke="#99A9C9" className="dark:stroke-blue-500/80" strokeWidth="14" strokeDasharray="82 164" transform="rotate(-90 145 155)" fill="none"/>
                <circle cx="145" cy="155" r="26" stroke="#DCE4F0" className="dark:stroke-indigo-500/80" strokeWidth="14" strokeDasharray="41 164" transform="rotate(90 145 155)" fill="none"/>
                
                {/* Lines below donut */}
                <rect x="105" y="195" width="80" height="4" fill="#DCE4F0" rx="2" className="dark:fill-slate-700"/>
                <rect x="105" y="207" width="45" height="4" fill="#DCE4F0" rx="2" className="dark:fill-slate-700"/>
             </g>
           </svg>
        </div>
        <h2 className="text-[32px] font-medium text-[#5E5873] dark:text-slate-200 mb-[7px] tracking-tight transition-colors">No Stats Yet</h2>
        <p className="text-[15px] text-[#5E5873] dark:text-slate-400 font-regular mb-8 transition-colors">Once Campaign is launched, Statistics will be shown here.</p>
        <button 
           onClick={() => setIsLaunched(true)}
           className="px-[23px] py-[10px] bg-[#3664EE] hover:bg-[#435CE5] text-white text-[14px] font-medium rounded-[5px] shadow-[0_4px_12px_rgba(79,107,255,0.25)] transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          Launch Campaign
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col flex-1 h-full w-full animate-in fade-in duration-300 gap-6">
      {/* Top Stepper */}
      <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 px-3 sm:px-6 py-3 rounded-2xl shadow-sm border shrink-0 overflow-x-auto no-scrollbar transition-colors">
        <div className={`flex items-center gap-[12px] shrink-0 cursor-pointer ${currentStep === 1 ? "text-[#5E5873] dark:text-slate-200" : "text-[#5E5873] dark:text-slate-400"}`} onClick={() => setCurrentStep(1)}>
          <div className={`flex items-center justify-center w-[36px] h-[36px] rounded-[8px] transition-colors ${currentStep === 1 ? "bg-[#3666EE] text-white shadow-sm" : "bg-[#E8E8E8] dark:bg-slate-800 text-[#B9B9C3] dark:text-slate-500"}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
              <path d="M3 17l2 2 4-4"/><path d="M3 7l2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>
            </svg>
          </div>
          <span className={`text-[14px] ${currentStep === 1 ? "font-semibold" : "font-medium"}`}>Define Target Audience</span>
        </div>
        
        <ChevronRight className="w-4 h-4 text-[#5E5873] dark:text-slate-500 shrink-0 mx-4 opacity-50 transition-colors" strokeWidth={1.5} />
        
        <div className={`flex items-center gap-[12px] shrink-0 cursor-pointer ${currentStep === 2 ? "text-[#5E5873] dark:text-slate-200" : "text-[#5E5873] dark:text-slate-400"}`} onClick={() => { if(currentStep >= 2) setCurrentStep(2); }}>
          <div className={`flex items-center justify-center w-[36px] h-[36px] rounded-[8px] transition-colors ${currentStep === 2 ? "bg-[#3666EE] text-white shadow-sm" : "bg-[#E8E8E8] dark:bg-slate-800 text-[#b4b4c0] dark:text-slate-500"}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
               <circle cx="10" cy="8" r="4" />
               <path d="M10 14c-3.5 0-6 1.5-6 4.5v1.5" />
               <path d="M14.5 14.5l5.5-2v6l-5.5-2v-2z" />
               <path d="M14.5 16.5l-1.5 2" />
            </svg>
          </div>
          <span className={`text-[14px] ${currentStep === 2 ? "font-semibold text-[#5E5873] dark:text-slate-200" : "font-medium text-[#6e6b7b] dark:text-slate-400"}`}>Sender Profiles</span>
        </div>
        
        <ChevronRight className="w-4 h-4 text-[#5E5873] dark:text-slate-500 shrink-0 mx-4 opacity-50 transition-colors" strokeWidth={1.5} />
        
        <div className={`flex items-center gap-[12px] shrink-0 cursor-pointer ${currentStep === 3 ? "text-[#5E5873] dark:text-slate-200" : "text-[#5E5873] dark:text-slate-400"}`} onClick={() => { if(currentStep >= 3) setCurrentStep(3); }}>
          <div className={`flex items-center justify-center w-[36px] h-[36px] rounded-[8px] transition-colors ${currentStep === 3 ? "bg-[#3666EE] text-white shadow-sm" : "bg-[#E8E8E8] dark:bg-slate-800 text-[#b4b4c0] dark:text-slate-500"}`}>
            <Settings className="w-[18px] h-[18px]" strokeWidth={2} />
          </div>
          <span className={`text-[14px] ${currentStep === 3 ? "font-semibold text-[#5E5873] dark:text-slate-200" : "font-medium text-[#6e6b7b] dark:text-slate-400"}`}>Settings</span>
        </div>
        
        <ChevronRight className="w-4 h-4 text-[#5E5873] dark:text-slate-500 shrink-0 mx-4 opacity-50 transition-colors" strokeWidth={1.5} />
        
        <div className={`flex items-center gap-[12px] shrink-0 cursor-pointer ${currentStep === 4 ? "text-[#5E5873] dark:text-slate-200" : "text-[#5E5873] dark:text-slate-400"}`} onClick={() => { if(currentStep >= 4) setCurrentStep(4); }}>
          <div className={`flex items-center justify-center w-[36px] h-[36px] rounded-[8px] transition-colors ${currentStep === 4 ? "bg-[#3666EE] text-white shadow-sm" : "bg-[#E8E8E8] dark:bg-slate-800 text-[#b4b4c0] dark:text-slate-500"}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
               <rect x="3" y="3" width="18" height="18" rx="4" />
               <path d="M3 9h18" />
               <path d="M7 6h.01M10 6h.01" strokeWidth="2.5" />
               <path d="M14 6h3" />
               <path d="M7 17a5 5 0 0 1 10 0" />
               <path d="M12 17l2-2.5" />
            </svg>
          </div>
          <span className={`text-[14px] ${currentStep === 4 ? "font-semibold text-[#5E5873] dark:text-slate-200" : "font-medium text-[#6e6b7b] dark:text-slate-400"}`}>Stats</span>
        </div>
      </div>

      <div className="flex-1 overflow-auto bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 p-4 md:p-8 flex flex-col relative w-full transition-colors">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
      </div>

      {/* Lookalike Modal Drop-in */}
      {lookalikeModalState !== "none" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/20 dark:bg-slate-950/60 backdrop-blur-[2px] transition-opacity" onClick={() => setLookalikeModalState("none")}></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl w-full max-w-[500px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 transition-colors">
             
             <div className="flex items-start justify-between p-6 pb-4 border-b border-slate-100 dark:border-slate-800 transition-colors">
               <div className="flex flex-col gap-1">
                 <h2 className="text-[24px] font-medium text-[ #5E5873] dark:text-slate-100 tracking-tight">Lookalikes</h2>
                 <p className="text-[14px] text-[#444050] dark:text-slate-400 font-regular">Select a lookalike list for this campaign</p>
               </div>
               <button onClick={() => setLookalikeModalState("none")} className="p-1.5 -mr-1 -mt-1 text-[#8E8B99] dark:text-slate-500 hover:text-[#5E5873] dark:hover:text-slate-300 rounded-full transition-colors">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="12" r="10"></circle>
                   <path d="m15 9-6 6"></path>
                   <path d="m9 9 6 6"></path>
                 </svg>
               </button>
             </div>

             {lookalikeModalState === "empty" ? (
                <div className="p-12 flex flex-col items-center justify-center text-center">
                   <h3 className="text-[28px] font-medium text-[#5E5873] dark:text-slate-200 mb-[8px]">You don't have any leads</h3>
                   <p className="text-[14px] text-[ #5E5873] dark:text-slate-400 font-regular mb-6">Create a lead list to start running campaigns</p>
                   <button onClick={() => setLookalikeModalState("list")} className="px-6 py-2.5 bg-[linear-gradient(239.27deg,_#8BA6FF_-27.06%,_#3762EE_83.4%)] text-white text-[14px] font-medium rounded-[5px] shadow-sm hover:bg-[#435CE5] transition-all">
                      Create a List
                   </button>
                </div>
             ) : (
                <div className="p-6 flex flex-col gap-4 bg-slate-50/50 dark:bg-slate-900/50 transition-colors">
                  <div 
                    onClick={() => setSelectedLookalike("founder")}
                    className={`flex items-center justify-between p-4 bg-white dark:bg-slate-950 border-2 rounded-xl cursor-pointer transition-colors ${selectedLookalike === "founder" ? "border-[#4F6BFF] shadow-[0_2px_12px_rgba(79,107,255,0.08)] dark:shadow-none" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`}
                  >
                     <div className="flex items-center gap-3">
                        <ListFilter className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        <span className="text-[18px] font-semibold text-[#444050] dark:text-slate-200">Founder <span className="text-[14px] font-regular text-[#444050] dark:text-slate-400 ml-1">(1000+ Users in the List)</span></span>
                     </div>
                     <div className={`w-[20px] h-[20px] rounded-[4px] border-[2px] flex items-center justify-center transition-colors ${selectedLookalike === "founder" ? "bg-[#4F6BFF] border-[#4F6BFF]" : "border-slate-300 dark:border-slate-700"}`}>
                        {selectedLookalike === "founder" && <Check className="w-[12px] h-[12px] text-white" strokeWidth={3} />}
                     </div>
                  </div>

                  <div 
                    onClick={() => setSelectedLookalike("tech")}
                    className={`flex items-center justify-between p-4 bg-white dark:bg-slate-950 border-2 rounded-xl cursor-pointer transition-colors ${selectedLookalike === "tech" ? "border-[#4F6BFF] shadow-[0_2px_12px_rgba(79,107,255,0.08)] dark:shadow-none" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`}
                  >
                     <div className="flex items-center gap-3">
                        <ListFilter className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                        <span className="text-[18px] font-semibold text-[#444050] dark:text-slate-200">Tech Profiles <span className="text-[14px] font-regular text-[#444050] dark:text-slate-400 ml-1">(1000+ Users in the List)</span></span>
                     </div>
                     <div className={`w-[20px] h-[20px] rounded-[4px] border-[2px] flex items-center justify-center transition-colors ${selectedLookalike === "tech" ? "bg-[#4F6BFF] border-[#4F6BFF]" : "border-slate-300 dark:border-slate-700"}`}>
                        {selectedLookalike === "tech" && <Check className="w-[12px] h-[12px] text-white" strokeWidth={3} />}
                     </div>
                  </div>

                  <div className="text-right mt-1">
                     <span className="text-[14px] font-medium text-[#6587F7] dark:text-[#8BA6FF] cursor-pointer hover:underline transition-colors">Add New</span>
                  </div>

                  <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 transition-colors">
                     <button onClick={() => setLookalikeModalState("none")} className="px-[22px] py-[10px] bg-[#E8E8E8] dark:bg-slate-800 text-slate-500 dark:text-slate-300 font-medium text-[14px] rounded-[5px] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Cancel</button>
                     <button 
                       onClick={() => { if(selectedLookalike) { setLookalikeModalState("none"); setCurrentStep(2); } }}
                       className={`px-[22px] py-[10px] text-white font-medium text-[14px] rounded-[5px] shadow-sm transition-all ${selectedLookalike ? "bg-[linear-gradient(239.27deg,_#8BA6FF_-27.06%,_#3762EE_83.4%)] hover:bg-[#435CE5]" : "bg-[#899bf9] dark:bg-slate-700 dark:text-slate-400 cursor-not-allowed"}`}
                     >
                        Select List
                     </button>
                  </div>
                </div>
             )}
          </div>
        </div>
      )}
    </div>
  );
}
