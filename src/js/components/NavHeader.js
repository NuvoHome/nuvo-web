import React, { Component, PropTypes } from "react";
import Header from "grommet/components/Header";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Image from "grommet/components/Image";
import Button from "grommet/components/Button";
import { withAuth } from "@okta/okta-react";
import Menu from "grommet/components/Menu";
import MenuIcon from "grommet/components/icons/base/Menu";
import { Redirect } from "react-router-dom";

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.props.isHomepage
      ? (this.state = {
          backgroundColor: "transparent",
          color: "#FFF",
          image: "http://localhost:3000/img/nuvo_white.svg",
          boxShadow: "",
          authenticated: null
        })
      : (this.state = {
          backgroundColor: "white",
          color: "#333333",
          image: "http://localhost:3000/img/nuvo_black.svg",
          boxShadow: "",
          authenticated: null
        });
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

  async login() {
    // Redirect to '/' after login
  }

  async logout() {
    // Redirect to '/' after logout
    this.props.auth.logout();
    location.reload();

  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    if (this.props.isHomepage === true) {
      window.pageYOffset >= 100
        ? this.setState({
            backgroundColor: "white",
            color: "#333333",
            image: "http://localhost:3000/img/nuvo_black.svg",
            boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)"
          })
        : this.setState({
            backgroundColor: "transparent",
            color: "#FFF",
            image: "http://localhost:3000/img/nuvo_white.svg",
            boxShadow: ""
          });
    }
  }

  render() {
    const anchorStyle = {
      color: "#333",
      margin: "0.5em 1em 0px 0px",
      fontWeight: "bold"
    };

    console.log(this.state.image);
    const headerStyle = {
      backgroundColor: this.state.backgroundColor,
      boxShadow: this.state.boxShadow
    };

    const logoStyle = {
      height: "50px"
    };

    const buttonStyle = {
      backgroundColor: "#50E3C2",
      borderColor: "#50E3C2",
      color: "#FFF",
      marginRight: "0px"
    };

    const menuStyle = {
      marginRight: "1em"
    };
    const loginLink = this.state.authenticated ? (
      <Anchor style={anchorStyle} onClick={this.logout}>
        Logout
      </Anchor>
    ) : (
      <Anchor style={anchorStyle} href="/login" onClick={this.login}>
        Login
      </Anchor>
    );

    const signUp = this.state.authenticated ? null : (
      <Button
        label="Sign Up"
        href="/signup"
        primary={true}
        secondary={false}
        style={buttonStyle}
      />
    );

    return (
      <Header
        fixed={true}
        float={true}
        splash={false}
        size="xsmall"
        style={headerStyle}
      >
        <Anchor href="/">
          <Image size="small" style={logoStyle} src={this.state.image} />{" "}
        </Anchor>

        {/* <Anchor style={anchorStyle} href="#">
          How it Works
        </Anchor>
        <Anchor style={anchorStyle} href="#">
          Contact Us
        </Anchor> */}
        <Box
          flex={true}
          justify="end"
          direction="row"
          responsive={false}
          margin={"none"}
        >
          {signUp}
        </Box>
        <Box
          flex={false}
          justify="end"
          direction="row"
          responsive={false}
          margin={"none"}
        >
          <Menu style={menuStyle} responsive={true} icon={<MenuIcon />}>
            {loginLink}          
          </Menu>
        </Box>
      </Header>
    );
  }
}

NavHeader.propTypes = {
  isHomepage: PropTypes.bool.isRequired
};

NavHeader.defaultProps = {
  isHomepage: false
};

export default withAuth(NavHeader);
