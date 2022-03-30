import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ErrorForm } from "../../../../../Shared/Components/ErrorForm";
import Form from "../../../../../Shared/Components/Form";
import authService from "../../../../Admin/Auth/Services/AuthService";
import "./Signin.scss";

export class SignIn extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        email: "",
        password: "",
      }),
      isRedirect: false
    };
  }

  onSigin = async () => {
    this._validateForm();
    if (this._isFormValid()) {
        const { email, password } = this.state.form;
        const params = new URLSearchParams();
        params.append("grant_type", "password");
        params.append("username", email.value);
        params.append("password", password.value);
        await authService.accessAuthToken(params)
            .then((res) => {
                localStorage.setItem('access_token', res.data.access_token);
                this.setState({
                    isRedirect: true
                });
            })
            .catch((err) => {

            });
    } else {
    }
  };
  render() {
    const { email, password } = this.state.form;
    const { isRedirect } = this.state;
    if(isRedirect) {
        return <Redirect to="/blog" />
    }
    return (
      <>
        <div id="signin-page">
          <section className="login">
            <div className="login_box">
              <div className="left">
                <div className="contact">
                  <div class="row">
                    <div class="col-md-12">
                      <h3>SIGN IN</h3>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="USERNAME"
                          required
                          value={email.value}
                          onChange={(ev) => this._setValue(ev, "email")}
                        />
                        {email.err !== "" ? (
                          email.err === "*" ? (
                            <ErrorForm message="Email cannot be empty" />
                          ) : (
                            <ErrorForm message={email.err} />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          required
                          className="form-control"
                          placeholder="PASSWORD"
                          value={password.value}
                          onChange={(ev) => this._setValue(ev, "password")}
                        />
                        {password.err !== "" ? (
                          password.err === "*" ? (
                            <ErrorForm message="Password cannot be empty" />
                          ) : (
                            <ErrorForm message={password.err} />
                          )
                        ) : (
                          ""
                        )}
                      </div>

                      <button className="submit" onClick={this.onSigin}>
                        START 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="right-text">
                  {/* <h2>LONYX</h2> */}
                  {/* <h5>A UX BASED CREATIVE AGENCEY</h5> */}
                </div>
                <div className="right-inductor">
                  <img
                    src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
