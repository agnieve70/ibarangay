/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';

function NavComponents() {

  function logoutHandler(){
    localStorage.removeItem("auth_token");
    localStorage.removeItem("role");
    window.location.href="/";
  }

  return (
    <div>
        <LinkContainer to='/dashboard'>
            <a href='' className="btn btn-primary me-2 shadow mb-2">
              Dashboard
            </a>
          </LinkContainer>
          <LinkContainer to='/realtime-requests'>
            <a href='' className="btn btn-primary me-2 shadow mb-2">
              Realtime Requests
            </a>
          </LinkContainer>
          <LinkContainer to='/document-categories'>
          <a href='' className="btn btn-primary me-2 shadow mb-2">
            Document Categories
          </a>
          </LinkContainer>
          <LinkContainer to='/document-requests'>
          <a href='' className="btn btn-primary me-2 shadow mb-2">
            Document Requests
          </a>
          </LinkContainer>
          <LinkContainer to='/report-categories'>
          <a href='' className="btn btn-primary me-2 shadow mb-2">
            Reports Categories
          </a>
          </LinkContainer>
          <LinkContainer to='/all-reports'>
          <a href='' className="btn btn-primary me-2 shadow mb-2">
            Reports
          </a>
          </LinkContainer> <br />
          <button onClick={logoutHandler} className="btn btn-primary me-2 shadow">
              Logout
            </button>
        </div>
  )
}

export default NavComponents