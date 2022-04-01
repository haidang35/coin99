import React from "react";
import { Component } from "react";
import { Market } from "../Market/Market";
import { CoinBar } from "../Shared/Components/CoinBar/CoinBar";
import { Footer } from "../Shared/Components/Layouts/Footer";
import { Navbar } from "../Shared/Components/Layouts/Navbar";
import { Slider } from "../Shared/Components/Slider/Slider";
import firebaseService from "../Shared/Services/FirebaseService";
import { CoinList } from "./Components/CoinList/CoinList";
import { Introduction } from "./Introduction/Introduction";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        coinListBinance: []
    };
  }

  componentDidMount() {
    this.getCoinListBinance();
  }

  getCoinListBinance = async () => {
    await firebaseService.subcribeCoinListChangePriceBinance()
    .then((res) => {
      this.setState({
        coinListBinance: res
      });
    })
    .catch((err) => {
    });
  }

  render() {
    const { coinListBinance } = this.state;
    return (
      <>
        <Slider />
        <CoinBar coinListBinance={coinListBinance}/>
        <Introduction />
        <CoinList coinListBinance={coinListBinance} />
      </>
    );
  }
}
