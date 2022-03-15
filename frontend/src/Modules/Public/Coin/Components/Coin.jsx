import React, { Component }  from "react";
import { CoinDetails } from "./CoinDetails/CoinDetails";
import { CoinHeader } from "./CoinHeader/CoinHeader";
import { CoinPricing } from "./CoinPricing/CoinPricing";

export class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const { location } = this.props;
        console.log(this.props);
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