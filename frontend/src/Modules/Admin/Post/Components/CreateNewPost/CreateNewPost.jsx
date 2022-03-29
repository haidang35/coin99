import React, { Component } from "react";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./NewPost.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { BASE_URL_SERVER } from "../../../../../Configs/server";
import postService from "../../Services/PostService";
import postCategoryService from "../../../PostCategory/Services/PostCategoryService";
import Form from "../../../../../Shared/Components/Form";
import { ErrorForm } from "../../../../../Shared/Components/ErrorForm";
import { currentUserId } from "../../../Auth/Services/AuthService";

export class CreateNewPost extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        title: "",
        desc: "",
        categoryId: "",
        status: "",
        thumbnail: "",
      }),
      content: "",
      postCategoryList: [],
      isRedirectSuccess: false,
    };
  }

  componentDidMount() {
    this.getPostCategoryList();
  }

  handleChangeNewPost = (event) => {
    const { name, value } = event.target;
    let { form } = this.state;
    form[[name]] = value;
    this.setState({ form });
  };

  handleChangeFile = (event) => {
    const file = event.target.files[0];
    let { form } = this.state;
    form.thumbnail.value = file;
    this.setState({ form });
  }

  getPostCategoryList = async () => {
    await postCategoryService.getList().then((res) => {
      this.setState({
        postCategoryList: res.data,
      });
    });
  };

  publishNewPost = async () => {
    this._validateForm();
    console.log(this.state.form);
    if (this._isFormValid()) {
      let { form, content } = this.state;
      let formData = new FormData();
      formData.append("fileUpload", form.thumbnail['value'], "hello.png");
      let dataConverted = {
        Title: form.title.value,
        Thumbnail: "",
        Body: content,
        CategoryId: form.categoryId.value,
        Status: form.status.value,
        AuthorId: currentUserId,
        Description: form.desc.value,
        PostType: 1,
      };

      await postService
        .uploadThumbnail(formData)
        .then(async (res) => {
          dataConverted.Thumbnail = res.data;
          await postService
            .createNew(dataConverted)
            .then((res) => {
              console.log(res.data);
              this.setState({
                isRedirectSuccess: true,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  render() {
    const { title, desc, categoryId, status, thumbnail } = this.state.form;
    const { isRedirectSuccess, postCategoryList, content } = this.state;
    if (isRedirectSuccess) {
      return <Redirect to={"/admin/post"} />;
    }
    return (
      <>
        <div className=" wrapper main-wrapper row">
          <div className="col-md-8">
            <div className="card">
              <div className="row" style={{ padding: "50px 20px" }}>
                <div className="col-md-12">
                  <h2>Create New Post</h2>
                </div>
                <div className="col-md-12">
                  <div className="mb-20">
                    <label>Title</label>
                    <input
                      type="text"
                      value={title.value}
                      name="title"
                      required
                      onChange={(ev) => this._setValue(ev, "title")}
                      className="form-control"
                    />
                    {title.err === "*" ? (
                      <ErrorForm message="Title cannot be empty" />
                    ) : <ErrorForm message={title.err} /> ? (
                      ""
                    ) : (
                      ""
                    )}
                  </div>

                  {/* </div> */}
                </div>
                <div className="col-md-12 mb-30">
                  <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onReady={(editor) => {}}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      this.setState({ content: data });
                    }}
                    onBlur={(event, editor) => {}}
                    onFocus={(event, editor) => {}}
                  />
                </div>
                <div className="col-md-12">
                  <label>Description</label>
                  <input
                    type="text"
                    name="desc"
                    className="form-control"
                    required
                    onChange={(ev) => this._setValue(ev, "desc")}
                    value={desc.value}
                  />
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
                <label>Thumbnail</label>
                <input
                  type="file"
                  name="thumbnail"
                  required
                  onChange={this.handleChangeFile}
                  className="form-control"
                />
                {thumbnail.err === "*" ? (
                  <ErrorForm message="Thumbnail cannot be empty" />
                ) : <ErrorForm message={thumbnail.err} /> ? (
                  ""
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  name="categoryId"
                  className="form-control"
                  value={categoryId.value}
                  onChange={(ev) => this._setValue(ev, "categoryId")}
                  required
                >
                  <option value={""}>Select category</option>
                  {postCategoryList.map((category) => {
                    return (
                      <option key={category.Id} value={category.Id}>
                        {category.Name}
                      </option>
                    );
                  })}
                </select>
                {categoryId.err === "*" ? (
                  <ErrorForm message="Category cannot be empty" />
                ) : <ErrorForm message={categoryId.err} /> ? (
                  ""
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  required
                  className="form-control"
                  value={status.value}
                  onChange={(ev) => this._setValue(ev, "status")}
                >
                  <option value={""}>Choose Status</option>
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
              <div>
                <button
                  className="btn btn-primary"
                  onClick={this.publishNewPost}
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
