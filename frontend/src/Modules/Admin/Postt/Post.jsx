import React, { Component } from "react";
import { PostList } from "./Components/PostList";

export class Post extends Component {
    constructor(props){
        super(props);
        this.state ={}
    }
    render(){
        return(
            <>
            <PostList />
            
            </>
        )
    }
}