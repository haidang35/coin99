import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BASE_URL_SERVER } from "../../../../Configs/server";
import postService, {
  isPostStatus,
  POST_STATUS,
} from "../Services/PostService";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TablePagination from "@mui/material/TablePagination";

export class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      message: {
        type: "",
        content: "",
      },
      search: "",
      isLoading: false,
      page: 0,
      rowsPerPage: 10,
    };
  }

  componentDidMount() {
    this.fetchPostListApi();
  }

  fetchPostListApi = async () => {
    this.setState({ isLoading: true });
    const { search } = this.state;
    await postService
      .getList(POST_STATUS.ACTIVE, search)
      .then((res) => {
        console.log(res.data);
        this.setState({
          postList: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onTrashPost = async (postId) => {
    const { message } = this.state;
    await postService
      .updateStatus(postId, POST_STATUS.DEACTIVE)
      .then((res) => {
        message.type = "success";
        message.content = "Trash post successful !";
        this.fetchPostListApi();
      })
      .catch((err) => {});
  };

  handleSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  onSearch = () => {
    this.fetchPostListApi();
  };

  handleChangePage = (event, newPage) => {
    this.setState({
      page: newPage
    });
  }

  handleChangeRowsPerPage = (event) => {
    this.setState({
      rowsPerPage: parseInt(event.target.value, 10)
    });
  }

  render() {
    const { message, search, isLoading, page, rowsPerPage } =
      this.state;

      let { postList } = this.state;
      postList = postList.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    
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
                <h2 className="title pull-left">Post List</h2>
                <div className="actions panel_actions pull-right">
                  <Link to={"/admin/newpost"}>
                    <button className="btn btn-sm btn-primary">
                      Create New
                    </button>
                  </Link>
                  <Link to={"/admin/posts/trash"}>
                    <button className="btn btn-sm btn-danger">Trash</button>
                  </Link>
                </div>
              </header>
              <div className="content-body">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group" style={{ display: "flex" }}>
                      <input
                        type="text"
                        name="search"
                        className="form-control"
                        value={search}
                        onChange={this.handleSearch}
                      />
                      <button
                        className="btn btn-sm btn-info"
                        onClick={this.onSearch}
                      >
                        Search
                      </button>
                    </div>
                  </div>
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
                          {isLoading ? (
                            <tr>
                              <td colSpan="8">
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    padding: "1rem",
                                  }}
                                >
                                  <CircularProgress />
                                </Box>
                              </td>
                            </tr>
                          ) : (
                            ""
                          )}

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
                                  {item.Status === 1 ? (
                                    <button className="btn btn-sm btn-success">
                                      Active
                                    </button>
                                  ) : (
                                    ""
                                  )}
                                </td>
                                <td>{item.CreateAt}</td>
                                <td>
                                  <Link to={`/admin/posts/${item.Id}`}>
                                    <button className="btn btn-sm btn-primary">
                                      Update
                                    </button>
                                  </Link>
                                  <button
                                    onClick={() => this.onTrashPost(item.Id)}
                                    className="btn btn-sm btn-danger"
                                  >
                                    Trash
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <TablePagination
                        component="div"
                        count={postList.length}
                        page={page}
                        onPageChange={this.handleChangePage}
                        rowsPerPage={rowsPerPage}
                        onRowsPerPageChange={this.handleChangeRowsPerPage}
                      />
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
