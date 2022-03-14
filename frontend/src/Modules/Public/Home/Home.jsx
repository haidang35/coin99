import React from "react";
import { Component } from "react";
import { Market } from "../Market/Market";
import { Footer } from "../Shared/Components/Layouts/Footer";
import { Navbar } from "../Shared/Components/Layouts/Navbar";
import { CoinList } from "./Components/CoinList/CoinList";
import { Slider } from "./Components/Slider/Slider";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Slider />
        <CoinList />
        <Footer />
      </>
    );
  }
}
