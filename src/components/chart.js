/* eslint-disable no-unused-vars */
import React from 'react'
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
import { faker } from "@faker-js/faker";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Buy and Sell of Rice 2022',
    },
  },
};

function LineChart(props) {
  console.log("DATA ", props.data);
  const labels = ['January', 'March', 'April', 'May'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Serious Cases',
        data:[40, 10, 30, 20],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'General Cases',
        data:[50, 25, 37, 20],
        borderColor: 'green',
        backgroundColor: 'green',
      },
    ],
  };
  return (
    <div className="row mb-5">
      <div className="col-md-12">
        <h1>Statistical Data</h1>
        <Line options={options} data={data} />
      </div>
    </div>
  )
}

export default LineChart