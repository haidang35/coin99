import { onValue, ref } from "firebase/database";
import React from "react";
import { Component } from "react";
import { PATH_ENDPOINT, realtimeDb } from "../../../../../Configs/firebase";
import { formatCryptoUSDCurrency } from "../../../../../Helpers/helpers";
import "./CoinBar.scss";

export class CoinBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinList: [],
    };
  }

  componentDidMount() {
    this.getCoinList();
  }

  getCoinList = () => {
    const coinListRef = ref(realtimeDb, PATH_ENDPOINT.COINLIST_BINANCE);
    onValue(coinListRef, (snapshot) => {
      let coinListConverted = [];
      let index = 0;
      snapshot.forEach((snapshotChild) => {
        if (index < 15) {
          let coinValue = snapshotChild.val();
          coinValue["symbol"] = coinValue["symbol"].replace("USDT", "");
          coinValue["key"] = snapshotChild.key;
          coinValue["currency"] = "$";
          coinListConverted.push(coinValue);
        }
        index++;
      });

      this.setState({
        coinList: coinListConverted,
      });
    });
  };

  render() {
    const { coinList } = this.state;
    return (
      <>
        <div id="coin-bar" className="ticker">
          <div className="list-wrpaaer" id="coin-list-bar-1">
            <ul id="marquee-horizontal-1">
              {coinList.map((coin, index) => {
                return (
                  <li className="list-item" key={index}>
                    <div className="list-item-currency">{coin.symbol} </div>
                    <div className="list-item-currency upgrade">
                      <span>
                        {formatCryptoUSDCurrency(coin.lastPrice)}{" "}
                        <span className="arrow-up">↗</span>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/* <ul id="marquee-horizontal-2">
              {coinList.map((coin, index) => {
                return (
                  <li className="list-item" key={index}>
                    <div className="list-item-currency">{coin.symbol} </div>
                    <div className="list-item-currency upgrade">
                      <span>
                        {formatCryptoUSDCurrency(coin.lastPrice)}{" "}
                        <span className="arrow-up">↗</span>
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul> */}
          </div>
        </div>
      </>
    );
  }
}
