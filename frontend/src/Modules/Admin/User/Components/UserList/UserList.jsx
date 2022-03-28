import { Alert } from "@mui/material";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import userService from "../../Services/UserService";
import Stack from "@mui/material/Stack";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      message: {
        type: "",
        content: "",
      },
    };
  }

  componentDidMount() {
    this.getUserList();
    this.getMessage();
  }

  getMessage = () => {
    const stateLocation = this.props.location.state;
    if (typeof stateLocation !== "undefined") {
      this.setState({ message: stateLocation.message });
    }
  };

  getUserList = async () => {
    await userService
      .getList()
      .then((res) => {
        console.log(res.data);
        this.setState({
          userList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { userList, message } = this.state;
    return (
      <>
        <div class=" wrapper main-wrapper row">
          <div className="col-lg-12">
            {message.content !== "" && message.type !== "" ? (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity={message.type} style={{ fontSize: "18px" }}>
                  <strong>{message.content}</strong>
                </Alert>
              </Stack>
            ) : (
              ""
            )}
            <section className="box">
              <header className="panel_header">
                <h2 className="title pull-left">User List</h2>
                <div className="actions panel_actions pull-right">
                  <Link to="/admin/users/create">
                    <button className="btn btn-sm btn-primary">
                      Create New
                    </button>
                  </Link>
                </div>
              </header>
              <div className="content-body">
                <div className="row">
                  <div className="col-xs-12">
                    <div
                      className="table-responsive"
                      data-pattern="priority-columns"
                    >
                      <table
                        id="tech-companies-1"
                        className="table table-bordered table-striped"
                      >
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Fullname</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Created At</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {userList.map((user) => {
                            return (
                              <tr key={user.Id}>
                                <td>{user.Id}</td>
                                <td>{user.FullName}</td>
                                <td>{user.Email}</td>
                                <td>{user.PhoneNumber}</td>
                                <td>{user.CreatedAt}</td>
                                <td>
                                    <Link to={`/admin/users/${user.Id}`} className="btn btn-sm btn-primary">
                                        Edit
                                    </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(UserList);
