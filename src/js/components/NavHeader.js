import React, { Component } from "react";
import Header from "grommet/components/Header";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Image from "grommet/components/Image";
import Button from "grommet/components/Button";

class NavHeader extends Component {
  render() {
    const headerStyle = {
      backgroundColor: "transparent"
    };

    const logoStyle = {
      height: '45px'
    }

    const anchorStyle = {
      color: '#FFF',
      margin: '0.5em 1em 0px 0px',
      fontWeight: 'bold'
    }

 
    return (
      <Header
        fixed={true}
        float={true}
        splash={false}
        size="xsmall"
        style={headerStyle}
      >
        <Image style={logoStyle} size="small" src={require("../img/nuvo_white.svg")} />

        <Anchor style={anchorStyle} href="#">How it Works</Anchor>

        {/* <Anchor href="#">About Us</Anchor> */}
        <Anchor style={anchorStyle} href="#">Contact Us</Anchor>


        <Box
          flex={true}
          justify="end"
          direction="row"
          responsive={false}
          margin={"small"}
        >
                        <Anchor style={anchorStyle} href="#">Login</Anchor>

          <Button
            label="Sign Up"
            onClick={e => true}
            href="#"
            primary={true}
            secondary={false}
          />
        </Box>
      </Header>
    );
  }
}

export default NavHeader;
