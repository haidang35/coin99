import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { BASE_URL_SERVER } from "../../../../Configs/server";
import authService from "../../../Admin/Auth/Services/AuthService";
import { CoinBar } from "../../Shared/Components/CoinBar/CoinBar";
import publicService from "../../Shared/Services/PublicService";

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [],
      relatedPosts: [],
      blog: "",
      isRedirect: false,
    };
  }

  componentDidMount() {
    this.getPostDetails();
    this.getCategoriesList();
    this.getRelatedPosts();
  }


  getCategoriesList = async () => {
    await publicService.getCategoriesList().then((res) => {
      this.setState({
        categoriesList: res.data,
      });
      console.log(res.data);
    });
  };

  getPostDetails = async () => {
    const { params } = this.props.match;
    let { isRedirect } = this.state;
    await publicService
      .getPostBySlug(params.slug)
      .then(async (res) => {
        this.setState({
          blog: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          isRedirect: true,
        });
      });
  };

  getRelatedPosts = async () => {
    const { params } = this.props.match;
    await publicService.getRelatedPosts(params.slug).then((res) => {
      this.setState({
        relatedPosts: res.data,
      });
    });
  };
  render() {
    const { blog, isRedirect, categoriesList, relatedPosts } = this.state;
    if (isRedirect) {
      return <Redirect to="/blog" />;
    }
    return (
      <>
        <div
          className="page_header"
          style={{
            background: "url(https://pbs.twimg.com/media/EySx7k4VEAUeMV4.jpg)",
          }}
        >
          <div className="header-content">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="haeder-text">
                    <h1>{blog !== "" ? blog.Title : ""}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CoinBar />
        <div className="blog_wrapper">
          <div className="container">
            <div className="row">
              <main className="col-sm-8">
                <div className="post_details">
                  <header className="details-header">
                    <div className="post-cat">
                      <a href="#">{blog !== "" ? blog.Category.Name : ""}</a>
                    </div>
                    <h2>{blog !== "" ? blog.Title : ""}</h2>
                    <div className="element-block">
                      <div className="post_meta">
                        <span className="post_date">
                          <i className="fa fa-calendar-o" />
                          <time dateTime="2018-01-21T19:00">
                            {blog !== "" ? blog.CreateAt : ""}
                          </time>
                        </span>
                        <span className="comment_link">
                          <a href="#">
                            <i className="fa fa-comment-o" />9 Comments
                          </a>
                        </span>
                      </div>
                    </div>
                  </header>
                  <figure>
                    <img
                      src={blog !== "" ? BASE_URL_SERVER + blog.Thumbnail : ""}
                      alt=""
                      className="aligncenter img-responsive"
                    />
                  </figure>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog !== "" ? blog.Body : "",
                    }}
                  ></div>
                </div>
                <div className="comments">
                  <h3 className="comment_title">2 Comments</h3>
                  <div className="media">
                    <div className="media-left">
                      <img
                        src="../../../../../Assets/Public/assets/img/blog/img_avatar1.png"
                        alt=""
                        className="media-object"
                      />
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">
                        Jahangir Alom <small>Posted on February 19, 2016</small>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a href="#" className="btn link-btn btn-rounded">
                        Reply ⇾
                      </a>
                      <div className="media">
                        <div className="media-left">
                          <img
                            src="../../../../AssetsHome/assets/img/blog/img_avatar2.png"
                            alt="Demo Avatar Jane Doe"
                            className="media-object"
                          />
                        </div>
                        <div className="media-body">
                          <h4 className="media-heading">
                            Jane Doe <small>Posted on February 20, 2016</small>
                          </h4>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <a href="#" className="btn link-btn btn-rounded">
                            Reply ⇾
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <img
                        src="../../../../../Assets/Public/assets/img/blog/img_avatar1.png"
                        alt=""
                        className="media-object"
                      />
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">
                        John Doe{" "}
                        <small>
                          <i>Posted on February 19, 2016</i>
                        </small>
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a href="#" className="btn link-btn btn-rounded">
                        Reply ⇾
                      </a>
                    </div>
                  </div>
                </div>
                <div className="comment_form">
                  <h3 className="replay_title">Leave a Reply </h3>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="textarea"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">
                      Name *
                    </label>
                    <div className="col-sm-5">
                      <input className="form-control" id="name" type="text" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                      Email *
                    </label>
                    <div className="col-sm-5">
                      <input className="form-control" id="email" type="text" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="website"
                      className="col-sm-2 col-form-label"
                    >
                      Website
                    </label>
                    <div className="col-sm-5">
                      <input
                        className="form-control"
                        id="website"
                        type="text"
                      />
                    </div>
                  </div>
                  <a href="#" className="btn btn-default">
                    Post Comment ⇾
                  </a>
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
                  {relatedPosts.map((post, index) => {
                    return (
                      <div key={index} className="post post_list post_list_sm">
                        <div className="post_img">
                          <a href={`/${post.Slug}`}>
                            <img
                              src={BASE_URL_SERVER + post.Thumbnail}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="post_body">
                          <h4 className="post_heading">
                            <a href={`/${post.Slug}`}>
                              {post.Title}
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
                  <ul className="widget_category">
                    {categoriesList.map((category, index) => {
                      return <li key={index}>#{category.Name}</li>;
                    })}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(BlogDetails);
