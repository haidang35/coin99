import React, { Component } from "react";

export class BlogHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}
