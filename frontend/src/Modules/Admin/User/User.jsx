import React, {Component} from "react";
import UserList from "./Components/UserList/UserList";

export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <>
                <UserList />
            </>
        )
    }
}