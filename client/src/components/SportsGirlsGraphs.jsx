import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      labels: {
        // This more specific font property overrides the global property

        position: "top",
        font: {
          family: "Sans-serif",
          weight: "bold",
          size: "10",
          position: "bottom",
        },
      },
    },

    title: {
      display: true,
      text: "Overall Leading Board",
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  indexAxis: "y",
  scales: {
    xAxes: {
      stacked: true,
      ticks: {
        font: function (context) {
          var avgSize = Math.round(
            (context.chart.height + context.chart.width) / 2
          );
          var size = Math.round(avgSize / 32);
          size = size > 12 ? 12 : size; // setting max limit to 12
          return {
            size: size,
            weight: "bold",
          };
        },
      },
    },
    y: {
      ticks: {
        font: function (context) {
          var avgSize = Math.round(
            (context.chart.height + context.chart.width) / 2
          );
          var size = Math.round(avgSize / 45);
          size = size > 12 ? 12 : size; // setting max limit to 12
          return {
            size: size,
            weight: "bold",
          };
        },
      },

      stacked: true,
      grid: {
        display: false,
        borderColor: "black",
      },
    },
  },
};

export const SportsGirlsGraphs = () => {
  const [scores, setscores] = useState({
    '1': [ 70, 40, 20, 100 ],
    '2': [ 100, 0, 40, 70 ],
    '3': [ 70, 40, 20, 100 ],
    '4': [ 70, 40, 20, 100 ],
    '5': [ 100, 0, 40, 70 ],
    '6': [ 70, 40, 20, 100 ],
    '7': [ 40, 100, 0, 70 ],
    '8': [ 70, 20, 40, 100 ],
    '9': [ 100, 40, 20, 70 ],
    '10': [ 40, 70, 20, 100 ],
    '11': [ 10, 50, 20, 35 ],
    '12': [ 0, 40, 70, 100 ],
    '13': [ 80, 200, 0, 140 ],
    '14': [ 84, 210, 147, 42 ],
    '15': [ 300, 60, 210, 120 ]
  });
 

   
  const labels = ["Aryabhatta", "Bhaskara", "Maitreyi", "Gargi"];
  const data = {
    labels,

    datasets: [
      {
        label: "Cricket",
        data: scores[1],
        backgroundColor: "#f64432",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Football",
        data: scores[2],
        backgroundColor: "#ebdc15",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "DodgeBall",
        data: scores[3],
        backgroundColor: "#FA8072",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "VolleyBall",
        data: scores[4],
        backgroundColor: "#FF8C00",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Basketball",
        data: scores[5],
        backgroundColor: "#FFD700",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Badminton",
        data: scores[6],
        backgroundColor: "#EEE8AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Tennis",
        data: scores[7],
        backgroundColor: "#9ACD32",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Table Tennis",
        data: scores[8],
        backgroundColor: "#6B8E23",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Carrom",
        data: scores[9],
        backgroundColor: "#20B2AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Chess",
        data: scores[10],
        backgroundColor: "#40E0D0	",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Squash",
        data: scores[11],
        backgroundColor: "#6495ED",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Weightlifting",
        data: scores[12],
        backgroundColor: "#000080",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Esports",
        data: scores[13],
        backgroundColor: "#8A2BE2",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Aquatics",
        data: scores[14],
        backgroundColor: "#8B008B",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
      {
        label: "Athletics",
        data: scores[15],
        backgroundColor: "#C71585",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.6,
      },
    ],
  };

  return (
    <div className="FirstTab">
      <div className="canvas-container">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
