import React from 'react'
import { Link } from 'react-router-dom'
import CitizenNavComponents from './citizen-nav-components'

function Announcement() {
    return (
        <div className="container mt-5">
            <div className="card p-3 shadow">
                <h1>Request Help</h1>
                <CitizenNavComponents />
                <div className="mt-3">
                    <p>All Latest Announcement Will be posted here.</p>
                    <Link style={{ textDecoration: 'none' }} to={`/announcement-detail/1`}>
                        <div className="card p-3 mb-3">
                            <h4 className="text-dark">Curfew is lift up</h4>
                            <span className="text-dark">Date/Time: 07/14/2022 13:25:23</span>
                            <hr />
                            <p className="text-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia animi ipsa odit dolore adipisci libero, quasi nostrum. Voluptate quisquam ipsum perspiciatis repellat iusto veniam voluptatem praesentium quam ratione cupiditate!</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={`/announcement-detail/1`}>
                        <div className="card p-3 mb-3">
                            <h4 className="text-dark">Drugwar Seminar</h4>
                            <span className="text-dark">Date/Time: 07/05/2022 16:25:23</span>
                            <hr />
                            <p className="text-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia animi ipsa odit dolore adipisci libero, quasi nostrum. Voluptate quisquam ipsum perspiciatis repellat iusto veniam voluptatem praesentium quam ratione cupiditate!</p>
                        </div>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to={`/announcement-detail/1`}>
                        <div className="card p-3 mb-3">
                            <h4 className="text-dark">Araw ng Aplaya is approaching</h4>
                            <span className="text-dark">Date/Time: 07/03/2022 22:25:23</span>
                            <hr />
                            <p className="text-dark">Elit Aspernatur officia animi ipsa odit dolore adipisci libero, quasi nostrum. Voluptate quisquam ipsum perspiciatis repellat iusto veniam voluptatem praesentium quam ratione cupiditate!</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Announcement