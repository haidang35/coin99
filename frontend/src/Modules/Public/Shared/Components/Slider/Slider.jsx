import React from "react";
import { Component } from "react";

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div
          className="animation-slide owl-carousel owl-theme"
          id="animation-slide"
        >
          {/* Slide 2*/}
          <div className="item slide-two">
            <div className="slide-table">
              <div className="slide-tablecell">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="slide-text">
                        <h2>
                          Bitcoin{" "}
                          <span className="bright-turquoise">Exchange</span>{" "}
                          <br />
                          You Can Trust
                        </h2>
                        <p>
                          Miker Ipsum is simply dummy text of the printing and
                          typesetting industry.
                          <br /> Lorem Ipsum has been the industry's standard
                          dummy text ever since the 1500s
                        </p>
                        <div className="slide-buttons">
                          <a href="#" className="slide-btn">
                            Download Now
                          </a>
                        </div>
                      </div>
                    </div>
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
