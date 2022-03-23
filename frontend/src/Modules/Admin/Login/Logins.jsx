import React, { Component } from "react";
import { LogIn } from "./LogIn";
import { Register } from "./Register";

export class Logins extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <>
            <LogIn />
            </>
        )
    }
}