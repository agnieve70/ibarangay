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

async function getPurok() {

    const response = await fetch("https://ibarangay-backend.herokuapp.com/api/puroks", {
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }
    console.log(data);

    return data.data;
}

async function createPurok(purok) {

    const response = await fetch("https://ibarangay-backend.herokuapp.com/api/purok/create", {
        method: "POST",
        body: JSON.stringify({ purok }),
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

function Purok() {
    const [purok, setPurok] = useState([]);
    const [purokInput, setPurokInput] = useState("");
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
        getPurok().then((data)=> {
            setPurok(data);
        });

    }, [purok,count]);

    function submitHandler(e){
        e.preventDefault();
        createPurok(purokInput).then((res)=> {
            if(res){
                setCount(count + 1);
                alert("Saved");
            }
        })
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
        <h1>Purok List</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form action="" onSubmit={submitHandler}>
                        <div className="form-group mb-2">
                            <label htmlFor="purok">Purok Name</label>
                            <input value={purokInput} onChange={(e)=> setPurokInput(e.target.value)} type="text" name="" id="purok" className="form-control" />
                        </div>
                        <button disabled={!purokInput? true : false} type={"submit"} className="btn btn-primary">Save</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <table className="table table-stripe">
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>Purok</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purok.length > 0 && purok.map(item => <tr>
                                {/* <td>{item.id}</td> */}
                                <td>{item.purok}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Purok