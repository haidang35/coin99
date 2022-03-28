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
        <form action="index.html" method="post">
          <h1>Sign Up</h1>
          <fieldset>
            <legend>
              <span>Your basic info</span>
            </legend>
            <label htmlFor="name">
              Name:
            <input type="text" id="name" name="user_name" />
            </label>
            <label htmlFor="mail">
              Email:
            <input type="email" id="mail" name="user_email" />
            </label>
            <label htmlFor="mail">
              SDT:
            <input type="text" id="sdt" name="sdt" />
            </label>
            <label htmlFor="password">
              Password:
            <input type="password" id="password" name="user_password" />
            </label>
            <label htmlFor="password">
              Confirm Password :
            <input type="password" id="Confirm" name="Confirm" />
            </label>
           <div>
            <label>Age:</label>
            <input
              type="radio"
              id="under_13"
              defaultValue="under_13"
              name="user_age"
            />
            <label htmlFor="under_13" className="light">
              Under 13
            </label>
            <br />
            <input type="radio" id="over_13" defaultValue="over_13" name="user_age" />
            <label htmlFor="over_13" className="light">
              13 or older
            </label>
            </div>
          </fieldset>
          <button type="submit">Sign Up</button>
        </form>
      </>
    )
  }
}
