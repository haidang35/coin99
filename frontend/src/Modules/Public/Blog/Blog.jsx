import React, { Component } from "react";

export class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'lamsondepzai',
        }
    }
    render() {
        return (
            <>
                <div className="blog_wrapper">
                    <div className="container">
                        <div className="row">
                            <main className="col-sm-8">
                                <div className="post post_list post_list_lg">
                                    <div className="post_img">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/290x232-1.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post_body">
                                        <div className="post-cat">
                                            <a href="#">Lifestyle</a>
                                        </div>
                                        <h3 className="post_heading">
                                            <a href="blog-details.html">
                                                <strong>Aliquam</strong> <span className="dash">—</span> rutrum
                                                neque scelerisque mauris placerat, sed mollis.
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore ...
                                        </p>
                                        <div className="post_meta">
                                            <span className="post_date">
                                                <i className="fa fa-calendar-o" />
                                                <time dateTime="2018-01-21T19:00">Jan 21, 2018</time>
                                            </span>
                                            <span className="comment_link">
                                                <a href="#">
                                                    <i className="fa fa-comment-o" />9 Comments
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* /.End of post list */}
                                <div className="post post_list post_list_lg">
                                    <div className="post_img">
                                        <a href="blog-details.html">
                                            <img src="assets/img/blog/290x232-2.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post_body">
                                        <div className="post-cat">
                                            <a href="#">Adventure</a>
                                        </div>
                                        <h3 className="post_heading">
                                            <a href="blog-details.html">
                                                <strong>IFusce</strong> <span className="dash">—</span> ac
                                                tortor et lacus volutpat euismod in nec erat.
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore ...
                                        </p>
                                        <div className="post_meta">
                                            <span className="post_date">
                                                <i className="fa fa-calendar-o" />
                                                <time dateTime="2018-01-21T19:00">Jan 21, 2018</time>
                                            </span>
                                            <span className="comment_link">
                                                <a href="#">
                                                    <i className="fa fa-comment-o" />9 Comments
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* /.End of post list */}
                                <div className="post post_list post_list_lg">
                                    <div className="post_img">
                                        <a href="#">
                                            <img src="assets/img/blog/290x232-3.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post_body">
                                        <div className="post-cat">
                                            <a href="#">Crypto</a>
                                        </div>
                                        <h3 className="post_heading">
                                            <a href="#">
                                                <strong>Established</strong> <span className="dash">—</span>{" "}
                                                fact that a reader will be distracted by the readable.
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore ...
                                        </p>
                                        <div className="post_meta">
                                            <span className="post_date">
                                                <i className="fa fa-calendar-o" />
                                                <time dateTime="2018-01-21T19:00">Jan 21, 2018</time>
                                            </span>
                                            <span className="comment_link">
                                                <a href="#">
                                                    <i className="fa fa-comment-o" />9 Comments
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* /.End of post list */}
                                <div className="post post_list post_list_lg">
                                    <div className="post_img">
                                        <a href="#">
                                            <img src="assets/img/blog/290x232-4.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post_body">
                                        <div className="post-cat">
                                            <a href="#">Lifestyle</a>
                                        </div>
                                        <h3 className="post_heading">
                                            <a href="#">
                                                <strong>Aenean</strong> <span className="dash">—</span>{" "}
                                                hendrerit felis vitae neque malesuada, at condimentum.
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore ...
                                        </p>
                                        <div className="post_meta">
                                            <span className="post_date">
                                                <i className="fa fa-calendar-o" />
                                                <time dateTime="2018-01-21T19:00">Jan 21, 2018</time>
                                            </span>
                                            <span className="comment_link">
                                                <a href="#">
                                                    <i className="fa fa-comment-o" />9 Comments
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* /.End of post list */}
                                <div className="post post_list post_list_lg">
                                    <div className="post_img">
                                        <a href="#">
                                            <img src="assets/img/blog/290x232-5.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post_body">
                                        <div className="post-cat">
                                            <a href="#">Traditional</a>
                                        </div>
                                        <h3 className="post_heading">
                                            <a href="#">
                                                <strong>Suspendisse</strong> <span className="dash">—</span> eu
                                                justo maximus, pellentesque enim efficitur.
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore ...
                                        </p>
                                        <div className="post_meta">
                                            <span className="post_date">
                                                <i className="fa fa-calendar-o" />
                                                <time dateTime="2018-01-21T19:00">Jan 21, 2018</time>
                                            </span>
                                            <span className="comment_link">
                                                <a href="#">
                                                    <i className="fa fa-comment-o" />9 Comments
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* /.End of post list */}
                                <div className="post post_list post_list_lg">
                                    <div className="post_img">
                                        <a href="#">
                                            <img src="assets/img/blog/290x232-6.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="post_body">
                                        <div className="post-cat">
                                            <a href="#">Traditional</a>
                                        </div>
                                        <h3 className="post_heading">
                                            <a href="#">
                                                <strong>Suspendisse</strong> <span className="dash">—</span> eu
                                                justo maximus, pellentesque enim efficitur.
                                            </a>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore ...
                                        </p>
                                        <div className="post_meta">
                                            <span className="post_date">
                                                <i className="fa fa-calendar-o" />
                                                <time dateTime="2018-01-21T19:00">Jan 21, 2018</time>
                                            </span>
                                            <span className="comment_link">
                                                <a href="#">
                                                    <i className="fa fa-comment-o" />9 Comments
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
                                {/* /.End of pagination */}
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
                                {/* /.End of sidebar search */}
                                <div className="widget">
                                    <h4 className="widget_title">Recent Post</h4>
                                    <div className="post post_list post_list_sm">
                                        <div className="post_img">
                                            <a href="#">
                                                <img src="assets/img/blog/100x75-1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_body">
                                            <h4 className="post_heading">
                                                <a href="#">Nunc in ante vulputate est fermentum faucibus.</a>
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
                                    {/* End of post list */}
                                    <div className="post post_list post_list_sm">
                                        <div className="post_img">
                                            <a href="#">
                                                <img src="assets/img/blog/100x75-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_body">
                                            <h4 className="post_heading">
                                                <a href="#">Ut et ipsum nec nulla porttitor ullamcorper.</a>
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
                                    {/* End of post list */}
                                    <div className="post post_list post_list_sm">
                                        <div className="post_img">
                                            <a href="#">
                                                <img src="assets/img/blog/100x75-3.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="post_body">
                                            <h4 className="post_heading">
                                                <a href="#">Fusce ac tortor et lacus volutpat euismod .</a>
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
                                    {/* End of post list */}
                                </div>
                                {/*   /.End of recent post */}
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
                                {/* /.End of social link */}
                                <div className="widget">
                                    <div className="widget_banner">
                                        <img
                                            src="assets/img/ad-300x250-1.png"
                                            className="img-responsive"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                {/* /.End of banner */}
                                <div className="widget">
                                    <h4 className="widget_title">Categories</h4>
                                    <ul className="widget_category">
                                        <li>
                                            <a href="#">
                                                <span>#</span>Trends
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>#</span>Hosting
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>#</span>Wordpress
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>#</span>Lifestyle
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>#</span>Computering
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>#</span>WebsiteDesign
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span>#</span>PHP
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* /.End of category */}
                            </aside>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}