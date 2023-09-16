import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark   position-sticky sticky-top py-4 fw-bolder">
        <div className="container">
          <Link className="navbar-brand fs-2 "  to="home">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0 fw-bolder ">
              <li className="nav-item ">
                <Link className='nav-link text-white mx-3 ' to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-white mx-3' to="portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link text-white mx-3' to="contact">Contact</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}
