import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react';
import CitizenNavComponents from './citizen-nav-components';

const auth_token = localStorage.getItem("auth_token");

async function sendHelp(latitude, longitude, status) {
  const response = await fetch("https://ibarangay-backend.herokuapp.com/api/help/create", {
    method: 'POST',
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude,
      status: status
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

async function getHelpByUser() {
  const response = await fetch("https://ibarangay-backend.herokuapp.com/api/document/categories", {
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

async function getHelpValidate() {
  const response = await fetch("https://ibarangay-backend.herokuapp.com/api/help/validate", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${auth_token}`
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  console.log(data);
  return data.data;
}

let latitude = '';
let longitude = '';

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Cellphone not supported by geolocation");
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log("Latitude: ", latitude);
  console.log("Longitude: ", longitude);
}

getLocation();

function CitizenHelp() {

  const [clicked, setClicked] = useState(false);
  const [hide1, setHide1] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getHelpValidate().then((result) => {
      if(result.length > 0){
        setClicked(false);
        setHide1(true);
      }
    });
  }, [count]);
  
  setTimeout(function () {
    setCount(count + 1);
  }, 1000);

  function sendHelpHandler(status) {
    sendHelp(latitude, longitude, status).then((data) => {
      if (data) {
        alert("Help is Already Sent!");
        setClicked(true);
        setTimeout(function () {
          setHide1(true);
        }, 3000);
      }
    });
  }

  if (!auth_token) {
    return (
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
            <p>Please Select appropriate button to which concern we will give to authorities. This will be detected automatically by the Barangay Authority.</p>
            <div class="d-grid gap-2">
              {
                hide1 === false &&
                <>
                  <button disabled={clicked && true} className="btn btn-success btn-lg mb-3" onClick={sendHelpHandler.bind(this, 'General')}>
                    GENERAL CONCERN
                  </button>
                  <button disabled={clicked && true} className="btn btn-danger btn-lg mb-3" onClick={sendHelpHandler.bind(this, 'Serious')}>
                    SERIOUS CONCERN
                  </button>
                </>
              }
              
            </div>
          </div>
        </div>
        {
                hide1 && <h4 className='text-center mt-5'> Help is on the way.
                </h4>
              }
      </div>
    </>
  )
}

export default CitizenHelp