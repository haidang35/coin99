import React, { Component } from "react";
import nFormatter, { formatCryptoUSDCurrency } from "../../../../../Helpers/helpers";

export class CoinDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { coinDetails } = this.props;
    return (
      <>
        <div className="crypto-details">
          <div className="container">
            <div className="crypto-details-info">
              <div className="info-cell">
                <div className="info-cell-title">1-Day Change</div>
                <div className="info-cell-value">
                  {coinDetails !== null ? (
                    <span
                      className={
                        coinDetails.priceChangePercent > 0
                          ? "percent_positive"
                          : "percent_negative"
                      }
                    >
                        {coinDetails.priceChangePercent > 0 ? '+' : ''}
                      {coinDetails.priceChangePercent}%
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="info-cell">
                <div className="info-cell-title">Open Price</div>
                <div className="info-cell-value">
                  <span className="percent_positive">
                    {coinDetails !== null
                      ? formatCryptoUSDCurrency(
                          coinDetails.openPrice.toFixed(5)
                        )
                      : ""}
                  </span>
                </div>
              </div>
              <div className="info-cell">
                <div className="info-cell-title">High Price</div>
                <div className="info-cell-value">
                  <span className="percent_positive">
                    {coinDetails !== null
                      ? formatCryptoUSDCurrency(
                          coinDetails.highPrice.toFixed(5)
                        )
                      : ""}
                  </span>
                </div>
              </div>
              <div className="info-cell">
                <div className="info-cell-title">Low Price</div>
                <div className="info-cell-value">
                  <span className="percent_negative">
                    {coinDetails !== null
                      ? formatCryptoUSDCurrency(coinDetails.lowPrice.toFixed(5))
                      : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="crypto-details-info">
              <div className="info-cell">
                <div className="info-cell-title">Quote Volume</div>
                <div className="info-cell-value">
                  <span className="percent_negative">
                    {coinDetails !== null
                      ? nFormatter(
                          coinDetails.quoteVolume, 5
                        )
                      : ""}
                  </span>
                </div>
              </div>
              <div className="info-cell">
                <div className="info-cell-title">Volume (24h)</div>
                <div className="info-cell-value">
                  <span>
                    {coinDetails !== null
                      ? formatCryptoUSDCurrency(coinDetails.volume.toFixed(2))
                      : ""}
                  </span>
                </div>
              </div>
              <div className="info-cell">
                <div className="info-cell-title">WeightedAvg Price</div>
                <div className="info-cell-value">
                  <span className="percent_negative">
                    {coinDetails !== null
                      ? formatCryptoUSDCurrency(coinDetails.volume.toFixed(2))
                      : ""}
                  </span>
                </div>
              </div>
              <div className="info-cell">
                <div className="info-cell-title">Max Quantity</div>
                <div className="info-cell-value">
                  <span>{coinDetails !== null ? coinDetails.lastQty : ""}</span>
                </div>
              </div>
            </div>
            <div className="crypto-details-info">
              <div className="info-cell">
                <div className="info-cell-title">Last Price</div>
                <div className="info-cell-value">
                  <span className="percent_negative">
                    {coinDetails !== null
                      ? formatCryptoUSDCurrency(
                          coinDetails.lastPrice.toFixed(5)
                        )
                      : ""}
                  </span>
                </div>
              </div>
              <div className="info-cell">
                <div className="info-cell-title">Close Price</div>
                <div className="info-cell-value">
                  <span className="percent_negative">
                    {coinDetails !== null
                      ? formatCryptoUSDCurrency(
                          coinDetails.prevClosePrice.toFixed(5)
                        )
                      : ""}
                  </span>
                </div>
              </div>
              <div className="info-cell">
                <div className="info-cell-title">Bid Qty</div>
                <div className="info-cell-value">
                  <span className="percent_negative">
                    {coinDetails !== null ? coinDetails.bidQty.toFixed(5) : ""}
                  </span>
                </div>
              </div>
              <div className="info-cell">
                <div className="info-cell-title">Bid Price</div>
                <div className="info-cell-value">
                  <span>
                    {coinDetails !== null
                      ? formatCryptoUSDCurrency(coinDetails.bidPrice.toFixed(5))
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
