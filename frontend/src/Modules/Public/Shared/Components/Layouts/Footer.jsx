import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer-breadcrumbs">
            <div className="container">
              <div className="breadcrumbs-row">
                <ul className="f_breadcrumbs">
                  <li>
                    <Link to="/" exact>
                    Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Abouts" exact>
                    Abouts
                    </Link>
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
          <div className="action_btn_inner">
            <Link to="/signup" className="action_btn">
              <span className="action_title">Register</span>
              <span className="lnr lnr-chevron-right action_icon" />
              <span className="action_sub_title">
                Join the new era of cryptocurrency exchange
              </span>
            </Link>
            <Link to="/signin" className="action_btn">
              <span className="action_title">Sign in</span>
              <span className="lnr lnr-chevron-right action_icon" />
              <span className="action_sub_title">
                Access the cryptocurrency experience you deserve
              </span>
            </Link>
          </div>
          <div className="main_footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-md-4">
                  <div className="widget-contact">
                    <ul className="list-icon">
                      <li>
                        <i className="fa fa-map-marker" /> 1355 Market Street,
                        Suite 900
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
                            <Link to="/Abouts">
                              About Us
                              </Link>
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
                            <Link to="/Abouts">
                              About Us
                              </Link>
                          </li>
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="exchange.html">Exchange Bitcoin</a>
                          </li>
                          <li>
                            <Link to="/Blog">
                              Blog news
                            </Link>
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
                      <input
                        type="hidden"
                        name="form-name"
                        defaultValue="form 4"
                      />
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
        </footer>
      </>
    );
  }
}
