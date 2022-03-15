import React, { Component } from "react";

export class CoinDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className="crypto-details">
                    <div className="container">
                        <div className="crypto-details-info">
                            <div className="info-cell">
                                <div className="info-cell-title">1-Day Change</div>
                                <div className="info-cell-value">
                                    <span className="percent_positive">+4.03%</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">1-Week Change</div>
                                <div className="info-cell-value">
                                    <span className="percent_positive">+17.22%</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">1-Month Change</div>
                                <div className="info-cell-value">
                                    <span className="percent_positive">+25.59%</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">YTD Change</div>
                                <div className="info-cell-value">
                                    <span className="percent_negative">-16.78%</span>
                                </div>
                            </div>
                        </div>
                        <div className="crypto-details-info">
                            <div className="info-cell">
                                <div className="info-cell-title">Market Cap</div>
                                <div className="info-cell-value">
                                    <span>$195.04 B</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">Volume (24h)</div>
                                <div className="info-cell-value">
                                    <span>$6.15 B</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">In Circulation</div>
                                <div className="info-cell-value">
                                    <span>16.9 M</span>
                                </div>
                            </div>
                            <div className="info-cell">
                                <div className="info-cell-title">Max Quantity</div>
                                <div className="info-cell-value">
                                    <span>21,000,000</span>
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