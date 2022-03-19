import React from "react";
import { Component } from "react";
import { Market } from "../Market/Market";
import { Footer } from "../Shared/Components/Layouts/Footer";
import { Navbar } from "../Shared/Components/Layouts/Navbar";
import firebaseService from "../Shared/Services/FirebaseService";
import { CoinList } from "./Components/CoinList/CoinList";
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
      console.log("🚀 ~ file: Home.jsx ~ line 23 ~ Home ~ .then ~ res", res)
      this.setState({
        coinListBinance: res
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { coinListBinance } = this.state;
    return (
      <>
        <CoinList coinListBinance={coinListBinance} />
        <Footer />
      </>
    );
  }
}
