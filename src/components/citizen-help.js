import React from 'react';
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

let latitude ='';
let longitude ='';

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

  function sendHelpHandler(status){
    sendHelp(latitude, longitude, status).then((data) => {
      if(data){
        alert("Help is Already Sent!");
      }
    });
  }

  return (
    <div className="container mt-5">
      <div className="card p-5 shadow">
        <h1>Request Help</h1>
        <CitizenNavComponents />
        <div className="mt-3">
            <p>Please Select appropriate button to which concern we will give to authorities. This will be detected automatically by the Barangay Authority.</p>
        <div class="d-grid gap-2">
            <button className="btn btn-success btn-lg mb-3" onClick={sendHelpHandler.bind(this, 'General')}>
                GENERAL CONCERN
            </button>
            <button className="btn btn-danger btn-lg" onClick={sendHelpHandler.bind(this, 'Serious')}>
                SERIOUS CONCERN
            </button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default CitizenHelp