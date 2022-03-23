import React, { Component } from "react";

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            
            <>
  <div className="container">
    <div className="row">
      <div className=" mt-90 col-lg-8 col-lg-offset-2">
        <div className="row">
          <div className="login-wrapper crypto">
            <div className="col-lg-6 col-sm-12 over-h hidden-sm no-padding-left  no-padding-right">
              <img
                src="../data/crypto-dash/login-img.png"
                style={{ width: "105%" }}
                alt=""
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div
                id="login"
                className="login loginpage mt-0 no-pl no-pr pt30 pb30"
              >
                <div className="login-form-header flex align-items-center">
                  <img
                    src="../data/crypto-dash/signup.png"
                    alt="login-icon"
                    style={{ maxWidth: 64 }}
                  />
                  <div className="login-header">
                    <h4 className="bold">Signup Now!</h4>
                    <h4>
                      <small>Enter your data to register.</small>
                    </h4>
                  </div>
                </div>
                <div className="box login">
                  <div className="content-body" style={{ paddingTop: 25 }}>
                    <form
                      id="msg_validate"
                      action="#"
                      noValidate="novalidate"
                      className="no-mb no-mt"
                    >
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label className="form-label">User name</label>
                            <div className="controls">
                              <input
                                type="text"
                                className="form-control"
                                name="formfield2"
                                placeholder="enter username"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Email</label>
                            <div className="controls">
                              <input
                                type="text"
                                className="form-control"
                                name="formfield1"
                                placeholder="enter email"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="form-label">Password</label>
                            <div className="controls">
                              <input
                                type="password"
                                className="form-control"
                                name="formfield2"
                                placeholder="enter password"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <label className="form-label">
                              Repeat Password
                            </label>
                            <div className="controls">
                              <input
                                type="password"
                                className="form-control"
                                name="formfield1"
                                placeholder="repeat password"
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            <a
                              href="index-crypto-dashboard.html"
                              className="btn btn-primary mt-10 btn-corner right-15"
                            >
                              Sign up
                            </a>
                            <a
                              href="crypto-login.html"
                              className="btn mt-10 btn-corner signup"
                            >
                              Login
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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