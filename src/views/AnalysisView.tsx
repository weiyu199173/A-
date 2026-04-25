import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, LayoutGrid, Clock, Sparkles } from 'lucide-react';

export function AnalysisView() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="p-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 pb-24 pt-20"
    >
      {/* Stock Header Section */}
      <section className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end bg-surface-container border border-surface-container-high rounded-xl p-4 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-on-surface">贵州茅台</h2>
            <span className="text-[11px] font-semibold text-on-surface-variant bg-surface-container-highest px-2 py-0.5 rounded border border-surface-bright">SH: 600519</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant text-[13px] font-medium mt-1">
            <LayoutGrid className="w-4 h-4" />
            <span>酿酒行业</span>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
          <div className="text-3xl font-bold text-error flex items-center gap-1">
            <span>1,688.00</span>
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="text-[13px] font-medium text-error opacity-90 pb-1">
            +40.00 (+2.45%)
          </div>
        </div>
      </section>

      {/* 5-Dimension Radar Chart */}
      <article className="col-span-1 md:col-span-6 bg-surface-container border border-surface-container-high rounded-xl p-4 flex flex-col relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <header className="flex items-center justify-between mb-4 z-10">
          <h3 className="text-[13px] font-medium text-on-surface uppercase tracking-wider">Alpha 五维画像</h3>
          <span className="text-primary-container">📡</span>
        </header>
        <div className="flex-1 flex items-center justify-center relative min-h-[240px] z-10">
          <svg className="w-full h-full max-w-[240px] drop-shadow-md" viewBox="0 0 200 200">
            <polygon points="100,20 176,75 147,165 53,165 24,75" fill="none" stroke="#2a2a2a" strokeWidth="1" />
            <polygon points="100,40 157,81 135,148 65,148 43,81" fill="none" stroke="#2a2a2a" strokeWidth="1" />
            <polygon points="100,60 138,87 123,132 77,132 62,87" fill="none" stroke="#2a2a2a" strokeWidth="1" />
            <polygon points="100,80 119,94 112,116 88,116 81,94" fill="none" stroke="#2a2a2a" strokeWidth="1" />
            <line x1="100" y1="100" x2="100" y2="20" stroke="#2a2a2a" strokeWidth="1" />
            <line x1="100" y1="100" x2="176" y2="75" stroke="#2a2a2a" strokeWidth="1" />
            <line x1="100" y1="100" x2="147" y2="165" stroke="#2a2a2a" strokeWidth="1" />
            <line x1="100" y1="100" x2="53" y2="165" stroke="#2a2a2a" strokeWidth="1" />
            <line x1="100" y1="100" x2="24" y2="75" stroke="#2a2a2a" strokeWidth="1" />
            
            <polygon points="100,28 172,77 128,139 64,149 39,80" fill="rgba(212, 175, 55, 0.2)" stroke="#d4af37" strokeWidth="2" />
            <circle cx="100" cy="28" r="3" fill="#f2ca50" />
            <circle cx="172" cy="77" r="3" fill="#f2ca50" />
            <circle cx="128" cy="139" r="3" fill="#f2ca50" />
            <circle cx="64" cy="149" r="3" fill="#f2ca50" />
            <circle cx="39" cy="80" r="3" fill="#f2ca50" />
            
            <text x="100" y="12" fill="#d0c5af" fontSize="8" textAnchor="middle" className="font-semibold text-[11px]">技术面</text>
            <text x="182" y="78" fill="#d0c5af" fontSize="8" textAnchor="start" className="font-semibold text-[11px]">基本面</text>
            <text x="150" y="176" fill="#d0c5af" fontSize="8" textAnchor="middle" className="font-semibold text-[11px]">资金面</text>
            <text x="50" y="176" fill="#d0c5af" fontSize="8" textAnchor="middle" className="font-semibold text-[11px]">消息面</text>
            <text x="18" y="78" fill="#d0c5af" fontSize="8" textAnchor="end" className="font-semibold text-[11px]">情绪面</text>
          </svg>
        </div>
      </article>

      {/* Real-time Probability Pointer */}
      <article className="col-span-1 md:col-span-6 bg-surface-container border border-surface-container-high rounded-xl p-4 flex flex-col relative">
        <header className="flex items-center justify-between mb-6">
          <h3 className="text-[13px] font-medium text-on-surface uppercase tracking-wider flex items-center gap-2">
            实时预测
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(242,202,80,0.8)]"></span>
          </h3>
          <Clock className="w-5 h-5 text-primary-container" />
        </header>
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <svg className="w-full max-w-[280px]" viewBox="0 0 200 120">
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#2a2a2a" strokeLinecap="round" strokeWidth="12" />
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#goldGradient)" strokeDasharray="251.2" strokeDashoffset="80.4" strokeLinecap="round" strokeWidth="12" />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#353534" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
            </defs>
            <g transform="translate(100, 100) rotate(32)">
              <polygon points="-4,0 4,0 0,-65" fill="#f2ca50" />
              <circle cx="0" cy="0" r="8" fill="#131313" stroke="#f2ca50" strokeWidth="2" />
            </g>
          </svg>
          <div className="absolute bottom-6 flex flex-col items-center">
            <span className="text-3xl font-bold text-primary leading-none">68%</span>
            <span className="text-[11px] font-semibold text-primary-container mt-1 uppercase tracking-widest bg-primary-container/10 px-3 py-1 rounded-full border border-primary-container/30">看涨</span>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-[11px] font-semibold text-on-surface-variant px-4">
          <span>看跌</span>
          <span>中性</span>
          <span>看涨</span>
        </div>
      </article>

      {/* AI Analysis Section */}
      <article className="col-span-1 md:col-span-12 bg-surface-container border border-surface-container-high rounded-xl p-[1px] relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-high via-primary-container/20 to-surface-container-high opacity-50"></div>
        <div className="relative bg-surface-container m-[1px] rounded-xl p-4 h-full backdrop-blur-xl">
          <header className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary-fixed" fill="currentColor" />
            <h3 className="text-[13px] font-medium text-primary-fixed uppercase tracking-wider font-bold">DeepSeek Pro AI 深度研判</h3>
          </header>
          <div className="bg-surface-dim/50 border border-surface-container-highest rounded-lg p-4 text-sm text-on-surface-variant leading-relaxed">
            <p>超预期的盈利表现加上强有力的行业政策支持，表明近期上涨动能强劲。量化模型检测到过去三个交易日有显著的机构资金流入，打破了前期的盘整格局。技术面上，MACD出现看涨交叉，同时国内新闻流的情绪分析保持高度乐观。建议维持核心仓位，并将跟踪止损位设置在1,640。</p>
          </div>
          <footer className="mt-3 flex justify-end">
            <span className="text-[11px] font-semibold text-on-surface-variant opacity-60 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              2分钟前生成
            </span>
          </footer>
        </div>
      </article>

      <section className="col-span-1 md:col-span-12 mt-4 text-center">
        <p className="text-[11px] font-semibold text-on-surface-variant opacity-40 max-w-2xl mx-auto">
          免责声明：AI生成的深度研判和概率模型仅供参考，不构成财务建议。量化模型受市场风险影响。过往表现不预示未来结果。
        </p>
      </section>
    </motion.main>
  );
}
