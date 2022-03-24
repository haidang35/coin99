import React, { Component } from "react";
import { formatCryptoUSDCurrency } from "../../../../../Helpers/helpers";
import { coinLogo } from "../../../../../Helpers/logo";

export class CoinHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { coinDetails } = this.props;
    if(coinDetails !== null) {
        coinDetails['symbol'] = coinDetails.symbol.replace('USDT', '');
    }
    return (
      <>
        <div
          className="page_header"
          data-parallax-bg-image="http://cryptomarkethtml.bdtask.com/assets/img/1920x650-5.jpg"
          data-parallax-direction=""
          style={{
            backgroundImage:
              "url('http://cryptomarkethtml.bdtask.com/assets/img/1920x650-5.jpg')",
          }}
        >
          <div className="header-content">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="haeder-text">
                    <div className="company-icon">
                      <img
                        src={ coinDetails !== null ? coinLogo[coinDetails.symbol] : ''}
                        alt=""
                      />
                    </div>
                    <div className="company">
                      {coinDetails !== null ? coinDetails.symbol : ""}
                    </div>
                    <div className="company-valu">
                      <div className="company-value-title">Current Price</div>
                      <div className="company-value-current">
                        {coinDetails !== null
                          ? formatCryptoUSDCurrency(coinDetails.lastPrice)
                          : ""}

                        {coinDetails !== null ? (
                          coinDetails.priceChangePercent > 0 ? (
                            <span className="company-value-change">
                              +{coinDetails.priceChangePercent}%
                            </span>
                          ) : (
                            <span className="company-value-change" style={{color: 'red'}}>
                              {coinDetails.priceChangePercent}%
                            </span>
                          )
                        ) : (
                          ""
                        )}
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
    );
  }
}
