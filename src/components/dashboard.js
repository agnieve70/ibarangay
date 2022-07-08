import React from 'react'
import LineChart from './chart';
import Reports from './reports';

function Dashboard() {
  return (
    <div className="container mt-5">
        <div className="card p-5 shadow">
            <LineChart />
            <Reports />
        </div>
    </div>
  )
}

export default Dashboard