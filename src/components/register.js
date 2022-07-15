import React, { useState, useEffect } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import Input from "../UI/input";

let isMobile = false;

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     isMobile = true;
// } else {
//     window.location.href = "/";
// }

async function addUser(username, firstname, lastname, email, password, password_confirmation, role, purok) {
    let bodyFormData = new FormData();
    bodyFormData.append("firstname", firstname);
    bodyFormData.append("lastname", lastname);
    bodyFormData.append("name", username);
    bodyFormData.append("email", email);
    // bodyFormData.append("profile_picture", profile_picture);
    bodyFormData.append("password", password);
    bodyFormData.append("password_confirmation", password_confirmation);
    bodyFormData.append("role", role);
    bodyFormData.append("purok", purok);

    const res = await fetch('https://ibarangay-backend.herokuapp.com/api/register', {
        method: 'POST',
        body: bodyFormData,
    });

    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || "Something wnt wrong");
    }

    return data;
}

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



function Register() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [profile_picture, setProfilePicture] = useState();
    const [role, setRole] = useState("admin");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [purok, setPurok] = useState([]);
    const [purokInput, setPurokInput] = useState("");

    useEffect(()=> {
        getPurok().then((data)=> {
            setPurok(data);
        });
    },[]);

    async function submitHandler(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            const result1 = await addUser(username, firstname, lastname, email, password, 
                password_confirmation,
                 "citizen", purokInput)
            if (result1) {
                alert("Registered Success");
                window.location.href="/";
                console.log("SUCCESS!!");
            }
            setIsLoading(false);
            // window.location.href = '/';
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }

    return (
        <div className="container-fluid">
            <div
                // style={{
                //     backgroundImage:
                //         'url("https://wallpapercave.com/wp/wp2024254.jpg")',
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "cover",
                // }}
                className="row justify-content-center vh-100"
            >
                <div className="col-md-4">
                    <div className="card p-5 shadow mt-5">
                        <h4 className="text-center mb-4">
                            Create Account
                        </h4>
                        {isLoading ? (
                            <div
                                style={{ margin: "auto" }}
                                className="spinner-border"
                                role="status"
                            >
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        ) : null}

                        {error ? (
                            <div
                                className="alert alert-danger alert-dismissible fade show"
                                role="alert"
                            >
                                {error.message}
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                ></button>
                            </div>
                        ) : null}
                        <form action="" onSubmit={submitHandler}>
                        <Input
                                label_id={"firstname"}
                                label={"Firstname"}
                                type={"text"}
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <Input
                                label_id={"lastname"}
                                label={"Lastname"}
                                type={"text"}
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            <Input
                                label_id={"name"}
                                label={"Username"}
                                type={"text"}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className="form-group mb-3">
                                <label htmlFor="purok">Purok</label>
                                <select value={purokInput} onChange={(e)=> setPurokInput(e.target.value)} className='form-control' name="" id="purok">
                                    <option value="" disabled selected>Select Purok</option>
                                    {
                                        purok.length > 0 && purok.map((item) => 
                                        <option value={item.purok}>{item.purok}</option>)
                                    }
                                </select>
                            </div>
                            {/* <Input
                                label_id={"profile_picture"}
                                label={"Profile Picture"}
                                type={"file"}
                                onChange={(e) => {
                                    setProfilePicture(e.target.files[0])
                                }}
                            /> */}
                            <Input
                                label_id={"email"}
                                label={"Email"}
                                type={"text"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label_id={"password"}
                                label={"Password"}
                                type={"password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Input
                                label_id={"password_confirmation"}
                                label={"Password Confirmation"}
                                type={"password"}
                                value={password_confirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />
                            
                            <div className="d-grid gap-2">
                                <button
                                    type="submit"
                                    className="py-2 btn btn-success"
                                >
                                    REGISTER
                                </button>
                                {isMobile ? <p>Already a member?
                                    <LinkContainer to="/">
                                        <a>Login</a>
                                    </LinkContainer></p> : null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register