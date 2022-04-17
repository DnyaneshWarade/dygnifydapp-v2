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
import LandingPage from "./investor/LandingPage";
import CompanyInfo from "./investor/CompanyInfo";
import KYC from "./investor/KYC";
import Wallet from "./investor/Wallet";
import Dashboard from "./investor/Dashboard";
import Disbursement from "./investor/Disbursement";

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
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/info" component={CompanyInfo} />
        <Route exact path="/kyc" component={KYC} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/disbursement" component={Disbursement} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
