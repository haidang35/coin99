import React from "react";
import { Component } from "react";
import { Market } from "../Market/Market";
import { Footer } from "../Shared/Components/Layouts/Footer";
import { Navbar } from "../Shared/Components/Layouts/Navbar";
import { Slider } from "../Shared/Components/Slider/Slider";
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
    this.testCallApiPost();
  }

  testCallApiPost = () => {
    fetch('https://localhost:44340/api/posts')
    .then((res) => res.json())
    .then((res) => {
      console.log('data', res);
    });
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
        <CoinList coinListBinance={coinListBinance} />
        <Footer />
      </>
    );
  }
}
