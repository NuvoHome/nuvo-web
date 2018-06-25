import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "grommet/components/App";
import Login from "../screens/Login";
import Dashboard from "../screens/Dashboard";
import Tasks from "../screens/Tasks";
import Task from "../screens/Task";
import NotFound from "../screens/NotFound";
import Homepage from "../screens/Homepage";
import NavHeader from "../components/NavHeader";
import NavFooter from "../components/NavFooter";
import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import "../../../node_modules/grommet-css";

class Main extends Component {
  render() {
    return (
      <App centered={false} inline={true}>
        <Article>
          <NavHeader />
          <Section pad="small">
            <Router>
              <Switch>
                <Route exact={true} path="/" component={Homepage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/tasks/:id" component={Task} />
                <Route path="/tasks" component={Tasks} />
                <Route path="/*" component={NotFound} />
              </Switch>
            </Router>
          </Section>
        </Article>
        <NavFooter />
      </App>
    );
  }
}

export default Main;
