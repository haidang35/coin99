import React from "react";
import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

 class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScroll: false,
    };
  }

  componentDidMount() {
    this.scrollChangeStyle();
    window.addEventListener("scroll", this.scrollChangeStyle);
  }


  scrollChangeStyle = (event) => {
    if (window.scrollY >= 200) {
      this.setState({
        isScroll: true,
      });
    }
    if (window.scrollY === 0) {
      this.setState({
        isScroll: false,
      });
    }
  };

  onLogout = () => {
    localStorage.removeItem('access_token');
    window.location.replace('/');
  }

  render() {
    const { isScroll } = this.state;
    const { currentUser } = this.props;
    const pathName = window.location.pathname;
    return (
      <>
        <nav
          id="navbar-public"
          className="navbar navbar-default navbar-fixed navbar-transparent bootsnav"
          style={{
            backgroundColor: isScroll ? "#0a0f58" : "",
            transition: "background-color 200ms linear",
          }}
        >
          <div className="top-search">
            <div className="container">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <span className="input-group-addon close-search">
                  <i className="fa fa-times" />
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="attr-nav">
              {currentUser == '' || currentUser == null ? (
                <ul>
                  <li>
                    <Link to="/signin" className="btn nav-btn" style={{ background:"#6251fc", fontSize:"20px"}}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="btn nav-btn btn-orange" style={{fontSize:"15px"}}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                  
                }}>
                  <li style={{ display: "flex" }}>
                    <a href="#">
                      <span style={{ paddingRight: "0.5rem" }}>Hi, </span>
                      <strong>{currentUser.FullName}</strong>
                    </a>
                  </li>
                  <li>
                    {currentUser.AccountType === 1 ? (
                      <button className="btn btn-sm btn-primary">FREE</button>
                    ) : (
                      <button className="btn btn-sm btn-warning">PREMIUM</button>
                    )}
                  </li>
                  <li>
                    <button onClick={this.onLogout} className="btn btn-sm btn-danger">Logout</button>
                  </li>
                </ul>
              )}
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
                <img src="assets/img/logo.png" className="logo" alt="" />
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav" data-in="" data-out="">
                <li className={pathName === '/' ? 'navbar-item-active' : ''}  style={{
                  color: "color: #fff;"
                }}>
                  <Link to="/">Home</Link>
                </li>
                <li className={pathName === '/lending' ? 'navbar-item-active' : ''} >
                  <Link to="/lending">Lending</Link>
                </li>
                <li className={pathName === '/coin-market' ? 'navbar-item-active' : ''} >
                  <Link to="/coin-market">Coin Market</Link>
                </li>
                <li className={pathName === '/contact' ? 'navbar-item-active' : ''}>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className={pathName === '/blog' ? 'navbar-item-active' : ''}>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Navbar);
