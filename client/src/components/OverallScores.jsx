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
        color: "#390035",
        font: {
          family: "Sans-serif",
          weight: "bold",
          size: "12",
          position: "bottom",
        },
      },
    },

    title: {
      display: true,
      text: "Overall Leading Board",
      color: "#390035",
      font: {
        family: "Sans-serif",
        weight: "bold",
        size: "18",
        position: "bottom", 
      },
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  indexAxis: "y",
  scales: {
    xAxes: {
      stacked: true,
      ticks: {
        color: "#390035",
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
        color: "#390035",
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
        borderColor: "#390035",
      },
    },
  },
};

export const OverallScores = () => {
  const [scores, setscores] = useState({'1': [
    144.7811448	,114.2376142,	82.61183261,	158.3694084,	263.7842126	,88.45696152,	60.6902023,	121.7770726,	119.3970647,	160.0555335,	133.0821103	,52.75684252
 ],
 '2': [
  90.35565524	,76.89842999	,63.76161487	,162.1275232,	94.84139699	,104.1332906,	38.76962512,	25.95322012,	49.02274912	,78.82089074,	160.2050625	,55.11054149
 ],
 '3': [

  10.69137562,	23.52102637,	15.68068425,	74.12687099,	151.1047755	,46.32929437,	181.0406272,	61.29722024	,148.9665004,	95.50962224	,175.3385602	,16.39344262

 ]});
 
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
        label: "Sports",
        data: scores[1],
        backgroundColor: "#e5672c",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Culti",
        data: scores[2],
        backgroundColor: "#ce0035",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
      {
        label: "Techy",
        data: scores[3],
        backgroundColor: "#700035",
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      },
    ],
  };

  return (
    <div className="OverallScoresContainer bg-[#fdd1aa] text-[#390035] rounded-3xl w-4/5 sm:w-3/5 m-auto text-center">
      <div className="canvas-container">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
