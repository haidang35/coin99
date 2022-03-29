import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { Component } from "react";
import "../Tests/Loading.scss";

export class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <>
        <div className="wrapper fadeInDown">
          <div id="formContent">

            <h2 className="active"> Sign Up </h2>

            <div className="fadeIn first">

            </div>

            <form>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="Name"
              />
              <input
                type="text"
                id="password"
                className="fadeIn third"
                name="login"
                placeholder="SDT"
              />
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="Gmail"
              />
              <input
                type="text"
                id="password"
                className="fadeIn third"
                name="login"
                placeholder="Password"
              />
              <input
                type="text"
                id="password"
                className="fadeIn third"
                name="login"
                placeholder=" Confirm Password" />
              <div>
                <input type="checkbox" />
                Đồng ý với điều khoản dịch vụ
              </div>

              <input type="submit" className="fadeIn fourth" />
            </form>


          </div>
        </div>

      </>
    )
  }
}