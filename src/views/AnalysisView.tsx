import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, LayoutGrid, Clock, Sparkles } from 'lucide-react';
import { FactorRadarChart } from '../components/charts/FactorRadarChart';
import { ProbabilityGaugeChart } from '../components/charts/ProbabilityGaugeChart';
import { StockInfo } from '../types';

export function AnalysisView({ stock }: { stock?: StockInfo }) {
  if (!stock) {
    stock = {
      name: '贵州茅台',
      code: 'SH: 600519',
      price: '1,688.00',
      change: '+40.00 (+2.45%)',
      isUp: true,
      industry: '酿酒行业',
      probValue: 68,
      probText: '看涨'
    };
  }

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 pb-24 pt-20"
    >
      {/* Stock Header Section */}
      <section className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end crystal-card p-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-white tracking-wide">{stock.name}</h2>
            <span className="text-[11px] font-bold text-on-surface-variant bg-surface-container-highest/50 px-2 py-0.5 rounded border border-white/10 shadow-inner">{stock.code}</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant text-[13px] font-medium mt-1">
            <LayoutGrid className="w-4 h-4" />
            <span>{stock.industry || '未分类'}</span>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
          <div className={`text-3xl font-bold ${stock.isUp ? 'gem-text-red' : 'gem-text-green'} flex items-center gap-1 font-mono`}>
            <span>{stock.price}</span>
            {stock.isUp ? <TrendingUp className="w-6 h-6 text-error" /> : <TrendingDown className="w-6 h-6 text-secondary" />}
          </div>
          <div className={`text-[13px] font-bold ${stock.isUp ? 'gem-text-red' : 'gem-text-green'} opacity-90 pb-1 font-mono`}>
            {stock.change}
          </div>
        </div>
      </section>

      {/* 5-Dimension Radar Chart */}
      <article className="col-span-1 md:col-span-6 crystal-card p-4 flex flex-col relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <header className="flex items-center justify-between mb-2 z-10">
          <h3 className="text-[13px] font-medium text-on-surface uppercase tracking-wider">Alpha 五维画像</h3>
          <span className="text-primary-container">📡</span>
        </header>
        <div className="flex-1 min-h-[260px] w-full z-10 flex items-center justify-center">
          <FactorRadarChart />
        </div>
      </article>

      {/* Real-time Probability Pointer */}
      <article className="col-span-1 md:col-span-6 crystal-card p-4 flex flex-col relative">
        <header className="flex items-center justify-between mb-4">
          <h3 className="text-[13px] font-bold gold-3d-text uppercase tracking-wider flex items-center gap-2">
            实时预测
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(242,202,80,0.8)]"></span>
          </h3>
          <Clock className="w-5 h-5 text-primary-container drop-shadow-sm" />
        </header>
        
        <div className="flex-1 flex flex-col items-center justify-center relative mt-4">
          <ProbabilityGaugeChart value={stock.probValue || 50} />
          <div className="absolute bottom-6 flex flex-col items-center pointer-events-none">
            <span className="text-4xl font-bold gold-3d-text font-mono leading-none">{stock.probValue || 50}%</span>
            <span className="text-[12px] font-bold text-primary-container mt-2 tracking-widest bg-primary-container/10 px-4 py-1.5 rounded-full border border-primary-container/40 shadow-inner">{stock.probText || '震荡'}</span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-between text-[11px] font-semibold text-on-surface-variant px-6">
          <span>看跌</span>
          <span>中性</span>
          <span>看涨</span>
        </div>
      </article>

      {/* AI Analysis Section */}
      <article className="col-span-1 md:col-span-12 crystal-card p-[1px] relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-container/30 to-transparent opacity-60"></div>
        <div className="relative bg-[#151518]/90 m-[1px] rounded-xl p-5 h-full">
          <header className="flex items-center gap-2 mb-4">
            <div className="gold-3d-element p-1.5 rounded flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-black" fill="currentColor" />
            </div>
            <h3 className="text-[14px] gold-3d-text uppercase tracking-wider font-bold">DeepSeek Pro AI 深度研判</h3>
          </header>
          <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-[13px] text-on-surface-variant leading-relaxed shadow-inner">
            <p>超预期的盈利表现加上强有力的行业政策支持，表明近期上涨动能强劲。量化模型检测到过去三个交易日有显著的机构资金流入，打破了前期的盘整格局。技术面上，MACD出现看涨交叉，同时国内新闻流的情绪分析保持高度乐观。</p>
            <div className="mt-3 flex items-center gap-2 px-3 py-2 bg-primary/10 border border-primary/20 rounded-md text-primary font-medium text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              基于量化模型推演，当前概率倾向向上，建议将跟踪防守位设置在1,640。
            </div>
          </div>
          <footer className="mt-3 flex justify-end">
            <span className="text-[11px] font-semibold text-on-surface-variant opacity-60 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              2分钟前生成
            </span>
          </footer>
        </div>
      </article>
    </motion.main>
  );
}
