/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
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

const auth_token = localStorage.getItem("auth_token");

async function getReports() {
  const response = await fetch("https://ibarangay-backend.herokuapp.com/api/reports", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${auth_token}`
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data.data;
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Reports Graph of Barangay Aplaya',
    },
  },
};

function LineChart(props) {
  console.log("DATA ", props.data);
  const labels = ['January', 'March', 'April', 'May'];

  const [graphs, setGraphs] = useState([]);
  
  useEffect(()=> {
    getReports().then((data)=> {
      setGraphs(data);
    });
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Serious Cases',
        data:graphs.map((data, index) => index + 1),
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