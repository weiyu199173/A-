import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function Disclaimer() {
  return (
    <div className="bg-[#0A0A0A] border-t border-[#1E1E1E] p-2 text-center text-[#78909c] text-[10px] sm:text-xs z-40 relative pb-[env(safe-area-inset-bottom,0px)]">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-1">
          <AlertTriangle className="w-3.5 h-3.5 text-[#FF9800]" />
          <span className="font-bold text-[#FF9800]">【合规免责声明】</span>
        </div>
        <p className="leading-relaxed opacity-80">
          本工具仅供个人量化分析学习与交流使用，输出结果为基于贝叶斯模型和因子的客观概率推算，<strong className="text-white font-normal">不构成任何形式的投资建议或推荐</strong>。股市有风险，入市需谨慎！
        </p>
      </div>
    </div>
  );
}
