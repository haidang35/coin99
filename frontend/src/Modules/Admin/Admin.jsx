import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BuySell } from "./Dashboard/BuySell";
import { Coin99List } from "./Dashboard/Coin99List";
import { Dashboard } from "./Dashboard/Dashboard";
import styles from "./Shared/Styles/Admin.scss";

export function Admin() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" exact>
            <Dashboard />
          </Route>
          <Route path="/Dashboard">
          <Dashboard />
          </Route>
          <Route  path="/Coin99List">
          <Coin99List />
          </Route>
          <Route path="/BuySell">
            <BuySell />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
