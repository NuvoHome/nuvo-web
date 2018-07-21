import React, { Component } from "react";
import Footer from "grommet/components/Footer";
import Paragraph from "grommet/components/Paragraph";
import Menu from "grommet/components/Menu";
import Box from "grommet/components/Box";
import Image from "grommet/components/Image";

class NavFooter extends Component {
  render() {
    return (
      <Footer justify="center" size="large">
        <Image size="small" src={require("../img/nuvo_black_1.png")} />
        <Box direction="row" align="center" pad={{ between: "medium" }}>
          <Paragraph margin="none">© 2016 Nuvo Inc.</Paragraph>
          <Menu direction="row" size="small" dropAlign={{ right: "right" }}>
            {/* <Anchor href="#">How it Works</Anchor>
            <Anchor href="#">About Us</Anchor>
            <Anchor href="#">Support</Anchor> */}
          </Menu>
        </Box>
      </Footer>
    );
  }
}

export default NavFooter;
