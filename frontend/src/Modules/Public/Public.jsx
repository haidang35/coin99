import React from "react";
import { Component } from "react";
import { Home } from "./Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Market } from "./Market/Market";
import Navbar  from "./Shared/Components/Layouts/Navbar";
import { Slider } from "../Public/Shared/Components/Slider/Slider";
import Coin from "./Coin/Components/Coin";
import { Contact } from "./Contact/Contact";
import { Abouts } from "./About/Abouts";
import { LenDing } from "./Lending/LenDing";
import { Blog } from "./Blog/Blog";
import BlogDetails from "./Blog/Components/BlogDetails";
import { Accounts } from "../Admin/Auth/Tests/Accounts";
import { SingUp } from "./Account/Components/SignUp/SignUp";
import { SignIn } from "./Account/Components/SignIn/SignIn";
import authService from "../Admin/Auth/Services/AuthService";
import { useState } from "react";
import { Footer } from "./Shared/Components/Layouts/Footer";

export function Public() {
  const [currentUser, setCurrentUser] = useState('');
  useState(async () => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken !== null && accessToken !== "") {
      await authService
        .getAuthUser(accessToken)
        .then((res) => {
          localStorage.setItem("current_user_id", res.data.Id);
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar currentUser={currentUser} />
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
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/abouts" exact>
            <Abouts />
          </Route>
          <Route path="/lending" exact>
            <LenDing />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SingUp />
          </Route>
          <Route path="/:slug" exact>
            <BlogDetails />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}
