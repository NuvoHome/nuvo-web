import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "grommet/components/App";
import NotFound from "../screens/NotFound";
import Homepage from "../screens/Homepage";
import NavFooter from "../components/NavFooter";
import "../../../node_modules/grommet-css";
import ReactGA from "react-ga";
import createHistory from "history/createBrowserHistory";
import { Security, ImplicitCallback, SecureRoute } from "@okta/okta-react";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Dashboard from "../screens/Dashboard";
// import Login from '../screens/Login';
import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true, // set pixel's autoConfig
  debug: false // enable logs
};

const config = {
  issuer: "https://dev-318806.oktapreview.com/oauth2/default",
  redirect_uri: window.location.origin + "/implicit/callback",
  client_id: "0oafq6bbk8QD3sfXz0h7"
};

class Main extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-100486790-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentDidMount() {
    ReactPixel.init("1775588969200429", options);
  }

  render() {
    const history = createHistory();

    history.listen(function(location) {
      window.ga("set", "page", location.pathname + location.search);
      window.ga("send", "pageview", location.pathname + location.search);
    });

    return (
      <App centered={false} inline={true}>
        <Router>
          <Security
            issuer={config.issuer}
            client_id={config.client_id}
            redirect_uri={config.redirect_uri}
          >
            <Switch>
              <Route exact={true} path="/" component={Homepage} />
              <Route
                exact={true}
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-318806.oktapreview.com" />
                )}
              />
              <Route exact={true} path="/signup" component={SignUp} />
              <SecureRoute
                exact={true}
                path="/dashboard"
                component={Dashboard}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </Security>
        </Router>
        <NavFooter />
      </App>
    );
  }
}

export default Main;
