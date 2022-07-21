import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
  <div className="nabvar">
    <div className="navContainer">
        <span className="logo">Booking Bazar</span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
    </div>
  </div>
  );
};

export default Navbar;
