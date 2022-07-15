/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MapContent from './map';
import MapDisplay from './map-display';
import NavComponents from './nav-components';

const auth_token = localStorage.getItem("auth_token");

async function getHelp(id) {
    const response = await fetch(`https://ibarangay-backend.herokuapp.com/api/help/${id}`, {
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

async function getHelpCategory() {
    const response = await fetch(`https://ibarangay-backend.herokuapp.com/api/help/category`, {
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

async function saveReport(help_id, representative_id,
    content, category, title) {
    const response = await fetch(`https://ibarangay-backend.herokuapp.com/api/report/create`, {
        method: 'POST',
        body: JSON.stringify({
            help_id: help_id,
            representative_id: representative_id,
            content: content,
            category: category,
            title: title
        }),
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

function ResqueDetail() {
    const [isDone, setIsDone] = useState(false);
    const [data, setData] = useState({});
    const [categories, setCategories] = useState([]);
    const [representative_id, setRepresentativeId] = useState();
    const [content, setContent] = useState();
    const [category, setCategory] = useState();
    const [title, setTitle] = useState("");

    let { id } = useParams();

    useEffect(() => {
        getHelp(id).then((res) => {
            console.log("RES ", res);
            setData(res);
        });

        getHelpCategory().then((res) => {
            setCategories(res);
        })
    }, []);

    function reportHandler() {
        setIsDone(true);
    }

    function hideReportHandler() {
        setIsDone(false);
    }

    function saveHandler(e) {
        e.preventDefault();
        saveReport(id, representative_id,
            content, category, title).then((data) => {
                console.log("SAVED REPORT ", data);
                alert("Saved");
                window.location.href = "/realtime-requests";
            })
    }

    if(!auth_token){
        return(
         <h1>Please login first.</h1>
        )
       }
       
    return (
        <>
            <NavComponents />

            <div className="container mt-5">
                <div className="card p-5 shadow">
                    <div className="container">
                        <h1>Incident Report</h1>

                        <h1 className='mt-2'>{data.name}</h1>
                        {/* <span>Latitude: {data.latitude}</span> <br />
                <span>Longitude: {data.longitude}</span> <br /> */}
                        <span>Help Category: <span className={`badge ${data.status === 'General' ? 'bg-success' : 'bg-danger'}`}>
                            {data.status}
                        </span>
                        </span> <br />
                        {!isDone && <button onClick={reportHandler} className='btn btn-primary mb-2'>Generate Report
                        </button>}
                        {isDone && <form className='mt-3'>
                            <span className='mb-2'>



                            </span>
                            <div className="form-gro">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className='form-control'>
                                    <option disabled selected>Select Category</option>
                                    {categories && categories.map(cat => <option value={cat.id}>{cat.title}</option>)}
                                </select>
                            </div>
                            <div className="form-g">
                                <label htmlFor="representative">Representative</label>
                                <input id="representative" className='form-control' value={representative_id} onChange={(e) => setRepresentativeId(e.target.value)} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="content">Content</label>
                                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className='form-control' rows={5}></textarea>
                            </div>
                            {data.latitude && data.longitude ?
                                <MapContent latitude={data.latitude} longitude={data.longitude} /> : null}
                            {isDone && <div className='mt-3'>
                                <button type="button" onClick={hideReportHandler} className='btn btn-secondary me-1'>Cancel
                                </button>
                                <button disabled={!title || !category || !representative_id || !content ? true: false} type="submit" onClick={saveHandler} className='btn btn-primary'>Save
                                </button>
                            </div>}
                        </form>}
                    </div>

                </div>
            </div>
        </>
    )
}

export default ResqueDetail