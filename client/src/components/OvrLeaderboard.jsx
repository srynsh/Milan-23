import React, { useEffect, useState } from "react";
import axios from "axios";
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
import Loading from "./Loading";

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
      display: false,
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
const colorOptions = ["#700035", "#390035", "#A40035", "#CE0035"];
let lastUsedColorIndex = -1;

const getRandomColor = () => {
  // Choose the next available color
  lastUsedColorIndex = (lastUsedColorIndex + 1) % colorOptions.length;
  return colorOptions[lastUsedColorIndex];
};
export const OverallScores = () => {
  const [scores, setscores] = useState([]);
  const [gameNames, setgameNames] = useState([]);
  const [blockNames, setblockNames] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const fetchScore = async () => {
      setloading(true);
      const { data } = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "leaderboard"
      );
      setscores(data.scores);
      console.log(data.eventNames);
      setgameNames(data.eventNames);
      setblockNames(data.blocks);
      setTimeout(() => {
        setloading(false)

      }, 500);
    };
    fetchScore();
  }, []);
  const labels = blockNames;
  const data = {
    labels,
    datasets: gameNames.map((item, index) => {
      return {
        label: item,
        data: scores[index + 1],
        backgroundColor: getRandomColor(),
        categoryPercentage: 1.1, // notice here
        barPercentage: 0.8,
      };
    }),
  };

  return (
    <div className="home-leaderboard-chart">
      {loading ? <Loading /> : <Bar options={options} data={data} />}
    </div>
  );
};
