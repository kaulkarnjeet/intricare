"use client";

import { useState } from "react";
import { 
  ChevronDown, 
  Download, 
  MoreVertical, 
  BarChart2, 
  Edit3, 
  Copy,
  RefreshCw,
  Play
} from "lucide-react";

interface CampaignListProps {
  onNewCampaign: () => void;
}

export default function CampaignList({ onNewCampaign }: CampaignListProps) {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(4); // Default to row 4 like the design

  const campaigns = [
    {
      id: 1,
      name: "Tech Founder",
      platforms: ["LinkedIn", "Email"],
      createdAt: "21 Jan, 2026",
      crm: { synced: true, timeAgo: "2h ago", type: "hubspot" },
      invites: { count: 265, sub: "15% Accepted" },
      reply: { count: 125, sub: "10% Received" },
      email: { count: 400, sub: "10% Mail Opened" },
      senders: ["https://i.pravatar.cc/150?u=1", "https://i.pravatar.cc/150?u=2"],
      status: "Running",
      limit: "40 invites/day"
    },
    {
      id: 2,
      name: "Growth Ca...",
      platforms: ["LinkedIn", "Email"],
      createdAt: "21 Jan, 2026",
      crm: { synced: false },
      invites: { count: 265, sub: "15% Accepted" },
      reply: { count: 125, sub: "10% Received" },
      email: { count: 400, sub: "10% Mail Opened" },
      senders: ["https://i.pravatar.cc/150?u=3", "https://i.pravatar.cc/150?u=4"],
      status: "Running",
      limit: "40 invites/day"
    },
    {
      id: 3,
      name: "Campaign P...",
      platforms: ["LinkedIn", "Email"],
      createdAt: "21 Jan, 2026",
      crm: { synced: false },
      invites: { count: 265, sub: "15% Accepted" },
      reply: { count: 125, sub: "10% Received" },
      email: { count: 400, sub: "10% Mail Opened" },
      senders: ["https://i.pravatar.cc/150?u=5", "https://i.pravatar.cc/150?u=6"],
      status: "Running",
      limit: "40 invites/day"
    },
    {
      id: 4,
      name: "Lead Engine",
      platforms: ["LinkedIn", "Email"],
      createdAt: "21 Jan, 2026",
      crm: { synced: true, timeAgo: "1d ago", type: "salesforce" },
      invites: { count: 265, sub: "15% Accepted" },
      reply: { count: 125, sub: "10% Received" },
      email: { count: 400, sub: "10% Mail Opened" },
      senders: ["https://i.pravatar.cc/150?u=7", "https://i.pravatar.cc/150?u=8"],
      status: "Running",
      limit: "40 invites/day"
    },
    {
      id: 5,
      name: "Campaign Hub",
      platforms: ["LinkedIn", "Email"],
      createdAt: "21 Jan, 2026",
      crm: { synced: true, timeAgo: "5h ago", type: "hubspot" },
      invites: { count: 265, sub: "15% Accepted" },
      reply: { count: 125, sub: "10% Received" },
      email: { count: 400, sub: "10% Mail Opened" },
      senders: ["https://i.pravatar.cc/150?u=9", "https://i.pravatar.cc/150?u=10"],
      status: "Running",
      limit: "40 invites/day"
    },
    {
      id: 6,
      name: "Tech Founder",
      platforms: ["LinkedIn", "Email"],
      createdAt: "21 Jan, 2026",
      crm: { synced: true, timeAgo: "6h ago", type: "hubspot" },
      invites: { count: 265, sub: "15% Accepted" },
      reply: { count: 125, sub: "10% Received" },
      email: { count: 400, sub: "10% Mail Opened" },
      senders: ["https://i.pravatar.cc/150?u=11", "https://i.pravatar.cc/150?u=12"],
      status: "Running",
      limit: "40 invites/day"
    },
    {
      id: 7,
      name: "Tech Founder",
      platforms: ["LinkedIn", "Email"],
      createdAt: "21 Jan, 2026",
      crm: { synced: true, timeAgo: "6h ago", type: "hubspot" },
      invites: { count: 265, sub: "15% Accepted" },
      reply: { count: 125, sub: "10% Received" },
      email: { count: 400, sub: "10% Mail Opened" },
      senders: ["https://i.pravatar.cc/150?u=13", "https://i.pravatar.cc/150?u=14"],
      status: "Running",
      limit: "40 invites/day"
    },
    {
      id: 8,
      name: "Tech Founder",
      platforms: ["LinkedIn", "Email"],
      createdAt: "21 Jan, 2026",
      crm: { synced: true, timeAgo: "6h ago", type: "hubspot" },
      invites: { count: 265, sub: "15% Accepted" },
      reply: { count: 125, sub: "10% Received" },
      email: { count: 400, sub: "10% Mail Opened" },
      senders: ["https://i.pravatar.cc/150?u=15", "https://i.pravatar.cc/150?u=16"],
      status: "Running",
      limit: "40 invites/day"
    }
  ];

  const handleDropdownToggle = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800 flex flex-col flex-1 overflow-hidden transition-colors">
      {/* Header Area */}
      <div className="p-6 md:p-8 pb-5 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[18px] font-semibold text-[#444050] dark:text-slate-100 tracking-tight">All Campaigns List</h2>
          <p className="text-[12px] text-[#6E6B7B] dark:text-slate-400 font-regular">A quick look at all of your outreach initiatives.</p>
        </div>
        <button 
          onClick={onNewCampaign}
          className="bg-[linear-gradient(239.27deg,_#8BA6FF_-27.06%,_#3762EE_83.4%)] hover:bg-[#435CE5] transition-colors text-white px-[23px] py-[10px] rounded-[5px] font-medium text-[14px] shadow-[0_4px_12px_rgba(79,107,255,0.25)] shrink-0"
        >
          New Campaign
        </button>
      </div>

      {/* Filters Area */}
      <div className="px-6 md:px-8 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center justify-between w-[110px] px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[13px] text-[#5E5873] dark:text-slate-300 font-normal hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Channel
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
          <button className="flex items-center justify-between w-[100px] px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[13px] text-[#5E5873] dark:text-slate-300 font-normal hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Status
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>
          <button className="px-2 py-2 text-[13px] text-[#5E5873] dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold transition-colors">
            Clear All
          </button>
        </div>

        <button className="flex items-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-bold transition-colors">
          <Download className="w-4 h-4" /> Export List
        </button>
      </div>

      {/* Main Table Content */}
      <div className="flex-1 overflow-x-auto overflow-y-auto w-full scrollbar-thin">
        <table className="w-full text-left min-w-[1100px]">
          <thead className="bg-[#f8f9fa] dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest sticky top-0 z-10 transition-colors">
            <tr>
               <th className="px-6 py-4 w-12">
                 <div className="w-4 h-4 rounded border-2 border-slate-200 dark:border-slate-600 cursor-pointer hover:border-slate-300 dark:hover:border-slate-500 transition-colors"></div>
               </th>
              <th className="px-4 py-4 w-[240px]">All Campaigns</th>
              <th className="px-4 py-4 w-[160px]">CRM</th>
              <th className="px-4 py-4 w-[120px]">Invites Sent</th>
              <th className="px-4 py-4 w-[120px]">Reply Rate</th>
              <th className="px-4 py-4 w-[120px]">Email Sent</th>
              <th className="px-4 py-4 w-[120px]">Sender</th>
              <th className="px-4 py-4 w-[140px]">Status</th>
              <th className="px-4 py-4 w-[140px]">Daily Limit</th>
              <th className="px-4 py-4 w-16 text-center"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {campaigns.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group relative">
                <td className="px-6 py-5">
                  <div className="w-4 h-4 rounded border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 cursor-pointer hover:border-slate-300 dark:hover:border-slate-500 transition-colors"></div>
                </td>
                
                {/* ALL CAMPAIGNS */}
                <td className="px-4 py-5">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[14px] font-bold text-slate-800 dark:text-slate-200 tracking-tight">{row.name}</span>
                      <div className="flex gap-1">
                        {row.platforms.map((p, i) => (
                          <span key={i} className="px-1.5 py-0.5 bg-[#eef2ff] dark:bg-blue-900/30 text-[#4F6BFF] dark:text-[#8BA6FF] text-[9px] font-bold rounded uppercase tracking-wider transition-colors">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">{`Created On: ${row.createdAt}`}</span>
                  </div>
                </td>

                {/* CRM */}
                <td className="px-4 py-5">
                  {row.crm.synced ? (
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5">
                        <RefreshCw className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-[14px] font-semibold text-[#5E5873] dark:text-slate-300">{`Synced`}</span>
                      </div>
                      <span className="text-[11px] font-regular text-[#6D6B77] dark:text-slate-500 pl-5">{row.crm.timeAgo}</span>
                    </div>
                  ) : (
                    <button className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-[12px] font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      Sync to CRM
                    </button>
                  )}
                </td>

                {/* INVITES SENT */}
                <td className="px-4 py-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-bold text-slate-800 dark:text-slate-200">{row.invites.count}</span>
                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">{row.invites.sub}</span>
                  </div>
                </td>

                {/* REPLY RATE */}
                <td className="px-4 py-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-bold text-slate-800 dark:text-slate-200">{row.reply.count}</span>
                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">{row.reply.sub}</span>
                  </div>
                </td>

                {/* EMAIL SENT */}
                <td className="px-4 py-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] font-bold text-slate-800 dark:text-slate-200">{row.email.count}</span>
                    <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">{row.email.sub}</span>
                  </div>
                </td>

                {/* SENDER */}
                <td className="px-4 py-5">
                  <div className="flex -space-x-2">
                    {row.senders.map((src, i) => (
                      <img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 shadow-sm relative transition-colors" style={{zIndex: row.senders.length - i}} alt="Avatar" />
                    ))}
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-4 py-5">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#dcfce7] dark:bg-[#166534]/30 border border-[#bbf7d0] dark:border-[#22c55e]/30 text-[#166534] dark:text-[#4ade80] rounded-md shadow-sm transition-colors">
                    <Play className="w-3 h-3 fill-current" />
                    <span className="text-[12px] font-bold">{row.status}</span>
                  </div>
                </td>

                {/* DAILY LIMIT */}
                <td className="px-4 py-5">
                  <span className="px-2.5 py-1 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 rounded-md text-[11px] font-bold bg-white dark:bg-slate-800 shadow-sm transition-colors">
                    {row.limit}
                  </span>
                </td>

                {/* ACTIONS */}
                <td className="px-4 py-5 text-center relative">
                  <button 
                    onClick={() => handleDropdownToggle(row.id)}
                    className={`p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${openDropdownId === row.id ? "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200" : "text-slate-400 dark:text-slate-500"}`}
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdownId === row.id && (
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 w-48 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-1.5 z-20 animate-in fade-in zoom-in duration-200">
                       <button className="w-full px-4 py-2.5 flex items-center gap-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                             <rect x="3" y="3" width="18" height="18" rx="4"></rect>
                             <path d="M8 17v-4"></path>
                             <path d="M12 17V8"></path>
                             <path d="M16 17v-6"></path>
                          </svg>
                          <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">View Analytics</span>
                       </button>
                       <button className="w-full px-4 py-2.5 flex items-center gap-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                            <g transform="translate(7, 6)">
                              <path d="M 0 -4 L 1 -3 L 3 -3 L 3 -1 L 4 0 L 3 1 L 3 3 L 1 3 L 0 4 L -1 3 L -3 3 L -3 1 L -4 0 L -3 -1 L -3 -3 L -1 -3 Z" />
                            </g>
                            <g transform="translate(17, 12)">
                              <path d="M 0 -4 L 1 -3 L 3 -3 L 3 -1 L 4 0 L 3 1 L 3 3 L 1 3 L 0 4 L -1 3 L -3 3 L -3 1 L -4 0 L -3 -1 L -3 -3 L -1 -3 Z" />
                            </g>
                            <g transform="translate(7, 18)">
                              <path d="M 0 -4 L 1 -3 L 3 -3 L 3 -1 L 4 0 L 3 1 L 3 3 L 1 3 L 0 4 L -1 3 L -3 3 L -3 1 L -4 0 L -3 -1 L -3 -3 L -1 -3 Z" />
                            </g>
                          </svg>
                          <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">Edit Sequence</span>
                       </button>
                       <button className="w-full px-4 py-2.5 flex items-center gap-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                          <Copy className="w-4 h-4 text-slate-400" />
                          <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-200">Duplicate</span>
                       </button>
                    </div>
                  )}
                  {/* Click away overlay logic would ideally go here or in a ref effect */}
                  {openDropdownId === row.id && (
                    <div className="fixed inset-0 z-10" onClick={() => setOpenDropdownId(null)}></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
