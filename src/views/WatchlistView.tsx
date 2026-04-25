import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, TrendingUp, TrendingDown, BookOpen, ChevronRight, Plus, Filter } from 'lucide-react';

export function WatchlistView() {
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
        <div className="bg-error-container/20 border border-error/30 rounded-xl p-4 relative overflow-hidden backdrop-blur-sm group hover:border-error/50 transition-colors">
          <div className="absolute top-0 left-0 w-1 h-full bg-error shadow-[0_0_12px_var(--color-error)]"></div>
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-error mt-0.5" />
            <div>
              <h3 className="text-[11px] font-semibold text-error uppercase tracking-wider mb-1">风险警告</h3>
              <p className="text-[13px] font-medium text-on-surface mb-2">预计高波动率</p>
              <p className="text-sm text-on-surface-variant text-xs leading-relaxed">量化模型检测到小盘科技板块突然缺乏流动性。预计日内波动超过 8%。</p>
            </div>
          </div>
        </div>

        {/* Alpha Signal Card */}
        <div className="bg-surface-container-high border border-primary-container/30 rounded-xl p-4 relative backdrop-blur-sm shadow-[0_8px_32px_rgba(212,175,55,0.03)] hover:border-primary-container/60 transition-colors">
          <div className="absolute top-0 right-0 p-3 opacity-20">
            <TrendingUp className="w-12 h-12 text-primary-container" />
          </div>
          <h3 className="text-[11px] font-semibold text-primary-container uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container shadow-[0_0_6px_var(--color-primary-container)]"></span> Alpha 信号
          </h3>
          <p className="text-[13px] font-medium text-on-surface mb-4">概率突变 &gt; 30%</p>
          <div className="flex justify-between items-end border-t border-surface-container-highest pt-3 w-full relative z-10">
            <div>
              <p className="text-sm text-on-surface-variant text-xs mb-1">比亚迪 (002594.SZ)</p>
              <p className="text-[11px] font-semibold text-outline tracking-wide">检测到看涨转变</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-primary-container block leading-none font-mono">+34%</span>
            </div>
          </div>
        </div>

        {/* Policy News Card */}
        <div className="bg-surface-container border border-surface-container-highest rounded-xl p-4 hover:border-outline-variant transition-colors cursor-pointer">
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
        <div className="flex items-center justify-between mb-4 px-1">
          <h1 className="text-lg font-semibold text-on-surface">活跃自选</h1>
          <div className="flex items-center gap-2">
            <button className="bg-surface-container border border-outline-variant rounded-lg py-1.5 px-3 text-[11px] font-semibold text-on-surface-variant hover:text-on-surface hover:border-outline transition-all flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> 筛选
            </button>
            <button className="bg-primary-container text-on-primary-container rounded-lg py-1.5 px-4 text-[11px] font-bold hover:bg-primary transition-colors flex items-center gap-1.5 shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              <Plus className="w-3.5 h-3.5" /> 添加资产
            </button>
          </div>
        </div>

        <div className="bg-surface-container-highest border border-surface-variant rounded-xl overflow-hidden flex-grow flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-outline-variant/30 bg-surface-container/80 sticky top-0 backdrop-blur-md z-10">
            <div className="col-span-4 text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider flex items-center gap-1 cursor-pointer hover:text-on-surface">
              资产 / 代码 
            </div>
            <div className="col-span-3 text-right text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">最新价</div>
            <div className="col-span-5 text-right text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">概率突变</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col overflow-y-auto">
            {/* High Alpha */}
            <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-surface-variant/50 hover:bg-surface-container transition-colors items-center group cursor-pointer bg-primary-container/5 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-container rounded-r-md"></div>
              <div className="col-span-4 flex flex-col pl-2">
                <span className="text-[13px] font-medium text-primary-container font-bold group-hover:text-primary transition-colors">比亚迪</span>
                <span className="text-[11px] font-semibold text-outline font-mono mt-0.5">002594.SZ</span>
              </div>
              <div className="col-span-3 flex flex-col items-end justify-center">
                <span className="text-[13px] font-medium text-primary-container font-bold">245.80</span>
                <span className="text-[11px] font-medium text-primary-container bg-primary-container/10 border border-primary-container/20 px-1 rounded shadow-[0_0_8px_rgba(212,175,55,0.15)] mt-1">+4.80%</span>
              </div>
              <div className="col-span-5 flex items-center justify-end gap-3">
                <div className="w-16 h-1.5 bg-surface-container-lowest rounded-full overflow-hidden relative border border-primary-container/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hidden sm:block">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary/50 to-primary-container w-[85%] rounded-full shadow-[0_0_6px_var(--color-primary-container)]"></div>
                </div>
                <span className="text-[11px] font-semibold text-primary-container flex items-center gap-0.5 min-w-[36px] justify-end">
                  <TrendingUp className="w-3.5 h-3.5" /> 34%
                </span>
              </div>
            </div>

            {/* Standard Up */}
            <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-surface-variant/50 hover:bg-surface-container transition-colors items-center group cursor-pointer pl-3">
              <div className="col-span-4 flex flex-col">
                <span className="text-[13px] font-medium text-on-surface group-hover:text-inverse-surface transition-colors">贵州茅台</span>
                <span className="text-[11px] font-semibold text-outline font-mono mt-0.5">600519.SH</span>
              </div>
              <div className="col-span-3 flex flex-col items-end justify-center">
                 <span className="text-[13px] font-medium text-on-surface font-mono">1,680.00</span>
                 <span className="text-[11px] font-medium text-error bg-error/10 px-1 rounded mt-1 font-mono">+1.25%</span>
              </div>
              <div className="col-span-5 flex items-center justify-end gap-3">
                <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden relative border border-outline-variant/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hidden sm:block">
                  <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-error/50 to-error w-[45%] rounded-full shadow-[0_0_4px_rgba(255,68,68,0.5)]"></div>
                </div>
                <span className="text-[11px] font-semibold text-error flex items-center gap-0.5 min-w-[36px] justify-end">
                  <TrendingUp className="w-3.5 h-3.5" /> 12%
                </span>
              </div>
            </div>

            {/* Standard Down */}
            <div className="grid grid-cols-12 gap-4 px-4 py-3 border-b border-surface-container-highest hover:bg-surface-container transition-colors items-center group cursor-pointer pl-3">
              <div className="col-span-4 flex flex-col">
                <span className="text-[13px] font-medium text-on-surface group-hover:text-primary-container transition-colors">中国平安</span>
                <span className="text-[11px] font-semibold text-outline font-mono mt-0.5">601318.SH</span>
              </div>
              <div className="col-span-3 flex flex-col items-end justify-center">
                 <span className="text-[13px] font-medium text-on-surface font-mono">42.15</span>
                 <span className="text-[11px] font-medium text-secondary bg-secondary/10 px-1 rounded mt-1 font-mono">-0.85%</span>
              </div>
              <div className="col-span-5 flex items-center justify-end gap-3">
                <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden relative border border-outline-variant/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] hidden sm:block">
                  <div className="absolute right-0 top-0 h-full bg-gradient-to-l from-secondary/50 to-secondary w-[25%] rounded-full shadow-[0_0_4px_rgba(0,200,83,0.5)]"></div>
                </div>
                <span className="text-[11px] font-semibold text-secondary flex items-center gap-0.5 min-w-[36px] justify-end">
                   <TrendingDown className="w-3.5 h-3.5" /> 8%
                </span>
              </div>
            </div>

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
