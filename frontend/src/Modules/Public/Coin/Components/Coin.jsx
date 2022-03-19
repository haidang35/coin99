import { onValue, ref } from "firebase/database";
import React, { Component }  from "react";
import { useParams, withRouter } from "react-router-dom";
import { realtimeDb } from "../../../../Configs/firebase";
import { CoinDetails } from "./CoinDetails/CoinDetails";
import { CoinHeader } from "./CoinHeader/CoinHeader";
import { CoinPricing } from "./CoinPricing/CoinPricing";

 class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coinDetails: null
        }
    }

    componentDidMount() {
        this.getCoinDetails();
    }

    getCoinDetails = () => {
        const { symbol } = this.props.match.params;
        const coinKey = this.props.location.state.coinKey;
        const coinRef = ref(realtimeDb, `coins/binance/${coinKey}`);
        onValue(coinRef, (snapshot) => {
           console.log("🚀 ~ file: Coin.jsx ~ line 26 ~ Coin ~ onValue ~ snapshot", snapshot.val())
           this.setState({
               coinDetails: snapshot.val(),
           });
        });
    }


    render() {
        const { coinDetails } = this.state;
        return(
            <>
            <CoinHeader coinDetails={coinDetails}/>
            <CoinDetails coinDetails={coinDetails}/>
            <CoinPricing />
            </>
        )
    }

}

export default withRouter(Coin);