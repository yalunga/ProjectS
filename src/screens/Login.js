import React, { Component } from 'react';
import {
  connect,
} from 'react-redux';
import {
  View,
  Image,
} from 'react-native';
import {
  Input,
  Button,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { login, clearLoginErrors, LOGIN } from '../Reducers/User/UserActions';
import {
  getLoginErrors,
  getLoggedInUser,
} from '../Reducers/User/UserSelectors';

const mapStateToProps = state => ({
  loginErrors: getLoginErrors(state),
  user: getLoggedInUser(state.user),
});

const mapDispatchToProps = dispatch => ({
  logUserIn: (email, password, navigation) => login(dispatch, email, password, navigation),
  userAlreadyLoggedIn: user => dispatch({ type: LOGIN, payload: user }),
  clearErrors: () => dispatch(clearLoginErrors()),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  async componentDidMount() {
    const user = await this.props.user;
    if (user) {
      this.props.userAlreadyLoggedIn(user);
      this.props.navigation.navigate({ routeName: 'Home' });
    }
  }

  render() {
    const {
      loginErrors,
      clearErrors,
      logUserIn,
      navigation,
    } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ height: 256, width: 256 }} source={require('../assets/Herd.png')} />
        <Input
          containerStyle={{ width: 300, marginTop: 24 }}
          inputContainerStyle={{ borderColor: '#717C89', borderWidth: 1, borderRadius: 8 }}
          inputStyle={{ marginLeft: 5 }}
          placeholder='Email'
          leftIcon={<Icon name='envelope' size={24} color="#717C89" />}
          value={this.state.email}
          textContentType='emailAddress'
          onChangeText={(value) => this.setState({ email: value })}
          onFocus={() => clearErrors()}
          errorMessage={loginErrors.email && `Email ${loginErrors.email}`}
        />
        <Input
          containerStyle={{ width: 300, marginTop: 24 }}
          inputContainerStyle={{ borderColor: '#717C89', borderWidth: 1, borderRadius: 8 }}
          inputStyle={{ marginLeft: 5 }}
          placeholder='Password'
          secureTextEntry
          leftIcon={<Icon name='lock' size={24} color="#717C89" />}
          value={this.state.password}
          textContentType='password'
          onChangeText={(value) => this.setState({ password: value })}
          onFocus={() => clearErrors()}
          errorMessage={(loginErrors.password) && `Password ${loginErrors.password}`
            || (loginErrors.email_or_password) && `Email or password ${loginErrors.email_or_password}`}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 300, marginTop: 24 }}>
          <Button
            title='Login'
            raised
            containerStyle={{ width: 250 }}
            buttonStyle={{ backgroundColor: '#F76C6C' }}
            onPress={() => logUserIn(this.state.email, this.state.password, navigation)}
          />
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
