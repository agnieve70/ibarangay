import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CitizenNavComponents from './citizen-nav-components'

const auth_token = localStorage.getItem("auth_token");

async function getAnnoucements() {

    const response = await fetch("https://ibarangay-backend.herokuapp.com/api/announcements", {
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

function Announcement() {
    const [count, setCount] = useState();
    const [data, setData] = useState([]);

    useEffect(()=> {
        getAnnoucements().then((result)=> {
            setData(result);
        });
    }, [count]);

    setTimeout(function () {
        setCount(count + 1);
      }, 5000);

      if(!auth_token){
        return(
         <h1>Please login first.</h1>
        )
       }
       
    return (
        <>
                <CitizenNavComponents />
        <div className="container mt-5">
            <div className="card p-3 shadow">
                <h1>Request Help</h1>
                <div className="mt-3">
                    <p>All Latest Announcement Will be posted here.</p>
                    
                    {data.length > 0 && data.map((item) =>  
                    <Link style={{ textDecoration: 'none' }} to={`/announcement-detail/1`}>
                        <div className="card p-3 mb-3">
                            <h4 className="text-dark">{item.title}</h4>
                            <span className="text-dark">Date/Time: {item.created_at}</span>
                            <hr />
                            <p className="text-dark">{item.content}</p>
                        </div>
                    </Link>)}
                    
                </div>
            </div>
        </div>
        </>

    )
}

export default Announcement