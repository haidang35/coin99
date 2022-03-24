import React, { Component } from "react";
import { Footer } from "../Shared/Components/Layouts/Footer";

export class Abouts extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                                    <a href="#" className="btn btn-default mr-20 mb-10">
                                        Contact us
                                    </a>
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
                                    <img src="Assets/Public/asets/img/about.jpg" className="img-responsive" alt="" />
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
                <div className="team__content">
                    <div id="content__bg" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <section className="title_content">
                                    <h2 className="content__title">Our Professional Team</h2>
                                    <p className="content__description">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC,
                                        making it over 2000 years old.
                                    </p>
                                </section>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <div className="row">
                                    <div className="col-sm-4 team">
                                        <h2 className="team__number">01</h2>
                                        <div className="team__member">
                                            <a href="detail.html" className="team__member__img" />
                                        </div>
                                        <div className="member__detail">
                                            <a href="detail.html" className="member__title">
                                                <h4>Naeem Khan</h4>
                                            </a>
                                            <p className="member__description">
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                            </p>
                                            <div className="team__social">
                                                <a href="#" className="facebook">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" className="twitter">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" className="linkedin">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                                <a href="#" className="instagram">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-4 team">
                                        <h2 className="team__number">02</h2>
                                        <div className="team__member">
                                            <a href="detail.html" className="team__member__img" />
                                        </div>
                                        <div className="member__detail">
                                            <a href="detail.html" className="member__title">
                                                <h4>Jahangir Alom</h4>
                                            </a>
                                            <p className="member__description">
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                            </p>
                                            <div className="team__social">
                                                <a href="#" className="facebook">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" className="twitter">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" className="linkedin">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                                <a href="#" className="instagram">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 team">
                                        <h2 className="team__number">03</h2>
                                        <div className="team__member">
                                            <a href="detail.html" className="team__member__img" />
                                        </div>
                                        <div className="member__detail">
                                            <a href="detail.html" className="member__title">
                                                <h4>Tuhin Sorker</h4>
                                            </a>
                                            <p className="member__description">
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                            </p>
                                            <div className="team__social">
                                                <a href="#" className="facebook">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" className="twitter">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" className="linkedin">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                                <a href="#" className="instagram">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-4 team">
                                        <h2 className="team__number">04</h2>
                                        <div className="team__member">
                                            <a href="detail.html" className="team__member__img" />
                                        </div>
                                        <div className="member__detail">
                                            <a href="detail.html" className="member__title">
                                                <h4>Tanjil Ahmed</h4>
                                            </a>
                                            <p className="member__description">
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                            </p>
                                            <div className="team__social">
                                                <a href="#" className="facebook">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" className="twitter">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" className="linkedin">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                                <a href="#" className="instagram">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-4 team">
                                        <h2 className="team__number">05</h2>
                                        <div className="team__member">
                                            <a href="detail.html" className="team__member__img" />
                                        </div>
                                        <div className="member__detail">
                                            <a href="detail.html" className="member__title">
                                                <h4>Jhon Doe</h4>
                                            </a>
                                            <p className="member__description">
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                            </p>
                                            <div className="team__social">
                                                <a href="#" className="facebook">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" className="twitter">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" className="linkedin">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                                <a href="#" className="instagram">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 team">
                                        <h2 className="team__number">06</h2>
                                        <div className="team__member">
                                            <a href="detail.html" className="team__member__img" />
                                        </div>
                                        <div className="member__detail">
                                            <a href="detail.html" className="member__title">
                                                <h4>Alamin</h4>
                                            </a>
                                            <p className="member__description">
                                                It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout.
                                            </p>
                                            <div className="team__social">
                                                <a href="#" className="facebook">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                                <a href="#" className="twitter">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#" className="linkedin">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                                <a href="#" className="instagram">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <div className="section_title">
                                    <h3>
                                        What you should know about <span>cryptocurrencies</span>
                                    </h3>
                                    <p>
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout. The point
                                        of using Lorem Ipsum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="owl-testimonial owl-carousel owl-theme">
                                    <div className="testimonial-panel">
                                        <div className="tes-quoteInfo">
                                            <img
                                                src="Assets/Public/img/avatar-1.jpg"
                                                className="quoteAvatar"
                                                alt=""
                                            />
                                            <div>
                                                <div className="quoteAuthor">
                                                    <span>Bill Gates</span>
                                                </div>
                                                <div className="quotePosition">
                                                    <span>
                                                        Co-founder of Microsoft, American business magnate
                                                    </span>
                                                </div>
                                                <div className="testimonial--rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial--body">
                                            <p>
                                                “ It is a long established fact that a reader will be distracted
                                                by the readable content of a page when looking at its layout. ”
                                            </p>
                                        </div>
                                    </div>
                                    <div className="testimonial-panel">
                                        <div className="tes-quoteInfo">
                                            <img
                                                src="assets/img/avatar-1.jpg"
                                                className="quoteAvatar"
                                                alt=""
                                            />
                                            <div>
                                                <div className="quoteAuthor">
                                                    <span>Bill Gates</span>
                                                </div>
                                                <div className="quotePosition">
                                                    <span>
                                                        Co-founder of Microsoft, American business magnate
                                                    </span>
                                                </div>
                                                <div className="testimonial--rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial--body">
                                            <p>
                                                “ There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration in some
                                                form, by injected humour. ”
                                            </p>
                                        </div>
                                    </div>
                                    <div className="testimonial-panel">
                                        <div className="tes-quoteInfo">
                                            <img
                                                src="assets/img/avatar-1.jpg"
                                                className="quoteAvatar"
                                                alt=""
                                            />
                                            <div>
                                                <div className="quoteAuthor">
                                                    <span>Bill Gates</span>
                                                </div>
                                                <div className="quotePosition">
                                                    <span>
                                                        Co-founder of Microsoft, American business magnate
                                                    </span>
                                                </div>
                                                <div className="testimonial--rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial--body">
                                            <p>
                                                “ If you are going to use a passage of Lorem Ipsum, you need to
                                                be sure there isn't anything embarrassing hidden in the middle
                                                of text. ”
                                            </p>
                                        </div>
                                    </div>
                                    <div className="testimonial-panel">
                                        <div className="tes-quoteInfo">
                                            <img
                                                src="assets/img/avatar-1.jpg"
                                                className="quoteAvatar"
                                                alt=""
                                            />
                                            <div>
                                                <div className="quoteAuthor">
                                                    <span>Bill Gates</span>
                                                </div>
                                                <div className="quotePosition">
                                                    <span>
                                                        Co-founder of Microsoft, American business magnate
                                                    </span>
                                                </div>
                                                <div className="testimonial--rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="testimonial--body">
                                            <p>
                                                “ Contrary to popular belief, Lorem Ipsum is not simply random
                                                text. It has roots in a piece of classical Latin literature from
                                                45 BC, making. ”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="client-logo">
                                    <div className="logo-item">
                                        <a href="#" target="_blank">
                                            <img
                                                src="assets/img/brand-logo/01.png"
                                                className="img-responsive"
                                                alt="client-logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="logo-item">
                                        <a href="#" target="_blank">
                                            <img
                                                src="assets/img/brand-logo/02.png"
                                                className="img-responsive"
                                                alt="client-logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="logo-item">
                                        <a href="#" target="_blank">
                                            <img
                                                src="assets/img/brand-logo/03.png"
                                                className="img-responsive"
                                                alt="client-logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="logo-item">
                                        <a href="#" target="_blank">
                                            <img
                                                src="assets/img/brand-logo/04.png"
                                                className="img-responsive"
                                                alt="client-logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="logo-item">
                                        <a href="#" target="_blank">
                                            <img
                                                src="assets/img/brand-logo/05.png"
                                                className="img-responsive"
                                                alt="client-logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="logo-item">
                                        <a href="#" target="_blank">
                                            <img
                                                src="assets/img/brand-logo/06.png"
                                                className="img-responsive"
                                                alt="client-logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="logo-item">
                                        <a href="#" target="_blank">
                                            <img
                                                src="assets/img/brand-logo/07.png"
                                                className="img-responsive"
                                                alt="client-logo"
                                            />
                                        </a>
                                    </div>
                                    <div className="logo-item">
                                        <a href="#" target="_blank">
                                            <img
                                                src="../../../../Assets/Admin/data/crypto-dash/08.png"
                                                className="img-responsive"
                                                alt="client-logo"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}