import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { AUTH_TOKEN, BASE_URL_SERVER } from "../../../../../Configs/server";
import publicService from "../../../Shared/Services/PublicService";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import authService from "../../../../Admin/Auth/Services/AuthService";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./BlogContent.scss";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import { PaginationItem } from "@mui/material";

export class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      categoriesList: [],
      recentPosts: [],
      isRedirect: false,
      postDetails: "",
      isOpenDiaglog: false,
      isRedirectToLogin: false,
      isLoading: false,
      isChangePage: false,
      page: 0,
      totalPage: 0
    };
  }

  componentDidMount() {
    this.getPostList();
    this.getCategoriesList();
    this.getRecentPosts();
  }

  getCategoriesList = async () => {
    await publicService.getCategoriesList().then((res) => {
      this.setState({
        categoriesList: res.data,
      });
      console.log(res.data);
    });
  };

  getPostList = async (page = 1) => {
    this.setState({
      isLoading: true,
    });
    const params =  new URLSearchParams(window.location.search);
    page = params.get('page') ?? page;
    await publicService.getPostList(page).then((res) => {
      this.setState({
        postList: res.data.Data,
        isLoading: false,
        page: res.data.CurrentPage,
        totalPage: res.data.TotalPage
      });
      console.log(res.data);
    });
  };

  getRecentPosts = async () => {
    await publicService.getRecentPosts().then((res) => {
      this.setState({
        recentPosts: res.data,
      });
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
      } else {
        await authService
          .getAuthUser(authToken)
          .then((res) => {
            const userData = res.data;
            localStorage.setItem("current_user_id", userData.Id);
            if (userData.AccountType === 2) {
              isRedirect = true;
            } else {
              isRedirect = false;
              isOpenDiaglog = true;
            }
          })
          .catch((err) => {
            this.setState({
              isOpenDiaglog: true,
            });
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

  handleChangePage = async (event, value) => {
    this.getPostList(value);
  };

  render() {
    const {
      postList,
      categoriesList,
      isRedirect,
      postDetails,
      isOpenDiaglog,
      isRedirectToLogin,
      recentPosts,
      isLoading,
      isChangePage,
      page,
      totalPage
    } = this.state;
    if (isRedirect) {
      return <Redirect to={`/${postDetails.Slug}`} />;
    }

    if (isChangePage) {
      return <Redirect to={`/blog?page=${page}`} />;
    }
    const hasAccessToken =
      localStorage.getItem("access_token") !== "" &&
      localStorage.getItem("access_token") !== null;
    if (isRedirectToLogin && !hasAccessToken) {
      return <Redirect to={"/signin"} />;
    } else if (isRedirectToLogin && hasAccessToken) {
      return <Redirect to={"/Lending"} />;
    }
    return (
      <>
        <div id="blog-content">
          <div
            className="page_header"
            data-parallax-bg-image="assets/img/1920x650-3.jpg"
            data-parallax-direction=""
            style={{
              position: "relative",
              background: "transparent",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <div
              className="parallax-inner"
              style={{
                position: "absolute",
                backgroundImage:
                  "url(https://images.pexels.com/photos/2874066/pexels-photo-2874066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: 350,
                transform: "translate3d(0px, 0px, 0px)",
                transition: "transform 100ms ease 0s",
                zIndex: -1,
              }}
            />
            <div className="header-content">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                    <div className="haeder-text">
                      <h1>Blog</h1>
                      <p>
                        Synthesize information about the coin market, new news
                        about the coin market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog_wrapper">
            <div className="container">
              <div className="row">
                <main className="col-sm-8">
                  {isLoading ? (
                    <Box sx={{ width: "100%" }}>
                      <Stack spacing={1}>
                        <Skeleton variant="text" />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton
                          variant="rectangular"
                          width={300}
                          height={200}
                        />
                      </Stack>
                      <Stack spacing={1}>
                        <Skeleton variant="text" />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton
                          variant="rectangular"
                          width={300}
                          height={200}
                        />
                      </Stack>
                      <Stack spacing={1}>
                        <Skeleton variant="text" />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton
                          variant="rectangular"
                          width={300}
                          height={200}
                        />
                      </Stack>
                    </Box>
                  ) : (
                    ""
                  )}
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
                              onClick={() => this.onViewBlogDetails(post)}
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
                  <div className="pagination">
                    <Pagination
                      page={page}
                      size="large"
                      count={totalPage}
                      onChange={this.handleChangePage}
                      renderItem={(item) => (
                        <PaginationItem
                          component={Link}
                          to={`/blog${
                            item.page === 1 ? "" : `?page=${item.page}`
                          }`}
                          {...item}
                        />
                      )}
                    />
                  </div>
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
                    {isLoading ? (
                      <Box sx={{ width: 300 }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                      </Box>
                    ) : (
                      ""
                    )}
                    {recentPosts.map((post) => {
                      return (
                        <div className="post post_list post_list_sm">
                          <div className="post_img">
                            <a href="#">
                              <img
                                src={BASE_URL_SERVER + post.Thumbnail}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="post_body">
                            <h4 className="post_heading">
                              <a href={`/${post.Slug}`}>{post.Title}</a>
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
                      );
                    })}
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
        </div>
      </>
    );
  }
}
