/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';

function NavComponents() {

  function logoutHandler() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("role");
    window.location.href = "/";
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
              <a class="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/realtime-requests">Realtime Requests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/document-requests">Document Requests</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Admin Settings
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="/announcement">Announcements</a></li>
                <li><a class="dropdown-item" href="/document-categories">Document Category</a></li>
                <li><a class="dropdown-item" href="/report-categories">Reports Category</a></li>
                <li><a class="dropdown-item" href="/all-reports">Reports</a></li>
                <li><a class="dropdown-item" href="/purok">Purok</a></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <a  onClick={logoutHandler} class="nav-link" href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavComponents