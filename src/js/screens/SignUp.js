import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Header from 'grommet/components/Header';
import LoginForm from 'grommet/components/LoginForm';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Button from "grommet/components/Button";
import Box from 'grommet/components/Box';
import { login } from '../actions/session';
import { navEnable } from '../actions/nav';
import { pageLoaded } from './utils';
import NavHeader from '../components/NavHeader';


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
    const articleStyle = {
      backgroundColor: "#F5F5F5"
    }

    return (
         <Article style={articleStyle}>
         <NavHeader isHomepage={false} />
         <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        >

        </Section>
         <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        >
           <Box direction="row" justify="center" align="center" margin="medium">

         <Form>
  <Header>
    <Heading>
      Sign Up
    </Heading>
  </Header>
  <FormFields>
  <FormField label='First Name'>
    <TextInput />
  </FormField>
  <FormField label='Last Name'>
    <TextInput />
  </FormField>
  <FormField label='Email'>
    <TextInput />
  </FormField>
  <FormField label='Password'>
    <TextInput />
  </FormField>
  </FormFields>
  <Footer pad={{"vertical": "medium"}}>
    <Button label='Submit'
      type='submit'
      primary={true}
      />
      
  </Footer>
  <Box>
    <Anchor href="/login">Already a member? Login</Anchor></Box>
</Form>   
          </Box>
          </Section>
          <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        >

        </Section>
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        >

        </Section>
        </Article>
    )
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
