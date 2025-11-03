import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from 'chart.js';
import type { MinimalChart } from "@/data/bodyChartData";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const filterButtons = ["日", "週", "月", "年"];
const palette = ['#FFCC21', '#8FE9D0', '#EA6C00', '#FF963C'];



interface BodyRecordChartProps {
  date?: string;
  data?: ChartData<'line'> | MinimalChart;
  showFilters?: boolean;
  showTimes?: boolean;
  className?: string;
}

export const BodyRecordChart: React.FC<BodyRecordChartProps> = ({
  date,
  data: dataProp,
  showFilters,
  showTimes,
  className
}) => {
  const [pointSize, setPointSize] = useState(4);

  useEffect(() => {
    const updatePointSize = () => {
      setPointSize(window.innerWidth < 640 ? 2 : 4);
    };
    updatePointSize();
    window.addEventListener("resize", updatePointSize);
    return () => window.removeEventListener("resize", updatePointSize);
  }, []);


  const isFullChartData = (d: unknown): d is ChartData<'line'> =>
    typeof d === 'object' && d !== null && 'datasets' in d;

  const normalizeToChartData = (dataProp: ChartData<'line'> | MinimalChart | undefined): ChartData<'line'> => {
    if (!dataProp) return { labels: [], datasets: [] };
    if (isFullChartData(dataProp)) return dataProp;
    return {
      labels: dataProp.labels,
      datasets: dataProp.series.map((s: { label: string; data: number[] }, idx: number) => {
        const color = palette[idx % palette.length];
        return {
          label: s.label,
          data: s.data,
          borderColor: color,
          backgroundColor: 'transparent',
          tension: 0.4,
          pointBackgroundColor: color,
          pointBorderColor: color,
          pointRadius: pointSize,
          pointHoverRadius: pointSize + 2
        } as any;
      }),
    };
  };



  const chartData = normalizeToChartData(dataProp);
  const shouldShowMonths = showTimes ?? Boolean(dataProp);
  const filtersVisible = showFilters ?? Boolean(dataProp);

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 200,
    animation: false,
    aspectRatio: 2,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#FFFFFF",
        titleColor: "#777",
        bodyColor: "#777",
        borderColor: "#777",
        borderWidth: 1,
        padding: 8,
        displayColors: false,
        callbacks: {
          label: (context: any) => `${context.dataset.label}: ${context.parsed.y}kg`,
        },
      },
    },
    scales: {
      x: {
        border: { display: false },
        grid: {
          color: "rgba(255,255,255,0.1)",
          tickLength: 10,
        },
        ticks: shouldShowMonths ? {
          color: "#FFFFFF",
          maxRotation: 0,
          autoSkip: false,
          padding: 20
        } : { display: false },
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={`bg-dark-500 h-full flex flex-col ${className || ""}`}>
      {date && (
        <div className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 text-white">
          <span className="text-xs sm:text-[15px] whitespace-nowrap">
            BODY<br />RECORD
          </span>
          <span className="ml-2 sm:ml-4 text-lg sm:text-[22px]">{date}</span>
        </div>
      )}
      <div className="flex-1 px-4 sm:px-6">
        <Line data={chartData} options={options} />
      </div>
      {filtersVisible && (
        <div className="p-2 sm:p-4 flex gap-1 sm:gap-2 justify-center sm:justify-start">
          {filterButtons.map((button) => (
            <button
              key={button}
              className="min-w-12 sm:min-w-16 py-1 text-xs sm:text-[15px] rounded-full bg-light text-primary-300 hover:bg-primary-300 hover:text-white transition-colors"
            >
              {button}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
