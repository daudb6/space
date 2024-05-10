import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <img src="space-logo.png" alt="logo"></img>
        <h1>Space Travelers Hub</h1>
      </div>
      <nav>
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/Mission">Mission </NavLink>
        <span> |</span>
        <NavLink to="/profile">My Profile</NavLink>
      </nav>
    </div>
  );
};
