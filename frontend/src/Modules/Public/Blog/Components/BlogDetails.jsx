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
          <footer className="footer">
            <div className="footer-breadcrumbs">
              <div className="container">
                <div className="breadcrumbs-row">
                  <ul className="f_breadcrumbs">
                    <li>
                      <a href="#">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>About</span>
                      </a>
                    </li>
                  </ul>
                  <div className="scroll-top" id="back-to-top">
                    <div className="scroll-top-text">
                      <span>Scroll to Top</span>
                    </div>
                    <div className="scroll-top-icon">
                      <i className="fa fa-angle-up" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="action_btn_inner">
              <a href="register.html#tab1" className="action_btn">
                <span className="action_title">Register</span>
                <span className="lnr lnr-chevron-right action_icon" />
                <span className="action_sub_title">
                  Join the new era of cryptocurrency exchange
                </span>
              </a>
              <a href="register.html#tab2" className="action_btn">
                <span className="action_title">Sign in</span>
                <span className="lnr lnr-chevron-right action_icon" />
                <span className="action_sub_title">
                  Access the cryptocurrency experience you deserve
                </span>
              </a>
            </div>
            <div className="main_footer">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 col-md-4">
                    <div className="widget-contact">
                      <ul className="list-icon">
                        <li>
                          <i className="fa fa-map-marker" /> 1355 Market Street,
                          Suite 900
                          <br />
                          San Francisco, CA 94103
                        </li>
                        <li>
                          <i className="fa fa-phone" /> (123) 456-7890{" "}
                        </li>
                        <li>
                          <i className="fa fa-envelope" />{" "}
                          <a href="mailto:first.last@example.com">
                            first.last@example.com
                          </a>
                        </li>
                        <li>
                          <br />
                          <i className="fa fa-clock-o" />
                          Monday - Friday: <strong>08:00 - 22:00</strong>
                          <br />
                          Saturday, Sunday: <strong>Closed</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-5 col-md-4 col-md-offset-1">
                    <div className="row">
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="footer-box">
                          <h3 className="footer-title">Our Company</h3>
                          <ul className="footer-list">
                            <li>
                              <a href="#">Customer support</a>
                            </li>
                            <li>
                              <a href="#">Help center</a>
                            </li>
                            <li>
                              <a href="#">Fees &amp; Limits</a>
                            </li>
                            <li>
                              <a href="#">Referral Program</a>
                            </li>
                            <li>
                              <a href="#">About Us</a>
                            </li>
                            <li>
                              <a href="#">24/7 Support</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        <div className="footer-box">
                          <h3 className="footer-title">Service</h3>
                          <ul className="footer-list">
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="service.html">Service</a>
                            </li>
                            <li>
                              <a href="exchange.html">Exchange Bitcoin</a>
                            </li>
                            <li>
                              <a href="blog.html">Blog news</a>
                            </li>
                            <li>
                              <a href="#">Our Team Member</a>
                            </li>
                            <li>
                              <a href="#">Roadmap Bitcoin</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 col-md-3">
                    <div className="newsletter-box">
                      <h3 className="footer-title">Email Newslatter</h3>
                      <p>Subscribe to our newsletter!</p>
                      <form
                        className="newsletter-form"
                        action="#"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="form-name"
                          defaultValue="form 4"
                        />
                        <input placeholder="Email Address" type="text" />
                        <button type="submit">
                          <i className="fa fa-paper-plane" aria-hidden="true" />
                        </button>
                        <div className="envelope">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sub_footer">
              <div className="container">
                <div className="logos-wrapper">
                  <div className="logos-row">
                    <div className="social-content">
                      <div className="social-row">
                        <div className="social_icon">
                          <a href="#" className="">
                            <i className="fa fa-facebook" />
                          </a>
                          <a href="#" className="">
                            <i className="fa fa-twitter" />
                          </a>
                          <a href="#" className="">
                            <i className="fa fa-instagram" />
                          </a>
                          <a href="#" className="">
                            <i className="fa fa-youtube-play" />
                          </a>
                          <a href="#" className="">
                            <i className="fa fa-linkedin" />
                          </a>
                        </div>
                        <div className="f-language">
                          <select className="selectpicker" data-width="fit">
                            <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
                              English
                            </option>
                            <option data-content='<span class="flag-icon flag-icon-mx"></span> Español'>
                              Español
                            </option>
                            <option data-content='<span class="flag-icon flag-icon-bd"></span> বাংলা'>
                              বাংলা{" "}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="copyright">
                    <span>Copyright Â© 2018. All rights reserved</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default withRouter(BlogDetails);
