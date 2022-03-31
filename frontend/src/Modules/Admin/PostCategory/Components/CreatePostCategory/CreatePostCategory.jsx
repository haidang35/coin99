import axios from "axios";
import React, { Component } from "react";

export class CreatePostCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        Name: "",
        Description: "",
        CategoryType: 1,
        Status: 1,
      },
    };
  }

  handleChangeNewPostCategory = (event) => {
    const { name, value } = event.target;
    let { form } = this.state;
    form[[name]] = value;
    this.setState({ form });
  };

  onPublishNewPostCategory = async () => {
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
    const { name, description, categoryType, status } = this.state.form;
    return (
      <>
        <div className=" wrapper main-wrapper row">
          <div className="col-md-8">
            <div className="card">
              <div className="row" style={{ padding: "50px 20px" }}>
                <div className="col-md-12">
                  <h2>Update New Post Category</h2>
                </div>
                <div className="col-md-12">
                  <div className="mb-20">
                    <label>Name</label>
                    <input
                      type="text"
                      value={name}
                      name="Name"
                      onChange={this.handleChangeNewPostCategory}
                      className="form-control"
                    />
                  </div>

                  {/* </div> */}
                </div>

                <div className="col-md-12">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="Description"
                    value={description}
                    onChange={this.handleChangeNewPostCategory}
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="form-group">
                <label>Category Type</label>
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
