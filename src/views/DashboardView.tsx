import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export function DashboardView() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 pb-24 pt-20"
    >
      {/* Market Temperature Gauge */}
      <section className="md:col-span-12 lg:col-span-6 bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-container/5 to-transparent pointer-events-none"></div>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-semibold text-on-background">市场温度</h2>
            <p className="text-sm text-on-surface-variant">全景指数</p>
          </div>
          <div className="px-3 py-1 bg-surface-container-high border border-outline-variant rounded-full flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[11px] font-semibold text-primary">实时</span>
          </div>
        </div>

        <div className="relative h-[180px] w-full max-w-[360px] mx-auto mt-4">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100">
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#2A2A2A" strokeLinecap="round" strokeWidth="12" />
            <path d="M 20 100 A 80 80 0 0 1 156.5 45.5" fill="none" stroke="#D4AF37" strokeLinecap="round" strokeWidth="12" className="drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
            <line x1="100" y1="20" x2="100" y2="10" stroke="#4d4635" strokeWidth="2" />
            <line x1="20" y1="100" x2="10" y2="100" stroke="#4d4635" strokeWidth="2" />
            <line x1="180" y1="100" x2="190" y2="100" stroke="#4d4635" strokeWidth="2" />
          </svg>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pb-4 w-full">
            <div className="text-3xl font-bold text-primary-container">72<span className="text-lg font-semibold text-on-surface-variant ml-1">/100</span></div>
            <div className="text-[11px] font-semibold text-primary uppercase tracking-wider mt-1">贪婪 / 偏热</div>
            <div className="mt-4 inline-block px-3 py-1.5 bg-[#93000a]/20 border border-[#93000a] text-[#ffb4ab] text-[11px] font-semibold rounded">结构性牛市</div>
          </div>
        </div>
      </section>

      {/* Bayesian Probability Engine */}
      <section className="md:col-span-12 lg:col-span-6 bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-on-background">贝叶斯概率引擎</h2>
            <p className="text-sm text-on-surface-variant">前瞻性市场状态预测</p>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <ShieldCheck className="w-5 h-5 fill-current" />
            <span className="text-[11px] font-semibold uppercase">高置信度</span>
          </div>
        </div>
        
        <div className="space-y-5 mt-8">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-[13px] font-medium text-on-background flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#93000a]"></span> 看多状态</span>
              <span className="text-[13px] font-medium text-[#ffb4ab]">45%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#93000a] to-[#ffb4ab]" style={{ width: '45%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-[13px] font-medium text-on-background flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-surface-variant"></span> 震荡状态</span>
              <span className="text-[13px] font-medium text-on-surface-variant">35%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-surface-variant" style={{ width: '35%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-[13px] font-medium text-on-background flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#004d2c]"></span> 看空状态</span>
              <span className="text-[13px] font-medium text-[#8be2b6]">20%</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#004d2c] to-[#8be2b6]" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Drivers */}
      <section className="md:col-span-12 bg-[#1E1E1E] border border-[#2A2A2A] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-on-background mb-6">核心 Alpha 驱动因子</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface-container border border-surface-container-highest p-4 rounded-lg hover:border-outline-variant transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-primary-container/10 rounded text-primary-container group-hover:bg-primary-container/20 transition-colors">
                <AlertCircle className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold text-primary uppercase px-2 py-1 border border-primary/30 rounded">强势</span>
            </div>
            <h3 className="text-[13px] font-medium text-on-background mb-1">政策驱动</h3>
            <p className="text-[11px] font-semibold text-on-surface-variant">政策宽松与流动性注入支撑资产定价</p>
          </div>
          <div className="bg-surface-container border border-surface-container-highest p-4 rounded-lg hover:border-outline-variant transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-primary-container/10 rounded text-primary-container group-hover:bg-primary-container/20 transition-colors">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold text-tertiary-container uppercase px-2 py-1 border border-tertiary-container/30 rounded">净流入</span>
            </div>
            <h3 className="text-[13px] font-medium text-on-background mb-1">北向资金</h3>
            <p className="text-[11px] font-semibold text-on-surface-variant">外资机构持续净买入</p>
          </div>
          <div className="bg-surface-container border border-surface-container-highest p-4 rounded-lg hover:border-outline-variant transition-colors group">
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-primary-container/10 rounded text-primary-container group-hover:bg-primary-container/20 transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold text-[#ffb4ab] uppercase px-2 py-1 border border-[#ffb4ab]/30 rounded">狂热</span>
            </div>
            <h3 className="text-[13px] font-medium text-on-background mb-1">散户情绪</h3>
            <p className="text-[11px] font-semibold text-on-surface-variant">小盘题材股投机参与度高</p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
