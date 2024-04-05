import React from 'react'; // eslint-disable-line no-unused-vars
import '../navbar/Navbar.css';
import logo1 from '../images/FoodBridge.png'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">
                  <img className='navLogo mx-2' src={logo1}/>
                  <NavLink to="/Home" style={{ textDecoration: 'none' }}>
                  <p>FoodBridge </p>
                  </NavLink>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav  ms-auto order-5 mx-5 nav-underline">
                  <NavLink to="/Home" style={{ textDecoration: 'none' }}>
                      <li className="nav-item mx-3">
                      <a className="nav-link" aria-current="page" href="#">Home</a>
                      </li>
                      </NavLink>
                      <NavLink to="/AdminDashboard">
                      <li className="nav-item mx-3">
                      <a className="nav-link" href="#">Admin Dashboard</a>
                      </li>
                      </NavLink>
                      <NavLink to="/ContactUs" style={{ textDecoration: 'none' }}>
                      <li className="nav-item mx-3">
                      <a className="nav-link" href="#">Contact Us</a>
                      </li>
                      </NavLink>
                      <NavLink to="/loginDB" style={{ textDecoration: 'none' }}>
                          <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Delivery Boy Login</a>
                          </li>
                        </NavLink>

                  </ul>
              </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
