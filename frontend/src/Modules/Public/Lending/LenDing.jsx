import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Shared/Components/Layouts/Footer";

export class LenDing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <>
                    <nav className="navbar navbar-default navbar-fixed navbar-transparent bootsnav">
                        <div className="top-search">
                            <div className="container">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-search" />
                                    </span>
                                    <input type="text" className="form-control" placeholder="Search" />
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
                                    <li>
                                        <Link to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="active">
                                        <Link to="/Lending">
                                            Lending
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/coin-market">
                                            Coin market
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Contacts">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog" >
                                         Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div
                        className="page_header"
                        data-parallax-bg-image="assets/img/1920x650-2.jpg"
                        data-parallax-direction=""
                    >
                        <div className="header-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <div className="haeder-text">
                                            <h1>Pricing Plans</h1>
                                            <p>
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                                The point of using Lorem Ipsum is tha
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <div className="pricing_item">
                            <h3 className="pricing_title">Startup</h3>
                            <p className="pricing_sentence">
                                Perfect for small startups that have less than 10 team members
                            </p>
                            <div className="pricing_price">
                                <span className="pricing_currency">$</span>19
                                <span className="pricing_period">/ month</span>
                            </div>
                            <ul className="pricing_feature-list">
                                <li className="pricing_feature">1 GB of space</li>
                                <li className="pricing_feature">Support at $25/hour</li>
                                <li className="pricing_feature">10 presentations/month</li>
                                <li className="pricing_feature">1 campaign/month</li>
                                <li className="pricing_feature">Small social media package</li>
                            </ul>
                            <button className="pricing_action" aria-label="Purchase this plan">
                                <span className="icon lnr lnr-arrow-right" />
                            </button>
                        </div>
                        <div className="pricing_item">
                            <h3 className="pricing_title">Medium</h3>
                            <p className="pricing_sentence">
                                Suitable for medium-sized businesses with up to 30 employees
                            </p>
                            <div className="pricing_price">
                                <span className="pricing_currency">$</span>199
                                <span className="pricing_period">/ month</span>
                            </div>
                            <ul className="pricing_feature-list">
                                <li className="pricing_feature">5 GB of space</li>
                                <li className="pricing_feature">Support at $5/hour</li>
                                <li className="pricing_feature">10 presentations/month</li>
                                <li className="pricing_feature">1 campaign/month</li>
                                <li className="pricing_feature">Medium social media package</li>
                            </ul>
                            <button className="pricing_action" aria-label="Purchase this plan">
                                <span className="icon lnr lnr-arrow-right" />
                            </button>
                        </div>
                        <div className="pricing_item">
                            <h3 className="pricing_title">Pro</h3>
                            <p className="pricing_sentence">
                                For any large corporation with an unlimited number of members
                            </p>
                            <div className="pricing_price">
                                <span className="pricing_currency">$</span>499
                                <span className="pricing_period">/ month</span>
                            </div>
                            <ul className="pricing_feature-list">
                                <li className="pricing_feature">Unlimited space</li>
                                <li className="pricing_feature">20 hours of free support</li>
                                <li className="pricing_feature">10 presentations/month</li>
                                <li className="pricing_feature">1 campaign/month</li>
                                <li className="pricing_feature">Full social media package</li>
                            </ul>
                            <button className="pricing_action" aria-label="Purchase this plan">
                                <span className="icon lnr lnr-arrow-right" />
                            </button>
                        </div>
                        <div className="pricing_item">
                            <h3 className="pricing_title">Startup</h3>
                            <p className="pricing_sentence">
                                Perfect for small startups that have less than 10 team members
                            </p>
                            <div className="pricing_price">
                                <span className="pricing_currency">$</span>19
                                <span className="pricing_period">/ month</span>
                            </div>
                            <ul className="pricing_feature-list">
                                <li className="pricing_feature">1 GB of space</li>
                                <li className="pricing_feature">Support at $25/hour</li>
                                <li className="pricing_feature">10 presentations/month</li>
                                <li className="pricing_feature">1 campaign/month</li>
                                <li className="pricing_feature">Small social media package</li>
                            </ul>
                            <button className="pricing_action" aria-label="Purchase this plan">
                                <span className="icon lnr lnr-arrow-right" />
                            </button>
                        </div>
                        <div className="pricing_item">
                            <h3 className="pricing_title">Medium</h3>
                            <p className="pricing_sentence">
                                Suitable for medium-sized businesses with up to 30 employees
                            </p>
                            <div className="pricing_price">
                                <span className="pricing_currency">$</span>199
                                <span className="pricing_period">/ month</span>
                            </div>
                            <ul className="pricing_feature-list">
                                <li className="pricing_feature">5 GB of space</li>
                                <li className="pricing_feature">Support at $5/hour</li>
                                <li className="pricing_feature">10 presentations/month</li>
                                <li className="pricing_feature">1 campaign/month</li>
                                <li className="pricing_feature">Medium social media package</li>
                            </ul>
                            <button className="pricing_action" aria-label="Purchase this plan">
                                <span className="icon lnr lnr-arrow-right" />
                            </button>
                        </div>
                        <div className="pricing_item">
                            <h3 className="pricing_title">Pro</h3>
                            <p className="pricing_sentence">
                                For any large corporation with an unlimited number of members
                            </p>
                            <div className="pricing_price">
                                <span className="pricing_currency">$</span>499
                                <span className="pricing_period">/ month</span>
                            </div>
                            <ul className="pricing_feature-list">
                                <li className="pricing_feature">Unlimited space</li>
                                <li className="pricing_feature">20 hours of free support</li>
                                <li className="pricing_feature">10 presentations/month</li>
                                <li className="pricing_feature">1 campaign/month</li>
                                <li className="pricing_feature">Full social media package</li>
                            </ul>
                            <button className="pricing_action" aria-label="Purchase this plan">
                                <span className="icon lnr lnr-arrow-right" />
                            </button>
                        </div>
                        <div className="pricing_item">
                            <h3 className="pricing_title">Startup</h3>
                            <p className="pricing_sentence">
                                Perfect for small startups that have less than 10 team members
                            </p>
                            <div className="pricing_price">
                                <span className="pricing_currency">$</span>19
                                <span className="pricing_period">/ month</span>
                            </div>
                            <ul className="pricing_feature-list">
                                <li className="pricing_feature">1 GB of space</li>
                                <li className="pricing_feature">Support at $25/hour</li>
                                <li className="pricing_feature">10 presentations/month</li>
                                <li className="pricing_feature">1 campaign/month</li>
                                <li className="pricing_feature">Small social media package</li>
                            </ul>
                            <button className="pricing_action" aria-label="Purchase this plan">
                                <span className="icon lnr lnr-arrow-right" />
                            </button>
                        </div>
                        <div className="pricing_item">
                            <h3 className="pricing_title">Medium</h3>
                            <p className="pricing_sentence">
                                Suitable for medium-sized businesses with up to 30 employees
                            </p>
                            <div className="pricing_price">
                                <span className="pricing_currency">$</span>199
                                <span className="pricing_period">/ month</span>
                            </div>
                            <ul className="pricing_feature-list">
                                <li className="pricing_feature">5 GB of space</li>
                                <li className="pricing_feature">Support at $5/hour</li>
                                <li className="pricing_feature">10 presentations/month</li>
                                <li className="pricing_feature">1 campaign/month</li>
                                <li className="pricing_feature">Medium social media package</li>
                            </ul>
                            <button className="pricing_action" aria-label="Purchase this plan">
                                <span className="icon lnr lnr-arrow-right" />
                            </button>
                        </div>
                        <div className="pricing_item">
                            <h3 className="pricing_title">Pro</h3>
                            <p className="pricing_sentence">
                                For any large corporation with an unlimited number of members
                            </p>
                            <div className="pricing_price">
                                <span className="pricing_currency">$</span>499
                                <span className="pricing_period">/ month</span>
                            </div>
                            <ul className="pricing_feature-list">
                                <li className="pricing_feature">Unlimited space</li>
                                <li className="pricing_feature">20 hours of free support</li>
                                <li className="pricing_feature">10 presentations/month</li>
                                <li className="pricing_feature">1 campaign/month</li>
                                <li className="pricing_feature">Full social media package</li>
                            </ul>
                            <button className="pricing_action" aria-label="Purchase this plan">
                                <span className="icon lnr lnr-arrow-right" />
                            </button>
                        </div>
                    </div>
                 <Footer />
                </>

            </>
        )
    }
}
