import React, { Component } from "react";
import Header from "grommet/components/Header";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Image from "grommet/components/Image";
import Button from "grommet/components/Button";
import { withAuth } from '@okta/okta-react';

export default class NavHeader extends Component {
  constructor(props) {
    super(props);
    (this.props.isHomepage) ?
      this.state = {
        backgroundColor: 'transparent',
        color: '#FFF',
        image: 'https://s3.amazonaws.com/assets.nuvo.app/img/nuvo_white.svg',
        boxShadow: ''
      } : this.state = {
        backgroundColor: 'white',
      color: '#333333',
      image: 'https://s3.amazonaws.com/assets.nuvo.app/img/nuvo_black.svg',
        boxShadow: ''
      }
    

  }
  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll());
  }
  

  handleScroll() {
    console.log(window.pageYOffset);
    console.log(this.props.isHomepage);
    if (this.props.isHomepage == true) {
    (window.pageYOffset >= 100) ? this.setState({
      backgroundColor: 'white',
      color: '#333333',
      image: 'https://s3.amazonaws.com/assets.nuvo.app/img/nuvo_black.svg',
      boxShadow: '0 3px 5px rgba(57, 63, 72, 0.3)'
    }) : this.setState({
      backgroundColor: 'transparent',
      color: '#FFF',
      image: 'https://s3.amazonaws.com/assets.nuvo.app/img/nuvo_white.svg',
      boxShadow: ''
    })
  }
  }


  render() {
    // console.log(this.state)


 
    
    const headerStyle = {
      backgroundColor: this.state.backgroundColor,
      boxShadow: this.state.boxShadow
    };

    const logoStyle = {
      height: '45px',
    }

    const anchorStyle = {
      color: this.state.color,
      margin: '0.5em 1em 0px 0px',
      fontWeight: 'bold'
    }

    const buttonStyle = {
      // backgroundColor: '#50E3C2',
      // borderColor: '#50E3C2',
      // color: this.state.color
    }

  
    return (
      <Header
        fixed={true}
        float={true}
        splash={false}
        size="xsmall"
        style={headerStyle}
        ref='header'
      >
        <Anchor href="/"><Image style={logoStyle} size="small" src={this.state.image}/> </Anchor>
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
                        
                        <Anchor style={anchorStyle} href="/login">Login</Anchor>  

          <Button
            label="Sign Up"
            href="/signup"
            primary={true}
            secondary={false}
            style={buttonStyle}
          />


        </Box>
      </Header>
    );
  }
}


