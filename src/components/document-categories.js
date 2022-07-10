import React, { useState, useEffect } from 'react';
import NavComponents from './nav-components';

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

async function saveDocumentCategory(category) {
  const response = await fetch("https://ibarangay-backend.herokuapp.com/api/document/category/create", {
    method: 'POST',
    body: JSON.stringify({
      category: category
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

function DocumentCategories() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getDocumentCategories().then((data) => {
      setCategories(data);
    })
  }, [count]);

  function submitHandler(e) {
    e.preventDefault();
    try{
      saveDocumentCategory(category).then((data) => {
        alert("Saved");
        setCount(count + 1);
      });
    }catch(e){
      console.log(e.message);
    }
  }

  function clearHandler() {
    setCategory("");
  }
  return (
    <div>
      <h1>Document Categories</h1>
      <NavComponents />
      <div className="mt-3">
        <div className="row">
          <div className="col-md-4">
            <form action="" onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" className='form-control' id="category" />
              </div>
              <button type="submit" className="btn btn-primary me-2">Save Category</button>
              <button onClick={clearHandler} type="button" className="btn btn-secondary">Clear</button>
            </form>
          </div>
          <div className="col-md-8">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.length > 0 && categories.map(cat => <tr>
                  <td>{cat.id}</td>
                  <td>{cat.category}</td>
                  <td><button className='btn btn-sm btn-warning'>Edit</button></td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentCategories