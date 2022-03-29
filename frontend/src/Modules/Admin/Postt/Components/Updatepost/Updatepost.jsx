import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { Component } from "react";

export class Updatepost extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <>
        <div className=" wrapper main-wrapper row">
          <div className="col-md-8">
            <div className="card">
              <div className="row" style={{ padding: "50px 20px" }}>
                <div className="col-md-12">
                  <h2>Update Post</h2>
                </div>
                <div className="col-md-12">
                  <div className="mb-20">
                    <label>Update</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Enter the title"
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-30">
                  <CKEditor
                    editor={ClassicEditor}
                    onReady={(editor) => { }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                    }}
                    onBlur={(event, editor) => { }}
                    onFocus={(event, editor) => { }}
                  />
                </div>
                <div className="col-md-12">
                  <label>Content</label>
                  <textarea
                    className="form-control"
                    name="description"
                    placeholder="Nhập nội dung "
                    rows={8}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="form-group">
                <label>UpDate</label>
                <div>
                  <div className="col-md-6" >
                    <div className="form-group">
                      <button>Save
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="col-md-6" >
                    <div className="form-group">
                      <button>Review
                      </button>
                    </div>
                  </div>
                </div>
                <input
                  type="file"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select name="status" className="form-control" >
                  <option>Choose Status</option>
                  <option value={1}>Active</option>
                  <option value={0}>Deactive</option>
                </select>
              </div>
              <div>
                <button
                  className="btn btn-primary"
                >
                  Up
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="form-group">
                <label>Định Dạng</label>
                <p>
                  <a>
                    <input class="iCheck" type="radio"></input>
                    Chuẩn
                  </a>
                </p>
                <p>
                  <a>
                    <input class="iCheck" type="radio"></input>
                    Đứng riêng
                  </a>
                </p>
                <p>
                  <a>
                    <input class="iCheck" type="radio"></input>
                    Hình Ảnh
                  </a>
                </p>
                <p>
                  <a>
                    <input class="iCheck" type="radio"></input>
                    Video
                  </a>
                </p>
                <p>
                  <a>
                    <input class="iCheck" type="radio"></input>
                    Trích Dẫn
                  </a>
                </p>
                <p>
                  <a>
                    <input class="iCheck" type="radio"></input>
                    Đường Dẫn
                  </a>
                </p>
                <p>
                  <a>
                    <input class="iCheck" type="radio"></input>
                    Bộ Sưu Tập
                  </a>
                </p>

              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}