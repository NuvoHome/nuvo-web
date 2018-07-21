import React, { Component, PropTypes } from "react";
import { Redirect } from "react-router-dom";
import OktaSignInWidget from "../components/OktaSignInWidget";
import { withAuth } from "@okta/okta-react";
import Article from "grommet/components/Article";
import Box from "grommet/components/Box";
import Section from "grommet/components/Section";
import NavHeader from "../components/NavHeader";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.state = {
      authenticated: null
    };
    this.checkAuthentication();
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess(res) {
    if (res.status === "SUCCESS") {
      return this.props.auth.redirect({
        sessionToken: res.session.token
      });
    }
  }

  onError(err) {
    console.log("error logging in", err);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  render() {
    const articleStyle = {
      backgroundColor: "#F5F5F5"
    };
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ? (
      <Redirect to={{ pathname: "/dashboard" }} />
    ) : (
      <Article style={articleStyle}>
        <NavHeader isHomepage={false} />

        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        >
          <Box direction="row" justify="center" align="center" margin="medium">
            <OktaSignInWidget
              baseUrl={this.props.baseUrl}
              onSuccess={this.onSuccess}
              onError={this.onError}
            />
          </Box>
        </Section>
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        />
      </Article>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.func,
  baseUrl: PropTypes.string.isRequired
};

Login.defaultProps = {
  auth: () => { 
    return;
  },
  baseUrl: "https://dev-318806.oktapreview.com"
};

export default withAuth(Login);
