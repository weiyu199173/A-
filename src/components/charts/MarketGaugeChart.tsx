import React from 'react';
import ReactECharts from 'echarts-for-react';

export function MarketGaugeChart({ value = 72 }: { value?: number }) {
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
          color: '#D4AF37',
          shadowColor: 'rgba(212, 175, 55, 0.5)',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        },
        progress: {
          show: true,
          width: 14,
          roundCap: true,
        },
        pointer: {
          show: false // We use progress bar instead of classic needle to match the PRD's sleek design
        },
        axisLine: {
          roundCap: true,
          lineStyle: {
            width: 14,
            color: [[1, '#2A2A2A']]
          }
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: { show: false },
        detail: {
          formatter: function (value) {
            return '{value|' + value + '}{unit|/100}';
          },
          rich: {
            value: {
              fontSize: 36,
              fontWeight: 700,
              color: '#D4AF37',
              fontFamily: 'Orbitron'
            },
            unit: {
              fontSize: 16,
              color: '#78909C',
              padding: [0, 0, -10, 4]
            }
          },
          offsetCenter: [0, '-15%']
        },
        data: [{ value }]
      }
    ]
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: '180px', width: '100%' }}
      opts={{ renderer: 'svg' }}
    />
  );
}
