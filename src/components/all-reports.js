import React, { useState, useEffect } from 'react'
import ReportCard from '../UI/report-card'
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

async function getReports() {
    const response = await fetch("https://ibarangay-backend.herokuapp.com/api/reports", {
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

function AllReports() {
    const [search, setSearch] = useState();
    const [reports, setReports] = useState([]);
    const [count, setCount] = useState(0);

    const [dataLength, setDataLength] = useState(0);
  
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

    useEffect(() => {
        getReports().then((res)=> {
            setReports(res);
        })
    }, [count]);

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
            <h1>Reports</h1>
            {reports.length > 0 && reports.map(rep => 
                <div className="mt-3">
                <ReportCard data ={rep} />
            </div>)}
            
        </div>
        </div>
      </>
    )
}

export default AllReports