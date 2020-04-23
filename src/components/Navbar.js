import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <i className="fas fa-crown"></i>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink
                className="nav-item"
                exact
                activeClassName="active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item"
                exact
                activeClassName="active"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-item"
                exact
                activeClassName="active"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className=" my-2 my-lg-0">
            <NavLink
              className="nav-item"
              exact
              activeClassName="active"
              to="/signinsignup"
            >
              Sign In
            </NavLink>
            <NavLink exact activeClassName="active" to="/myCart">
              <i className="fas fa-shopping-cart"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
