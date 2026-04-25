import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, TrendingUp, ShieldCheck, Zap, TrendingDown, ChevronRight } from 'lucide-react';
import { StockInfo } from '../types';

export function DashboardView({ onSelectStock }: { onSelectStock?: (stock: StockInfo) => void }) {
  const topStocks: StockInfo[] = [
    { name: '比亚迪', code: 'SZ: 002594', price: '245.80', change: '+4.80%', isUp: true, probValue: 85, probText: '看涨强烈', industry: '汽车' },
    { name: '贵州茅台', code: 'SH: 600519', price: '1,680.00', change: '+1.25%', isUp: true, industry: '酿酒行业', probValue: 68, probText: '看涨' },
    { name: '中国平安', code: 'SH: 601318', price: '42.15', change: '-0.85%', isUp: false, industry: '保险', probValue: 32, probText: '看跌' }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 pb-24 pt-20"
    >
      {/* Market Temperature Gauge */}
      <section className="md:col-span-12 lg:col-span-6 crystal-card p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/5 to-transparent pointer-events-none"></div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-semibold gold-3d-text">市场温度</h2>
            <p className="text-sm text-on-surface-variant font-medium">全景指数</p>
          </div>
          <div className="px-3 py-1 bg-surface-container-highest border border-outline-variant/30 rounded-full flex items-center gap-2 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(255,215,0,0.8)]"></span>
            <span className="text-[11px] font-semibold text-primary">实时</span>
          </div>
        </div>
        <div className="relative h-[180px] w-full max-w-[360px] mx-auto mt-4">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100">
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="rgba(255,255,255,0.05)" strokeLinecap="round" strokeWidth="12" />
            <path d="M 20 100 A 80 80 0 0 1 156.5 45.5" fill="none" stroke="url(#goldGradient)" strokeLinecap="round" strokeWidth="12" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.8))' }} />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFDE7" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
            </defs>
            <line x1="100" y1="20" x2="100" y2="10" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="20" y1="100" x2="10" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="180" y1="100" x2="190" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          </svg>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center w-full">
            <div className="text-4xl font-bold gold-3d-text font-mono">72<span className="text-lg font-semibold text-on-surface-variant ml-1 font-sans">/100</span></div>
            <div className="text-[11px] font-semibold text-primary uppercase tracking-wider mt-2">贪婪 / 偏热</div>
            <div className="mt-4 inline-block px-4 py-2 bg-error-container/20 border-t border-error-container text-error text-[12px] font-bold rounded-lg shadow-[0_4px_12px_rgba(255,68,68,0.2)] inset-shadow-sm gem-text-red">结构性牛市</div>
          </div>
        </div>
      </section>

      {/* Bayesian Probability Engine */}
      <section className="md:col-span-12 lg:col-span-6 crystal-card p-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold gold-3d-text">贝叶斯板块预测</h2>
            <p className="text-sm text-on-surface-variant font-medium">变分隐马尔可夫模型分布</p>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <ShieldCheck className="w-5 h-5 fill-current filter drop-shadow-[0_0_4px_rgba(255,215,0,0.5)]" />
            <span className="text-[11px] font-semibold uppercase">高置信度</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
            <div className="flex justify-between mb-2">
              <span className="text-[13px] font-medium text-on-surface flex items-center gap-2"><span className="w-3 h-3 rounded-full gem-red shadow-sm"></span> 科技板块 (看多)</span>
              <span className="text-[13px] font-bold gem-text-red font-mono">68%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden shadow-inner border border-white/5">
              <div className="h-full gem-red" style={{ width: '68%' }}></div>
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
            <div className="flex justify-between mb-2">
              <span className="text-[13px] font-medium text-on-surface flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gradient-to-br from-surface-variant to-outline shadow-sm"></span> 医药板块 (震荡)</span>
              <span className="text-[13px] font-bold text-on-surface-variant font-mono">51%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden shadow-inner border border-white/5">
              <div className="h-full bg-gradient-to-r from-surface-variant to-outline-variant" style={{ width: '51%' }}></div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
            <div className="flex justify-between mb-2">
              <span className="text-[13px] font-medium text-on-surface flex items-center gap-2"><span className="w-3 h-3 rounded-full gem-green shadow-sm"></span> 地产板块 (看空)</span>
              <span className="text-[13px] font-bold gem-text-green font-mono">82%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden shadow-inner border border-white/5">
              <div className="h-full gem-green" style={{ width: '82%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Quick Access */}
      <section className="md:col-span-12 crystal-card p-6">
        <h2 className="text-lg font-semibold gold-3d-text mb-6">贝叶斯单股预测 (活跃自选)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topStocks.map((stock, idx) => (
            <div 
              key={idx}
              onClick={() => onSelectStock?.(stock)}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors group shadow-inner cursor-pointer relative overflow-hidden"
            >
              {stock.probValue && stock.probValue > 70 && stock.isUp && (
                 <div className="absolute left-0 top-0 w-1 h-full bg-primary-container shadow-[0_0_8px_var(--color-primary-container)]"></div>
              )}
              <div className="flex justify-between items-start mb-3 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold text-white group-hover:text-primary transition-colors">{stock.name}</span>
                  <span className="text-[11px] text-on-surface-variant font-mono">{stock.code}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-[15px] font-bold font-mono ${stock.isUp ? 'gem-text-red' : 'gem-text-green'}`}>{stock.price}</span>
                  <span className="text-[11px] text-on-surface-variant flex items-center gap-1 font-mono">
                    {stock.isUp ? <TrendingUp className="w-3 h-3 text-error" /> : <TrendingDown className="w-3 h-3 text-secondary" />} {stock.change}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-white/5 pt-3 mt-1 relative z-10">
                <span className="text-[12px] text-on-surface-variant">预测胜率 ({stock.probText})</span>
                <span className={`text-[13px] font-bold ${stock.isUp ? 'gem-text-red' : 'gem-text-green'} flex items-center gap-1`}>
                  {stock.probValue}% <ChevronRight className="w-3 h-3 opacity-50" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Drivers */}
      <section className="md:col-span-12 crystal-card p-6">
        <h2 className="text-lg font-semibold gold-3d-text mb-6">核心 Alpha 驱动因子</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors group shadow-inner">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 gold-3d-element rounded-lg">
                <AlertCircle className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-primary uppercase px-2 py-1 border border-primary/40 rounded-md bg-primary/10 shadow-inner">中立偏多</span>
            </div>
            <h3 className="text-[14px] font-semibold text-on-surface mb-1">政策驱动面</h3>
            <p className="text-[12px] text-on-surface-variant">近期降息预期升温，央行流动性释放</p>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors group shadow-inner">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 gold-3d-element rounded-lg">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold text-tertiary uppercase px-2 py-1 border border-tertiary/40 rounded-md bg-tertiary/10 shadow-inner">净流入</span>
            </div>
            <h3 className="text-[14px] font-semibold text-on-surface mb-1">北向资金</h3>
            <p className="text-[12px] text-on-surface-variant">外资机构持续净买入</p>
          </div>
          <div className="bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-xl hover:bg-white/10 transition-colors group shadow-inner">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 gold-3d-element rounded-lg">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="text-[11px] font-bold gem-text-red uppercase px-2 py-1 border border-error/40 rounded-md bg-error/10 shadow-inner">狂热</span>
            </div>
            <h3 className="text-[14px] font-semibold text-on-surface mb-1">散户情绪</h3>
            <p className="text-[12px] text-on-surface-variant">小盘题材股投机参与度高</p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
