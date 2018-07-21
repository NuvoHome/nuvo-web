import React, { Component, PropTypes } from "react";
import Anchor from "grommet/components/Anchor";
import Article from "grommet/components/Article";
import Box from "grommet/components/Box";
import Header from "grommet/components/Header";
import { withAuth } from "@okta/okta-react";
import Sidebar from "grommet/components/Sidebar";
import Title from "grommet/components/Title";
import Menu from "grommet/components/Menu";
import Footer from "grommet/components/Footer";
import Button from "grommet/components/Button";
import User from "grommet/components/icons/base/User";
import Split from "grommet/components/Split";

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
    this.props.auth.logout();
  }

  render() {
    const { intl } = this.context;

    const loginLink = this.state.authenticated ? (
      <Anchor onClick={this.logout}>Logout</Anchor>
    ) : (
      <Anchor onClick={this.login}>Login</Anchor>
    );

    return (
      <Article primary={true}>
        <Split separator={false} flex="right" fixed={false}>
          <Box
            colorIndex="neutral-1"
            justify="center"
            align="center"
            pad="medium"
          >
            <Sidebar colorIndex="neutral-1" fixed={false}>
              <Header pad="medium" justify="between">
                <Title>Title</Title>
              </Header>
              <Box flex="grow" justify="start">
                <Menu primary={true}>
                  <Anchor href="#" className="active">
                    First
                  </Anchor>
                  <Anchor href="#">Second</Anchor>
                  <Anchor href="#">Third</Anchor>
                </Menu>
              </Box>
              <Footer pad="medium">
                <Button icon={<User />} />
              </Footer>
            </Sidebar>
          </Box>
          <Box
            colorIndex="neutral-2"
            justify="center"
            align="center"
            pad="medium"
          >
            {loginLink}
          </Box>
        </Split>
      </Article>
    );
  }
}

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default withAuth(Dashboard);
