import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";



export class Accounts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <BrowserRouter>
              <Login />
              <Switch>
                 <Route path="/register" exact>
                     <Register />

                 </Route>
              </Switch>
            
            </BrowserRouter>
            
            
        )
    }
}