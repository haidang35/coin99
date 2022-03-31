import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BASE_URL_SERVER } from "../../../../../Configs/server";
import { POST_STATUS } from "../../Services/PostService";
import postService from "../../Services/PostService";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export class TrashPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      message: {
        type: "",
        content: "",
      },
      isOpenDiaglog: false,
      chooseDeletePost: ''
    };
  }

  componentDidMount() {
    this.getTrashPostList();
  }

  getTrashPostList = async () => {
    await postService
      .getList(POST_STATUS.DEACTIVE)
      .then((res) => {
        console.log(res.data);
        this.setState({
          postList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onRestorePost = async (postId) => {
    let { message } = this.state;
    await postService.updateStatus(postId, POST_STATUS.ACTIVE).then((res) => {
      message.type = "success";
      message.content = "Restore post successful !";
      this.setState({ message });
      this.getTrashPostList();
    });
  };

  onDeletePost = async () => {
    let { message, chooseDeletePost } = this.state;
    await postService.delete(chooseDeletePost.Id).then((res) => {
      message.type = "success";
      message.content = "Delete post successful !";
      this.setState({ message });
      this.getTrashPostList();
    });
  };

  handleClose = () => {
    this.setState({
      isOpenDiaglog: false,
    });
  };

  handleOpen = (post) => {
    this.setState({
      isOpenDiaglog: true,
      chooseDeletePost: post
    });
  };

  render() {
    const { postList, message, isOpenDiaglog, chooseDeletePost } = this.state;
    return (
      <>
        <div className=" wrapper main-wrapper row">
          <div className="col-lg-12">
            {message.content !== "" ? (
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
                <h2 className="title pull-left">Trash List</h2>
                <div className="actions panel_actions pull-right">
                  <Link to={"/admin/posts"}>
                    <button className="btn btn-sm btn-primary">Back</button>
                  </Link>
                </div>
              </header>
              <div className="content-body">
                <div className="row">
                  <div className="col-md-12">
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
                            <th>ID</th>
                            <th>Thumbnail</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Authorld</th>
                            <th>Status</th>
                            <th>Created At</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {postList.map((item, index) => {
                            return (
                              <tr key={item.Id}>
                                <td>{item.Id}</td>
                                <td>
                                  <img src={BASE_URL_SERVER + item.Thumbnail} />
                                </td>
                                <td>{item.Title}</td>

                                <td>{item.Category.Name}</td>
                                <td>{item.Author.FullName}</td>
                                <td>
                                  {" "}
                                  {item.Status === 0 ? (
                                    <button className="btn btn-sm btn-danger">
                                      Deactive
                                    </button>
                                  ) : (
                                    ""
                                  )}
                                </td>
                                <td>{item.CreateAt}</td>
                                <td>
                                  <button
                                    onClick={() => this.onRestorePost(item.Id)}
                                    className="btn btn-sm btn-primary"
                                  >
                                    Restore
                                  </button>
                                  <button
                                    onClick={() => this.handleOpen(item)}
                                    className="btn btn-sm btn-danger"
                                  >
                                    Delete
                                  </button>
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
              Are you sure delete post {chooseDeletePost.Title}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Disagree</Button>
            <Button onClick={this.onDeletePost} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
