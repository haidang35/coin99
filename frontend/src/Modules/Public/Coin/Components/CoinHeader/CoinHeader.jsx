import React, { Component } from "react";

export class CoinHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { coinDetails } = this.props;
        return (
            <>
                <div
                    className="page_header"
                    data-parallax-bg-image="http://cryptomarkethtml.bdtask.com/assets/img/1920x650-5.jpg"
                    data-parallax-direction=""
                    style={{
                        backgroundImage: "url('http://cryptomarkethtml.bdtask.com/assets/img/1920x650-5.jpg')"
                    }}
                >
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2">
                                    <div className="haeder-text">
                                        <div className="company-icon">
                                            <img src="http://cryptomarkethtml.bdtask.com/assets/img/coin-logo/BTC.svg" alt="" />
                                        </div>
                                        <div className="company">Bitcoin</div>
                                        <div className="company-valu">
                                            <div className="company-value-title">Current Price</div>
                                            <div className="company-value-current">
                                                { coinDetails !== null ? coinDetails.lastPrice : '' }
                                                <span className="company-value-change">+{ coinDetails !== null ? coinDetails.priceChangePercent : '' }%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-bg-intro">
                        <img src="assets/img/mask.png" className="intro-round" alt="" />
                    </div>
                </div>
            </>
        )
    }
}