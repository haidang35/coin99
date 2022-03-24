import React from "react";
import { Component } from "react";
import { Home } from "./Home/Home";
import styles from "./Shared/Styles/Public.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Market } from "./Market/Market";
import { Navbar } from "./Shared/Components/Layouts/Navbar";
import { Slider } from "../Public/Shared/Components/Slider/Slider";
import Coin from "./Coin/Components/Coin";
import { Contact } from "./Contact/Contact";
import { Abouts } from "./About/Abouts";
import { LenDing } from "./Lending/LenDing";
import { Blog } from "./Blog/Blog";
import { BlogDetails } from "./Blog/Components/BlogDetails";
import { Accounts } from "../Admin/Account/Accounts";
import { LogIn } from "../Admin/Account/Components/LogIn";
import { Register } from "../Admin/Account/Components/Register";


export function Public() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/coin-market" exact>
            <Market />
          </Route>
          <Route path="/coin-market/:symbol" exact>
            <Coin />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
          <Route path="/Abouts" exact>
            <Abouts />
          </Route>
          <Route path="/Lending" exact>
            <LenDing />
          </Route>
          <Route path="/Blog" exact>
            <Blog />
          </Route>
          <Route path="/Blog-details" exact>
            <BlogDetails />
          </Route>
          <Route path="/Login-admin" exact>
            <Accounts />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
