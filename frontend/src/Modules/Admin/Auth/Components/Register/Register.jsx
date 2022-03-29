import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../Services/AuthService";


export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        FullName: '',
        Birthday: '',
        Email: '',
        PhoneNumber: '',
        Password: '',
        ConfirmationPassword: ''
      }
    }
  }

  handleChangeSignup = (event) => {
    const { name, value } = event.target;
    let { form } = this.state;
    form[[name]] = value;
    this.setState({ form });
  }

  onSignup = async () => {
    const { form } = this.state;
    await authService.registerNewUser(form)
      .then((res) => {
         window.location.replace("/admin-login");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { FullName, Birthday, Email, PhoneNumber, Password, ConfirmationPassword } = this.state.form;
    return (

      <>
        <div className="container">
          <div className="row">
            <div className=" mt-90 col-lg-8 col-lg-offset-2">
              <div className="row">
                <div className="login-wrapper crypto">
                  <div className="col-lg-6 col-sm-12 over-h hidden-sm no-padding-left  no-padding-right">
                    <img
                      src= {window.location.origin + '/Assets/Admin/data/crypto-dash/login-img.png'}
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
                          src={window.location.origin + '/Assets/Admin/data/crypto-dash/signup.png'}
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
                          <div
                            className="no-mb no-mt"
                          >
                            <div className="row">
                              <div className="col-xs-12">
                                <div className="form-group">
                                  <label className="form-label">Full Name</label>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="FullName"
                                      placeholder="enter full name"
                                      value={FullName}
                                      onChange={this.handleChangeSignup}
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label className="form-label">Birthday</label>
                                  <div className="controls">
                                    <input
                                      type="date"
                                      className="form-control"
                                      name="Birthday"
                                      placeholder="enter birthday"
                                      value={Birthday}
                                      onChange={this.handleChangeSignup}
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label className="form-label">Email</label>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="Email"
                                      placeholder="enter email"
                                      value={Email}
                                      onChange={this.handleChangeSignup}
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label className="form-label">Phone Number</label>
                                  <div className="controls">
                                    <input
                                      type="tel"
                                      className="form-control"
                                      name="PhoneNumber"
                                      placeholder="enter phone number"
                                      value={PhoneNumber}
                                      onChange={this.handleChangeSignup}
                                    />
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label className="form-label">Password</label>
                                  <div className="controls">
                                    <input
                                      type="password"
                                      className="form-control"
                                      name="Password"
                                      placeholder="enter password"
                                      value={Password}
                                      onChange={this.handleChangeSignup}
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
                                      name="ConfirmationPassword"
                                      placeholder="repeat password"
                                      value={ConfirmationPassword}
                                      onChange={this.handleChangeSignup}
                                    />
                                  </div>
                                </div>
                                <div className="text-center">
                                  <button
                                    onClick={this.onSignup}
                                    className="btn btn-primary mt-10 btn-corner right-15"
                                  >
                                    Sign up
                                  </button>
                                  <Link
                                    to={'/admin-login'}
                                    className="btn mt-10 btn-corner signup"
                                  >
                                    Login
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
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