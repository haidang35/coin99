import React, { Component } from "react";
import { BlogContent } from "./Components/BlogContent";
import { BlogDetails } from "./Components/BlogDetails";

export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <>
            <BlogContent />
            <BlogDetails />
            </>
        )
    }

    
}