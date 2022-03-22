import React, { Component } from "react";

export class CoinDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { coinDetails } = this.props;
        console.log(coinDetails);
        return (
            <>
                <div className="crypto-details">
                    <div className="container">
                        <div className="crypto-details-info">
                            <div className="info-cell">
                                <div className="info-cell-title">1-Day Change</div>
                                <div className="info-cell-value">
                                    <span className="percent_positive">+{coinDetails !== null ? coinDetails.priceChangePercent : ''}%</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">Open Price</div>
                                <div className="info-cell-value">
                                    <span className="percent_positive">{coinDetails !== null ? coinDetails.openPrice.toFixed(5) : ''}</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">High Price</div>
                                <div className="info-cell-value">
                                    <span className="percent_positive">{coinDetails !== null ? coinDetails.highPrice.toFixed(5) : ''}</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">Low Price</div>
                                <div className="info-cell-value">
                                    <span className="percent_negative">{coinDetails !== null ? coinDetails.lowPrice.toFixed(5) : ''}</span>
                                </div>
                            </div>
                        </div>
                        <div className="crypto-details-info">
                            <div className="info-cell">
                                <div className="info-cell-title">Quote Volume</div>
                                <div className="info-cell-value" >
                                <span className="percent_negative">{coinDetails !== null ? coinDetails.quoteVolume.toFixed(2) : ''}</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">Volume (24h)</div>
                                <div className="info-cell-value">
                                    <span>$ {coinDetails !== null ? (coinDetails.volume).toFixed(2) : ''}B</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">WeightedAvg Price</div>
                                <div className="info-cell-value">
                                <span className="percent_negative">{coinDetails !== null ? coinDetails.weightedAvgPrice.toFixed(5) : ''}</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">Max Quantity</div>
                                <div className="info-cell-value">
                                    <span>{coinDetails !== null ? coinDetails.lastQty : ''}</span>
                                </div>
                            </div>
                         
                        </div>
                        <div className="crypto-details-info">
                            <div className="info-cell">
                                <div className="info-cell-title">Last Price</div>
                                <div className="info-cell-value" >
                                <span className="percent_negative">{coinDetails !== null ? coinDetails.lastPrice.toFixed(5) : ''}</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">Close Price</div>
                                <div className="info-cell-value">
                                <span className="percent_negative">{coinDetails !== null ? coinDetails.prevClosePrice.toFixed(5) : ''}</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">Bid Qty</div>
                                <div className="info-cell-value">
                                <span className="percent_negative">{coinDetails !== null ? coinDetails.bidQty.toFixed(5) : ''}</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">Bid Price</div>
                                <div className="info-cell-value">
                                    <span>{coinDetails !== null ? coinDetails.bidPrice.toFixed(5) : ''}</span>
                                </div>
                            </div>
                         
                        </div>
                        <div className="more">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum. Morbi placerat imperdiet risus quis blandit. Ut lobortis elit
                            luctus, feugiat erat vitae, interdum diam. Nam sit amet arcu vitae justo
                            lacinia ultricies nec eget tellus. Curabitur id sapien massa. In hac{" "}
                            <a href="#">habitasse</a> platea dictumst. Integer tristique leo
                            consectetur libero pretium pretium. Nunc sed mauris magna. Praesent varius
                            purus id turpis iaculis iaculis. Nulla <em>convallis magna nunc</em>, id
                            rhoncus massa ornare in. Donec et feugiat sem, ac rhoncus mauris. Quisque
                            eget tempor massa.
                        </div>
                    </div>
                </div>

            </>
        )
    }
}