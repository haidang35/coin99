import React, { Component } from "react";
import { LogIn } from "../Components/Login/LogIn";



export class Accounts extends Component {
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