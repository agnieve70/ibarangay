import React, { useState, useEffect } from 'react'
import ReportCard from '../UI/report-card'
import NavComponents from './nav-components';

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

function AllReports() {
    const [search, setSearch] = useState();
    const [reports, setReports] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        getReports().then((res)=> {
            setReports(res);
        })
    }, [count]);

    return (    
      <div className="container mt-5">
      <div className="card p-5 shadow">
            <h1>Dashboard</h1>
            <NavComponents />
            {reports.length > 0 && reports.map(rep => 
                <div className="mt-3">
                <ReportCard data ={rep} />
            </div>)}
            
        </div>
        </div>
    )
}

export default AllReports