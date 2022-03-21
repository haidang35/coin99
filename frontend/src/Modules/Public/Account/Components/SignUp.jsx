import React, { Component } from "react";


export class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
          <div className="reg-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 col-md-6">
                  <div className="">
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a href="#tab1" data-toggle="tab">
                          Register
                        </a>
                      </li>
                      <li>
                        <a href="#tab2" data-toggle="tab">
                          Log in
                        </a>
                      </li>
                    </ul>
                    <div className="social_list">
                      <a href="#" className="facebook-icon">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#" className="facebook-icon">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#" className="facebook-icon">
                        <i className="fa fa-google-plus" />
                      </a>
                      <a href="#" className="facebook-icon">
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane fade in active" id="tab1">
                        <form>
                          <span className="input">
                            <input className="input__field" type="text" id="input-1" />
                            <label className="input__label" htmlFor="input-1">
                              <span
                                className="input__label-content"
                                data-content="E-MAIL"
                              >
                                E-MAIL
                              </span>
                            </label>
                          </span>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> I have read and accept Global
                              Crypto{" "}
                              <a href="#" className="checkbox-link">
                                Privacy policy
                              </a>{" "}
                              and
                              <br />
                              <a href="#" className="checkbox-link">
                                Terms of Use
                              </a>
                            </label>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Your Password at Global Crypto
                              are encrypted and Secured
                            </label>
                          </div>
                          <button type="submit" className="btn btn-reg">
                            Register
                          </button>
                        </form>
                      </div>
                      <div className="tab-pane fade" id="tab2">
                        <form>
                          <span className="input">
                            <input className="input__field" type="text" id="input-2" />
                            <label className="input__label" htmlFor="input-2">
                              <span
                                className="input__label-content"
                                data-content="E-MAIL"
                              >
                                E-MAIL
                              </span>
                            </label>
                          </span>
                          <span className="input">
                            <input
                              className="input__field"
                              type="password"
                              id="input-3"
                            />
                            <label className="input__label" htmlFor="input-3">
                              <span
                                className="input__label-content"
                                data-content="Password"
                              >
                                Password
                              </span>
                            </label>
                          </span>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> Don't have an account?{" "}
                              <a href="#" className="checkbox-link">
                                Sign up
                              </a>{" "}
                              Now
                            </label>
                          </div>
                          <button type="submit" className="btn btn-reg">
                            Log in
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </>
    )
  }
}
