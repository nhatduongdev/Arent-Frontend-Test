export interface MinimalSeries {
  label: string;
  data: number[];
}

export interface MinimalChart {
  labels: string[];
  series: MinimalSeries[];
}

const months = ["6月", "7月", "8月", "9月", "10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月"];


export const bodyChartData: MinimalChart = {
  labels: months,
  series: [
    {
      label: 'Body Fat',
      data: [68, 64, 67, 65, 64, 66, 65, 63, 62, 61, 60, 59],
    },
    {
      label: 'Weight',
      data: [50, 58, 63, 61, 60, 59, 58, 57, 56, 55, 54, 53],
    },
  ],
};
