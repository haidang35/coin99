import { onValue, ref } from "firebase/database";
import {  Redirect } from "react-router-dom";
import React, { Component } from "react";
import { PATH_ENDPOINT, realtimeDb } from "../../../../Configs/firebase";
import { coinLogo  } from "../../../../Helpers/logo";

export class CoinsListAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinList: [],
            isRedirect: false,
            coinDetail: null
        }
    }
    componentDidMount = () => {
        this.getCoinList();
    }

    getCoinList = () => {
        const coinListRef = ref(realtimeDb, PATH_ENDPOINT.COINLIST_BINANCE);
        onValue (coinListRef, (snapshot) => {
            let coinListConverted = [];
            snapshot.forEach((snapshotChild) => {
                let coinValue = snapshotChild.val();
                coinValue['symbol'] = coinValue['symbol'].replace('USDT', '');
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
                pathname: `/Coins-List-Admin/${coinDetail.symbol}`,
                state: {
                    coinKey: coinDetail.key
                }
            }} 
            />
        }
        return (
            <>

                <div className="col-lg-12">
                    <section className="box">
                        <header className="panel_header">
                            <h2 className="title pull-left">Transactions History</h2>
                            <div className="actions panel_actions pull-right">
                                <a className="box_toggle fa fa-chevron-down" />
                                <a
                                    className="box_setting fa fa-cog"
                                    data-toggle="modal"
                                    href="#section-settings"
                                />
                                <a className="box_close fa fa-times" />
                            </div>
                        </header>
                        <div className="content-body">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="table-responsive" data-pattern="priority-columns">
                                        <table
                                            id="tech-companies-1"
                                            className="table vm trans table-small-font no-mb table-bordered table-striped"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Crypto Trade</th>
                                                    <th>Time</th>
                                                    <th>Status</th>
                                                    <th>Amount</th>
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
                                { `${coin.currency} ${coin.lastPrice}`}
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
                      })};
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../Assets/data/crypto-dash/coin1.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">10:23:45</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge  w-70 round-success">completed</span>
                                                    </td>
                                                    <td className="green-text boldy">+0,041BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin8.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Litecoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">12:53:25</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-warning">Pending</span>
                                                    </td>
                                                    <td className="red-text boldy">-1,176LTC</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin2.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Ethereum</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">04:03:25</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-primary">exchanged </span>
                                                    </td>
                                                    <td className="blue-text boldy">0.023ETH</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin4.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Ripple</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted"> 09:33:02</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-danger">Canceled</span>
                                                    </td>
                                                    <td className="green-text boldy">+107,0XRP</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin1.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">10:23:45</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge  w-70 round-warning">pending</span>
                                                    </td>
                                                    <td className="green-text boldy">-0,098BTC</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin3.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Dashcoin</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">09:33:02</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-success">Completed</span>
                                                    </td>
                                                    <td className="red-text boldy">-2,76DAH</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="round img2">
                                                            <img src="../data/crypto-dash/coin5.png" alt="" />
                                                        </div>
                                                        <div className="designer-info">
                                                            <h6>Bitdash</h6>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <small className="text-muted">09:33:02</small>
                                                    </td>
                                                    <td>
                                                        <span className="badge w-70 round-success">Completed</span>
                                                    </td>
                                                    <td className="green-text boldy">+1,429DAH</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}