import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Borrow from "./borrow/Borrow";
import Home from "./home/Home";
import Token from "./home/Token";
import Mobile from "./sakti/mobile/Mobile";
import VerifyNumber from "./sakti/verifyNumber/VerifyNumber";
import ChooseLanguage from "./sakti/language/ChooseLanguage";
import LoadingScreen from "./sakti/loadingScreen/LoadingScreen";
import LocationPermission from "./sakti/locationPermission/LocationPermission";
import Overview from "./tinlake/components/overview/Overview";
import Test from "./tinlake/Test";
import SignIn from "./user/SignIn";
import DashboardMain from "./user/DashboardMain";
import Logout from "./user/Logout";
import DashboardRepayment from "./user/DashboardRepayment";
import LoanStatement from "./user/LoanStatement";
import DashboardReview from "./user/DashboardReview";
import Welcome from "./sakti/welcome/Welcome";

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
        <Route exact path="/sale" component={Welcome} />
        <Route exact path="/sign" component={DashboardMain} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
