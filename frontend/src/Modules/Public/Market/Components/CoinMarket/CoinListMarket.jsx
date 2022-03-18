import { onValue, ref } from "firebase/database";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { PATH_ENDPOINT, realtimeDb } from "../../../../../Configs/firebase";

export class CoinListMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinList: [],
      isRedirect: false,
      coinDetail: null
    };
  }

  componentDidMount() {
    this.getCoinList();
  }

  getCoinList = () => {
    const coinListRef = ref(realtimeDb, PATH_ENDPOINT.COINLIST_BINANCE);
    onValue(coinListRef, (snapshot) => {
      let coinListConverted = [];
      snapshot.forEach((snapshotChild) => {
          let coinValue = snapshotChild.val();
          coinValue['key'] = snapshotChild.key;
         coinListConverted.push(coinValue);
      });
      this.setState({
        coinList: coinListConverted,
      });
    });
  };

  redirectToCoinDetail = (coin) => {
    this.setState({
        coinDetail: coin,
        isRedirect: true
    });
  }

  render() {
    const { coinList, coinDetail, isRedirect } = this.state;
    if(isRedirect) {
        return <Redirect to={{
            pathname: `/coin-market/${coinDetail.symbol}`,
            state: {
                coinKey: coinDetail.key
            }
        }} />
    }
    return (
      <>
        <div className="currency-table">
          <div className="with-nav-tabs currency-tabs">
            <div className="tab-header">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="#crypto" data-toggle="tab">
                    Crypto
                  </a>
                </li>
                <li>
                  <a href="#forex" data-toggle="tab">
                    Forex
                  </a>
                </li>
                <li>
                  <a href="#stocks" data-toggle="tab">
                    Stocks
                  </a>
                </li>
              </ul>
            </div>
            <div className="container">
              <div className="tab-content">
                <div className="tab-pane fade in active" id="crypto">
                  <table
                    id="cryptoTable"
                    className="table table-striped table-hover nowrap"
                  >
                    <thead>
                      <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>24h change</th>
                        <th>Graph</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coinList.map((coin, index) => {
                        return (
                          <tr data-href="#" key={index} onClick={() => this.redirectToCoinDetail(coin)}>
                            <td>
                              <div className="logo-name">
                                <div className="item-logo">
                                  <img
                                    src="../../../../../Assets/Public/assets/img/coin-logo/BTC.svg"
                                    className="img-responsive"
                                    alt=""
                                  />
                                </div>
                                <span className="item_name_value">
                                  {coin.symbol}
                                </span>
                              </div>
                            </td>
                            <td>
                              <span className="value_ticker">
                                {coin.lastPrice}
                              </span>
                            </td>
                            <td>
                              <span className="value_d1_return percent_positive">
                                {coin.priceChangePercent}
                              </span>
                            </td>
                            <td>
                              <span className="value_graph">
                                <svg viewBox="0 0 500 100" className="chart">
                                  {" "}
                                  <polyline
                                    fill="none"
                                    stroke="#35a947"
                                    strokeWidth={5}
                                    points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                                  />{" "}
                                </svg>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade" id="forex">
                  <table
                    id="forexTable"
                    className="table table-striped table-hover nowrap"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Ticker</th>
                        <th>Bid</th>
                        <th>Ask</th>
                        <th>Spread</th>
                        <th>1D change</th>
                        <th>Graph</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/EURGBP.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">EUR/GBP</span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">EURGBP</span>
                        </td>
                        <td>
                          <span className="value_price">0.88621</span>
                        </td>
                        <td>
                          <span className="value_cap">0.88649</span>
                        </td>
                        <td>
                          <span className="value_spread">0.032%</span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            +0.77%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade" id="stocks">
                  <table
                    id="stocksTable"
                    className="table table-striped table-hover nowrap"
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Capitalization</th>
                        <th>Industry</th>
                        <th>1D change</th>
                        <th>Graph</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/AAPL.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">Apple Inc.</span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">AAPL</span>
                        </td>
                        <td>
                          <span className="value_price">$8,874.19</span>
                        </td>
                        <td>
                          <span className="value_cap">$150.36 B</span>
                        </td>
                        <td>
                          <span className="value_overflow">
                            Information Technology
                          </span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            +13.08%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/GOOG.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">
                              Alphabet Inc.
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">GOOGL</span>
                        </td>
                        <td>
                          <span className="value_price">$864.14</span>
                        </td>
                        <td>
                          <span className="value_cap">$85.68 B</span>
                        </td>
                        <td>
                          <span className="value_overflow">
                            Information Technology
                          </span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            +6.82%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/AMZN.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">Amazon</span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">AMZN</span>
                        </td>
                        <td>
                          <span className="value_price">$1.06</span>
                        </td>
                        <td>
                          <span className="value_cap">$43.16 B</span>
                        </td>
                        <td>
                          <span className="value_overflow">
                            Consumer Discretionary
                          </span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            +43.04%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/FB.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">Facebook</span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">FB</span>
                        </td>
                        <td>
                          <span className="value_price">$145.25</span>
                        </td>
                        <td>
                          <span className="value_cap">$8.05 B</span>
                        </td>
                        <td>
                          <span className="value_overflow">
                            Information Technology
                          </span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_negative">
                            -11.53%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#e34828"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/MSFT.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">
                              Microsoft Corporation
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">MSFT</span>
                        </td>
                        <td>
                          <span className="value_price">$0.04</span>
                        </td>
                        <td>
                          <span className="value_cap">$2.73 B</span>
                        </td>
                        <td>
                          <span className="value_overflow">
                            Information Technology
                          </span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_negative">
                            -18.58%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#e34828"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/BTG.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">
                              Bitcoin Gold
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">BTG</span>
                        </td>
                        <td>
                          <span className="value_price">$108.07</span>
                        </td>
                        <td>
                          <span className="value_cap">$381,159</span>
                        </td>
                        <td>
                          <span className="value_max_quantity">Unlimited</span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            -12.93%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/qtum.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">Qtum</span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">BTG</span>
                        </td>
                        <td>
                          <span className="value_price">$108.07</span>
                        </td>
                        <td>
                          <span className="value_cap">$381,159</span>
                        </td>
                        <td>
                          <span className="value_max_quantity">Unlimited</span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_negative">
                            -12.93%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#e34828"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/stellar.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">Stellar</span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">XLM</span>
                        </td>
                        <td>
                          <span className="value_price">$0.35</span>
                        </td>
                        <td>
                          <span className="value_cap">$6.69 B</span>
                        </td>
                        <td>
                          <span className="value_max_quantity">103.27 B</span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            -13.7%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/DASH.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">Dash</span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">DASH</span>
                        </td>
                        <td>
                          <span className="value_price">$578.69</span>
                        </td>
                        <td>
                          <span className="value_cap">$4.55 B</span>
                        </td>
                        <td>
                          <span className="value_max_quantity">18.9 M</span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            -13.21%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/ETC.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">
                              Ethereum Classic
                            </span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">ETC</span>
                        </td>
                        <td>
                          <span className="value_price">$22.23</span>
                        </td>
                        <td>
                          <span className="value_cap">$2.21 B</span>
                        </td>
                        <td>
                          <span className="value_max_quantity">Unlimited</span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            -17.05%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/ZEC.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">Zcash</span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">ZEC</span>
                        </td>
                        <td>
                          <span className="value_price">$22.23</span>
                        </td>
                        <td>
                          <span className="value_cap">$2.21 B</span>
                        </td>
                        <td>
                          <span className="value_max_quantity">140.25 M</span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            -17.05%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                      <tr data-href="price.html">
                        <td>
                          <div className="logo-name">
                            <div className="item-logo">
                              <img
                                src="assets/img/coin-logo/neo.svg"
                                className="img-responsive"
                                alt=""
                              />
                            </div>
                            <span className="item_name_value">Neo</span>
                          </div>
                        </td>
                        <td>
                          <span className="value_ticker">NEO</span>
                        </td>
                        <td>
                          <span className="value_price">$22.23</span>
                        </td>
                        <td>
                          <span className="value_cap">$2.21 B</span>
                        </td>
                        <td>
                          <span className="value_max_quantity">140.25 M</span>
                        </td>
                        <td>
                          <span className="value_d1_return percent_positive">
                            -17.05%
                          </span>
                        </td>
                        <td>
                          <span className="value_graph">
                            <svg viewBox="0 0 500 100" className="chart">
                              {" "}
                              <polyline
                                fill="none"
                                stroke="#35a947"
                                strokeWidth={5}
                                points=" 00,120 20,60 40,80 60,20 80,80 100,80 120,60 140,100 160,90 180,80 200, 110 220, 10 240, 70 260, 100 280, 100 300, 40 320, 0 340, 100 360, 100 380, 120 400, 60 420, 70 440, 80 "
                              />{" "}
                            </svg>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
