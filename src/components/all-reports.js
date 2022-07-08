import React, {useState} from 'react'
import ReportCard from '../UI/report-card'

function AllReports() {
    const [search, setSearch] = useState();

    return (
        <div className="container">
            <div className="card p-5 mt-5">
                <h1>Reports History</h1>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <input placeholder='Search Something ... ' type="text" className='form-control' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button className="btn btn-primary">Search</button>
                    </div>
                    <div className="col-md-8">
                        
                    </div>
                </div>
                <div>
                    <ReportCard />
                    <ReportCard />
                    <ReportCard />
                    <ReportCard />
                    <ReportCard />
                    <ReportCard />

                </div>
            </div>
        </div>
    )
}

export default AllReports