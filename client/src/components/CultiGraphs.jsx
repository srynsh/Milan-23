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

export const CultiGraphs = () => {
  const [scores, setscores] = useState({
    '1': [
      3, 9, 30, 21, 9,
      3, 3,  3,  3, 3,
      3, 3
    ],
    '2': [
       4, 4, 28, 48, 4,
       4, 4,  0,  4, 4,
      16, 0
    ],
    '3': [
      5, 35, 5, 40, 10,
      5,  5, 5,  5, 20,
      5,  0
    ],
    '4': [
       10, 10, 10, 20, 10,
       70, 10, 10, 10, 40,
      100, 10
    ],
    '5': [
        0, 70, 10, 40, 10,
       10, 20,  0, 10, 10,
      100,  0
    ],
    '6': [
       0, 10, 20, 40, 100,
      10,  0,  0,  0,  10,
      10, 70
    ],
    '7': [
      20, 0, 0,  5, 0,
      50, 5, 0, 10, 5,
      35, 5
    ],
    '8': [
       5,  0, 5, 35, 10,
      20,  5, 5,  5,  5,
       5, 50
    ],
    '9': [
       4, 4, 4,  4, 4,
      40, 4, 8, 28, 4,
      16, 4
    ],
    '10': [
      2, 2, 14, 8,  2,
      2, 2,  2, 2, 20,
      2, 4
    ],
    '11': [
       6,  6, 0, 6,  6,
       0, 24, 6, 6, 60,
      42,  6
    ],
    '12': [
       3, 15, 3, 3, 3,
       3, 21, 3, 3, 3,
      39,  3
    ],
    '13': [
       2, 2, 4, 8, 20,
       2, 0, 2, 2,  4,
      14, 2
    ],
    '14': [
      100, 0, 10, 20, 70,
       10, 0, 10, 10,  0,
       40, 0
    ],
    '15': [
       5, 50, 5, 5,  5,
      10,  5, 5, 5, 35,
      20,  5
    ],
    '16': [
      3, 3, 21,  3, 3,
      6, 3, 12, 30, 3,
      3, 0
    ],
    '17': [
      70, 10, 10, 100, 20,
      10, 10, 10,  10, 10,
      40, 10
    ],
    '18': [
      40, 10, 20, 100, 10,
      70,  0,  0,  10, 10,
      10,  0
    ]
  });

  const labels = [
    "ARYABHATTA",
    "BHASKARA",
    "MAITREYI",
    "GARGI",
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
        label: "Solo Dance",
        data: scores[1],
        backgroundColor: "#C71585",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Duo-Trio Dance",
        data: scores[2],
        backgroundColor: "#eb1532",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Group Dance",
        data: scores[3],
        backgroundColor: "#8A2BE2",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Drama",
        data: scores[4],
        backgroundColor: "#000080",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Photography",
        data: scores[5],
        backgroundColor: "#6495ED",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Low effort Comp",
        data: scores[6],
        backgroundColor: "#4b10eb",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "BMC Codenames",
        data: scores[7],
        backgroundColor: "#20B2AA",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Dumb Charades",
        data: scores[8],
        backgroundColor: "#10e3eb",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "General Quiz",
        data: scores[9],
        backgroundColor: "#9ACD32",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Not so sorry",
        data: scores[10],
        backgroundColor: "#1026eb",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Bands",
        data: scores[11],
        backgroundColor: "#eb3c10",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Solo Sing",
        data: scores[12],
        backgroundColor: "#6B8E23",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },

      {
        label: "Poetry",
        data: scores[13],
        backgroundColor: "#6495ED",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Junk Art",
        data: scores[14],
        backgroundColor: "#000080",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Navarasa",
        data: scores[15],
        backgroundColor: "#8A2BE2",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Rap",
        data: scores[16],
        backgroundColor: "#8B008B",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Treasure Hunt",
        data: scores[17],
        backgroundColor: "#dfed18",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Fashion show",
        data: scores[18],
        backgroundColor: "#FFC0CB",
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
