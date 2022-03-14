import React from "react";
import { Component } from "react";
import { Home } from "./Home/Home";
import styles from "./Shared/Styles/Public.scss";


export class Public extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
                <Home />
            </>
        )
    }
}