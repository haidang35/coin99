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
            console.log(snapshot.val());
        });
    }


    render() {
        return(
            <>
            <CoinHeader />
            <CoinDetails />
            <CoinPricing />
            </>
        )
    }

}

export default withRouter(Coin);