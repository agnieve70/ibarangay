import React from 'react'
import { Link } from 'react-router-dom'
import ReportCard from '../UI/report-card'
import NavComponents from './nav-components'

function Reports() {
    return (
        <>
            <h1>Recent Reports</h1>
            <NavComponents />
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <Link to="/all-reports" className='btn btn-secondary'>View All</Link>
        </>
    )
}

export default Reports