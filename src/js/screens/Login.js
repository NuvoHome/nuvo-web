// import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
// import LoginForm from 'grommet/components/LoginForm';
// import Article from 'grommet/components/Article';
// import Section from 'grommet/components/Section';
// import Heading from 'grommet/components/Heading';
// import Paragraph from 'grommet/components/Paragraph';
// import Anchor from 'grommet/components/Anchor';
// import Box from 'grommet/components/Box';
// import { login } from '../actions/session';
// import { navEnable } from '../actions/nav';
// import { pageLoaded } from './utils';


// class Login extends Component {
//   constructor() {
//     super();
//     this._onSubmit = this._onSubmit.bind(this);
//   }

//   componentDidMount() {
//     pageLoaded('Login');
//     this.props.dispatch(navEnable(false));
//   }

//   componentWillUnmount() {
//     this.props.dispatch(navEnable(true));
//   }

//   _onSubmit(fields) {
//     const { dispatch } = this.props;
//     const { router } = this.context;
//     dispatch(login(fields.username, fields.password, () => (
//       router.history.push('/dashboard')
//     )));
//   }

//   render() {
//     const { session: { error } } = this.props;
    // const articleStyle = {
    //   backgroundColor: "#F5F5F5"
    // }

//     return (
//          <Article style={articleStyle}>
//            <Box direction="row" justify="center" align="center" margin="medium">

//          <LoginForm
//             align='start'
//             title='Login'
//             onSubmit={this._onSubmit}
//             errors={[error]}
//             usernameType='email'
//             rememberMe={true}
//             forgotPassword={<Box><Anchor href='#'
//             label='Forgot password?' /><Anchor href="/signup">Not a member? Sign Up</Anchor>
// </Box>          }
//           />

//           </Box>

//         </Article>
//     )
//   }
// }

// Login.defaultProps = {
//   session: {
//     error: undefined
//   }
// };

// Login.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   session: PropTypes.shape({
//     error: PropTypes.string
//   })
// };

// Login.contextTypes = {
//   router: PropTypes.object.isRequired,
// };

// const select = state => ({
//   session: state.session
// });

// export default connect(select)(Login);



import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import OktaSignInWidget from '../components/OktaSignInWidget';
import { withAuth } from '@okta/okta-react';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import NavHeader from '../components/NavHeader';


export default withAuth(class Login extends Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
    this.state = {
      authenticated: null
    };
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  onSuccess(res) {
    if (res.status === 'SUCCESS') {
      return this.props.auth.redirect({
        sessionToken: res.session.token
      });
   } else {
    // The user can be in another authentication state that requires further action.
    // For more information about these states, see:
    //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  }

  onError(err) {
    console.log('error logging in', err);
  }

  

  render() {
    const articleStyle = {
      backgroundColor: "#F5F5F5"
    }
    console.log(this.state)
    if (this.state.authenticated === null) return null;
    return this.state.authenticated ?
      <Redirect to={{ pathname: '/' }}/> :
      <Article style={articleStyle}>
      <NavHeader isHomepage={false}/>
        
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
        onError={this.onError}/>
        </Box>

        </Section>
        <Section
          pad="large"
          justify="center"
          align="center"
          colorIndex="light-2"
        >

        </Section>
        
       
        </Article>;
  }
});
