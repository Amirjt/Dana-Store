"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
];

export const data = {
  labels: labels.reverse(),
  datasets: [
    {
      label: "مقدار تستی 1 ",
      data: ["546", "342", "134", "254"],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "مقدار تستی 2",
      data: ["132", "234", "432", "763"],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Chart = () => {
  return (
    <Line
      style={{
        backgroundColor: "lightblue",
        padding: "15px",
        borderRadius: "15px",
      }}
      options={options}
      data={data}
    />
  );
};

export default Chart;
