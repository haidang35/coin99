import React, { Component } from "react";

export class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }
  render() {
    return (
      <>
          <nav className="navbar navbar-default navbar-fixed navbar-transparent bootsnav">
            <div className="top-search">
              <div className="container">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-search" />
                  </span>
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-addon close-search">
                    <i className="fa fa-times" />
                  </span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="attr-nav">
                <ul>
                  <li className="nav-language">
                    <select className="selectpicker" data-width="auto">
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
                  </li>
                  <li>
                    <a href="register.html" className="btn nav-btn">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="register.html" className="btn nav-btn btn-orange">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i className="fa fa-bars" />
                </button>
                <a className="navbar-brand" href="index-2.html">
                  <img src="../../../../AssetsHome/assets/logo.png" className="logo" alt="" />
                </a>
              </div>
              <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="nav navbar-nav" data-in="" data-out="">
                  <li>
                    <a href="index-2.html">Home</a>
                  </li>
                  <li>
                    <a href="lending.html">Lending</a>
                  </li>
                  <li>
                    <a href="coinmarket.html">Coin market</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="buy.html">Buy</a>
                      </li>
                      <li>
                        <a href="sell.html">Sell</a>
                      </li>
                      <li>
                        <a href="price.html">Pricing Details</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="service.html">Service</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li className="active">
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                      <li>
                        <a href="faq.html">F.A.Q</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
        
            </div>
          </nav>
       
          <div
            className="page_header"
            data-parallax-bg-image="../../../../AssetsHome/assets/img/1920x650-3.jpg"
            data-parallax-direction=""
          >
            <div className="header-content">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                    <div className="haeder-text">
                      <h1>Blog details</h1>
                      <p>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is tha
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ticker">
            <div className="list-wrpaaer">
              <ul id="marquee-horizontal">
                <li className="list-item">
                  <div className="list-item-currency">BCCEUR </div>
                  <div className="list-item-currency upgrade">
                    <span>
                      1,244.26331 <span className="arrow-up">↗</span>
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <div className="list-item-currency">BTCGBP</div>
                  <div className="list-item-currency downgrade">
                    <span>
                      7,088.48 <span className="arrow-down">↘</span>
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <div className="list-item-currency">BCCUSD</div>
                  <div className="list-item-currency downgrade">
                    <span>
                      1,470 <span className="arrow-down">↘</span>
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <div className="list-item-currency">BTCEUR</div>
                  <div className="list-item-currency downgrade">
                    <span>
                      8,444.84879 <span className="arrow-down">↘</span>
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <div className="list-item-currency">BTCGBP</div>
                  <div className="list-item-currency downgrade">
                    <span>
                      7,088.48 <span className="arrow-down">↘</span>
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <div className="list-item-currency">BTCRUB</div>
                  <div className="list-item-currency upgrade">
                    <span>
                      614,411.15205 <span className="arrow-up">↗</span>
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <div className="list-item-currency">BTCUSD</div>
                  <div className="list-item-currency downgrade">
                    <span>
                      10,487.9123 <span className="arrow-down">↘</span>
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <div className="list-item-currency">BTGBTC</div>
                  <div className="list-item-currency downgrade">
                    <span>
                      0.013 <span className="arrow-down">↘</span>
                    </span>
                  </div>
                </li>
                <li className="list-item">
                  <div className="list-item-currency">BTGEUR</div>
                  <div className="list-item-currency upgrade">
                    <span>
                      118.91234 <span className="arrow-up">↗</span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog_wrapper">
            <div className="container">
              <div className="row">
                <main className="col-sm-8">
                  <div className="post_details">
                    <header className="details-header">
                      <div className="post-cat">
                        <a href="#">Fashion</a>
                        <a href="#">Travel</a>
                        <a href="#">Lifestyle</a>
                      </div>
                      <h2>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority.
                      </h2>
                      <div className="element-block">
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
                    </header>
                    <figure>
                      <img
                        src="../../../../AssetsHome/assets/img/blog/details-1.jpg"
                        alt=""
                        className="aligncenter img-responsive"
                      />
                    </figure>
                    <h3>
                      It is a long established fact that a reader will be distracted.{" "}
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                      It was popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently with
                      desktop publishing software like Aldus PageMaker including
                      versions of Lorem Ipsum.
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable. If you are going to use a passage of Lorem
                      Ipsum, you need to be sure there isn't anything embarrassing
                      hidden in the middle.
                    </p>
                    <figure>
                      <img
                        src="../../../../AssetsHome/assets/img/blog/360x250-2.jpg"
                        alt="Image"
                        className="alignright img-responsive"
                      />
                    </figure>
                    <p>
                      {" "}
                      Oh, you're gonna be in a coma, all right. I care deeply for
                      nature. I care deeply for nature. I'm a monster. I don't criticize
                      you! And if you're worried about criticism, sometimes a diet is
                      the best defense.
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply random text.
                      It has roots in a piece of classical Latin literature from 45 BC,
                      making it over 2000 years old. Richard McClintock, a Latin
                      professor at Hampden-Sydney College in Virginia, looked up one of
                      the more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum comes
                      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                      BC. This book is a treatise on the theory of ethics, very popular
                      during the Renaissance. The first line of Lorem Ipsum, "Lorem
                      ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <blockquote>
                      There are many variations of passages of Lorem Ipsum available,
                      but the majority have suffered alteration in some form, by
                      injected humour, or randomised words which don't look even
                      slightly believable.
                    </blockquote>
                    <h3>
                      There are many variations of passages of Lorem Ipsum available.
                    </h3>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply random text.
                      It has roots in a piece of classical Latin literature from 45 BC,
                      making it over 2000 years old. Richard McClintock, a Latin
                      professor at Hampden-Sydney College in Virginia, looked up one of
                      the more obscure Latin words, consectetur, from a Lorem Ipsum
                      passage, and going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum comes
                      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                      BC. This book is a treatise on the theory of ethics, very popular
                      during the Renaissance. The first line of Lorem Ipsum, "Lorem
                      ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                    <figure>
                      <img
                        src="../../../../AssetsHome/assets/img/blog/360x250-5.jpg"
                        alt="Image"
                        className="alignleft img-responsive"
                      />
                    </figure>
                    <p>
                      Oh, you're gonna be in a coma, all right. I care deeply for
                      nature. I care deeply for nature. I'm a monster. I don't criticize
                      you! And if you're worried about criticism, sometimes a diet is
                      the best defense.
                    </p>
                    <p>
                      It is a long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less normal
                      distribution of letters, as opposed to using 'Content here,
                      content here', making it look like readable English. Many desktop
                      publishing packages and web page editors now use Lorem Ipsum as
                      their default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various versions
                      have evolved over the years, sometimes by accident, sometimes on
                      purpose (injected humour and the like).
                    </p>
                    <h4>
                      It is a long established fact that a reader will be distracted
                    </h4>
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                      <li>Quisque mollis quam vitae arcu cursus lacinia.</li>
                      <li>Praesent condimentum nunc eget ligula rutrum pretium.</li>
                      <li>Fusce rhoncus eros et auctor tincidunt.</li>
                      <li>
                        Donec eu neque at turpis tempus pretium rhoncus sed neque.
                      </li>
                      <li>In nec metus commodo, semper dolor vitae, volutpat lacus.</li>
                      <li>
                        Donec maximus dolor in felis ornare, et euismod enim lobortis.
                      </li>
                    </ul>
                    <p>Source:&nbsp;https://unsplash.com/</p>
                  </div>
                  <div className="comments">
                    <h3 className="comment_title">2 Comments</h3>
                    <div className="media">
                      <div className="media-left">
                        <img
                          src="../../../../AssetsHome/assets/img/blog/img_avatar1.png"
                          alt=""
                          className="media-object"
                        />
                      </div>
                      <div className="media-body">
                        <h4 className="media-heading">
                          Jahangir Alom <small>Posted on February 19, 2016</small>
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.
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
                          src="../../../../AssetsHome/assets/img/blog/img_avatar1.png"
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                      <label htmlFor="website" className="col-sm-2 col-form-label">
                        Website
                      </label>
                      <div className="col-sm-5">
                        <input className="form-control" id="website" type="text" />
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
                    <div className="post post_list post_list_sm">
                      <div className="post_img">
                        <a href="#">
                          <img src="../../../../AssetsHome/assets/img/blog/100x75-1.jpg" alt="" />
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
                    <div className="post post_list post_list_sm">
                      <div className="post_img">
                        <a href="#">
                          <img src="../../../../AssetsHome/assets/img/blog/100x75-2.jpg" alt="" />
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
                    <div className="post post_list post_list_sm">
                      <div className="post_img">
                        <a href="#">
                          <img src="../../../../AssetsHome/assets/img/blog/100x75-3.jpg" alt="" />
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
                          <i className="fa fa-map-marker" /> 1355 Market Street, Suite
                          900
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
                      <form className="newsletter-form" action="#" method="post">
                        <input type="hidden" name="form-name" defaultValue="form 4" />
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
    )

  }
}