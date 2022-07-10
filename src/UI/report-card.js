import React from 'react';
import { Link } from 'react-router-dom';

function ReportCard(props) {
    return (
        <Link style={{ textDecoration: 'none' }} to={`/report-detail/${props.data.id}`}>
            <div className="card p-3 mb-3">
                <h1 className="text-dark">{props.data.report_title}</h1>
                <span className="text-dark">Date/Time: <b>{props.data.created_at}</b></span>
                <span className="text-dark">Category: <b>{props.data.category}</b></span>
                <span className="text-dark">Status:
                    <span className={`badge bg-${props.data.status === 'done' ? 'success' : 'warning'}`}>
                        {props.data.status}</span>
                </span> <br />
                <p className="text-dark">{props.report_content}</p>
            </div>
        </Link>
    )
}

export default ReportCard