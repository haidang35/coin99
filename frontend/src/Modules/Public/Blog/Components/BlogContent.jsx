import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AUTH_TOKEN, BASE_URL_SERVER } from "../../../../Configs/server";
import publicService from "../../Shared/Services/PublicService";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import authService from "../../../Admin/Auth/Services/AuthService";

export class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      categoriesList: [],
      isRedirect: false,
      postDetails: "",
      isOpenDiaglog: false,
      isRedirectToLogin: false,
    };
  }

  componentDidMount() {
    this.getPostList();
    this.getCategoriesList();
  }

  getCategoriesList = async () => {
    await publicService.getCategoriesList().then((res) => {
      this.setState({
        categoriesList: res.data,
      });
      console.log(res.data);
    });
  };

  getPostList = async () => {
    await publicService.getPostList().then((res) => {
      this.setState({
        postList: res.data,
      });
      console.log(res.data);
    });
  };

  onViewBlogDetails = async (post) => {
    let isRedirect = true;
    let { isOpenDiaglog } = this.state;
    if (post.PostType === 2) {
      const authToken = localStorage.getItem("access_token");
      if (authToken === "" || authToken === null) {
        isRedirect = false;
        isOpenDiaglog = true;
      }else {
        await authService.getAuthUser(authToken)
            .then((res) => {
                const userData = res.data;
                localStorage.setItem('current_user_id', userData.Id);
                if(userData.AccountType === 2) {
                    isRedirect = true;
                }else {
                    isRedirect = false;
                    isOpenDiaglog = true;
                }
        });
      }
    }
    this.setState({
      postDetails: post,
      isRedirect,
      isOpenDiaglog,
    });
  };

  handleClose = () => {
    this.setState({
      isOpenDiaglog: false,
    });
  };

  onUpgradeAccount = () => {
    this.setState({
      isRedirectToLogin: true,
    });
  };

  render() {
    const {
      postList,
      categoriesList,
      isRedirect,
      postDetails,
      isOpenDiaglog,
      isRedirectToLogin,
    } = this.state;
    if (isRedirect) {
      return <Redirect to={`/${postDetails.Slug}`} />;
    }

    if (isRedirectToLogin) {
      return <Redirect to={"/signin"} />;
    }
    return (
      <>
        <div className="blog_wrapper">
          <div className="container">
            <div className="row">
              <main className="col-sm-8">
                {postList.map((post, index) => {
                  return (
                    <div key={index} className="post post_list post_list_lg">
                      <div className="post_img">
                        <img src={BASE_URL_SERVER + post.Thumbnail} />
                      </div>
                      <div className="post_body">
                        <div className="post-cat">{post.Category.Name}</div>
                        <h3
                          className="post_heading"
                          onClick={() => this.onViewBlogDetails(post)}
                          style={{ cursor: "pointer" }}
                        >
                          <strong>{post.Title}</strong>
                        </h3>
                        {post.PostType === 2 ? (
                          <button
                            style={{ marginBottom: "1rem" }}
                            className="btn btn-sm btn-warning"
                          >
                            PREMIUM
                          </button>
                        ) : (
                          ""
                        )}
                        <p>{post.Description}</p>
                        <div className="post_meta">
                          <span className="post_date">
                            <i className="fa fa-calendar-o" />
                            <time>{post.CreateAt}</time>
                          </span>
                          <span className="comment_link">
                            <a href="#">
                              <i className="fa fa-comment-o" />
                            </a>
                          </span>
                        </div>
                      </div>
                      <Dialog
                        open={isOpenDiaglog}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Notification"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Bạn phải có tài khoản Premium mới có thể xem được
                            bài viết này
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.handleClose}>Cancel</Button>
                          <Button onClick={this.onUpgradeAccount} autoFocus>
                            Upgrade
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  );
                })}
                {/* /.End of post list */}
                <ul className="pagination">
                  <li className="disabled">
                    <a href="#">⇽</a>
                  </li>
                  <li className="active">
                    <a href="#">
                      1 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li className="page-numbers">
                    <span>...</span>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">⇾</a>
                  </li>
                </ul>
              </main>
              <aside className="col-sm-4 p_l_40">
                <div className="widget">
                  <h4 className="widget_title">Search here</h4>
                  <form className="sidebar-form navbar-form" role="search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        name="q"
                      />
                      <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                          <i className="glyphicon glyphicon-search" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="widget">
                  <h4 className="widget_title">Recent Post</h4>
                  <div className="post post_list post_list_sm">
                    <div className="post_img">
                      <a href="#">
                        <img
                          src="../../../../AssetsHome/assets/img/blog/100x75-1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post_body">
                      <h4 className="post_heading">
                        <a href="#">
                          Nunc in ante vulputate est fermentum faucibus.
                        </a>
                      </h4>
                      <div className="post_meta">
                        <span className="comment_link">
                          <a href="#">
                            <i className="fa fa-comment-o" />9 Comments
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="post post_list post_list_sm">
                    <div className="post_img">
                      <a href="#">
                        <img
                          src="../../../../AssetsHome/assets/img/blog/100x75-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post_body">
                      <h4 className="post_heading">
                        <a href="#">
                          Ut et ipsum nec nulla porttitor ullamcorper.
                        </a>
                      </h4>
                      <div className="post_meta">
                        <span className="comment_link">
                          <a href="#">
                            <i className="fa fa-comment-o" />9 Comments
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="post post_list post_list_sm">
                    <div className="post_img">
                      <a href="#">
                        <img
                          src="../../../../AssetsHome/assets/img/blog/100x75-3.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="post_body">
                      <h4 className="post_heading">
                        <a href="#">
                          Fusce ac tortor et lacus volutpat euismod .
                        </a>
                      </h4>
                      <div className="post_meta">
                        <span className="comment_link">
                          <a href="#">
                            <i className="fa fa-comment-o" />9 Comments
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <h4 className="widget_title">My Social link</h4>
                  <div className="social_icon">
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#" className="youtube">
                      <i className="fa fa-youtube-play" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="widget">
                  <div className="widget_banner">
                    <img
                      src="../../../../AssetsHome/assets/img/ad-300x250-1.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                </div>
                <div className="widget">
                  <h4 className="widget_title">Categories</h4>

                  {categoriesList.map((category, index) => {
                    return (
                      <ul className="widget_category">
                        <li>#{category.Name}</li>
                      </ul>
                    );
                  })}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </>
    );
  }
}
