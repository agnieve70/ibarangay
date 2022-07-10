import React, { useState } from 'react'
import ReportCard from '../UI/report-card'
import NavComponents from './nav-components';

function AllReports() {
    const [search, setSearch] = useState();

    return (
        <div>
            <h1>Dashboard</h1>
            <NavComponents />

            <div className="mt-3">
                <ReportCard />
                <ReportCard />
                <ReportCard />
                <ReportCard />
            </div>
        </div>
    )
}

export default AllReports