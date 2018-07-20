import React, { Component, PropTypes } from "react";
import Anchor from "grommet/components/Anchor";
import Article from "grommet/components/Article";
import Box from "grommet/components/Box";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import Paragraph from "grommet/components/Paragraph";
import { getMessage } from "grommet/utils/Intl";
import { withAuth } from "@okta/okta-react";
import NavControl from "../components/NavControl";
import { loadDashboard, unloadDashboard } from "../actions/dashboard";
import { pageLoaded } from "./utils";

export default withAuth(
  class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
        console.log(this.props.auth.getAccessToken());
        console.log(this.state);
      }
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    async login() {
      // Redirect to '/' after login
      this.props.login("/dashboard");
    }

    async logout() {
      // Redirect to '/' after logout
      this.props.logout();
    }

    componentDidMount() {
      pageLoaded("Dashboard");
      this.props.dispatch(loadDashboard());
    }

    componentWillUnmount() {
      this.props.dispatch(unloadDashboard());
    }

    render() {
      const { intl } = this.context;

      const button = this.state.authenticated ? (
        <button onClick={this.logout}>Logout</button>
      ) : (
        <button onClick={this.login}>Login</button>
      );

      return (
        <Article primary={true}>
          <Header
            direction="row"
            justify="between"
            size="large"
            pad={{ horizontal: "medium", between: "small" }}
          >
            <NavControl />
          </Header>
          <Box pad="medium">
            <Heading tag="h3" strong={true}>
              Running Tasks
            </Heading>
            <Paragraph size="large">
              The backend here is using request polling (5 second interval). See{" "}
              <Anchor path="/tasks" label={getMessage(intl, "Tasks")} /> page
              for an example of websocket communication.
            </Paragraph>
          </Box>
          {button}
        </Article>
      );
    }
  }
);
