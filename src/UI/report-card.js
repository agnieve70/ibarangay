import React from 'react';
import { Link } from 'react-router-dom';

function ReportCard() {
    return (
        <Link style={{textDecoration: 'none'}} to={`/report-detail/${1}`}>
            <div className="card p-3 mb-3">
                <h1 className="text-dark">Report Title</h1>
                <span className="text-dark">05/07/2022 12:24:2</span>
                <span className="text-dark">Digos City, Davao del Sur Philippines</span> <br />
                <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, totam dolorum? Debitis minus, dolores dolore voluptatibus tempore, corporis natus reiciendis nam suscipit, placeat distinctio voluptatem! Ipsam qui error vero debitis?</p>
            </div>
        </Link>
    )
}

export default ReportCard