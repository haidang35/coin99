import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Shared/Components/Layouts/Footer";


export class LenDing extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div
                    className="page_header"
                    data-parallax-bg-image="../../../../AssetsHome/assets/img/1920x650-2.jpg"
                    data-parallax-direction=""
                    style={{
                        background: 'url(https://images.pexels.com/photos/2874066/pexels-photo-2874066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                        backgroundSize: "cover"

                    }}
                >
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2">
                                    <div className="haeder-text">
                                        <h1>Pricing Plans</h1>
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
                <div className="pricing">
                    <div className="pricing_item">
                        <h3 className="pricing_title">Startup</h3>
                        <p className="pricing_sentence">
                            Perfect for small startups that have less than 10 team members
                        </p>
                        <div className="pricing_price">
                            <span className="pricing_currency">$</span>19
                            <span className="pricing_period">/ month</span>
                        </div>
                        <ul className="pricing_feature-list">
                            <li className="pricing_feature">1 GB of space</li>
                            <li className="pricing_feature">Support at $25/hour</li>
                            <li className="pricing_feature">10 presentations/month</li>
                            <li className="pricing_feature">1 campaign/month</li>
                            <li className="pricing_feature">Small social media package</li>
                        </ul>
                        <button className="pricing_action" aria-label="Purchase this plan">
                            <span className="icon lnr lnr-arrow-right" />
                        </button>
                    </div>
                    <div className="pricing_item">
                        <h3 className="pricing_title">Medium</h3>
                        <p className="pricing_sentence">
                            Suitable for medium-sized businesses with up to 30 employees
                        </p>
                        <div className="pricing_price">
                            <span className="pricing_currency">$</span>199
                            <span className="pricing_period">/ month</span>
                        </div>
                        <ul className="pricing_feature-list">
                            <li className="pricing_feature">5 GB of space</li>
                            <li className="pricing_feature">Support at $5/hour</li>
                            <li className="pricing_feature">10 presentations/month</li>
                            <li className="pricing_feature">1 campaign/month</li>
                            <li className="pricing_feature">Medium social media package</li>
                        </ul>
                        <button className="pricing_action" aria-label="Purchase this plan">
                            <span className="icon lnr lnr-arrow-right" />
                        </button>
                    </div>
                    <div className="pricing_item">
                        <h3 className="pricing_title">Pro</h3>
                        <p className="pricing_sentence">
                            For any large corporation with an unlimited number of members
                        </p>
                        <div className="pricing_price">
                            <span className="pricing_currency">$</span>499
                            <span className="pricing_period">/ month</span>
                        </div>
                        <ul className="pricing_feature-list">
                            <li className="pricing_feature">Unlimited space</li>
                            <li className="pricing_feature">20 hours of free support</li>
                            <li className="pricing_feature">10 presentations/month</li>
                            <li className="pricing_feature">1 campaign/month</li>
                            <li className="pricing_feature">Full social media package</li>
                        </ul>
                        <button className="pricing_action" aria-label="Purchase this plan">
                            <span className="icon lnr lnr-arrow-right" />
                        </button>
                    </div>

                </div>
                <Footer />
            </>
        )
    }
}
