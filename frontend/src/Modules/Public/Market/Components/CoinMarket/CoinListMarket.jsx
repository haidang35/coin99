import { onValue, ref } from "firebase/database";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { PATH_ENDPOINT, realtimeDb } from "../../../../../Configs/firebase";
import { formatCryptoUSDCurrency } from "../../../../../Helpers/helpers";
import { coinLogo } from "../../../../../Helpers/logo";
import "./CoinListMarket.scss";

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
          coinValue['symbol'] = coinValue['symbol'].replace('USDT', '');
          coinValue['key'] = snapshotChild.key;
          console.log(coinValue)
          coinValue['currency'] = '$';
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
    console.log(coinDetail);
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
        <div className="currency-table" id="coin-list-market">
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
                        <th>24h Volume</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coinList.map((coin, index) => {
                        
                        return (
                          <tr data-href="#" className="coin-market-item" key={index} onClick={() => this.redirectToCoinDetail(coin)}>
                            <td>
                              <div className="logo-name">
                                <div className="item-logo">
                                  <img
                                    src={coinLogo[coin.symbol]}
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
                                { `${ formatCryptoUSDCurrency(coin.lastPrice) }`}
                              </span>
                            </td>
                            <td>
                              <span className={coin.priceChangePercent > 0 ? 'value_d1_return percent_positive' : 'value_d1_return percent_negative' }>
                                {`${coin.priceChangePercent} %`}
                              </span>
                            </td>
                            <td>
                              {`${formatCryptoUSDCurrency(coin.volume.toFixed(2))}M`}
                            </td>
                          </tr>
                        );
                      })}
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
