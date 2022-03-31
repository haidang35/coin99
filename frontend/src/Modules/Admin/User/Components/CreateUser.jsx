import axios from "axios";
import React, { Component } from "react";

export class CreatUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        FullName: "",
        Birthday: "",
        Email: "",
        PhoneNumber: "",
        AccountType: 1,
        Password:"",
        Status:1,
      },
    };
  }

  handleChangeNewUser = (event) => {
    const { name, value } = event.target;
    let { form } = this.state;
    form[[name]] = value;
    this.setState({ form });
  };

  onPublishNewUser = async () => {
    const { form } = this.state;
    await axios
      .post("https://coin99.azurewebsites.net/api/post-categories", form)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { name, description, FullName, Birthday, Email,PhoneNumber,AccountType,Password, status } = this.state.form;
    return (
      <>
        <div className=" wrapper main-wrapper row">
          <div className="col-md-8">
            <div className="card">
              <div className="row" style={{ padding: "50px 20px" }}>
                <div className="col-md-12">
                  <h2>Create New User</h2>
                </div>
                <div className="col-md-12">
                  <div className="mb-20">
                    <label>FullName</label>
                    <input
                      type="text"
                      value={FullName}
                      name="FullName"
                      onChange={this.handleChangeNewUser}
                      className="form-control"
                    />
                  </div>

                  {/* </div> */}
                </div>

                <div className="col-md-12">
                  <label>Email</label>
                  <textarea
                    className="form-control"
                    name="Email"
                    value={Email}
                    onChange={this.handleChangeNewUser}
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="form-group">
                <label>Phone Number</label>
                <select
                  className="form-control"
                  name="CategoryType"
                  onChange={this.handleChangeNewPostCategory}
                >
                  <option value={1}>Free</option>
                  <option value={2}>Premium</option>
                </select>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  className="form-control"
                  name="Status"
                  onChange={this.handleChangeNewPostCategory}
                >
                  <option value={1}>Active</option>
                  <option value={0}>Deactive</option>
                </select>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  onClick={this.onPublishNewPostCategory}
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
