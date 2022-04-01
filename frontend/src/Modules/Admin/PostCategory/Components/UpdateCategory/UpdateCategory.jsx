import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ErrorForm } from "../../../../../Shared/Components/ErrorForm";
import Form from "../../../../../Shared/Components/Form";
import postCategoryService from "../../Services/PostCategoryService";



class UpdateCategory extends Form {
  constructor(props) {
    super(props);
    this.state = {
      CategoryDetails: [],
      form: this._getInitFormData({
        desc: "",
        categoryType: "",
        status: "",
        name: ""
      }),
    }
  }
  componentDidMount = () => {
    this.getCategoryDetails()
  }
  getCategoryDetails = async () => {
    const categoryId = this.props.match.params.id;
    let { form } = this.state;
    await postCategoryService
      .getCategoryDetail(categoryId)
      .then((res) => {
        const { Name, Status, Description, CategoryType } =
          res.data;
        console.log(Name);
        this._fillForm({
          name: Name,
          desc: Description,
          status: Status,
          categoryType: CategoryType
        })

      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleChangeUpdatePostCategory = (event) => {
    const { name, value } = event.target;
    let { form } = this.state;
    form[[name]] = value;
    this.setState({ form });
  }
  updateCategory = async () => {
    this._validateForm();
    if (this._isFormValid) {
      let { form,categoryType, name, desc, status } = this.state;
      const categoryId = this.props.match.params.id;
      let dataConverted = {
        Name: form.name.value,
        Description: form.desc.value,
        CategoryType: form.categoryType.value,
        Status: form.status.value,
      };
      await postCategoryService
        .updateDetails(categoryId, dataConverted)
        .then((res) => {
          console.log(res.data);
          this.setState({
            isRedirectSuccess: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }


  render() {

    const { name, desc, status, categoryType } = this.state.form;
    console.log('name&value', name, desc)
    return (
      <>
        <div className=" wrapper main-wrapper row">
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
                      value={name.value}
                      name="name"
                      required
                      onChange={(ev) => this._setValue(ev, "name")}
                      className="form-control"
                    />
                    {name.err === "*" ? (
                      <ErrorForm message="Name cannot be empty" />
                    ) : <ErrorForm message={name.err} /> ? (
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
                    name="desc"
                    required
                    value={desc.value}
                    onChange={(ev) => this._setValue(ev, "desc")}
                    rows={5}
                  ></textarea>
                  {desc.err === "*" ? (
                    <ErrorForm message="Description cannot be empty" />
                  ) : <ErrorForm message={desc.err} /> ? (
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
                  name="categoryType"
                  required
                  onChange={(ev) => this._setValue(ev, "categoryType")}
                >
                  <option value={1}>Free</option>
                  <option value={2}>Premium</option>
                </select>
                {categoryType.err === "*" ? (
                  <ErrorForm message="Category Type cannot be empty" />
                ) : <ErrorForm message={categoryType.err} /> ? (
                  ""
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  className="form-control"
                  name="status"
                  required
                  onChange={(ev) => this._setValue(ev, "status")}
                >
                  <option value={1}>Active</option>
                  <option value={0}>Deactive</option>
                </select>
                {status.err === "*" ? (
                  <ErrorForm message="Status cannot be empty" />
                ) : <ErrorForm message={status.err} /> ? (
                  ""
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary"
                  onClick={this.updateCategory}
                >
                  Update
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(UpdateCategory);