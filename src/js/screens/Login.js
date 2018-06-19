import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import LoginForm from 'grommet/components/LoginForm';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Footer from 'grommet/components/Footer';
import Logo from 'grommet/components/icons/Grommet';
import Anchor from 'grommet/components/Anchor';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';

import { login } from '../actions/session';
import { navEnable } from '../actions/nav';
import { pageLoaded } from './utils';


class Login extends Component {
  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentDidMount() {
    pageLoaded('Login');
    this.props.dispatch(navEnable(false));
  }

  componentWillUnmount() {
    this.props.dispatch(navEnable(true));
  }

  _onSubmit(fields) {
    const { dispatch } = this.props;
    const { router } = this.context;
    dispatch(login(fields.username, fields.password, () => (
      router.history.push('/dashboard')
    )));
  }

  render() {
    const { session: { error } } = this.props;

    return (
      <Split flex='left' separator={true}>
      
      {/* <Hero background={<Image src='../../img/carousel-1.png'
  fit='cover'
  full={true} />}
  backgroundColorIndex='dark'>
  <Box direction='row'
    justify='center'
    align='center'>
    <Box basis='1/2'
      align='end'
      pad='medium' />
    <Box basis='1/2'
      align='start'
      pad='medium'>
      <Heading margin='none'>
        Sample Heading
      </Heading>
    </Box>
  </Box>
</Hero> */}

        {/* // <Article>
        //   <Section
        //     full={true}
        //     colorIndex='brand'
        //     texture='url(img/splash.png)'
        //     pad='large'
        //     justify='center'
        //     align='center'
        //   >
        //     <Heading tag='h1' strong={true}>Nuvo Web</Heading>
        //     <Paragraph align='center' size='large'>
        //       Development with Grommet is cool.
        //     </Paragraph>
        //   </Section>
        // </Article> */}

        <Sidebar justify='between' align='center' pad='none' size='large'>
          <span />
          <LoginForm
            align='start'
            logo={<Logo className='logo' colorIndex='brand' />}
            title='Nuvo Web'
            onSubmit={this._onSubmit}
            errors={[error]}
            usernameType='email'
            rememberMe={true}
            forgotPassword={<Anchor href='#'
            label='Forgot password?' />}
          />
          <Footer
            direction='row'
            size='small'
            pad={{ horizontal: 'medium', vertical: 'small' }}
          >
            <span className='secondary'>&copy; 2017 Grommet Labs</span>
          </Footer>
        </Sidebar>

      </Split>
    );
  }
}

Login.defaultProps = {
  session: {
    error: undefined
  }
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  session: PropTypes.shape({
    error: PropTypes.string
  })
};

Login.contextTypes = {
  router: PropTypes.object.isRequired,
};

const select = state => ({
  session: state.session
});

export default connect(select)(Login);
