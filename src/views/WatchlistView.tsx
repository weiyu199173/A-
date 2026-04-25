import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, TrendingUp, TrendingDown, BookOpen, ChevronRight, Plus, Filter, ArrowDownWideNarrow, ArrowUpNarrowWide, X, Search } from 'lucide-react';
import { StockInfo } from '../types';

const INITIAL_STOCKS: StockInfo[] = [
  { name: '比亚迪', code: 'SZ: 002594', price: '245.80', change: '+4.80%', isUp: true, probValue: 85, probText: '看涨强烈', industry: '汽车' },
  { name: '贵州茅台', code: 'SH: 600519', price: '1,680.00', change: '+1.25%', isUp: true, industry: '酿酒行业', probValue: 68, probText: '看涨' },
  { name: '中国平安', code: 'SH: 601318', price: '42.15', change: '-0.85%', isUp: false, industry: '保险', probValue: 32, probText: '看跌' }
];

export function WatchlistView({ onSelectStock }: { onSelectStock?: (stock: StockInfo) => void }) {
  const [stocks, setStocks] = useState<StockInfo[]>(INITIAL_STOCKS);
  const [filterText, setFilterText] = useState('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [isAdding, setIsAdding] = useState(false);
  
  const [newStockCode, setNewStockCode] = useState('');

  const handleAddStock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStockCode) return;
    
    const MOCK_STOCK_DB: Record<string, {name: string, industry: string}> = {
      '600519': { name: '贵州茅台', industry: '白酒' },
      '601318': { name: '中国平安', industry: '保险' },
      '002594': { name: '比亚迪', industry: '汽车' },
      '000858': { name: '五粮液', industry: '白酒' },
      '300750': { name: '宁德时代', industry: '新能源' },
      '00700': { name: '腾讯控股', industry: '互联网' },
      '09988': { name: '阿里巴巴', industry: '电商' },
      '03690': { name: '美团', industry: '本地生活' },
      'AAPL': { name: '苹果公司', industry: '消费电子' },
      'TSLA': { name: '特斯拉', industry: '新能源车' },
      'NVDA': { name: '英伟达', industry: '半导体' }
    };
    
    const baseCode = newStockCode.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    let found = null;
    for (const [key, val] of Object.entries(MOCK_STOCK_DB)) {
      if (baseCode.includes(key)) {
        found = val;
        break;
      }
    }
    
    const stockName = found ? found.name : `测试资产 (${newStockCode})`;
    const industry = found ? found.industry : '系统分析中...';
    
    // Generate some random data for the new stock
    const isUp = Math.random() > 0.5;
    const newStock: StockInfo = {
      name: stockName,
      code: newStockCode,
      price: (Math.random() * 100 + 10).toFixed(2),
      change: `${isUp ? '+' : '-'}${(Math.random() * 5).toFixed(2)}%`,
      isUp,
      probValue: Math.floor(Math.random() * 100),
      probText: isUp ? '看涨' : '看跌',
      industry: industry
    };
    
    setStocks(prev => [...prev, newStock]);
    setIsAdding(false);
    setNewStockCode('');
  };

  const filteredAndSortedStocks = stocks
    .filter(s => s.name.includes(filterText) || s.code.includes(filterText))
    .sort((a, b) => {
      const probA = a.probValue || 0;
      const probB = b.probValue || 0;
      return sortOrder === 'desc' ? probB - probA : probA - probB;
    });

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 pb-24 pt-20"
    >
      {/* Alerts Rail */}
      <section className="lg:col-span-4 flex flex-col gap-4 order-1 lg:order-2">
        <div className="flex items-center justify-between mb-2 px-1">
          <h2 className="text-lg font-semibold text-on-surface flex items-center gap-2">
            <BellActiveIcon className="w-5 h-5 text-primary-container" />
            系统预警
          </h2>
        </div>
        
        {/* Risk Warning Card */}
        <div className="crystal-card p-4 relative overflow-hidden group hover:border-error/50 transition-colors">
          <div className="absolute top-0 left-0 w-1 h-full gem-red"></div>
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-full gem-red text-white mt-0.5 shadow-lg">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-[11px] font-bold gem-text-red uppercase tracking-wider mb-1">风险警告</h3>
              <p className="text-[13px] font-bold text-on-surface mb-2">预计高波动率</p>
              <p className="text-sm text-on-surface-variant text-xs leading-relaxed">量化模型检测到小盘科技板块突然缺乏流动性。预计日内波动超过 8%。</p>
            </div>
          </div>
        </div>

        {/* Alpha Signal Card */}
        <div className="crystal-card p-4 relative shadow-[0_8px_32px_rgba(212,175,55,0.08)] hover:border-primary-container/60 transition-colors">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <TrendingUp className="w-12 h-12 text-primary-container" />
          </div>
          <h3 className="text-[11px] font-bold gold-3d-text uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full gold-3d-element"></span> Alpha 信号
          </h3>
          <p className="text-[13px] font-bold text-white mb-4">概率突变 &gt; 30%</p>
          <div className="flex justify-between items-end border-t border-white/10 pt-3 w-full relative z-10">
            <div>
              <p className="text-[12px] text-on-surface-variant font-medium mb-1">比亚迪 (002594.SZ)</p>
              <p className="text-[11px] font-bold text-primary-container tracking-wide drop-shadow-sm">检测到看涨转变</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold gold-3d-text block leading-none font-mono">+34%</span>
            </div>
          </div>
        </div>

        {/* Policy News Card */}
        <div className="crystal-card p-4 hover:border-white/20 transition-colors cursor-pointer">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-outline-variant" />
            <h3 className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">宏观政策</h3>
          </div>
          <p className="text-[13px] font-medium text-on-surface mb-3 leading-snug">中国人民银行宣布计划外降准立即生效</p>
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-semibold text-outline-variant font-mono">14:32:05</span>
            <span className="text-[11px] font-semibold text-primary hover:text-primary-container flex items-center gap-1">
              影响分析 <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </section>

      {/* Watchlist Data */}
      <section className="lg:col-span-8 flex flex-col order-2 lg:order-1 h-full min-h-[500px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 px-1">
          <h1 className="text-lg font-semibold text-on-surface whitespace-nowrap">活跃自选</h1>
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto sm:justify-end">
            <div className="relative flex-grow sm:flex-grow-0 min-w-[140px] h-[32px]">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input 
                type="text" 
                placeholder="搜索自选股票..." 
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
                className="w-full sm:w-36 bg-surface-container border border-outline-variant rounded-lg pl-8 pr-3 text-[11px] font-semibold text-on-surface-variant focus:text-on-surface focus:border-primary-container outline-none transition-all focus:w-full sm:focus:w-52 placeholder-outline-variant h-full"
              />
            </div>
            <button 
              onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
              className="bg-surface-container border border-outline-variant rounded-lg px-3 text-[11px] font-semibold text-on-surface-variant hover:text-on-surface hover:border-outline transition-all flex items-center justify-center gap-1.5 whitespace-nowrap h-[32px]"
            >
              {sortOrder === 'desc' ? <ArrowDownWideNarrow className="w-3.5 h-3.5" /> : <ArrowUpNarrowWide className="w-3.5 h-3.5" />} 
              概率
            </button>
            <button 
              onClick={() => setIsAdding(true)}
              className="bg-primary-container text-on-primary-container rounded-lg px-4 text-[11px] font-bold hover:bg-primary transition-colors flex items-center justify-center gap-1.5 shadow-[0_2px_10px_rgba(212,175,55,0.2)] whitespace-nowrap h-[32px]"
            >
              <Plus className="w-3.5 h-3.5" /> 添加资产
            </button>
          </div>
        </div>

        {isAdding && (
          <motion.form 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            onSubmit={handleAddStock}
            className="mb-4 crystal-card p-4 flex flex-wrap md:flex-nowrap gap-4 items-end overflow-hidden"
          >
            <div className="flex-1 min-w-[140px] w-full md:w-auto">
              <label className="block text-[11px] font-medium text-on-surface-variant mb-1">股票代码</label>
              <input 
                autoFocus
                required
                type="text" 
                placeholder="例如: HK: 00700" 
                value={newStockCode}
                onChange={e => setNewStockCode(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg py-2 px-3 text-[13px] text-white focus:border-primary-container outline-none transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
              <button type="submit" className="flex-1 md:flex-none bg-primary-container text-on-primary-container rounded-lg py-2 px-6 text-[13px] font-bold hover:bg-primary transition-colors h-[38px] shadow-[0_2px_10px_rgba(212,175,55,0.2)] whitespace-nowrap">
                确认添加
              </button>
              <button type="button" onClick={() => setIsAdding(false)} className="text-on-surface-variant hover:text-white p-2 h-[38px] hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.form>
        )}

        <div className="crystal-card overflow-hidden flex-grow flex flex-col">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/5 bg-black/40 sticky top-0 backdrop-blur-xl z-10">
            <div className="col-span-4 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider flex items-center gap-1 cursor-pointer hover:text-on-surface">
              资产 / 代码 
            </div>
            <div className="col-span-3 text-right text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">最新价</div>
            <div className="col-span-5 text-right text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">概率突变</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col overflow-y-auto">
            {filteredAndSortedStocks.map((stock, idx) => (
              <div 
                key={`${stock.code}-${idx}`}
                onClick={() => onSelectStock?.(stock)}
                className={`grid grid-cols-12 gap-4 px-4 py-3 border-b border-surface-variant/50 hover:bg-white/5 transition-colors items-center group cursor-pointer relative ${stock.probValue && stock.probValue > 70 && stock.isUp ? 'bg-primary-container/5' : 'pl-3'}`}
              >
                {stock.probValue && stock.probValue > 70 && stock.isUp && (
                   <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-container rounded-r-md"></div>
                )}
                <div className={`col-span-4 flex flex-col ${stock.probValue && stock.probValue > 70 && stock.isUp ? 'pl-2' : ''}`}>
                  <span className={`text-[13px] font-medium group-hover:text-primary transition-colors ${stock.probValue && stock.probValue > 70 && stock.isUp ? 'text-primary-container font-bold' : 'text-on-surface'}`}>{stock.name}</span>
                  <span className="text-[11px] font-semibold text-outline font-mono mt-0.5">{stock.code}</span>
                </div>
                <div className="col-span-3 flex flex-col items-end justify-center">
                  <span className={`text-[13px] font-mono ${stock.probValue && stock.probValue > 70 && stock.isUp ? 'text-primary-container font-bold' : 'text-on-surface font-bold'}`}>{stock.price}</span>
                  <span className={`text-[11px] font-bold px-1.5 rounded mt-1 font-mono shadow-inner ${stock.isUp ? 'gem-text-red bg-error/10 border border-error/20' : 'gem-text-green bg-secondary/10 border border-secondary/20'}`}>{stock.change}</span>
                </div>
                <div className="col-span-5 flex items-center justify-end gap-3">
                  <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden relative shadow-inner border border-white/5 hidden sm:block">
                    <div className={`absolute ${stock.isUp ? 'left-0' : 'right-0'} top-0 h-full w-[${stock.probValue || 0}%] rounded-full ${stock.probValue && stock.probValue > 70 && stock.isUp ? 'bg-gradient-to-r from-primary/50 to-primary-container shadow-[0_0_6px_var(--color-primary-container)]' : (stock.isUp ? 'gem-red' : 'gem-green')}`} style={{ width: `${stock.probValue || 0}%` }}></div>
                  </div>
                  <span className={`text-[11px] font-bold flex items-center gap-0.5 min-w-[36px] justify-end ${stock.probValue && stock.probValue > 70 && stock.isUp ? 'text-primary-container' : (stock.isUp ? 'gem-text-red' : 'gem-text-green')}`}>
                    {stock.isUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />} {stock.probValue || 0}%
                  </span>
                </div>
              </div>
            ))}
            {filteredAndSortedStocks.length === 0 && (
              <div className="p-8 text-center text-on-surface-variant text-sm border-b border-surface-variant/50">
                抱歉，未找到匹配的资产。
              </div>
            )}
          </div>
        </div>
      </section>
    </motion.main>
  );
}

function BellActiveIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
    </svg>
  );
}
