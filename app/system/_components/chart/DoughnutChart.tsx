import React from 'react';
import { Doughnut , Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);



interface DoughnutChartProps {
  data: ChartData<'doughnut'>;
  // data: ChartData<'bar'>;
  options?: ChartOptions<'doughnut'>;
  // options?: ChartOptions<'bar'>;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, options }) => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Doughnut data={data} options={options} />
      {/* <Bar data={data} options={options} /> */}
    </div>
  );
};

export default DoughnutChart;
