import React, { Component } from "react";
import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./NewPost.scss";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { BASE_URL_SERVER } from "../../../../../Configs/server";
export class CreateNewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: "",
        body: "",
        description: "",
        thumbnail: "",
        authorId: "",
        categoryId: "",
        status: "",
      },
      isRedirectSuccess: false,
    };
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
    form["thumbnail"] = file;
    this.setState({
      form,
    });
  };

  publishNewPost = async () => {
    let { form } = this.state;
    let formData = new FormData();
    formData.append("fileUpload", form.thumbnail, "hello.png");
    let dataConverted = {
      Title: form.title,
      Thumbnail: "",
      Body: form.body,
      CategoryId: form.categoryId,
      Status: form.status,
      Authorld: 1,
      Description: form.description,
      PostType: 1,
    };
    await axios
      .post(`${BASE_URL_SERVER}/api/posts/upload-thumbnail`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(async (res) => {
        console.log(res.data);
        dataConverted.Thumbnail = res.data;
        await axios
          .post(`${BASE_URL_SERVER}/api/posts`, dataConverted)
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
  };
  render() {
    const { title, body, description, thumbnail, categoryId, status } =
      this.state.form;
    const { isRedirectSuccess } = this.state;
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
                      value={title}
                      name="title"
                      onChange={this.handleChangeNewPost}
                      className="form-control"
                    />
                  </div>

                  {/* </div> */}
                </div>
                <div className="col-md-12 mb-30">
                  <CKEditor
                    editor={ClassicEditor}
                    data={body}
                    onReady={(editor) => {}}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      let { form } = this.state;
                      form["body"] = data;
                      this.setState({ form });
                    }}
                    onBlur={(event, editor) => {}}
                    onFocus={(event, editor) => {}}
                  />
                </div>
                <div className="col-md-12">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    onChange={this.handleChangeNewPost}
                    value={description}
                    rows={5}
                  ></textarea>
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
                  onChange={this.handleChangeFile}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  name="categoryId"
                  onChange={this.handleChangeNewPost}
                  value={categoryId}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <input
                  type="text"
                  name="status"
                  onChange={this.handleChangeNewPost}
                  value={status}
                  className="form-control"
                />
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
