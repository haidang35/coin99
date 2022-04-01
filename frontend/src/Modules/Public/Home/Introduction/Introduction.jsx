import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className="about_content">
                    <div className="container">
                        <div className="row about-text justify-content">
                            <div className="col-md-6">
                                <div className="about-info">
                                    <h2>What is ICO Crypto?</h2>
                                    <div className="definition">
                                        ICO Crypto is a platform for the future of funding that powering dat
                                        for the new equity blockchain
                                    </div>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but
                                        the majority have suffered alteration in some form, by injected
                                        humour, or randomised words which don't look even slightly
                                        believable. If you are going to use a passage of Lorem Ipsum, you
                                        need to be sure there isn't anything.
                                    </p>
                                    <p>
                                        All the Lorem Ipsum generators on the Internet tend to repeat
                                        predefined chunks as necessary, making this the first true
                                        generator.
                                    </p>
                                    <Link to="/contact" className="btn btn-default mr-20 mb-10">
                                        Contact us
                                    </Link>
                                    <div className="play-button">
                                        <a
                                            href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                                            className="btn-play popup-youtube"
                                        >
                                            <div className="play-icon">
                                                <i className="fa fa-play" />
                                            </div>
                                            <div className="play-text">
                                                <div className="btn-title-inner">
                                                    <div className="btn-title">
                                                        <span>Watch Video</span>
                                                    </div>
                                                    <div className="btn-subtitle">
                                                        <span>About Bitcoin</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-right">
                                    <img src="/Assets/Public/assets/img/about.jpg" className="img-responsive" alt="" />
                                </div>
                                <div className="quote">
                                    It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout.
                                    <div className="author-address">Tanjil Ahmed - Owner, Bdtask</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }


}