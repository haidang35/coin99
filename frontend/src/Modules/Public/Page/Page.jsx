import React, { Component } from "react";
import { Footer } from "../Shared/Components/Layouts/Footer";
import { Buy } from "./Components/Buy";
import { Service } from "./Components/Service";

export class  Page extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }
    render(){
        return(
            <>
            <Buy />
            <Service />
            </>
        )
    }
}