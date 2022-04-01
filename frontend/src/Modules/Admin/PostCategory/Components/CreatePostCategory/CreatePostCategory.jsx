import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ErrorForm } from "../../../../../Shared/Components/ErrorForm";
import Form from "../../../../../Shared/Components/Form";
import postCategoryService from "../../Services/PostCategoryService";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
export class CreatePostCategory extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        Name: "",
        Description: "",
        CategoryType: 1,
        Status: 1,
      }),
      isRedirect: false,
      isLoading: false
    };
  }

  handleChangeNewPostCategory = (event) => {
    const { name, value } = event.target;
    let { form } = this.state;
    form[[name]] = value;
    this.setState({ form });
  };

  onPublishNewPostCategory = async () => {
    this.setState({
      isLoading: true
    });
    const { form } = this.state;
    const data = {
      Name: form.Name.value,
      CategoryType: form.CategoryType.value,
      Status: form.Status.value,
      Description: form.Description.value
    } 
    await postCategoryService.createNew(data)
      .then((res) => {
        this.setState({
          isRedirect: true,
          isLoading: false
        });
      })  
  };

  render() {
    const { Name, Description, CategoryType, Status } = this.state.form;
    const { isRedirect, isLoading } = this.state;
    if(isRedirect) {
      return <Redirect to="/admin/post-categories" />
    }
    return (
      <>
        <div className=" wrapper main-wrapper row">
        {isLoading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : (
            ""
          )}
          <div className="col-md-8">
            <div className="card">
              <div className="row" style={{ padding: "50px 20px" }}>
                <div className="col-md-12">
                  <h2>Create New Post Category</h2>
                </div>
                <div className="col-md-12">
                  <div className="mb-20">
                    <label>Name</label>
                    <input
                      type="text"
                      value={Name.value}
                      name="Name"
                      required
                      onChange={(ev) => this._setValue(ev, "Name")}
                      className="form-control"
                    />
                    {Name.err === "*" ? (
                      <ErrorForm message="Name cannot be empty" />
                    ) : <ErrorForm message={Name.err} /> ? (
                      ""
                    ) : (
                      ""
                    )}
                  </div>

                  {/* </div> */}
                </div>

                <div className="col-md-12">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="Description"
                    required
                    value={Description.value}
                    onChange={(ev) => this._setValue(ev, "Description")}
                    rows={5}
                  ></textarea>
                  {Description.err === "*" ? (
                    <ErrorForm message="Description cannot be empty" />
                  ) : <ErrorForm message={Description.err} /> ? (
                    ""
                  ) : (
                    ""
                  )}
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
                  required
                  value={CategoryType.value}
                  onChange={(ev) => this._setValue(ev, "CategoryType")}
                >
                  <option value={1}>Free</option>
                  <option value={2}>Premium</option>
                </select>
                {CategoryType.err === "*" ? (
                  <ErrorForm message="CategoryType cannot be empty" />
                ) : <ErrorForm message={CategoryType.err} /> ? (
                  ""
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  className="form-control"
                  name="Status"
                  value={Status.value}
                  required
                  onChange={this.handleChangeNewPostCategory}
                >
                  <option value={1}>Active</option>
                  <option value={0}>Deactive</option>
                </select>
                {Status.err === "*" ? (
                  <ErrorForm message="Status cannot be empty" />
                ) : <ErrorForm message={Status.err} /> ? (
                  ""
                ) : (
                  ""
                )}
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
