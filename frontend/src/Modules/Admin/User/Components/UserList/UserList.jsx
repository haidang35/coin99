import { Alert, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
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
      isOpenDiaglog: false
    };
  }

  componentDidMount() {
    this.getUserList();
    this.getMessage();
    this.getUserListId();
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


  getUserListId = async () => {
    const id = this.props.match.params.id;
    console.log(id);
    await userService
      .getList(id)
      .then((res) => {
        console.log(res.data);
        this.setState({
          id: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onDeleteUser = async (id) => {
    let { message } = this.state;
    await userService.deleteUser(id).then((res) => {
      message.type = "success";
      message.content = "Delete user successful !";
      this.setState({ message });
      this.getUserListId();
    });
  }

  handleClose = () => {
    this.setState({
      isOpenDiaglog: false
    });
  }

  handleOpen = () => {
    this.setState({
      isOpenDiaglog: true
    });
  }



  render() {
    const { userList, message, isOpenDiaglog } = this.state;
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
                                <td>
                                  <button onClick={() => this.handleOpen} className="btn btn-sm btn-danger" > Delete</button>
                                  <Dialog
                                    open={isOpenDiaglog}
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                  >
                                    <DialogTitle id="alert-dialog-title">
                                      {"Use Google's location service?"}
                                    </DialogTitle>
                                    <DialogContent>
                                      <DialogContentText id="alert-dialog-description">
                                        Are you sure delete post 
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button onClick={this.handleOpen}>
                                        Disagree
                                      </Button>
                                      <Button onClick={() => this.onDeleteUser(user.Id)} autoFocus>
                                        Agree
                                      </Button>
                                    </DialogActions>
                                  </Dialog>
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
