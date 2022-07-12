import React, {useEffect, useState} from 'react'
import MapContent from './map';
import { useParams } from 'react-router-dom';
import NavComponents from './nav-components';
import Pdf from "react-to-pdf";

const auth_token = localStorage.getItem("auth_token");

async function getReport(id) {
    const response = await fetch(`https://ibarangay-backend.herokuapp.com/api/report/${id}`, {
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

const ref = React.createRef();

function ReportDetail(props) {
    const [data, setData] = useState({});
    let { postId } = useParams();
    
    useEffect(()=> {
        getReport(postId).then((res)=> {
            console.log(res);
            setData(res);
        });
    },[postId]);
    
    return (
        <div className="container mt-5">
      <div className="card p-5 shadow">
        <div className="container mt-5">
            <h1>Realtime Requests</h1>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf} className='btn btn-secondary btn-sm mb-3'>Donwload PDF <i className="fa fa-pdf"></i></button>}
      </Pdf>
            
            <NavComponents />
            <div className="card shadow p-5 mt-3" ref={ref}>
                <h1 className="secondary">{data.report_title}</h1>
                <h2 className="text-muted">{data.helped_user}</h2>
                <span>Representative: <b>{data.representative_id}</b></span>
                <span>Status: <b>{data.status}</b></span>
                <span>Category: <b>{data.category}</b></span>
                <p>{data.report_content}</p>
                {data.latitude && data.longitude ? <MapContent latitude={data.latitude} longitude={data.longitude} /> : null}
            </div>

        </div>
        </div>
        </div>
    )
}

export default ReportDetail