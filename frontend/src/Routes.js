import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Borrow from "./borrow/Borrow";
import Home from "./home/Home";
import Token from "./home/Token";
import Overview from "./tinlake/components/overview/Overview";
import Test from "./tinlake/Test"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pool" component={Home} />
        <Route exact path="/borrow" component={Borrow} />
        <Route exact path="/token" component={Token} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/overview" component={Overview} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
