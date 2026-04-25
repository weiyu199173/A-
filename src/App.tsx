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
import { Disclaimer } from './components/Disclaimer';
import { StockInfo } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  const [selectedStock, setSelectedStock] = useState<StockInfo>({
    name: '贵州茅台',
    code: 'SH: 600519',
    price: '1,688.00',
    change: '+40.00 (+2.45%)',
    isUp: true,
    industry: '酿酒行业',
    probValue: 68,
    probText: '看涨'
  });

  const handleSelectStock = (stock: StockInfo) => {
    setSelectedStock(stock);
    setActiveTab('analysis');
  };

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
    <div className="min-h-screen bg-background text-on-background font-sans selection:bg-primary-container selection:text-on-primary-container flex flex-col">
      <TopBar 
        title={getTopBarTitle()} 
        status={getStatusText()} 
        onOpenSettings={() => setIsSettingsOpen(true)}
      />
      
      <div className="flex-1 flex flex-col relative w-full">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && <DashboardView key="dashboard" onSelectStock={handleSelectStock} />}
          {activeTab === 'analysis' && <AnalysisView key="analysis" stock={selectedStock} />}
          {activeTab === 'watchlist' && <WatchlistView key="watchlist" onSelectStock={handleSelectStock} />}
          {activeTab === 'strategy' && <StrategyView key="strategy" />}
        </AnimatePresence>
      </div>

      <div className="pb-16 lg:pb-0"> {/* Padding for mobile nav */}
        <Disclaimer />
      </div>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </div>
  );
}
