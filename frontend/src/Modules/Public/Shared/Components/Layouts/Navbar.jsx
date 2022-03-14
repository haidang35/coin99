import React from "react";
import { Component } from "react";

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
            {/* End Top Search */}
            <div className="container">
              {/* Start Atribute Navigation */}
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
                    <a href="register.html" className="btn nav-btn">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="register.html" className="btn nav-btn btn-orange">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
              {/* End Atribute Navigation */}
              {/* Start Header Navigation */}
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
              {/* End Header Navigation */}
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="nav navbar-nav" data-in="" data-out="">
                  <li className="active">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li>
                    <a href="lending.html">Lending</a>
                  </li>
                  <li>
                    <a href="coinmarket.html">Coin market</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="buy.html">Buy</a>
                      </li>
                      <li>
                        <a href="sell.html">Sell</a>
                      </li>
                      <li>
                        <a href="price.html">Pricing Details</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                      <li>
                        <a href="faq.html">F.A.Q</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* /.navbar-collapse */}
            </div>
          </nav>
          {/* /. End of Navigation */}
      </>
    );
  }
}
