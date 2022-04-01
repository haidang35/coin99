import React, { Component } from "react";
import { BlogContent } from "./Components/BlogContent/BlogContent";
import { BlogDetails } from "./Components/BlogDetails";
import { Slider  } from "../Shared/Components/Slider/Slider";

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
            </>
        )
    }

    
}