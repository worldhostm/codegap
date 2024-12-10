import React from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, PointElement,RadialLinearScale  } from 'chart.js';
import { Bar, Line, Doughnut, Bubble ,Radar, PolarArea} from 'react-chartjs-2';

// 필요한 요소들 등록
Chart.register(CategoryScale, LinearScale, BarElement, LineElement, ArcElement, PointElement,RadialLinearScale);

// 차트 타입, 데이터, 옵션을 파라미터로 받아서 동적으로 차트를 렌더링하는 컴포넌트
interface ChartProps {
  chartType: string;
  data: any;
  options?: any;
  className?:string;
  id?:string;
}

const DynamicChart: React.FC<ChartProps> = ({ chartType, data, options, className, id }) => {
    // Chart.js 데이터와 옵션 설정
    // const data = data;
  // 차트 타입에 따라 다른 차트를 렌더링
  const renderChart = () => {
    switch (chartType) {
      case 'bar':
        return <Bar id={id} data={data} options={data.options} />;
      case 'line':
        return <Line id={id} data={data} options={data.options} />;
      case 'doughnut':
        return <Doughnut id={id} data={data} options={data.options} />;
      case 'bubble':
        return <Bubble id={id} data={data} options={data.options} />;
      case 'radar':  // Radar 차트 추가
        return <Radar id={id} data={data} options={data.options} />;
      case 'polarArea':  // Radar 차트 추가
        return <PolarArea id={id} data={data} options={data.options} />;
      default:
        return <Bar id={id} data={data} options={data.options}  />; // 기본값은 Bar 차트
    }
  };

  return <div className={className}>{renderChart()}</div>;
};

export default DynamicChart;
