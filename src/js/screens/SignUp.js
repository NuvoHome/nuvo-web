import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Form from "grommet/components/Form";
import FormFields from "grommet/components/FormFields";
import FormField from "grommet/components/FormField";
import TextInput from "grommet/components/TextInput";
import Header from "grommet/components/Header";
import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Heading from "grommet/components/Heading";
import Footer from "grommet/components/Footer";
import Anchor from "grommet/components/Anchor";
import Button from "grommet/components/Button";
import Box from "grommet/components/Box";
import { navEnable } from "../actions/nav";
import NavHeader from "../components/NavHeader";

class SignUp extends Component {
  constructor() {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(navEnable(false));
  }

  componentWillUnmount() {
    this.props.dispatch(navEnable(true));
  }

  _onSubmit(fields) {
    const { dispatch } = this.props;
    dispatch();
  }

  render() {
    const articleStyle = {
      backgroundColor: "#F5F5F5"
    };

    return (
      <Article style={articleStyle}>
        <NavHeader isHomepage={false} />
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        />
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        >
          <Box direction="row" justify="center" align="center" margin="medium">
            <Form>
              <Header>
                <Heading>Sign Up</Heading>
              </Header>
              <FormFields>
                <FormField label="First Name">
                  <TextInput />
                </FormField>
                <FormField label="Last Name">
                  <TextInput />
                </FormField>
                <FormField label="Email">
                  <TextInput />
                </FormField>
                <FormField label="Password">
                  <TextInput />
                </FormField>
              </FormFields>
              <Footer pad={{ vertical: "medium" }}>
                <Button label="Submit" type="submit" primary={true} />
              </Footer>
              <Box>
                <Anchor href="/login">Already a member? Login</Anchor>
              </Box>
            </Form>
          </Box>
        </Section>
      </Article>
    );
  }
}

SignUp.defaultProps = {
  session: {
    error: undefined
  }
};

SignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  session: PropTypes.shape({
    error: PropTypes.string
  })
};

SignUp.contextTypes = {
  router: PropTypes.object.isRequired
};

const select = state => ({
  session: state.session
});

export default connect(select)(SignUp);
