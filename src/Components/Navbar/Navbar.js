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
      {/* As anchor tag refreshes whole page from server so don't use anchor tag
      in react instead we use Navlink or Link */}
      <nav>
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="Mission">Mission </NavLink>
        <span> |</span>
        <NavLink to="profile">My Profile</NavLink>
      </nav>
    </div>
  );
};
