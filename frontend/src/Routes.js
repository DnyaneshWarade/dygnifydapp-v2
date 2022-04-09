import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Borrow from "./borrow/Borrow";
import Transaction from "./components/transaction/Transaction";
import Home from "./home/Home";
import Token from "./home/Token";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pool" component={Home} />
        <Route exact path="/borrow" component={Borrow} />
        <Route exact path="/token" component={Token} />
        <Route exact path="/test" component={Transaction} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
