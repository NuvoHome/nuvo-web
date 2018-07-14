import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "grommet/components/App";
import NotFound from "../screens/NotFound";
import Homepage from "../screens/Homepage";
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";
import "../../../node_modules/grommet-css";
import ReactGA from 'react-ga';
import createHistory from "history/createBrowserHistory"
import { Security, ImplicitCallback } from '@okta/okta-react';

const config = {
  issuer: 'https://dev-318806.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{0oafq6bbk8QD3sfXz0h7}'
}

class Main extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize('UA-100486790-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  
  render() {
    var history = createHistory();

    history.listen(function (location) {
      window.ga('set', 'page', location.pathname + location.search);
      window.ga('send', 'pageview', location.pathname + location.search);
  });

    return (
      <App centered={false} inline={true}>
        <NavHeader />
            <Router>
              <Switch>
                <Route exact={true} path="/" component={Homepage} />
                <Route path="/*" component={NotFound} />
              </Switch>
            </Router>
        <NavFooter />
      </App>
    );
  }
}

export default Main;
