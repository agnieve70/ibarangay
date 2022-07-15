import React, {useState, useEffect} from 'react'
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

async function getAnnoucements() {

    const response = await fetch("https://ibarangay-backend.herokuapp.com/api/announcements", {
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

async function createAnnoucement(title, content) {

    const response = await fetch("https://ibarangay-backend.herokuapp.com/api/announcement/create", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${auth_token}`
        },
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
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

function AdminAnnouncement() {

    const [title, setTitle]= useState("");
    const [content, setContent] = useState("");
    const [announcements, setAnnouncements] = useState("");
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

    useEffect(()=> {
        getAnnoucements().then((data)=> {
            setAnnouncements(data);
        });
    }, [announcements, count]);

    setTimeout(function () {
        setCount(count + 1);
      }, 5000);

    function submitHandler(e){
        e.preventDefault();
        createAnnoucement(title, content).then((data) => {
            alert("Saved");
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
      <h1>Dashboard</h1>
      <div className="container">
          <form action="" onSubmit={submitHandler} className="mb-2">
              <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" className="form-control" />
              </div>
              <div className="form-group">
                  <label htmlFor="content">Content</label>
                  <textarea value={content} onChange={(e) => setContent(e.target.value)} name="" id="content" cols="30" rows="5" className="form-control"></textarea>
              </div>
              <button type="submit" disabled={!title || !content && true} className="btn btn-success mt-2">Save Announcement</button>
          </form>
          <table className="table table-stripe">
              <thead>
                  <tr>
                      {/* <th>#</th> */}
                      <th>Title</th>
                      <th>Content</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      announcements.length > 0 && announcements.map((item) => <tr>
                          {/* <td>{item.id}</td> */}
                          <td>{item.title}</td>
                          <td>{item.content}</td>
                      </tr>)
                  }
              </tbody>
          </table>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default AdminAnnouncement