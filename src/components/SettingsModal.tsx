import React, { useState, useEffect } from 'react';
import { X, Key, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function SettingsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    if (isOpen) {
      setApiKey(localStorage.getItem('deepseek_api_key') || '');
    }
  }, [isOpen]);

  const handleSave = () => {
    localStorage.setItem('deepseek_api_key', apiKey.trim());
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-surface-container border border-surface-container-high rounded-xl shadow-2xl z-[101] overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-surface-container-highest bg-surface-dim/50">
              <h2 className="text-[15px] font-semibold text-on-surface flex items-center gap-2">
                <Key className="w-4 h-4 text-primary" />
                系统配置
              </h2>
              <button 
                onClick={onClose}
                className="p-1 rounded-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-medium text-on-surface-variant">
                  DeepSeek API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-..."
                  className="w-full bg-[#131313] border border-surface-container-highest rounded-lg px-3 py-2 text-sm text-on-surface focus:outline-none focus:border-primary-container transition-colors placeholder:text-on-surface-variant/40"
                />
                <p className="text-[11px] font-semibold text-on-surface-variant/60 flex items-center gap-1 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Key 仅保存在本地浏览器缓存中，不会上传至我们的服务器。
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-surface-container-highest bg-surface-dim/50 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg text-[13px] font-medium text-on-surface-variant hover:bg-surface-container-highest transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg text-[13px] font-medium bg-primary-container text-on-primary-container hover:bg-primary transition-colors shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
              >
                保存设置
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
