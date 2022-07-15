/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import NavComponents from './nav-components'

const auth_token = localStorage.getItem("auth_token");

async function getHelps() {
  const response = await fetch("https://ibarangay-backend.herokuapp.com/api/help", {
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

function RealtimeRequests() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    getHelps().then((result) => {
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
    <NavComponents />
    <div className="container mt-5">
    <div className="card p-5 shadow">
      <h1>Realtime Requests</h1>
      <div className="mt-3">
        {
          data.length > 0 && data.map(d =>
            <div className='mb-3'>
              <LinkContainer className='mb-3' key={data.id} style={{ textDecoration: 'none', marginBottom: 10}} to={`/resque-detail/${d.id}`}>
              <a className='mb-3' style={{ textDecoration: 'none', marginBottom: 10}} href="">
                <div key={d.id} className={`card p-3 ${d.status === 'General' ? 'bg-success' : 'bg-danger'}`}>
                  <h1 className='text-white'>{d.firstname} {d.lastname}</h1>
                  <h1 className='text-white'>{d.name}</h1>
                  <span className='text-white'>{d.email}</span>
                </div>
              </a>
            </LinkContainer>
              </div>)

        }
      </div>
    </div>
    </div>
    </>
  )
}

export default RealtimeRequests