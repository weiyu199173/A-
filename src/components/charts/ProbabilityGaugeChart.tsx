import React from 'react';
import ReactECharts from 'echarts-for-react';

export function ProbabilityGaugeChart({ value = 68 }: { value?: number }) {
  const option = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 1,
        radius: '100%',
        center: ['50%', '80%'], 
        itemStyle: {
          color: '#D4AF37'
        },
        progress: {
          show: true,
          width: 8,
        },
        pointer: {
          show: true,
          length: '75%',
          width: 6,
          itemStyle: {
            color: '#FFD700'
          }
        },
        axisLine: {
          lineStyle: {
            width: 8,
            color: [[1, '#2A2A2A']]
          }
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: { show: false },
        detail: { show: false },
        data: [{ value }]
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: '140px', width: '100%' }}
      opts={{ renderer: 'svg' }}
    />
  );
}
