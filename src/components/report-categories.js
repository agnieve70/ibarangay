import React, { useState, useEffect } from 'react'
import NavComponents from './nav-components'

const auth_token = localStorage.getItem("auth_token");

async function getHelpCategory() {
  const response = await fetch(`https://ibarangay-backend.herokuapp.com/api/help/category`, {
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

async function addHelpCategory(title, content) {
  const response = await fetch(`https://ibarangay-backend.herokuapp.com/api/help/category/create`, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      content: content
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

async function updateHelpCategory(id, title, content) {
  const response = await fetch(`https://ibarangay-backend.herokuapp.com/api/help/category/update`, {
    method: 'POST',
    body: JSON.stringify({
      id: id,
      title: title,
      content: content
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

function ReportCategories() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getHelpCategory().then((res) => {
      setData(res);
    })
  }, [count]);

  function selectHandler(data) {
    setContent(data.content);
    setTitle(data.title);
    setId(data.id);
  }

  function clearHandler() {
    setContent("");
    setTitle("");
    setId("");
  }
  
  function submitHandler(e){
    e.preventDefault();
    if(id){
      updateHelpCategory(id, title, content).then((res) => {
        console.log("Add triggered: "+res);
        setCount(count + 1);
      });
    }else{
      addHelpCategory(title, content).then((res)=> {
        console.log("Update triggered: "+res);
        setCount(count + 1);
      });
    }
  }
  return (
    <div>
      <h1>Report Categories</h1>
      <NavComponents />
      <div className="mt-3">
        <div className="row">
          <div className="col-md-4">
            <form action="" onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="content">Description</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} className='form-control' name="" id="content" cols="30" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-primary me-2 mt-2">Save Category</button>
              <button type="button" onClick={clearHandler} className="btn btn-secondary mt-2">Clear</button>
            </form>
          </div>
          <div className="col-md-8">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 && data.map(d => <tr key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.content}</td>
                  <td><button onClick={selectHandler.bind(this, d)} className='btn btn-sm btn-warning'>Edit</button></td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportCategories