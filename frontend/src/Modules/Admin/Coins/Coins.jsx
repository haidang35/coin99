import React, { Component } from "react";  
import { CoinList } from "../../Public/Home/Components/CoinList/CoinList";
import { CoinsListAdmin } from "./Components/CoinsListAdmin";
import { ShowCoin } from "./Components/ShowCoin";

export class Coins extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    render(){
        return(
            <>
            <CoinsListAdmin />
            <ShowCoin />
            </>
        )
    }
}