/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import LineChart from './chart';
import NavComponents from './nav-components';
import Reports from './reports';

function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <NavComponents />
        <LineChart />
            <Reports />
      </div>
  )
}

export default Dashboard