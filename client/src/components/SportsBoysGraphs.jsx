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

export const SportsBoysGraphs = () => {
  const [scores, setscores] = useState({'1': [
    100, 40, 10, 10,
     20, 10, 70, 10
  ],
  '2': [
    70, 100, 10, 20,
    10,  10, 40, 10
  ],
  '3': [
    70, 40, 10, 100,
    20, 10, 10,   0
  ],
  '4': [
    100, 20, 10, 10,
     40, 70, 10, 10
  ],
  '5': [
    100, 10, 10, 20,
     70, 10, 40, 10
  ],
  '6': [
    100, 20, 10, 40,
     10, 70, 10, 10
  ],
  '7': [
    10, 10, 70,  40,
    10, 10, 20, 100
  ],
  '8': [
    10,  40, 20, 10,
    10, 100, 70, 10
  ],
  '9': [
     10, 10, 20, 70,
    100, 10, 40, 10
  ],
  '10': [
    100, 70, 20, 10,
     10, 10, 40, 10
  ],
  '11': [
    50,  5,  5, 20,
     5, 35, 10,  5
  ],
  '12': [
    20, 10,  40, 10,
    70, 10, 100, 10
  ],
  '13': [
    80,  20, 20, 140,
    20, 200, 40,  20
  ],
  '14': [
    210, 21, 21, 84,
    147, 42, 21, 21
  ],
  '15': [
    300,  30,  30, 30,
     60, 210, 150, 30
  ]});
 
  const labels = [
    "CHARAKA",
    "SUSRUTA",
    "KAUTILYA",
    "VYASA",
    "BRAHMAGUPTA",
    "VARAHAMIHIRA",
    "RAMANUJA",
    "KAPILA",
  ];
  const data = {
    labels,

    datasets: [
      {
        label: "Cricket",
        data: scores[1],
        backgroundColor: "#DC143C",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Football",
        data: scores[2],
        backgroundColor: "#FF7F50",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Hockey",
        data: scores[3],
        backgroundColor: "#FA8072",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "VolleyBall",
        data: scores[4],
        backgroundColor: "#FF8C00",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Basketball",
        data: scores[5],
        backgroundColor: "	#FFD700",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Badminton",
        data: scores[6],
        backgroundColor: "#EEE8AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Tennis",
        data: scores[7],
        backgroundColor: "#9ACD32",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Table Tennis",
        data: scores[8],
        backgroundColor: "#6B8E23",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Carrom",
        data: scores[9],
        backgroundColor: "	#20B2AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Chess",
        data: scores[10],
        backgroundColor: "	#40E0D0	",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Squash",
        data: scores[11],
        backgroundColor: "#6495ED",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Weightlifting",
        data: scores[12],
        backgroundColor: "	#000080",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Esports",
        data: scores[13],
        backgroundColor: "	#8A2BE2",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Aquatics",
        data: scores[14],
        backgroundColor: "	#8B008B",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Athletics",
        data: scores[15],
        backgroundColor: "#C71585",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
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

