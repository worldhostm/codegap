import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: ChartData<'doughnut'>;
  options?: ChartOptions<'doughnut'>;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, options }) => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
