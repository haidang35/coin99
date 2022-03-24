import React, { Component } from "react";
import { SingUp } from "./Components/SignUp";


export class Account extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }
    render(){
        return(
            <>
            <SingUp />
            </>
        )
    }
}