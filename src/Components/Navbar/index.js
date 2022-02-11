import React from 'react';
import { NavLink} from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid ms-5 me-5 TheLastTask">
  <NavLink to="/" className="NavLink me-5 fw-bold fs-5">THELASTTASK</NavLink>

    

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 ps-5 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/Home" className="NavLink">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/About" className="NavLink">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Services" className="NavLink">Services</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/" className="NavLink">Work</NavLink>
        </li>
      </ul>
     
      <div className='d-flex me-5'>
      <NavLink to="/SignUp" className="NavLink me-2 pe-4">Sign Up</NavLink>
      <NavLink to="/LogIn" className="NavLink">Log In</NavLink>

      </div>
    </div>
  </div>
</nav>
  )
};

export default Navbar;
