import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ErrorForm } from "../../../../../Shared/Components/ErrorForm";
import Form from "../../../../../Shared/Components/Form";
import userService from "../../Services/UserService";

export class NewUser extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        FullName: "",
        Birthday: "",
        Email: "",
        Password: "",
        ConfirmationPassword: "",
        PhoneNumber: "",
        Status: "",
        AccountType: "",
        Role: ""
      }),
      isRedirect: false,
      message: {
        type: "",
        content: "",
      },
      roles: [],
    };
  }

  componentDidMount() {
      this.getRoles();
  }

  getRoles = async () => {
    await userService.getRoleList()
        .then((res) => {
            this.setState({
                roles: res.data
            });
        })
  }

  onSaveNewUser = async () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { form } = this.state;
      const newUser = {
        FullName: form.FullName.value,
        Birthday: form.Birthday.value,
        Email: form.Email.value,
        PhoneNumber: form.PhoneNumber.value,
        Password: form.Password.value,
        ConfirmationPassword: form.ConfirmationPassword.value,
        AccountType: form.AccountType.value,
        Password: form.Password.value,
        Status: form.Status.value,
        RoleId: form.Role.value
      };
      await userService.createNew(newUser).then((res) => {
        let { message } = this.state;
        message.type = "success";
        message.content = "Add new user successful !";
        this.setState({
          isRedirect: true,
          message,
        });
      });
    } else {
    }
  };


  render() {
    const {
      FullName,
      Birthday,
      Email,
      Password,
      ConfirmationPassword,
      PhoneNumber,
      Status,
      AccountType,
      Role
    } = this.state.form;
    const { isRedirect, message, roles } = this.state;
    if (isRedirect) {
      return (
        <Redirect
          to={{
            pathname: "/admin/users",
            state: { message },
          }}
        />
      );
    }
    return (
      <>
        <div className="wrapper main-wrapper row" style={{}}>
          <div className="col-xs-12">
            <div className="page-title">
              <div className="pull-left">
                {/* PAGE HEADING TAG - START */}
                <h1 className="title">Create New User</h1>
                {/* PAGE HEADING TAG - END */}
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* MAIN CONTENT AREA STARTS */}
          <div className="col-lg-12">
            <section className="box ">
              <header className="panel_header">
                <h2 className="title pull-left">Create</h2>
                <div className="actions panel_actions pull-right">
                  <a className="box_toggle fa fa-chevron-down" />
                  <a
                    className="box_setting fa fa-cog"
                    data-toggle="modal"
                    href="#section-settings"
                  />
                  <a className="box_close fa fa-times" />
                </div>
              </header>
              <div className="content-body">
                <div id="general_validate">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="form-group">
                        <label className="form-label">FullName</label>
                        <div className="controls">
                          <input
                            type="text"
                            className="form-control"
                            name="FullName"
                            required
                            value={FullName.value}
                            onChange={(ev) => this._setValue(ev, "FullName")}
                          />
                          {FullName.err !== "" ? (
                            FullName.err === "*" ? (
                              <ErrorForm message="FullName cannot be empty" />
                            ) : (
                              <ErrorForm message={FullName.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <span className="desc">e.g. "some@example.com"</span>
                        <div className="controls">
                          <input
                            type="email"
                            className="form-control"
                            required
                            name="Email"
                            value={Email.value}
                            onChange={(ev) => this._setValue(ev, "Email")}
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
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Password</label>
                        <span className="desc">e.g. "hello123"</span>
                        <div className="controls">
                          <input
                            type="password"
                            className="form-control"
                            name="Password"
                            required
                            value={Password.value}
                            onChange={(ev) => this._setValue(ev, "Password")}
                          />
                          {Password.err !== "" ? (
                            Password.err === "*" ? (
                              <ErrorForm message="Password cannot be empty" />
                            ) : (
                              <ErrorForm message={Password.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Confirm Password</label>
                        <span className="desc">e.g. "hello123"</span>
                        <div className="controls">
                          <input
                            type="password"
                            className="form-control"
                            name="ConfirmationPassword"
                            required
                            value={ConfirmationPassword.value}
                            onChange={(ev) =>
                              this._setValue(ev, "ConfirmationPassword")
                            }
                          />
                          {ConfirmationPassword.err !== "" ? (
                            ConfirmationPassword.err === "*" ? (
                              <ErrorForm message="ConfirmationPassword cannot be empty" />
                            ) : (
                              <ErrorForm message={ConfirmationPassword.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Roles</label>
                        <div className="controls">
                          <select
                            name="Role"
                            required
                            className="form-control"
                            onChange={(ev) => this._setValue(ev, 'Role')}
                          >
                            <option value="">Choose Role</option>
                            {
                                roles.map((role) => {
                                    return(
                                        <option value={role.Id}>{role.Description}</option>
                                    )
                                })
                            }
                          </select>
                          {Role.err !== "" ? (
                            Role.err === "*" ? (
                              <ErrorForm message="Role cannot be empty" />
                            ) : (
                              <ErrorForm message={Role.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-6">
                      <div className="form-group">
                        <label className="form-label">Birthday</label>
                        <div className="controls">
                          <input
                            type="date"
                            className="form-control"
                            name="Birthday"
                            required
                            value={Birthday.value}
                            onChange={(ev) => this._setValue(ev, "Birthday")}
                          />
                          {Birthday.err !== "" ? (
                            Birthday.err === "*" ? (
                              <ErrorForm message="Birthday cannot be empty" />
                            ) : (
                              <ErrorForm message={Birthday.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <div className="controls">
                          <input
                            type="text"
                            className="form-control"
                            name="PhoneNumber"
                            required
                            value={PhoneNumber.value}
                            onChange={(ev) => this._setValue(ev, "PhoneNumber")}
                          />
                          {PhoneNumber.err !== "" ? (
                            PhoneNumber.err === "*" ? (
                              <ErrorForm message="PhoneNumber cannot be empty" />
                            ) : (
                              <ErrorForm message={PhoneNumber.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Account Type</label>
                        <div className="controls">
                          <select
                            name="AccountType"
                            required
                            className="form-control"
                            value={AccountType.value}
                            onChange={(ev) => this._setValue(ev, "AccountType")}
                          >
                            <option value="">Choose Type</option>
                            <option value={1}>Free</option>
                            <option value={2}>Premium</option>
                          </select>
                          {AccountType.err !== "" ? (
                            AccountType.err === "*" ? (
                              <ErrorForm message="AccountType cannot be empty" />
                            ) : (
                              <ErrorForm message={AccountType.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Status</label>
                        <div className="controls">
                          <select
                            name="Status"
                            required
                            value={Status.value}
                            className="form-control"
                            onChange={(ev) => this._setValue(ev, "Status")}
                          >
                            <option value="">Choose Status</option>
                            <option value={1}>Active</option>
                            <option value={0}>Deactive</option>
                          </select>
                          {Status.err !== "" ? (
                            Status.err === "*" ? (
                              <ErrorForm message="Status cannot be empty" />
                            ) : (
                              <ErrorForm message={Status.err} />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12">
                      <div className="pull-right ">
                        <button
                          onClick={this.onSaveNewUser}
                          className="btn btn-primary"
                        >
                          Save
                        </button>
                        <button type="button" className="btn">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* MAIN CONTENT AREA ENDS */}
        </div>
      </>
    );
  }
}
