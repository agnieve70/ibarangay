import React, { useState, useEffect } from 'react'
import NavComponents from './nav-components'
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

async function getDocuments() {
  const response = await fetch("https://ibarangay-backend.herokuapp.com/api/documents", {
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

async function updateDocument(id) {
  const response = await fetch("https://ibarangay-backend.herokuapp.com/api/document/update", {
    method: 'POST',
    body: JSON.stringify({
      status: "done",
      id: id
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


function DocumentRequests() {
  const [documents, setDocuments] = useState([]);
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
    getDocuments().then((data) => {
      setDocuments(data);
    });
  }, [count]);

  setTimeout(function () {
    setCount(count + 1);
  }, 5000);

  function updateStatusHandler(id){
    updateDocument(id).then((data)=> {
      alert("Updated!");
    });
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
      <h1>Document Requests</h1>
      <div className="mt-3">
        {documents && documents.map(doc =>
          <div key={doc.id} className="card p-3 mb-3">
            <h1>{doc.title}</h1>
            <h2 className='text-muted'>{doc.name}</h2>
            <span>Email {doc.email}</span>
            <span>Status: <span className={`badge 
            bg-${doc.status === 'on process'
                ? 'warning' : 'success'}`}>
              {doc.status === 'on process' ?
                'On Proccess' : 'Done'}</span>
            </span>
            <span></span> <br />
            <hr />
            <div>
            {doc.status === 'on process' && <><button onClick={updateStatusHandler.bind(this, doc.id)} className="btn btn-success me-2">Document is Ready</button>
            <span className='text-muted'>Click the Button if you already printed the document.</span></>}
            </div>
            
          </div>)}
      </div>
    </div>
    </div>
    </>
  )
}

export default DocumentRequests