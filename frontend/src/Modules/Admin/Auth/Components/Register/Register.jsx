import React, { Component } from "react";
import { Link } from "react-router-dom";
import { REGEX_TEL } from "../../../../../Configs/validation";
import { ErrorForm } from "../../../../../Shared/Components/ErrorForm";
import Form from "../../../../../Shared/Components/Form";
import authService from "../../Services/AuthService";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export class Register extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        FullName: "",
        Birthday: "",
        Email: "",
        PhoneNumber: "",
        Password: "",
        ConfirmationPassword: "",
      }),
      isLoading: false,
      mesage: {
        type: "",
        content: "",
      },
    };
  }

  handleChangeSignup = (event) => {
    const { name, value } = event.target;
    let { form } = this.state;
    form[[name]] = value;
    this.setState({ form });
  };

  onSignup = async () => {
    this._validateForm();
    if (this._isFormValid()) {
      this.setState({ isLoading: true });
      const {
        FullName,
        Email,
        Birthday,
        PhoneNumber,
        Password,
        ConfirmationPassword,
      } = this.state.form;
      const data = {
        FullName: FullName.value,
        Birthday: Birthday.value,
        Email: Email.value,
        PhoneNumber: PhoneNumber.value,
        Password: Password.value,
        ConfirmationPassword: ConfirmationPassword.value,
      };
      await authService
        .registerNewUser(data)
        .then((res) => {
          window.location.replace("/admin-login");
        })
        .catch((err) => {
          this.setState({ isLoading: false });
          console.log(err);
        });
    }
  };
  render() {
    const {
      FullName,
      Birthday,
      Email,
      PhoneNumber,
      Password,
      ConfirmationPassword,
    } = this.state.form;
    const { isLoading } = this.state;
    return (
      <>
       {isLoading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          ""
        )}
        <div className="container">
          <div className="row">
            <div className=" mt-90 col-lg-8 col-lg-offset-2">
              <div className="row">
                <div className="login-wrapper crypto">
                  <div className="col-lg-6 col-sm-12 over-h hidden-sm no-padding-left  no-padding-right">
                    <img
                      src={
                        window.location.origin +
                        "/Assets/Admin/data/crypto-dash/login-img.png"
                      }
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
                          src={
                            window.location.origin +
                            "/Assets/Admin/data/crypto-dash/signup.png"
                          }
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
                        <div
                          className="content-body"
                          style={{ paddingTop: 25 }}
                        >
                          <div className="no-mb no-mt">
                            <div className="row">
                              <div className="col-xs-12">
                                <div className="form-group">
                                  <label className="form-label">
                                    Full Name
                                  </label>
                                  <div className="controls">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="FullName"
                                      placeholder="enter full name"
                                      required
                                      value={FullName.value}
                                      onChange={(ev) =>
                                        this._setValue(ev, "FullName")
                                      }
                                    />
                                    {FullName.err !== "" ? (
                                      FullName.err === "*" ? (
                                        <ErrorForm
                                          message={"Full Name  cannot be empty"}
                                        />
                                      ) : (
                                        <ErrorForm message={FullName.err} />
                                      )
                                    ) : (
                                      ""
                                    )}
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
                                      required
                                      value={Birthday.value}
                                      onChange={(ev) =>
                                        this._setValue(ev, "Birthday")
                                      }
                                    />
                                    {Birthday.err !== "" ? (
                                      Birthday.err === "*" ? (
                                        <ErrorForm
                                          message={"Birthday cannot be empty"}
                                        />
                                      ) : (
                                        <ErrorForm message={Birthday.err} />
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label className="form-label">Email</label>
                                  <div className="controls">
                                    <input
                                      type="email"
                                      className="form-control"
                                      name="Email"
                                      placeholder="enter email"
                                      required
                                      value={Email.value}
                                      onChange={(ev) =>
                                        this._setValue(ev, "Email")
                                      }
                                    />
                                    {Email.err !== "" ? (
                                      Email.err === "*" ? (
                                        <ErrorForm message="Email cannot be empty" />
                                      ) : (
                                        <ErrorForm message={Email.err} />
                                      )
                                    ) : (
                                      ""
                                    )}
                                    {Email.err !== "" ? (
                                      Email.err === "*" ? (
                                        <ErrorForm />
                                      ) : (
                                        <ErrorForm message={Email.err} />
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label className="form-label">
                                    Phone Number
                                  </label>
                                  <div className="controls">
                                    <input
                                      type="tel"
                                      className="form-control"
                                      name="PhoneNumber"
                                      placeholder="enter phone number"
                                      required
                                      value={PhoneNumber.value}
                                      onChange={(ev) =>
                                        this._setValue(ev, "PhoneNumber")
                                      }
                                      pattern={REGEX_TEL}
                                    />
                                    {PhoneNumber.err !== "" ? (
                                      PhoneNumber.err === "*" ? (
                                        <ErrorForm
                                          message={
                                            "Phone Number cannot be empty"
                                          }
                                        />
                                      ) : (
                                        <ErrorForm message={PhoneNumber.err} />
                                      )
                                    ) : (
                                      ""
                                    )}
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
                                      required
                                      value={Password.value}
                                      onChange={(ev) =>
                                        this._setValue(ev, "Password")
                                      }
                                    />
                                    {Password.err !== "" ? (
                                      Password.err === "*" ? (
                                        <ErrorForm
                                          message={"Password cannot be empty"}
                                        />
                                      ) : (
                                        <ErrorForm message={Password.err} />
                                      )
                                    ) : (
                                      ""
                                    )}
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
                                      required
                                      value={ConfirmationPassword.value}
                                      onChange={(ev) =>
                                        this._setValue(
                                          ev,
                                          "ConfirmationPassword"
                                        )
                                      }
                                    />
                                    {ConfirmationPassword.err !== "" ? (
                                      ConfirmationPassword.err === "*" ? (
                                        <ErrorForm
                                          message={
                                            "ConfirmationPassword cannot be empty"
                                          }
                                        />
                                      ) : (
                                        <ErrorForm
                                          message={ConfirmationPassword.err}
                                        />
                                      )
                                    ) : (
                                      ""
                                    )}
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
                                    to={"/admin-login"}
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
    );
  }
}
