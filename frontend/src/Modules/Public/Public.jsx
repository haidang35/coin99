import React from "react";
import { Component } from "react";
import { Home } from "./Home/Home";
import styles from "./Shared/Styles/Public.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Market } from "./Market/Market";
import { Navbar } from "./Shared/Components/Layouts/Navbar";
import { Slider } from "../Public/Shared/Components/Slider/Slider";
import { Coin } from "./Coin/Components/Coin";


export class Public extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <>
                <BrowserRouter >
                <Navbar />
                <Slider />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/coin-market" exact element={<Market />} />
                        <Route path="/coin-market/:id" exact element={<Coin />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}