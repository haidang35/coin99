import React, { Component } from "react";



export class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <>
          <div className="container">
            <div className="row">
              <div className=" mt-90 col-lg-8 col-lg-offset-2">
                <div className="row">
                  <div className="login-wrapper crypto">
                    <div className="col-lg-5 col-sm-12 hidden-sm no-padding-left  no-padding-right">
                      <img src="../data/crypto-dash/login-img.png" alt="" />
                    </div>
                    <div className="col-lg-7 col-sm-12">
                      <div
                        id="login"
                        className="login loginpage mt-0 no-pl no-pr pt30 pb30"
                      >
                        <div className="login-form-header  flex align-items-center">
                          <img
                            src="../data/crypto-dash/padlock.png"
                            alt="login-icon"
                            style={{ maxWidth: 64 }}
                          />
                          <div className="login-header">
                            <h4 className="bold">Login Now!</h4>
                            <h4>
                              <small>Enter your credentials to login.</small>
                            </h4>
                          </div>
                        </div>
                        <div className="box login">
                          <div className="content-body" style={{ paddingTop: 30 }}>
                            <form
                              id="msg_validate"
                              action="#"
                              noValidate="novalidate"
                              className="no-mb no-mt"
                            >
                              <div className="row">
                                <div className="col-xs-12">
                                  <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <div className="controls">
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="formfield2"
                                        placeholder="email"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label className="form-label">Password</label>
                                    <div className="controls">
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="formfield1"
                                        placeholder="password"
                                      />
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <a
                                      href="index-crypto-dashboard.html"
                                      className="btn btn-primary mt-10 btn-corner right-15"
                                    >
                                      Log in
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <p id="nav" className="over-h">
                          <a
                            className="pull-left blue-text"
                            href="#"
                            title="Password Lost and Found"
                          >
                            Forgot password?
                          </a>
                          <a
                            className="pull-right blue-text"
                            href="crypto-register.html"
                            title="Sign Up"
                          >
                            Sign Up
                          </a>
                        </p>
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
