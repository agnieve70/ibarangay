/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import CitizenNavComponents from './citizen-nav-components'

const auth_token = localStorage.getItem("auth_token");

async function getDocumentCategories() {
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

  async function getDocumentsByUser() {
    const response = await fetch("https://ibarangay-backend.herokuapp.com/api/document/by-user", {
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

async function sendDocumentRequest(title, category) {
    const response = await fetch(`https://ibarangay-backend.herokuapp.com/api/document/create`, {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        category_id: category,
        status: 'on process'
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

function CitizenDocumentRequest() {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState();
    const [title, setTitle] = useState();
    const [count, setCount] = useState(0);
    const [documents, setDocuments] = useState([]);

    useEffect(()=> {
        getDocumentCategories().then((data) => {
            setCategories(data);
        });

        getDocumentsByUser().then((data) => {
            setDocuments(data);
        });
    }, [count]);

    setTimeout(function () {
        setCount(count + 1);
      }, 5000);

    function submitHandler(e){
        e.preventDefault();
        
            sendDocumentRequest(title, category).then((data) => {
                if(data){
                    alert("Request Sent!");
                }
            }).catch((e) => {
                alert("Document Request can only be sent onced");
            })
       
    }

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
        <h1>Document Requests</h1>
        <div className="mt-3">
            <form action="" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title Description</label>
                    <input type="text" name="" value={title} onChange={(e)=> setTitle(e.target.value)} id="title" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control">
                        <option value="" className="selected disabled">Select Category</option>
                        {categories.length > 0 && categories.map((cat) => <option value={cat.id}>{cat.category}</option>)}
                    </select>
                </div>
                <button disabled={!title || !category ? true : false} type='submit' className="btn btn-primary mt-2">
                    Save
                </button>
            </form>
            <h1 className='text-muted'>Archived Requests</h1>
            {documents.length > 0 && documents.map(document => <div className="card p-3 mb-2">
                <h4>{document.title}</h4>
                <span>Category: <b>{document.category}</b></span>
                <span>Status: <span className={`badge bg-${document.status ==='on process' ? 'warning' : 'success'}`}>{document.status}</span></span>
                <span>Date: {document.created_at}</span>
            </div>)}
           
        </div>
    </div>
    </div>
    </>
  )
}

export default CitizenDocumentRequest