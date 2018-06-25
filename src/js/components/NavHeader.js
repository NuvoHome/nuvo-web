import React, { Component } from "react";
import Header from "grommet/components/Header";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Image from "grommet/components/Image";
import Button from "grommet/components/Button";

class NavHeader extends Component {
  render() {
    return (
      <Header fixed={true} float={false} splash={false} size="small">
        <Image size="small" src={require("../img/nuvo_black_1.png")} />
        <Anchor href="#">How it Works</Anchor>
        <Anchor href="#">About Us</Anchor>
        <Anchor href="#">Support</Anchor>
        <Box flex={true} justify="end" direction="row" responsive={false}>
          <Button
            label="Buy"
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
