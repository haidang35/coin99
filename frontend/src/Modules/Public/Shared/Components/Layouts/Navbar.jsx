import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {/* <div id="loader-wrapper">
            <div id="loader" />
            <div className="loader-section section-left" />
            <div className="loader-section section-right" />
          </div> */}
        {/* /.End of loader wrapper*/}
        <nav className="navbar navbar-default navbar-fixed navbar-transparent bootsnav">
          {/* Start Top Search */}
          <div className="top-search">
            <div className="container">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="input-group-addon close-search">
                  <i className="fa fa-times" />
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="attr-nav">
              <ul>
                <li className="nav-language">
                  <select className="selectpicker" data-width="auto">
                    <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
                      English
                    </option>
                    <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
                      Español
                    </option>
                    <option data-content='<span class="flag-icon flag-icon-bd"></span> বাংলা'>
                      বাংলা{" "}
                    </option>
                  </select>
                </li>
                <li>
                  <Link to="/signin" className="btn nav-btn">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="btn nav-btn btn-orange">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="index-2.html">
                <img src="assets/img/logo.png" className="logo" alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav" data-in="" data-out="">
                <li className="active">
                  <Link to="/" >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Lending">
                    Lending
                  </Link>
                </li>
                <li>
                  <Link to="/coin-market">
                    Coin Market
                  </Link>
                </li>
                <li>
                  <Link to="/Contact">
                    Contact
                  </Link>
                </li>
                 <li>
                  <Link to="/Blog">
                    Blog
                  </Link>
                  </li>
                  
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
