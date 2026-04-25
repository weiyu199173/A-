import React from 'react';
import ReactECharts from 'echarts-for-react';

export function FactorRadarChart({ 
  data = [90, 85, 60, 75, 80],
  indicators = [
    { name: '技术面', max: 100 },
    { name: '基本面', max: 100 },
    { name: '资金面', max: 100 },
    { name: '消息面', max: 100 },
    { name: '情绪面', max: 100 }
  ]
}: { 
  data?: number[], 
  indicators?: { name: string, max: number }[] 
}) {

  const option = {
    radar: {
      indicator: indicators,
      shape: 'polygon',
      radius: '65%',
      splitNumber: 5,
      axisName: {
        color: '#D0C5AF',
        fontSize: 10,
        fontWeight: 600,
      },
      splitArea: {
        areaStyle: {
          color: ['rgba(212, 175, 55, 0.05)', 'rgba(212, 175, 55, 0.02)'],
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)',
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.15)',
        }
      }
    },
    series: [
      {
        name: 'Alpha 五维画像',
        type: 'radar',
        data: [
          {
            value: data,
            name: '当前股票',
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
              color: '#FFD700',
              borderColor: '#FFD700',
            },
            areaStyle: {
              color: 'rgba(212, 175, 55, 0.25)',
            },
            lineStyle: {
              color: '#D4AF37',
              width: 2,
            }
          }
        ]
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: '100%', width: '100%' }}
      opts={{ renderer: 'svg' }}
    />
  );
}
