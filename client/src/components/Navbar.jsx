import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'


import Forum from './Forum.jsx';
import SignUpHome from './SignUpHome.jsx';
import logo from '../../../assets/icons/favicon.png';
import { StyledBrand, StyledNavbarNav, StyledNavLink } from '../css/sharedcss.jsx';

const Navbar = () => {
  const [navPage, setNavPage] = useState(0);
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <StyledBrand className="navbar-brand" href="#">
            <img src={logo} alt="workshop brand" width="30" height="33" className="d-inline-block align-top" />
            WorkShop
          </StyledBrand>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <StyledNavbarNav className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <StyledNavLink exact={true} to="/" className="nav-link" aria-current="page">Home</StyledNavLink>
              </li>
              <li className="nav-item">
                <StyledNavLink to="engineeringforums" className="nav-link">Forum</StyledNavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Events</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Explore
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Residential</a></li>
                  <li><a className="dropdown-item" href="#">Commercial</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Hospitality</a></li>
                  <li><a className="dropdown-item" href="#">Education</a></li>

                </ul>
              </li>
            </StyledNavbarNav>

            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <SignUpHome />
        </Route>
        <Route path="/engineeringforums">
          <Forum />
        </Route>
      </Switch>
    </>
  );
};

export default Navbar;
