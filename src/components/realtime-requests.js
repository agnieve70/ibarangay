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
  const [count, setCount] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    getHelps().then((result) => {
      setData(result);
    });


    setTimeout(function () {
      setCount(count + 1);
    }, 5000);
  }, [count]);

  return (
    <div>
      <h1>Realtime Requests</h1>
      <NavComponents />
      <div className="mt-3">
        {
          data.length > 0 && data.map(d =>
            <LinkContainer key={data.id} style={{ textDecoration: 'none' }} to={`/resque-detail/${d.id}`}>
              <a style={{ textDecoration: 'none' }} href="">
                <div key={d.id} className={`card p-3 ${d.status === 'General' ? 'bg-success' : 'bg-danger'}`}>
                  <h1 className='text-white'>{d.name}</h1>
                  <span className='text-white'>{d.email}</span>
                  <span className='text-white'>{d.latitude} - {d.longitude}</span>
                </div>
              </a>
            </LinkContainer>)

        }
      </div>
    </div>
  )
}

export default RealtimeRequests