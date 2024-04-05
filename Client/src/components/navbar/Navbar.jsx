import React from 'react'; // eslint-disable-line no-unused-vars
import '../navbar/Navbar.css';
import logo1 from '../images/FoodBridge.png'

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
              <a className="navbar-brand" href="#">
                  <img className='navLogo mx-2' src={logo1}/>
                  <p>FoodBridge </p>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav  ms-auto order-5 mx-5 nav-underline">
                      <li className="nav-item mx-3">
                      <a className="nav-link" aria-current="page" href="#">How To Help</a>
                      </li>
                      <li className="nav-item mx-3">
                      <a className="nav-link" href="#">What we do?</a>
                      </li>
                      <li className="nav-item mx-3">
                      <a className="nav-link" href="#">Contact Us</a>
                      </li>
                      <li className="nav-item mx-3">
                      <a className="nav-link" href="#">Admin Login</a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
