import React from 'react';
import { Link } from 'react-router-dom';

function ResqueCard(props) {
  return (
    <div className={`card p-3 ${props.type === 'general' ? 'bg-success' : 'bg-danger'} mb-3`}>
        <Link style={{textDecoration:"none"}} to={`/resque-detail/${props.id}`}>
        <h1 className='text-white'>AG Nieve</h1>
        <span className='text-white'>Digos City, Davao del Sur</span> <br />
        <span className='text-white'>Type: <b>General Concern</b></span> <br />
        </Link>
    </div>
  )
}

export default ResqueCard;