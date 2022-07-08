import React from 'react'
import ResqueCard from '../UI/resque-card'

function NeedResque() {
  return (
    <div className="container mt-5">
        <div className="card p-5 shadow">
            <h1>Realtime Citizen Concerns</h1>
            <ResqueCard id={1} type="general" />
            <ResqueCard type="general"/>
            <ResqueCard />
            <ResqueCard />
        </div>
    </div>
  )
}

export default NeedResque