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
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container-fluid">
        <div className="nav-brand me-4">
          <img src='/ibrgy_logo.png' height={40} />
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul style={{fontSize: 14}} class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/citizen-announcement">Announcement</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/citizen-help">Help</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/citizen-document-request">Documents</a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li style={{fontSize: 14}} class="nav-item">
              <a  onClick={logoutHandler} class="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default CitizenNavComponents