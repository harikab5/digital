import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function UserGrowthChart({ data }) {
  if (!data || data.length === 0) {
    return <div className="p-4 text-gray-500">No user growth data available.</div>;
  }

  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Registrations",
        data: data.map((item) => item.count),
        borderColor: "#8e44ad",
        backgroundColor: "rgba(142,68,173,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "User Growth Chart",
      },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Registrations" }, beginAtZero: true },
    },
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <Line data={chartData} options={options} />
    </div>
  );
}
