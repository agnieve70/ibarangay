/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import LineChart from './chart';
import NavComponents from './nav-components';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const Toast = MySwal.mixin({
  toast: true,
  showConfirmButton: false,
  timer: 10000,
  timerProgressBar: true,
  position: 'bottom-right'
});


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

function Dashboard() {
  const [count, setCount] = useState(0);
  const [dataLength, setDataLength] = useState(0);

  function validate(){
    if(!auth_token){
      window.location.href='/';
    }
  }
  validate();

  useEffect(() => {

    getHelps().then((result) => {
      console.log("HELP: ", result.length);
      console.log("Data Length: ", dataLength);
      if(result.length > dataLength)
      {
        // setDataLength(result.length);
        
        Toast.fire({
          icon: 'warning',
          title: 'Emergency!',
          confirmButtonText:
          'Click to Go to Realtime Requests <i class="fa fa-arrow-right"></i>',
        inputValidator: (result) => {
          window.location.href='/realtime-requests'
        }
        }).then(
          setDataLength(dataLength + 1)
        )
      }
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
        <h1>Dashboard</h1>
        <LineChart />
      </div>
      </div>
      </>
      
  )
}

export default Dashboard