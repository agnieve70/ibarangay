/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Input from "../UI/input";

let isMobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}

async function login(email, password) {

    const response = await fetch("https://ibarangay-backend.herokuapp.com/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
}

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    async function submitHandler(event) {
        event.preventDefault();

        setIsLoading(true);

        try {
            const result = await login(email, password);
            localStorage.setItem("auth_token", result.token);
            setIsLoading(false);

            if(result.user.role === 'citizen' && isMobile === true){
                localStorage.setItem("role", result.user.role);
                window.location.href = '/citizen-help';
            }else{
                window.location.href = '/dashboard';
            }
            
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }
    
    return (
        <div className="container-fluid">
            <div className="row justify-content-center vh-100">
                <div className="col-md-4 mt-5">
                    <center>
                        <img src="/ibrgy_splash.png" className="img-fluid" width="50%" />
                    </center>
                    <div className="card shadow mt-5">
                        <h4 className="text-center mt-4">
                            Login to Account
                        </h4>
                        <div className="card-body">
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
                            <div className="d-grid gap-2">
                                <button
                                    type="submit"
                                    className="py-2 btn btn-success"
                                >
                                    LOGIN
                                </button>
                                {isMobile ? <p>Not a member? 
                                    <LinkContainer to="/register">
                                    <a>Register</a>
                                    </LinkContainer></p> : null}
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
