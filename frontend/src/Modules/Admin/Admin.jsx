import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
            <Coin99List />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
