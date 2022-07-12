/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';

function CitizenNavComponents() {

  function logoutHandler(){
    localStorage.removeItem("auth_token");
    localStorage.removeItem("role");
    window.location.href="/";
  }

  return (
    <div>
        <LinkContainer to='/citizen-help'>
            <a href='' className="btn btn-primary btn-sm me-2 shadow">
              Help
            </a>
          </LinkContainer>
          
          <LinkContainer to='/citizen-document-request'>
            <a href='' className="btn btn-primary me-2 shadow btn-sm">
              Documents
            </a>
          </LinkContainer>

            <button onClick={logoutHandler} className="btn btn-primary me-2 shadow btn-sm">
              Logout
            </button>
         
        </div>
  )
}

export default CitizenNavComponents