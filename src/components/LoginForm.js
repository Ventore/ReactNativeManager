import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { Card, Input, CardSection, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChanged(email);
  }
  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }
  onLogin() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@example.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            secureTextEntry
          />
        </CardSection>
        {this.props.error ? (
          <CardSection>
            <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>
              {this.props.error}
            </Text>
          </CardSection>
        ) : null}
        <CardSection>
          {this.props.loading ? (
            <Spinner size={'small'} />
          ) : (
            <Button onPress={this.onLogin.bind(this)}>Log In</Button>
          )}
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  ({ auth }) => {
    const { email, password, error, user, loading } = auth;
    return {
      email,
      password,
      error,
      user,
      loading,
    };
  },
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
