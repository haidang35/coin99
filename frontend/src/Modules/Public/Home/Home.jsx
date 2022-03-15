import React from "react";
import { Component } from "react";
import { Market } from "../Market/Market";
import { Footer } from "../Shared/Components/Layouts/Footer";
import { Navbar } from "../Shared/Components/Layouts/Navbar";
import { CoinList } from "./Components/CoinList/CoinList";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <CoinList />
        <Market />
        <Footer />
      </>
    );
  }
}
