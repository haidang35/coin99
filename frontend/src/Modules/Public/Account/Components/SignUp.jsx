import React, { Component } from "react";
import "../../Account/Components/SignUp.scss"



export class SingUp extends Component {
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
                id="name"
                className="fadeIn second"
                name="name"
                placeholder="Name"
              />
              <input
                type="text"
                id="sdt"
                className="fadeIn third"
                name="sdt"
                placeholder="SDT"
              />
              <input
                type="text"
                id="gmai"
                className="fadeIn second"
                name="gmai"
                placeholder="Gmail"
              />
              <input
                type="text"
                id="password"
                className="fadeIn third"
                name="password"
                placeholder="Password"
              />
              <input
                type="text"
                id="confirm password"
                className="fadeIn third"
                name="confirm password"
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
