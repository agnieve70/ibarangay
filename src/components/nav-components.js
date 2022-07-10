/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';

function NavComponents() {
  return (
    <div>
        <LinkContainer to='/dashboard'>
            <a href='' className="btn btn-primary me-2 shadow">
              Dashboard
            </a>
          </LinkContainer>
          <LinkContainer to='/realtime-requests'>
            <a href='' className="btn btn-primary me-2 shadow">
              Realtime Requests
            </a>
          </LinkContainer>
          <LinkContainer to='/document-categories'>
          <a href='' className="btn btn-primary me-2 shadow">
            Document Categories
          </a>
          </LinkContainer>
          <LinkContainer to='/document-requests'>
          <a href='' className="btn btn-primary me-2 shadow">
            Document Requests
          </a>
          </LinkContainer>
          <LinkContainer to='/report-categories'>
          <a href='' className="btn btn-primary me-2 shadow">
            Reports Categories
          </a>
          </LinkContainer>
          <LinkContainer to='/all-reports'>
          <a href='' className="btn btn-primary me-2 shadow">
            Reports
          </a>
          </LinkContainer>
        </div>
  )
}

export default NavComponents