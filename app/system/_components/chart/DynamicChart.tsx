import React from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, PointElement,RadialLinearScale  } from 'chart.js';
import { Bar, Line, Doughnut, Bubble ,Radar} from 'react-chartjs-2';

// 필요한 요소들 등록
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, PointElement,RadialLinearScale);

// 차트 타입, 데이터, 옵션을 파라미터로 받아서 동적으로 차트를 렌더링하는 컴포넌트
interface ChartProps {
  chartType: string;
  data: any;
  options: any;
  className?:string;
}

const DynamicChart: React.FC<ChartProps> = ({ chartType, data, options, className }) => {
  
  // 차트 타입에 따라 다른 차트를 렌더링
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar data={data} options={options} />;
      case 'line':
        return <Line data={data} options={options} />;
      case 'doughnut':
        return <Doughnut data={data} options={options} />;
      case 'bubble':
        return <Bubble data={data} options={options} />;
      case 'radar':  // Radar 차트 추가
        return <Radar data={data} options={options} />;
      default:
        return <Bar data={data} options={options}  />; // 기본값은 Bar 차트
    }
  };

  return <div className={className}>{renderChart()}</div>;
};

export default DynamicChart;
