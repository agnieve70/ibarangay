import React from 'react'
import { useParams } from 'react-router-dom';
function ReportDetail() {

    let { postId } = useParams();

    return (
        <div className="container mt-5">
            <div className="card shadow p-5">
                <h1 className="secondary">Report Title</h1>
                <span>Digos City, Davao del Sur</span>
                <span >05/13/2022 12:24:23</span>
                <span className="mb-5"><button className='btn btn-primary btn-sm'>Donwload PDF</button></span>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur ab laborum nesciunt dolores voluptates facere ratione quam doloremque similique asperiores fuga, atque molestiae dignissimos aspernatur! Ut quasi ab impedit accusamus?</p>
            </div>
        </div>
    )
}

export default ReportDetail