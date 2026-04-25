/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { TopBar, BottomNav } from './components/Navigation';
import { DashboardView } from './views/DashboardView';
import { AnalysisView } from './views/AnalysisView';
import { WatchlistView } from './views/WatchlistView';
import { StrategyView } from './views/StrategyView';
import { SettingsModal } from './components/SettingsModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const getTopBarTitle = () => {
    switch (activeTab) {
      case 'dashboard': return undefined;
      case 'analysis': return undefined;
      case 'watchlist': return undefined;
      case 'strategy': return '交易中';
      default: return undefined;
    }
  };

  const getStatusText = () => {
    switch (activeTab) {
      case 'dashboard': return '交易中';
      case 'analysis': return '已开盘';
      case 'watchlist': return '市场开盘';
      default: return '交易中';
    }
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] font-sans selection:bg-[#d4af37] selection:text-[#554300]">
      <TopBar 
        title={getTopBarTitle()} 
        status={getStatusText()} 
        onOpenSettings={() => setIsSettingsOpen(true)}
      />
      
      <AnimatePresence mode="wait">
        {activeTab === 'dashboard' && <DashboardView key="dashboard" />}
        {activeTab === 'analysis' && <AnalysisView key="analysis" />}
        {activeTab === 'watchlist' && <WatchlistView key="watchlist" />}
        {activeTab === 'strategy' && <StrategyView key="strategy" />}
      </AnimatePresence>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </div>
  );
}

