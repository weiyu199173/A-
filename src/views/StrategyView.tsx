import React from 'react';
import { motion } from 'motion/react';
import { Target, TrendingUp, TrendingDown, Gavel, Calendar, Banknote, ArrowUpRight } from 'lucide-react';

export function StrategyView() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 max-w-7xl mx-auto flex flex-col gap-4 pb-24 pt-20"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-on-background flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" /> Alpha 策略中心
        </h2>
        <p className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">实时板块成交量与预测因子</p>
      </div>

      {/* Sector Heatmap Grid */}
      <section className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between items-center">
          <h3 className="text-[13px] font-medium text-on-background">市场热力图</h3>
          <div className="flex gap-2">
            <span className="text-[11px] font-semibold text-on-surface-variant flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-error-container"></div> 上涨</span>
            <span className="text-[11px] font-semibold text-on-surface-variant flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-secondary-container"></div> 下跌</span>
          </div>
        </div>

        <div className="grid grid-cols-12 grid-rows-3 gap-2 h-[320px] md:h-[400px]">
          {/* Large Winner (AI) */}
          <div className="col-span-12 md:col-span-5 row-span-2 bg-error-container/20 border border-error-container rounded p-3 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:bg-error-container/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-error-container/10 to-transparent pointer-events-none"></div>
            <div className="flex justify-between items-start z-10">
              <span className="text-[11px] font-semibold text-on-background uppercase bg-surface-dim/80 px-2 py-1 rounded backdrop-blur-sm border border-surface-container-high">人工智能与计算</span>
              <TrendingUp className="w-4 h-4 text-error" />
            </div>
            <div className="z-10">
              <div className="text-3xl font-bold text-error">+4.28%</div>
              <div className="text-[11px] font-semibold text-on-surface-variant mt-1">成交量: 1.2B | 资金流向: 流入</div>
            </div>
          </div>

          {/* Medium Winner */}
          <div className="col-span-6 md:col-span-4 row-span-1 bg-error-container/10 border border-error-container/50 rounded p-3 flex flex-col justify-between cursor-pointer hover:bg-error-container/20 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-semibold text-on-background truncate">半导体</span>
            </div>
            <div>
              <div className="text-[13px] font-medium text-error">+2.15%</div>
            </div>
          </div>

          {/* Medium Loser */}
          <div className="col-span-6 md:col-span-3 row-span-2 bg-secondary-container/20 border border-secondary-container/50 rounded p-3 flex flex-col justify-between cursor-pointer hover:bg-secondary-container/30 transition-colors">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-semibold text-on-background uppercase bg-surface-dim/80 px-2 py-1 rounded backdrop-blur-sm border border-surface-container-high">白酒</span>
              <TrendingDown className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">-1.85%</div>
              <div className="text-[11px] font-semibold text-on-surface-variant mt-1">成交量: 850M</div>
            </div>
          </div>

          {/* Small Winner */}
          <div className="col-span-6 md:col-span-2 row-span-1 bg-error-container/5 border border-error-container/30 rounded p-2 flex flex-col justify-between">
            <span className="text-[11px] font-semibold text-on-surface-variant truncate">新能源</span>
            <span className="text-[13px] font-medium text-error">+0.8%</span>
          </div>

          {/* Small Loser */}
          <div className="col-span-6 md:col-span-2 row-span-1 bg-secondary-container/10 border border-secondary-container/30 rounded p-2 flex flex-col justify-between">
            <span className="text-[11px] font-semibold text-on-surface-variant truncate">房地产</span>
            <span className="text-[13px] font-medium text-secondary">-1.2%</span>
          </div>

          {/* Wide Neutral */}
          <div className="col-span-12 md:col-span-9 row-span-1 bg-surface-container border border-surface-container-high rounded p-3 flex justify-between items-center hover:bg-surface-container-high transition-colors">
            <div className="flex items-center gap-3 w-1/2">
              <span className="text-[11px] font-semibold text-on-background uppercase px-2 py-1 bg-surface rounded border border-surface-container-highest whitespace-nowrap">大金融</span>
              <div className="h-1 w-full max-w-[120px] bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-primary/50" style={{ width: '55%' }}></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[13px] font-medium text-primary">+0.2%</div>
              <div className="text-[11px] font-semibold text-on-surface-variant">成交量: 2.1B</div>
            </div>
          </div>
        </div>
      </section>

      {/* Metaphysics Factor Dashboard */}
      <section className="flex flex-col gap-3 mt-6">
        <h3 className="text-[13px] font-medium text-on-background uppercase tracking-widest border-b border-surface-container-high pb-2">“玄学”因子仪表盘</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Policy */}
          <div className="bg-surface-container/80 backdrop-blur-md border border-surface-container-high rounded-lg p-4 flex flex-col gap-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-semibold text-on-surface-variant uppercase">政策 NLP 评分</span>
              <Gavel className="w-4 h-4 text-primary" />
            </div>
            <div className="flex items-end gap-2 mt-auto">
              <span className="text-3xl font-bold text-primary">84</span>
              <span className="text-[11px] font-semibold text-on-surface-variant mb-1">/ 100</span>
            </div>
            <div className="text-[11px] font-semibold text-error flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> 强刺激基调
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 blur-xl rounded-full pointer-events-none"></div>
          </div>

          {/* Calendar Effect */}
          <div className="bg-surface-container/80 backdrop-blur-md border border-surface-container-high rounded-lg p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-semibold text-on-surface-variant uppercase">日历效应</span>
              <Calendar className="w-4 h-4 text-secondary" />
            </div>
            <div className="mt-auto flex flex-col gap-1">
              <div className="text-[13px] font-medium text-on-background">春季躁动模式</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                <span className="text-[11px] font-semibold text-primary font-bold">活跃</span>
              </div>
            </div>
            <div className="w-full bg-surface-variant h-1 rounded-full mt-1">
              <div className="bg-primary h-full rounded-full w-[80%]"></div>
            </div>
          </div>

          {/* Institutional Behavior */}
          <div className="bg-surface-container/80 backdrop-blur-md border border-surface-container-high rounded-lg p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-semibold text-on-surface-variant uppercase">机构行为</span>
              <Banknote className="w-4 h-4 text-secondary" />
            </div>
            <div className="mt-auto">
              <div className="text-[13px] font-medium text-on-background mb-2">净吸筹</div>
              <div className="flex items-end gap-1 h-8 opacity-80">
                <div className="w-full bg-surface-variant rounded-t-sm h-[20%]"></div>
                <div className="w-full bg-surface-variant rounded-t-sm h-[30%]"></div>
                <div className="w-full bg-surface-variant rounded-t-sm h-[25%]"></div>
                <div className="w-full bg-primary-container/40 rounded-t-sm h-[50%]"></div>
                <div className="w-full bg-primary-container/60 rounded-t-sm h-[70%]"></div>
                <div className="w-full bg-primary rounded-t-sm h-[90%]"></div>
              </div>
            </div>
          </div>

          {/* Northbound Flow */}
          <div className="bg-surface-container/80 backdrop-blur-md border border-surface-container-high rounded-lg p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <span className="text-[11px] font-semibold text-on-surface-variant uppercase">北向流向</span>
              <ArrowUpRight className="w-4 h-4 text-error" />
            </div>
            <div className="mt-auto flex flex-col">
              <span className="text-3xl font-bold text-on-background">+4.5<span className="text-lg text-on-surface-variant font-normal">B</span></span>
              <span className="text-[11px] font-semibold text-on-surface-variant">当日净流入</span>
            </div>
          </div>

        </div>
      </section>

    </motion.main>
  );
}
