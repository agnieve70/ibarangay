import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import MapContent from './map';
import MapDisplay from './map-display';

function ResqueDetail() {
    const [isDone, setIsDone] = useState(false);

    let { id } = useParams();

    function reportHandler(){
        setIsDone(true);
    }

    function hideReportHandler(){
        setIsDone(false);
    }

    function saveHandler(){
        alert("Saved");
    }

    return (
        <div className="container mt-5">
            <div className="card p-3 shadow">
                <h1>AG Nieve</h1>
                <span>Digos City, Davao del Sur</span>
                <span>12:34:27</span>
                <span className='mb-2'>
                    {!isDone && <button onClick={reportHandler} className='btn btn-primary'>Make Report
                    </button>}

                    {isDone && <>
                        <button onClick={hideReportHandler} className='btn btn-secondary me-1'>Cancel
                    </button>
                    <button onClick={saveHandler} className='btn btn-primary'>Save
                    </button>
                    </>}
                </span>
                {isDone && <form>
                    <textarea className='form-control' rows={5}></textarea>
                    </form>}
            </div>
            {!isDone && <MapContent />}

        </div>
    )
}

export default ResqueDetail