import React from 'react';
import logo from '../assets/TP-logo-mbl.png';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbarStyles}>
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" style={{ width: '100px', height: '30px', marginLeft: '30px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyles}>Car Tyres</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyles}>Bike Tyres</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyles}>Tyre Pressure</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyles}>Commercial Tyres</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={linkStyles}>Accessories</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={linkStyles}
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center" style={loginStyles}>
            <i className="ri-user-3-line"></i> Login
          </div>
        </div>
      </nav>
    </>
  );
}

const navbarStyles = {
  background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
  boxShadow: '4px 4px 10px #c8c8c8, -4px -4px 10px #ffffff',
  borderRadius: '12px',
  padding: '10px 0',
};

const linkStyles = {
  fontWeight: 'bold',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  margin: '0 15px',
  transition: 'transform 0.2s',
};

const loginStyles = {
  marginRight: '30px',
  fontWeight: 'bold',
  cursor: 'pointer',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s',
};

export default Navbar;
