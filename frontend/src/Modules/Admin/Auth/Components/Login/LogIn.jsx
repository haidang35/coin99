import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Alert } from "../../../../../Shared/Components/Alert";
import { ErrorForm } from "../../../../../Shared/Components/ErrorForm";
import Form from "../../../../../Shared/Components/Form";
import authService from "../../Services/AuthService";
import "./Login.scss";

export class LogIn extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        email: "",
        password: "",
      }),
      message: "",
    };
  }

  componentDidMount() {
    console.log(this.state.form);
  }

  onLogin = async () => {
    this._validateForm();
    const { email, password } = this.state.form;
    if (this._isFormValid()) {
      console.log(this.state.form);
      const params = new URLSearchParams();
      params.append("grant_type", "password");
      params.append("username", email);
      params.append("password", password);
      await authService
        .accessAuthToken(params)
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          window.location.replace("/admin");
        })
        .catch((err) => {
          this.setState({
            message:
              "Đăng nhập thất bại, vui lòng kiểm tra lại tài khoản hoặc mật khẩu",
          });
        });
    } else {
      console.log("in valid");
    }
  };

  handleChangeLogin = (event) => {
    const { name, value } = event.target;
    let { form } = this.state;
    form[[name]] = value;
    this.setState({ form });
  };

  render() {
    const { email, password } = this.state.form;
    const { message } = this.state;
    return (
      <>
        <div className="login">
          <div className="container">
            <div className="row">
              <div className=" mt-90 col-lg-8 col-lg-offset-2">
                <div className="row">
                  {message !== "" ? (
                    <Alert type="danger" message={this.state.message} />
                  ) : (
                    ""
                  )}
                </div>
                <div className="row">
                  <div className="login-wrapper crypto">
                    <div className="col-lg-5 col-sm-12 hidden-sm no-padding-left  no-padding-right">
                      <img
                        src={
                          window.location.origin +
                          "/Assets/Admin/data/crypto-dash/login-img.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="col-lg-7 col-sm-12">
                      <div
                        id="login"
                        className="login loginpage mt-0 no-pl no-pr pt30 pb30"
                      >
                        <div className="login-form-header  flex align-items-center">
                          <img
                            src={
                              window.location.origin +
                              "/Assets/Admin/data/crypto-dash/padlock.png"
                            }
                            alt="login-icon"
                            style={{ maxWidth: 70 }}
                          />
                          <div className="login-header">
                            <h4 className="bold">Login Now!</h4>
                            <h4>
                              <small>Enter your credentials to login.</small>
                            </h4>
                          </div>
                        </div>
                        <div className="box login">
                          <div
                            className="content-body"
                            style={{ paddingTop: 30 }}
                          >
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
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="email"
                                        value={email.value}
                                        required
                                        onChange={(ev) =>
                                          this._setValue(ev, "email")
                                        }
                                      />
                                      {email.err !== "" ? (
                                        email.err === "*" ? (
                                          <ErrorForm
                                            message={"Email cannot be empty"}
                                          />
                                        ) : (
                                          <ErrorForm message={email.err} />
                                        )
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <label className="form-label">
                                      Password
                                    </label>
                                    <div className="controls">
                                      <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="password"
                                        required
                                        value={password.value}
                                        onChange={(ev) =>
                                          this._setValue(ev, "password")
                                        }
                                      />
                                      {password.err !== "" ? (
                                        password.err === "*" ? (
                                          <ErrorForm
                                            message={"Password cannot be empty"}
                                          />
                                        ) : (
                                          <ErrorForm message={password.err} />
                                        )
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <a
                                      href="#"
                                      className="btn btn-primary mt-10 btn-corner right-15"
                                      onClick={this.onLogin}
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
                            <input class="iCheck" type="checkbox"></input>
                            Remember Password
                          </a>
                          <a
                            href="/admin/register"
                            className="pull-right blue-text"
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
        </div>
      </>
    );
  }
}
