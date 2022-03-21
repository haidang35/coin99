import React, { Component } from "react";

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
                                    <li>
                                        <a href="index-2.html">Home</a>
                                    </li>
                                    <li className="active">
                                        <a href="lending.html">Lending</a>
                                    </li>
                                    <li>
                                        <a href="coinmarket.html">Coin market</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
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
                    {/*  /.End of page header */}
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
                    {/* /.End of pricing */}
                    <footer className="footer">
                        <div className="footer-breadcrumbs">
                            <div className="container">
                                <div className="breadcrumbs-row">
                                    <ul className="f_breadcrumbs">
                                        <li>
                                            <a href="#">
                                                <span>Home</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>About</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="scroll-top" id="back-to-top">
                                        <div className="scroll-top-text">
                                            <span>Scroll to Top</span>
                                        </div>
                                        <div className="scroll-top-icon">
                                            <i className="fa fa-angle-up" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.End of breadcrumbs */}
                        <div className="action_btn_inner">
                            <a href="register.html#tab1" className="action_btn">
                                <span className="action_title">Register</span>
                                <span className="lnr lnr-chevron-right action_icon" />
                                <span className="action_sub_title">
                                    Join the new era of cryptocurrency exchange
                                </span>
                            </a>
                            <a href="register.html#tab2" className="action_btn">
                                <span className="action_title">Sign in</span>
                                <span className="lnr lnr-chevron-right action_icon" />
                                <span className="action_sub_title">
                                    Access the cryptocurrency experience you deserve
                                </span>
                            </a>
                        </div>
                        {/* /.End of action button */}
                        <div className="main_footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-4 col-md-4">
                                        <div className="widget-contact">
                                            <ul className="list-icon">
                                                <li>
                                                    <i className="fa fa-map-marker" /> 1355 Market Street, Suite
                                                    900
                                                    <br />
                                                    San Francisco, CA 94103
                                                </li>
                                                <li>
                                                    <i className="fa fa-phone" /> (123) 456-7890{" "}
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope" />{" "}
                                                    <a href="mailto:first.last@example.com">
                                                        first.last@example.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <br />
                                                    <i className="fa fa-clock-o" />
                                                    Monday - Friday: <strong>08:00 - 22:00</strong>
                                                    <br />
                                                    Saturday, Sunday: <strong>Closed</strong>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 col-md-4 col-md-offset-1">
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="footer-box">
                                                    <h3 className="footer-title">Our Company</h3>
                                                    <ul className="footer-list">
                                                        <li>
                                                            <a href="#">Customer support</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Help center</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Fees &amp; Limits</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Referral Program</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">About Us</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">24/7 Support</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <div className="footer-box">
                                                    <h3 className="footer-title">Service</h3>
                                                    <ul className="footer-list">
                                                        <li>
                                                            <a href="about.html">About Us</a>
                                                        </li>
                                                        <li>
                                                            <a href="service.html">Service</a>
                                                        </li>
                                                        <li>
                                                            <a href="exchange.html">Exchange Bitcoin</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog.html">Blog news</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Our Team Member</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Roadmap Bitcoin</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact.html">Contact us</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-md-3">
                                        <div className="newsletter-box">
                                            <h3 className="footer-title">Email Newslatter</h3>
                                            <p>Subscribe to our newsletter!</p>
                                            <form className="newsletter-form" action="#" method="post">
                                                <input type="hidden" name="form-name" defaultValue="form 4" />
                                                <input placeholder="Email Address" type="text" />
                                                <button type="submit">
                                                    <i className="fa fa-paper-plane" aria-hidden="true" />
                                                </button>
                                                <div className="envelope">
                                                    <i className="fa fa-envelope" aria-hidden="true" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.End of main footer */}
                        <div className="sub_footer">
                            <div className="container">
                                <div className="logos-wrapper">
                                    <div className="logos-row">
                                        <div className="social-content">
                                            <div className="social-row">
                                                <div className="social_icon">
                                                    <a href="#" className="">
                                                        <i className="fa fa-facebook" />
                                                    </a>
                                                    <a href="#" className="">
                                                        <i className="fa fa-twitter" />
                                                    </a>
                                                    <a href="#" className="">
                                                        <i className="fa fa-instagram" />
                                                    </a>
                                                    <a href="#" className="">
                                                        <i className="fa fa-youtube-play" />
                                                    </a>
                                                    <a href="#" className="">
                                                        <i className="fa fa-linkedin" />
                                                    </a>
                                                </div>
                                                <div className="f-language">
                                                    <select className="selectpicker" data-width="fit">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="copyright">
                                        <span>Copyright Â© 2018. All rights reserved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.End of sub footer */}
                    </footer>
                    {/* /.End of footer */}
                    {/* jQuery */}
                </>

            </>
        )
    }
}