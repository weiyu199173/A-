import { Activity, Bell, Search, LayoutDashboard, LineChart, Target, Eye, Settings } from 'lucide-react';
import React from 'react';

export function TopBar({ title, status = '已开盘', statusColor = 'text-primary', onOpenSettings }: { title?: string, status?: string, statusColor?: string, onOpenSettings?: () => void }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md shadow-none flex justify-between items-center px-4 h-14 border-b border-neutral-800">
      <div className="flex items-center gap-2">
        <Activity className="w-5 h-5 text-amber-500" />
        {title ? (
          <h1 className="font-sans text-xs font-bold tracking-wider uppercase text-amber-500">{title}</h1>
        ) : (
          <span className={`font-sans text-xs font-black tracking-wider uppercase ${statusColor}`}>{status}</span>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button className="hover:text-amber-400 transition-colors active:opacity-70 text-neutral-500">
          <Search className="w-5 h-5" />
        </button>
        <button onClick={onOpenSettings} className="hover:text-amber-400 transition-colors active:opacity-70 text-neutral-500">
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}

export function BottomNav({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: '首页' },
    { id: 'analysis', icon: LineChart, label: '分析' },
    { id: 'watchlist', icon: Eye, label: '自选' },
    { id: 'strategy', icon: Target, label: '策略' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 border-t border-neutral-800 bg-neutral-950/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.4)] flex justify-around items-center h-16 px-2 pb-safe">
      {navItems.map((item) => {
        const isActive = activeTab === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center active:scale-95 transition-transform duration-150 w-full h-full rounded-lg ${
              isActive ? 'text-amber-500 font-bold bg-neutral-900/30' : 'text-neutral-500 hover:bg-neutral-900/50'
            }`}
          >
            <Icon className="w-5 h-5 mb-1" strokeWidth={isActive ? 2.5 : 2} />
            <span className="font-sans text-[10px] font-medium tracking-tight mt-0.5">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
